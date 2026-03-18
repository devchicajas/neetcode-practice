//You are given an array of distinct integers nums, sorted in ascending order, and an integer target.

//Implement a function to search for target within nums. If it exists, then return its index, otherwise, return -1.

//Your solution must run in 
//O(logn) O(logn) time.

//Example 1:

//Input: nums = [-1,0,2,4,6,8], target = 4

//Output: 3
//Example 2:

//Input: nums = [-1,0,2,4,6,8], target = 3

//Output: -1
//Constraints:

// 1 <= nums.length <= 10000.
// -10000 < nums[i], target < 10000
// All the integers in nums are unique.




class Solution {
    
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {

        // Left pointer starts at the beginning
        let left = 0;

        // Right pointer starts at the end
        let right = nums.length - 1;

        // Continue searching while left boundary is valid
        while (left <= right) {

            // Find the middle index
            let mid = Math.floor((left + right) / 2);

            // If we found the target
            if (nums[mid] === target) {
                return mid;
            }

            // If target is greater, move left pointer right
            else if (nums[mid] < target) {
                left = mid + 1;
            }

            // If target is smaller, move right pointer left
            else {
                right = mid - 1;
            }
        }

        // If target was not found
        return -1;
    }
}