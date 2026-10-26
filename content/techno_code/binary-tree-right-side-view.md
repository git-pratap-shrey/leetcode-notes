---
title: "Binary Tree Right Side View"
slug: binary-tree-right-side-view
date: "2026-10-23"
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
    int widthOfBinaryTree(TreeNode* root) {
        if(!root) return 0;
        unsigned long long result =1;
        queue<pair<TreeNode*,unsigned long long>>q;
        q.push({root,0});
        while(!q.empty()){
            unsigned long long start =0,end=0;
            unsigned long long  n=q.size();
            for(int i=0;i<n;i++){
                auto p=q.front();
                q.pop();
                unsigned long long idx=p.second;
                if(i==0){
                    start=idx;
                }
                if(i==n-1){
                    end=idx;
                }
                if(p.first->left){
                    q.push({p.first->left,2*idx+1});
                }
                if(p.first->right){
                    q.push({p.first->right,2*idx+2});
                }
            }
            result=max(result,end-start+1);
        }
        return (int)result;
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Level-Order Traversal (BFS) using a queue to track node indices.
- **Correctness**: **Incorrect**. The provided code solves the "Maximum Width of Binary Tree" problem, **not** the "Binary Tree Right Side View" problem requested. 
- **Optimality**: For the width problem, the approach is optimal, though it lacks index normalization to prevent potential overflow on very deep/skewed trees.

## Complexity
- **Time Complexity**: $O(N)$, where $N$ is the number of nodes in the tree, as each node is visited once.
- **Space Complexity**: $O(W)$, where $W$ is the maximum width of the tree (the maximum size of the queue).

## Efficiency Feedback
- **Overflow Risk**: While `unsigned long long` is used for indices, in an extremely deep skewed tree, `2 * idx + 1` will eventually overflow regardless of the bit-width. A common optimization is to subtract the `start` index of the current level from all indices in that level to reset the baseline.
- **Type Casting**: Casting the final `unsigned long long` result to `int` may lead to precision loss if the width exceeds $2^{31}-1$.

## Code Quality
- **Readability**: Moderate. The logic is straightforward, but the code lacks whitespace between operators and keywords.
- **Structure**: Good. Standard BFS implementation.
- **Naming**: Moderate. Variables like `p`, `n`, and `q` are generic; `p` should be `current` and `n` should be `levelSize`.
- **Concrete Improvements**:
    1. **Problem Alignment**: The logic must be completely rewritten to return a `vector<int>` containing the last element of each level to satisfy the "Right Side View" requirement.
    2. **Index Normalization**: Subtract `start` from `idx` before calculating child indices to prevent overflow.
    3. **Formatting**: Add spaces around operators (e.g., `unsigned long long result = 1;` instead of `unsigned long long result =1;`).

---

# Question Revision
# Revision Report: Binary Tree Right Side View

- **Pattern:** Breadth-First Search (BFS) / Level Order Traversal.
- **Brute Force:** Perform a full level-order traversal to collect all nodes at every depth into a 2D list, then iterate through each level and pluck the last element of each list.
- **Optimal Approach:** 
    - Use a Queue to perform BFS. 
    - For each level, determine the number of nodes currently in the queue (`levelSize`).
    - Iterate through the level; the node at index `levelSize - 1` is the rightmost node. Append only this node to the result list.
    - **Time Complexity:** $O(n)$ where $n$ is the number of nodes (each node visited once).
    - **Space Complexity:** $O(w)$ where $w$ is the maximum width of the tree (queue size).
- **The 'Aha' Moment:** The phrase "right side view" implies we need the last element of every horizontal level of the tree.
- **Summary:** Use BFS to traverse level by level and capture only the final node of each queue cycle.

---