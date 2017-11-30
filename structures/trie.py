class Trie(object):
    def __init__(self, letter="", is_complete=False):
        self.letter = letter
        self.children = {}
        self.is_complete = is_complete
        self.prefixed = 0

    def insert(self, string):
        self.prefixed += 1
        letter = string[0]
        child = self.children.get(letter)
        if not child:
            child = Trie(letter, len(string) == 1)
            self.children[letter] = child

        if string[1:]:
            child.insert(string[1:])

    def findNode(self, query):
        if not query:
            return self
        child = self.children.get(query[0])
        return child.findNode(query[1:]) if child else None

    def find(self, query):
        node = self.findNode(query)
        return node.is_complete if node else False

    def startingWith(self, query):
        node = self.findNode(query)
        return node.prefixed + node.is_complete if node else 0
