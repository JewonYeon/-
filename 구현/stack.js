// class Stack {
//   constructor() {
//     this.arr = [];
//     this.index = 0;
//   }

//   push(item) {
//     this.arr[this.index++] = item;
//   }

//   pop() {
//     if(this.index <= 0) return null;
//     const result = this.arr[--this.index];
//     return result;
//   }
// }

class Stack {
  constructor() {
    this.storage = {};
    this.top = 0;
  }

  size() {
    return this.top;
  }

  push(element) {
    this.storage[this.top] = element;
    this.top += 1;
  }

  pop() {
    if (this.size() <= 0) {
      return;
    }

    const result = this.storage[this.top - 1];
    delete this.storage[this.top - 1];
    this.top -= 1;

    return result;
  }
}
