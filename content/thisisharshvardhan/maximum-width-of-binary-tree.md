---
title: "Maximum Width of Binary Tree"
slug: maximum-width-of-binary-tree
date: "2026-10-23"
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

    bool isSame(TreeNode* p, TreeNode* q){
        if(!p && !q) return true;
        if(!p || !q)return false;
        if(p->val!=q->val)return false;
        return isSame(p->left,q->left)&&isSame(p->right,q->right);
    }
    bool isSubtree(TreeNode* root, TreeNode* subRoot) {
        if(!root)return false;
        if(isSame(root,subRoot))return true;
        return isSubtree(root->left,subRoot)||isSubtree(root->right,subRoot);
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Recursive Depth-First Search (DFS) used to check for subtree isomorphism.
- **Optimality**: **Incorrect**. The provided code implements a solution for "Subtree of Another Tree," **not** "Maximum Width of Binary Tree." It does not calculate width, track levels, or handle indices.

## Complexity
- **Time Complexity**: $O(N \times M)$, where $N$ is the number of nodes in the root tree and $M$ is the number of nodes in the sub-root tree.
- **Space Complexity**: $O(\max(H_N, H_M))$ due to the recursion stack, where $H$ is the height of the trees.

## Efficiency Feedback
- The code is efficient for the "Subtree" problem it actually solves, but since it solves the **wrong problem**, the efficiency relative to "Maximum Width of Binary Tree" is irrelevant.
- To solve "Maximum Width," the solution would require a Level Order Traversal (BFS) using a queue to store nodes along with their heap-based indices.

## Code Quality
- **Readability**: Good. The logic for the subtree problem is clear and concise.
- **Structure**: Good. The separation of the equality check (`isSame`) from the traversal (`isSubtree`) is a standard pattern.
- **Naming**: Good. Variable names `p`, `q`, `root`, and `subRoot` are intuitive for this specific logic.
- **Concrete Improvements**:
    - **Critical**: The entire logic must be replaced. The current code is a complete mismatch for the requested problem.
    - If this were for the subtree problem, adding a check to ensure the root of the subtree exists before calling `isSame` could slightly prune unnecessary calls.

---

# Question Revision
# Revision Report: Maximum Width of Binary Tree

- **Pattern:** Breadth-First Search (BFS) / Level-Order Traversal with Heap-Indexing.
- **Brute Force:** Use standard BFS to traverse each level, but attempt to count nodes by checking for null gaps between the leftmost and rightmost nodes. This is inefficient as it doesn't provide a mathematical way to calculate "width" across null children.
- **Optimal Approach:** 
    - Assign a unique index to every node based on its position in a complete binary tree: if a parent is at index $i$, the left child is at $2i$ and the right child is at $2i + 1$.
    - Perform a BFS level-by-level. For each level, record the index of the first node and the last node.
    - The width of the level is calculated as: $\text{last\_index} - \text{first\_index} + 1$.
    - **Time Complexity:** $O(n)$ to visit every node once.
    - **Space Complexity:** $O(n)$ to store the queue for the widest level.
- **The 'Aha' Moment:** The requirement to count "null nodes between endpoints" suggests treating the tree as an array-based heap where position is determined by a formula rather than physical existence.
- **Summary:** Use heap-indexing ($2i, 2i+1$) during BFS to calculate width as the difference between the first and last indices of each level.

---