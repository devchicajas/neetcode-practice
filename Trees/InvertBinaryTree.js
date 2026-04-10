/*
You are given the root of a binary tree.

Invert the binary tree and return its root.

To invert the tree:
- swap the left and right child of every node

Examples:

Input: root = [1,2,3,4,5,6,7]
Output: [1,3,2,7,6,5,4]

Input: root = [3,2,1]
Output: [3,1,2]

Input: root = []
Output: []

Constraints:
- 0 <= number of nodes <= 100
- -100 <= node values <= 100
*/


class Solution {
    /**
     * @param {TreeNode} root
     * @return {TreeNode}
     */
    invertTree(root) {

        // if node is null -> nothing to do
        // this stops recursion
        if (!root) return null;

        // store left child temporarily
        // because we are about to overwrite it
        let temp = root.left;

        // move right child to left
        root.left = root.right;

        // move original left to right
        root.right = temp;

        // now current node is swapped
        // move down the tree and repeat

        // invert left subtree (which used to be right)
        this.invertTree(root.left);

        // invert right subtree (which used to be left)
        this.invertTree(root.right);

        // return root after all swaps
        return root;
    }
}