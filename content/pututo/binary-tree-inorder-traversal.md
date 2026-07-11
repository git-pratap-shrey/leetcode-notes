---
title: "Binary Tree Inorder Traversal"
slug: binary-tree-inorder-traversal
date: "2026-07-11"
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
    void inorder(TreeNode* root,vector<int>& res){
        if(root==NULL){
            return;
        }
        inorder(root->left,res);
        res.push_back(root->val);
        inorder(root->right,res);
    }

    vector<int> inorderTraversal(TreeNode* root) {
        vector<int>res;
        inorder(root,res);
        return res;
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Recursive Depth-First Search (DFS).
*   **Optimality:** Optimal for standard recursive traversal. The time complexity is $O(n)$ because every node must be visited exactly once.

## Complexity
*   **Time Complexity:** $O(n)$, where $n$ is the number of nodes in the binary tree.
*   **Space Complexity:** $O(h)$, where $h$ is the height of the tree, representing the maximum depth of the call stack. In the worst case (a skewed tree), this is $O(n)$.

## Efficiency Feedback
*   The solution is efficient for typical inputs.
*   **Memory Overhead:** The recursion stack is the primary source of memory usage. If memory constraints are extremely tight for very deep trees, an iterative approach using an explicit `std::stack` or Morris Traversal ($O(1)$ auxiliary space) could be considered.

## Code Quality
*   **Readability:** Good. The logic is standard and easy to follow.
*   **Structure:** Good. Uses a clean helper function pattern to maintain the required function signature.
*   **Naming:** Good. `inorder` and `res` are standard conventions for this type of problem.
*   **Concrete Improvements:**
    *   **Pass by Reference:** You are correctly passing `vector<int>& res` by reference, which avoids unnecessary copying.
    *   **Modern C++:** You can use `nullptr` instead of `NULL` for better type safety in C++.
    *   **Namespace:** While acceptable for competitive programming, in production environments, avoid putting code inside `using namespace std;` if it were present; however, you have avoided this here, which is good practice.

---

# Question Revision
### Revision Report: Binary Tree Inorder Traversal

**Pattern:** Depth-First Search (DFS) / Stack-based Iteration

**Brute Force:** 
Perform a recursive traversal where you visit the left child, the current node, then the right child, appending values to a list at each step. 
*   **Time:** $O(n)$
*   **Space:** $O(n)$ (recursion stack depth)

**Optimal Approach:** 
Use an iterative approach with an explicit `Stack` to simulate the recursion. Push all left children onto the stack until reaching `null`, pop the node, record its value, and move to the right child.
*   **Time:** $O(n)$
*   **Space:** $O(h)$ where $h$ is the height of the tree.

**The 'Aha' Moment:** 
The requirement for "Inorder" specifically implies processing the root *between* the left and right subtrees, which is fundamentally a LIFO (Last-In-First-Out) stack operation when handled iteratively.

**Summary:** 
Inorder traversal is simply "Left-Root-Right," and using a stack allows you to pause the descent to process the root exactly when the left subtree is exhausted.

---