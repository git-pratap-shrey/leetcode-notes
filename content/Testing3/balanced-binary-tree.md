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
*   **Optimality:** Optimal. The solution uses a bottom-up approach to compute heights, allowing for early termination as soon as an imbalance is detected.

## Complexity
*   **Time Complexity:** $O(N)$, where $N$ is the number of nodes. Each node is visited exactly once.
*   **Space Complexity:** $O(H)$, where $H$ is the height of the tree, representing the recursion stack depth (worst case $O(N)$ for a skewed tree).

## Efficiency Feedback
*   **Performance:** Excellent. By propagating `-1` as an error signal, the algorithm avoids redundant height calculations once a subtree is already known to be unbalanced. This is significantly more efficient than a naive $O(N^2)$ top-down approach that recalculates height for every node.
*   **Memory:** No unnecessary data structures are allocated, making this memory-efficient.

## Code Quality
*   **Readability:** Good. The logic is concise and easy to follow.
*   **Structure:** Good. The helper method pattern effectively separates the state (height vs. balanced boolean) from the main API.
*   **Naming:** Good. `dfsHeight` clearly describes the function's purpose.
*   **Improvements:** The code is idiomatic and standard for this problem. No functional improvements are needed.

---
---


# Question Revision
### Revision Report: Balanced Binary Tree

**Pattern:** Depth-First Search (DFS) / Post-Order Traversal

**Brute Force:**
For every node, calculate the height of the left and right subtrees by traversing them entirely. If the difference between heights is > 1 at any node, return false. This leads to redundant recalculations for each node.
*   **Time Complexity:** $O(n^2)$
*   **Space Complexity:** $O(n)$ (recursion stack)

**Optimal Approach:**
Use a bottom-up DFS approach. Each recursive call returns the height of the subtree if it is balanced, or a specific sentinel value (e.g., -1) if it is unbalanced. This allows the parent to immediately know if its children are unbalanced without re-scanning.
*   **Time Complexity:** $O(n)$ (each node visited once)
*   **Space Complexity:** $O(h)$ where $h$ is the tree height (worst case $O(n)$)

**The 'Aha' Moment:**
When a problem requires verifying a property that depends on child nodes, returning the state (or error) during the post-order traversal avoids re-calculating the same subtree heights repeatedly.

**Summary:**
Transform the tree property into a recursive return value to prune the calculation early and achieve linear time.

---
