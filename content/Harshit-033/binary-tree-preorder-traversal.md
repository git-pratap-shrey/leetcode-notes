---
title: "Binary Tree Preorder Traversal"
slug: binary-tree-preorder-traversal
date: "2026-04-18"
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
    vector<int> ans;
    vector<int> preorderTraversal(TreeNode* root) {
        if(root==NULL) return {};


        

        ans.push_back(root->val);
        preorderTraversal(root->left);
        preorderTraversal(root->right);

        return ans;

        
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Recursive Depth-First Search (DFS).
- **Optimality**: Suboptimal. While the traversal logic is $O(N)$, the implementation contains a critical architectural flaw regarding how the result is collected and returned.

## Complexity
- **Time Complexity**: $O(N)$ where $N$ is the number of nodes. Each node is visited once.
- **Space Complexity**: $O(N)$. $O(N)$ for the result vector and $O(H)$ for the recursion stack (where $H$ is tree height).

## Efficiency Feedback
- **Performance Bottleneck**: The function signature returns `vector<int>` by value. In the recursive calls `preorderTraversal(root->left)` and `preorderTraversal(root->right)`, a new vector is constructed and returned at every single node, only to be immediately discarded. This creates significant unnecessary memory allocation and copying overhead.
- **State Bug**: Using a member variable `ans` without clearing it inside the main function makes the code stateful. If the `Solution` object is reused across multiple test cases (common in judge environments), `ans` will accumulate values from previous trees, leading to incorrect results.

## Code Quality
- **Readability**: Moderate. The core logic is simple, but the intent is confused between a recursive helper and a main wrapper.
- **Structure**: Poor. 
    - It mixes side-effect modification (`ans.push_back`) with a return value.
    - It fails to use a private helper function to handle the recursion, which is the standard pattern for this problem.
- **Naming**: Moderate. `ans` is a common shorthand but `result` or `traversal` would be more descriptive.

**Concrete Improvements**:
1. Define a private helper function `void traverse(TreeNode* node, vector<int>& result)` to handle recursion via reference.
2. Initialize the vector inside the public `preorderTraversal` function to ensure a fresh state for every call.
3. Return the final vector only once at the end of the public method.

---

# Question Revision
### Binary Tree Preorder Traversal

**Pattern:** Tree Traversal (DFS)

**Brute Force:** 
Recursive DFS: Visit the root, then recursively call the function on the left subtree, followed by the right subtree.

**Optimal Approach:** 
Iterative DFS using an explicit Stack. 
1. Push the root onto the stack.
2. While the stack is not empty: 
   - Pop the top node and add it to the result list.
   - Push the **right child** to the stack (so it's processed later).
   - Push the **left child** to the stack (so it's processed first).

- **Time Complexity:** $O(n)$
- **Space Complexity:** $O(h)$, where $h$ is the height of the tree.

**The 'Aha' Moment:** 
Because a stack is LIFO, pushing the right child before the left child ensures the left subtree is processed immediately after the root.

**Summary:** 
Preorder (Root $\rightarrow$ Left $\rightarrow$ Right) is achieved iteratively by using a stack and pushing children in reverse order (Right, then Left).

---