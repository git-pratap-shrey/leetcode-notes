---
title: "Binary Tree Zigzag Level Order Traversal"
slug: binary-tree-zigzag-level-order-traversal
date: "2026-04-21"
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
        deque<TreeNode*> dq;
        vector<vector<int>> ans;
        if(root==NULL) return ans;
        dq.push_front(root);
        int count=1;
        while(!dq.empty()){
            vector<int> t;
            int size=dq.size();
            if(count%2!=0){
                for(int i=0;i<size;i++){
                        TreeNode* node=dq.front();
                        dq.pop_front();
                        t.push_back(node->val);
                        if(node->left!=NULL){
                            dq.push_back(node->left);
                        }
                        if(node->right!=NULL){
                            dq.push_back(node->right);
                        }
                    }
                    count++;
            }
            else{
                for(int i=0;i<size;i++){
                        TreeNode* node=dq.back();
                        dq.pop_back();
                        t.push_back(node->val);
                        if(node->right!=NULL){
                            dq.push_front(node->right);
                        }
                        if(node->left!=NULL){
                            dq.push_front(node->left);
                        }
                        
                    }
                    count++;

            }
            ans.push_back(t);

        }
        return ans;
        
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Breadth-First Search (BFS) using a `std::deque`. 
- **Optimality**: Optimal. The solution visits each node exactly once and avoids the need to explicitly reverse vectors at each level by manipulating the deque's insertion and extraction ends.

## Complexity
- **Time Complexity**: $O(N)$, where $N$ is the number of nodes in the tree. Each node is pushed and popped from the deque once.
- **Space Complexity**: $O(N)$. In the worst case (a complete binary tree), the deque stores the maximum width of the tree, and the final result vector stores all node values.

## Efficiency Feedback
- The use of a `deque` to alternate between `push_back`/`pop_front` and `push_front`/`pop_back` is efficient as it maintains the zigzag order in-place during traversal.
- The time and space complexity are as low as possible for this problem.

## Code Quality
- **Readability**: Moderate. The logic is sound, but the indentation is inconsistent (e.g., inside the `for` loops).
- **Structure**: Good. The clear separation between odd and even level logic makes the zigzag flow easy to follow.
- **Naming**: Poor. Variable names are overly generic: `t` (current level vector), `ans` (final result), and `count` (level tracker).
- **Concrete Improvements**:
    - Replace `int count` with a `bool leftToRight` toggle to clarify intent.
    - Use `nullptr` instead of `NULL` for modern C++ consistency.
    - Standardize indentation to improve visual clarity.
    - Use `reserve()` on `vector<int> t` if the size is known (`size`) to avoid multiple reallocations.

---

# Question Revision
### Binary Tree Zigzag Level Order Traversal

**Pattern:** BFS (Breadth-First Search)

**Brute Force:** 
Perform a standard level-order traversal to collect nodes into a list of lists, then iterate through the results and reverse every second list.

**Optimal Approach:**
Use a queue for BFS and a boolean flag (`leftToRight`) to track direction. For each level, use a `deque` (double-ended queue) to store the values: if `leftToRight` is true, append to the end; otherwise, append to the front. Toggle the flag after processing each level.

*   **Time Complexity:** $O(n)$
*   **Space Complexity:** $O(n)$

**The 'Aha' Moment:** 
The "zigzag" requirement is simply a standard level-order traversal where the insertion order into the result list alternates per level.

**Summary:** 
Use BFS with a toggle flag and a deque to alternate insertion direction for each level.

---