---
title: "Remove Nth Node From End of List"
slug: remove-nth-node-from-end-of-list
date: "2026-10-03"
---

# My Solution
~~~cpp
/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode(int x) : val(x), left(NULL), right(NULL) {}
 * };
 */
class Solution {
public:
    TreeNode* lowestCommonAncestor(TreeNode* root, TreeNode* p, TreeNode* q) {
        if(root==NULL)
        return NULL;
        if(root == p || root == q)
            return root;
            TreeNode* left = lowestCommonAncestor(root->left, p, q);
            TreeNode* right = lowestCommonAncestor(root->right, p, q);
            if(left != NULL && right != NULL)
            return root;
            if(left != NULL)
            return left;

            return right;
    }
};
~~~

# Submission Review
## Approach
- **Technique:** Recursive Depth-First Search (DFS).
- **Correctness:** The code solves the **Lowest Common Ancestor (LCA) of a Binary Tree** problem, **NOT** the "Remove Nth Node From End of List" problem specified in the prompt.
- **Optimality:** Optimal for the LCA problem as it visits each node once.

## Complexity
- **Time Complexity:** $O(N)$, where $N$ is the number of nodes in the tree.
- **Space Complexity:** $O(H)$, where $H$ is the height of the tree (recursion stack).

## Efficiency Feedback
- The runtime and memory usage are optimal for this specific algorithm. No further optimizations are required for the LCA logic.

## Code Quality
- **Readability:** Poor. The code is completely unrelated to the requested problem ("Remove Nth Node From End of List"), making it contextually incorrect.
- **Structure:** Moderate. The recursive logic is standard, but the indentation is inconsistent (specifically the `TreeNode* left` and `TreeNode* right` lines).
- **Naming:** Good. Variables `root`, `p`, `q`, `left`, and `right` are standard for this problem.
- **Concrete Improvements:**
    - **Correct the Problem:** The entire implementation must be replaced to address the linked list problem requested.
    - **Indentation:** Fix the indentation of the main recursive block to follow standard C++ conventions.
    - **Header/Comments:** The provided comment refers to a binary tree, which is correct for the code written but incorrect for the problem statement provided.

---

# Question Revision
# Revision Report: Remove Nth Node From End of List

- **Pattern:** Two Pointers (Fast & Slow)
- **Brute Force:** 
    1. Traverse the entire list to find the total length $L$.
    2. Calculate the target position $(L - n)$.
    3. Traverse the list a second time to reach the node immediately before the target and delete it.
- **Optimal Approach:**
    - Use a **dummy node** pointing to the head to handle edge cases (like removing the head itself).
    - Move a `fast` pointer $n$ steps ahead.
    - Move both `fast` and `slow` pointers one step at a time until `fast` reaches the end.
    - The `slow` pointer will now be positioned exactly before the node to be deleted.
    - **Complexity:** 
        - Time: $O(n)$ — Single pass through the list.
        - Space: $O(1)$ — Only two pointers used.
- **The 'Aha' Moment:** Whenever a problem asks for a position relative to the **end** of a linked list, use two pointers with a fixed gap to avoid calculating the total length.
- **Summary:** Maintain a gap of $n$ between two pointers to locate the $(n+1)$-th node from the end in one pass.

---