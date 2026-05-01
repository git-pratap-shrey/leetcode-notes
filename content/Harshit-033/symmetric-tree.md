---
title: "Symmetric Tree"
slug: symmetric-tree
date: "2026-04-25"
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

    bool isSymmetric(TreeNode* root) {
        queue<TreeNode*> q;
        q.push(root);
        q.push(root);

        while(!q.empty()){
            TreeNode* t1 = q.front(); q.pop();
            TreeNode* t2 = q.front(); q.pop();

            if(!t1 && !t2) continue;
            if(!t1 || !t2) return false;
            if(t1->val != t2->val) return false;

            q.push(t1->left);
            q.push(t2->right);
            q.push(t1->right);
            q.push(t2->left);
        }
        return true;
    }
    
};
~~~

# Submission Review
## Approach
- **Technique**: Iterative Breadth-First Search (BFS) using a queue to perform a simultaneous mirror traversal of the left and right subtrees.
- **Optimality**: Optimal. Every node is visited exactly once, and the mirror condition is checked at each step.

## Complexity
- **Time Complexity**: $O(N)$, where $N$ is the number of nodes in the tree.
- **Space Complexity**: $O(N)$. In the worst case (a complete binary tree), the queue will hold proportional to the width of the tree, which is $O(N)$.

## Efficiency Feedback
- **Runtime**: Efficient. The use of a queue avoids the overhead of recursion (stack frames) while maintaining linear time complexity.
- **Memory**: Standard for BFS. No unnecessary allocations are made.

## Code Quality
- **Readability**: Good. The logic is straightforward and follows the standard mirror-check pattern.
- **Structure**: Good. The loop handles null checks and value comparisons cleanly.
- **Naming**: Moderate. `t1` and `t2` are generic; more descriptive names like `leftNode` and `rightNode` would improve clarity.
- **Improvements**: 
    - Initializing the queue with `root` twice is a clever way to avoid a separate helper function, though technically `root` is always symmetric with itself.
    - The logic is robust against empty trees (if `root` is `nullptr`, the queue pops two `nullptr` values and returns `true` immediately).

---

# Question Revision
### Symmetric Tree

**Pattern:** Recursive Tree Traversal (DFS)

**Brute Force:** Serialize the tree into two lists (one left-to-right and one right-to-left, including nulls) and compare the lists for equality.

**Optimal Approach:** 
Implement a helper function `isMirror(node1, node2)` that checks three conditions:
1. Both nodes are `null` (symmetric).
2. Only one node is `null` or their values differ (not symmetric).
3. Recursively verify that `node1.left` mirrors `node2.right` AND `node1.right` mirrors `node2.left`.

- **Time Complexity:** $O(n)$
- **Space Complexity:** $O(h)$ (where $h$ is tree height)

**The 'Aha' Moment:** Symmetry isn't about comparing two identical trees, but about comparing the outer edges and inner edges of the subtrees simultaneously.

**Summary:** A tree is symmetric if the left subtree is a mirror reflection of the right subtree.

---