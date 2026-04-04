/*
Problem: Reorder Linked List

You are given the head of a singly linked list.

The nodes are initially in order:
[0, 1, 2, 3, 4, 5, 6]  (based on index positions)

You must reorder the list to follow this pattern:
[0, 6, 1, 5, 2, 4, 3]

--------------------------------------------------

General Rule:
For a list of length n:

Reorder nodes as:
[0, n-1, 1, n-2, 2, n-3, ...]

--------------------------------------------------

Important Constraints:
- You CANNOT change node values
- You MUST rearrange the actual node pointers

--------------------------------------------------

Example 1:
Input: head = [2,4,6,8]
Output: [2,8,4,6]

Explanation:
- Start from front → 2
- Then last → 8
- Then next front → 4
- Then next last → 6

--------------------------------------------------

Example 2:
Input: head = [2,4,6,8,10]
Output: [2,10,4,8,6]

Explanation:
- 2 → 10 → 4 → 8 → 6

--------------------------------------------------

Constraints:
- 1 <= Length of the list <= 1000
- 1 <= Node.val <= 1000

--------------------------------------------------

Goal:
Reorder the linked list in-place by changing pointers only.
*//**
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
     * @return {void}
     */
        reorderList(head) {

        // idea:
        // reorder like: [1,2,3,4,5] → [1,5,2,4,3]
        // plan: find middle → reverse second half → merge like zipper

        if (!head || !head.next) return; // too small → nothing to do

        // --- find middle ---
        let slow = head; // moves 1 step
        let fast = head; // moves 2 steps

        while (fast && fast.next) { // keep going while fast can move
            slow = slow.next;        // slow goes +1 → finding middle
            fast = fast.next.next;   // fast goes +2 → reaches end faster
        }
        // at this point, slow is around the middle

        // --- reverse second half ---
        let prev = null; // will become new head of reversed part
        let curr = slow; // start reversing from middle

        while (curr) {
            let next = curr.next; // save next node so we don’t lose it
            curr.next = prev;     // flip pointer (this is the actual reverse step)
            prev = curr;          // move prev forward
            curr = next;          // move curr forward
        }
        // now prev = start of reversed second half

        let first = head;  // beginning of first half
        let second = prev; // beginning of reversed second half

        // merge both halves 
        while (second.next) { // stop when second half is done

            let temp1 = first.next;   // save next from first half
            let temp2 = second.next;  // save next from second half

            first.next = second;      // connect first → second
            second.next = temp1;      // connect second → next first

            first = temp1;            // move first pointer forward
            second = temp2;           // move second pointer forward
        }
    }
}

