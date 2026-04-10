/*
You are given the head of a singly linked list and an integer k.

Reverse the nodes of the list k at a time.

- Reverse the first k nodes
- Then reverse the next k nodes
- Continue this pattern

If the remaining nodes are fewer than k:
- leave them as is (do not reverse)

Return the modified list.

Important:
- You can only change the next pointers
- Do not change the values inside the nodes

Examples:

head = [1,2,3,4,5,6], k = 3
-> [3,2,1,6,5,4]

head = [1,2,3,4,5], k = 3
-> [3,2,1,4,5]

Constraints:
- 1 <= k <= n <= 100
- 0 <= node values <= 100
*/


class Solution {
    /**
     * @param {ListNode} head
     * @param {number} k
     * @return {ListNode}
     */
    reverseKGroup(head, k) {

        // first check if we have at least k nodes
        let count = 0;
        let curr = head;

        while (curr && count < k) {
            curr = curr.next;
            count++;
        }

        // if we found k nodes -> reverse
        if (count === k) {

            // reverse first k nodes
            let prev = null;
            let curr = head;
            let next = null;
            let i = 0;

            while (i < k) {
                next = curr.next;   // store next
                curr.next = prev;   // reverse pointer
                prev = curr;        // move prev forward
                curr = next;        // move curr forward
                i++;
            }

            // now head is the end of this group
            // connect it to next reversed group
            head.next = this.reverseKGroup(curr, k);

            // prev is new head after reversal
            return prev;
        }

        // less than k nodes -> return as is
        return head;
    }
}