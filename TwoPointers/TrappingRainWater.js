//You are given an array of non-negative integers height which represent an elevation map. 
// Each value height[i] represents the height of a bar, which has a width of 1.

//Return the maximum area of water that can be trapped between the bars.
//Constraints:

//1 <= height.length <= 1000
//0 <= height[i] <= 1000

class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {

        // if array is empty, no water can be trapped
        if (!height || height.length === 0) {
            return 0;
        }

        // Left pointer
        let l = 0;

        // Right pointer
        let r = height.length - 1;

        // Track highest wall seen so far from the left
        let leftMax = height[l];

        // Track highest wall seen so far from the right
        let rightMax = height[r];

        // Total water trapped
        let res = 0;

        // Continue until pointers meet
        while (l < r) {

            // Process the side with the smaller max
            // because the smaller side determines
            // how much water we can trap
            if (leftMax < rightMax) {

                // Move left pointer inward
                l++;

                // Update the maximum wall seen from left
                leftMax = Math.max(leftMax, height[l]);

                // Water trapped at this index:
                // leftMax - current height
                res += leftMax - height[l];

            } else {

                // Move right pointer inward
                r--;

                // Update the maximum wall seen from right
                rightMax = Math.max(rightMax, height[r]);

                // Water trapped at this index:
                // rightMax - current height
                res += rightMax - height[r];
            }
        }

        return res;
    }
}