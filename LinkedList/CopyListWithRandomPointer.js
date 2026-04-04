/*
You are given the head of a linked list of length n. Unlike a singly linked list, each node contains an additional pointer random, which may point to any node in the list, or null.

Create a deep copy of the list.

The deep copy should consist of exactly n new nodes, each including:

The original value val of the copied node
A next pointer to the new node corresponding to the next pointer of the original node
A random pointer to the new node corresponding to the random pointer of the original node
Note: None of the pointers in the new list should point to nodes in the original list.

Return the head of the copied linked list.

In the examples, the linked list is represented as a list of n nodes. Each node is represented as a pair of [val, random_index] where random_index is the index of the node (0-indexed) that the random pointer points to, or null if it does not point to any node.

Example 1:

Input: head = [[3,null],[7,3],[4,0],[5,1]]

Output: [[3,null],[7,3],[4,0],[5,1]]
Example 2:

Input: head = [[1,null],[2,2],[3,2]]

Output: [[1,null],[2,2],[3,2]]
Constraints:

0 <= n <= 100
-100 <= Node.val <= 100
random is null or is pointing to some node in the linked list.
*/

// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    constructor() {
        // map to store original node -> copied node
        // helps us avoid recreating nodes + handle random pointers
        this.map = new Map();
    }

    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        // base case: if node is null, nothing to copy
        if (!head) return null;

        // if we already copied this node, just return it
        if (this.map.has(head)) {
            return this.map.get(head);
        }

        // create a new node with same value (but no pointers yet)
        let newNode = new Node(head.val);

        // store it in the map before recursion (important for cycles)
        this.map.set(head, newNode);

        // recursively copy next and random pointers
        newNode.next = this.copyRandomList(head.next);
        newNode.random = this.copyRandomList(head.random);

        return newNode;
    }
}