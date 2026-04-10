/*
You are given an array of integers nums containing n + 1 integers.
Each integer in nums is in the range [1, n] inclusive.

Every integer appears exactly once, except for one integer 
which appears two or more times.

Return the integer that appears more than once.

Example 1:
Input: nums = [1,2,3,2,2]
Output: 2

Example 2:
Input: nums = [1,2,3,4,4]
Output: 4

Follow-up:
Can you solve the problem without modifying the array nums 
and using O(1) extra space?

Constraints:
1 <= n <= 10,000
nums.length == n + 1
1 <= nums[i] <= n
*/


class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {

        // use Floyd's cycle detection
        // think of each value as pointing to the next index
        // because one value repeats, a cycle gets created

        let slow = nums[0];
        let fast = nums[0];

        // move slow by 1 step
        // move fast by 2 steps
        // if there is a cycle, they will eventually meet
        do {
            slow = nums[slow];
            fast = nums[nums[fast]];
        } while (slow !== fast);

        // once they meet, start one pointer at the beginning
        // keep the other pointer where they met
        // move both 1 step at a time
        // where they meet again is the duplicate number
        let p1 = nums[0];
        let p2 = slow;

        while (p1 !== p2) {
            p1 = nums[p1];
            p2 = nums[p2];
        }

        // this is the start of the cycle
        // which is the duplicate value
        return p1;
    }
}