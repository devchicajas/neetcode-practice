/**
 * Kth Smallest Element in a Binary Search Tree
 *
 * Problem:
 * Given the root of a binary search tree (BST) and an integer k,
 * return the kth smallest value (1-indexed) in the tree.
 *
 * A binary search tree satisfies:
 * - The left subtree of a node contains only nodes with values less than the node's value.
 * - The right subtree of a node contains only nodes with values greater than the node's value.
 * - Both left and right subtrees must also be BSTs.
 *
 * Example 1:
 * Input: root = [2,1,3], k = 1
 * Output: 1
 *
 * Example 2:
 * Input: root = [4,3,5,2,null], k = 4
 * Output: 5
 *
 * Constraints:
 * - 1 <= k <= number of nodes in the tree <= 1000
 * - 0 <= Node.val <= 1000
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
     * Finds the kth smallest element in a Binary Search Tree (BST)
     *
     * Key idea:
     * - In-order traversal of a BST (left → root → right)
     *   visits nodes in sorted (ascending) order.
     *
     * @param {TreeNode} root
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        let count = 0;        // Tracks how many nodes we've visited
        let result = null;    // Will store the kth smallest value

        /**
         * In-order DFS traversal
         * @param {TreeNode} node
         */
        function dfs(node) {
            // Base case: if node is null, stop recursion
            if (!node) return;

            // Traverse left subtree first (smaller values)
            dfs(node.left);

            // Visit current node
            count++;

            // If this is the kth node visited, store the result
            if (count === k) {
                result = node.val;
                return; // Early stop (optional optimization)
            }

            // Traverse right subtree (larger values)
            dfs(node.right);
        }

        // Start traversal from root
        dfs(root);

        return result;
    }
}

