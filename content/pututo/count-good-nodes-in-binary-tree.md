---
title: "Count Good Nodes in Binary Tree"
slug: count-good-nodes-in-binary-tree
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
        int dfs(TreeNode* root,int n){
            if(!root)
            return 0;
            n=n*10+root->val;
            if(!root->right && !root->left)
            return n;
            
            return dfs(root->left,n)+
            dfs(root->right,n);

        }
    int sumNumbers(TreeNode* root) {
        return dfs(root,0);
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Depth-First Search (DFS) / Recursion.
- **Correctness**: **Incorrect**. The provided code solves a completely different problem ("Sum Root to Leaf Numbers") rather than "Count Good Nodes in Binary Tree". It calculates the sum of numbers formed by paths from root to leaves instead of counting nodes whose value is greater than or equal to the maximum value seen on the path from the root.

## Complexity
- **Time Complexity**: $O(N)$, where $N$ is the number of nodes in the tree, as it visits each node once.
- **Space Complexity**: $O(H)$, where $H$ is the height of the tree, due to the recursion stack.

## Efficiency Feedback
- While the complexity for the logic implemented is optimal for *that* specific problem, it is entirely irrelevant to the requested problem ("Count Good Nodes").
- To solve "Count Good Nodes", the state passed through the recursion should be the `current_max` value, not a running sum.

## Code Quality
- **Readability**: Moderate. The logic is simple, but the mismatch between the problem title and implementation is confusing.
- **Structure**: Good. Standard recursive pattern for tree traversal.
- **Naming**: Poor. The function `sumNumbers` and variable `n` are named for a summation problem, not a counting problem.
- **Improvements**: 
    - The code must be entirely rewritten to track the maximum value along the path and increment a counter when `root->val >= current_max`.

---

# Question Revision
# Revision Report: Count Good Nodes in Binary Tree

- **Pattern**: Depth First Search (DFS) / Tree Traversal
- **Brute Force**: For every single node, traverse all paths from the root to that node to check if any value is greater than the current node. This would result in redundant traversals and high time complexity.
- **Optimal Approach**: 
    - **Logic**: Perform a DFS traversal while passing down the `current_max` value encountered along the path from the root. A node is "good" if its value is $\ge$ `current_max`. Update the `current_max` for the child calls as $\max(\text{current\_max}, \text{node.val})$.
    - **Time Complexity**: $O(n)$ where $n$ is the number of nodes; each node is visited once.
    - **Space Complexity**: $O(h)$ where $h$ is the height of the tree, representing the recursion stack.
- **The 'Aha' Moment**: The condition depends on the "path from root," signaling that I must carry state (the maximum value) downward during the traversal.
- **Summary**: Use DFS to propagate the maximum value seen so far down each path to validate nodes in a single pass.

---