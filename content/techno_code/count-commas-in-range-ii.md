---
title: "Count Commas in Range II"
slug: count-commas-in-range-ii
date: "2026-09-09"
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

    TreeNode* mergeTrees(TreeNode* root1, TreeNode* root2)
    {
        
        if(root1 == NULL && root2 == NULL)
            return NULL;
        if(root1 == NULL)
            return root2;
        if(root2 == NULL)
            return root1;
        root1->val = root1->val + root2->val;
        root1->left = mergeTrees(root1->left, root2->left);
        root1->right = mergeTrees(root1->right, root2->right);

        return root1;
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Recursive Depth-First Search (DFS) for tree traversal.
- **Optimality**: Optimal for the task of merging two binary trees. It visits each overlapping node exactly once.

## Complexity
- **Time Complexity**: $O(\min(N, M))$, where $N$ and $M$ are the number of nodes in the two trees. The traversal stops as soon as one tree's branch ends.
- **Space Complexity**: $O(\min(H_1, H_2))$, where $H$ is the height of the trees, representing the maximum depth of the recursion stack.

## Efficiency Feedback
- The implementation is efficient. It modifies `root1` in place, avoiding unnecessary allocations of new `TreeNode` objects.
- No significant bottlenecks identified.

## Code Quality
- **Readability**: Good. The logic is straightforward and follows standard recursive patterns.
- **Structure**: Good. The base cases are handled clearly at the start of the function.
- **Naming**: Moderate. The function name `mergeTrees` is appropriate, but the problem title provided ("Count Commas in Range II") is completely unrelated to the actual code provided (which merges binary trees).
- **Improvements**: 
    - Use `nullptr` instead of `NULL` for consistency with modern C++ standards (already used in the `TreeNode` definition).
    - The logic is sound, but ensure that the caller is aware that `root1` is being mutated.

---

# Question Revision
# Revision Report: Count Commas in Range II

- **Pattern:** Digit DP (Dynamic Programming on Digits)
- **Brute Force:** Iterate through every integer from $L$ to $R$, convert each to a string, and count commas.
    - **Complexity:** $O((R-L) \cdot \log R)$ — Too slow for large ranges.
- **Optimal Approach:** Use Digit DP to count the total commas in the range $[0, N]$. The result for $[L, R]$ is calculated as $f(R) - f(L-1)$. 
    - **Logic:** Maintain a state `(index, count, isLess, isStarted)`. `index` tracks the current digit, `count` tracks commas placed so far, `isLess` handles the upper bound constraint, and `isStarted` ensures commas aren't counted before the first non-zero digit.
    - **Complexity:** 
        - **Time:** $O(\text{digits} \times \text{max\_commas}) \approx O(\log_{10} R \times \frac{\log_{10} R}{3})$
        - **Space:** $O(\log_{10} R \times \frac{\log_{10} R}{3})$ for memoization.
- **The 'Aha' Moment:** When the problem asks to count a specific property (like commas or digits) across a massive numeric range ($10^{18}$), it's almost always a Digit DP problem.
- **Summary:** Use Digit DP to treat the number as a string and count occurrences by iterating digit-by-digit with state memoization.

---