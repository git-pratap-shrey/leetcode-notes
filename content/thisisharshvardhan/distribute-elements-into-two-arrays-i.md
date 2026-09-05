---
title: "Distribute Elements Into Two Arrays I"
slug: distribute-elements-into-two-arrays-i
date: "2026-08-20"
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
    int height(TreeNode* root,int &d) {
        if(root==NULL){return 0;}
        int left=height(root->left,d);
        int right=height(root->right,d);
        d=max(d,left+right);
        return 1+max(left,right);
    }
    int diameterOfBinaryTree(TreeNode* root) {
        int d=0;
        height(root,d);
        return d;
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Depth-First Search (DFS) / Post-order traversal.
*   **Optimality:** Optimal. This is the standard linear-time approach to calculate the diameter of a binary tree by computing the height of subtrees and updating the maximum path passing through the current node.
*   **Note:** The provided code calculates the **Diameter of a Binary Tree**, despite the user-provided prompt title "Distribute Elements Into Two Arrays I". The implementation correctly matches the logic for diameter calculation.

## Complexity
*   **Time Complexity:** $O(N)$, where $N$ is the number of nodes in the tree. Every node is visited exactly once.
*   **Space Complexity:** $O(H)$, where $H$ is the height of the tree, representing the recursion stack depth. In the worst case (skewed tree), this is $O(N)$.

## Efficiency Feedback
*   The implementation is highly efficient. It avoids redundant calculations (like calling `height()` separately for each node) by returning the height while updating the global diameter `d` by reference.
*   The memory overhead is minimal, limited only by the stack usage.

## Code Quality
*   **Readability:** Good. The logic is concise and follows standard patterns for tree-based recursive problems.
*   **Structure:** Good. The helper function `height` cleanly separates the recursion logic from the public interface.
*   **Naming:** Moderate. While `d` is functional, naming it `maxDiameter` would improve clarity. The definition of the `TreeNode` structure is provided in the header but is unused by the actual logic (as it is standard LeetCode boilerplate), which is acceptable.
*   **Concrete Improvements:** 
    *   Change `int &d` to `int &maxDiameter` for better readability.
    *   The `height` function could be marked `private` to encapsulate the helper logic.
    *   The redundant `TreeNode` boilerplate provided in the comment is unrelated to the solution logic; it can be removed for cleaner submission files.

---

# Question Revision
### Revision Report: Distribute Elements Into Two Arrays I

**Pattern:** Simulation / Array Partitioning

**Brute Force:** Create two empty lists, iterate through the input array, and use a conditional check on the current index or the last element added to decide where to push the current element. Finally, concatenate the two lists.
*   **Time Complexity:** $O(n)$
*   **Space Complexity:** $O(n)$

**Optimal Approach:** Use two dedicated lists (e.g., `arr1` and `arr2`) and append the first element to `arr1` and the second to `arr2`. For subsequent elements, compare the last elements of both lists using the `[-1]` index to determine the destination.
*   **Time Complexity:** $O(n)$
*   **Space Complexity:** $O(n)$

**The 'Aha' Moment:** The problem explicitly dictates the distribution rule based on the state of the *most recently added* elements, signaling that you only need to track the tail of each list rather than the entire history.

**Summary:** When the placement rule depends on the last modified state, maintain pointers or references to the "tails" of your output structures.

---