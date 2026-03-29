// Merge Two Sorted Linked Lists

// You are given the heads of two sorted linked lists: list1 and list2.

// Merge the two lists into one sorted linked list
// and return the head of the new sorted list.

// Important:
// - The new list should be made by reusing the existing nodes
// - Do NOT create new nodes unless needed
// - Both lists are already sorted in ascending order

// Example 1:
// Input: list1 = [1,2,4], list2 = [1,3,5]
// Output: [1,1,2,3,4,5]

// Example 2:
// Input: list1 = [], list2 = [1,2]
// Output: [1,2]

// Example 3:
// Input: list1 = [], list2 = []
// Output: []

// Constraints:
// - 0 <= length of each list <= 100
// - -100 <= Node.val <= 100

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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        // Create a dummy node to start the merged list
        // This helps avoid edge cases when building the list
        let dummy = new ListNode(0);

        // This pointer will build the new list
        let current = dummy;

        // Traverse both lists while both have nodes
        while (list1 !== null && list2 !== null) {
            // Compare values of both nodes
            if (list1.val < list2.val) {
                // Attach list1 node to merged list
                current.next = list1;

                // Move list1 forward
                list1 = list1.next;
            } else {
                // Attach list2 node to merged list
                current.next = list2;

                // Move list2 forward
                list2 = list2.next;
            }

            // Move current pointer forward
            current = current.next;
        }

        // If one list still has nodes left,
        // attach the remaining nodes directly
        if (list1 !== null) {
            current.next = list1;
        } else {
            current.next = list2;
        }

        // Return the merged list (skip dummy node)
        return dummy.next;
    }
}