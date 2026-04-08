---
title: "Binary Tree Level Order Traversal II"
slug: binary-tree-level-order-traversal-ii
date: "2026-04-08"

---
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
        if (!root) return {};
        queue <TreeNode* > q;
        q.push(root);
        q.push(NULL);
        vector<vector<int>> result;
        vector<int> temp;

        while(!q.empty()){
            TreeNode* front=q.front();
            q.pop();

            if (!front){
                result.push_back(temp);
                temp.clear();
                if (!q.empty()) q.push(NULL);
            }
            else {
                temp.push_back(front->val);
                if (front->left) q.push(front->left);
                if (front->right) q.push(front->right);

            }
        }
        reverse(result.begin(),result.end());
        return result;
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Breadth-First Search (BFS) using a queue with a delimiter (`NULL`) to mark level boundaries, followed by a `std::reverse` on the result vector.
*   **Optimality:** Optimal. BFS is necessary to traverse levels, and reversing the result is the standard way to achieve the "bottom-up" order.

## Complexity
*   **Time Complexity:** $O(N)$, where $N$ is the number of nodes in the tree. Each node is visited and processed once.
*   **Space Complexity:** $O(W)$, where $W$ is the maximum width of the tree, required for the queue.

## Efficiency Feedback
*   The approach is highly efficient.
*   **Minor optimization:** Instead of using a `NULL` delimiter, you can capture the queue size at the start of each level loop (`int levelSize = q.size()`). This avoids the overhead of pushing/popping `NULL` pointers and the `if (!q.empty())` check inside the loop.

## Code Quality
*   **Readability:** Good. The logic is standard and easy to follow.
*   **Structure:** Good. Uses a clean `while` loop to process the tree.
*   **Naming:** Good. Variable names (`q`, `result`, `temp`, `front`) are conventional for this algorithm.
*   **Improvements:**
    *   **Memory/Performance:** Replacing the `NULL` delimiter with a size-based loop (as mentioned above) is slightly more idiomatic in C++ for level-order traversals.
    *   **Modernization:** Use `nullptr` instead of `NULL` for type safety in C++.
    *   **Robustness:** The logic is sound and handles the empty tree edge case correctly.

---
---


# Question Revision
### Revision Report: Binary Tree Level Order Traversal II

**Pattern:** Breadth-First Search (BFS) / Level Order Traversal

**Brute Force:** 
Perform a standard level-order traversal using a queue to collect nodes at each depth, then reverse the resulting list of lists.
*   **Time:** $O(n)$
*   **Space:** $O(n)$

**Optimal Approach:** 
Use a queue to process levels as usual, but instead of appending to the end of the final result list, use `list.insert(0, level_values)` or append to a list and reverse it at the very end. The latter is preferred in languages like Python to avoid $O(n)$ insertion overhead.
*   **Time:** $O(n)$
*   **Space:** $O(w)$ where $w$ is the maximum width of the tree.

**The 'Aha' Moment:** 
Whenever a problem asks for an order that is the inverse of the natural traversal (e.g., bottom-up instead of top-down), treat it as a standard traversal followed by a reversal or a stack-based collection.

**Summary:** 
"Bottom-up" traversal is almost always a standard BFS/DFS coupled with an array reversal.

---
