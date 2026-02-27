//Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] where nums[i] + nums[j] + nums[k] == 0, and the indices i, j and k are all distinct.

//The output should not contain any duplicate triplets. You may return the output and the triplets in any order.

//Example 1:

//Input: nums = [-1,0,1,2,-1,-4]

//Output: [[-1,-1,2],[-1,0,1]]
//Explanation:
//nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
//nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
//nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
//The distinct triplets are [-1,0,1] and [-1,-1,2].

//Example 2:

//Input: nums = [0,1,1]

//Output: []
//Explanation: The only possible triplet does not sum up to 0.



class Solution {
    /**
     * @param {number[]} nums
     *   so this is the input array
     *   we are looking for all triplets that add up to 0
     *
     * @return {number[][]}
     *   return an array of arrays
     *   each inner array is a triplet that sums to 0
     *
     * basically we need to : 
     * - sort first
     * - fix one number
     * - then use two pointers for the other two numbers
     * - skip duplicates so we dont repeat triplets
     */
    threeSum(nums) {

        // sort so we can use two pointer logic
        nums.sort((a, b) => a - b);

        const res = []; // store answers

        for (let i = 0; i < nums.length; i++) {

            // if number already > 0 we can stop
            // bc everything after will also be > 0
            if (nums[i] > 0) break;

            // skip duplicate starting numbers
            if (i > 0 && nums[i] === nums[i - 1]) continue;

            let l = i + 1; 
            let r = nums.length - 1;

            while (l < r) {

                const sum = nums[i] + nums[l] + nums[r];

                if (sum > 0) {
                    r--; // too big so move right down
                } 
                else if (sum < 0) {
                    l++; // too small so move left up
                } 
                else {
                    res.push([nums[i], nums[l], nums[r]]);

                    l++;
                    r--;

                    // skip duplicate left values
                    while (l < r && nums[l] === nums[l - 1]) {
                        l++;
                    }
                }
            }
        }

        return res;
    }
}
