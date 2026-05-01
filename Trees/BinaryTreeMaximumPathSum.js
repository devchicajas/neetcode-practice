/**
 * Binary Tree Maximum Path Sum (Hard)
 *
 * Problem:
 * Given the root of a non-empty binary tree, return the maximum path sum of any non-empty path.
 *
 * A path in a binary tree is a sequence of nodes where each pair of adjacent nodes has an edge connecting them.
 * A node cannot appear in the sequence more than once.
 * The path does not need to include the root.
 *
 * The path sum is the sum of the node values along the path.
 *
 * Examples:
 * Input: root = [1,2,3]
 * Output: 6
 * Explanation: The path is 2 -> 1 -> 3
 *
 * Input: root = [-15,10,20,null,null,15,5,-5]
 * Output: 40
 * Explanation: The path is 15 -> 20 -> 5
 *
 * Constraints:
 * - 1 <= number of nodes <= 1000
 * - -1000 <= Node.val <= 1000
 *
 * Notes:
 * - Path can start and end at any node
 * - Must contain at least one node
 */




class Solution {
    /**
     * Finds the maximum path sum in a binary tree
     *
     * Key idea:
     * - A path can start and end at any node
     * - At each node, we consider it as the "highest point" (split point)
     *   where the path can go left + node + right
     *
     * Strategy:
     * - Use DFS to compute the max gain from each node
     * - Ignore negative paths (treat them as 0)
     * - Keep a global max to track the best path seen
     *
     * @param {TreeNode} root
     * @return {number}
     */
    maxPathSum(root) {
        let maxSum = -Infinity; // Stores the best path sum found

        /**
         * Returns the maximum gain from this node to its parent
         * (can only choose one side: left OR right)
         * 
         * @param {TreeNode} node
         * @return {number}
         */
        function dfs(node) {
            // Base case: no node contributes 0
            if (!node) return 0;

            // Get max gain from left subtree (ignore negatives)
            const leftGain = Math.max(dfs(node.left), 0);

            // Get max gain from right subtree (ignore negatives)
            const rightGain = Math.max(dfs(node.right), 0);

            // Path that passes through this node (acts as split point)
            const currentPath = node.val + leftGain + rightGain;

            // Update global max if this path is better
            maxSum = Math.max(maxSum, currentPath);

            // Return the best one-sided path (for parent use)
            return node.val + Math.max(leftGain, rightGain);
        }

        // Start DFS from root
        dfs(root);

        return maxSum;
    }
}