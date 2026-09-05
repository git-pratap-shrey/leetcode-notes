---
title: "Same Tree"
slug: same-tree
date: "2026-08-23"
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
    bool isSameTree(TreeNode* p, TreeNode* q) {
        if(p==NULL && q==NULL){
            return true;
        }
        if(p==NULL || q==NULL){
            return false;
        }
        if(p->val!=q->val){
            return false;
        }
        return isSameTree(p->left,q->left)&&isSameTree(p->right,q->right);
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Recursive Depth-First Search (DFS).
- **Optimality**: Optimal. Every node in both trees must be visited at least once to confirm equality.

## Complexity
- **Time Complexity**: $O(N)$, where $N$ is the number of nodes in the smaller tree. The algorithm terminates as soon as a mismatch is found.
- **Space Complexity**: $O(H)$, where $H$ is the height of the tree, representing the maximum depth of the recursion stack. In the worst case (a skewed tree), this becomes $O(N)$.

## Efficiency Feedback
- The implementation is highly efficient.
- The short-circuiting nature of the `&&` operator and the early `return false` statements ensure that no unnecessary nodes are visited once a difference is detected.

## Code Quality
- **Readability**: Good. The logic is linear and easy to follow.
- **Structure**: Good. Base cases are handled before recursive calls.
- **Naming**: Moderate. `p` and `q` are acceptable in a competitive programming context, but `root1` and `root2` would be more descriptive for production code.
- **Improvements**:
    - Replace `NULL` with `nullptr` to align with modern C++ (C++11 and later) standards.
    - The spacing around operators (e.g., `p==NULL`) is inconsistent; adding spaces would improve legibility.

---

# Question Revision
### Revision Report: Same Tree

**Pattern:** DFS / Recursion

**Brute Force:** Serialize both trees into strings or arrays (including null markers) and compare the resulting sequences for equality.

**Optimal Approach:** Use a recursive traversal to compare the two trees simultaneously. At each step, verify:
1. Both nodes are `null` (True).
2. One node is `null` or values differ (False).
3. Recurse on left children AND recurse on right children.

- **Time Complexity:** $O(n)$ where $n$ is the total number of nodes in the smaller tree.
- **Space Complexity:** $O(h)$ where $h$ is the height of the tree (recursion stack).

**The 'Aha' Moment:** The definition of structural identity is inherently recursive: two trees are the same if their roots match and their corresponding subtrees are also the same.

**Summary:** Perform a synchronized DFS traversal to validate structural and value equality at every node.

---