---
title: "Binary Tree Postorder Traversal"
slug: binary-tree-postorder-traversal
date: "2026-04-05"

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
    void postorder(TreeNode* root, vector<int>& ans){
        if (!root) return;

        postorder(root->left,ans);
        postorder(root->right,ans);
        ans.push_back(root->val);

    }
    vector<int> postorderTraversal(TreeNode* root) {
        vector<int> ans;
        postorder(root,ans);
        return ans;
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Recursive Depth-First Search (DFS).
*   **Optimality:** Optimal for a recursive implementation. It visits each node exactly once and follows the postorder (left-right-root) traversal sequence.

## Complexity
*   **Time Complexity:** $O(N)$, where $N$ is the number of nodes, as every node is visited once.
*   **Space Complexity:** $O(H)$, where $H$ is the height of the tree, representing the recursion stack depth (worst case $O(N)$ for a skewed tree, average $O(\log N)$ for a balanced tree).

## Efficiency Feedback
*   The approach is efficient. The use of a reference `vector<int>& ans` avoids unnecessary copying of vectors during the recursive calls, which is the correct practice.
*   No significant performance bottlenecks exist for the recursive approach.

## Code Quality
*   **Readability:** Good. The logic is standard, clean, and easy to follow.
*   **Structure:** Good. Separation of the helper function `postorder` from the entry point `postorderTraversal` is standard.
*   **Naming:** Good. The function names and variable names are intuitive.
*   **Improvements:**
    *   **Encapsulation:** You could make `postorder` a `private` method within the `Solution` class, as it is a helper function not intended to be called from outside.
    *   **Iteration (Alternative):** While recursion is readable, an iterative approach using a stack could be considered if the problem environment imposes strict limits on stack depth (to avoid stack overflow errors on extremely deep trees). However, for standard competitive programming constraints, this recursive solution is perfectly acceptable.

---
---


# Question Revision
### Revision Report: Binary Tree Postorder Traversal

**Pattern:** Depth-First Search (DFS) / Recursion & Iterative Stack

**Brute Force:**
Recursively traverse the tree, visit the left child, then the right child, and finally append the root value to the result list. This mirrors the standard definition of postorder traversal ($O(n)$ time, $O(h)$ space).

**Optimal Approach:**
*   **Recursive:** Simple base case (`if not root: return`) followed by recursive calls to `left`, `right`, and finally `root.val`.
*   **Iterative:** Use a stack to mimic recursion. Alternatively, perform a modified preorder traversal (Root -> Right -> Left) and **reverse the final result** to achieve the Left -> Right -> Root order efficiently.
*   **Complexity:** Time: $O(n)$, Space: $O(h)$ (where $h$ is tree height).

**The 'Aha' Moment:**
When an iterative postorder traversal feels complex due to managing "visited" states, recognize that reversing a modified "Root-Right-Left" preorder traversal yields the exact same sequence as "Left-Right-Root".

**Summary:**
Postorder is just a reversed preorder with the right subtree visited before the left.

---
