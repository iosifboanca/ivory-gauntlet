var uuid = require('node-uuid')

const NOTE_TABLE_NAME = process.env.NOTE_TABLE_NAME;

function initData(dynamoDb) {
    createNote(dynamoDb, {
        id: uuid.v1(),
        title: "Bring Booze to boilerroom party",
        message: "or go home"
    })
}

function createNote(dynamoDb, note) {
    dynamoDb.put({
        Item: note,
        TableName: NOTE_TABLE_NAME
    }, (err, data) => {
        if (err) {
            console.log(err)
        }
    })
}


exports.init = initData
