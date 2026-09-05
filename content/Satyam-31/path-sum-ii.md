---
title: "Path Sum II"
slug: path-sum-ii
date: "2026-09-04"
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
    bool check(TreeNode* root, int value) {
        if (root == nullptr) return true;

        if (root->val != value) return false;

        return check(root->left, value) &&
               check(root->right, value);
    }

    bool isUnivalTree(TreeNode* root) {
        return check(root, root->val);
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Recursive Depth-First Search (DFS).
*   **Optimal:** Yes. The problem requires verifying that every node in the tree matches the root's value. A single pass traversal is the theoretical lower bound for this problem.

## Complexity
*   **Time Complexity:** $O(N)$, where $N$ is the number of nodes in the tree. Every node is visited exactly once.
*   **Space Complexity:** $O(H)$, where $H$ is the height of the tree, due to the recursion stack. In the worst case (a skewed tree), this is $O(N)$.

## Efficiency Feedback
*   **Efficiency:** The implementation is highly efficient. It uses early exit (returns `false` immediately upon finding a mismatch), avoiding unnecessary traversal.
*   **Potential Optimization:** None required. The approach is standard and optimal for this problem.

## Code Quality
*   **Readability:** Good. The logic is concise and easy to follow.
*   **Structure:** Good. The logic is cleanly separated into a helper function (`check`) and the primary interface (`isUnivalTree`).
*   **Naming:** Good. The function names and parameters are clear and descriptive.
*   **Concrete Improvements:**
    *   **Edge Case:** While the constraints for this problem (typically LeetCode #965) usually guarantee `root` is not null, adding a safety check in `isUnivalTree` (e.g., `if (!root) return true;`) would make the code more robust against empty inputs.
    *   **Pass-by-value:** The `value` parameter is a primitive `int`, which is appropriate. The code is idiomatic C++.

---

# Question Revision
### Revision Report: Path Sum II

**Pattern:** Backtracking / Depth-First Search (DFS)

**Brute Force:** 
Traverse all possible root-to-leaf paths using DFS, store every path in a list, and filter those where the sum equals the target. This leads to redundant memory allocation and overhead by copying paths at every node.

**Optimal Approach:** 
Use a single `path` list and a `result` list. As you traverse, append the current node value to `path`, recurse to children, and **backtrack** (pop the node) before returning to the parent. This maintains only the current active path in memory.
*   **Time Complexity:** $O(n)$ where $n$ is the number of nodes (we must visit each node).
*   **Space Complexity:** $O(h)$ where $h$ is the tree height (for the recursion stack and the active path list).

**The 'Aha' Moment:** 
The requirement to return *all* paths that satisfy a condition—combined with the need to "undo" state as you backtrack up the tree—is a definitive signal to use DFS with a mutable path variable.

**Summary:** 
Use a single path buffer and pop after recursion (backtrack) to explore all tree branches without the memory overhead of duplicating path lists at every step.

---