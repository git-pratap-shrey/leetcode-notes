---
title: "Check Completeness of a Binary Tree"
slug: check-completeness-of-a-binary-tree
date: "2026-04-09"

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
    bool isCompleteTree(TreeNode* root) {
        
        queue <TreeNode*> q;
        q.push(root);
        bool null=false;

        while(!q.empty()){
            TreeNode* front=q.front();
            q.pop();
            if (front==NULL){
                null=true;
            }
            else {
                if (null) return false;
                q.push(front->left);
                q.push(front->right);
            }
        }
        return true;
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Level-order traversal (BFS) using a queue.
*   **Optimality:** Optimal. A complete binary tree requires all nodes to be filled level by level from left to right; the BFS approach correctly identifies the "end" of the tree nodes and ensures no non-null nodes appear after the first null encounter.

## Complexity
*   **Time Complexity:** $O(N)$, where $N$ is the number of nodes in the tree, as each node is visited exactly once.
*   **Space Complexity:** $O(W)$, where $W$ is the maximum width of the tree, representing the space used by the queue.

## Efficiency Feedback
*   The implementation is highly efficient. It avoids storing unnecessary data or performing redundant passes.
*   **Note:** The queue may store `nullptr` values. For a tree with $N$ nodes, the queue size remains within reasonable bounds, making this memory-efficient for standard competitive programming constraints.

## Code Quality
*   **Readability:** Good. The logic is straightforward and easy to follow.
*   **Structure:** Good. The use of a flag (`null`) to mark the boundary of the tree's completion is idiomatic and clean.
*   **Naming:** Moderate. The variable name `null` is a reserved keyword in some contexts and can be confusing; consider using `foundNull` or `endReached`.
*   **Concrete Improvements:** 
    *   Rename the variable `null` to `endReached` to improve clarity and avoid potential collisions.
    *   The code is production-ready for its purpose. No functional changes are required.

---
---


# Question Revision
### Revision Report: Check Completeness of a Binary Tree

**Pattern:** Breadth-First Search (Level-Order Traversal)

**Brute Force:**
Store nodes in a list using level-order traversal, including `null` placeholders. Iterate through the list; if a `null` is encountered, all subsequent elements must also be `null`.

**Optimal Approach:**
Perform a level-order traversal using a queue. Push all nodes (including `null` children) into the queue. Once a `null` node is popped, verify that no further non-null nodes exist in the remaining queue.
*   **Time Complexity:** $O(n)$, where $n$ is the number of nodes.
*   **Space Complexity:** $O(w)$, where $w$ is the maximum width of the tree (at most $n/2$).

**The 'Aha' Moment:**
The requirement that a tree is complete if and only if there are no nodes after the first `null` encountered during level-order traversal turns a structural geometry problem into a simple sequence validation problem.

**Summary:**
A binary tree is complete if a level-order traversal shows no nodes after the first `null` encountered.

---
