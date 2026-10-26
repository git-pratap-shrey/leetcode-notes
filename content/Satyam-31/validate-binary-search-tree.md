---
title: "Validate Binary Search Tree"
slug: validate-binary-search-tree
date: "2026-10-23"
---

# My Solution
~~~cpp
/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    TreeNode* insertIntoBST(TreeNode* root, int val) {
        if (root == nullptr) return new TreeNode(val);   

        if (val < root->val)
            root->left = insertIntoBST(root->left, val);
        else
            root->right = insertIntoBST(root->right, val);

        return root;
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Recursive traversal.
- **Correctness**: **Incorrect**. The code implements `insertIntoBST` (inserting a node into a BST) instead of the requested `Validate Binary Search Tree` functionality. It does not perform any validation logic.

## Complexity
- **Time Complexity**: $O(H)$, where $H$ is the height of the tree.
- **Space Complexity**: $O(H)$ due to the recursion stack.

## Efficiency Feedback
- The code is efficient for the task it *actually* performs (insertion), but it is completely irrelevant to the problem of validating a BST.

## Code Quality
- **Readability**: Good. The logic for insertion is clear.
- **Structure**: Good. Standard recursive structure for BST operations.
- **Naming**: Good. Follows standard conventions.
- **Concrete Improvements**: The entire implementation must be replaced. To validate a BST, the code should check if every node falls within a valid range `(min, max)` or perform an in-order traversal to ensure the sequence is strictly increasing.

---

# Question Revision
# Revision Report: Validate Binary Search Tree

- **Pattern:** DFS / Tree Traversal (with Range Constraints)
- **Brute Force:** Perform an In-order traversal to store all node values in an array, then iterate through the array to check if it is strictly increasing.
- **Optimal Approach:** 
    - Use a recursive DFS function that passes down a `min` and `max` boundary for each node.
    - For the root, boundaries are $(-\infty, +\infty)$.
    - When moving to the **left child**, update the `max` boundary to the current node's value.
    - When moving to the **right child**, update the `min` boundary to the current node's value.
    - If any node's value falls outside its boundaries, return `false`.
    - **Time Complexity:** $O(n)$ where $n$ is the number of nodes.
    - **Space Complexity:** $O(h)$ where $h$ is the height of the tree (recursion stack).
- **The 'Aha' Moment:** A node is not just compared to its immediate children, but must satisfy constraints imposed by all its ancestors.
- **Summary:** Use recursion to pass and tighten valid value ranges $[min, max]$ as you descend the tree.

---