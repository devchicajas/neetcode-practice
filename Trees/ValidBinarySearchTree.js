/*
Given the root of a binary tree, return true if it is a valid binary search tree,
otherwise return false.

A valid binary search tree satisfies the following constraints:
- The left subtree of every node contains only nodes with keys less than the node's key.
- The right subtree of every node contains only nodes with keys greater than the node's key.
- Both the left and right subtrees must also be valid binary search trees.

Example 1:
Input: root = [2,1,3]
Output: true

Example 2:
Input: root = [1,2,3]
Output: false
Explanation: The root node's value is 1 but its left child's value is 2 which is greater than 1.

Constraints:
- 1 <= Number of nodes <= 1000
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
     * @return {boolean}
     */
    isValidBST(root) {

        // Helper DFS function with min/max bounds
        const dfs = (node, min, max) => {
            // If node is null, it's valid
            if (!node) return true;

            // Check if current node violates BST rules
            // It must be strictly between min and max
            if (node.val <= min || node.val >= max) {
                return false;
            }

            // Recursively check left and right subtrees
            // Left subtree: values must be < node.val
            // Right subtree: values must be > node.val
            return (
                dfs(node.left, min, node.val) &&
                dfs(node.right, node.val, max)
            );
        };

        // Start DFS with infinite bounds
        return dfs(root, -Infinity, Infinity);
    }
}