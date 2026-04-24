/*
You are given the root of a binary tree. Return only the values of the nodes that are
visible from the right side of the tree, ordered from top to bottom.

Example 1:
Input: root = [1,2,3,null,4,null,5]
Output: [1,3,5]

Example 2:
Input: root = [1,2,3,4,null,null,null,5]
Output: [1,3,4,5]

Example 3:
Input: root = [1,null,2]
Output: [1,2]

Example 4:
Input: root = []
Output: []

Constraints:
- 0 <= number of nodes in the tree <= 100
- -100 <= Node.val <= 100
*/


/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[]}
     */
    rightSideView(root) {
        // If tree is empty, return empty array
        if (!root) return [];

        const result = []; // Stores the rightmost values
        const queue = [root]; // BFS queue

        // Traverse level by level
        while (queue.length > 0) {
            const levelSize = queue.length;

            // Process each level
            for (let i = 0; i < levelSize; i++) {
                const node = queue.shift();

                // If it's the LAST node in this level,
                // it is the rightmost node → add to result
                if (i === levelSize - 1) {
                    result.push(node.val);
                }

                // Add children to queue (left first, then right)
                if (node.left) queue.push(node.left);
                if (node.right) queue.push(node.right);
            }
        }

        return result;
    }
}