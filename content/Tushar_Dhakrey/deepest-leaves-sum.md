---
title: "Deepest Leaves Sum"
slug: deepest-leaves-sum
date: "2026-09-08"
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
    int maxdepth = -1;
    int sum = 0;
    public int deepestLeavesSum(TreeNode root) {
        dfs(root,0);
        return sum;
    }
    void dfs(TreeNode node, int depth){
        if(node==null){
            return;
        }
        if(node.left==null && node.right==null){
            if(depth>maxdepth){
                maxdepth=depth;
                sum = node.val;
            }
            else if(depth==maxdepth){
                sum += node.val;
            }
        }
        dfs(node.left,depth+1);
        dfs(node.right,depth+1);
    }
}
~~~

# Submission Review
## Approach
- **Technique**: Depth-First Search (DFS) with global state tracking.
- **Optimality**: Optimal. Every node in the tree must be visited at least once to determine the maximum depth and the corresponding sum.

## Complexity
- **Time Complexity**: $O(N)$, where $N$ is the number of nodes in the binary tree.
- **Space Complexity**: $O(H)$, where $H$ is the height of the tree, due to the recursion stack. In the worst case (a skewed tree), this becomes $O(N)$.

## Efficiency Feedback
- The runtime and memory usage are minimal and optimal for this problem.
- The logic correctly handles the "reset" of the sum when a new maximum depth is discovered (`sum = node.val`).

## Code Quality
- **Readability**: Good. The logic is linear and easy to follow.
- **Structure**: Moderate. Using member variables (`maxdepth`, `sum`) is common in competitive programming but makes the `Solution` instance stateful, meaning it cannot be reused for multiple calls without resetting the variables.
- **Naming**: Good. Variable names clearly describe their purpose.
- **Concrete Improvements**:
    - To make the code thread-safe or reusable, encapsulate `maxdepth` and `sum` within a helper object or return them as a pair/array from the recursive function.
    - Minor: Initialize `maxdepth` to `0` instead of `-1` since depth is non-negative.

---

# Question Revision
### Deepest Leaves Sum

**Pattern:** Tree Traversal (BFS/DFS)

**Brute Force:** 
Perform two separate passes: first, use DFS to find the maximum depth of the tree; second, use DFS to sum all nodes that match that maximum depth.

**Optimal Approach (BFS):**
Use a level-order traversal (queue). In each iteration, calculate the sum of the current level. Since the traversal continues until the last level is reached, the sum of the final level processed is the answer.
- **Time Complexity:** $O(n)$
- **Space Complexity:** $O(w)$ where $w$ is the maximum width of the tree.

**The 'Aha' Moment:** 
The requirement to isolate the "deepest" level signals that a level-order traversal (BFS) is ideal, as the last level processed is naturally the deepest.

**Summary:** 
Perform a BFS level-order traversal and return the sum of the final level.

---