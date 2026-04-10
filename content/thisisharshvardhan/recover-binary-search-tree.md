---
title: "Recover Binary Search Tree"
slug: recover-binary-search-tree
date: "2026-04-10"

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
    void update(TreeNode* root, vector<int> inorder, int &ind ){
        if (!root) return ;
        if (ind>inorder.size()-1) return;
        update(root->left,inorder,ind);
        root->val=inorder[ind];
        ind++;
        update(root->right,inorder,ind);
    }
    void solve(TreeNode* root, vector<int>& inorder){
        if (!root) return;
        solve(root->left,inorder);
        inorder.push_back(root->val);
        solve(root->right,inorder);
        
    }
    void recoverTree(TreeNode* root) {
        vector<int> inorder;
        solve(root,inorder);
        int prev=-1;
        int curr=-1;
        int count=0;
        for (int i=0;i<inorder.size()-1;i++){
            if (inorder[i]>inorder[i+1]) {
                count++;
                if (count==1) prev=i;
                else curr = i;
            }
        }
        if (count==2) swap(inorder[prev],inorder[curr+1]);
        else swap(inorder[prev],inorder[prev+1]);
        int ind=0;
        update(root,inorder,ind);

    }
};
~~~

# Submission Review
## Approach
*   **Technique:** In-order traversal to extract values, identifying the two swapped elements by detecting inversions in the sorted sequence, and performing a second in-order traversal to overwrite the tree nodes.
*   **Optimality:** Suboptimal. While correct, it uses $O(N)$ auxiliary space for the `vector` and performs two full tree traversals. The problem can be solved in $O(1)$ space using Morris Traversal.

## Complexity
*   **Time Complexity:** $O(N)$, where $N$ is the number of nodes. The solution traverses the tree twice.
*   **Space Complexity:** $O(N)$. The `inorder` vector stores all node values, and the recursion stack consumes $O(H)$ space ($H$ is tree height).

## Efficiency Feedback
*   **Bottleneck:** The storage and re-insertion of all node values are unnecessary. You can identify the two swapped nodes during a single traversal by keeping track of the `prev` node pointer and updating the `first` and `second` candidates directly.
*   **Redundancy:** The `update` function re-populates the entire tree, which is strictly slower than just swapping the values of the two identified `TreeNode*` pointers.

## Code Quality
*   **Readability:** Moderate. The logic is clear, but the variable naming is slightly confusing.
*   **Structure:** Moderate. The logic is split into sensible helper functions, but the main `recoverTree` function is doing too much processing.
*   **Naming:** Moderate. `solve` and `update` are generic; `collectNodes` and `restoreTree` would be more descriptive.
*   **Concrete Improvements:**
    *   **Direct Swap:** Instead of overwriting every node in the tree, find the two specific `TreeNode*` pointers that are incorrect and `std::swap` their `val` members.
    *   **Pointer Tracking:** Perform the in-order traversal once and track the "previous" node to identify inversions on the fly:
        ```cpp
        if (prev && prev->val > curr->val) {
            if (!first) first = prev;
            second = curr;
        }
        prev = curr;
        ```
    *   **Memory Efficiency:** Avoid the `vector<int>` entirely to reduce space complexity to $O(H)$.

---
---


# Question Revision
### Revision Report: Recover Binary Search Tree

**Pattern:** Morris Traversal / In-order Traversal

**Brute Force:** Collect all node values into an array, sort the array, and perform a second pass to reassign values to nodes based on their original positions.
*   **Time:** $O(n \log n)$
*   **Space:** $O(n)$

**Optimal Approach:** Perform an in-order traversal (using Morris Traversal to save space). In a BST, an in-order sequence should be strictly increasing. Identify the two nodes that violate this order (where `prev.val > current.val`) and swap them.
*   **Time:** $O(n)$
*   **Space:** $O(1)$ (using Morris Traversal) or $O(h)$ (using recursion stack)

**The 'Aha' Moment:** The realization that an in-order traversal of a BST is essentially a sorted array, meaning any swapped nodes will manifest as a local "dip" or violation of the monotonic sequence.

**Summary:** Treat a BST as a sorted list; identify the two out-of-order elements by tracking a `previous` pointer during an in-order traversal.

---
