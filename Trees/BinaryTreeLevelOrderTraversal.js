/*
Given a binary tree root, return the level order traversal of it as a nested list,
where each sublist contains the values of nodes at a particular level in the tree,
from left to right.

Example 1:
Input: root = [1,2,3,4,5,6,7]
Output: [[1],[2,3],[4,5,6,7]]

Example 2:
Input: root = [1]
Output: [[1]]

Example 3:
Input: root = []
Output: []

Constraints:
- 0 <= Number of nodes <= 1000
- -1000 <= Node.val <= 1000
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
     * @return {number[][]}
     */
    levelOrder(root) {
        // If the tree is empty, return an empty array
        if (!root) return [];

        const result = []; // Final result: array of levels
        const queue = [root]; // Queue for BFS

        // Process nodes level by level
        while (queue.length > 0) {
            const levelSize = queue.length; // Number of nodes in current level
            const currentLevel = []; // Store values for this level

            // Loop through all nodes in this level
            for (let i = 0; i < levelSize; i++) {
                const node = queue.shift(); // Remove from front of queue

                // Add node value to current level
                currentLevel.push(node.val);

                // Add left child to queue if it exists
                if (node.left) queue.push(node.left);

                // Add right child to queue if it exists
                if (node.right) queue.push(node.right);
            }

            // Add the current level to the result
            result.push(currentLevel);
        }

        return result;
    }
}