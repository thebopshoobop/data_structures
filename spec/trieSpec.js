const Trie = require("../structures/trie");

const testTrie = (trie, result) => item => {
  expect(trie.find(item)).toBe(result);
};

describe("Tries", () => {
  let trie;

  beforeEach(() => {
    trie = new Trie();
  });

  it("returns false when finding on empty", () => {
    expect(trie.find("banana")).toBe(false);
  });

  it("returns true for strings it contains", () => {
    trie.insert("banana");

    expect(trie.find("banana")).toBe(true);
  });

  it("returns false for strings it does not contain", () => {
    trie.insert("banana");

    expect(trie.find("potato")).toBe(false);
  });

  it("handles finding on overlapping strings", () => {
    const strings = ["banana", "bandana", "baseball"];
    const misses = ["ban", "bandanas", "potato"];
    strings.forEach(string => trie.insert(string));

    strings.forEach(testTrie(trie, true));
    misses.forEach(testTrie(trie, false));
  });

  it("returns the number of strings beginning with a given prefix", () => {
    const strings = ["banana", "bandana", "baseball"];
    strings.forEach(string => trie.insert(string));

    expect(trie.startingWith("")).toBe(3);
    expect(trie.startingWith("bas")).toBe(1);
    expect(trie.startingWith("pot")).toBe(0);
  });

  it("handles repeating characters", () => {
    const strings = ["s", "ss", "sss", "ssss", "sssss"];
    const tests = [...strings, "ssssss"];
    strings.forEach(string => trie.insert(string));

    tests.forEach((test, index) =>
      expect(trie.startingWith(test)).toBe(5 - index)
    );
  });
});
