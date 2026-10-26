---
title: "Diameter of Binary Tree"
slug: diameter-of-binary-tree
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

bool ismirror(TreeNode* a, TreeNode* b){
    if(a==NULL && b==NULL) return true;
    if(a==NULL|| b==NULL) return false;
    if(a->val !=b->val) return false;
    return ismirror(a->left, b->right) &&   
               ismirror(a->right, b->left);


}
    bool isSymmetric(TreeNode* root) {
     if(root==NULL) return true;
     return ismirror(root->left,root->right);   
    }
};
~~~

# Submission Review
## Approach
- **Technique:** Recursion (Depth-First Search).
- **Correctness:** **Incorrect.** The provided code solves the "Symmetric Tree" problem, not the "Diameter of Binary Tree" problem. It checks if a tree is a mirror image of itself rather than calculating the longest path between any two nodes.

## Complexity
- **Time Complexity:** $O(N)$, where $N$ is the number of nodes in the tree, as it visits each node once.
- **Space Complexity:** $O(H)$, where $H$ is the height of the tree, due to the recursion stack.

## Efficiency Feedback
- The logic is efficient for the *Symmetric Tree* problem, but since it fails to address the *Diameter* problem, the runtime is irrelevant to the task.

## Code Quality
- **Readability:** Moderate. The logic is clear, but the solution is completely decoupled from the problem statement.
- **Structure:** Good. The helper function `ismirror` correctly separates the mirroring logic from the initial root check.
- **Naming:** Moderate. `ismirror` should follow camelCase (`isMirror`) to remain consistent with `isSymmetric`.
- **Improvements:** 
    - The code must be entirely rewritten to implement the Diameter logic (calculating heights of subtrees and updating a global maximum diameter).
    - Remove the `isSymmetric` and `ismirror` logic as they are irrelevant to the requested problem.

---

# Question Revision
# Revision Report: Diameter of Binary Tree

- **Pattern:** Depth First Search (DFS) / Post-order Traversal
- **Brute Force:** For every single node in the tree, calculate the max depth of its left and right children. The diameter at that node is `left_depth + right_depth`. The global answer is the maximum value found across all nodes.
- **Optimal Approach:** 
    - Use a recursive helper function that returns the **height** of the current subtree.
    - While computing height, calculate the local diameter (`left_height + right_height`) and update a global/member variable if it's the largest seen so far.
    - **Time Complexity:** $O(n)$ — each node is visited once.
    - **Space Complexity:** $O(h)$ — where $h$ is the tree height (recursion stack).
- **The 'Aha' Moment:** The diameter isn't necessarily the path through the root, but the maximum height of two subtrees combined at *any* node.
- **Summary:** Use post-order DFS to return height while updating the global diameter as the sum of left and right heights.

---