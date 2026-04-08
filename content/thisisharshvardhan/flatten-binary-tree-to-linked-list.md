---
title: "Flatten Binary Tree to Linked List"
slug: flatten-binary-tree-to-linked-list
date: "2026-04-08"

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
    void solve(TreeNode* root, TreeNode* &head, TreeNode* & tail){
        if (!root) return ;

        if (tail){
            tail->right=root;
            tail->left=NULL;
            tail=root;
        }
        else {
            head=root;
            tail=root;
        }

        TreeNode* left = root->left;
        TreeNode* right= root->right;

        solve(left,head,tail);
        solve(right,head,tail);

    }
    void flatten(TreeNode* root) {
        TreeNode* head=NULL;
        TreeNode* tail=NULL;
        solve(root,head,tail);
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Pre-order traversal using recursion with external pointers to track the "tail" of the linked list being constructed.
*   **Optimality:** Suboptimal. While it achieves the correct transformation, it uses auxiliary recursion (stack space) and modifies the tree in a way that ignores the Morris Traversal approach, which can solve this problem in $O(1)$ space.

## Complexity
*   **Time Complexity:** $O(N)$, where $N$ is the number of nodes, as every node is visited exactly once.
*   **Space Complexity:** $O(H)$, where $H$ is the height of the tree, due to the recursion stack.

## Efficiency Feedback
*   **Bottleneck:** The current implementation stores pointers in the `tail` and `head` variables while recursing. This is logically functional but unnecessary for a simple in-place flattening.
*   **Optimization:** You can eliminate the `head` and `tail` pointers entirely by using a post-order (Reverse Post-order: Right-Left-Root) approach. By maintaining a global `prev` pointer, you can wire the nodes as you backtrack, achieving $O(1)$ extra space (excluding the recursion stack).

## Code Quality
*   **Readability:** Good. The code is clean and the intent is clear.
*   **Structure:** Moderate. The `solve` function is a helper, but the logic inside `solve` could be more streamlined.
*   **Naming:** Good. `head`, `tail`, and `root` are standard and descriptive.
*   **Concrete Improvements:**
    *   **Memory Safety:** Ensure `left` and `right` child pointers are explicitly set to `nullptr` during traversal (already partially handled by `tail->left = NULL`).
    *   **Simplification:** Instead of passing `head` and `tail` by reference, you could use a static or member variable `TreeNode* prev = nullptr` to track the last visited node in a Reverse Pre-order traversal. This would make the signature `void flatten(TreeNode* root)` sufficient without a helper function requiring multiple pointers.
    *   **Logic:** The `if (tail)` check is slightly redundant after the first node; initialization could be handled more cleanly.

---
---


# Question Revision
### Revision Report: Flatten Binary Tree to Linked List

**Pattern:** Tree Traversal / Morris Traversal (In-place Transformation)

**Brute Force:**
Store nodes in a list using pre-order traversal (DFS), then iterate through the list to rewire the `right` pointers to the next node and set `left` pointers to `null`.
*   **Time:** $O(n)$
*   **Space:** $O(n)$ (for the list)

**Optimal Approach:**
Use a modified pre-order traversal. For every node, find its **rightmost node in the left subtree** (the predecessor) and attach the original `right` subtree to it. Then, move the `left` subtree to the `right` and set `left` to `null`.
*   **Time:** $O(n)$ (Each edge is traversed at most twice)
*   **Space:** $O(1)$ (No stack or recursion, pointer manipulation only)

**The 'Aha' Moment:**
When the structure of a tree must be flattened into a specific order (like a linked list), the key is to identify the "predecessor" node that naturally precedes the current right subtree in the target order.

**Summary:**
To flatten a tree in $O(1)$ space, treat the left subtree as a bridge by connecting its rightmost leaf to the current node's original right child.

---
