---
title: "Binary Tree Zigzag Level Order Traversal"
slug: binary-tree-zigzag-level-order-traversal
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
    vector<int> rightSideView(TreeNode* root) {
        vector<int> ans;
        if (root == nullptr) return ans;

        queue<TreeNode*> q;
        q.push(root);

        while (!q.empty()) {
            int n = q.size();
            for (int i = 0; i < n; i++) {
                TreeNode* curr = q.front();
                q.pop();

                if (i == n - 1) ans.push_back(curr->val);   

                if (curr->left)  q.push(curr->left);
                if (curr->right) q.push(curr->right);
            }
        }
        return ans;
    }
};
~~~

# Submission Review
## Approach
- **Technique:** Breadth-First Search (BFS) using a queue.
- **Correctness:** **Incorrect.** The provided code implements the "Binary Tree Right Side View" problem, not the "Binary Tree Zigzag Level Order Traversal" problem requested. It returns a 1D vector of the rightmost nodes instead of a 2D vector of levels in zigzag order.

## Complexity
- **Time Complexity:** $O(N)$ where $N$ is the number of nodes in the tree, as each node is visited once.
- **Space Complexity:** $O(W)$ where $W$ is the maximum width of the tree (queue size).

## Efficiency Feedback
- The logic for "Right Side View" is efficient, but the solution is entirely irrelevant to the "Zigzag Level Order Traversal" requirement.
- To solve the actual problem, the code would need to store results for every node in a level (not just the last one) and reverse the order of elements for every other level.

## Code Quality
- **Readability:** Good. The code is clean and easy to follow.
- **Structure:** Good. Standard BFS implementation.
- **Naming:** Poor. The function name `rightSideView` matches the logic implemented, but contradicts the problem statement provided in the prompt.
- **Concrete Improvements:** 
    - Completely rewrite the logic to support 2D vector output (`vector<vector<int>>`).
    - Use a `deque` or `std::reverse` to handle the zigzag direction per level.

---

# Question Revision
# Revision Report: Binary Tree Zigzag Level Order Traversal

- **Pattern**: Breadth-First Search (BFS) / Level Order Traversal.
- **Brute Force**: Perform a standard BFS to collect nodes level by level into a list of lists. After completing the traversal, iterate through the result list and reverse every second sub-list.
- **Optimal Approach**: 
    - Use a `Queue` for standard BFS.
    - Track the current level depth (or use a boolean `leftToRight` flag).
    - For each level, instead of a standard list, use a **Deque** (Double-Ended Queue). 
    - If `leftToRight` is true, append nodes to the back; if false, append nodes to the front.
    - **Time Complexity**: $O(n)$ where $n$ is the number of nodes.
    - **Space Complexity**: $O(n)$ to store the queue and the final result.
- **The 'Aha' Moment**: The requirement to traverse "level by level" points to BFS, and the "zigzag" requirement suggests toggling the insertion order of the results per level.
- **Summary**: Use a BFS queue to traverse levels and a boolean flag to determine whether to add elements to the front or back of the level list.

---