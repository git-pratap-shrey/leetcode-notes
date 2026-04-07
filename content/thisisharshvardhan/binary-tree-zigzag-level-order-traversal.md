---
title: "Binary Tree Zigzag Level Order Traversal"
slug: binary-tree-zigzag-level-order-traversal
date: "2026-04-06"

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
    vector<vector<int>> zigzagLevelOrder(TreeNode* root) {
        if (!root) return {};

        vector<vector<int>> ans;
        queue<TreeNode*> q;
        q.push(root);
        bool dir=true;
        

        while (!q.empty()){
            int size=q.size();
            vector<int> temp(size);
            for (int i=0;i<size;i++){
                int ind= dir ? i : size-i-1;
                TreeNode* front = q.front();
                q.pop();

                temp[ind]=front->val;
                if (front->left) q.push(front->left);
                if (front->right) q.push(front->right);
            }
            dir=!dir;
            ans.push_back(temp);

        } 
        return ans;
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Breadth-First Search (BFS) using a queue.
*   **Optimality:** Optimal. It traverses each node exactly once. The zigzag order is handled by calculating the insertion index `ind` based on the current level's direction, avoiding the need for `std::deque` or `std::reverse`.

## Complexity
*   **Time Complexity:** $O(N)$, where $N$ is the number of nodes in the tree. Every node is enqueued and dequeued exactly once.
*   **Space Complexity:** $O(W)$, where $W$ is the maximum width of the tree, required for the queue and the level-wise vector storage.

## Efficiency Feedback
*   **Performance:** The current approach is highly efficient. By pre-allocating the vector size (`vector<int> temp(size)`) and directly indexing it, the code avoids the overhead of `push_back` and `std::reverse`.
*   **Bottleneck:** None. This is the standard, most efficient way to perform a zigzag traversal.

## Code Quality
*   **Readability:** Good. The logic is straightforward and avoids unnecessary complexity.
*   **Structure:** Good. The `dir` toggle pattern is clean and effective.
*   **Naming:** Good. Variable names like `q`, `ind`, `dir`, and `ans` are standard in competitive programming contexts.
*   **Concrete Improvements:** 
    *   The code is quite solid. If memory usage were extremely tight, one could reserve space for `ans`, but for most constraints, this is unnecessary.
    *   One minor improvement for modern C++ would be using `auto` for the `TreeNode*` iterator, but `TreeNode*` is perfectly acceptable for clarity.

---
---


# Question Revision
### Revision Report: Binary Tree Zigzag Level Order Traversal

**Pattern:** Breadth-First Search (BFS) / Level Order Traversal

**Brute Force:**
Perform a standard level-order traversal using a queue to collect nodes into lists per level, then iterate through the resulting lists and reverse the order of every alternating inner list. 
*   **Time:** $O(n)$
*   **Space:** $O(n)$

**Optimal Approach:**
Use a queue to process nodes level-by-level. To avoid an explicit $O(n)$ reversal step, use a **Double-Ended Queue (Deque)** or an array with index-based insertion. For even levels, append to the back; for odd levels, insert at the front.
*   **Time:** $O(n)$ 
*   **Space:** $O(w)$, where $w$ is the maximum width of the tree.

**The 'Aha' Moment:**
The requirement to toggle direction based on depth is simply a flag-based modification to the standard BFS queue process, meaning you don't need a separate pass to reverse the lists.

**Summary:**
Treat the level-order traversal as a sequence of deque operations where the insertion side flips based on the current depth parity.

---
