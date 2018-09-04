let assert = require('assert')
let { MaxHeap } = require('../index')

describe('Initializing heap', () => {
  let myheap = new MaxHeap()
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
  let myheap = new MaxHeap()
  let { heap } =  myheap
  it('Should check if the heap length is bigger by one', () => {
    myheap.insert(2)
    assert.deepEqual(heap.length, 2)
  })
  it('Should check if the heap rearranged accordingly to the new value', () => {
    myheap.insert(12); myheap.insert(19); myheap.insert(2); myheap.insert(1); myheap.insert(9)
    assert.deepEqual(heap, [ null, 19, 2, 12, 2, 1, 9 ])
    myheap.insert(32); myheap.insert(26); myheap.insert(7); myheap.insert(0); myheap.insert(2)
    assert.deepEqual(heap, [ null, 32, 26, 19, 7, 2, 9, 12, 2, 2, 0, 1 ])
  })
})
describe('Heap methods - Remove', () => {
  let myheap = new MaxHeap()
  let { heap } =  myheap
  it('Should check if the heap length has decreased by one', () => {
    myheap.insert(2); myheap.remove()
    assert.deepEqual(heap.length, 1)
  })
  it('Should check if the heap rearranged accordingly after removing the minimum value', () => {
    myheap.insert(12); myheap.insert(19); myheap.insert(2); myheap.insert(1); myheap.insert(9); myheap.remove()
    assert.deepEqual(heap, [ null, 12, 9, 2, 1 ]) 
    myheap.remove()
    assert.deepEqual(heap, [ null, 9, 1, 2 ])
  })
})