---
title: "All Nodes Distance K in Binary Tree"
slug: all-nodes-distance-k-in-binary-tree
date: "2026-08-02"
---

# My Solution
~~~

~~~

# Submission Review
Please provide the code you would like me to analyze. The **Code** and **Language** sections in your request were empty. Once provided, I will analyze it for correctness, efficiency, and quality according to the specified criteria.

---

# Question Revision
### All Nodes Distance K in Binary Tree

**Pattern:** Graph Traversal (BFS) / Tree-to-Graph Conversion

**Brute Force:** 
Perform a DFS from the root to find the target, then for every node in the tree, calculate the shortest distance to the target using a separate traversal. This results in redundant computations and high time complexity.

**Optimal Approach:**
1. **Parent Mapping:** Use a DFS to populate a hash map where each node maps to its parent, effectively turning the directed binary tree into an undirected graph.
2. **BFS Traversal:** Starting from the `target` node, perform a Breadth-First Search (BFS). Use a `visited` set to prevent cycles.
3. **Distance Tracking:** The BFS queue tracks nodes level by level. When the current level equals $K$, all nodes remaining in the queue are the result.

- **Time Complexity:** $O(n)$ to build the parent map and $O(n)$ for BFS traversal.
- **Space Complexity:** $O(n)$ to store the parent map and the visited set.

**The 'Aha' Moment:** 
The requirement to move "up" from a child to a parent violates the standard binary tree structure, signaling the need to convert the tree into an undirected graph.

**Summary:** 
Map parent pointers to treat the tree as an undirected graph, then use BFS to radiate outward from the target to distance $K$.

---