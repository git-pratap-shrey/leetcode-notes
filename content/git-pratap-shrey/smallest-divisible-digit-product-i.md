---
title: "Smallest Divisible Digit Product I"
slug: smallest-divisible-digit-product-i
date: "2026-08-07"
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
    int ans = 0;

    int getSum(TreeNode* root) {
        if (root == nullptr) return 0;

        return root->val + getSum(root->left) + getSum(root->right);
    }

    int getCount(TreeNode* root) {
        if (root == nullptr) return 0;

        return 1 + getCount(root->left) + getCount(root->right);
    }

    void dfs(TreeNode* root) {
        if (root == nullptr) return;

        int sum = getSum(root);
        int count = getCount(root);

        if (sum / count == root->val) {
            ans++;
        }

        dfs(root->left);
        dfs(root->right);
    }

    int averageOfSubtree(TreeNode* root) {
        dfs(root);
        return ans;
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Recursive Tree Traversal (DFS).
*   **Optimality:** **Suboptimal.** While the logic correctly identifies the subtrees, the implementation re-traverses the entire subtree for every node to compute the sum and count. This leads to redundant calculations.

## Complexity
*   **Time Complexity:** $O(N^2)$, where $N$ is the number of nodes. For each node, `getSum` and `getCount` traverse its entire subtree, leading to a worst-case $O(N^2)$ complexity on skewed trees.
*   **Space Complexity:** $O(H)$, where $H$ is the height of the tree, representing the recursion stack depth.

## Efficiency Feedback
*   **Bottleneck:** The redundant calls to `getSum` and `getCount` cause the $O(N^2)$ behavior.
*   **Optimization:** This can be optimized to $O(N)$ by using a post-order traversal (bottom-up approach) where each recursive call returns a `pair<int, int>` representing `{sum, count}` to its parent. This calculates subtree statistics in a single pass.

## Code Quality
*   **Readability:** Good. The logic is straightforward and easy to follow.
*   **Structure:** Moderate. The use of a global `ans` variable within the `Solution` class is discouraged in competitive programming as it requires explicit resetting if the class instance is reused for multiple test cases.
*   **Naming:** Good. The function names `getSum`, `getCount`, and `averageOfSubtree` are descriptive and appropriate.
*   **Concrete Improvements:**
    *   Avoid using class member variables (`ans`) for state if it can be avoided; return the count or pass a reference to a counter.
    *   Refactor to a single recursive function that returns a structure (e.g., `pair<int, int>`) to achieve $O(N)$ efficiency.
    *   The problem title provided ("Smallest Divisible Digit Product I") does not match the code logic ("Average of Subtree"), suggesting a potential mismatch in the provided context.

---

# Question Revision
### Revision Report: Smallest Divisible Digit Product I

**Pattern:** Brute Force / Search

**Brute Force:** 
Starting from the input integer $n$, iteratively increment the number and compute the product of its digits for each candidate. Stop and return the first number where the product of its digits is divisible by a given target.

**Optimal Approach:**
Since the constraints for this specific problem (typically $n \leq 100$) are small, the brute force approach is the intended solution. 
*   **Logic:** Implement a helper function `digitProduct(num)` that uses modulo/division to extract digits. Perform a linear search `while(digitProduct(n) % target != 0) n++`.
*   **Time Complexity:** $O(k \cdot d)$, where $k$ is the range of numbers searched and $d$ is the number of digits.
*   **Space Complexity:** $O(1)$ (or $O(\log n)$ to store digits).

**The 'Aha' Moment:** 
The small input constraints and the lack of a mathematical shortcut for "digit product" properties signal that a direct linear search is the most efficient and readable path.

**Summary:** 
When constraints are low and the condition depends on digit-level properties, treat the search space as a simple stream and simulate the transformation until the condition is met.

---