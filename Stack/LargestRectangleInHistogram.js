//You are given an array of integers heights where heights[i] represents the height of a bar. The width of each bar is 1.

//Return the area of the largest rectangle that can be formed among the bars.

//Note: This chart is known as a histogram.

//Example 1:

//Input: heights = [7,1,7,2,2,4]

//Output: 8
//Example 2:

//Input: heights = [1,3,7]

//Output: 7
//Constraints:

//1 <= heights.length <= 1000.
//0 <= heights[i] <= 1000



class Solution {
  largestRectangleArea(heights) {

    // Stack to store indices of histogram bars
    const stack = [];

    // Track the maximum rectangle area
    let maxArea = 0;

    // Add sentinel bar to process remaining stack elements
    heights.push(0);

    // Loop through all bars
    for (let i = 0; i < heights.length; i++) {

      // While current bar is smaller than the bar at the top of the stack
      // we know the rectangle for that taller bar must end here
      while (stack.length && heights[i] < heights[stack[stack.length - 1]]) {

        // Remove index of the bar from stack
        const poppedIndex = stack.pop();

        // Height of rectangle
        const height = heights[poppedIndex];

        // Width calculation
        // If stack is empty than rectangle extends to the start
        // Otherwise the rectangle width is between current index and new stack top
        const width = stack.length === 0
          ? i
          : i - stack[stack.length - 1] - 1;

        // Calculate rectangle area
        const area = height * width;

        // Update max area
        maxArea = Math.max(maxArea, area);
      }

      // Push current bar index into stack
      stack.push(i);
    }

    // Return largest rectangle area found
    return maxArea;
  }
}