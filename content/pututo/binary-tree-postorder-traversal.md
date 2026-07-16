---
title: "Binary Tree Postorder Traversal"
slug: binary-tree-postorder-traversal
date: "2026-07-16"
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
    void porder(TreeNode* node,vector<int>& res) {
        if (node == nullptr) {
            return;
        }
        porder(node->left, res);
        porder(node->right, res);
        res.push_back(node->val);
    } 
    vector<int> postorderTraversal(TreeNode* root) {
        vector<int>res;
        porder(root,res);
        return res;
    }
};
~~~

# Submission Review
## Approach
- **Technique:** Recursive Depth-First Search (DFS).
- **Optimality:** Optimal. It visits each node exactly once, which is the theoretical lower bound for tree traversal.

## Complexity
- **Time Complexity:** $O(n)$, where $n$ is the number of nodes in the binary tree.
- **Space Complexity:** $O(h)$, where $h$ is the height of the tree, representing the recursion stack depth (worst case $O(n)$ for a skewed tree).

## Efficiency Feedback
- The implementation is highly efficient.
- Using a reference to the `vector<int>` avoids redundant copying during recursive calls, ensuring linear time complexity.
- No significant further optimizations are possible for a standard postorder traversal.

## Code Quality
- **Readability:** Good. The logic is clean and follows standard recursive conventions.
- **Structure:** Good. Separation between the helper function and the entry point is standard and appropriate.
- **Naming:** Moderate. While `porder` and `res` are understandable, more descriptive names like `traverse` or `result` would improve professional clarity.
- **Concrete Improvements:** 
    - Consider using `std::vector::reserve` if the number of nodes is known, or if memory allocation overhead is a concern for very deep trees, though this is rarely necessary in typical competitive programming constraints.
    - Adding `const` to the helper function parameters (where applicable) is not possible here as the vector must be mutable.

---

# Question Revision
### Revision Report: Binary Tree Postorder Traversal

**Pattern:** Depth-First Search (DFS) / Recursion

**Brute Force:**
Use a helper function to recursively traverse the left subtree, then the right subtree, and finally append the current node's value to the result list. This implicitly uses the call stack to manage state.

**Optimal Approach:**
*   **Recursive:** Visit nodes in the order: Left → Right → Root. 
    *   **Time:** $O(n)$ where $n$ is the number of nodes.
    *   **Space:** $O(h)$ where $h$ is the tree height (worst case $O(n)$ for skewed trees).
*   **Iterative:** Use a stack to simulate recursion. Since postorder is the reverse of "Root → Right → Left" traversal, push nodes to the stack, record "Root → Right → Left," then reverse the final result list.
    *   **Time:** $O(n)$
    *   **Space:** $O(n)$

**The 'Aha' Moment:**
When you realize postorder traversal is just the exact reverse of a modified preorder traversal (Root → Right → Left), you can bypass complex stack management for the iterative approach.

**Summary:** 
To implement postorder iteratively without complex state tracking, perform a modified preorder traversal (Root-Right-Left) and simply reverse the final output list.

---