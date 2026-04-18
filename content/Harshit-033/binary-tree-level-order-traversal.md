---
title: "Binary Tree Level Order Traversal"
slug: binary-tree-level-order-traversal
date: "2026-04-18"
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
        
        vector<vector<int>> ans;
        if(root==NULL){
            return ans;
        }
        queue<TreeNode*> q;
        q.push(root);

        while(!q.empty()){
            int size=q.size();
            vector<int> level;
            for(int i=0;i<size;i++){
                TreeNode* node=q.front();
                q.pop();
                level.push_back(node->val);

                if(node->left!=NULL){
                    q.push(node->left);
                }
                if(node->right!=NULL){
                    q.push(node->right);
                }
            }
            ans.push_back(level);
        }
        return ans;


        
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Breadth-First Search (BFS) using a `std::queue` to traverse the tree level by level.
- **Optimality**: Optimal. BFS is the standard and most efficient way to perform level order traversal.

## Complexity
- **Time Complexity**: $O(N)$, where $N$ is the number of nodes in the tree. Each node is visited and processed exactly once.
- **Space Complexity**: $O(W)$, where $W$ is the maximum width of the tree. In the worst case (a perfect binary tree), the queue holds up to $\lceil N/2 \rceil$ nodes at the leaf level.

## Efficiency Feedback
- The implementation is efficient. 
- **Minor Optimization**: `level.reserve(size)` could be called before the `for` loop to prevent multiple reallocations of the inner vector as it grows.

## Code Quality
- **Readability**: Good. The logic is straightforward and follows standard BFS patterns.
- **Structure**: Good. The base case for `NULL` is handled correctly at the start.
- **Naming**: Moderate. `ans` is generic; `result` or `levels` would be more descriptive. `q` is acceptable for a short-lived queue.
- **Improvements**:
    - Replace `NULL` with `nullptr` to adhere to modern C++ (C++11 and later) standards.
    - Remove trailing whitespace and unnecessary empty lines at the end of the function.

---

# Question Revision
### Binary Tree Level Order Traversal

**Pattern:** Breadth-First Search (BFS)

**Brute Force:** Use Depth-First Search (DFS) by passing a `level` variable and appending nodes to a list at the index corresponding to that level.

**Optimal Approach:** Use a `Queue` to track nodes. For each level, capture the current queue size to process only the nodes belonging to that specific depth before moving to the next.
- **Time Complexity:** $O(n)$
- **Space Complexity:** $O(w)$ where $w$ is the maximum width of the tree.

**The 'Aha' Moment:** The requirement to group nodes by "level" is a direct signal to use BFS, as it explores the graph layer-by-layer.

**Summary:** Use a queue and a nested loop based on current queue size to isolate and collect nodes level-by-level.

---