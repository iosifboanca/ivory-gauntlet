class Stack {
  constructor(...val) {
    this.count = val.length
    this.storage = { ...val }
  }

  push(val) {
    if (val !== undefined) {
      this.storage[this.count] = val
      this.count++
    }
  }

  pop() {
    if (this.count) {
      this.count--
      let result = this.storage[this.count]
      delete this.storage[this.count]
      return result
    }
  }

  isEmpty() {
    if (this.storage)
      return false
    else
      return true
  }

  peek() {
    return this.storage[this.count - 1]
  }

  size() {
    return this.count
  }
}

class MinHeap {
  //Playground for vizualization - https://www.cs.usfca.edu/~galles/visualization/Heap.html
  constructor() {
    this.heap = [null]
  }
  insert(num) {
    this.heap.push(num)
    if (this.heap.length > 2) {
      let index = this.heap.length - 1
      while (this.heap[index] < this.heap[Math.floor(index / 2)]) {
        if (index >= 1) {
          [this.heap[Math.floor(index / 2)], this.heap[index]] = [this.heap[index], this.heap[Math.floor(index / 2)]]
          if (Math.floor(index / 2) > 1) {
            index = Math.floor(index / 2)
          } else {
            return
          }
        }
      }
    }
  }

  remove() {
    let min = this.heap[1]
    if (this.heap.length > 2) {
      this.heap[1] = this.heap[this.heap.length - 1]
      this.heap.length--
      let i = 1
      while (this.heap[i] >= this.heap[2 * i] || this.heap[i] >= this.heap[2 * i + 1]) {
        if (this.heap[2 * i] < this.heap[2 * i + 1]) {
          [this.heap[i], this.heap[2 * i]] = [this.heap[2 * i], this.heap[i]]
          i *= 2
        } else {
          [this.heap[i], this.heap[2 * i + 1]] = [this.heap[2 * i + 1], this.heap[i]]
          i = 2 * i + 1
        }
        if (this.heap[2 * i] == undefined || this.heap[2 * i + 1] == undefined)
          break
      }
    } else if (this.heap.length == 2) {
      this.heap.length=1
    } else {
      this.heap[0]
    }
    return min
  }
}

class MaxHeap {
  constructor() {
    this.heap = [null]
  }
}

module.exports = { Stack, MinHeap }