"""Heaps!"""
from math import inf
# from heapq import heappop, heappush

# If you can use the built-in heapq
# class Heap(object):
#     def __init__(self, max_heap=False):
#         self.heap = []
#         self.m = -1 if max_heap else 1

#     def __len__(self):
#         return len(self.heap)

#     def peek(self):
#         return self.m * self.heap[0] if self.heap else None

#     def push(self, value):
#         heappush(self.heap, self.m * value)

#     def pop(self):
#         return self.m * heappop(self.heap)


class Heap(object):
    """Binary Min Heap"""

    def __init__(self, max_heap=False):
        self.heap = []
        self.m = -1 if max_heap else 1

    def __len__(self):
        return len(self.heap)

    @staticmethod
    def _parent(index):
        return (index - 1) // 2

    @staticmethod
    def _left_child(index):
        return (index * 2) + 1

    @staticmethod
    def _right_child(index):
        return (index * 2) + 2

    def _swap(self, left, right):
        self.heap[left], self.heap[right] = self.heap[right], self.heap[left]

    def _sift_up(self):
        if self.heap:
            current = len(self.heap) - 1
            parent = self._parent(current)
            while current and self.heap[current] < self.heap[parent]:
                self._swap(current, parent)
                current = parent
                parent = self._parent(current)

    def _node_at(self, index):
        return self.heap[index] if index < len(self.heap) else inf

    def _sift_down(self, current=0):
        if self.heap and current < len(self.heap):
            left, right = self._left_child(current), self._right_child(current)
            if min([current, left, right], key=self._node_at) is not current:
                flip = min([left, right], key=self._node_at)
                self._swap(current, flip)
                self._sift_down(flip)

    def peek(self):
        """View the top of the heap"""
        return self.m * self.heap[0] if self.heap else None

    def push(self, item):
        """Add a new item to the heap"""
        self.heap.append(self.m * item)
        self._sift_up()

    def pop(self):
        "Remove and return the top item from the heap"
        self._swap(0, len(self.heap) - 1)
        item = self.heap.pop()
        self._sift_down()
        return self.m * item


class MinHeap(Heap):
    pass


class MaxHeap(Heap):
    def __init__(self):
        super().__init__(max_heap=True)
