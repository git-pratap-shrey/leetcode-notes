---
title: "Count Dominant Nodes in a Binary Tree"
slug: count-dominant-nodes-in-a-binary-tree
date: "2026-07-19"
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
    int count=0;
    int dfs(TreeNode* root){
        if(root==NULL){
            return INT_MIN;
        }
        int x=dfs(root->left);
        int y=dfs(root->right);
        int maxi = max({root->val,x,y});
        if(root->val==maxi){
            count++;
        }
        return maxi;
    }
    int countDominantNodes(TreeNode* root) {
        count=0;
        dfs(root);
        return count;
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Post-order traversal (Depth-First Search).
*   **Optimality:** Optimal. The problem requires inspecting every node, and this approach visits each node exactly once while maintaining the running maximum of the subtree in a single pass.

## Complexity
*   **Time Complexity:** $O(N)$, where $N$ is the number of nodes in the binary tree, as each node is visited once.
*   **Space Complexity:** $O(H)$, where $H$ is the height of the tree, representing the recursion stack depth. In the worst case (skewed tree), this is $O(N)$.

## Efficiency Feedback
*   **Low Overhead:** The implementation is highly efficient. Using `std::max` with an initializer list is idiomatic and performant in modern C++.
*   **Optimization:** Returning `INT_MIN` for `NULL` nodes is safe provided the tree values are greater than `INT_MIN`. If the tree contains `INT_MIN` as a valid node value, this logic would fail. Consider using a flag or a `std::optional<int>` if the full range of `int` is possible.

## Code Quality
*   **Readability:** Good. The logic is straightforward and easy to follow.
*   **Structure:** Good. Using a member variable (`count`) avoids passing references or returning pairs, though it makes the class slightly less thread-safe.
*   **Naming:** 
    *   `dfs` is generic; `findMaxAndCount` would be more descriptive.
    *   `count` is a common variable name, but `dominantCount` would be clearer.
*   **Concrete Improvements:**
    *   **Encapsulation:** You can remove the member variable `count` by having the recursive function return a `std::pair<int, int>` (max value, count of dominant nodes). This makes the function pure and thread-safe.
    *   **Style:** Using `nullptr` is preferred over `NULL` in C++.
    *   **Safety:** Add a comment or assertion regarding the constraint on node values (specifically concerning `INT_MIN`).

---

# Question Revision
### Revision Report: Count Dominant Nodes in a Binary Tree

**Pattern:** Post-order Traversal (DFS with Attribute Propagation)

**Brute Force:**
For every node, traverse its entire subtree to find the maximum value and compare it against the current node's value. 
*   **Time Complexity:** $O(n^2)$ (or $O(n \log n)$ if balanced).
*   **Space Complexity:** $O(h)$ (recursion stack).

**Optimal Approach:**
Use a bottom-up post-order traversal. Each recursive call returns the maximum value found in the subtree rooted at the current node. Compare the current node’s value against the returned maximums of its children to decide if it is "dominant" (strictly greater than all children).
*   **Time Complexity:** $O(n)$ (each node is visited once).
*   **Space Complexity:** $O(h)$ (where $h$ is tree height).

**The 'Aha' Moment:**
When a node's property depends on the aggregated results of its children, always return the subtree's metadata (e.g., max value) up the call stack via a single post-order traversal.

**Summary:**
Whenever subtree-wide information is needed to evaluate a node, propagate the aggregate value upward during a post-order traversal to avoid redundant passes.

---