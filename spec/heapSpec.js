const Heap = require("../structures/heap");

describe("Heaps", () => {
  describe("MinHeap", () => {
    let heap;
    let populated;

    beforeEach(() => {
      heap = new Heap();
      populated = new Heap();
      populated.push(5);
      populated.push(4);
      populated.push(6);
    });

    it("returns undefined when peeking at an empty minHeap", () => {
      expect(heap.peek()).toBe(undefined);
    });

    it("returns undefined when popping an empty maxHeap", () => {
      expect(heap.pop()).toBe(undefined);
    });

    it("accepts new values, properly ordering them, least first", () => {
      expect(populated.peek()).toEqual(4);
    });

    it("returns the minimum item when requested", () => {
      expect(populated.pop()).toEqual(4);
      expect(populated.pop()).toEqual(5);
    });

    it("handles large sets, maintaining the minHeap invariant", () => {
      const sample = [...Array(100)].map(
        () => Math.floor(Math.random() * 200) - 100
      );
      sample.forEach(item => heap.push(item));
      const result = sample.map(() => heap.pop());
      const answer = sample.sort((a, b) => a - b);
      answer.forEach((item, index) => {
        expect(item).toEqual(result[index]);
      });
    });
  });

  describe("MaxHeap", () => {
    let heap;
    let populated;

    beforeEach(() => {
      heap = new Heap({ max: true });
      populated = new Heap({ max: true });
      populated.push(5);
      populated.push(6);
      populated.push(4);
    });

    it("returns undefined when peeking at an empty maxHeap", () => {
      expect(heap.peek()).toBe(undefined);
    });

    it("returns undefined when popping an empty minHeap", () => {
      expect(heap.pop()).toBe(undefined);
    });

    it("accepts new values, properly ordering them, greatest first", () => {
      expect(populated.peek()).toEqual(6);
    });

    it("returns the maximum item when requested", () => {
      expect(populated.pop()).toEqual(6);
      expect(populated.pop()).toEqual(5);
    });

    it("handles large sets, maintaining the maxHeap invariant", () => {
      const sample = [...Array(100)].map(
        () => Math.floor(Math.random() * 200) - 100
      );
      sample.forEach(item => heap.push(item));
      const result = sample.map(() => heap.pop());
      const answer = sample.sort((a, b) => a - b).reverse();
      answer.forEach((item, index) => {
        expect(item).toEqual(result[index]);
      });
    });
  });
});
