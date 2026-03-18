//You are given an m x n 2-D integer array matrix and an integer target.

//Each row in matrix is sorted in non-decreasing order.
//The first integer of every row is greater than the last integer of the previous row.
//Return true if target exists within matrix or false otherwise.

//Can you write a solution that runs in O(log(m * n)) time?

//Example 1:



//Input: matrix = [[1,2,4,8],[10,11,12,13],[14,20,30,40]], target = 10

//Output: true
//Example 2:



//Input: matrix = [[1,2,4,8],[10,11,12,13],[14,20,30,40]], target = 15

//Output: false
//Constraints:

//m == matrix.length
//n == matrix[i].length
//1 <= m, n <= 100
//-10000 <= matrix[i][j], target <= 10000


class Solution {

    searchMatrix(matrix, target) {

        // Get the number of rows in the matrix
        const rows = matrix.length;

        // Get the number of columns in the matrix
        const cols = matrix[0].length;

        // We treat the matrix like a flat sorted array
        // left pointer starts at the beginning
        let left = 0;

        // right pointer starts at the last element index
        let right = rows * cols - 1;

        // Continue searching while left pointer has not crossed right pointer
        while (left <= right) {

            // Find the middle index
            // Math.floor ensures we get a whole number
            const mid = Math.floor((left + right) / 2);

            // Convert the 1D index into a row index
            const row = Math.floor(mid / cols);

            // Convert the 1D index into a column index
            const col = mid % cols;

            // Get the value from the matrix at that position
            const value = matrix[row][col];

            // If the value equals the target, we found it
            if (value === target) {
                return true;
            }

            // If the value is smaller than the target
            // the target must be in the right half
            if (value < target) {
                left = mid + 1;
            }

            // If the value is larger than the target
            // the target must be in the left half
            else {
                right = mid - 1;
            }
        }

        // If we finish the loop and didn't find the target
        // it means the target does not exist in the matrix
        return false;
    }
}

