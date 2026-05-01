/**
 * Kth Largest Element in a Stream (Easy)
 *
 * Problem:
 * Design a class to find the kth largest element in a stream of integers,
 * including duplicates. The stream is not necessarily sorted.
 *
 * Example:
 * The 2nd largest element in [1, 2, 3, 3] is 3.
 *
 * Implement the following methods:
 *
 * - constructor(k, nums)
 *   Initializes the object with an integer k and an initial array of numbers.
 *
 * - add(val)
 *   Adds a new integer to the stream and returns the kth largest element.
 *
 * Examples:
 * Input:
 * ["KthLargest", [3, [1, 2, 3, 3]], "add", [3], "add", [5], "add", [6], "add", [7], "add", [8]]
 *
 * Output:
 * [null, 3, 3, 3, 5, 6]
 *
 * Explanation:
 * KthLargest kthLargest = new KthLargest(3, [1, 2, 3, 3]);
 * kthLargest.add(3); // returns 3
 * kthLargest.add(5); // returns 3
 * kthLargest.add(6); // returns 3
 * kthLargest.add(7); // returns 5
 * kthLargest.add(8); // returns 6
 *
 * Constraints:
 * - 1 <= k <= 1000
 * - 0 <= nums.length <= 1000
 * - -1000 <= nums[i] <= 1000
 * - -1000 <= val <= 1000
 *
 * Notes:
 * - There will always be at least k elements when querying
 * - Duplicates are allowed
 */


class KthLargest {
    /**
     * Initialize the object with k and initial numbers
     *
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.arr = nums; // stores all values in the stream
        this.k = k;      // which largest element we want
    }

    /**
     * Adds a new value to the stream and returns the kth largest
     *
     * Strategy:
     * - Add value to array
     * - Sort in descending order (largest → smallest)
     * - Return the kth element (index k-1)
     *
     * @param {number} val
     * @return {number}
     */
    add(val) {
        // Add new value to stream
        this.arr.push(val);

        // Sort array in descending order
        this.arr.sort((a, b) => b - a);

        // Return kth largest element (k-1 index)
        return this.arr[this.k - 1];
    }
}


