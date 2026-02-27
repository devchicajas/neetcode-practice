//You are given an integer array heights where heights[i] represents the height of the 
//heights[i]represents the height of the i-th bar. 

//You may choose any two bars to form a container. Return the maximum amount of water a container can store.

//Constraints:

//2 <= height.length <= 1000
//0 <= height[i] <= 1000

class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        // Left pointer starts at the beginning
        let l = 0;

        // Right pointer starts at the end
        let r = heights.length - 1;

        // Store the maximum area found so far
        let res = 0;

        // Continue while pointers have not crossed
        while (l < r) {

            // Width between the two lines
            const width = r - l;

            // The container height is limited by the shorter line
            const height = Math.min(heights[l], heights[r]);

            // Calculate current area
            const area = height * width;

            // Update maximum area if current is larger
            res = Math.max(res, area);

            // Move the pointer pointing to the shorter line
            // Because the shorter line limits the height.
            
            if (heights[l] <= heights[r]) {
                l++;   // Try to find a taller left wall
            } else {
                r--;   // Try to find a taller right wall
            }
        }

        // Return the maximum water area found
        return res;
    }
}