---
title: "Count Good Nodes in Binary Tree"
slug: count-good-nodes-in-binary-tree
date: "2026-10-24"
---

# My Solution
~~~cpp
/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode(int x) : val(x), left(NULL), right(NULL) {}
 * };
 */
class Codec {
public:

    // Encodes a tree to a single string.
    void serializeTree(TreeNode *root ,string & s){
        if(!root){
            s+="# ";
            return;
        }
        s+=to_string(root->val)+" ";
        serializeTree(root->left ,s);
        serializeTree(root->right ,s);
        return;
    }
    string serialize(TreeNode* root) {
        string s;
        serializeTree(root,s);
        return s;
    }

    // Decodes your encoded data to tree.

    TreeNode* deserializeTree(stringstream & ss){
        string x;
        ss>>x;
        if(x=="#")return NULL;

        TreeNode* root=new TreeNode(stoi(x));
        root->left=deserializeTree(ss);
        root->right=deserializeTree(ss);
        return root;
    }
    TreeNode* deserialize(string data) {
        stringstream ss(data);
        return deserializeTree(ss);
    }
};

// Your Codec object will be instantiated and called as such:
// Codec ser, deser;
// TreeNode* ans = deser.deserialize(ser.serialize(root));
~~~

# Submission Review
## Approach
- **Technique**: Pre-order traversal for serialization and recursive reconstruction for deserialization.
- **Correctness**: The code provided is a solution for **"Serialize and Deserialize Binary Tree"**, not "Count Good Nodes in Binary Tree" as stated in the problem prompt. It does not address the logic required to count "good nodes."
- **Optimality**: For the serialization problem, this is a standard and optimal approach.

## Complexity
- **Time Complexity**: $O(N)$, where $N$ is the number of nodes. Each node is visited once during serialization and once during deserialization.
- **Space Complexity**: $O(N)$.
    - Serialization: The resulting string and the recursion stack (depth $H$) take $O(N)$ space.
    - Deserialization: The `stringstream` and the recursion stack (depth $H$) take $O(N)$ space.

## Efficiency Feedback
- **Runtime**: The use of `std::to_string` and `std::stoi` is efficient enough for most constraints.
- **Memory**: The use of a `string` passed by reference in `serializeTree` prevents unnecessary copies, which is good.
- **Bottleneck**: For extremely large trees, `std::stringstream` can be slightly slower than manual pointer manipulation, but it is negligible here.

## Code Quality
- **Readability**: Good. The logic is straightforward and follows standard patterns.
- **Structure**: Moderate. The `serializeTree` and `deserializeTree` helper functions are clearly separated from the public API.
- **Naming**: Good. Variable names like `root`, `s`, and `ss` are conventional for this context.
- **Improvements**:
    - **Problem Mismatch**: The implementation solves the wrong problem (Serialization vs. Counting Good Nodes).
    - **Memory Leak**: The `deserialize` function allocates memory using `new`, but there is no corresponding mechanism to delete the tree, leading to memory leaks in a production environment.
    - **Input Validation**: There is no check for empty input strings in `deserialize`.

---

# Question Revision
# Revision Report: Count Good Nodes in Binary Tree

- **Pattern**: Depth First Search (DFS) / Tree Traversal.
- **Brute Force**: For every single node, traverse all paths from the root to that node to check if any value is greater than the current node. This would result in redundant traversals and poor time complexity.
- **Optimal Approach**: 
    - Use a recursive DFS traversal.
    - Pass a `max_so_far` variable down the call stack.
    - A node is "good" if `node.val >= max_so_far`.
    - Update `max_so_far = max(max_so_far, node.val)` before recursing into the left and right children.
    - **Time Complexity**: $O(n)$ where $n$ is the number of nodes (each node visited once).
    - **Space Complexity**: $O(h)$ where $h$ is the height of the tree (recursion stack).
- **The 'Aha' Moment**: The definition of a "good node" depends on the maximum value encountered on the path from the root, implying that state must be carried downward during traversal.
- **Summary**: Carry the maximum value encountered so far down the DFS path to validate each node in a single pass.

---