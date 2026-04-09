---
title: "Increasing Order Search Tree"
slug: increasing-order-search-tree
date: "2026-04-09"

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
    TreeNode* curr;
    void solve(TreeNode* root){
        if (!root) return;
        solve(root->left);

        root->left=NULL;
        curr->right=root;
        curr=root;

        solve(root->right);
    }
    TreeNode* increasingBST(TreeNode* root) {
        TreeNode* dummy=new TreeNode(-1);
        curr=dummy;
        solve(root);
        return dummy->right;
    }
};
~~~

# Submission Review
## Approach
- **Technique**: In-order tree traversal using a helper pointer (`curr`) to reconstruct the tree structure.
- **Optimality**: Optimal. It traverses each node exactly once and rearranges pointers in-place, achieving $O(N)$ time and $O(H)$ space.

## Complexity
- **Time Complexity**: $O(N)$, where $N$ is the number of nodes in the tree, as every node is visited exactly once.
- **Space Complexity**: $O(H)$, where $H$ is the height of the tree (due to the implicit recursion stack). In the worst case (skewed tree), this is $O(N)$.

## Efficiency Feedback
- The solution is highly efficient. It avoids storing node values in an intermediate array (which would consume $O(N)$ extra space), opting instead for pointer manipulation during the traversal. 
- Using a `dummy` node is a clean way to manage the head of the new list without extra conditional logic for the first node.

## Code Quality
- **Readability**: Good. The recursive logic is standard and easy to follow.
- **Structure**: Good. The use of a member variable `curr` simplifies the recursive state, though passing it by reference or using a lambda could be cleaner to avoid class-member pollution.
- **Naming**: Moderate. `solve` is generic; `inorder` or `rearrange` would be more descriptive.
- **Concrete Improvements**:
    - **Memory Safety**: You are using `new TreeNode(-1)` but never `delete` the dummy node. While typical in competitive programming environments, it is technically a memory leak.
    - **Encapsulation**: You can avoid the member variable `curr` by using a lambda with a reference capture:
      ```cpp
      TreeNode* increasingBST(TreeNode* root) {
          TreeNode dummy(-1);
          TreeNode* curr = &dummy;
          auto inorder = [&](auto self, TreeNode* node) -> void {
              if (!node) return;
              self(self, node->left);
              node->left = nullptr;
              curr->right = node;
              curr = node;
              self(self, node->right);
          };
          inorder(inorder, root);
          return dummy.right;
      }
      ```
    - This approach keeps the state local and avoids the need for a member variable.

---
---


# Question Revision
### Revision Report: Increasing Order Search Tree

**Pattern:** In-order Traversal (Tree Reconstruction)

**Brute Force:** 
Collect all node values in a list using an in-order traversal ($O(n)$ space), then iterate through the list to create a new linked-list-like structure by reassigning `right` pointers and setting `left` to `null`.

**Optimal Approach:** 
Perform an in-order traversal using a pointer (`prev`) to keep track of the previously processed node. As you visit each node, set `prev.right = curr`, `curr.left = null`, and update `prev = curr`.
*   **Time Complexity:** $O(n)$ (each node visited once).
*   **Space Complexity:** $O(h)$ (recursion stack depth, where $h$ is tree height).

**The 'Aha' Moment:** 
Whenever a tree problem requires reordering nodes into a specific sequence while maintaining their relative structure, an in-order traversal is the natural bridge between the original tree and the linear output.

**Summary:** 
Use a global or reference pointer during an in-order traversal to "thread" nodes together sequentially, effectively flattening the tree into a linked list in a single pass.

---
