---
title: "Validate Binary Search Tree"
slug: validate-binary-search-tree
date: "2026-06-24"
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
    bool check(TreeNode* root, long long low, long long high) {
        if (root == nullptr) return true;

        if (root->val <= low || root->val >= high)
            return false;

        return check(root->left, low, root->val) &&
               check(root->right, root->val, high);
    }

    bool isValidBST(TreeNode* root) {
        return check(root, LLONG_MIN, LLONG_MAX);
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Recursive Depth-First Search (DFS) using range boundaries.
- **Optimality**: Optimal. It validates the BST property by ensuring every node falls within a strictly defined minimum and maximum bound inherited from its ancestors.

## Complexity
- **Time Complexity**: $O(N)$, where $N$ is the number of nodes in the tree. Each node is visited exactly once.
- **Space Complexity**: $O(H)$, where $H$ is the height of the tree. This space is consumed by the implicit recursion stack. In the worst case (a skewed tree), this becomes $O(N)$.

## Efficiency Feedback
- **Runtime/Memory**: The performance is optimal.
- **Integer Overflow**: The use of `long long` for `low` and `high` is a critical and correct choice. It prevents edge-case failures when a node's value is exactly `INT_MIN` or `INT_MAX`, which would otherwise fail if `int` were used for boundaries.

## Code Quality
- **Readability**: Good. The logic is concise and follows the standard recursive pattern for this problem.
- **Structure**: Good. The separation of the entry point (`isValidBST`) and the recursive logic (`check`) is clean.
- **Naming**: Moderate. While `isValidBST` is descriptive, the helper function `check` is generic. A name like `validateRange` would be more expressive.
- **Improvements**: 
    - No logical improvements needed. 
    - For strictly professional code, renaming `check` to `validate` would improve clarity.

---

# Question Revision
### Validate Binary Search Tree

**Pattern:** DFS / Tree Range Validation

**Brute Force:** For every node, recursively scan its entire left subtree for values $\ge$ node and its entire right subtree for values $\le$ node.
*   **Complexity:** Time: $O(n^2)$, Space: $O(h)$

**Optimal Approach:** Use a recursive helper function that passes down a strict `low` and `high` boundary for each node. For a node to be valid, its value must be strictly between `low` and `high`. When moving left, update the `high` boundary to the current node's value; when moving right, update the `low` boundary.
*   **Time Complexity:** $O(n)$
*   **Space Complexity:** $O(h)$ (where $h$ is tree height)

**The 'Aha' Moment:** A node is not valid just because it is larger than its left child; it must be larger than *every* node in its left subtree.

**Summary:** Validate a BST by propagating narrowing value constraints from the root down to the leaves.

---