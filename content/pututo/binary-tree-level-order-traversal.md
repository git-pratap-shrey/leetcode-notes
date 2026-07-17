---
title: "Binary Tree Level Order Traversal"
slug: binary-tree-level-order-traversal
date: "2026-07-17"
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
        vector<vector<int>>ans;
        if(root==NULL){
            return ans;
        }
        queue<TreeNode*>q;
        q.push(root);
        while(!q.empty()){
            int n=q.size();
            vector<int>temp;
            for(int i = 0; i < n; i++){
                TreeNode* cur = q.front();
                q.pop();
                temp.push_back(cur->val);
                if(cur->left)
                    q.push(cur->left);
                if(cur->right)
                    q.push(cur->right);
            }
            ans.push_back(temp);
        }
        return ans; 
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Breadth-First Search (BFS) using a `std::queue`.
- **Optimality**: Optimal. This is the standard approach for level-order traversal, visiting each node exactly once.

## Complexity
- **Time Complexity**: $O(N)$, where $N$ is the number of nodes in the tree.
- **Space Complexity**: $O(W)$, where $W$ is the maximum width of the tree. In the worst case (a complete binary tree), $W \approx N/2$, resulting in $O(N)$.

## Efficiency Feedback
- **Runtime**: The solution is efficient. The use of a local `vector<int> temp` to collect level values before pushing to `ans` is appropriate.
- **Memory**: Memory usage is optimal for this problem. To marginally reduce reallocations, `temp.reserve(n)` could be used inside the `while` loop, though the impact would be negligible given typical constraints.

## Code Quality
- **Readability**: Good. The logic is straightforward and follows standard BFS patterns.
- **Structure**: Good. Edge cases (null root) are handled immediately.
- **Naming**: Moderate. `ans`, `q`, `n`, and `temp` are generic; while acceptable in competitive programming, more descriptive names (e.g., `result`, `nodeQueue`, `levelSize`, `currentLevel`) would improve maintainability.
- **Improvements**: 
    - Use `nullptr` instead of `NULL` for modern C++ standards.
    - Add `temp.reserve(n)` to avoid multiple reallocations as the level vector grows.

---

# Question Revision
### Binary Tree Level Order Traversal

**Pattern:** Breadth-First Search (BFS)

**Brute Force:** Recursive DFS tracking the current depth; append the node value to a list indexed by that depth.

**Optimal Approach:** Use a `Queue` to traverse the tree level-by-level. At the start of each level, record the current queue size to process exactly that many nodes before moving to the next level.
- **Time Complexity:** $O(n)$
- **Space Complexity:** $O(n)$

**The 'Aha' Moment:** The phrase "level order" is a direct signal to use BFS instead of DFS.

**Summary:** Use a queue and process it in size-defined batches to isolate each tree level.

---