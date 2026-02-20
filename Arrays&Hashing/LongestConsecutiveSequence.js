/*
Longest Consecutive Sequence (Medium)

Given an array of integers nums, return the length of the longest consecutive sequence of elements that can be formed.

A consecutive sequence is a sequence of elements in which each element is exactly 1 greater than the previous element.
The elements do not have to be consecutive in the original array.

You must write an algorithm that runs in O(n) time.

Example 1:

Input: nums = [2,20,4,10,3,4,5]

Output: 4

Explanation:
The longest consecutive sequence is [2, 3, 4, 5].

Example 2:

Input: nums = [0,3,2,5,4,6,1,1]

Output: 7

Constraints:

0 <= nums.length <= 1000  
-10^9 <= nums[i] <= 10^9
*/


/*
PREP

P — Parameters
longestConsecutive(nums: number[])
An array of integers (unsorted)

R — Return
number
The length of the longest consecutive sequence

E — Example
Input:  [2,20,4,10,3,4,5]
Output: 4   // sequence: [2,3,4,5]

Input:  [0,3,2,5,4,6,1,1]
Output: 7   // sequence: [0,1,2,3,4,5,6]

P — Pseudocode
convert nums into a set for fast lookup
initialize longest = 0

for each number in set:
    if number - 1 is not in set:
        this number is the start of a sequence
        count forward while next numbers exist
        update longest length

return longest
*/

class Solution {

    /**
     * @param {number[]} nums   // input array
     * @return {number}        // longest consecutive sequence length
     */
    longestConsecutive(nums) {

        // turn array into a set so lookups are fast
        const numSet = new Set(nums);

        // this keeps track of the longest sequence we find
        let longest = 0;

        // loop through each unique number
        for (let num of numSet) {

            // only start counting if this number is the start of a sequence
            // meaning the number before it doesn't exist
            if (!numSet.has(num - 1)) {

                // start from this number
                let currentNum = num;

                // current sequence length starts at 1
                let count = 1;

                // keep going while the next number exists
                while (numSet.has(currentNum + 1)) {

                    // move to the next consecutive number
                    currentNum++;

                    // increase the length
                    count++;
                }

                // update the longest sequence so far
                longest = Math.max(longest, count);
            }
        }

        // return the biggest sequence we found
        return longest;
    }
}
