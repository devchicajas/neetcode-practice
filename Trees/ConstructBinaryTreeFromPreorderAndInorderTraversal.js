/**
 * Construct Binary Tree from Preorder and Inorder Traversal
 *
 * Problem:
 * You are given two integer arrays: preorder and inorder.
 *
 * - preorder represents the preorder traversal of a binary tree
 * - inorder represents the inorder traversal of the same tree
 *
 * Both arrays:
 * - Have the same length
 * - Contain unique values
 *
 * Task:
 * Reconstruct the binary tree from the preorder and inorder traversals
 * and return its root.
 *
 * Example 1:
 * Input: preorder = [1,2,3,4], inorder = [2,1,3,4]
 * Output: [1,2,3,null,null,null,4]
 *
 * Example 2:
 * Input: preorder = [1], inorder = [1]
 * Output: [1]
 *
 * Constraints:
 * - 1 <= inorder.length <= 1000
 * - inorder.length == preorder.length
 * - -1000 <= preorder[i], inorder[i] <= 1000
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
     * Reconstructs a binary tree from preorder and inorder traversals
     *
     * Key ideas:
     * - Preorder: [root, left, right] → first element is always the root
     * - Inorder:  [left, root, right] → root splits left and right subtrees
     *
     * Strategy:
     * 1. Take the first value from preorder → this is the root
     * 2. Find that value in inorder → splits tree into left and right parts
     * 3. Recursively build left and right subtrees
     *
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {
        // Map each value to its index in inorder for O(1) lookup
        const indexMap = new Map();
        for (let i = 0; i < inorder.length; i++) {
            indexMap.set(inorder[i], i);
        }

        let preorderIndex = 0; // Tracks current root in preorder

        /**
         * Helper function to build tree recursively
         * @param {number} left - left boundary in inorder
         * @param {number} right - right boundary in inorder
         * @return {TreeNode}
         */
        function helper(left, right) {
            // If there are no elements to construct the tree
            if (left > right) return null;

            // Pick current root from preorder
            const rootVal = preorder[preorderIndex++];
            const root = new TreeNode(rootVal);

            // Find root index in inorder
            const mid = indexMap.get(rootVal);

            // Build left subtree (elements before root in inorder)
            root.left = helper(left, mid - 1);

            // Build right subtree (elements after root in inorder)
            root.right = helper(mid + 1, right);

            return root;
        }

        // Start building from full inorder range
        return helper(0, inorder.length - 1);
    }
}