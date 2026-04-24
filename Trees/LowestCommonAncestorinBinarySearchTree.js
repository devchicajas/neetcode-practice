/*
Given a binary search tree (BST) where all node values are unique,
and two nodes from the tree p and q, return the lowest common ancestor (LCA) of the two nodes.

The lowest common ancestor between two nodes p and q is defined as the lowest node in a tree T
such that both p and q are descendants. A node can be a descendant of itself.

Example 1:
Input: root = [5,3,8,1,4,7,9,null,2], p = 3, q = 8
Output: 5

Example 2:
Input: root = [5,3,8,1,4,7,9,null,2], p = 3, q = 4
Output: 3
Explanation: The LCA of nodes 3 and 4 is 3, since a node can be a descendant of itself.

Constraints:
- 2 <= Number of nodes <= 100
- -100 <= Node.val <= 100
- p != q
- p and q will both exist in the BST
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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(root, p, q) {
        // Start at the root of the BST
        let current = root;

        // Traverse the tree until we find the LCA
        while (current !== null) {

            // If BOTH p and q are smaller than current,
            // then LCA must be in the LEFT subtree
            if (p.val < current.val && q.val < current.val) {
                current = current.left;
            }

            // If BOTH p and q are greater than current,
            // then LCA must be in the RIGHT subtree
            else if (p.val > current.val && q.val > current.val) {
                current = current.right;
            }

            else {
                // We found the split point:
                // - p and q are on different sides OR
                // - one of them equals current
                // This means current is the LCA
                return current;
            }
        }

        // Edge case (should not happen given constraints)
        return null;
    }
}
