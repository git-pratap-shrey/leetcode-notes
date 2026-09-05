---
title: "Maximum Depth of Binary Tree"
slug: maximum-depth-of-binary-tree
date: "2026-08-13"
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
        if(root==NULL){
            return 0;
        }
        int left = maxDepth(root->left);
        int right = maxDepth(root->right); 
        return 1+max(left,right);
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Recursive Depth-First Search (DFS) / Post-order traversal.
- **Optimality**: Optimal. To determine the maximum depth, every node in the tree must be visited at least once.

## Complexity
- **Time Complexity**: $O(N)$, where $N$ is the number of nodes in the tree.
- **Space Complexity**: $O(H)$, where $H$ is the height of the tree, representing the maximum depth of the recursion stack. In the worst case (a skewed tree), this is $O(N)$.

## Efficiency Feedback
- The solution is highly efficient.
- No further optimizations are needed as the time and space complexities are the theoretical minimums for this problem.

## Code Quality
- **Readability**: Good. The logic is concise and follows the standard recursive pattern for tree problems.
- **Structure**: Good. The base case and recursive step are clearly separated.
- **Naming**: Good. `left` and `right` accurately describe the depth of the respective subtrees.
- **Improvements**: 
    - Use `nullptr` instead of `NULL` to maintain consistency with the `TreeNode` struct definition provided in the comments.

---

# Question Revision
### Maximum Depth of Binary Tree

**Pattern:** DFS / Recursion

**Brute Force:** Use a Queue to perform a Level-Order Traversal (BFS), incrementing a counter for every full level processed.

**Optimal Approach:** Use a recursive post-order traversal. Each node calculates its depth as $1 + \max(\text{left\_depth}, \text{right\_depth})$.
- **Time Complexity:** $O(n)$ where $n$ is the number of nodes.
- **Space Complexity:** $O(h)$ where $h$ is the height of the tree (recursion stack).

**The 'Aha' Moment:** The depth of any node is simply one more than the depth of its deepest subtree.

**Summary:** Recursively find the maximum height of the left and right children and add one for the current level.

---