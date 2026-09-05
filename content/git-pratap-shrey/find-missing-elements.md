---
title: "Find Missing Elements"
slug: find-missing-elements
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
    int height(TreeNode* r) {
        if (r == NULL)
            return 0;

        int left = height(r->left);
        int right = height(r->right);

        if (left == -1 || right == -1)
            return -1;

        if (abs(left - right) > 1)
            return -1;

        return 1 + max(left, right);
    }

    bool isBalanced(TreeNode* root) {
        return height(root) != -1;
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Post-order depth-first search (DFS).
*   **Optimality:** Optimal. The solution uses a bottom-up approach to determine tree balance, calculating heights and checking the balance factor simultaneously. This avoids the $O(N^2)$ re-computation present in top-down height-based implementations.

## Complexity
*   **Time Complexity:** $O(N)$, where $N$ is the number of nodes in the tree, as each node is visited exactly once.
*   **Space Complexity:** $O(H)$, where $H$ is the height of the tree, due to the implicit recursion stack. In the worst case (skewed tree), this is $O(N)$.

## Efficiency Feedback
*   The implementation is highly efficient. Returning `-1` as a sentinel value for an unbalanced subtree is a standard and effective way to prune the search space early.
*   No significant performance improvements are possible given the necessity of visiting every node to confirm structural balance.

## Code Quality
*   **Readability:** Good. The logic is concise and follows standard conventions for tree recursion.
*   **Structure:** Good. The helper function `height` cleanly separates the recursive logic from the `isBalanced` interface.
*   **Naming:** Moderate. `r` is slightly non-descriptive; `root` or `node` would be clearer. The helper function `height` is technically misleading as it returns a status code (`-1`) rather than just the height, but it is idiomatic in competitive programming.
*   **Concrete Improvements:**
    *   Change `r == NULL` to `r == nullptr` for modern C++ standards.
    *   Consider using `std::max` consistently; the code currently uses it correctly, but adding `std::` prefix improves clarity if not using `using namespace std;` (though not explicitly required here).
    *   Adding `const` to the `TreeNode*` parameter in `height` would better indicate that the tree structure is not being modified.

---

# Question Revision
### Revision Report: Find Missing Elements

**Pattern:** Cyclic Sort / Mathematical Summation / Hashing

**Brute Force:** Use a nested loop or a hash set to check every number from the range $[1, n]$ against the input array.
*   **Time:** $O(n^2)$ (with nested loops) or $O(n)$ (with set).
*   **Space:** $O(n)$ to store the set.

**Optimal Approach:**
1.  **Cyclic Sort:** Place each number $x$ at index $x-1$ by swapping. Iterate once more; any index $i$ where `arr[i] != i + 1` identifies $i+1$ as missing.
2.  **Mathematical (Sum):** Calculate the expected sum of $1..n$ using $n(n+1)/2$ and subtract the actual array sum.
*   **Time:** $O(n)$
*   **Space:** $O(1)$ (in-place modification for Cyclic Sort).

**The 'Aha' Moment:**
When the problem specifies a range constraint (e.g., numbers are $1$ to $n$) and asks for missing elements, you can use the indices as "buckets" to track presence without extra memory.

**Summary:** 
If the problem provides a fixed range $[1, n]$ and an array of size $n$, treat the indices as a hash map by placing each value $x$ at its corresponding index $x-1$.

---