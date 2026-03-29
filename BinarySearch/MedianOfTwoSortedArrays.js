// Median of Two Sorted Arrays

// You are given two integer arrays nums1 and nums2
// with sizes m and n respectively.
// Both arrays are sorted in ascending order.

// Return the median value among all elements of the two arrays.

// Important:
// - Your solution must run in O(log(m + n)) time

// Example 1:
// Input: nums1 = [1,2], nums2 = [3]
// Output: 2.0
// Explanation:
// Combined array = [1,2,3]
// Median is the middle value → 2

// Example 2:
// Input: nums1 = [1,3], nums2 = [2,4]
// Output: 2.5
// Explanation:
// Combined array = [1,2,3,4]
// Even number of elements → take average of middle two
// (2 + 3) / 2 = 2.5

// Constraints:
// - nums1.length == m
// - nums2.length == n
// - 0 <= m <= 1000
// - 0 <= n <= 1000
// - -10^6 <= nums1[i], nums2[i] <= 10^6

class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        // Step 1: combine both arrays
        let merged = nums1.concat(nums2);

        // Step 2: sort the merged array
        merged.sort((a, b) => a - b);

        let n = merged.length;

        // Step 3: find the median
        if (n % 2 === 1) {
            // odd length → return middle element
            return merged[Math.floor(n / 2)];
        } else {
            // even length → average of two middle elements
            let mid1 = merged[n / 2 - 1];
            let mid2 = merged[n / 2];
            return (mid1 + mid2) / 2;
        }
    }
}