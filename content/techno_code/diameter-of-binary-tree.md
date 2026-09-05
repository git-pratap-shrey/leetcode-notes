---
title: "Diameter of Binary Tree"
slug: diameter-of-binary-tree
date: "2026-08-18"
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
    int height(TreeNode* root,int &d) {
        if(root==NULL){return 0;}
        int left=height(root->left,d);
        int right=height(root->right,d);
        d=max(d,left+right);
        return 1+max(left,right);
    }
    int diameterOfBinaryTree(TreeNode* root) {
        int d=0;
        height(root,d);
        return d;
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Depth-First Search (DFS) using a post-order traversal.
- **Optimality**: Optimal. It computes the diameter in a single pass by calculating the height of subtrees and updating the global maximum diameter at each node.

## Complexity
- **Time Complexity**: $O(N)$, where $N$ is the number of nodes in the tree. Each node is visited exactly once.
- **Space Complexity**: $O(H)$, where $H$ is the height of the tree. This space is used by the implicit recursion stack. In the worst case (skewed tree), this is $O(N)$.

## Efficiency Feedback
- The solution is highly efficient. 
- Passing the diameter `d` by reference avoids the need for a member variable or multiple passes, keeping the overhead minimal.

## Code Quality
- **Readability**: Good. The logic is concise and follows the standard recursive pattern for tree problems.
- **Structure**: Good. Separation between the recursive helper and the public API is clear.
- **Naming**: Moderate. `d` is slightly cryptic; `diameter` would be more descriptive.
- **Improvements**: 
    - Use `nullptr` instead of `NULL` for modern C++ consistency.
    - Add `const` qualifiers to parameters that are not modified (though not strictly necessary for competitive programming).

---

# Question Revision
### Diameter of Binary Tree

**Pattern:** DFS / Post-order Traversal

**Brute Force:** 
For every node in the tree, independently calculate the maximum depth of its left and right subtrees. The diameter at that node is `left_depth + right_depth`. Track the global maximum across all nodes.

**Optimal Approach:** 
Use a single recursive post-order traversal. The function returns the **height** of the current node to its parent, but simultaneously updates a global variable with the **diameter** (`left_height + right_height`) calculated at that specific node.

*   **Time Complexity:** $O(n)$ — each node is visited exactly once.
*   **Space Complexity:** $O(h)$ — where $h$ is the tree height (recursion stack).

**The 'Aha' Moment:** 
The diameter isn't necessarily the path through the root, but the longest path through *any* node is simply the sum of the maximum heights of its left and right subtrees.

**Summary:** 
Use post-order DFS to return height while updating a global maximum diameter at every node.

---