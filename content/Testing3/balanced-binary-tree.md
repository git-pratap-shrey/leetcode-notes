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
*   **Optimality:** Optimal. The solution uses a bottom-up approach to compute heights, allowing for early pruning (returning `-1`) as soon as an imbalance is detected.

## Complexity
*   **Time Complexity:** $O(N)$, where $N$ is the number of nodes. Every node is visited exactly once.
*   **Space Complexity:** $O(H)$, where $H$ is the height of the tree, representing the recursion stack depth. In the worst case (skewed tree), this is $O(N)$; in the best case (balanced tree), $O(\log N)$.

## Efficiency Feedback
*   The solution is highly efficient. By returning `-1` to propagate the failure state up the call stack, it avoids redundant height calculations for the rest of the tree once an imbalance is found. No further optimizations are necessary.

## Code Quality
*   **Readability:** Good. The logic is concise and easy to follow.
*   **Structure:** Good. The helper method pattern effectively separates the state-propagation logic from the main interface.
*   **Naming:** Good. `dfsHeight` clearly describes the function's purpose.
*   **Concrete Improvements:** 
    *   None required. The code is idiomatic and clean for competitive programming standards.

---
---


# Question Revision
### Revision Report: Balanced Binary Tree

**Pattern:** Depth-First Search (Post-order Traversal)

**Brute Force:** 
Calculate the height of the left and right subtrees for every node in the tree. If the difference between heights is $>1$ at any node, return `false`. This results in redundant height calculations for each node, leading to $O(n^2)$ complexity.

**Optimal Approach:** 
Perform a post-order DFS where each recursive call returns the actual height of the subtree if balanced, or a sentinel value (e.g., $-1$) if unbalanced. This allows the parent node to check the balance of its children in $O(1)$ time after they return.
*   **Time Complexity:** $O(n)$ (Each node is visited exactly once).
*   **Space Complexity:** $O(h)$ (Recursion stack, where $h$ is the height of the tree).

**The 'Aha' Moment:** 
The problem requires checking a condition for *every* subtree, which signals that you should propagate status information (height) upward from the leaves to the root during a single pass.

**Summary:** 
Use a bottom-up DFS that returns a sentinel value when an imbalance is detected to avoid redundant re-calculations of subtree heights.

---
