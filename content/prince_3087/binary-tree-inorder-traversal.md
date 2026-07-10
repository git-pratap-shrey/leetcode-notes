---
title: "Binary Tree Inorder Traversal"
slug: binary-tree-inorder-traversal
date: "2026-06-30"

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
    vector<int> inorderTraversal(TreeNode* root) {
        vector<int>res;
        fun(root,res);
        return res;
        
    }
    void fun(TreeNode* node ,vector<int>&res){
        if(node==NULL){
            return;
        }
        fun(node->left,res);
        res.push_back(node->val);
        fun(node->right,res);
        
    }
};
~~~

# Submission Review

## Approach

- **Technique**: Recursive Depth-First Search (DFS).
- **Optimality**: Optimal. Inorder traversal requires visiting every node exactly once, making $O(N)$ the lower bound for time complexity.

## Complexity

- **Time Complexity**: $O(N)$, where $N$ is the number of nodes in the binary tree.
- **Space Complexity**: $O(H)$, where $H$ is the height of the tree, representing the maximum depth of the recursion stack. In the worst case (skewed tree), this becomes $O(N)$.

## Efficiency Feedback
- The implementation is efficient. Passing the `vector<int>` by reference (`vector<int>& res`) prevents unnecessary copying of the result list across recursive calls.
- No significant bottlenecks identified.

## Code Quality

- **Readability**: Moderate. The logic is straightforward, but the lack of spacing around operators (e.g., `node==NULL`) makes it feel cramped.
- **Structure**: Good. The separation of the public interface and the private recursive helper is standard practice.
- **Naming**: Poor. The helper function `fun` is non-descriptive. A name like `traverse` or `inorder` would be more appropriate.
- **Improvements**: 
    - Rename `fun` to `inorderHelper`.
    - Use `nullptr` instead of `NULL` for modern C++ consistency.
    - Add a `const` qualifier to the helper function if it doesn't modify class state (though not strictly necessary here).

---

# Question Revision

#

## Binary Tree Inorder Traversal

**Pattern:** Tree Traversal (DFS)

**Brute Force:** 
Recursive DFS: Define a helper function that visits the left child, processes the current node, and then visits the right child. 
- **Time:** $O(n)$
- **Space:** $O(h)$ (Recursive call stack)

**Optimal Approach:** 
Iterative Stack: Use an explicit stack to simulate the recursion. Traverse to the leftmost node, pushing all ancestors onto the stack. Pop the node to visit it, then shift the pointer to its right child to repeat the process.
- **Time:** $O(n)$
- **Space:** $O(h)$ where $h$ is the tree height.

**The 'Aha' Moment:** 
The term "Inorder" explicitly defines the visitation sequence: Left subtree $\rightarrow$ Root $\rightarrow$ Right subtree.

**Summary:** 
Dive left as far as possible using a stack, process the node upon popping, and then pivot to the right child.

---
