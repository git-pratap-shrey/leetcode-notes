---
title: "Clone Graph"
slug: clone-graph
date: "2026-04-09"

---
---

# My Solution
~~~cpp
/*
// Definition for a Node.
class Node {
public:
    int val;
    vector<Node*> neighbors;
    Node() {
        val = 0;
        neighbors = vector<Node*>();
    }
    Node(int _val) {
        val = _val;
        neighbors = vector<Node*>();
    }
    Node(int _val, vector<Node*> _neighbors) {
        val = _val;
        neighbors = _neighbors;
    }
};
*/

class Solution {
public:
    Node* create(Node* node, vector<Node*>& created, unordered_set<int>& visited){
        if(!node){return node;}

        if(visited.count(node->val)){
            return created[node->val];
        }
        visited.insert(node->val);
        // cout<<node->val<<endl;

        Node* currNode = new Node(node->val);
        created[node->val] = currNode;
        
        for(auto n : node->neighbors){
            (currNode->neighbors).push_back(create(n, created, visited));
        }

        return currNode;
    }
    Node* cloneGraph(Node* node) {

        unordered_set<int> visited;
        vector<Node*> created(101);
        

        return create(node, created, visited);;
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Depth-First Search (DFS) with memoization.
*   **Optimality:** Suboptimal. The logic assumes node values are in the range $[1, 100]$ (due to the hardcoded `vector<Node*> created(101)`), which is a constraint-dependent assumption not guaranteed by the general problem definition.

## Complexity
*   **Time Complexity:** $O(V + E)$, where $V$ is the number of vertices and $E$ is the number of edges. Every node and edge is visited exactly once.
*   **Space Complexity:** $O(V)$ for the recursion stack, the `created` mapping, and the `visited` set.

## Efficiency Feedback
*   **Bottleneck:** The reliance on `vector<Node*> created(101)` makes the solution fragile. If a graph contains a node with value $> 100$, the code will trigger an out-of-bounds memory access (segmentation fault).
*   **Optimization:** Replace the `vector` and `unordered_set` with a single `unordered_map<Node*, Node*>`. This maps the original node pointer to its cloned counterpart, which handles arbitrary node values and avoids the need for a separate `visited` set.

## Code Quality
*   **Readability:** Moderate. The logic is clear, but the dependency on a fixed-size vector is a "hidden" assumption that hinders readability for general-purpose graph algorithms.
*   **Structure:** Moderate. The helper function `create` is well-placed, but the use of two separate data structures (`vector` and `unordered_set`) is redundant.
*   **Naming:** Good. `create` and `created` are descriptive, though `cloneNode` might be more precise.
*   **Concrete Improvements:**
    1.  Replace `unordered_set<int> visited` and `vector<Node*> created` with `unordered_map<Node*, Node*> clones`.
    2.  Check `if (clones.count(node))` to determine if a clone has already been created.
    3.  Remove the `101` limit to ensure robustness.

```cpp
// Suggested change:
unordered_map<Node*, Node*> clones;
Node* cloneGraph(Node* node) {
    if (!node) return nullptr;
    if (clones.count(node)) return clones[node];
    
    Node* copy = new Node(node->val);
    clones[node] = copy;
    for (Node* neighbor : node->neighbors) {
        copy->neighbors.push_back(cloneGraph(neighbor));
    }
    return copy;
}
```

---
---


# Question Revision
### Revision Report: Clone Graph

**Pattern:** Graph Traversal (DFS/BFS) with Hash Map

**Brute Force:**
Attempting to clone nodes without tracking visited nodes leads to infinite recursion/cycles. A naive approach might try to create new nodes during traversal, but without a lookup table, it is impossible to map original nodes to their cloned counterparts, resulting in duplicate or disconnected components.

**Optimal Approach:**
Use a hash map (`Map<Node, Node>`) to store the mapping from `originalNode` to `clonedNode`. Perform a DFS or BFS traversal; if the current node exists in the map, return the clone. Otherwise, clone the node, store it in the map, and recursively clone its neighbors.
*   **Time Complexity:** $O(V + E)$ where $V$ is vertices and $E$ is edges.
*   **Space Complexity:** $O(V)$ to store the clone mapping and the recursion stack/queue.

**The 'Aha' Moment:**
When the problem involves a cyclic or connected structure where you must replicate nodes while preserving references, a hash map acts as your "memory" to stop infinite loops and ensure 1:1 mapping.

**Summary:**
Always use a hash map as a visitation registry when cloning graph-like structures to prevent cycles and maintain reference identity.

---
