from random import randint

import pytest

from data_structures.structures.heap import MaxHeap, MinHeap


@pytest.fixture
def max_heap():
    return MaxHeap()


@pytest.fixture
def populated_max_heap(max_heap):
    max_heap.push(4)
    max_heap.push(10)
    max_heap.push(5)
    max_heap.push(7)
    return max_heap


class TestMaxHeap(object):
    def test_empty_peek(self, max_heap):
        assert max_heap.peek() is None

    def test_empty_pop(self, max_heap):
        with pytest.raises(IndexError):
            max_heap.pop()

    def test_push(self, populated_max_heap):
        assert populated_max_heap.peek() == 10

    def test_pop(self, populated_max_heap):
        assert populated_max_heap.pop() == 10
        assert populated_max_heap.pop() == 7
        assert populated_max_heap.peek() == 5

    def test_multi(self, populated_max_heap):
        assert populated_max_heap.pop() == 10
        populated_max_heap.push(4)
        populated_max_heap.push(12)
        assert populated_max_heap.pop() == 12
        assert populated_max_heap.peek() == 7

    def test_large(self, max_heap):
        sample = [randint(-100, 100) for _ in range(100)]
        for i in sample:
            max_heap.push(i)

        result = []
        while max_heap:
            result.append(max_heap.pop())

        assert list(reversed(sorted(sample))) == result


@pytest.fixture
def min_heap():
    return MinHeap()


@pytest.fixture
def populated_min_heap(min_heap):
    min_heap.push(10)
    min_heap.push(5)
    min_heap.push(4)
    min_heap.push(7)
    return min_heap


class TestMinHeap(object):
    def test_empty_peek(self, min_heap):
        assert min_heap.peek() is None

    def test_empty_pop(self, min_heap):
        with pytest.raises(IndexError):
            min_heap.pop()

    def test_push(self, populated_min_heap):
        assert populated_min_heap.peek() == 4

    def test_pop(self, populated_min_heap):
        assert populated_min_heap.pop() == 4
        assert populated_min_heap.pop() == 5
        assert populated_min_heap.peek() == 7

    def test_multi(self, populated_min_heap):
        assert populated_min_heap.pop() == 4
        populated_min_heap.push(4)
        populated_min_heap.push(12)
        assert populated_min_heap.pop() == 4
        assert populated_min_heap.peek() == 5

    def test_large(self, min_heap):
        sample = [randint(-100, 100) for _ in range(100)]
        for i in sample:
            min_heap.push(i)

        result = []
        while min_heap:
            result.append(min_heap.pop())

        assert list(sorted(sample)) == result
