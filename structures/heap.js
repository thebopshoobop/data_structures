class Heap {
  constructor({ max } = {}) {
    this.heap = [];
    this.m = max ? -1 : 1;
    this.nodeAt = this.nodeAt.bind(this);
  }

  get length() {
    return this.heap.length;
  }

  peek() {
    return this.heap.length ? this.m * this.heap[0] : undefined;
  }

  swap(left, right) {
    [this.heap[left], this.heap[right]] = [this.heap[right], this.heap[left]];
  }

  children(index) {
    return { left: index * 2 + 1, right: index * 2 + 2 };
  }

  parent(index) {
    return Math.floor((index - 1) / 2);
  }

  nodeAt(index) {
    return index < this.heap.length ? this.heap[index] : Infinity;
  }

  siftDown(current = 0) {
    const { left, right } = this.children(current);
    const [c, l, r] = [current, left, right].map(this.nodeAt);
    if (current < this.heap.length && (c > l || c > r)) {
      const flip = l < r ? left : right;
      this.swap(current, flip);
      this.siftDown(flip);
    }
  }

  siftUp(current = this.heap.length - 1) {
    const parent = this.parent(current);
    const [c, p] = [current, parent].map(this.nodeAt);
    if (current > 0 && c < p) {
      this.swap(current, parent);
      this.siftUp(parent);
    }
  }

  pop() {
    let head;
    if (this.heap.length) {
      this.swap(0, this.heap.length - 1);
      head = this.m * this.heap.pop();
      this.siftDown();
    }
    return head;
  }

  push(value) {
    this.heap.push(this.m * value);
    this.siftUp();
  }
}

module.exports = Heap;
