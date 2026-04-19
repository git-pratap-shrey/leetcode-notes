---
title: "Balanced Binary Tree"
slug: balanced-binary-tree
date: "2026-04-19"
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
    int dfa(TreeNode* root){
        if(root==NULL) return 0;

        int left=dfa(root->left);
        if(left==-1) return -1;
        int right=dfa(root->right);
        if(right==-1) return -1;
        if(abs(left-right)>1) return -1;
        return max(left, right)+1;
    }
    
    

    bool isBalanced(TreeNode* root) {
        int ans=dfa(root);

        if(ans==-1){
            return false;
        }
        return true;
        
        

        
        
        
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Recursive Post-order Traversal (DFS).
- **Optimality**: Optimal. It calculates the height and checks the balance property in a single bottom-up pass, avoiding the $O(N^2)$ complexity associated with calling a separate height function for every node.

## Complexity
- **Time Complexity**: $O(N)$, where $N$ is the number of nodes in the tree. Each node is visited exactly once.
- **Space Complexity**: $O(H)$, where $H$ is the height of the tree, representing the maximum depth of the recursion stack. In the worst case (skewed tree), this is $O(N)$.

## Efficiency Feedback
- **Runtime**: Highly efficient. The use of `-1` as a sentinel value allows for "early exit" (pruning) as soon as an imbalance is detected deep in the tree.
- **Memory**: Optimal for a recursive solution.

## Code Quality
- **Readability**: Moderate. The logic is clear, but the naming is confusing.
- **Structure**: Good. The helper function correctly encapsulates the recursive logic.
- **Naming**: Poor. The function name `dfa` is misleading, as DFA typically refers to a *Deterministic Finite Automaton* in computer science, whereas this function calculates height/balance.
- **Concrete Improvements**:
    - Rename `dfa` to something descriptive like `checkHeight` or `getHeight`.
    - Remove excessive trailing whitespace/empty lines at the end of the `isBalanced` function.
    - Use `nullptr` instead of `NULL` for consistency with modern C++ standards.

---

# Question Revision
### Balanced Binary Tree

**Pattern:** Tree DFS (Bottom-Up / Post-Order Traversal)

**Brute Force:** For every single node in the tree, call a separate `getHeight` function for its left and right children. This results in redundant calculations for overlapping subtrees.

**Optimal Approach:** Use a post-order traversal to calculate height and check balance simultaneously. Each node returns its height to its parent; if a subtree is found to be unbalanced, it returns a special sentinel value (e.g., `-1`) to propagate the failure upward immediately.
- **Time Complexity:** $O(n)$
- **Space Complexity:** $O(h)$ (where $h$ is the height of the tree)

**The 'Aha' Moment:** Since the balance of a node depends on the heights of its children, the information must flow from the leaves up to the root.

**Summary:** Use post-order DFS to validate height balance and propagate failure values upward in a single pass.

---