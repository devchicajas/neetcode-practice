/*
You are given the beginning of a linked list head, and an integer n.

Remove the nth node from the end of the list and return the beginning of the list.

Example 1:

Input: head = [1,2,3,4], n = 2

Output: [1,2,4]
Example 2:

Input: head = [5], n = 1

Output: []
Example 3:

Input: head = [1,2], n = 2

Output: [2]
Constraints:

The number of nodes in the list is sz.
1 <= sz <= 30
0 <= Node.val <= 100
1 <= n <= sz
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
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {

        // idea:
        // use two pointers
        // move fast n steps ahead first
        // then move both until fast hits the end
        // slow will land right before the node we want to remove

        let dummy = new ListNode(0, head); // helps handle edge cases (like removing head)
        let slow = dummy; // will stop before the node to delete
        let fast = dummy; // will go ahead first

        // move fast n+1 steps so slow lands BEFORE the node to remove
        for (let i = 0; i <= n; i++) {
            fast = fast.next; // pushing fast ahead
        }

        // move both pointers together
        while (fast) {
            slow = slow.next; // slow follows
            fast = fast.next; // fast keeps going
        }

        // now slow.next is the node we want to delete
        slow.next = slow.next.next; // skip it (remove it)

        return dummy.next; // return head (handles edge case cleanly)
    }
}