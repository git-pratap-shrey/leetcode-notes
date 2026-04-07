---
title: "Kth Smallest Element in a BST"
slug: kth-smallest-element-in-a-bst
date: "2026-04-07"

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
    void solve(TreeNode* root, int k, int& count, int& ans){
        if (!root) return;

        solve(root->left,k,count,ans);
        count++;
        if(count==k) ans=root->val;
        solve(root->right,k,count,ans);

    }
    int kthSmallest(TreeNode* root, int k) {
        int count=0;
        int ans;
        solve(root,k,count,ans);
        return ans;
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** In-order Binary Tree Traversal (Recursive).
*   **Optimality:** Optimal. It visits nodes in sorted order, ensuring the $k$-th node visited is the result.

## Complexity
*   **Time Complexity:** $O(N)$ in the worst case (where $N$ is the number of nodes), as it may traverse the entire tree if $k=N$.
*   **Space Complexity:** $O(H)$, where $H$ is the height of the tree, due to the implicit recursion stack.

## Efficiency Feedback
*   **Bottleneck:** The current implementation always traverses the entire right subtree of the node where the $k$-th element is found, even after `ans` has been assigned.
*   **Optimization:** Add an early exit condition. Check if `count >= k` at the beginning of the `solve` function to prune unnecessary recursive calls.

## Code Quality
*   **Readability:** Good. The logic is standard and easy to follow.
*   **Structure:** Good. Using a helper function with references for state tracking is standard for this problem.
*   **Naming:** Moderate. `solve` is generic; `inorder` or `traverse` would be more descriptive.
*   **Concrete Improvements:**
    *   **Pruning:** Add `if (count >= k) return;` at the start of `solve`.
    *   **Pass by Value vs Reference:** The use of `int&` for `count` and `ans` is correct and efficient.
    *   **Const correctness:** If not modifying the tree, consider marking the root pointer as `const`.

```cpp
void solve(TreeNode* root, int k, int& count, int& ans) {
    if (!root || count >= k) return; // Added pruning

    solve(root->left, k, count, ans);
    
    count++;
    if (count == k) {
        ans = root->val;
        return;
    }
    
    solve(root->right, k, count, ans);
}
```

---
---


# Question Revision
### Revision Report: Kth Smallest Element in a BST

**Pattern:** Depth-First Search (In-order Traversal)

**Brute Force:** Collect all nodes into an array using any traversal (e.g., Level-order or Pre-order), sort the array, and return the element at index $k-1$.
*   **Time Complexity:** $O(n \log n)$ due to sorting.
*   **Space Complexity:** $O(n)$ to store all nodes.

**Optimal Approach:** Perform an **In-order Traversal** (Left -> Node -> Right). Because BST properties dictate that an in-order traversal visits nodes in ascending order, you simply maintain a counter and stop the traversal once the $k^{th}$ node is visited.
*   **Time Complexity:** $O(h + k)$, where $h$ is the tree height. In the worst case (skewed tree), this is $O(n)$.
*   **Space Complexity:** $O(h)$ for the recursion stack.

**The 'Aha' Moment:** The problem asks for the "$k^{th}$ smallest" in a structure where nodes are already partially ordered, signaling that an in-order traversal will naturally yield a sorted sequence without explicit sorting.

**Summary:** In-order traversal of a BST is an iterative walk through a sorted array, allowing you to stop the moment you reach the target rank.

---
