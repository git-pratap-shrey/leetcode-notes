--- title: "Same Tree" slug: same-tree date: "2026-06-22" ---  # My Solution ~~~/**
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
    bool isSameTree(TreeNode* p, TreeNode* q) {

        if(p == NULL && q == NULL) {
            return true;
        }

        if(p == NULL || q == NULL) {
            return false;
        }

        if(p->val != q->val) {
            return false;
        }

        return isSameTree(p->left, q->left) &&
               isSameTree(p->right, q->right);
    }
}; - cpp~~~  # Submission Review ## Approach
- **Technique**: Recursive Depth-First Search (DFS).
- **Optimality**: Optimal. To verify if two trees are identical, every node must be visited at least once in the worst case.

## Complexity
- **Time Complexity**: $O(N)$, where $N$ is the number of nodes in the smaller tree.
- **Space Complexity**: $O(H)$, where $H$ is the height of the tree, representing the maximum depth of the recursion stack. In the worst case (skewed tree), this is $O(N)$.

## Efficiency Feedback
- **Runtime**: High efficiency due to short-circuit evaluation of the `&&` operator; the function returns `false` immediately upon the first mismatch.
- **Memory**: Minimal overhead as no auxiliary data structures are used.

## Code Quality
- **Readability**: Good. The logic is clean and follows a logical progression of base cases.
- **Structure**: Good. Handles null checks and value comparisons before recursing.
- **Naming**: Moderate. `p` and `q` are acceptable in a competitive programming context, though `root1` and `root2` would be more descriptive.
- **Improvements**:
    - Replace `NULL` with `nullptr` to adhere to modern C++ (C++11 and later) standards.  ---  # Question Revision ### Same Tree

**Pattern:** Recursion / Depth-First Search (DFS)

**Brute Force:** Serialize both trees into arrays (using preorder or level-order traversal) and compare the resulting arrays for equality.

**Optimal Approach:** 
Perform a simultaneous recursive traversal of both trees. At each step:
1. If both nodes are `null`, they are identical.
2. If only one node is `null` or the values differ, they are not identical.
3. Recurse on both left and right children; return `true` only if both recursive calls return `true`.

- **Time Complexity:** $O(n)$ where $n$ is the number of nodes in the smaller tree.
- **Space Complexity:** $O(h)$ where $h$ is the height of the tree (recursion stack).

**The 'Aha' Moment:** Because a tree is a recursive data structure, the identity of the root depends entirely on the identical nature of its left and right subtrees.

**Summary:** Two trees are identical if their root values match and their corresponding left and right subtrees are also identical.  ---