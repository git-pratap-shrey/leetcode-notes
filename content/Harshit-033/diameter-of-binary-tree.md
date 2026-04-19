---
title: "Diameter of Binary Tree"
slug: diameter-of-binary-tree
date: "2026-04-19"
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
    int dia=0;
    int diam(TreeNode* root){
        if(root==NULL) return 0;

        int left=1+diam(root->left);
        int right=1+diam(root->right);
        int current=(left+right-1);
        dia=(current>dia)?current-1:dia;
        return max(left,right);
    }
    int diameterOfBinaryTree(TreeNode* root) {
        diam(root);
        return dia;
        
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Recursive Depth First Search (DFS).
- **Optimality**: Optimal. It visits each node exactly once to calculate height and update the global diameter.

## Complexity
- **Time Complexity**: $O(N)$, where $N$ is the number of nodes in the tree.
- **Space Complexity**: $O(H)$, where $H$ is the height of the tree, representing the maximum depth of the recursion stack. In the worst case (skewed tree), this is $O(N)$.

## Efficiency Feedback
- The runtime and memory usage are optimal for this problem.
- **Minor Logic Overhead**: The code adds `1` during the recursive call and subtracts `1` when calculating `current` and updating `dia`. While logically correct, it is slightly redundant. A cleaner approach is to let the recursive function return the height (edges) and calculate diameter as `left_height + right_height`.

## Code Quality
- **Readability**: Moderate. The naming of the helper function `diam` is misleading because it actually calculates the height/depth of the subtree, not the diameter.
- **Structure**: Good. The separation of the recursive helper and the main interface is standard.
- **Naming**: Poor. 
    - `diam`: Used for a function that returns height.
    - `dia`: Used for the global diameter result.
    - `current`: Vague; represents the number of nodes on the longest path through the current root.
- **Concrete Improvements**:
    - Rename `diam` to `getHeight`.
    - Rename `dia` to `maxDiameter`.
    - Simplify the height calculation to avoid repeated `+1` and `-1` operations.
    - Use `std::max` for the `dia` update instead of a ternary operator for better clarity.

---

# Question Revision
### Diameter of Binary Tree

**Pattern:** Post-order DFS (Bottom-Up Tree Traversal)

**Brute Force:** For every node in the tree, independently calculate the maximum depth of its left and right subtrees and sum them. 
- **Complexity:** $O(n^2)$ time, $O(h)$ space.

**Optimal Approach:** Use a single recursive pass to calculate height. At each node, the potential diameter is `left_height + right_height`. Update a global maximum with this value, but return `max(left_height, right_height) + 1` to the parent to maintain the height property.
- **Time Complexity:** $O(n)$
- **Space Complexity:** $O(h)$ (where $h$ is tree height/recursion stack)

**The 'Aha' Moment:** The diameter is the max sum of two subtree heights, but the recursive function must return the max of *one* subtree height to its caller.

**Summary:** Use bottom-up DFS to track the global maximum diameter via the sum of child heights while returning the longest single path to the parent.

---