---
title: "Same Tree"
slug: same-tree
date: "2026-04-21"
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
    

    int checkdepth(struct TreeNode* p, struct TreeNode* q){
    if(p==NULL && q!=NULL){
        return -1;
    }
    if(q==NULL && p!=NULL){
        return -1;
    }
    if(p==NULL && q==NULL){
        return 0;
    }
    int left=checkdepth(p->left,q->left);
    if(left==-1) return -1;
    int right=checkdepth(p->right,q->right);
    if(right==-1) return -1;
    return 1;

}

    bool check(struct TreeNode* p, struct TreeNode* q){
        
        if(p==NULL && q!=NULL){
        return false;
        }
        if(q==NULL && p!=NULL){
            return false;
        }
        if(p==NULL && q==NULL){
            return true;
        }
        if(p->val!=q->val){
            return false;
        }
        int left=check(p->left,q->left);
        if(!left) return false;
        int right=check(p->right,q->right);
        if(!right) return false;
        return true;
        
    }
    bool isSameTree(TreeNode* p, TreeNode* q) {
        int x=checkdepth(p,q);
        bool y=check(p,q);
        if(x==-1 || y==false){
            return false;
        }
        return true;
        
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Recursive Depth-First Search (DFS).
- **Optimality**: Suboptimal. The solution implements two separate recursive passes (`checkdepth` and `check`) to verify the tree structure and values. Since `check` already validates the structure (null checks) and the values, `checkdepth` is entirely redundant.

## Complexity
- **Time Complexity**: $O(N)$, where $N$ is the number of nodes in the smaller of the two trees. While it performs two passes, it remains linear.
- **Space Complexity**: $O(H)$, where $H$ is the height of the tree, due to the recursion stack.

## Efficiency Feedback
- **Redundancy**: The `checkdepth` function performs a subset of the work already done by `check`. Removing `checkdepth` and calling only `check` would halve the number of operations.
- **Early Exit**: The `isSameTree` function calls `checkdepth` first. If the structure matches but the values differ, it still performs a second full traversal.

## Code Quality
- **Readability**: Moderate. The logic is straightforward, but the redundant function adds noise.
- **Structure**: Poor. The separation of structural checks and value checks into two functions is an architectural mistake for this problem.
- **Naming**: Poor. `checkdepth` does not actually calculate or verify "depth"; it verifies structure. `check` is too generic.
- **Concrete Improvements**:
    1. Delete the `checkdepth` function.
    2. Rename `check` to something more descriptive (e.g., `isIdentical`).
    3. Simplify `isSameTree` to return the result of the recursive check directly: `return check(p, q);`.
    4. Remove `struct` keyword inside the function signatures; it is unnecessary in C++.

---

# Question Revision
### LeetCode: Same Tree

**Pattern:** Recursion (DFS)

**Brute Force:** Serialize both trees into arrays (e.g., via preorder traversal) and compare the arrays for equality.

**Optimal Approach:** 
Use a recursive helper function to validate the trees node-by-node:
1. If both nodes are `null`, they are identical.
2. If only one is `null` or their values differ, they are not identical.
3. Recursively repeat the check for the left and right children.

- **Time Complexity:** $O(n)$ where $n$ is the total number of nodes.
- **Space Complexity:** $O(h)$ where $h$ is the height of the tree (recursion stack).

**The 'Aha' Moment:** The definition of a "Same Tree" is inherently recursive: two trees are identical if their roots are identical AND their corresponding subtrees are identical.

**Summary:** Two trees are identical if current nodes match and their recursive left and right child comparisons both return true.

---