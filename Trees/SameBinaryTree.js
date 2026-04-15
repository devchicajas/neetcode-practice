/*
Same Binary Tree

Given the roots of two binary trees p and q, return true if the trees are 
equivalent, otherwise return false.

Two binary trees are considered equivalent if they share the exact same 
structure and the nodes have the same values.

Example 1:
Input: p = [1,2,3], q = [1,2,3]
Output: true

Example 2:
Input: p = [4,7], q = [4,null,7]
Output: false

Example 3:
Input: p = [1,2,3], q = [1,3,2]
Output: false

Constraints:
- 0 <= number of nodes in both trees <= 100
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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {

        // if both nodes are null → trees match at this branch
        if (!p && !q) return true;

        // if one is null and the other isn't → not the same
        if (!p || !q) return false;

        // if values are different → not the same
        if (p.val !== q.val) return false;

        // recursively check left AND right subtrees
        return this.isSameTree(p.left, q.left) &&
               this.isSameTree(p.right, q.right);
    }
}