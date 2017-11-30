class Trie {
  constructor(letter, isComplete = false) {
    this.letter = letter;
    this.isComplete = isComplete;
    this.children = {};
    this.prefixed = 0;
  }

  insert(word) {
    const letter = word[0];
    let child = this.children[letter];
    if (!child) {
      child = new Trie(letter, word.length === 1);
      this.children[letter] = child;
    }
    const remainder = word.slice(1);
    if (remainder.length) {
      child.insert(remainder);
    }
    this.prefixed++;
  }

  findNode(query) {
    if (query.length === 0) return this;
    const child = this.children[query[0]];
    return child ? child.findNode(query.slice(1)) : null;
  }

  find(query) {
    const node = this.findNode(query);
    return node ? node.isComplete : false;
  }

  startingWith(query) {
    const node = this.findNode(query);
    return node ? node.prefixed + node.isComplete : 0;
  }
}

// class TrieNode {
//   constructor(letter, isComplete = false) {
//     this.letter = letter;
//     this.isComplete = isComplete;
//     this.children = {};
//     this.prefixed = 0;
//   }
// }

// class Trie {
//   constructor() {
//     this.root = new TrieNode();
//   }

//   insert(word) {
//     let current = this.root;
//     for (const letter of word) {
//       if (!current.children[letter]) {
//         current.children[letter] = new TrieNode(letter);
//       }
//       current.prefixed++;
//       current = current.children[letter];
//     }
//     current.isComplete = true;
//   }

//   findNode(query) {
//     let current = this.root;
//     for (const letter of query) {
//       if (!current.children[letter]) {
//         return null;
//       }
//       current = current.children[letter];
//     }
//     return current;
//   }

//   find(query) {
//     const node = this.findNode(query);
//     return node ? node.isComplete : false;
//   }

//   startingWith(query) {
//     const node = this.findNode(query);
//     return node ? node.prefixed + node.isComplete : 0;
//   }
// }

module.exports = Trie;
