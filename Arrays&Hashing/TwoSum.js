// Given an array of integers nums and an integer target, return the indices i and j such that nums[i] + nums[j] == target and i != j.

//You may assume that every input has exactly one pair of indices i and j that satisfy the condition.

//Return the answer with the smaller index first.

//Example 1:

//Input: 
//nums = [3,4,5,6], target = 7

//Output: [0,1]

class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number[]}
   */
  twoSum(nums, target) {

    // This Map keeps track of numbers already seen
    // and the index where each one showed up
    const numberToIndex = new Map();

    // Go through the array once 
    for (let currentIndex = 0; currentIndex < nums.length; currentIndex++) {

      // Grab the current number we’re looking at
      const currentNumber = nums[currentIndex];

      // Figure out what number would complete the target sum
      const complement = target - currentNumber;

      // If we’ve already seen that complement before,
      // we’ve found our pair 
      if (numberToIndex.has(complement)) {

        // Get the index where the complement appeared earlier
        // and return it with the current index
        return [numberToIndex.get(complement), currentIndex];
      }

      // Otherwise, save the current number and its index
      // so future numbers can match with it
      numberToIndex.set(currentNumber, currentIndex);
    }
  }
}

