---
title: "Maximum Depth of Binary Tree"
slug: maximum-depth-of-binary-tree
date: "2026-04-19"
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
    int maxDepth(TreeNode* root) {
        int ans=0;
       
        if(root==NULL){
            return 0;
        }
        queue<TreeNode*> q;
        q.push(root);



        while(!q.empty()){

            int size=q.size();

            for(int i=0;i<size;i++){
                TreeNode* node=q.front();
                q.pop();
                
                if(node->left!=NULL){
                    q.push(node->left);
                }
                if(node->right!=NULL){
                    q.push(node->right);
                }
            }
            ans++;
        }

        return ans;
        
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Breadth-First Search (BFS) / Level-Order Traversal.
- **Optimality**: Optimal. The algorithm visits every node exactly once to determine the total number of levels.

## Complexity
- **Time Complexity**: $O(N)$, where $N$ is the number of nodes in the binary tree.
- **Space Complexity**: $O(W)$, where $W$ is the maximum width of the tree. In the worst case (perfectly balanced tree), this is $O(N)$.

## Efficiency Feedback
- The runtime and memory usage are optimal for a BFS approach. 
- While a recursive DFS approach would have a space complexity of $O(H)$ (where $H$ is height), BFS is equally valid and prevents stack overflow for extremely deep, skewed trees.

## Code Quality
- **Readability**: Good. The logic is clear and follows a standard BFS template.
- **Structure**: Good. The base case and loop invariants are handled correctly.
- **Naming**: Moderate. `ans` is a generic name; `depth` or `maxDepth` would be more descriptive.
- **Concrete Improvements**:
    - Replace `NULL` with `nullptr` to adhere to modern C++ (C++11 and later) standards.
    - The initial `int ans = 0;` declaration can be moved closer to its first point of use or integrated into the return logic.

---

# Question Revision
### Maximum Depth of Binary Tree

**Pattern:** DFS / Recursion

**Brute Force:** Use Breadth-First Search (BFS) with a queue to traverse the tree level by level, incrementing a counter for each level processed.

**Optimal Approach:** 
Use a recursive Depth-First Search (DFS) to calculate the height of the left and right subtrees. The depth of the current node is $1 + \max(\text{left\_depth}, \text{right\_depth})$.
- **Time Complexity:** $O(n)$ where $n$ is the number of nodes.
- **Space Complexity:** $O(h)$ where $h$ is the height of the tree (recursion stack).

**The 'Aha' Moment:** The maximum depth of a node is inherently dependent on the maximum depth of its children, signaling a recursive sub-problem structure.

**Summary:** The max depth is $1$ plus the maximum depth of its deepest subtree.

---