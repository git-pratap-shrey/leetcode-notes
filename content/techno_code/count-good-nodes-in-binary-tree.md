---
title: "Count Good Nodes in Binary Tree"
slug: count-good-nodes-in-binary-tree
date: "2026-10-24"
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
    vector<int> rightSideView(TreeNode* root) {
        if(!root) return {};
        vector<int>ans;
        queue<TreeNode*>q;
        q.push(root);
        while(!q.empty()){
            int n=q.size();
            for(int i=0;i<n;i++){
                auto p=q.front();
                q.pop();
                if(i==n-1){
                    ans.push_back(p->val);
                }
                if(p->left){
                    q.push(p->left);
                }
                if(p->right){
                    q.push(p->right);
                }
            }
        }
        return ans;
    }
};
~~~

# Submission Review
## Approach
- **Technique:** Breadth-First Search (BFS) using a queue to perform level-order traversal.
- **Correctness:** **Incorrect**. The provided code implements the logic for "Binary Tree Right Side View," not "Count Good Nodes in Binary Tree." It returns a vector of integers representing the rightmost nodes of each level instead of counting nodes that satisfy the "good node" condition (val $\ge$ max path value).

## Complexity
- **Time Complexity:** $O(N)$, where $N$ is the number of nodes in the tree, as each node is visited once.
- **Space Complexity:** $O(W)$, where $W$ is the maximum width of the tree (the queue size).

## Efficiency Feedback
- While the BFS implementation is efficient for a "Right Side View" problem, it is entirely irrelevant to the requested problem ("Count Good Nodes").
- To solve "Count Good Nodes," a Depth-First Search (DFS) would be more appropriate to track the maximum value encountered along a specific path from the root.

## Code Quality
- **Readability:** Moderate. The logic is clear, but it is implementing the wrong problem.
- **Structure:** Good. Standard BFS template.
- **Naming:** Poor. The function name `rightSideView` confirms the code is for a different problem than the one specified in the prompt.
- **Concrete Improvements:** 
    1. **Rewrite the logic:** Change the BFS to a recursive DFS.
    2. **Update parameters:** Pass the current maximum value encountered along the path as a parameter to the recursive function.
    3. **Change return type:** Change `vector<int>` to `int` to return the count of good nodes.

---

# Question Revision
# Revision Report: Count Good Nodes in Binary Tree

- **Pattern**: Tree Traversal (DFS) / State Propagation.
- **Brute Force**: For every single node, traverse the path from the root to that node to check if any value is greater than the current node's value.
- **Optimal Approach**: 
    - **Logic**: Use Depth First Search (DFS). Pass a `max_so_far` variable as a parameter during the recursive calls. A node is "good" if `node.val >= max_so_far`. Update the `max_so_far` for child calls as $\max(\text{current\_max}, \text{node.val})$.
    - **Time Complexity**: $O(n)$ where $n$ is the number of nodes (each node visited once).
    - **Space Complexity**: $O(h)$ where $h$ is the height of the tree (recursion stack).
- **The 'Aha' Moment**: The condition depends on the maximum value encountered along the path from the root, meaning I need to "carry" the path's state downwards during traversal.
- **Summary**: Use DFS to propagate the maximum value encountered so far down to the children to validate each node in a single pass.

---