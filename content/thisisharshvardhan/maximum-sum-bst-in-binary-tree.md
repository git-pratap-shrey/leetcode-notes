---
title: "Maximum Sum BST in Binary Tree"
slug: maximum-sum-bst-in-binary-tree
date: "2026-04-08"

---
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
class Info{
public:
    int mini;
    int maxi;
    int sum;
    bool isBST;
};

class Solution {
public:

    Info solve(TreeNode* root, int& sum){
    if (!root) {
        Info temp;
        temp.mini=INT_MAX;
        temp.maxi=INT_MIN;
        temp.sum=0;
        temp.isBST=true;
        return temp;
    }

    Info left= solve(root->left,sum);
    Info right= solve(root->right,sum);

    Info curr;
    curr.mini=min(root->val,min(left.mini,right.mini));
    curr.maxi=max(root->val,max(left.maxi,right.maxi));
    curr.sum= root->val + left.sum + right.sum;

    if (root->val>left.maxi && root->val<right.mini && left.isBST && right.isBST){
        curr.isBST=true;
        sum=max(sum,curr.sum);

    }
    else {
        curr.isBST=false;
    }

    return curr;
    
    }

    int maxSumBST(TreeNode* root) {
        int sum=0;
        Info ans=solve(root,sum);
        return sum;
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Post-order traversal (Bottom-up Dynamic Programming/Recursion).
*   **Optimality:** Optimal. It visits each node exactly once, which is the theoretical lower bound for tree traversal.

## Complexity
*   **Time Complexity:** $O(N)$, where $N$ is the number of nodes in the tree, as each node is visited exactly once.
*   **Space Complexity:** $O(H)$, where $H$ is the height of the tree, due to the recursion stack.

## Efficiency Feedback
*   **Performance:** The current approach is highly efficient. The use of a custom `Info` struct avoids redundant traversals or repeated subtree queries.
*   **Optimization:** You are passing `sum` by reference and updating it globally, which is correct and efficient. No further optimizations are required.

## Code Quality
*   **Readability:** Good. The logic is clear and follows standard tree-processing patterns.
*   **Structure:** Good. The helper function `solve` effectively encapsulates the state required for the BST property checks.
*   **Naming:** Moderate. `mini` and `maxi` are acceptable, but `minVal` and `maxVal` are more conventional. `Info` is a bit generic; `BSTState` or `SubtreeInfo` would be more descriptive.
*   **Concrete Improvements:**
    *   **Struct Initialization:** Add a constructor to `Info` to avoid verbose member-by-member initialization.
    *   **Edge Case:** The logic `curr.mini = min(root->val, min(left.mini, right.mini))` is safe here due to `INT_MAX/INT_MIN` handling in the base case, but it is technically cleaner to handle `nullptr` children explicitly within the `if` logic to avoid potential integer overflow or underflow issues if `root->val` is near `INT_MIN` or `INT_MAX`.
    *   **Consistency:** Use `nullptr` instead of `NULL` (already done).

### Suggested Minor Refactor:
```cpp
struct SubtreeInfo {
    int minVal, maxVal, sum;
    bool isBST;
};

// Inside solve:
if (!root) return {INT_MAX, INT_MIN, 0, true};
// ... logic ...
```

---
---


# Question Revision
### Revision Report: Maximum Sum BST in Binary Tree

**Pattern:** Post-order Traversal (Bottom-Up DFS)

**Brute Force:** 
For every node, check if the subtree is a BST by traversing it ($O(n)$). If it is, calculate the sum ($O(n)$). Total complexity: $O(n^2)$.

**Optimal Approach:**
Use a post-order traversal to pass subtree metadata (isBST, min, max, sum) up to the parent. At each node, a subtree is a BST if:
1. The left and right children are BSTs.
2. The current node's value is greater than the left child's `max` and less than the right child's `min`.
*   **Time Complexity:** $O(n)$ (each node visited once).
*   **Space Complexity:** $O(h)$ (recursion stack depth, where $h$ is tree height).

**The 'Aha' Moment:**
When the validity of a node depends entirely on the aggregated results of its children, post-order traversal allows you to compute subtree properties in a single bottom-up pass.

**Summary:**
To validate sub-properties in a tree, pass metadata (min/max/sum) from children to parents using post-order DFS to ensure local decisions build a global solution in linear time.

---
