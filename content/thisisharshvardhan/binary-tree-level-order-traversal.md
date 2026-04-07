---
title: "Binary Tree Level Order Traversal"
slug: binary-tree-level-order-traversal
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
    vector<vector<int>> levelOrder(TreeNode* root) {
        if (!root) return {};

        queue < TreeNode* > q;
        vector<vector<int>> ans;

        q.push(root);
        q.push(NULL);

        vector<int> temp;

        while(!q.empty()){
            
            TreeNode* frontNode= q.front();
            q.pop();
            
            if (frontNode==NULL) {
                ans.push_back(temp);
                temp.clear();

                if (!q.empty()) q.push(NULL);

            }
            else {
                temp.push_back(frontNode->val);
                if (frontNode->left) q.push(frontNode->left);
                if (frontNode->right) q.push(frontNode->right);
            }
            
        }
        return ans;

    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Breadth-First Search (BFS) using a `std::queue` with a delimiter (`NULL`) to track levels.
*   **Optimality:** Optimal. It visits each node exactly once and processes each edge exactly once.

## Complexity
*   **Time Complexity:** $O(N)$, where $N$ is the number of nodes in the binary tree.
*   **Space Complexity:** $O(W)$, where $W$ is the maximum width of the tree, representing the maximum size of the queue at any time.

## Efficiency Feedback
*   **Runtime:** The use of a `NULL` delimiter is a standard and efficient way to handle level transitions without needing a nested loop to calculate the queue size at each level.
*   **Memory:** Highly efficient as it only stores the current frontier of the BFS. The `vector<int> temp` is reused, minimizing reallocations.

## Code Quality
*   **Readability:** Good. The logic is straightforward and easy to follow.
*   **Structure:** Good. The null-check at the start handles edge cases appropriately.
*   **Naming:** Good. `q`, `ans`, and `frontNode` are standard conventions for this type of problem.
*   **Improvements:**
    *   **Style:** Using `nullptr` instead of `NULL` is preferred in modern C++ to ensure type safety.
    *   **Minor optimization:** You could capture the size of the queue at the start of each level (`int size = q.size()`) and use a standard `for` loop to process each level. This avoids the overhead of pushing and popping `NULL` pointers into the queue, making the logic slightly cleaner and more idiomatic.

```cpp
// Suggested alternative for level processing
while (!q.empty()) {
    int size = q.size();
    vector<int> level;
    for (int i = 0; i < size; ++i) {
        TreeNode* node = q.front(); q.pop();
        level.push_back(node->val);
        if (node->left) q.push(node->left);
        if (node->right) q.push(node->right);
    }
    ans.push_back(level);
}
```

---
---


# Question Revision
### Revision Report: Binary Tree Level Order Traversal

**Pattern:** Breadth-First Search (BFS)

**Brute Force:** 
Calculate the depth of the tree, then for each depth $d$ from $0$ to $H$, perform a full tree traversal to collect nodes residing specifically at level $d$.
*   **Time Complexity:** $O(n^2)$ (due to redundant traversals).
*   **Space Complexity:** $O(n)$ (recursion stack/output storage).

**Optimal Approach:**
Use a Queue to perform a level-order traversal. Capture the queue size $s$ at the beginning of each iteration; process exactly $s$ nodes to finish a single level before moving to the next.
*   **Time Complexity:** $O(n)$ (each node is visited once).
*   **Space Complexity:** $O(n)$ (the maximum width of the tree, which can be $n/2$ in a perfect binary tree).

**The 'Aha' Moment:**
Whenever a problem asks to group data by "layers," "levels," or "distance from the root," the Queue-based BFS pattern is the natural tool to maintain the required horizontal progression.

**Summary:** 
Use a queue with a size-tracking loop to process nodes level-by-level, effectively capturing "snapshots" of the tree at each depth.

---
