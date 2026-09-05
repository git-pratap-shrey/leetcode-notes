---
title: "Diameter of Binary Tree"
slug: diameter-of-binary-tree
date: "2026-08-18"
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
 int ans=0;
 int findheight(TreeNode* root){
       if(root == NULL) return 0;
       int lh=findheight(root->left);
       int rh=findheight(root->right);
       ans=max(ans,rh+lh);
       return 1+max(lh,rh);
 }

    int diameterOfBinaryTree(TreeNode* root) {
        findheight(root);
        return ans;
    }
};
~~~

# Submission Review
## Approach
* **Technique:** Post-order traversal (recursive depth-first search).
* **Optimality:** Optimal. The solution calculates the height and updates the diameter in a single pass ($O(N)$), which is the theoretical lower bound for visiting every node in the tree.

## Complexity
* **Time Complexity:** $O(N)$, where $N$ is the number of nodes in the tree, as each node is visited exactly once.
* **Space Complexity:** $O(H)$, where $H$ is the height of the tree, representing the recursion stack depth. In the worst case (skewed tree), this is $O(N)$; in a balanced tree, $O(\log N)$.

## Efficiency Feedback
* The efficiency is excellent. It avoids redundant height calculations by returning the height up the call stack while updating the global `ans` variable.
* No further algorithmic optimizations are possible.

## Code Quality
* **Readability:** Good. The logic is concise and follows standard patterns for tree-based recursive problems.
* **Structure:** Moderate. The `ans` variable is a member variable, which is acceptable here, but encapsulating it inside a helper function or using a reference-passed variable would be cleaner in a larger system.
* **Naming:** Moderate. `findheight` is descriptive, but the logic actually calculates the "depth" (number of edges). `lh` and `rh` are standard abbreviations, though `leftHeight` and `rightHeight` would improve clarity.

### Concrete Improvements
1. **Encapsulation:** Consider passing a reference to `ans` into `findheight` to avoid reliance on a class member variable, making the function stateless and easier to unit test.
2. **Const Correctness:** Since `findheight` does not modify the tree structure, it could theoretically be marked as a `const` member function if it were not modifying `ans`.
3. **Consistency:** Rename `findheight` to `calculateDiameter` or `getHeight` to better reflect the dual-purpose nature of the recursion.

```cpp
// Refactored for better encapsulation
class Solution {
public:
    int diameterOfBinaryTree(TreeNode* root) {
        int maxDiameter = 0;
        getHeight(root, maxDiameter);
        return maxDiameter;
    }

private:
    int getHeight(TreeNode* node, int& maxDiameter) {
        if (!node) return 0;
        int lh = getHeight(node->left, maxDiameter);
        int rh = getHeight(node->right, maxDiameter);
        maxDiameter = std::max(maxDiameter, lh + rh);
        return 1 + std::max(lh, rh);
    }
};
```

---

# Question Revision
### Revision Report: Diameter of Binary Tree

**Pattern:** Post-order Traversal (Bottom-up Recursion)

**Brute Force:**
For every node, calculate the height of its left and right subtrees to find the path length passing through that node. Perform this for all $n$ nodes.
*   **Complexity:** $O(n^2)$ time, $O(h)$ space (where $h$ is tree height).

**Optimal Approach:**
Traverse the tree once using DFS. For each node, return its height (max depth) to the parent while simultaneously updating a global `max_diameter` variable by adding the heights of the left and right children.
*   **Time Complexity:** $O(n)$
*   **Space Complexity:** $O(h)$ (recursion stack)

**The 'Aha' Moment:**
The diameter at any node is independent of its parent, meaning the calculation relies entirely on information gathered from the children's subtrees.

**Summary:** 
Always treat tree diameter as a path calculation where the longest path through a node is simply `left_height + right_height`.

---