---
title: "Insert into a Binary Search Tree"
slug: insert-into-a-binary-search-tree
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
    TreeNode* solve(TreeNode* root, int val){
        if (!root){
            TreeNode* root= new TreeNode(val);
            return root;
        }
        else {
            if (root->val > val ){
                root->left = solve (root->left, val);
            }
            else {
                root->right = solve (root->right,val);
            }
        }
        return root;
    }
    TreeNode* insertIntoBST(TreeNode* root, int val) {
        TreeNode* ans= solve(root,val);
        return ans;
    }
};
~~~

# Submission Review
## Approach
* **Technique:** Recursive Tree Traversal.
* **Optimality:** Optimal. It traverses down the tree based on BST properties, inserting the node at the correct leaf position in $O(H)$ time.

## Complexity
* **Time Complexity:** $O(H)$, where $H$ is the height of the tree ($O(\log N)$ on average, $O(N)$ in the worst case of a skewed tree).
* **Space Complexity:** $O(H)$ due to the recursion stack depth.

## Efficiency Feedback
* The implementation is efficient for this problem. 
* **Note:** While recursion is elegant and perfectly acceptable here, an iterative approach would reduce space complexity to $O(1)$ by avoiding the call stack.

## Code Quality
* **Readability:** Good. The logic is clear and follows standard BST insertion rules.
* **Structure:** Moderate. The `solve` helper method is redundant; the logic could easily be contained within `insertIntoBST` directly, simplifying the class.
* **Naming:** Moderate. The function name `solve` is generic; `insertRecursive` or simply performing the logic in the main function would be more descriptive.
* **Concrete Improvements:**
    * **Shadowing:** Inside the `if (!root)` block, you declare `TreeNode* root = new TreeNode(val);`. This creates a local variable that shadows the parameter `root`, though it works because you return it immediately. It is cleaner to just return `new TreeNode(val)`.
    * **Simplification:** You can merge the logic into the main function to eliminate the wrapper method.
    * **Example Refactor:**
    ```cpp
    TreeNode* insertIntoBST(TreeNode* root, int val) {
        if (!root) return new TreeNode(val);
        if (val < root->val) root->left = insertIntoBST(root->left, val);
        else root->right = insertIntoBST(root->right, val);
        return root;
    }
    ```

---
---


# Question Revision
### Revision Report: Insert into a Binary Search Tree

**Pattern:** Binary Search Tree (BST) Traversal / Recursion

**Brute Force:**
Convert the BST into a sorted array (in-order traversal), insert the new value while maintaining order, and reconstruct the tree from the sorted array. 
*   **Complexity:** Time $O(n)$, Space $O(n)$.

**Optimal Approach:**
Leverage the BST property ($left < root < right$) to perform a single-path descent. If the target value is smaller than the current node, move left; if larger, move right. Once a `null` child position is reached, create and attach the new node. 
*   **Complexity:** Time $O(h)$ where $h$ is tree height ($O(\log n)$ average, $O(n)$ worst-case), Space $O(h)$ for recursion stack or $O(1)$ if iterative.

**The 'Aha' Moment:**
The BST property acts as a built-in search filter, ensuring that at every node, you only ever need to commit to one subtree, eliminating the need to visit all nodes.

**Summary:**
Because a BST is inherently ordered, you can always find the correct insertion leaf node in $O(h)$ time by treating the tree like a sorted search path rather than a structure requiring a full traversal.

---
