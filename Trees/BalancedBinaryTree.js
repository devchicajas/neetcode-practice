/*
Balanced Binary Tree

Given a binary tree, return true if it is height-balanced and false otherwise.

A height-balanced binary tree is defined as a binary tree in which the left and 
right subtrees of every node differ in height by no more than 1.

Example 1:
Input: root = [1,2,3,null,null,4]
Output: true

Example 2:
Input: root = [1,2,3,null,null,4,null,5]
Output: false

Example 3:
Input: root = []
Output: true

Constraints:
- The number of nodes is in the range [0, 1000]
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
     * @return {boolean}
     */
    isBalanced(root) {

        // helper function to return height
        // returns -1 if subtree is NOT balanced
        const dfs = (node) => {

            // base case: empty node has height 0
            if (!node) return 0;

            // get left subtree height
            let left = dfs(node.left);

            // if left subtree is unbalanced, stop early
            if (left === -1) return -1;

            // get right subtree height
            let right = dfs(node.right);

            // if right subtree is unbalanced, stop early
            if (right === -1) return -1;

            // check if current node is balanced
            if (Math.abs(left - right) > 1) return -1;

            // return height if balanced
            return Math.max(left, right) + 1;
        };

        // if dfs returns -1, tree is not balanced
        return dfs(root) !== -1;
    }
}