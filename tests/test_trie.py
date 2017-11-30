import pytest

from data_structures.structures.trie import Trie


@pytest.fixture
def trie():
    return Trie()


class TestTrie(object):
    def test_empty_find(self, trie):
        assert trie.find("banana") is False

    def test_full_find(self, trie):
        trie.insert("banana")
        assert trie.find("banana") is True

    def test_full_fail(self, trie):
        trie.insert("banana")
        assert trie.find("potato") is False

    def test_overlapping(self, trie):
        strings = ["banana", "bandana", "baseball"]
        misses = ["ban", "bandanas", "potato"]

        for string in strings:
            trie.insert(string)

        for string in strings:
            assert trie.find(string)

        for miss in misses:
            assert not trie.find(miss)

    def test_prefix_num(self, trie):
        strings = ["banana", "bandana", "baseball"]
        for string in strings:
            trie.insert(string)

        assert trie.startingWith("") == 3
        assert trie.startingWith("bas") == 1
        assert trie.startingWith("pot") == 0

    def test_repeats(self, trie):
        strings = ["s", "ss", "sss", "ssss", "sssss"]
        tests = strings + ["ssssss"]

        for string in strings:
            trie.insert(string)

        for index, test in enumerate(tests):
            assert trie.startingWith(test) == 5 - index
