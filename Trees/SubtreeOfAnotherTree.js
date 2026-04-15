/*
Subtree of Another Tree

Given the roots of two binary trees root and subRoot, return true if there is a 
subtree of root with the same structure and node values of subRoot and false otherwise.

A subtree of a binary tree is a tree that consists of a node in the tree and all 
of this node's descendants. The tree itself can also be considered a subtree of itself.

Example 1:
Input: root = [1,2,3,4,5], subRoot = [2,4,5]
Output: true

Example 2:
Input: root = [1,2,3,4,5,null,null,6], subRoot = [2,4,5]
Output: false

Constraints:
- 1 <= number of nodes in both trees <= 100
- -100 <= root.val, subRoot.val <= 100
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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {

        // helper to check if two trees are exactly the same
        const isSame = (p, q) => {

            // both null → match
            if (!p && !q) return true;

            // one null or values differ → not match
            if (!p || !q || p.val !== q.val) return false;

            // check left and right
            return isSame(p.left, q.left) &&
                   isSame(p.right, q.right);
        };

        // if main tree is empty → no subtree
        if (!root) return false;

        // check if current node starts a matching subtree
        if (isSame(root, subRoot)) return true;

        // otherwise, check left or right subtree
        return this.isSubtree(root.left, subRoot) ||
               this.isSubtree(root.right, subRoot);
    }
}
