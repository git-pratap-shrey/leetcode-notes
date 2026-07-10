--- title: "Binary Tree Preorder Traversal" slug: binary-tree-preorder-traversal date: "2026-06-30" ---  # My Solution ~~~/**
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
    vector<int> preorderTraversal(TreeNode* root) {
        vector<int>res;
        fun(root,res);
        return res;
    }
    void fun(TreeNode*node , vector<int>&res){
        if(node==NULL){
            return;
        }
        res.push_back(node->val);
        fun(node->left,res);
        fun(node->right,res);
        return;
    }
}; - cpp~~~  # Submission Review ## Approach
- **Technique:** Recursive Depth-First Search (DFS).
- **Optimality:** Optimal. Preorder traversal requires visiting every node exactly once, and recursion is the standard way to implement this.

## Complexity
- **Time Complexity:** $O(N)$, where $N$ is the number of nodes in the tree. Each node is visited once.
- **Space Complexity:** $O(H)$, where $H$ is the height of the tree, due to the recursion stack. In the worst case (skewed tree), this is $O(N)$.

## Efficiency Feedback
- The use of a reference `vector<int>& res` prevents unnecessary copying of the result vector across recursive calls, keeping memory overhead low.
- No significant bottlenecks present.

## Code Quality
- **Readability:** Moderate. The logic is clear, but the helper function name is non-descriptive.
- **Structure:** Good. Separates the public interface from the recursive implementation.
- **Naming:** Poor. `fun` is a generic name that does not describe the function's purpose (e.g., `traverse` or `preorder` would be better).
- **Improvements:** 
    - Rename `fun` to `traverse` or `dfs`.
    - Use `nullptr` instead of `NULL` for consistency with modern C++ standards.  ---  # Question Revision ### Binary Tree Preorder Traversal

**Pattern:** Tree Traversal (DFS)

**Brute Force:** 
Recursive DFS: Visit the current node, recursively call the function on the left child, then recursively call it on the right child.

**Optimal Approach:**
Iterative DFS using an explicit stack to mimic the call stack.
1. Push the root node onto the stack.
2. While the stack is not empty:
    - Pop the top node and add it to the result list.
    - Push the **right** child first, then the **left** child (this ensures the left child is processed first due to LIFO).

- **Time Complexity:** $O(n)$
- **Space Complexity:** $O(n)$

**The 'Aha' Moment:** 
The requirement to visit the root before its children explicitly defines a Preorder DFS sequence.

**Summary:** 
Process the root, then dive left, then right; use a stack and push right-then-left to maintain this order iteratively.  ---