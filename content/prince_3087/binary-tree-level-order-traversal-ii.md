---
title: "Binary Tree Level Order Traversal II"
slug: binary-tree-level-order-traversal-ii
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
    vector<vector<int>> levelOrderBottom(TreeNode* root) {
        if(root == NULL){
            return {};
        }
        queue<TreeNode*>q;
        q.push(root);
        vector<vector<int>>res;
        while(!q.empty()){
            int lvl=q.size();
            vector<int>temp;
            while(lvl--){
                TreeNode*node = q.front();
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
        reverse(res.begin(),res.end());
        return res;     
    }
};
~~~

# Submission Review

## Approach

- **Technique**: Breadth-First Search (BFS) using a queue.
- **Optimality**: Optimal. BFS is the standard approach for level-order traversal, and reversing the final result vector does not change the asymptotic time complexity.

## Complexity

- **Time Complexity**: $O(N)$, where $N$ is the number of nodes in the tree. Each node is visited and processed exactly once.
- **Space Complexity**: $O(W)$, where $W$ is the maximum width of the tree. This is the maximum number of nodes stored in the queue at any given time. (The output list $O(N)$ is typically excluded from auxiliary space analysis).

## Efficiency Feedback
- The implementation is efficient. 
- Using `std::reverse` on the final `vector<vector<int>>` is more efficient than inserting each level at the front of the vector (which would cause $O(N^2)$ shifts).

## Code Quality

- **Readability**: Good. The logic is clear and follows standard competitive programming patterns.
- **Structure**: Good. The edge case (null root) is handled immediately.
- **Naming**: Moderate. `res` and `temp` are generic; `currentLevel` would be more descriptive than `temp`.
- **Concrete Improvements**: 
    - Replace `NULL` with `nullptr` to adhere to modern C++ (C++11 and later) standards.
    - Use `res.emplace_back(std::move(temp))` instead of `res.push_back(temp)` to avoid unnecessary copies of the level vectors.

---

# Question Revision

#

## Binary Tree Level Order Traversal II

**Pattern:** Breadth-First Search (BFS)

**Brute Force:** Perform a standard top-down BFS traversal to collect levels in a list, then reverse the entire list of lists at the end.

**Optimal Approach:** Use a `Queue` to process the tree level-by-level. For each level, collect node values into a temporary list and prepend (insert at index 0) that list into the final result array to avoid a final reversal step.
- **Time Complexity:** $O(n)$
- **Space Complexity:** $O(n)$

**The 'Aha' Moment:** "Bottom-up" is simply a standard level-order traversal where the result sequence is inverted.

**Summary:** Execute a standard BFS and prepend each level's results to the output list.

---
