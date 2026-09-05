---
title: "Minimum Bishop Moves to Reach Target"
slug: minimum-bishop-moves-to-reach-target
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
    bool evaluateTree(TreeNode* root) {
        
        if (root->left == nullptr && root->right == nullptr) {
            return root->val == 1;
        }

        bool left = evaluateTree(root->left);
        bool right = evaluateTree(root->right);

        
        if (root->val == 2) {
            return left || right;
        }

        return left && right;
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Recursive Depth-First Search (DFS) / Post-order traversal.
*   **Optimality:** Optimal. The problem requires evaluating a full binary tree where internal nodes represent boolean operations (`OR` for 2, `AND` for 3) and leaf nodes represent boolean values (0 for False, 1 for True). This approach visits each node exactly once, which is the theoretical lower bound for tree traversal.

## Complexity
*   **Time Complexity:** $O(N)$, where $N$ is the number of nodes in the binary tree, as every node is visited exactly once.
*   **Space Complexity:** $O(H)$, where $H$ is the height of the tree, representing the recursion stack depth. In the worst case (skewed tree), this is $O(N)$.

## Efficiency Feedback
*   The implementation is highly efficient. No unnecessary allocations or redundant checks are performed.
*   The use of recursion is appropriate given the constraint typically associated with tree problems.

## Code Quality
*   **Readability:** Good. The logic is concise and follows standard tree traversal patterns.
*   **Structure:** Good. The base case (leaf node) is handled correctly, followed by the recursive steps and logical evaluation.
*   **Naming:** Good. `evaluateTree`, `root`, `left`, and `right` are standard and descriptive.
*   **Concrete Improvements:**
    *   **Safety:** While the current problem constraints usually guarantee a valid tree, adding an `if (!root) return false;` check at the start would make the code more robust against null pointers.
    *   **Short-circuiting:** For `root->val == 2` (OR), you could theoretically return `true` early if `left` is `true`. Similarly, for `root->val == 3` (AND), you could return `false` early if `left` is `false`. This would provide a minor optimization in average cases.
    *   **Discrepancy:** The provided code is for "Evaluate Boolean Binary Tree" (LeetCode 2331), not "Minimum Bishop Moves" as suggested by the prompt title. The logic correctly solves the boolean tree problem.

---

# Question Revision
### Revision Report: Minimum Bishop Moves

**Pattern:** Geometry / Parity Analysis

**Brute Force:** 
Simulate all possible bishop movements using Breadth-First Search (BFS) to explore the chessboard until the target is reached, treating the board as a graph where each cell is a node and valid diagonal moves are edges.

**Optimal Approach:**
*   **Logic:** A bishop on a chessboard can only move between cells of the same color. If the target cell is of a different color (calculated via $(r_1 + c_1) \pmod 2 \neq (r_2 + c_2) \pmod 2$), it is unreachable. Otherwise, the distance is either 0 (already there), 1 (on the same diagonal), or 2 (can reach any same-colored cell in two moves).
*   **Time Complexity:** $O(1)$
*   **Space Complexity:** $O(1)$

**The 'Aha' Moment:**
The chessboard is a bipartite graph where bishops are restricted to one set of nodes, meaning parity of the coordinates acts as a hard constraint on reachability.

**Summary:**
If a piece is constrained by grid parity, check for reachability via coordinate math before attempting any search algorithms.

---