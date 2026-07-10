---
title: "Binary Tree Preorder Traversal"
slug: binary-tree-preorder-traversal
date: "2026-07-03"

---

# My Solution
~~~/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public List<Integer> preorderTraversal(TreeNode root) {
        List<Integer> ans = new ArrayList<>();
        preorder(root,ans);
        return ans;
    }
    public void preorder(TreeNode root, List<Integer> ans){
        if(root==null){
            return;
        }
        ans.add(root.val);
        preorder(root.left,ans);
        preorder(root.right,ans);

    }
}
~~~

# Submission Review

## Approach

- **Technique:** Recursive Depth-First Search (DFS).
- **Optimality:** Optimal. Every node in the binary tree must be visited exactly once to complete the traversal.

## Complexity

- **Time Complexity:** $O(N)$, where $N$ is the number of nodes in the tree.
- **Space Complexity:** $O(H)$, where $H$ is the height of the tree. This represents the maximum depth of the recursion stack. In the worst case (a skewed tree), this becomes $O(N)$.

## Efficiency Feedback
- The implementation is efficient. 
- For extremely deep trees, a recursive approach may trigger a `StackOverflowError`. An iterative approach using an explicit `Stack` would mitigate this risk, though it is typically unnecessary for standard competitive programming constraints.

## Code Quality

- **Readability:** Good. The logic is straightforward and follows standard preorder traversal patterns.
- **Structure:** Good. Separating the recursive helper method from the main entry point is the correct practice.
- **Naming:** Moderate. `ans` is a common shorthand, but `result` or `traversalList` would be more descriptive. `preorder` is an acceptable method name.
- **Concrete Improvements:** 
    - Add access modifiers (e.g., `private`) to the `preorder` helper method to encapsulate it within the `Solution` class.
    - Initialize the `ArrayList` with an initial capacity if the number of nodes $N$ were known, reducing internal array resizing.

---

# Question Revision

#

## Binary Tree Preorder Traversal

**Pattern:** DFS (Depth First Search) / Tree Traversal

**Brute Force:** 
Use recursion: visit the current node, then recursively call the function for the left child, followed by the right child.

**Optimal Approach:** 
Use an explicit **Stack** to mimic the call stack:
1. Push the root onto the stack.
2. While the stack is not empty:
    - Pop the node and add it to the result list.
    - Push the **right child** first, then the **left child** (ensures the left child is processed first due to LIFO).

- **Time Complexity:** $O(n)$
- **Space Complexity:** $O(h)$, where $h$ is the tree height.

**The 'Aha' Moment:** 
The requirement to visit the root *before* its children explicitly defines the "Root $\rightarrow$ Left $\rightarrow$ Right" sequence of a Preorder DFS.

**Summary:** 
Process the current node immediately, then use a stack (pushing right then left) to explore the tree depth-first.

---
