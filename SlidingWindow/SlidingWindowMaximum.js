//You are given an array of integers nums and an integer k. There is a sliding window of size k that starts at the left edge of the array. The window slides one position to the right until it reaches the right edge of the array.

//Return a list that contains the maximum element in the window at each step.

//Example 1:

//Input: nums = [1,2,1,0,4,2,6], k = 3

//Output: [2,2,4,4,6]

//Explanation:
//Window position            Max
//---------------           -----
//[1  2  1] 0  4  2  6        2
// 1 [2  1  0] 4  2  6        2
// 1  2 [1  0  4] 2  6        4
// 1  2  1 [0  4  2] 6        4
// 1  2  1  0 [4  2  6]       6
//Constraints:

//1 <= nums.length <= 100,000
//-10,000 <= nums[i] <= 10,000
//1 <= k <= nums.length


class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {

        // store the max value from each window
        let res = [];

        // deque will store indices of numbers
        // I keep them in decreasing order so the biggest stays in front
        let deque = [];

        for (let r = 0; r < nums.length; r++) {

            // if the new number is bigger than numbers in the deque
            // remove the smaller ones from the back
            // because they will never be the max anymore
            while (deque.length && nums[deque[deque.length - 1]] < nums[r]) {
                deque.pop();
            }

            // add the current index
            // I store index so I can check if it leaves the window later
            deque.push(r);

            // if the front index is outside the window
            // remove it
            if (deque[0] < r - k + 1) {
                deque.shift();
            }

            // once the window size reaches k
            // the front of deque is the max value
            if (r >= k - 1) {
                res.push(nums[deque[0]]);
            }
        }

        return res;
    }
}