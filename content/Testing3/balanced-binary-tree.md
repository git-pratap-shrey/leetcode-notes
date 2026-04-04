---
title: "Balanced Binary Tree"
slug: balanced-binary-tree

---
---

# My Solution
~~~java
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
 class Solution {
    public boolean isBalanced(TreeNode root) {
        return dfsHeight(root) != -1;
    }

    private int dfsHeight(TreeNode node) {
        if (node == null) return 0;

        int leftHeight = dfsHeight(node.left);
        if (leftHeight == -1) return -1;

        int rightHeight = dfsHeight(node.right);
        if (rightHeight == -1) return -1;

        if (Math.abs(leftHeight - rightHeight) > 1) {
            return -1;
        }

        return 1 + Math.max(leftHeight, rightHeight);
    }
}
~~~

# Submission Review
## Approach
*   **Technique:** Post-order Depth-First Search (DFS).
*   **Optimality:** Optimal. It performs a single bottom-up traversal, pruning the recursion as soon as an imbalance is detected. This avoids the redundant $O(n^2)$ re-computation of heights found in naive implementations.

## Complexity
*   **Time Complexity:** $O(n)$, where $n$ is the number of nodes in the tree, as each node is visited exactly once.
*   **Space Complexity:** $O(h)$, where $h$ is the height of the tree, representing the recursion stack depth. In the worst case (skewed tree), this is $O(n)$.

## Efficiency Feedback
*   **High Efficiency:** The strategy of returning `-1` as an error sentinel is highly effective for early termination. It avoids unnecessary recursive calls once a subtree is already identified as unbalanced.
*   **Memory:** The space complexity is minimal and dictated by the tree structure, which is standard for recursive tree algorithms.

## Code Quality
*   **Readability:** Good. The logic is straightforward and follows standard recursive patterns.
*   **Structure:** Good. The helper method `dfsHeight` cleanly separates the recursive state from the public interface.
*   **Naming:** Good. `dfsHeight` accurately describes the utility function.
*   **Improvements:** 
    *   The implementation is already idiomatic and clean. No functional changes are required. 
    *   One minor improvement could be adding a documentation comment explaining the sentinel value `-1` for future maintainers.

---
---


# Question Revision
### Revision Report: Balanced Binary Tree

**Pattern:** Depth-First Search (DFS) / Post-Order Traversal

**Brute Force:**
For every node, calculate the height of the left and right subtrees and check if the difference is $\le 1$. Since `height()` is called for every node, this results in $O(n^2)$ time complexity.

**Optimal Approach:**
Use a bottom-up DFS that returns the height of the tree if balanced, or a sentinel value (e.g., -1) if unbalanced. By returning early when an imbalance is detected, we avoid redundant height calculations.
*   **Time Complexity:** $O(n)$
*   **Space Complexity:** $O(h)$ (where $h$ is the height of the tree for recursion stack)

**The 'Aha' Moment:**
When a problem asks for a condition to hold true for *every* subtree, calculate the metric bottom-up so each parent can reuse the result of its children.

**Summary:**
If a property must hold for all subtrees, perform a bottom-up DFS that propagates both the required metric and the validity status simultaneously.

---
