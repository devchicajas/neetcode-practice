/*
Given an integer array nums, return an array output where output[i] is the product of all the elements of nums except nums[i].

Each product is guaranteed to fit in a 32-bit integer.

Follow-up: Could you solve it in 
O(n) time without using the division operation?

Example 1:

Input: nums = [1,2,4,6]

Output: [48,24,12,8]

Example 2:

Input: nums = [-1,0,1,2,3]

Output: [0,-6,0,0,0]

Constraints:

2 <= nums.length <= 1000  
-20 <= nums[i] <= 20
*/
/*
PREP

P — Parameters
productExceptSelf(nums: number[])

R — Return
number[]
An array where each element is the product of all numbers except itself

E — Example
Input:  [1,2,4,6]
Output: [48,24,12,8]

P — Pseudocode
create result array filled with 1

prefix pass:
    result[i] = result[i-1] * nums[i-1]

postfix pass:
    result[i] *= postfix
    postfix *= nums[i]

return result
*/

class Solution {

    /**
     * @param {number[]} nums   // Input array
     * @return {number[]}      // Output array where each index is product except itself
     */
    productExceptSelf(nums) {

        // n = number of elements in nums
        const n = nums.length;

        // Create result array filled with 1
        // 1 is used because it doesn't affect multiplication
        const res = new Array(n).fill(1);

        // ---------------- PREFIX PASS ----------------
        // res[i] will store the product of all numbers to the LEFT of i

        for (let i = 1; i < n; i++) {

            // res[i - 1] already has product of elements before (i - 1)
            // multiply by nums[i - 1] to include the next number
            res[i] = res[i - 1] * nums[i - 1];
        }

        // Example after prefix pass for [1,2,4,6]:
        // res = [1, 1, 2, 8]


        // ---------------- POSTFIX PASS ----------------
        // postfix stores product of all numbers to the RIGHT

        let postfix = 1;

        for (let i = n - 1; i >= 0; i--) {

            // Multiply left product with right product
            res[i] *= postfix;

            // Update postfix to include current number
            postfix *= nums[i];
        }

        // Final result now contains product except self
        return res;
    }
}
