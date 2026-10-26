---
title: "Kth Smallest Element in a BST"
slug: kth-smallest-element-in-a-bst
date: "2026-10-24"
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
    bool isValidBST(TreeNode* root) {
        if(root==NULL)  return true;
        queue<tuple<TreeNode*,long long ,long long>>q;
        q.push({root,LLONG_MIN,LLONG_MAX});
        while(!q.empty()){
            auto [node,low,high]=q.front();
            q.pop();
            if(node->val<=low  || node->val>=high) return false;
            if(node->left){
                q.push({node->left,low,node->val});
            }
            if(node->right){
                q.push({node->right,node->val,high});
            }
        }
        return true;
    }
};
~~~

# Submission Review
## Approach
- **Technique:** The code implements a Breadth-First Search (BFS) using a queue to validate if a binary tree is a Binary Search Tree (BST) by maintaining valid ranges for each node.
- **Optimality:** **Incorrect.** The provided solution does not solve the problem "Kth Smallest Element in a BST." Instead, it solves "Validate Binary Search Tree." It fails to find or return the $k$-th smallest element.

## Complexity
- **Time Complexity:** $O(N)$, where $N$ is the number of nodes in the tree, as it visits every node once.
- **Space Complexity:** $O(W)$, where $W$ is the maximum width of the tree, to store nodes in the queue.

## Efficiency Feedback
- While the logic for BST validation is functionally correct for that specific problem, it is irrelevant to the requested task.
- To solve the actual problem (Kth Smallest Element), an in-order traversal (recursive or iterative) would be required to access elements in sorted order.

## Code Quality
- **Readability:** Moderate. The use of `std::tuple` and structured bindings `auto [node, low, high]` is modern C++17 and clear.
- **Structure:** Poor. The class method `isValidBST` does not match the expected signature or purpose for finding the $k$-th smallest element.
- **Naming:** Good. Variable names (`low`, `high`, `q`) are standard for this specific validation logic.
- **Concrete Improvements:**
    1. **Logic Alignment:** Replace the entire function logic. Implement an in-order traversal (Left $\rightarrow$ Root $\rightarrow$ Right) and maintain a counter to stop at the $k$-th element.
    2. **Signature:** Change the function name and parameters to match the problem requirements (e.g., `int kthSmallest(TreeNode* root, int k)`).

---

# Question Revision
# Revision Report: Kth Smallest Element in a BST

- **Pattern:** Tree Traversal (In-order)
- **Brute Force:** Perform any traversal (Pre-order/Post-order) to dump all node values into an array, sort the array, and return the element at index $k-1$.
- **Optimal Approach:** 
    - **Logic:** Perform an **In-order Traversal** (Left $\rightarrow$ Root $\rightarrow$ Right). Since an in-order traversal of a Binary Search Tree (BST) visits nodes in non-decreasing order, the $k$-th node visited is the $k$-th smallest element. Use a counter to stop the traversal immediately once the $k$-th element is reached to optimize performance.
    - **Time Complexity:** $O(H + k)$ where $H$ is the height of the tree.
    - **Space Complexity:** $O(H)$ to maintain the recursion stack.
- **The 'Aha' Moment:** Whenever a problem asks for the "k-th smallest/largest" or "sorted order" specifically in a **BST**, it is a direct signal to use **In-order Traversal**.
- **Summary:** An in-order traversal of a BST yields elements in sorted order; simply stop at the $k$-th visit.

---