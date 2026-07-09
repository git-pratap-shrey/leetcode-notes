--- title: "Serialize and Deserialize Binary Tree" slug: serialize-and-deserialize-binary-tree date: "2026-06-26" ---  # My Solution ~~~/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
public class Codec {

    // Encodes a tree to a single string.
    public String serialize(TreeNode root) {
        if(root==null) return "";
        Queue<TreeNode> q = new LinkedList<>();
        StringBuilder sb = new StringBuilder();
        q.offer(root);
        while(!q.isEmpty()){
            TreeNode node = q.poll();
            if(node==null){
                sb.append("#,");
                continue;
            }
            sb.append(node.val).append(",");
            q.offer(node.left);
            q.offer(node.right);
        }
        return sb.toString();

    }

    // Decodes your encoded data to tree.
    public TreeNode deserialize(String data) {
        if(data.isEmpty()) return null;
        String[] values = data.split(",");
        TreeNode root = new TreeNode(Integer.parseInt(values[0]));
        Queue<TreeNode> q = new LinkedList<>();
        q.offer(root);
        int i=1;
        while(!q.isEmpty() && i<values.length){
            TreeNode node = q.poll();
            if(!values[i].equals("#")){
                TreeNode leftnode = new TreeNode(Integer.parseInt(values[i]));
                node.left = leftnode;
                q.offer(leftnode);
            }
            i++;
            if(i<values.length && !values[i].equals("#")){
                TreeNode rightnode = new TreeNode(Integer.parseInt(values[i]));
                node.right = rightnode;
                q.offer(rightnode);
            }
            i++;
        }
        return root;
    }
}

// Your Codec object will be instantiated and called as such:
// Codec ser = new Codec();
// Codec deser = new Codec();
// TreeNode ans = deser.deserialize(ser.serialize(root)); - java~~~  # Submission Review ## Approach
- **Technique**: Breadth-First Search (BFS) / Level-order traversal using a `Queue`.
- **Optimality**: Optimal. It visits every node exactly once during both serialization and deserialization.

## Complexity
- **Time Complexity**: $O(N)$, where $N$ is the number of nodes in the tree. Each node is processed once.
- **Space Complexity**: $O(N)$. 
    - In `serialize`, the queue can hold up to the maximum width of the tree, and the `StringBuilder` stores all nodes.
    - In `deserialize`, the `split()` method creates an array of size $O(N)$, and the queue holds the tree width.

## Efficiency Feedback
- **String Splitting**: The use of `data.split(",")` creates a large array of strings. For extremely large trees, using a `StringTokenizer` or a manual pointer (index) to parse the string would reduce memory overhead and object creation.
- **StringBuilder**: Efficiently used to avoid $O(N^2)$ string concatenation.
- **Trailing Comma**: The `serialize` method appends a comma after every element, including the last one. While Java's `split()` handles trailing empty strings by discarding them, this produces a slightly redundant string.

## Code Quality
- **Readability**: Good. The logic is straightforward and follows standard BFS patterns.
- **Structure**: Good. The methods are logically separated and handle edge cases (like `root == null`) at the start.
- **Naming**: Moderate. Variable names like `q`, `sb`, and `i` are common in competitive programming but would be considered too terse in a production environment (e.g., `nodeQueue`, `stringBuilder`, `valueIndex`).
- **Concrete Improvements**:
    - Replace `data.split(",")` with a more memory-efficient parsing mechanism if memory limits are tight.
    - Use more descriptive variable names to improve maintainability.  ---  # Question Revision ### Serialize and Deserialize Binary Tree

**Pattern:** Tree Traversal (DFS / Pre-order)

**Brute Force:** Store the tree as a complete binary tree array (heap-style). This is inefficient as skewed trees result in exponential space waste ($O(2^h)$).

**Optimal Approach:** 
*   **Serialization:** Perform a recursive Pre-order traversal. Append the node's value to a string; if a node is `null`, append a special marker (e.g., `#`). Use a delimiter (e.g., `,`) to separate values.
*   **Deserialization:** Split the string into a queue of values. Recursively pop the front of the queue: if it's the null marker, return `null`; otherwise, create a node and recursively assign its left and right children.
*   **Time Complexity:** $O(n)$ to visit every node once.
*   **Space Complexity:** $O(n)$ to store the serialized string and the recursion stack.

**The 'Aha' Moment:** To reconstruct a tree from a single traversal, you must explicitly encode the `null` leaf pointers to mark the boundaries of every subtree.

**Summary:** Use Pre-order DFS with null markers to flatten the tree into a string and a queue to rebuild it recursively.  ---