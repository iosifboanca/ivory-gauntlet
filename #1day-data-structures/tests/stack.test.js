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

describe('Stack methods - PUSH', ()=>{
  it('Should check if when PUSH is called with no value, no action should be taken', ()=>{
    list.push()
    assert.equal(list.storage[list.count-1],3)
    assert.equal(list.count,3)
  })
  it('Should check if PUSH adds a new value on the top of the stack',()=>{
    list.push(5)
    assert.equal(list.storage[list.count-1],5)
  })
  it('Should check if when PUSH is called the size of the stack changes', ()=>{
    assert.equal(list.count,4)
  })
})

describe('Stack methods - POP', ()=>{
  it('Should check if when POP is called the variable is retrieved', ()=>{
    let i = list.pop()
    assert.equal(i,5)
  })
  it('Should check if when POP is called the size of the stack changes', ()=>{
    assert.equal(list.count,3)
  })
  it('Should check if POP removes the last value and ',()=>{
    assert.equal(list.storage[list.count-1],3)
  })
})

describe('Stack methods - isEmpty', ()=>{
  it('Should check if when isEmpty is called to return true or false accordingly to the value of the list', ()=>{
    assert.equal(list.isEmpty(),false)
    assert.notEqual(list.isEmpty(),true)
  })
})

describe('Stack methods - PEEK', ()=>{
  it('Should check if when PEEK is called to return the last value of the stack without removing it', ()=>{
    assert.equal(list.peek(),3)
  })
})

describe('Stack methods - SIZE', ()=>{
  it('Should check if when SIZE is called to return the amount of values in the stack', ()=>{
    assert.equal(list.size(),3)
  })
})