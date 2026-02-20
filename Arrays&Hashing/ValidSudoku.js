/*
You are given a 9 x 9 Sudoku board board. A Sudoku board is valid if the following rules are followed:

Each row must contain the digits 1-9 without duplicates.
Each column must contain the digits 1-9 without duplicates.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without duplicates.

Return true if the Sudoku board is valid, otherwise return false.

Note: A board does not need to be full or be solvable to be valid.

Example 1:

Input: board =
[
 ["1","2",".",".","3",".",".",".","."],
 ["4",".",".","5",".",".",".",".","."],
 [".","9","8",".",".",".",".",".","3"],
 ["5",".",".",".","6",".",".",".","4"],
 [".",".",".","8",".","3",".",".","5"],
 ["7",".",".",".","2",".",".",".","6"],
 [".",".",".",".",".",".","2",".","."],
 [".",".",".","4","1","9",".",".","8"],
 [".",".",".",".","8",".",".","7","9"]
]

Output: true


Example 2:

Input: board =
[
 ["1","2",".",".","3",".",".",".","."],
 ["4",".",".","5",".",".",".",".","."],
 [".","9","1",".",".",".",".",".","3"],
 ["5",".",".",".","6",".",".",".","4"],
 [".",".",".","8",".","3",".",".","5"],
 ["7",".",".",".","2",".",".",".","6"],
 [".",".",".",".",".",".","2",".","."],
 [".",".",".","4","1","9",".",".","8"],
 [".",".",".",".","8",".",".","7","9"]
]

Output: false

Explanation:
There are two 1's in the top-left 3x3 sub-box.

Constraints:

board.length == 9
board[i].length == 9
board[i][j] is a digit 1-9 or '.'
*/

/*
PREP

P — Parameters
isValidSudoku(board: character[][])
A 9 x 9 Sudoku board where each cell is "1"-"9" or "."

R — Return
boolean
true if the board is valid, false otherwise

E — Example
Valid board → returns true
Board with duplicate in row, column, or 3x3 box → returns false

P — Pseudocode
create 9 sets for rows
create 9 sets for columns
create 9 sets for sub-boxes

for each cell in board:
    if cell is "." continue
    determine box index
    if value exists in row, column, or box:
        return false
    add value to row, column, and box

return true
*/

class Solution {

    /**
     * @param {character[][]} board   // 9x9 Sudoku grid
     * @return {boolean}             // true if valid, false otherwise
     */
    isValidSudoku(board) {

        // Create 9 sets for rows
        const rows = Array.from({ length: 9 }, () => new Set());

        // Create 9 sets for columns
        const cols = Array.from({ length: 9 }, () => new Set());

        // Create 9 sets for 3x3 sub-boxes
        const boxes = Array.from({ length: 9 }, () => new Set());

        // Loop through every cell in the 9x9 board
        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {

                // Current cell value
                const value = board[r][c];

                // Skip empty cells
                if (value === ".") continue;

                // Determine which 3x3 box this cell belongs to
                // Each box gets an index from 0 to 8
                const boxIndex = Math.floor(r / 3) * 3 + Math.floor(c / 3);

                // If number already exists in row → invalid
                if (rows[r].has(value)) return false;

                // If number already exists in column → invalid
                if (cols[c].has(value)) return false;

                // If number already exists in sub-box → invalid
                if (boxes[boxIndex].has(value)) return false;

                // Otherwise store the number in row, column, and box
                rows[r].add(value);
                cols[c].add(value);
                boxes[boxIndex].add(value);
            }
        }

        // If no duplicates found, board is valid
        return true;
    }
}
