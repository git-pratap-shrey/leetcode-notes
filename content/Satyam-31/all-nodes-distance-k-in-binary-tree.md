---
title: "All Nodes Distance K in Binary Tree"
slug: all-nodes-distance-k-in-binary-tree
date: "2026-10-23"
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
    int best = INT_MIN;

    int gain(TreeNode* node) {
        if (node == nullptr) return 0;

        int l = max(0, gain(node->left));    
        int r = max(0, gain(node->right));

        best = max(best, node->val + l + r); 

        return node->val + max(l, r);       
    }

    int maxPathSum(TreeNode* root) {
        gain(root);
        return best;
    }
};
~~~

# Submission Review
## Approach
- **Technique**: The provided code implements a recursive Depth-First Search (DFS) to calculate the maximum path sum in a binary tree.
- **Correctness**: **Incorrect**. The solution solves the "Binary Tree Maximum Path Sum" problem, but the prompt specifies the problem "All Nodes Distance K in Binary Tree." The logic provided does not address finding nodes at a specific distance $K$.

## Complexity
*(Analyzing the code provided, regardless of the problem mismatch)*
- **Time Complexity**: $O(N)$, where $N$ is the number of nodes in the tree, as it visits each node once.
- **Space Complexity**: $O(H)$, where $H$ is the height of the tree, due to the recursion stack.

## Efficiency Feedback
- The logic for "Maximum Path Sum" is optimal for that specific problem.
- Since the code does not address the "All Nodes Distance K" problem, the efficiency relative to the actual problem is irrelevant (the current logic is functionally useless for the requested task).

## Code Quality
- **Readability**: Good. The recursive flow is clear.
- **Structure**: Good. The helper function separates the recursive gain calculation from the main driver.
- **Naming**: Moderate. `gain` is descriptive for this specific algorithm, and `best` clearly indicates the global maximum.
- **Concrete Improvements**:
    - The solution must be entirely rewritten to solve "All Nodes Distance K." This would typically require:
        1. Mapping child-to-parent pointers using a Hash Map.
        2. Performing a Breadth-First Search (BFS) starting from the target node to find all nodes at distance $K$.

---

# Question Revision
# Revision Report: All Nodes Distance K in Binary Tree

### Pattern
**Graph Transformation (Tree $\rightarrow$ Undirected Graph) + Breadth-First Search (BFS)**

### Brute Force
For every node in the tree, calculate its distance to the target node using a helper function. If the distance equals $K$, add it to the result list. This would involve redundant traversals and high time complexity.

### Optimal Approach
1. **Graph Conversion**: Perform a DFS traversal to map each node to its parent. This effectively turns the rooted binary tree into an undirected graph where you can move "up" (to parent) as well as "down" (to children).
2. **Multi-Source BFS**: Start a BFS from the `target` node. Use a `visited` set to avoid cycles.
3. **Layer Traversal**: Traverse the graph level by level. When the BFS reaches the $K$-th level, all nodes currently in the queue are exactly distance $K$ away.

**Complexity:**
- **Time:** $O(n)$ — One DFS to map parents, one BFS to find nodes.
- **Space:** $O(n)$ — To store the parent map, visited set, and BFS queue.

### The 'Aha' Moment
The inability to move "up" the tree from a child to a parent suggests that the tree structure is insufficient and must be treated as an undirected graph.

### Summary
Convert the tree to a graph using a parent map, then run a BFS from the target node to find all nodes at distance $K$.

---