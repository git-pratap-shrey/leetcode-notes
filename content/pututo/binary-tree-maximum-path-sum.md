---
title: "Binary Tree Maximum Path Sum"
slug: binary-tree-maximum-path-sum
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
    int s=INT_MIN;
    int gain(TreeNode* root){
        if(!root)
        return 0;
        int l=max(0,gain(root->left));
        int r=max(0,gain(root->right));

        s=max(s,root->val+l+r);
        return root->val+max(l,r);
    }
    int maxPathSum(TreeNode* root) {
        gain(root);
        return s;
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Recursive Depth-First Search (DFS) / Bottom-up Tree Traversal.
- **Optimality**: Optimal. The solution visits each node exactly once and computes the maximum contribution of subtrees to determine the global maximum path sum.

## Complexity
- **Time Complexity**: $O(N)$, where $N$ is the number of nodes in the tree. Each node is visited once.
- **Space Complexity**: $O(H)$, where $H$ is the height of the tree, due to the recursion stack. In the worst case (skewed tree), this is $O(N)$.

## Efficiency Feedback
- The runtime and memory usage are optimal for this problem.
- Use of `std::max(0, ...)` correctly handles negative path sums by "pruning" branches that would decrease the total sum.

## Code Quality
- **Readability**: Moderate. The logic is concise, but the variable names are overly brief.
- **Structure**: Good. The helper function `gain` cleanly separates the recursive contribution calculation from the global result update.
- **Naming**: Poor. 
    - `s` should be renamed to something descriptive like `max_sum` or `globalMax`.
    - `l` and `r` should be `leftGain` and `rightGain`.
    - `gain` is acceptable, but `calculateGain` would be more explicit.

**Concrete Improvements**:
1. Replace the global/class member variable `s` with a reference passed into the helper function to avoid state persistence across different test cases in some environments.
2. Use descriptive variable names to improve maintainability.

---

# Question Revision
# Revision Report: Binary Tree Maximum Path Sum

- **Pattern**: Post-Order Traversal (Bottom-Up DFS) / Tree DP
- **Brute Force**: For every single node in the tree, treat it as the "highest point" (root) of a path and calculate the maximum path passing through it by exploring all possible downward branches. This would result in redundant calculations for every subtree.
- **Optimal Approach**: 
    - Use a recursive helper function that returns the **maximum single-path gain** a node can provide to its parent (i.e., $\max(0, \text{left\_gain}) + \text{node.val}$).
    - At each node, calculate the **local maximum path** that peaks at that node: $\text{node.val} + \max(0, \text{left\_gain}) + \max(0, \text{right\_gain})$.
    - Update a global maximum variable with this local peak at every step.
    - **Time Complexity**: $O(n)$ where $n$ is the number of nodes (each node visited once).
    - **Space Complexity**: $O(h)$ where $h$ is the height of the tree (recursion stack).
- **The 'Aha' Moment**: The path can "bend" at a node to connect two subtrees, but the value returned to the parent must be a straight line to maintain a valid path.
- **Summary**: Use post-order DFS to track the global maximum "arch" while returning the best "single branch" to the caller.

---