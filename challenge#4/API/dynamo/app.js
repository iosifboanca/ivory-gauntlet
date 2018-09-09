let express = require('express')
let bodyParser = require('body-parser')
let AWS = require('aws-sdk')
let uuid = require('node-uuid')

let init = require('./init.js')
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')

let app = express()
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    res.header("Access-Control-Allow-Credentials", true);
    next()
});


const NOTE_TABLE_NAME = process.env.NOTE_TABLE_NAME;

AWS.config.update({region: process.env.REGION})
let dynamoDb = new AWS.DynamoDB.DocumentClient()



app.get('/notes/note', function (req, res) {
    dynamoDb.scan({TableName: NOTE_TABLE_NAME}, function (err, data) {
        if (err) {
            console.log(err)
            res.status(500).json({
                message: "Could not load notes"
            }).end()
        } else {
            res.json(data['Items'])
        }
    })
})

app.post('/notes/note', function (req, res) {
    dynamoDb.put({
        TableName: NOTE_TABLE_NAME,
        Item: {
            id: uuid.v1(),
            title: req.params.title,
            message: req.params.message
        }
    }, function (err, data) {
        if (err) {
            console.log(err)
            res.status(500).json({
                message: "Could not save note"
            }).end()
        } else {
            res.json(data['Item'])
        }
    })
})

app.put('/notes/note/:noteId', function (req, res) {

    if (!req.params.noteId) {
        res.status(400).json({
            message: "Invalid note ID"
        }).end()
    }

    dynamoDb.put({
        TableName: NOTE_TABLE_NAME,
        Item: {
            id: req.params.noteId,
            title: req.params.title,
            message: req.params.message
        }
    }, function (err, data) {
        if (err) {
            console.log(err)
            res.status(500).json({
                message: "Could not load notes"
            }).end()
        } else {
            res.json(data['Items'])
        }
    })
})

app.get('/notes/note/:noteId', function (req, res) {

    if (!req.params.noteId) {
        res.status(400).json({
            message: "Invalid note ID"
        }).end()
    }
    dynamoDb.get({
        TableName: NOTE_TABLE_NAME,
        Key: {
            id: req.params.noteId
        }
    }, function (err, data) {
        if (err) {
            console.log(err)
            res.status(500).json({
                message: "Could not load note"
            }).end()
        } else {
            if (data['Item']) {
                res.json(data['Item'])
            } else {
                res.status(404).json({
                    message: "The note does not exist"
                })
            }
        }
    })
})

app.get('/notes/init', function (req, res) {
    init.init(dynamoDb)
    res.json({
        message: "Init completed!"
    })
})

app.get('/notes', function (req, res) {
    res.json({
        message: "Welcome to notes API !!"
    })
})

app.listen(3000, function () {
    console.log("App started")
})

module.exports = app
