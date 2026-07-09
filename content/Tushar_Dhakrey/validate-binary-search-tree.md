--- title: "Validate Binary Search Tree" slug: validate-binary-search-tree date: "2026-06-24" ---  # My Solution ~~~/**
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
    public boolean isValidBST(TreeNode root) {
        return valid(root,Long.MIN_VALUE,Long.MAX_VALUE);
    }
    private boolean valid(TreeNode node, long left , long right){
        if(node==null){
            return true;
        }
        if(!(left<node.val && node.val<right)){
            return false;
        }
        return valid(node.left,left,node.val) && valid(node.right,node.val,right);
    }    
} - java~~~  # Submission Review ## Approach
- **Technique**: Recursive range validation (Top-down).
- **Optimality**: Optimal. It visits each node exactly once and uses the minimum required information (upper and lower bounds) to validate the BST property.

## Complexity
- **Time Complexity**: $O(N)$, where $N$ is the number of nodes in the tree.
- **Space Complexity**: $O(H)$, where $H$ is the height of the tree, due to the recursion stack. In the worst case (a skewed tree), this is $O(N)$.

## Efficiency Feedback
- **Range Handling**: Using `long` boundaries is an efficient way to handle edge cases where node values are exactly `Integer.MIN_VALUE` or `Integer.MAX_VALUE`.
- **Performance**: Runtime and memory usage are minimal as there are no auxiliary data structures used beyond the call stack.

## Code Quality
- **Readability**: Good. The logic is straightforward and easy to follow.
- **Structure**: Good. The use of a private helper method correctly encapsulates the recursion.
- **Naming**: Moderate. 
    - `valid` is slightly vague; `validate` or `isWithinRange` would be more descriptive.
    - `left` and `right` parameters refer to the value boundaries; `min` and `max` would be more conventional for this context.
- **Improvements**: No functional changes needed. For absolute robustness in environments where `long` might not suffice (though not applicable for `int` node values), one could use `Integer` objects and null checks for the boundaries.  ---  # Question Revision ### Validate Binary Search Tree

**Pattern:** DFS / Recursive Bounds

**Brute Force:** For every node, traverse its entire left subtree to ensure all values are smaller and its entire right subtree to ensure all values are larger.
- Time: $O(n^2)$
- Space: $O(n)$

**Optimal Approach:** Use a recursive helper function that passes down a `min` and `max` constraint. For a node to be valid, its value must be strictly between the current `min` and `max`. When moving left, update the `max` to the current node's value; when moving right, update the `min`.
- **Time Complexity:** $O(n)$
- **Space Complexity:** $O(n)$ (recursion stack in worst-case skewed tree)

**The 'Aha' Moment:** Realizing that a node must be compared not just to its immediate children, but to the constraints imposed by all its ancestors.

**Summary:** Validate a BST by recursively passing and narrowing the allowable range of values for each subtree.  ---