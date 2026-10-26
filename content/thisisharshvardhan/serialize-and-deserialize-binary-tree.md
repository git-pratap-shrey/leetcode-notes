---
title: "Serialize and Deserialize Binary Tree"
slug: serialize-and-deserialize-binary-tree
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
        if(!root)return 0;
        int ans=0;
        queue<pair<TreeNode*,long long>>que;
        que.push({root,0});
        while(!que.empty()){
            long long m=que.front().second;
            long long first=0,last=0;
            int n=que.size();
            for(int i =0;i<n;i++){
            auto it=que.front();
            TreeNode* curr=it.first;
            que.pop();
            long long id=it.second-m;
            if(i==0)first=id;
            if(i==n-1)last=id;
            if(curr->left){
                que.push({curr->left,2*id+1});
            }
            if(curr->right){
                que.push({curr->right,2*id+2});
            }
          }
          ans=max(ans,(int)(last-first+1));
            
        }
        return ans;

    }
};
~~~

# Submission Review
## Approach
- **Technique:** Breadth-First Search (BFS) using a queue to traverse the tree level by level. It assigns an index to each node (similar to a binary heap array representation) to calculate the width.
- **Correctness Issue:** The code provided solves **"Maximum Width of Binary Tree,"** not the requested problem **"Serialize and Deserialize Binary Tree."** The logic is entirely unrelated to serialization.
- **Optimality:** For the width problem, the BFS approach is standard, but the implementation has a critical flaw: it uses `long long` for indices, which will still **overflow** on extremely skewed/deep trees (the index grows exponentially $2^n$).

## Complexity
- **Time Complexity:** $O(N)$, where $N$ is the number of nodes in the tree, as each node is visited once.
- **Space Complexity:** $O(W)$, where $W$ is the maximum width of the tree, required for the queue.

## Efficiency Feedback
- **Overflow Risk:** The indexing `2*id+1` and `2*id+2` can exceed the capacity of `long long` if the tree depth is significant (e.g., $> 63$ levels).
- **Unnecessary Casting:** `(int)(last-first+1)` may lead to integer overflow if the width exceeds `INT_MAX`.

## Code Quality
- **Readability:** Moderate. The logic is compact, but lack of spacing around operators (e.g., `if(!root)return 0;`) makes it cramped.
- **Structure:** Good. Standard BFS structure using a level-size loop.
- **Naming:** Poor. Variables like `m`, `it`, and `ans` are generic. `m` should be `levelStartIdx` and `ans` should be `maxWidth`.
- **Critical Error:** The solution is for the wrong problem. It implements `widthOfBinaryTree` instead of `serialize` and `deserialize` methods.

---

# Question Revision
# Revision Report: Serialize and Deserialize Binary Tree

- **Pattern:** Tree Traversal (DFS / Pre-order)
- **Brute Force:** Convert the tree into a nested string representation (e.g., `(root(left)(right))`) using recursive parentheses. This requires complex string parsing and scanning to find matching brackets during deserialization.
- **Optimal Approach:** 
    - **Serialize:** Perform a **Pre-order Traversal**. Record each node's value; if a node is null, record a special marker (e.g., `#` or `null`). Join these with a delimiter (e.g., `,`).
    - **Deserialize:** Split the string into a queue. Recursively pop the front element: if it's a value, create a node and recursively build its left and right children; if it's the marker, return `null`.
    - **Complexity:**
        - Time: $O(n)$ for both serialization and deserialization.
        - Space: $O(n)$ to store the serialized string and the recursion stack.
- **The 'Aha' Moment:** The requirement to preserve tree structure without storing pointers suggests that a traversal containing **explicit null markers** can uniquely represent a binary tree.
- **Summary:** Use Pre-order DFS with null markers to flatten a tree into a string and a Queue to rebuild it recursively.

---