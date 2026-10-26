---
title: "Path Sum II"
slug: path-sum-ii
date: "2026-10-19"
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
    int goodNodes(TreeNode* root) {
        return dfs(root,INT_MIN);

    }
    int dfs(TreeNode* root,int m){
        if(!root)
        return 0;
        int c=0;
        if(root->val>=m)
        c=1;
        m=max(m,root->val);

        return c+dfs(root->left,m)+dfs(root->right,m);
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Depth-First Search (DFS) / Recursion.
- **Correctness**: **Incorrect.** The code solves a completely different problem ("Count Good Nodes in Binary Tree") instead of the requested "Path Sum II". It returns an integer count of nodes rather than a list of paths that sum to a target value.

## Complexity
- **Time Complexity**: $O(N)$ where $N$ is the number of nodes, as it visits each node once.
- **Space Complexity**: $O(H)$ where $H$ is the height of the tree, due to the recursion stack.

## Efficiency Feedback
- While the logic is efficient for the "Good Nodes" problem, it is entirely irrelevant to "Path Sum II", which requires tracking the current path and comparing the sum against a target.

## Code Quality
- **Readability**: Poor. The logic is disconnected from the problem statement provided.
- **Structure**: Moderate. The recursive helper function is structured correctly for a tree traversal.
- **Naming**: Poor. Variable names like `m` (maximum) and `c` (count) are too cryptic; they should be `maxVal` and `count`.
- **Concrete Improvements**: 
    1. Rewrite the entire solution to implement "Path Sum II" logic (tracking current path sum and storing paths in a `vector<vector<int>>`).
    2. Use descriptive variable names.
    3. Ensure the function signature matches the problem requirements (returning paths, not an integer).

---

# Question Revision
# Revision Report: Path Sum II

- **Pattern**: Backtracking / Depth-First Search (DFS)
- **Brute Force**: Explore every possible path from root to leaf using recursion, copying the current path list at every node to avoid interference between branches.
- **Optimal Approach**: 
    - Use a single mutable list (`current_path`) to track the nodes.
    - Traverse the tree recursively, subtracting the current node's value from the `targetSum`.
    - When a leaf node is reached and the remaining `targetSum` equals the leaf's value, add a **copy** of the `current_path` to the results.
    - **Crucial**: Pop the current node from the list (backtrack) after returning from recursive calls to restore the state for the parent's other branches.
    - **Complexity**: 
        - Time: $O(n^2)$ in the worst case (e.g., a skewed tree where we copy the path at every leaf).
        - Space: $O(h)$ where $h$ is the tree height (recursion stack and path storage).
- **The 'Aha' Moment**: The requirement to return **all actual paths** (not just a boolean or count) implies we must traverse to the leaves and backtrack to explore all permutations.
- **Summary**: Use DFS to traverse to leaves, subtracting values from the target, and backtrack the path list to explore all root-to-leaf branches.

---