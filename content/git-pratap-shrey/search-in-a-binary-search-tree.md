---
title: "Search in a Binary Search Tree"
slug: search-in-a-binary-search-tree
date: "2026-06-24"

---

# My Solution
~~~/**
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
    TreeNode* searchBST(TreeNode* root, int val) {
        if(!root){return root;}
        
        if(root->val == val){
            return root;
        }
        if(root->val < val){
            return searchBST(root->right, val);
        }
        else{
            return searchBST(root->left, val);
        }
    }
};
~~~

# Submission Review

## Approach

- **Technique**: Recursive Binary Search.
- **Optimality**: Time-optimal. Space is suboptimal because it uses the call stack, whereas an iterative approach would use constant space.

## Complexity

- **Time Complexity**: $O(H)$, where $H$ is the height of the tree. In the worst case (skewed tree), this is $O(N)$; in a balanced tree, $O(\log N)$.
- **Space Complexity**: $O(H)$ due to the recursion stack depth.

## Efficiency Feedback

- **Bottleneck**: The use of recursion introduces overhead and $O(H)$ auxiliary space.
- **Optimization**: Convert the recursion into a `while` loop to achieve $O(1)$ space complexity.

## Code Quality

- **Readability**: Good. The logic is straightforward and easy to follow.
- **Structure**: Good. Base cases are handled correctly before recursive calls.
- **Naming**: Good. Variable names are consistent with standard BST terminology.
- **Improvement**: Use an iterative loop to eliminate potential stack overflow on extremely deep trees.

---

# Question Revision

#

## Search in a Binary Search Tree

**Pattern:** Binary Search (Tree-based)

**Brute Force:** Perform a full tree traversal (DFS or BFS) and check every node until the target value is found.
- **Time:** $O(n)$
- **Space:** $O(n)$

**Optimal Approach:** Leverage the BST property (Left < Root < Right). If the target is smaller than the current node, move left; if larger, move right. Repeat until the node is found or a null leaf is reached.
- **Time:** $O(h)$ where $h$ is the tree height ($O(\log n)$ for balanced trees, $O(n)$ for skewed).
- **Space:** $O(1)$ for iterative, $O(h)$ for recursive.

**The 'Aha' Moment:** The BST property effectively transforms the tree into a sorted array, allowing you to discard half of the remaining search space at each step.

**Summary:** Use the value comparison to prune one subtree at every node until the target is located.

---
