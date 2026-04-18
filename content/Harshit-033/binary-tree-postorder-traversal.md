---
title: "Binary Tree Postorder Traversal"
slug: binary-tree-postorder-traversal
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
    vector<int> postorderTraversal(TreeNode* root) {
        if(root==NULL){
            return {};
        }

        postorderTraversal(root->left);
        
        postorderTraversal(root->right);
        ans.push_back(root->val);

        return ans;
        
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Recursive Depth-First Search (DFS).
- **Optimality**: Optimal in terms of time complexity, but the implementation is logically flawed regarding state management.

## Complexity
- **Time Complexity**: $O(N)$, where $N$ is the number of nodes in the tree, as each node is visited exactly once.
- **Space Complexity**: $O(H)$ for the recursion stack, where $H$ is the height of the tree, plus $O(N)$ to store the result.

## Efficiency Feedback
- **State Bug**: The `ans` vector is a member variable. In a competitive programming or judge environment, the same `Solution` instance is often reused for multiple test cases. Since `ans` is never cleared, results from previous test cases will persist, leading to incorrect answers.
- **Redundant Returns**: The function signature requires returning `vector<int>`, but the recursive calls `postorderTraversal(root->left)` and `postorderTraversal(root->right)` discard their return values, relying entirely on the side effect of modifying the member variable.

## Code Quality
- **Readability**: Moderate. The postorder logic (Left $\rightarrow$ Right $\rightarrow$ Root) is clear, but the mixing of return values and member state is confusing.
- **Structure**: Poor. The function attempts to be both a recursive helper and the primary API. 
- **Naming**: Poor. `ans` is too generic.
- **Concrete Improvements**:
    1. Create a private helper function: `void traverse(TreeNode* node, vector<int>& result)`.
    2. Pass the vector by reference to avoid member variable state issues and unnecessary vector copying.
    3. Ensure the main `postorderTraversal` function initializes the vector and returns it once.

---

# Question Revision
### Binary Tree Postorder Traversal

**Pattern:** Tree Traversal (DFS)

**Brute Force:** 
Recursive DFS: Visit left subtree, then right subtree, then the current root node.

**Optimal Approach:** 
Iterative approach using a stack. Since postorder is $\text{Left} \rightarrow \text{Right} \rightarrow \text{Root}$, it is the reverse of $\text{Root} \rightarrow \text{Right} \rightarrow \text{Left}$. Perform a modified preorder traversal (Root $\rightarrow$ Right $\rightarrow$ Left) and reverse the resulting list.
- **Time Complexity:** $O(n)$
- **Space Complexity:** $O(n)$

**The 'Aha' Moment:** 
Postorder is exactly the reverse of a preorder traversal where the right child is visited before the left.

**Summary:** 
Traverse in $\text{Root} \rightarrow \text{Right} \rightarrow \text{Left}$ order and reverse the result to achieve $\text{Left} \rightarrow \text{Right} \rightarrow \text{Root}$.

---