---
title: "Count Complete Tree Nodes"
slug: count-complete-tree-nodes
date: "2026-04-12"

---
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
    void solve(TreeNode* root, int& count){
        if (!root) return;
        solve(root->left,count);
        count++;
        solve(root->right,count);
    }
    int countNodes(TreeNode* root) {
        int count=0;
        solve(root,count);
        return count;
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** In-order tree traversal (Depth-First Search).
*   **Optimal:** No. The approach treats the input as a generic binary tree and visits every node ($O(N)$). It fails to leverage the specific "Complete Binary Tree" property, which allows for $O(\log^2 N)$ performance.

## Complexity
*   **Time Complexity:** $O(N)$, where $N$ is the number of nodes in the tree.
*   **Space Complexity:** $O(H)$, where $H$ is the height of the tree (recursion stack depth). In the worst case, $O(N)$.

## Efficiency Feedback
*   **Bottleneck:** Visiting every node is unnecessary. For a complete binary tree, you can compare the heights of the leftmost and rightmost paths. If they are equal, the subtree is a perfect binary tree with $2^h - 1$ nodes. Otherwise, recurse.
*   **Improvement:** Implement the height-based pruning to achieve $O(\log^2 N)$ time complexity.

## Code Quality
*   **Readability:** Good. The logic is straightforward and standard for a traversal.
*   **Structure:** Moderate. Using a helper function `solve` is standard, but the `count` variable passed by reference is a slightly dated style compared to returning an `int` directly from the recursive function.
*   **Naming:** Good. `solve` and `count` are clear within this context.
*   **Concrete Improvements:**
    *   Change `solve` to return an `int` (the subtree count) to avoid passing a reference: `return 1 + solve(root->left) + solve(root->right);`.
    *   To optimize, add checks for `leftHeight` vs `rightHeight` at the start of `countNodes`.

---
---


# Question Revision
### Revision Report: Count Complete Tree Nodes

**Pattern:** Binary Tree / Divide and Conquer

**Brute Force:**
Traverse the entire tree (DFS or BFS) and count every node.
*   **Time:** $O(n)$
*   **Space:** $O(h)$ where $h$ is tree height.

**Optimal Approach:**
Leverage the "complete" property: a complete tree has at least one perfect binary subtree. Compare the leftmost height (`left_h`) and rightmost height (`right_h`). If `left_h == right_h`, the subtree is perfect, and its node count is $2^h - 1$. Otherwise, recurse on both children and add 1 for the current node.
*   **Time:** $O(\log^2 n)$ — Finding height is $O(\log n)$, and we do this at each level of the tree.
*   **Space:** $O(\log n)$ for recursion stack.

**The 'Aha' Moment:**
The term "Complete Binary Tree" is a specific constraint that guarantees structural predictability, allowing you to bypass full traversal by identifying perfect subtrees via height checks.

**Summary:**
When you see "Complete Tree," use the depth difference between left and right spines to prune your recursion via the $2^h - 1$ formula for perfect subtrees.

---
