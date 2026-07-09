--- title: "Binary Tree Preorder Traversal" slug: binary-tree-preorder-traversal date: "2026-06-30" ---  # My Solution ~~~ - ~~~  # Submission Review No code was provided for analysis. Please provide the source code to receive a review based on the specified criteria.  ---  # Question Revision ### Binary Tree Preorder Traversal

**Pattern:** DFS (Depth-First Search) / Tree Traversal

**Brute Force:** Use recursion to visit the current node, then call the function on the left child, then the right child.

**Optimal Approach:** 
*   **Logic:** Use an iterative approach with an explicit stack. Push the root onto the stack. While the stack is not empty: pop the node, add it to the result, push its **right** child, then its **left** child (ensuring the left child is processed first due to LIFO).
*   **Time Complexity:** $O(n)$
*   **Space Complexity:** $O(h)$ where $h$ is the height of the tree.

**The 'Aha' Moment:** The term "Preorder" explicitly dictates the visit sequence (Root $\rightarrow$ Left $\rightarrow$ Right), signaling a standard DFS.

**Summary:** Traverse by processing the root before recursively visiting the left and right subtrees.  ---