--- title: "Construct Binary Tree from Preorder and Inorder Traversal" slug: construct-binary-tree-from-preorder-and-inorder-traversal date: "2026-06-26" ---  # My Solution ~~~/**
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
    public TreeNode buildTree(int[] preorder, int[] inorder) {
        Map<Integer,Integer> inmap = new HashMap<Integer,Integer>();
        for(int i=0;i<inorder.length;i++){
            inmap.put(inorder[i],i);
        }
        TreeNode root = Tree(preorder, 0, preorder.length-1, inorder, 0, inorder.length-1,inmap);
        return root;
    }
    public TreeNode Tree(int[] preorder, int prestart, int preend, int[] inorder, int instart, int inend, Map<Integer,Integer> inmap){
        if(prestart>preend || instart>inend){
            return null;
        }
        TreeNode root = new TreeNode(preorder[prestart]);
        int inroot = inmap.get(root.val);
        int numleft = inroot - instart;
        root.left = Tree(preorder,prestart+1,preend+numleft,inorder,instart,inroot-1, inmap);
        root.right = Tree(preorder,prestart+numleft+1,preend,inorder,inroot+1,inend, inmap);
        return root;
    }
} - java~~~  # Submission Review ## Approach
- **Technique**: Recursive Divide and Conquer. The algorithm identifies the root from the `preorder` array, finds its position in the `inorder` array to determine the size of the left and right subtrees, and recursively constructs them.
- **Optimality**: Optimal. Using a `HashMap` to store `inorder` indices reduces the search time for the root from $O(N)$ to $O(1)$ per node.

## Complexity
- **Time Complexity**: $O(N)$ — Each node is visited exactly once, and map lookups are constant time.
- **Space Complexity**: $O(N)$ — The `HashMap` stores all $N$ nodes, and the recursion stack takes $O(H)$ space (where $H$ is tree height, $O(N)$ in the worst case).

## Efficiency Feedback
- **Logic Error**: There is a critical bug in the recursive call for the left subtree:
  `root.left = Tree(..., prestart+1, preend+numleft, ...);`
  The `preend` parameter for the left child should be `prestart + numleft`, not `preend + numleft`. This will cause `ArrayIndexOutOfBoundsException` or incorrect tree construction.
- **Performance**: Otherwise efficient. The use of indices instead of array slicing (e.g., `Arrays.copyOfRange`) prevents unnecessary memory allocation.

## Code Quality
- **Readability**: Moderate. The logic is straightforward, but naming is poor.
- **Structure**: Good. Logic is correctly split between an initialization method and a recursive helper.
- **Naming**: Poor.
    - Method `Tree` follows class naming conventions (PascalCase) instead of method conventions (camelCase). It should be named something descriptive like `buildTreeRecursive`.
    - Variable `inmap` is acceptable but `inorderMap` would be clearer.
- **Improvements**:
    - Fix the index bug: `preend + numleft` $\rightarrow$ `prestart + numleft`.
    - Rename the helper method to `build` or `helper`.
    - Use `final` for the map to indicate it is not modified after initialization.  ---  # Question Revision ### Construct Binary Tree from Preorder and Inorder Traversal

**Pattern:** Divide and Conquer / Recursive Tree Construction

**Brute Force:** 
Iteratively search for the current root's value in the inorder array to find the split point between left and right subtrees.
- **Time:** $O(n^2)$ due to linear search for the root index at every node.
- **Space:** $O(n)$ for the recursion stack.

**Optimal Approach:**
1. Store all `inorder` values and their indices in a **HashMap** for $O(1)$ lookup.
2. Use a pointer to track the current root in the `preorder` array.
3. For each root, find its index in the `inorder` map; everything to the left of that index belongs to the left subtree, and everything to the right belongs to the right subtree.
4. Recursively build the left subtree first (following preorder sequence), then the right.

- **Time:** $O(n)$ — each node is processed exactly once.
- **Space:** $O(n)$ — $O(n)$ for the HashMap and $O(h)$ for the recursion stack.

**The 'Aha' Moment:** 
Preorder tells you **which** node is the root, while Inorder tells you **where** that root splits the left and right subtrees.

**Summary:** 
Use a HashMap to find the root's index in the inorder array and recursively partition the arrays to build subtrees.  ---