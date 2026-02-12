// Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.

//Example 1:

//Input: nums = [1, 2, 3, 3]

//Output: true

//Example 2:

//Input: nums = [1, 2, 3, 4]

//Output: false

class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        // Use a set to store unique values
        // This will let us quickly check if we've seen a number before
        const seen = new Set();
        // Loop through each number in the array
        for(let num of nums) {
            // if the number exists already in the Set it duplicate 
            if(seen.has(num))return true;
            // if not duplicate than we add the number to the Set
            seen.add(num)
        }
        // if we finish looping without finding duplicates
        // then all values are unique 
        return false;
    }
}
