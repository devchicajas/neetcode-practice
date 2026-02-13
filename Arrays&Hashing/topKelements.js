//Given an integer array nums and an integer k, return the k most frequent elements within the array.

//The test cases are generated such that the answer is always unique.

//You may return the output in any order.

//Example 1:

//Input: nums = [1,2,2,3,3,3], k = 2

//Output: [2,3]


class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */

    // Params: nums -> number[], k -> number
    // Example: nums = [1,2,2,3,3,3], k = 2
    // Output: [2,3]

    /**
     * Pseudocode:
     * 1. Make a map to keep track of how many times each number shows up
     * 2. Create an array of buckets where each index represents a frequency
     * 3. Go through the map and drop each number into its matching frequency bucket
     * 4. Start from the bucket with the highest frequency and work backwards
     * 5. Keep adding numbers into the result until we have k of them
     * 6. Return the result
     */

    topKFrequent(nums, k) {

        // 1. Count the frequencies
        const count = {};
        for (let num of nums) {
            count[num] = (count[num] || 0) + 1;
        }

        // 2. Create buckets
        const freq = Array.from({ length: nums.length + 1 }, () => []);

        // 3. Fill buckets by frequency
        for (let num in count) {
            freq[count[num]].push(Number(num));
        }

        // 4. Collect top k
        const result = [];

        for (let i = freq.length - 1; i > 0; i--) {
            for (let num of freq[i]) {
                result.push(num);
                if (result.length === k) return result;
            }
        }
    }
}