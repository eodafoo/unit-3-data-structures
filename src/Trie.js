// Create a prefix tree (words with common prefixes are under the same sequence of edges)
function Trie() {
    this.root = new Node();
}

function Node() {
    this.children = {};
}

// Insert a new word
Trie.prototype.insert = function(string) {
    this.insertSingle(this.root, string, 0);
}

Trie.prototype.insertSingle = function(node, string, i) {
    if (!node) {
        node = new Node();
    }
    if (i !== string.length) {
        node.children[string[i]] = this.insertSingle(node.children[string[i]], string, i+1); 
    }
    return node;
}

// Returns true or false, depending on whether the word/prefix is contained in the tree
Trie.prototype.find = function(string) {
    var curr = this.root;
    for (var i = 0; i < string.length; i++) {
        if (!(string[i] in curr.children)) {
            return false;
        }
        curr = curr.children[string[i]];
    }
    return true;
}
