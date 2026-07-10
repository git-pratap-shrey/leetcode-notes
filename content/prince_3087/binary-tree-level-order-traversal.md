---
title: "Binary Tree Level Order Traversal"
slug: binary-tree-level-order-traversal
date: "2026-07-01"

---

# My Solution
~~~/**
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
        if(root==NULL)
        return{};
        queue<TreeNode*>q;
        q.push(root);
        
        vector<vector<int>>res;
        while(!q.empty()){
            int lvl = q.size();
            vector<int>temp;
           
            while(lvl--){
                TreeNode*node=q.front();
                 q.pop();
                temp.push_back(node->val);
               
                if(node->left!=NULL){
                    q.push(node->left);
                }
                if(node->right!=NULL){
                    q.push(node->right);
                }
            }
            res.push_back(temp);

        }
        return res;
        
    }
};
~~~

# Submission Review

## Approach

- **Technique**: Breadth-First Search (BFS) using a `std::queue`.
- **Optimality**: Optimal. It visits each node exactly once and processes levels sequentially, which is the requirement for level-order traversal.

## Complexity

- **Time Complexity**: $O(N)$, where $N$ is the number of nodes in the tree. Each node is pushed and popped from the queue once.
- **Space Complexity**: $O(W)$, where $W$ is the maximum width of the tree. In the worst case (a perfect binary tree), the queue holds up to $N/2$ nodes at the deepest level.

## Efficiency Feedback

- **Performance**: The implementation is efficient.
- **Optimization**: To minimize reallocations for the inner vectors, `temp.reserve(lvl);` could be called before the inner `while` loop, as the size of the level is known beforehand.

## Code Quality

- **Readability**: Good. The logic is clear and follows standard BFS patterns.
- **Structure**: Good. The handling of the edge case (`root == NULL`) is correctly placed at the beginning.
- **Naming**: Moderate. `lvl` is used to store the *count* of nodes at the current level rather than the level *index* itself; a name like `levelSize` would be more accurate. `temp` is a generic name for the level container.
- **Concrete Improvements**:
    - Replace `NULL` with `nullptr` to adhere to modern C++ (C++11 and later) standards.
    - Consistent indentation would improve visual clarity.

---

# Question Revision

#

## Binary Tree Level Order Traversal

**Pattern:** Breadth-First Search (BFS)

**Brute Force:** 
Perform a Depth-First Search (DFS) while passing a `level` integer. Append the node's value to a list located at `result[level]`, creating new sub-lists as the depth increases.

**Optimal Approach:**
Use a `Queue` to process nodes level by level. At the start of each level, capture the `queue.size()` to determine exactly how many nodes belong to the current depth. Iterate through that count, popping nodes and enqueuing their children.

*   **Time Complexity:** $O(n)$ — Each node is visited once.
*   **Space Complexity:** $O(n)$ — To store the result and the queue (max width of the tree).

**The 'Aha' Moment:** 
The explicit request for "level order" is the definitive signal to use BFS over DFS.

**Summary:** 
Use a queue and a nested loop based on the current queue size to snapshot and isolate each level of the tree.

---
