---
title: "Merge Two Binary Trees"
slug: merge-two-binary-trees
date: "2026-09-13"
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
    void solve(TreeNode* root,string path,vector<string>&ans){
        if(root==NULL)
        return ;
        path+=to_string(root->val);
        if(root->left==NULL && root->right==NULL){
            ans.push_back(path);
            return;
        }
        path+="->";
        solve(root->left,path,ans);
        solve(root->right,path,ans);
    }

    vector<string> binaryTreePaths(TreeNode* root) {
        vector<string>ans;
        solve(root,"",ans);
        return ans;
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Depth-First Search (DFS) using recursion.
- **Correctness**: **Incorrect**. The provided code solves the "Binary Tree Paths" problem, not the "Merge Two Binary Trees" problem. It traverses a single tree to find all root-to-leaf paths rather than merging two trees.

## Complexity
- **Time Complexity**: $O(N \cdot H)$ where $N$ is the number of nodes and $H$ is the height of the tree (due to string concatenations and copying at each level).
- **Space Complexity**: $O(H)$ for the recursion stack, plus $O(N \cdot H)$ to store the resulting paths in the `ans` vector.

## Efficiency Feedback
- **String Handling**: Using `string path` passed by value creates a new string copy at every recursive call, which is inefficient. Using a reference and backtracking or a `std::stringstream` would reduce overhead.
- **Functional Mismatch**: Since the code does not address the requested problem (Merge Two Binary Trees), its efficiency regarding that specific task is irrelevant.

## Code Quality
- **Readability**: Moderate. The logic for the "Binary Tree Paths" problem is clear, but the discrepancy between the problem title and implementation is jarring.
- **Structure**: Good. Standard recursive helper function pattern.
- **Naming**: Poor. `solve` is a generic name; `findPaths` would be more descriptive.
- **Concrete Improvements**: 
    1. Implement the actual logic for merging two trees (comparing nodes from two roots and summing values).
    2. If keeping this logic, pass the path by reference and pop the added characters after returning from recursion to avoid excessive allocations.

---

# Question Revision
# Revision Report: Merge Two Binary Trees

- **Pattern:** Tree DFS (Recursive Traversal)
- **Brute Force:** Create a deep copy of the first tree, then traverse the second tree and manually add values to the first copy wherever nodes overlap.
- **Optimal Approach:** 
    - **Logic:** Use a recursive post-order or pre-order traversal. At each node:
        1. If one node is `null`, return the other node (it inherits the entire remaining subtree).
        2. If both exist, sum their values into a new node (or overwrite one of the existing nodes).
        3. Recursively call the function for `left` and `right` children.
    - **Time Complexity:** $O(\min(m, n))$, where $m$ and $n$ are the number of nodes in the two trees. We only visit nodes that overlap.
    - **Space Complexity:** $O(\min(h_1, h_2))$, representing the recursion stack depth.
- **The 'Aha' Moment:** The requirement to "overlap" nodes based on structure indicates that the traversal is naturally synchronized, making recursion the most direct way to handle the merging logic.
- **Summary:** Use recursion to sum overlapping nodes and return the non-null subtree when one side is empty.

---