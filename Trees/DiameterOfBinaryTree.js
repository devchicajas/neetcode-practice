/*
Diameter of Binary Tree

The diameter of a binary tree is defined as the length of the longest path 
between any two nodes within the tree. The path does not necessarily have to 
pass through the root.

The length of a path between two nodes in a binary tree is the number of edges 
between the nodes. Note that the path cannot include the same node twice.

Given the root of a binary tree root, return the diameter of the tree.

Example 1:
Input: root = [1,null,2,3,4,5]
Output: 3
Explanation: 3 is the length of the path [1,2,3,5] or [5,3,2,4].

Example 2:
Input: root = [1,2,3]
Output: 2

Constraints:
- 1 <= number of nodes <= 100
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
     * @return {number}
     */
    diameterOfBinaryTree(root) {

        let diameter = 0;

        const dfs = (node) => {

            // if no node, height is 0
            if (!node) return 0;

            // go deep left
            let left = dfs(node.left);

            // go deep right
            let right = dfs(node.right);

            // update longest path seen so far
            diameter = Math.max(diameter, left + right);

            // return height to parent
            return Math.max(left, right) + 1;
        };

        dfs(root);

        return diameter;
    }
}