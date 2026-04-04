/*
Problem: Linked List Cycle Detection

Given the head of a linked list, return true if there is a cycle in the linked list.
Otherwise, return false.

A cycle exists if at least one node can be revisited by continuously following the "next" pointer.

Internally:
- An index is used to indicate where the cycle begins.
- The tail node connects to the node at the given index.
- If index = -1, the list has no cycle (tail points to null).

Note:
- The index is NOT provided as a parameter.

--------------------------------------------------

Example 1:
Input: head = [1,2,3,4], index = 1
Output: true

Explanation:
- The tail connects back to the node at index 1 (value = 2).
- This creates a cycle.

--------------------------------------------------

Example 2:
Input: head = [1,2], index = -1
Output: false

Explanation:
- The tail points to null.
- No cycle exists.

--------------------------------------------------

Constraints:
- 0 <= Length of the list <= 1000
- -1000 <= Node.val <= 1000
- index is either -1 or a valid index in the list

--------------------------------------------------

Goal:
Detect whether a cycle exists without using the index.
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
     * @return {boolean}
     */
   hasCycle(head) {

        // If list is empty OR only one node → cannot form a cycle
        if (!head || !head.next) return false;

        // Initialize pointers at the start of the list
        let slow = head; // moves step-by-step
        let fast = head; // moves twice as fast

        // Continue as long as fast can keep moving
        while (fast && fast.next) {

            // Move slow pointer forward by 1 node
            slow = slow.next;

            // Move fast pointer forward by 2 nodes
            fast = fast.next.next;

            // If both pointers point to the same node
            // → fast has "caught up" to slow → cycle exists
            if (slow === fast) {
                return true;
            }
        }

        // If fast reaches null → we reached the end → no cycle
        return false;
    }
}