let assert = require('assert')
let { Stack } = require('../index')

let list = new Stack(1, 2, 3)


describe('Initializing stack', () => {
  it('Should check if the stack was initialized', () => {
    assert.notEqual(list, undefined)
    assert.equal(typeof list, 'object')
  })
  it('Should check if the stack have the values assigned during initialization', () => {
    assert.deepEqual(list.storage, { 0: 1, 1: 2, 2: 3 })
    assert.notEqual(list.storage, [, ,])
  })
})

// describe('Stack methods - functionality', ()=>{
//   it('push',()=>{
//   })
// })