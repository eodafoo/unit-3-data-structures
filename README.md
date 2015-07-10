#Data Structure

##Summary
In this challenge, you will be creating data structures that are commonly use in software engineering. A description of each data structure is provided below. Feel free to look online for additional information about each structure.

###[Stack](https://en.wikipedia.org/wiki/Stack_(abstract_data_type))
<img src="./assets/stack.png" height="200px"><br>
An abstract data type in which the first item put in is the last item taken out. It is a linear
structure where insertion and deletion happen only at the "top of the stack".

###[Queue](https://en.wikipedia.org/wiki/Queue_(abstract_data_type))
<img src="./assets/queue.png" height="200px"><br>
An abstract data type in which the last item put in is the first item taken out. It is a linear
structure where insertion happens at the back of the queue, but deletion happens at the front of the queue.

###[Set](https://en.wikipedia.org/wiki/Set_(abstract_data_type))
<img src="./assets/set.png" height="200px"><br>
An unordered collection of distinct objects.

###[LinkedList](https://en.wikipedia.org/wiki/Linked_list)
<img src="./assets/linked_list.png" height="200px"><br> 
A data structure consisting of nodes that are "linked" together in sequence. Each node holds
a reference to the next node in the list.

###[Doubly LinkedList](https://en.wikipedia.org/wiki/Doubly_linked_list)
<img src="./assets/doubly_linked.PNG" height="200px"><br>
A data structure consisting of nodes that are "linked" together in sequence. Each node holds
a reference to both the previous and the next nodes in the list.

###[Hash Table](https://en.wikipedia.org/wiki/Hash_table)
<img src="./assets/hash_table.png" height="200px"><br>
A data structure that maps keys to values and can efficiently find the value associated to a particular key. A hashtable uses a hash function to generate a hashcode for each key, which it uses to compute the bucket in which to store/find the value associated to the key. Collisions occur when keys are hashed to the same bucket. Collisions need to be handled in a way that ensures no data is overwritten and all data can still be efficiently retrieved.  

###[Tree](https://en.wikipedia.org/wiki/Tree_(data_structure))
<img src="./assets/tree.png" height="200px"><br>
A collection of nodes that grow downward, like an inverted tree. Each node can only have one parent
and cycles/loops are not allowed.

###[Graph](https://en.wikipedia.org/wiki/Graph_(abstract_data_type))
<img src="./assets/graph.gif" height="200px"><br>
A collection of nodes/vertices, connected by edges. Each edge connects two vertices.

###[Binary Search Tree](https://en.wikipedia.org/wiki/Binary_search_tree)
<img src="./assets/binary.png" height="200px"><br>
A tree with the following constraints:
    * each node can only have up to 2 children
    * the left child must have a smaller value than its parent
    * the right child must have a greater value than its parent

###[Trie](https://en.wikipedia.org/wiki/Trie)
<img src="./assets/trie.jpg" height="200px"><br>
Also known as a prefix tree. A tree structure that groups strings with common prefixes along the
same branch.

##How do I get started?
1. Fork this repo
  - click on fork button on the top right of the page ![Alt text](http://u.cubeupload.com/azai91/howtofork.png)
  - click on your handle to fork to your repo

2. Clone the repo
  - copy and paste github url from the right side of the ![Alt text](http://u.cubeupload.com/azai91/howtoclone.png)
  - type in the following line into your command line and insert your copies url as shown below:
  ````
  git clone *github url
  ````

3. Complete the challenge in located in src/ directory. We recommend completing creating the data structure in the following order (the order they appear in the tests):

- Stack
- Queue
- Set
- LinkedList
- HashTable
- Tree
- Graph

**Bonus**
Remove x from test file to enable test
- Binary Search Tree
- LinkedList (addToHead method)
- DoublyLinked Lists
- HashTable (resize)

**Extra (untested) Bonus**
- LinkedList (insert, removeItem, removePosition)
- Tree (height)
- Binary Search Tree (min, max, remove)
- Priority Queue
- Trie

##How do I test if my answer is correct?
* To test your functions, open index.html in your browser
** NOTE: While completing the challenges, if all tests that previously passed ALL suddenly fail, there is most likely a syntax error in your code. Open Chrome Dev Tool's to locate the cause of the error.
