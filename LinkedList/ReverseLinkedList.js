// Reverse Linked List

// You are given the head of a singly linked list.
// Reverse the list and return the new head.

// A singly linked list means:
// Each node points to the next node only (no backward pointer).

// Example 1:
// Input: head = [0,1,2,3]
// Output: [3,2,1,0]

// Example 2:
// Input: head = []
// Output: []

// Constraints:
// - 0 <= length of list <= 1000
// - -1000 <= Node.val <= 1000

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
     * @return {ListNode}
     */
    reverseList(head) {
        // previous will become the new head at the end
        let prev = null;

        // current starts at the head of the list
        let curr = head;

        // loop through the list
        while (curr !== null) {
            // store next node before breaking the link
            let nextTemp = curr.next;

            // reverse the pointer
            // instead of pointing forward, point backward
            curr.next = prev;

            // move prev forward
            prev = curr;

            // move curr forward
            curr = nextTemp;
        }

        // when loop ends:
        // prev is the new head of the reversed list
        return prev;
    }
}