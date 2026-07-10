---
title: "Binary Tree Zigzag Level Order Traversal"
slug: binary-tree-zigzag-level-order-traversal
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
    vector<vector<int>> zigzagLevelOrder(TreeNode* root) {
        if(root==NULL){
            return {};

        }
        queue<TreeNode*>q;
        q.push(root);
        vector<vector<int>>res;
        int count =1;
        while(!q.empty()){
            int lvl = q.size();
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
        
        if(count%2==0){
            reverse(temp.begin(),temp.end());
            res.push_back(temp);
        }
        else{
            res.push_back(temp);
        }
        count++;
            
        }
        return res;
        
        
    }
};
~~~

# Submission Review

## Approach

- **Technique**: Breadth-First Search (BFS) using a `std::queue`.
- **Optimality**: Optimal. The solution visits every node exactly once and processes each level linearly.

## Complexity

- **Time Complexity**: $O(N)$, where $N$ is the number of nodes in the tree. Each node is enqueued and dequeued once, and the `std::reverse` operation across all levels combined totals $O(N)$.
- **Space Complexity**: $O(W)$, where $W$ is the maximum width of the tree. In the worst case (a full binary tree), the queue holds up to $\lceil N/2 \rceil$ nodes.

## Efficiency Feedback

- **Performance**: The runtime is optimal.
- **Optimization**: Instead of calling `std::reverse` on the `temp` vector, the code could pre-allocate the vector size `vector<int> temp(lvl)` and insert elements at indices `i` or `lvl - 1 - i` based on the `count` parity. This avoids the overhead of `push_back` reallocations and the second pass for reversal, though the asymptotic complexity remains the same.

## Code Quality

- **Readability**: Good. The logic is clear and follows standard BFS patterns.
- **Structure**: Good. The separation of level processing and direction handling is distinct.
- **Naming**: Moderate. `res`, `temp`, and `q` are generic; `count` would be more descriptive as `levelIndex`.
- **Concrete Improvements**:
    - Replace `NULL` with `nullptr` to adhere to modern C++ standards.
    - Use `const auto&` or avoid unnecessary copies if the result vector becomes very large, though not applicable here.
    - Consistent indentation for the `if(count%2==0)` block would improve visual clarity.

---

# Question Revision

#

## Binary Tree Zigzag Level Order Traversal

**Pattern:** BFS (Breadth-First Search)

**Brute Force:** Perform a standard BFS to collect nodes level-by-level into lists, then iterate through the final result and reverse every second list.

**Optimal Approach:** Use a queue for BFS and a boolean flag `leftToRight` to track direction. For each level, use a deque (or a list with conditional insertion): if `leftToRight` is true, append nodes to the end; otherwise, prepend them to the front. Toggle the flag after processing each level.
- **Time Complexity:** $O(n)$
- **Space Complexity:** $O(n)$

**The 'Aha' Moment:** "Level order" signals BFS, while "zigzag" suggests using a deque or conditional insertion to handle alternating directions without re-processing the list.

**Summary:** Use BFS with a toggle flag to alternate between appending and prepending nodes for each level.

---
