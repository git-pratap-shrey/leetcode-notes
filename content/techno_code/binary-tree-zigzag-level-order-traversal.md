---
title: "Binary Tree Zigzag Level Order Traversal"
slug: binary-tree-zigzag-level-order-traversal
date: "2026-10-16"
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
        vector<vector<int>>s;
        if(root==nullptr){
            return s;
        }
        vector<int>a;
        queue<TreeNode*>q;
        q.push(root);
        int count=0;
        while(!q.empty()){
            int size=q.size();
            while(size--){
                TreeNode* curr=q.front();
                q.pop();
                a.push_back(curr->val);
                if(curr->left!=NULL){
                    q.push(curr->left);
                }
                if(curr->right!=NULL){
                    q.push(curr->right);
                }
            }
            count++;
            if(count%2==0){
                reverse(a.begin(),a.end());
                s.push_back(a);
            }
            else{
                s.push_back(a);
            }
            while(!a.empty()){
                a.pop_back();
            }
        }
        // for(int i=1;i<s.size();i=i+2){
        //     reverse(s[i].begin(),s[i].end());
        // }
        return s;
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Breadth-First Search (BFS) using a queue for level-order traversal.
- **Optimality**: Suboptimal. While the time complexity is asymptotically optimal, the implementation uses `std::reverse` on a vector and manually clears the vector via `pop_back()` in a loop, which is less efficient than using a `deque` or pre-allocating indices.

## Complexity
- **Time Complexity**: $O(N)$, where $N$ is the number of nodes. Each node is visited once, and reversing each level takes linear time relative to the level size.
- **Space Complexity**: $O(W)$, where $W$ is the maximum width of the tree. The queue and the temporary vector `a` store at most one level of nodes.

## Efficiency Feedback
- **Redundant Operations**: The `while(!a.empty()) { a.pop_back(); }` loop is an inefficient way to clear a vector. `a.clear()` should be used instead.
- **Reverse Overhead**: Calling `std::reverse` on every second level is acceptable, but the logic can be optimized by inserting elements at the front of a `deque` or using a fixed-size vector and filling it from the end based on the `count` flag.

## Code Quality
- **Readability**: Moderate. The logic is easy to follow, but the commented-out code at the bottom should be removed.
- **Structure**: Moderate. The logic for reversing and pushing to the result set is slightly fragmented.
- **Naming**: Poor. Variable names `s` (result), `a` (current level), and `q` (queue) are non-descriptive.
- **Concrete Improvements**:
    1. Replace `while(!a.empty()) a.pop_back();` with `a.clear();`.
    2. Replace `NULL` with `nullptr` for consistency with the `root == nullptr` check.
    3. Rename `s` to `result` and `a` to `currentLevel`.
    4. Use `std::deque` or initialize the level vector with `vector<int> a(size)` and fill by index to avoid `reverse()` calls.

---

# Question Revision
# Revision Report: Binary Tree Zigzag Level Order Traversal

- **Pattern**: Breadth-First Search (BFS) / Level Order Traversal.
- **Brute Force**: Perform a standard BFS to group nodes by level in a list of lists, then iterate through the result and manually reverse every other list.
- **Optimal Approach**: 
    - Use a `Queue` for standard BFS. 
    - Maintain a boolean flag `leftToRight` to track direction.
    - For each level, use a `Deque` (Double-Ended Queue) or a pre-allocated array to insert elements at the front or back based on the current direction.
    - Toggle the flag after each level is processed.
    - **Time Complexity**: $O(n)$ where $n$ is the number of nodes.
    - **Space Complexity**: $O(w)$ where $w$ is the maximum width of the tree.
- **The 'Aha' Moment**: The requirement for "level order" points to BFS, while the "zigzag" constraint suggests using a Deque or conditional insertion to avoid costly post-traversal reversals.
- **Summary**: Use a standard BFS queue to traverse levels, but use a Deque to toggle insertion direction for the final result list.

---