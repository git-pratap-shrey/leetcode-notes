---
title: "Find All Numbers Disappeared in an Array II"
slug: find-all-numbers-disappeared-in-an-array-ii
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

 int maxPathUtil(TreeNode* root, int & ans){
    if (!root) return 0;
    int left=maxPathUtil(root->left,ans);
    int right=maxPathUtil(root->right,ans);

    int nodeval=max(max(root->val,root->val+right+left),max(root->val+right,root->val+left));
    ans=max(ans,nodeval);
    int singlePath=max(root->val,max(root->val+left,root->val+right));
    return singlePath;
 }
class Solution {
public:
    int maxPathSum(TreeNode* root) {
        int ans=INT_MIN;
        maxPathUtil(root,ans);
        return ans;
    }
};
~~~

# Submission Review
## Approach
- **Technique:** Recursive Post-order Traversal (DFS).
- **Correctness:** The logic for `maxPathSum` is **incorrect**. The current implementation treats individual nodes as mandatory parts of a path even if they are negative. Specifically, `max(root->val, root->val + left)` implies that a path must always include the root, but if `left` or `right` are negative, they should be ignored (set to 0) rather than forced into the sum. This code fails for trees containing negative node values where excluding a subtree would yield a higher path sum.
- **Optimality:** The strategy of using a global/reference variable to track the maximum path sum is standard and optimal, but the recurrence relations are flawed.

## Complexity
- **Time Complexity:** $O(N)$, where $N$ is the number of nodes, as every node is visited exactly once.
- **Space Complexity:** $O(H)$, where $H$ is the height of the tree (recursion stack).

## Efficiency Feedback
- The algorithm is already as efficient as it can be in terms of traversal, but it sacrifices correctness for simplicity. 
- The use of `INT_MIN` for initialization is correct.

## Code Quality
- **Readability:** Moderate. The logic inside `nodeval` is convoluted.
- **Structure:** Poor. The `maxPathUtil` function is defined outside the `Solution` class in a way that suggests a copy-paste error or lack of encapsulation.
- **Naming:** Moderate. `ans` and `nodeval` are generic but acceptable.
- **Concrete Improvements:**
    - To fix the logic, update `singlePath` to only include `left` or `right` if they are positive: `max(0, max(left, right)) + root->val`.
    - Do not include negative sums from subtrees in the `singlePath` return value; use `max(0, ...)` logic.
    - Ensure `maxPathUtil` is a private member of the `Solution` class.
    - Remove the irrelevant `TreeNode` comments/definition at the top, as they are not the focus of this problem (the provided code solves "Binary Tree Maximum Path Sum," not "Find All Numbers Disappeared in an Array").

---

# Question Revision
### Revision Report: Find All Numbers Disappeared in an Array

**Pattern:** In-place Index Mapping (Cyclic Sort variant)

**Brute Force:** Use a Hash Set to store all numbers, then iterate from $1$ to $n$ to check for missing values.
*   **Time:** $O(n)$
*   **Space:** $O(n)$

**Optimal Approach:** Use the input array itself as a frequency map. Iterate through the array; for each value `abs(nums[i])`, treat it as an index and negate the value at `nums[index - 1]`. After one pass, any index `i` where `nums[i]` is positive signifies that `i + 1` was never present in the array.
*   **Time:** $O(n)$
*   **Space:** $O(1)$ (excluding the output list)

**The 'Aha' Moment:** The constraint that numbers are in the range $[1, n]$ and the array size is also $n$ signals that each number can be mapped uniquely to an array index.

**Summary:** When you see an array containing values within the range of its own indices, use the values as pointers to negate elements and track state in $O(1)$ auxiliary space.

---