---
title: "Delete Node in a BST"
slug: delete-node-in-a-bst
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
    int getMax(TreeNode* root){
        if (root==NULL) return -1;
        while(root->right!=NULL){
            root=root->right;
        }
        return root->val;
    }

    TreeNode* deleteNode(TreeNode* root, int key) {
        if (root==NULL) return NULL;

        if (root->val==key){
            if (root->left==NULL && root->right==NULL){
                TreeNode* temp=root;
                delete temp;
                return NULL;
            }
            if (root->left!=NULL && root->right==NULL){
                TreeNode* temp=root;
                TreeNode* child=root->left;
                temp->left=NULL;
                delete temp;
                return child;
            }
            if (root->left==NULL && root->right!=NULL){
                TreeNode* temp=root;
                TreeNode* child=root->right;
                temp->right=NULL;
                delete temp;
                return child;
            }
            if (root->left!=NULL && root->right!=NULL){
                int replace= getMax(root->left);
                root->val=replace;
                root->left= deleteNode(root->left,replace);
                return root;
            }

        }
        else {
            if (root->val>key){
                root->left=deleteNode(root->left,key);
            }
            else root->right=deleteNode(root->right,key);
        }
        return root;
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Recursive BST node deletion.
*   **Optimality:** Optimal. It correctly handles all three cases of deletion: leaf nodes, nodes with one child, and nodes with two children (by replacing the node value with the in-order predecessor).

## Complexity
*   **Time Complexity:** $O(h)$, where $h$ is the height of the tree. In the worst case (skewed tree), $O(n)$; in a balanced BST, $O(\log n)$.
*   **Space Complexity:** $O(h)$ due to the recursion stack.

## Efficiency Feedback
*   **Memory Management:** Explicitly calling `delete` is good practice in C++ to prevent memory leaks, though unnecessary in most competitive programming environments where the test harness cleans up memory.
*   **Redundancy:** The `getMax` function is fine, but it traverses from the current node. Since this is only called when both children exist, it correctly finds the predecessor.
*   **In-place modification:** The logic correctly updates pointers via return values, which is the idiomatic way to handle tree structural changes.

## Code Quality
*   **Readability:** Moderate. The nested `if` statements for the three deletion cases are verbose and repetitive.
*   **Structure:** Good. The logic correctly differentiates between searching for the key and performing the deletion.
*   **Naming:** Good. Function and variable names are descriptive.
*   **Concrete Improvements:**
    *   **Simplify Deletion Logic:** You can reduce the four `if` blocks for node deletion by treating the case with two children first, and then handling the remaining cases (zero or one child) as a single logic path (returning the non-null child or `nullptr`).
    *   **Modern C++:** Ensure that `NULL` is replaced with `nullptr` for better type safety.
    *   **Refactor `getMax`:** Instead of `int`, consider passing the node reference or returning the node directly to avoid potential issues if the tree contained values equal to `-1`.

### Refactored logic snippet:
```cpp
if (root->left && root->right) {
    int replace = getMax(root->left);
    root->val = replace;
    root->left = deleteNode(root->left, replace);
} else {
    TreeNode* temp = (root->left) ? root->left : root->right;
    delete root;
    return temp;
}
```
This reduces code duplication significantly.

---
---


# Question Revision
### Revision Report: Delete Node in a BST

**Pattern:** Binary Search Tree (BST) Recursion / Pointer Manipulation

**Brute Force:**
Search for the node using the BST property, store its parent, and then handle three distinct cases: deleting a leaf, deleting a node with one child (promote the child), or deleting a node with two children (find the inorder successor or predecessor to replace the target).

**Optimal Approach:**
Use recursion to find the target node. Once found:
1. **Leaf:** Return `null`.
2. **One Child:** Return the non-null child.
3. **Two Children:** Find the minimum node in the right subtree (inorder successor), swap values (or replace the node), and recursively delete that successor node from the right subtree.

*   **Time Complexity:** $O(h)$, where $h$ is the tree height ($O(\log n)$ balanced, $O(n)$ skewed).
*   **Space Complexity:** $O(h)$ for the recursion stack.

**The 'Aha' Moment:**
The requirement to preserve the BST property (Left < Node < Right) means the only valid replacements for a node with two children are the immediate inorder successor or predecessor.

**Summary:**
Deleting from a BST is just a recursive search that re-links pointers or performs a value swap with the inorder successor when two children exist.

---
