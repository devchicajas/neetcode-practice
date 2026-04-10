/*
given k sorted linked lists

each list is already sorted in ascending order

we need to merge all of them into one sorted linked list
and return the head of that merged list

examples:

lists = [[1,2,4],[1,3,5],[3,6]]
-> [1,1,2,3,3,4,5,6]

lists = []
-> []

lists = [[]]
-> []

notes:
- lists.length can be 0 to 1000
- each list can have 0 to 100 nodes
- values range from -1000 to 1000

key idea:
- combine multiple sorted lists into one sorted list
*/

class Solution {
    /**
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {

        // edge case
        if (lists.length === 0) return null;

        // keep merging until one list remains
        while (lists.length > 1) {
            let merged = [];

            // merge pairs of lists
            for (let i = 0; i < lists.length; i += 2) {
                let l1 = lists[i];
                let l2 = i + 1 < lists.length ? lists[i + 1] : null;

                merged.push(this.mergeTwoLists(l1, l2));
            }

            // update lists with merged results
            lists = merged;
        }

        return lists[0];
    }

    // helper to merge 2 sorted linked lists
    mergeTwoLists(l1, l2) {

        let dummy = new ListNode(0); // start node
        let tail = dummy;

        // compare nodes and build new list
        while (l1 && l2) {
            if (l1.val < l2.val) {
                tail.next = l1;
                l1 = l1.next;
            } else {
                tail.next = l2;
                l2 = l2.next;
            }
            tail = tail.next; // move tail forward
        }

        // attach remaining nodes
        if (l1) tail.next = l1;
        if (l2) tail.next = l2;

        return dummy.next; // skip dummy
    }
}