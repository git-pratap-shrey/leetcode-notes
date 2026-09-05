---
title: "Harshad Number"
slug: harshad-number
date: "2026-09-02"
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
*   **Technique:** Recursive Depth-First Search (DFS).
*   **Optimality:** Optimal. The algorithm visits each node exactly once, which is the theoretical lower bound for verifying tree equality.

## Complexity
*   **Time Complexity:** $O(N)$, where $N$ is the number of nodes in the smaller tree (or both, if equal size).
*   **Space Complexity:** $O(H)$, where $H$ is the height of the tree, representing the recursion stack depth. In the worst case (skewed tree), this is $O(N)$.

## Efficiency Feedback
*   The implementation is highly efficient. It uses early exit conditions (short-circuiting) to return `false` as soon as a mismatch is detected, preventing unnecessary traversal of the remaining tree.

## Code Quality
*   **Readability:** Good. The logic is standard and follows the natural recursive definition of binary tree equality.
*   **Structure:** Good. The base cases for `NULL` pointers are handled correctly and in the right order to avoid segmentation faults.
*   **Naming:** Good. The function name `isSameTree` and variable names `p` and `q` match standard LeetCode conventions for this specific problem.
*   **Concrete Improvements:**
    *   **Modernization:** Use `nullptr` instead of `NULL` for better type safety in C++.
    *   **Conciseness:** While the current logic is very clean, it could be slightly condensed:
        ```cpp
        bool isSameTree(TreeNode* p, TreeNode* q) {
            if (!p || !q) return p == q;
            return (p->val == q->val) && isSameTree(p->left, q->left) && isSameTree(p->right, q->right);
        }
        ```
    *   **Note:** The provided code includes a header comment referencing a "Harshad Number" problem, which is a mismatch for the actual logic implemented (Binary Tree Equality). Ensure documentation matches the code.

---

# Question Revision
### Revision Report: Harshad Number

**Pattern:** Digit Manipulation / Math

**Brute Force:** 
Convert the integer to a string, iterate through characters to compute the sum of digits, and check if the original number is divisible by that sum using the modulo operator.

**Optimal Approach:** 
Use a `while` loop with modulo (`% 10`) and integer division (`/ 10`) to extract digits mathematically without the overhead of string conversion.
*   **Time Complexity:** $O(\log n)$, where $n$ is the input number (proportional to the number of digits).
*   **Space Complexity:** $O(1)$, as it uses a fixed number of integer variables.

**The 'Aha' Moment:** 
Whenever a problem requires processing the individual components of a number, use modulo and division to strip digits from right to left instead of converting to a string.

**Summary:** 
Extract digits mathematically using `% 10` and `/ 10` to maintain $O(1)$ space and avoid costly string allocations.

---