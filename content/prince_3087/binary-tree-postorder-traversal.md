---
title: "Binary Tree Postorder Traversal"
slug: binary-tree-postorder-traversal
date: "2026-06-30"

---

# My Solution
~~~/**
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
    vector<int> postorderTraversal(TreeNode* root) {
        vector<int>res;
        fun(root,res);
        return res;
    }
    void fun(TreeNode*node,vector<int>&res){
        if(node==NULL){
            return;
        }
        fun(node->left,res);
        fun(node->right,res);
        res.push_back(node->val);
        return;
    }
};
~~~

# Submission Review

## Approach

- **Technique**: Recursive Depth-First Search (DFS).
- **Optimality**: Optimal. Postorder traversal inherently requires visiting all nodes, and recursion is the standard implementation for this pattern.

## Complexity

- **Time Complexity**: $O(N)$, where $N$ is the number of nodes in the tree. Each node is visited exactly once.
- **Space Complexity**: $O(N)$.
    - **Stack Space**: $O(H)$ where $H$ is the height of the tree (worst case $O(N)$ for a skewed tree).
    - **Output Space**: $O(N)$ to store the result vector.

## Efficiency Feedback
- The use of a reference (`vector<int>&res`) in the helper function prevents expensive vector copies during recursive calls.
- The runtime and memory usage are as low as possible for a recursive approach.

## Code Quality

- **Readability**: Moderate. The logic is simple, but the helper function name is non-descriptive.
- **Structure**: Good. The separation between the public interface and the private recursive logic is correct.
- **Naming**: Poor. `fun` is a generic name; it should be renamed to something descriptive like `traverse` or `postorderHelper`.
- **Concrete Improvements**:
    - Replace `NULL` with `nullptr` to follow modern C++ standards.
    - Rename `fun` to `postorder`.
    - Mark the helper function `fun` as `private` to encapsulate it within the class.

---

# Question Revision

#

## Binary Tree Postorder Traversal

**Pattern:** DFS / Tree Traversal

**Brute Force:** 
Use recursion to traverse the left subtree, then the right subtree, and finally visit the root node.

**Optimal Approach:** 
Iterative traversal using a stack to simulate a modified preorder (Root $\rightarrow$ Right $\rightarrow$ Left). Push the results into a list and reverse it at the end to achieve the Postorder sequence (Left $\rightarrow$ Right $\rightarrow$ Root).
- **Time Complexity:** $O(n)$
- **Space Complexity:** $O(n)$

**The 'Aha' Moment:** 
Postorder (Left-Right-Root) is simply the reverse of a mirrored Preorder traversal (Root-Right-Left).

**Summary:** 
Perform a Root-Right-Left iterative traversal and reverse the output to get Postorder.

---
