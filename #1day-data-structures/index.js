class Stack {
  constructor(...val) {
    this.count = val.length
    this.storage = { ...val }
  }

  push(val) {
    if (val!==undefined){
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

module.exports = { Stack }