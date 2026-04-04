/*
Add Two Numbers
Medium
Topics
Company Tags
Hints

You are given two non-empty linked lists, l1 and l2, where each represents a non-negative integer.

The digits are stored in reverse order, e.g. the number 321 is represented as 1 -> 2 -> 3 -> in the linked list.

Each of the nodes contains a single digit. You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Return the sum of the two numbers as a linked list.

Example 1:

Input: l1 = [1,2,3], l2 = [4,5,6]

Output: [5,7,9]

Explanation: 321 + 654 = 975.

Example 2:

Input: l1 = [9], l2 = [9]

Output: [8,1]

Constraints:

1 <= l1.length, l2.length <= 100.
0 <= Node.val <= 9
*/



/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
   addTwoNumbers(l1, l2, carry = 0) {
        // if both lists are done and no carry, we’re done
        if (!l1 && !l2 && carry === 0) return null;

        // get values (0 if node doesn’t exist)
        let val1 = l1 ? l1.val : 0;
        let val2 = l2 ? l2.val : 0;

        // sum + carry
        let sum = val1 + val2 + carry;

        // new digit (ones place)
        let newVal = sum % 10;

        // update carry (tens place)
        let newCarry = Math.floor(sum / 10);

        // create new node with computed value
        let node = new ListNode(newVal);

        // move to next nodes (if they exist)
        let next1 = l1 ? l1.next : null;
        let next2 = l2 ? l2.next : null;

        // recursively build the rest of the list
        node.next = this.addTwoNumbers(next1, next2, newCarry);

        return node;
    }
}