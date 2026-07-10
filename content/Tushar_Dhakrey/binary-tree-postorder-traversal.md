---
title: "Binary Tree Postorder Traversal"
slug: binary-tree-postorder-traversal
date: "2026-06-30"

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
    public List<Integer> postorderTraversal(TreeNode root){
        List<Integer> ans = new ArrayList<>();
        postorder(root,ans);
        return ans;
    }
    public void postorder(TreeNode root, List<Integer> ans){
        if(root==null){
            return;
        }
        postorder(root.left,ans);
        postorder(root.right,ans);
        ans.add(root.val);

    }
}
~~~

# Submission Review

## Approach

- **Technique**: Recursive Depth-First Search (DFS).
- **Optimality**: Optimal. Every node in the binary tree must be visited exactly once to produce the traversal.

## Complexity

- **Time Complexity**: $O(N)$, where $N$ is the number of nodes in the tree.
- **Space Complexity**: $O(H)$, where $H$ is the height of the tree, representing the maximum depth of the recursion stack. In the worst case (skewed tree), this is $O(N)$.

## Efficiency Feedback
- The runtime and memory usage are minimal for this problem. 
- Using a `List` to accumulate results is the standard approach in Java for this specific problem signature.

## Code Quality

- **Readability**: Good. The logic follows the definition of postorder traversal (Left $\rightarrow$ Right $\rightarrow$ Root) exactly.
- **Structure**: Good. The separation between the public API and the private recursive helper is clear.
- **Naming**: Good. `ans` is acceptable for competitive programming, though `result` would be more descriptive.
- **Improvements**:
    - The `postorder` helper method could be marked `private` to encapsulate it within the `Solution` class.
    - Adding a null check at the start of `postorderTraversal` is implicitly handled by the helper, so the current flow is efficient.

---

# Question Revision

#

## Binary Tree Postorder Traversal

**Pattern:** Tree DFS (Depth-First Search)

**Brute Force:** 
Recursive traversal: Visit left subtree, visit right subtree, then append the current node's value.

**Optimal Approach:** 
Iterative traversal using a stack. To avoid complex state tracking, perform a modified preorder traversal (**Root $\rightarrow$ Right $\rightarrow$ Left**) and then reverse the entire result to achieve **Left $\rightarrow$ Right $\rightarrow$ Root**.
- **Time Complexity:** $O(n)$
- **Space Complexity:** $O(h)$, where $h$ is the tree height.

**The 'Aha' Moment:** 
Since postorder is the exact reverse of a "Root $\rightarrow$ Right $\rightarrow$ Left" traversal, reversing a modified preorder is the cleanest iterative implementation.

**Summary:** 
Visit Left $\rightarrow$ Right $\rightarrow$ Root; iteratively implemented as a reversed Root $\rightarrow$ Right $\rightarrow$ Left sequence.

---
