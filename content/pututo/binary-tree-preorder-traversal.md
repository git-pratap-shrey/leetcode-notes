--- title: "Binary Tree Preorder Traversal" slug: binary-tree-preorder-traversal date: "2026-07-10" ---  # My Solution ~~~/**
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
    void preorder(TreeNode* node, std::vector<int>& res) {
        if (node == nullptr) {
            return;
        }
        res.push_back(node->val);
        preorder(node->left, res);
        preorder(node->right, res);
    } 

    vector<int> preorderTraversal(TreeNode* root) {
        vector<int>res;
        preorder(root,res);
        return res;
    }
}; - cpp~~~  # Submission Review ## Approach
- **Technique**: Recursive Depth-First Search (DFS).
- **Optimality**: Optimal for a standard recursive implementation. While Morris Traversal could reduce auxiliary space to $O(1)$, recursion is the standard approach for this problem.

## Complexity
- **Time Complexity**: $O(N)$, where $N$ is the number of nodes in the tree. Each node is visited exactly once.
- **Space Complexity**: $O(N)$ in the worst case (a skewed tree) due to the recursion stack; $O(\log N)$ for a balanced tree.

## Efficiency Feedback
- The runtime is optimal. 
- Memory usage is dominated by the recursion stack and the output vector. No significant bottlenecks are present.

## Code Quality
- **Readability**: Good. The logic is straightforward and follows standard traversal patterns.
- **Structure**: Good. The use of a private helper function allows the main function to maintain the required signature while facilitating recursion.
- **Naming**: Moderate. `res` is generic; `result` or `traversal` would be more descriptive.
- **Concrete Improvements**:
    - **Const Correctness**: The `node` parameter in `preorder` should be `const TreeNode*` as the function does not modify the tree.
    - **Namespace Consistency**: The code mixes `std::vector` (in the helper) and `vector` (in the main function). It should be consistent (preferably using `std::` explicitly).
    - **Pass-by-reference**: Correctly uses a reference for the vector to avoid redundant copies.  ---  # Question Revision ### Binary Tree Preorder Traversal

**Pattern:** DFS (Depth-First Search) / Tree Traversal

**Brute Force:** 
Use recursion to visit the root, then recursively call the function on the left subtree and then the right subtree.

**Optimal Approach:** 
Use an explicit **Stack** to simulate the recursion. Push the root onto the stack; while the stack is not empty, pop the node, record its value, and push its **right** child followed by its **left** child (ensuring the left child is processed first due to LIFO).
- **Time Complexity:** $O(n)$
- **Space Complexity:** $O(n)$

**The 'Aha' Moment:** 
The term "Pre-order" explicitly dictates the sequence: Process $\rightarrow$ Left $\rightarrow$ Right.

**Summary:** 
Visit the root first, then exhaust the left branch before switching to the right.  ---