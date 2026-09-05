---
title: "Binary Tree Inorder Traversal"
slug: binary-tree-inorder-traversal
date: "2026-08-11"
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
    void inorder(TreeNode* root, vector<int>& ans) {
        if (root == nullptr) return;

        inorder(root->left, ans);
        ans.push_back(root->val);
        inorder(root->right, ans);
    }

    vector<int> inorderTraversal(TreeNode* root) {
        vector<int> ans;
        inorder(root, ans);
        return ans;
    }
};
~~~

# Submission Review
## Approach
* **Technique:** Recursive Depth-First Search (DFS) for Inorder Traversal.
* **Optimality:** Optimal. This is the standard, most readable approach for performing an inorder traversal with $O(N)$ time complexity.

## Complexity
* **Time Complexity:** $O(N)$, where $N$ is the number of nodes in the tree, as every node is visited exactly once.
* **Space Complexity:** $O(H)$, where $H$ is the height of the tree, representing the maximum call stack depth. $O(H)$ ranges from $O(\log N)$ for balanced trees to $O(N)$ for skewed trees.

## Efficiency Feedback
* The efficiency is excellent for standard tree traversals. 
* **Note:** If constant auxiliary space (excluding the output vector) is required, one would need to implement **Morris Traversal** ($O(1)$ extra space). However, this increases code complexity and modifies the tree structure temporarily, which is generally not recommended unless strictly required.

## Code Quality
* **Readability:** Good. The logic is clean and follows standard idiomatic C++.
* **Structure:** Good. Separation of the helper function `inorder` keeps the `inorderTraversal` interface clean.
* **Naming:** Good. Function and variable names follow common conventions.
* **Concrete Improvements:**
    * The code is already highly idiomatic. No functional changes are strictly necessary.
    * If the tree is extremely deep, there is a theoretical risk of stack overflow, though this is rarely an issue in competitive programming environments given standard stack limits.

---

# Question Revision
### Revision Report: Binary Tree Inorder Traversal

**Pattern:** Depth-First Search (DFS) / Tree Traversal

**Brute Force:**
Use recursion to visit the left subtree, process the root, and visit the right subtree.
*   **Time:** $O(n)$
*   **Space:** $O(h)$ where $h$ is the tree height (due to recursion stack).

**Optimal Approach (Iterative):**
Use an explicit `stack` to simulate the recursion. Traverse as far left as possible, pushing nodes onto the stack; once you hit `null`, pop from the stack, record the node, and move to the right child.
*   **Time:** $O(n)$
*   **Space:** $O(h)$ for the stack.

**The 'Aha' Moment:**
The requirement to process nodes in "Left -> Root -> Right" order is the universal signal that you must delay node processing until you have exhausted the left-branching path.

**Summary:**
Inorder traversal is simply a depth-first search that defers the "visit" step until you have finished exploring the left subtree.

---