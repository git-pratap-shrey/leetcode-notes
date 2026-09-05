---
title: "Root Equals Sum of Children"
slug: root-equals-sum-of-children
date: "2026-08-14"
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
    bool checkTree(TreeNode* root) {
         return root->val == root->left->val + root->right->val;
        
    }
};
~~~

# Submission Review
## Approach
* **Technique:** Direct property verification.
* **Optimality:** Optimal. The problem constraints guarantee the tree structure (root with two children), making this $O(1)$ constant time check sufficient.

## Complexity
* **Time Complexity:** $O(1)$.
* **Space Complexity:** $O(1)$.

## Efficiency Feedback
* The code is as efficient as possible. It performs exactly one addition and one comparison, which is the theoretical minimum for this problem.

## Code Quality
* **Readability:** Good. The logic is concise and follows the problem statement directly.
* **Structure:** Good. Using the class/method structure provided by the platform is standard.
* **Naming:** Good. The variable `root` is standard, and the logic is self-explanatory.
* **Concrete Improvements:** 
    * None needed for the logic itself.
    * From a defensive programming standpoint, if the input constraints did not guarantee non-null children, you would need to add a null check (`if (!root || !root->left || !root->right) return false;`). Since the problem constraints define a specific tree structure, the current implementation is acceptable.

---

# Question Revision
### Revision Report: Root Equals Sum of Children

**Pattern:** Tree Traversal / Basic Arithmetic

**Brute Force:** Access the `val` attribute of the root node and compare it to the sum of the `val` attributes of its left and right children nodes.

**Optimal Approach:** Direct comparison of the root node's value against the sum of its direct children nodes.
*   **Time Complexity:** $O(1)$
*   **Space Complexity:** $O(1)$

**The 'Aha' Moment:** The problem defines a local relationship between a parent and its immediate children, allowing for a constant-time check without needing to traverse or validate the entire tree structure.

**Summary:** When a problem defines a condition based only on immediate neighbors, you can solve it in $O(1)$ time by ignoring the rest of the data structure.

---