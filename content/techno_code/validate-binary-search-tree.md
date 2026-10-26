---
title: "Validate Binary Search Tree"
slug: validate-binary-search-tree
date: "2026-10-24"
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
        int ans=0;
        queue<pair<TreeNode*,int>>q;
        q.push({root,INT_MIN});
        while(!q.empty()){
            auto p=q.front();
            q.pop();
            int z=p.second;
            if(p.first==NULL) continue;
            if(p.first->val>=z) {
                ans++;z=p.first->val;
            }
            if(p.first->left){
                q.push({p.first->left,z});
            }
            if(p.first->right){
                q.push({p.first->right,z});
            }
        }
        return ans;
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Breadth-First Search (BFS) using a queue. The code tracks the maximum value encountered along the path from the root to the current node to determine if a node is "good."
- **Correctness**: **Incorrect.** The problem requested is **"Validate Binary Search Tree"**, but the provided code implements a solution for **"Count Good Nodes in Binary Tree."** The logic does not check for BST properties (left < root < right).

## Complexity
- **Time Complexity**: $O(N)$, where $N$ is the number of nodes in the tree, as each node is visited once.
- **Space Complexity**: $O(W)$, where $W$ is the maximum width of the tree (queue size).

## Efficiency Feedback
- The use of `std::queue` and `std::pair` is appropriate for BFS.
- The check `if(p.first==NULL) continue;` is redundant because the code already checks `if(p.first->left)` and `if(p.first->right)` before pushing to the queue.

## Code Quality
- **Readability**: Moderate. The logic is simple, but the variable names are non-descriptive.
- **Structure**: Good. Standard BFS implementation.
- **Naming**: Poor. 
    - `ans` is generic (though common in CP).
    - `z` should be `maxSoFar` or `currentMax`.
    - `p` should be `current`.
- **Improvements**:
    - Fix the logic to match the actual problem requested (BST Validation).
    - Remove the redundant `NULL` check inside the loop.
    - Use more descriptive variable names to improve maintainability.

---

# Question Revision
# Revision Report: Validate Binary Search Tree

- **Pattern**: DFS / Recursive Range Validation (or In-order Traversal).
- **Brute Force**: For every node, traverse its entire left subtree to find the maximum value and its entire right subtree to find the minimum value, ensuring they satisfy the BST property.
- **Optimal Approach**: 
    - **Logic**: Pass down a valid range `(min, max)` for each node. The root can be anything; its left child must be within `(min, root.val)`, and its right child must be within `(root.val, max)`. If any node falls outside its inherited range, return `false`.
    - **Time Complexity**: $O(n)$ where $n$ is the number of nodes (each node visited once).
    - **Space Complexity**: $O(h)$ where $h$ is the tree height (recursion stack).
- **The 'Aha' Moment**: A node is not just compared to its immediate children, but must satisfy constraints imposed by all its ancestors.
- **Summary**: A BST is valid if every node stays within a strictly bounding range inherited from its parent.

---