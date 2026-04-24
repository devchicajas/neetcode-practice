/*
Within a binary tree, a node x is considered "good" if the path from the root
to node x contains no nodes with a value greater than the value of node x.

Given the root of a binary tree, return the number of good nodes in the tree.

Example 1:
Input: root = [2,1,1,3,null,1,5]
Output: 3

Example 2:
Input: root = [1,2,-1,3,4]
Output: 4

Constraints:
- 1 <= number of nodes in the tree <= 100
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
    goodNodes(root) {
        // Helper DFS function
        const dfs = (node, maxSoFar) => {
            // Base case: if node is null, no good nodes
            if (!node) return 0;

            let count = 0;

            // Check if current node is "good"
            // A node is good if its value is >= max value seen so far
            if (node.val >= maxSoFar) {
                count = 1;
                maxSoFar = node.val; // update max for this path
            }

            // Recurse left and right, passing updated max
            count += dfs(node.left, maxSoFar);
            count += dfs(node.right, maxSoFar);

            return count;
        };

        // Start DFS with root value as initial max
        return dfs(root, root.val);
    }
}