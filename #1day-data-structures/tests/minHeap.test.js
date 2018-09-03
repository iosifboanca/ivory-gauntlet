let assert = require('assert')
let { MinHeap } = require('../index')

describe('Initializing heap', () => {
  let myheap = new MinHeap()
  let { heap } =  myheap
  it('Should check if the stack was initialized', () => {
    assert.notEqual(myheap, undefined)
    assert.equal(typeof myheap, 'object')
  })
  it('Should check if the stack have the values assigned during initialization', () => {
    assert.deepEqual(heap, [null])
    assert.notEqual(heap, [, ,])
  })
})

describe('Heap methods - Insert', () => {
  let myheap = new MinHeap()
  let { heap } =  myheap
  it('Should check if the heap length is bigger by one', () => {
    myheap.insert(2)
    assert.deepEqual(heap.length, 2)
  })
  it('Should check if the heap rearranged accordingly to the new value', () => {
    myheap.insert(12); myheap.insert(19); myheap.insert(2); myheap.insert(1); myheap.insert(9)
    assert.deepEqual(heap, [null, 1, 2, 9, 12, 2, 19 ])
    myheap.insert(32); myheap.insert(26); myheap.insert(7); myheap.insert(0); myheap.insert(2)
    assert.deepEqual(heap, [ null, 0, 1, 9, 7, 2, 19, 32, 26, 12, 2, 2 ])
  })
})
describe('Heap methods - Remove', () => {
  let myheap = new MinHeap()
  let { heap } =  myheap
  it('Should check if the heap length has decreased by one', () => {
    myheap.insert(2); myheap.remove()
    assert.deepEqual(heap.length, 1)
  })
  it('Should check if the heap rearranged accordingly after removing the minimum value', () => {
    myheap.insert(12); myheap.insert(19); myheap.insert(2); myheap.insert(1); myheap.insert(9); myheap.remove()
    assert.deepEqual(heap, [null, 2, 9, 12, 19 ])
    myheap.remove()
    assert.deepEqual(heap, [ null, 9, 19, 12 ])
  })
})