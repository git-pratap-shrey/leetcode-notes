---
title: "Difference Between Peaks and Valleys"
slug: difference-between-peaks-and-valleys
date: "2026-10-24"
---

# My Solution
~~~java
/**
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
    public void flatten(TreeNode root) {
        if(root==null) return;
        flatten(root.left);
        flatten(root.right);
        TreeNode left = root.left;
        TreeNode right = root.right;
        root.left = null;
        root.right = left;
        TreeNode temp = root;
        while(temp.right!=null){
            temp = temp.right;
        }
        temp.right = right;
    }
}
~~~

# Submission Review
## Approach
- **Technique**: Post-order traversal (Recursion) to flatten a binary tree into a linked list in-place.
- **Optimality**: **Suboptimal**. While the logic correctly flattens the tree, the process of finding the tail of the left subtree using a `while` loop inside each recursive call leads to redundant traversals.

## Complexity
- **Time Complexity**: $O(N^2)$ in the worst case (e.g., a skewed left-heavy tree), as the code traverses the flattened left subtree to find the tail for every node.
- **Space Complexity**: $O(H)$, where $H$ is the height of the tree, due to the recursion stack.

## Efficiency Feedback
- **Bottleneck**: The `while(temp.right != null)` loop. In a skewed tree, this results in quadratic time complexity.
- **Optimization**: To achieve $O(N)$, the function should return the tail node of the flattened subtree to the caller, eliminating the need for the `while` loop.

## Code Quality
- **Readability**: **Poor**. The class and method are completely mismatched. The problem title is "Difference Between Peaks and Valleys," but the code implements "Flatten Binary Tree to Linked List."
- **Structure**: **Moderate**. The recursive logic is clear, but it lacks a helper method to manage the tail pointer.
- **Naming**: **Good**. Variable names (`left`, `right`, `temp`) are standard for tree manipulations.

**Concrete Improvements**:
1. **Fix Logical Mismatch**: The code does not solve the stated problem ("Difference Between Peaks and Valleys").
2. **Algorithm Update**: Change the method signature to return the last node of the flattened list to reduce time complexity from $O(N^2)$ to $O(N)$.

---

# Question Revision
# Revision Report: Difference Between Peaks and Valleys

- **Pattern:** Array Traversal / State Tracking (Peak-Valley Detection)
- **Brute Force:** Iterate through the array and for every element, check if it is strictly greater than its neighbors (Peak) or strictly smaller than its neighbors (Valley), then calculate the difference.
- **Optimal Approach:**
    - **Logic:** Traverse the array once. Use a flag or state variable to track whether you are currently searching for a peak or a valley. Only update the "last found" value when the direction of the slope changes. Since the problem asks for the difference between the *first* peak and *last* valley (or vice versa), track the first extreme point encountered and the final extreme point encountered.
    - **Time Complexity:** $O(n)$ — Single pass through the array.
    - **Space Complexity:** $O(1)$ — Only constant space for tracking extrema.
- **The 'Aha' Moment:** When the problem asks for "peaks" and "valleys" based on local extrema, it signals a need to track sign changes in the difference between adjacent elements.
- **Summary:** Identify the first and last local extrema by tracking slope reversals in a single linear scan.

---