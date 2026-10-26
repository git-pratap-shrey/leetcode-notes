---
title: "Binary Tree Right Side View"
slug: binary-tree-right-side-view
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
 *     TreeNode(int x) : val(x), left(NULL), right(NULL) {}
 * };
 */
class Solution {
public:
    TreeNode* lowestCommonAncestor(TreeNode* root, TreeNode* p, TreeNode* q) {
        if (root == nullptr) return nullptr;
        if (root == p || root == q) return root;

        TreeNode* left  = lowestCommonAncestor(root->left, p, q);
        TreeNode* right = lowestCommonAncestor(root->right, p, q);

        if (left && right) return root;   
        return left ? left : right;       
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Recursive Depth-First Search (DFS).
- **Correctness**: **Incorrect**. The provided code implements the `lowestCommonAncestor` logic, which is completely unrelated to the requested problem, "Binary Tree Right Side View."

## Complexity
*Assuming the analysis is for the code provided (LCA), not the problem statement:*
- **Time Complexity**: $O(N)$ where $N$ is the number of nodes in the tree, as every node is visited once.
- **Space Complexity**: $O(H)$ where $H$ is the height of the tree, due to the recursion stack.

## Efficiency Feedback
- The implementation of the LCA algorithm itself is optimal.
- However, the solution fails the primary objective as it does not solve the "Right Side View" problem.

## Code Quality
- **Readability**: Good. The logic for LCA is clear and concise.
- **Structure**: Good. Standard recursive structure.
- **Naming**: Good. Variable names (`left`, `right`, `root`) are appropriate for the LCA context.
- **Concrete Improvements**: 
    - The entire class needs to be rewritten to implement a Breadth-First Search (BFS) or a modified DFS to capture the rightmost node of each level to solve the actual "Binary Tree Right Side View" problem.

---

# Question Revision
# Revision Report: Binary Tree Right Side View

- **Pattern:** Breadth-First Search (BFS) / Level Order Traversal.
- **Brute Force:** Perform a full level-order traversal, store all nodes of each level in a list, and then iterate through the lists to pick the last element of each.
- **Optimal Approach:** Use a Queue to perform BFS. For every level, iterate through all nodes currently in the queue. The **last node** processed at each level is the one visible from the right side. Append only that node to the result list.
    - **Time Complexity:** $O(n)$ where $n$ is the number of nodes (each node visited once).
    - **Space Complexity:** $O(w)$ where $w$ is the maximum width of the tree (queue size).
- **The 'Aha' Moment:** The requirement to see the "right side" implies we need the last element of every horizontal level.
- **Summary:** Use BFS and capture only the last element of each level to get the rightmost view.

---