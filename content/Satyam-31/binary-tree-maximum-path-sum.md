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
    vector<vector<int>> levelOrderBottom(TreeNode* root) {
        vector<vector<int>> ans;
        if (root == nullptr) return ans;

        queue<TreeNode*> q;
        q.push(root);

        while (!q.empty()) {
            int n = q.size();
            vector<int> level;

            for (int i = 0; i < n; i++) {
                TreeNode* curr = q.front();
                q.pop();

                level.push_back(curr->val);

                if (curr->left)  q.push(curr->left);
                if (curr->right) q.push(curr->right);
            }
            ans.push_back(level);
        }

        reverse(ans.begin(), ans.end());  
        return ans;
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Breadth-First Search (BFS) using a queue for level-order traversal, followed by a vector reversal.
- **Correctness**: **Incorrect**. The provided code solves a completely different problem ("Binary Tree Level Order Traversal II") instead of the requested "Binary Tree Maximum Path Sum". It returns a `vector<vector<int>>` instead of an `int`.

## Complexity
- **Time Complexity**: $O(N)$ where $N$ is the number of nodes in the tree. Each node is visited once and the final list is reversed.
- **Space Complexity**: $O(W)$ where $W$ is the maximum width of the tree (queue size) and $O(N)$ to store the result.

## Efficiency Feedback
- For the problem the code *actually* implements, the efficiency is optimal.
- For the requested problem ("Binary Tree Maximum Path Sum"), this code is entirely irrelevant and fails to calculate any path sums.

## Code Quality
- **Readability**: Good. The BFS implementation is standard and clean.
- **Structure**: Good.
- **Naming**: Good.
- **Concrete Improvements**: 
    - The solution must be completely rewritten. The current code ignores the goal of finding the maximum path sum and instead performs a level-order traversal.
    - To solve the actual problem, a post-order traversal (DFS) is required to track the maximum contribution of subtrees.

---

# Question Revision
# Revision Report: Binary Tree Maximum Path Sum

- **Pattern:** Post-order DFS / Recursive Tree DP.
- **Brute Force:** For every single node in the tree, treat it as the "highest point" (root) of the path, then explore all possible paths extending downwards. This would result in redundant calculations and an exponential/quadratic time complexity.
- **Optimal Approach:**
    - **Logic:** Use a recursive function that returns the **maximum single-path gain** a node can provide to its parent (only one branch can be chosen: $\max(0, \text{left\_gain}) + \text{node\_val} + \max(0, \text{right\_gain})$ is not returned, but rather $\text{node\_val} + \max(0, \max(\text{left}, \text{right}))$).
    - While returning the single-path gain, simultaneously update a **global maximum** variable by calculating the path that "arcs" through the current node (Left Gain + Node Val + Right Gain).
    - **Complexity:** 
        - Time: $O(n)$ — each node is visited exactly once.
        - Space: $O(h)$ — where $h$ is the height of the tree (recursion stack).
- **The 'Aha' Moment:** The path can start and end anywhere, meaning any node can be the "peak" of the path, requiring a bottom-up approach to calculate contributions from children.
- **Summary:** Use post-order DFS to track the best single-branch gain for the parent while updating a global max for the full arc at each node.

---