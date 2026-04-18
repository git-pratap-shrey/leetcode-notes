---
title: "Binary Tree Inorder Traversal"
slug: binary-tree-inorder-traversal
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
    vector<int> inorderTraversal(TreeNode* root) {
        if(root==NULL){
            return {};
        }

        inorderTraversal(root->left);
        ans.push_back(root->val);
        inorderTraversal(root->right);

        return ans;
        
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Recursive Depth-First Search (DFS).
- **Optimality**: Suboptimal. While the traversal logic is correct, the implementation suffers from a critical state management flaw and inefficient return handling.

## Complexity
- **Time Complexity**: $O(N)$, where $N$ is the number of nodes in the tree. Each node is visited once.
- **Space Complexity**: $O(N)$. In the worst case (a skewed tree), the recursion stack reaches $O(N)$. The output vector also consumes $O(N)$.

## Efficiency Feedback
- **Redundant Returns**: The function returns `vector<int>` by value at every recursive step, but these returned vectors are discarded in the calls `inorderTraversal(root->left)` and `inorderTraversal(root->right)`. This creates unnecessary temporary objects.
- **State Leakage**: The use of a member variable `vector<int> ans` is dangerous. In competitive programming platforms, the same `Solution` instance may be reused across multiple test cases. Because `ans` is not cleared at the start of the function, results from previous test cases will persist, leading to incorrect answers.

## Code Quality
- **Readability**: Moderate. The logic is easy to follow, but the function signature is misleading.
- **Structure**: Poor. It conflates the public API (which should return the result) with the recursive helper (which should modify a reference/accumulator).
- **Naming**: Good. Variable names are standard for this problem.

**Concrete Improvements**:
1. **Separate Helper**: Create a private `void helper(TreeNode* node, vector<int>& result)` method to handle the recursion.
2. **Avoid Member State**: Pass the result vector by reference through the recursive calls or initialize it inside the public method to ensure a fresh state for every call.
3. **Base Case**: The `return {};` in the base case is misleading since the result is actually stored in the member variable.

---

# Question Revision
### Binary Tree Inorder Traversal

**Pattern:** DFS (Tree Traversal)

**Brute Force:** Recursive approach visiting the left child, processing the current node, and then visiting the right child.

**Optimal Approach:** 
Iterative traversal using an explicit stack to mimic the call stack. Traverse as far left as possible, pushing nodes onto the stack; once a null is hit, pop the node, record its value, and move to its right child.
- **Time Complexity:** $O(n)$
- **Space Complexity:** $O(h)$, where $h$ is the tree height.

**The 'Aha' Moment:** The requirement to visit nodes in a specific linear order (Left $\rightarrow$ Root $\rightarrow$ Right) indicates a Depth-First Search.

**Summary:** Traverse left, visit node, traverse right.

---