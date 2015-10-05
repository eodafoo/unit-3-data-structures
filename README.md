#Data Structure

##Summary
In this challenge, you will be creating data structures that are commonly use in software engineering. A description of each data structure is provided below. Feel free to look online for additional information about each structure.

###[Stack](https://en.wikipedia.org/wiki/Stack_(abstract_data_type))
<img src="./assets/stack.png" height="200px"><br>
A data structure that serves as a collection of elements, with two principle operations: push and pop. Push adds an element to the collection. Pop removes the last element that was added. This data structure follows the "Last In, First Out" principle (LIFO), where the elements that were most recently pushed (added) to the stack, are popped off (removed) first.

Think of a stack of pancakes - you add pancakes to the top of the stack and eat them from top to bottom.

###[Queue](https://en.wikipedia.org/wiki/Queue_(abstract_data_type))
<img src="./assets/queue.png" height="200px"><br>
A data strucure that serves as a collection of elements that preserves the order at which the elements are inserted. The principle operations are enqueue, which adds an element to the collection, and dequeue, which removes the element that was added the earliest. This data structure follows the "First In, First Out" principle (FIFO), where elements that are enqueued (added) into the queue first, are dequeue (removed) first.

Think of a line for a roller coaster - the people that enter the line first, are the ones that get on the ride first.

###[Set](https://en.wikipedia.org/wiki/Set_(abstract_data_type))
<img src="./assets/set.png" height="200px"><br>
A data structure that specializes in determining if an object is present in a collection or not. The two principle operations are add, which adds an element to the set, and contains, which determines if an element is present in the set. Elements present in the set are distinct, and adding duplicate elements does not increase the size of the set.

###[LinkedList](https://en.wikipedia.org/wiki/Linked_list)
<img src="./assets/linked_list.png" height="200px"><br>
A data structure that serves as a collection of elements. Data is stored in nodes, and each node has a reference to the next node. In order to access elements from a linked list, the first node (or head) is checked. If the element is not present in the first node, then the node that is referenced by the head (the second node) is checked. This action is repeated until the entire list is inspected. The two principle operations are push (or add) and contains. Push creates a new node and adds
it to the end of the list. Contains checks the entire list and determines if the element is present in any of the nodes.

###[Hash Table](https://en.wikipedia.org/wiki/Hash_table)
<img src="./assets/hash_table.png" height="200px"><br>
A data structure that stores key-value pairs (similar to the way an object works in javascript). The location in memory where the element is stored is determined by running the key through a hash function. The hash function accepts a key and returns an address where the element should be inserted/retrieved.

A common problem occurs when two distinct keys are converted to the same address - an occurrence called a collision. Collisions need to be handled in a way that ensures no data is overwritten and all data can still be efficiently retrieved.

###[Tree](https://en.wikipedia.org/wiki/Tree_(data_structure))
<img src="./assets/tree.png" height="200px"><br>
A data structure that stores elements in a hierarchical manner (an example would be if you were storing a family tree). Each element is stored in a node, and each node has a references to its children (the nodes below that node). Each node can only have one parent.

###[Graph](https://en.wikipedia.org/wiki/Graph_(abstract_data_type))
<img src="./assets/graph.gif" height="200px"><br>
A collection of nodes that have references to other nodes.

A good use case of a graph would be to store data of people in a social network. Each node not only contains data about an person, but also a reference to another person. Retrieving a person's friends would only involve looking at one node's references to other nodes.

###[Binary Search Tree](https://en.wikipedia.org/wiki/Binary_search_tree)
<img src="./assets/binary.png" height="200px"><br>
Similar to a tree, except with a few constraints:

* each node can only have up to 2 children

* the left child must have a smaller value than its parent

* the right child must have a greater value than its parent

###[Doubly LinkedList](https://en.wikipedia.org/wiki/Doubly_linked_list)
<img src="./assets/doubly_linked.PNG" height="200px"><br>
Similar to a linked list with the addition that each node also has reference to the previous node.

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

  - [ ] Implement the ```.push``` method, which adds an element to the top of the stack
  - [ ] Implement the ```.pop``` method, which removes and returns an element from the top of the stack

- Queue
  - [ ] Implement the ```.enqueue``` method, which adds an element to the front of the queue
  - [ ] Implement the ```.dequeue``` method, which removes and returns an element at the end of the queue

- Set
  - [ ] Implement the ```.add``` method, which adds an element to the set (does not add an object if the object is already present in set)
  - [ ] Implement the ```.contains``` method, which determines if an element in present in a set
  - [ ] Implement the ```.remove``` method, which removes an element from the set if present

- LinkedList
  - [ ] Implement the ```.push``` method, which adds a node to the end of the linked list
  - [ ] Implement the ```.contains``` method, which determines if a value is present in the list

- HashTable
  - [ ] Implement the ```.get``` method, which
  - [ ] Implement the ```.set``` method,
  - [ ] Implement the ```.remove``` method,

- Tree
  - [ ] Implement the ```.add``` method,
  - [ ] Implement the ```.contains``` method,

- Graph
  - [ ] Implement the ```.addNode``` method,
  - [ ] Implement the ```.contains``` method,
  - [ ] Implement the ```.remove``` method,


##Extension Challenges
  Remove x from test file to enable test
   1. Binary Search Tree
   1. LinkedList (addToHead method)
   1. DoublyLinked Lists
   1. HashTable (resize)
   1. LinkedList (insert, removeItem, removePosition)
   1. Tree (height)
   1. Binary Search Tree (min, max, remove)
   1. Priority Queue
   1. Trie

##How do I test if my answer is correct?
* To test your functions, open index.html in your browser

* NOTE: While completing the challenges, if all tests that previously passed ALL suddenly fail, there is most likely a syntax error in your code. Open Chrome Dev Tool's to locate the cause of the error.
