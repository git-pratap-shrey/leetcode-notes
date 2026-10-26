---
title: "Binary Tree Maximum Path Sum"
slug: binary-tree-maximum-path-sum
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
    void ss(TreeNode* root,vector<vector<int>>&ans,vector<int>&temp ,int targetSum){
        if(root==NULL){
            return;
        }
        temp.push_back(root->val);
        targetSum-=root->val;
        if(root->left==NULL && root->right==NULL){
            if(targetSum==0){
                ans.push_back(temp);
            }
            temp.pop_back();
            return ;
        }
        ss(root->left,ans,temp,targetSum);
        ss(root->right,ans,temp,targetSum);
        temp.pop_back();
    }
    vector<vector<int>> pathSum(TreeNode* root, int targetSum) {
        vector<vector<int>>ans;
        vector<int>temp;
        ss(root,ans,temp,targetSum);
        return ans;
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Recursive Depth-First Search (DFS) / Backtracking.
- **Correctness**: **Incorrect.** The provided code solves the "Path Sum II" problem (finding all root-to-leaf paths that sum to a target), but the problem statement provided is "Binary Tree Maximum Path Sum." These are two entirely different problems. The code does not calculate a maximum path sum.

## Complexity
- **Time Complexity**: $O(N^2)$ in the worst case (where $N$ is the number of nodes), as each valid path can take $O(N)$ to be copied into the `ans` vector.
- **Space Complexity**: $O(N)$ for the recursion stack and the `temp` vector.

## Efficiency Feedback
- **Mismatch**: Since the code solves the wrong problem, efficiency relative to "Maximum Path Sum" is irrelevant. 
- **For Path Sum II**: The current implementation is standard, though using `std::move` when pushing `temp` into `ans` could slightly reduce overhead.

## Code Quality
- **Readability**: Poor. The helper function name `ss` is non-descriptive.
- **Structure**: Moderate. It follows a standard recursive pattern for tree traversal.
- **Naming**: Poor. `ss`, `ans`, and `temp` are generic and do not convey the purpose of the variables (e.g., `ss` should be `findPaths`).
- **Concrete Improvements**:
    1. **Critical**: Implement the actual logic for "Binary Tree Maximum Path Sum" (which requires tracking the max path that can pass through a node as a root vs. the max path extending to a child).
    2. Rename `ss` to `dfs` or `findPaths`.
    3. Rename `temp` to `currentPath`.

---

# Question Revision
# Revision Report: Binary Tree Maximum Path Sum

- **Pattern**: Post-order DFS / Tree Recursion
- **Brute Force**: For every single node in the tree, treat it as the "highest point" (root) of a path and calculate the maximum path extending into its left and right subtrees. This would involve redundant traversals for every node.
- **Optimal Approach**: 
    - **Logic**: Use a bottom-up DFS. For each node, calculate the **maximum single-path gain** it can contribute to its parent (which is $\max(0, \text{left\_gain}) + \text{node.val} + \max(0, \text{right\_gain})$). Simultaneously, update a global maximum variable by considering the current node as the "peak" of the path (connecting left gain $\to$ node $\to$ right gain).
    - **Time Complexity**: $O(n)$ where $n$ is the number of nodes; each node is visited once.
    - **Space Complexity**: $O(h)$ where $h$ is the height of the tree (recursion stack).
- **The 'Aha' Moment**: The path can "bend" at a node, but to propagate the value upward to a parent, you must choose only one branch (left or right).
- **Summary**: Use post-order DFS to return the best single branch to the parent while updating a global max with the combined "arch" (left + node + right).

---