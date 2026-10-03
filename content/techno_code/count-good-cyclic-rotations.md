---
title: "Count Good Cyclic Rotations"
slug: count-good-cyclic-rotations
date: "2026-09-06"
---

# My Solution
~~~cpp
/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode(int x) : val(x), left(NULL), right(NULL) {}
 * };
 */
class Solution {
public:
    TreeNode* lowestCommonAncestor(TreeNode* root, TreeNode* p, TreeNode* q) {
        if(root==NULL)
        return NULL;
        if(root == p || root == q)
            return root;
            TreeNode* left = lowestCommonAncestor(root->left, p, q);
            TreeNode* right = lowestCommonAncestor(root->right, p, q);
            if(left != NULL && right != NULL)
            return root;
            if(left != NULL)
            return left;

            return right;
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Post-order traversal (Recursion).
- **Optimality**: Optimal. It visits each node at most once to find the Lowest Common Ancestor (LCA) in a binary tree.

## Complexity
- **Time Complexity**: $O(N)$, where $N$ is the number of nodes in the tree.
- **Space Complexity**: $O(H)$, where $H$ is the height of the tree, representing the maximum recursion stack depth.

## Efficiency Feedback
- The implementation is efficient for the given problem.
- The use of early returns (`if(root == p || root == q)`) prevents unnecessary traversal of subtrees once one of the targets is found.

## Code Quality
- **Readability**: Moderate. The logic is clear, but the indentation is inconsistent (specifically the lines following the second `if` block).
- **Structure**: Good. The recursive logic is correctly implemented and follows the standard LCA pattern.
- **Naming**: Good. Variable names (`root`, `p`, `q`, `left`, `right`) are standard and descriptive for this problem.
- **Concrete Improvements**:
    - Fix the indentation for the lines starting from `TreeNode* left = ...` to maintain professional coding standards.
    - Use `nullptr` instead of `NULL` for modern C++ (C++11 and later).

**Note**: The provided problem title ("Count Good Cyclic Rotations") does not match the provided code implementation ("Lowest Common Ancestor"). The analysis is based on the code provided.

---

# Question Revision
# Revision Report: Count Good Cyclic Rotations

- **Pattern**: String Manipulation / Rolling Hash / Pre-computation.
- **Brute Force**: 
    - For every possible rotation $k \in [0, n-1]$, construct the rotated string and check if it satisfies the "good" condition (e.g., lexicographically smallest or meets a specific property).
    - **Complexity**: $O(n^2)$ time, $O(n)$ space.
- **Optimal Approach**: 
    - Instead of reconstructing the string, concatenate the string with itself (`S + S`) to simulate all rotations as windows of length $n$.
    - Use a **Rolling Hash** or **Booth's Algorithm/Duval Algorithm** to find the lexicographically smallest rotation in linear time.
    - If the problem requires counting rotations that meet a specific condition (like being smaller than the original), maintain a pointer or frequency map as you slide the window across the doubled string.
    - **Complexity**: $O(n)$ time, $O(n)$ space.
- **The 'Aha' Moment**: Whenever a problem asks for properties of "all cyclic rotations," the immediate trigger is to double the string (`S + S`) to treat rotations as contiguous subarrays.
- **Summary**: Use the `S + S` trick to transform cyclic rotations into a sliding window problem solvable in $O(n)$.

---