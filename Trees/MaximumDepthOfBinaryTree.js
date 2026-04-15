/*
Maximum Depth of Binary Tree

Given the root of a binary tree, return its depth.

The depth of a binary tree is defined as the number of nodes
along the longest path from the root node down to the farthest leaf node.

Example 1:
Input: root = [1,2,3,null,null,4]
Output: 3

Example 2:
Input: root = []
Output: 0

Constraints:
- 0 <= number of nodes <= 100
- -100 <= Node.val <= 100
*/


class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    maxDepth(root) {

        // base case:
        // if the node doesn't exist, depth is 0
        if (!root) return 0;

        // get the depth of the left subtree
        let leftDepth = this.maxDepth(root.left);

        // get the depth of the right subtree
        let rightDepth = this.maxDepth(root.right);

        // return the larger depth + 1 for current node
        return Math.max(leftDepth, rightDepth) + 1;
    }
}