---
title: "Search in a Binary Search Tree"
slug: search-in-a-binary-search-tree
date: "2026-04-06"

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
    
    TreeNode* search(TreeNode* root, int val){
        if (root==NULL) return NULL;
        if (root->val==val) return root;
        else {
            if (root->val>val) {
                return search(root->left,val);
            }
            else return search(root->right,val);
        }
        return NULL;
        
    }
    TreeNode* searchBST(TreeNode* root, int val) {
        
        TreeNode* base = search(root,val);
        return base;

    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Recursive Tree Traversal (Binary Search Tree property).
*   **Optimal:** Yes. It utilizes the BST property to prune the search space by half at each step.

## Complexity
*   **Time Complexity:** $O(H)$, where $H$ is the height of the tree. In the worst case (skewed tree), this is $O(N)$.
*   **Space Complexity:** $O(H)$ due to the recursion stack.

## Efficiency Feedback
*   The solution is efficient for the given problem constraints.
*   **Improvement:** The recursion can be replaced with a simple `while` loop to achieve $O(1)$ auxiliary space complexity, avoiding the overhead of the call stack.

## Code Quality
*   **Readability:** Good. The logic is straightforward and easy to follow.
*   **Structure:** Moderate. The `search` helper function is redundant; the logic could be implemented directly within `searchBST` to simplify the interface.
*   **Naming:** Good. `search` and `searchBST` are descriptive.
*   **Concrete Improvements:**
    *   **Remove Redundancy:** The final `return NULL;` in the `search` function is unreachable code; it should be removed.
    *   **Consolidate:** Merge the `search` helper into `searchBST`.
    *   **Iterative Refactor:**
        ```cpp
        TreeNode* searchBST(TreeNode* root, int val) {
            while (root != nullptr && root->val != val) {
                root = (val < root->val) ? root->left : root->right;
            }
            return root;
        }
        ```

---
---


# Question Revision
### Revision Report: Search in a Binary Search Tree

**Pattern:** Binary Search Tree (BST) Properties / Divide and Conquer

**Brute Force:**
Perform a full traversal (In-order, Pre-order, or BFS) of the entire tree to check every node for the target value.
*   **Time Complexity:** $O(n)$
*   **Space Complexity:** $O(h)$ (recursion stack) or $O(n)$ (queue for BFS)

**Optimal Approach:**
Leverage the BST invariant: for any node, left children are smaller and right children are larger. Compare the target with the current node value and discard the side that cannot contain the target, effectively pruning the search space.
*   **Time Complexity:** $O(h)$ (where $h$ is the height; $O(\log n)$ for balanced trees, $O(n)$ for skewed trees).
*   **Space Complexity:** $O(h)$ for recursive implementation; $O(1)$ for iterative.

**The 'Aha' Moment:**
The sorted property of the BST dictates that at every node, I have a binary decision to move either left or right, which naturally mirrors the logic of binary search.

**Summary:**
Always use the BST's directional structure to prune the search space by half at every step, turning a linear search into a logarithmic descent.

---
