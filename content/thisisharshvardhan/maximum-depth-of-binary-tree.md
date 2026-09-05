---
title: "Maximum Depth of Binary Tree"
slug: maximum-depth-of-binary-tree
date: "2026-08-17"
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
    int maxDepth(TreeNode* root) {
        if (root==NULL) return 0;
        return 1+ max(maxDepth(root->left),maxDepth(root->right));
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Recursive Depth-First Search (DFS).
*   **Optimality:** Optimal. It visits each node exactly once to compute the height of the tree.

## Complexity
*   **Time Complexity:** $O(N)$, where $N$ is the number of nodes in the tree, as every node must be traversed.
*   **Space Complexity:** $O(H)$, where $H$ is the height of the tree. In the worst case (skewed tree), this is $O(N)$; in the best case (balanced tree), it is $O(\log N)$ due to the recursion stack.

## Efficiency Feedback
*   The solution is highly efficient for this problem.
*   The runtime is dominated by memory access patterns; since it is a standard recursive traversal, no further algorithmic optimization is possible.

## Code Quality
*   **Readability:** Good. The logic is concise and follows standard idiomatic C++.
*   **Structure:** Good. The base case and recursive step are clearly defined.
*   **Naming:** Good. `root` and `maxDepth` are standard and descriptive.
*   **Concrete Improvements:**
    *   **Modern C++:** Use `nullptr` instead of `NULL` for type safety (though this is a minor convention).
    *   **Style:** The code is already idiomatic, but ensure consistent spacing around operators (e.g., `root == nullptr` instead of `root==NULL`).

---

# Question Revision
### Revision Report: Maximum Depth of Binary Tree

**Pattern:** Tree Traversal (DFS/BFS)

**Brute Force:** 
Perform a full traversal of the tree, keeping track of the current depth at each node, and update a global maximum variable whenever a leaf node is reached.

**Optimal Approach:** 
Use recursion (Post-order DFS). The depth of a tree is $1 + \max(\text{depth of left subtree}, \text{depth of right subtree})$.
*   **Time Complexity:** $O(n)$, where $n$ is the number of nodes, as each node is visited exactly once.
*   **Space Complexity:** $O(h)$, where $h$ is the height of the tree, representing the maximum call stack depth.

**The 'Aha' Moment:** 
When the result for the entire tree depends on the results of its sub-problems (the depth of the left and right children), it is a clear indicator that a recursive DFS approach is ideal.

**Summary:** 
For depth or height problems, treat the tree as a recursive structure where the current state is simply a function of its children's returned values.

---