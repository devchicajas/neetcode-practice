/**
 * Serialize and Deserialize Binary Tree (Hard)
 *
 * Problem:
 * Implement an algorithm to serialize and deserialize a binary tree.
 *
 * Serialization is the process of converting an in-memory data structure
 * into a string so it can be stored or transmitted and reconstructed later.
 *
 * Your task is to ensure that a binary tree can be serialized into a string
 * and then deserialized back into the original tree structure.
 *
 * There is no strict requirement on the format, as long as it correctly
 * reconstructs the tree.
 *
 * Note:
 * The example format matches how NeetCode represents binary trees,
 * but you do not have to follow that exact format.
 *
 * Examples:
 * Input: root = [1,2,3,null,null,4,5]
 * Output: [1,2,3,null,null,4,5]
 *
 * Input: root = []
 * Output: []
 *
 * Constraints:
 * - 0 <= number of nodes <= 1000
 * - -1000 <= Node.val <= 1000
 *
 * Notes:
 * - You must support both serialization and deserialization
 * - The structure of the tree must be preserved exactly
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

class Codec {
    /**
     * Encodes a tree to a single string.
     *
     * Strategy:
     * - Use DFS (preorder traversal: root → left → right)
     * - Store node values in an array
     * - Use "N" to represent null nodes so structure is preserved
     *
     * @param {TreeNode} root
     * @return {string}
     */
    serialize(root) {
        const res = [];

        // Fill the array using DFS
        this.dfsSerialize(root, res);

        // Convert array to string
        return res.join(',');
    }

    /**
     * Helper function for serialization (DFS preorder)
     */
    dfsSerialize(node, res) {
        // If node is null, mark it so we can rebuild structure later
        if (node === null) {
            res.push('N');
            return;
        }

        // Add current node value
        res.push(node.val.toString());

        // Recurse left and right
        this.dfsSerialize(node.left, res);
        this.dfsSerialize(node.right, res);
    }

    /**
     * Decodes your encoded data to tree.
     *
     * Strategy:
     * - Split string into array
     * - Rebuild tree using DFS in same preorder order
     * - Use a pointer (index) to track position in array
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
        // Convert string back into array
        const values = data.split(',');

        let i = 0; // Pointer to track current position

        /**
         * Helper DFS to rebuild the tree
         */
        function dfs() {
            // If we hit 'N', this is a null node
            if (values[i] === 'N') {
                i++;
                return null;
            }

            // Create node from current value
            const node = new TreeNode(Number(values[i]));
            i++;

            // Rebuild left subtree
            node.left = dfs();

            // Rebuild right subtree
            node.right = dfs();

            return node;
        }

        // Start rebuilding from root
        return dfs();
    }
}