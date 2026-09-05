---
title: "Path Sum"
slug: path-sum
date: "2026-09-01"
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
    bool hasPathSum(TreeNode* root, int targetSum) {
        if (!root){
            return false;
        }
        if (!root->left && !root->right){
            return targetSum - root->val == 0;
        }
        targetSum -= root->val;
        return hasPathSum(root->left, targetSum) || hasPathSum(root->right, targetSum);
    }
};
~~~

# Submission Review
## Approach
- **Technique:** Recursive Depth-First Search (DFS).
- **Optimality:** Optimal. The problem requires checking paths from root to leaf, necessitating a traversal of the tree. Each node is visited exactly once.

## Complexity
- **Time Complexity:** $O(N)$, where $N$ is the number of nodes in the tree.
- **Space Complexity:** $O(H)$, where $H$ is the height of the tree, representing the maximum depth of the recursion stack. In the worst case (skewed tree), this is $O(N)$.

## Efficiency Feedback
- The runtime and memory usage are minimal.
- Passing `targetSum` by value is appropriate here as the state needs to be unique for each recursive branch.
- The use of short-circuiting logic (`||`) ensures that the search stops as soon as a valid path is found.

## Code Quality
- **Readability:** Good. The logic is concise and directly maps to the problem requirements.
- **Structure:** Good. Base cases (null check and leaf check) are handled before the recursive step.
- **Naming:** Good. Uses standard naming conventions for binary tree problems.
- **Concrete Improvements:** None. The implementation is clean and idiomatic for this specific problem.

---

# Question Revision
### Path Sum

**Pattern:** DFS / Recursion

**Brute Force:** Traverse every possible path from root to leaf, calculating the sum of each and comparing it to the target.

**Optimal Approach:** Use a recursive DFS to subtract the current node's value from the target sum as you descend. A path is valid if you reach a leaf node (no children) and its value exactly equals the remaining target sum.
- **Time Complexity:** $O(n)$
- **Space Complexity:** $O(h)$ (where $h$ is the tree height)

**The 'Aha' Moment:** The "root-to-leaf" constraint implies a top-down traversal where the remaining required sum is passed as state to the children.

**Summary:** Subtract node values from the target during DFS and check if a leaf node's value equals the final remainder.

---