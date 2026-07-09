--- title: "Path Sum" slug: path-sum date: "2026-06-25" ---  # My Solution ~~~/**
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
    public boolean hasPathSum(TreeNode root, int targetSum) {
        return dfs(root,0,targetSum);
    }
    private boolean dfs(TreeNode root,int curr, int targetSum){
        if(root==null){
            return false;
        }
        curr += root.val;
        if(root.left==null && root.right==null){
            return curr==targetSum;
        }
        return dfs(root.left,curr,targetSum) || dfs(root.right,curr,targetSum);
    }

} - java~~~  # Submission Review ## Approach
- **Technique**: Depth-First Search (DFS) using recursion.
- **Optimality**: Optimal. The algorithm visits each node at most once to determine if a valid path exists.

## Complexity
- **Time Complexity**: $O(N)$, where $N$ is the number of nodes in the binary tree.
- **Space Complexity**: $O(H)$, where $H$ is the height of the tree, representing the maximum depth of the recursion stack. In the worst case (skewed tree), this is $O(N)$.

## Efficiency Feedback
- The runtime and memory usage are minimal for this problem.
- **Minor Optimization**: Instead of passing a `curr` (current sum) variable, the code could subtract the current node's value from `targetSum` and check if the remaining sum is $0$ at the leaf. This would reduce the number of parameters passed in each recursive call.

## Code Quality
- **Readability**: Good. The logic is straightforward and follows standard tree traversal patterns.
- **Structure**: Good. The helper method `dfs` cleanly separates the recursive logic from the public API.
- **Naming**: Moderate. `curr` is slightly ambiguous; `currentSum` would be more descriptive.
- **Concrete Improvements**: 
    - Ensure consistency in spacing (e.g., `root == null` instead of `root==null`).
    - Use `final` for `targetSum` if it remains unchanged throughout the recursion.  ---  # Question Revision ### Path Sum

**Pattern:** DFS (Recursion)

**Brute Force:** Traverse every possible root-to-leaf path, maintaining a running sum for each, and compare the final sum to the target.

**Optimal Approach:** Use top-down recursion to subtract the current node's value from the target sum. If a node is a leaf and its value equals the remaining target, the path exists.
- **Time Complexity:** $O(n)$ where $n$ is the number of nodes.
- **Space Complexity:** $O(h)$ where $h$ is the tree height (recursion stack).

**The 'Aha' Moment:** The "root-to-leaf" constraint signals a depth-first traversal where the remaining target sum is passed down as state.

**Summary:** Subtract node values from the target during a DFS traversal to check if any leaf reaches a remaining sum of zero.  ---