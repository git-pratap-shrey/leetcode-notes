---
title: "Maximum Width of Binary Tree"
slug: maximum-width-of-binary-tree
date: "2026-10-23"
---

# My Solution
~~~cpp
class Solution {
public:
    int minOperations(string s) {
        int n=s.size();
        string z=s;
        sort(z.begin(),z.end());
        if(z==s){
            return 0;
        }
        else if(z[0]==s[0] || z[n-1]==s[n-1]){
            return 1;
        }
        else if(n<=2){
            return -1;
        }
        else if((z[0]==s[n-1] && z[0]!=z[1]) && (s[0]==z[n-1] && z[n-1]!=z[n-2])){
            return 3;
        }
        else{
            return 2;
        }
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Case-based conditional logic (Heuristic/Greedy).
- **Optimality**: **Incorrect**. The provided code solves a problem related to string sorting/manipulation (likely "Minimum Operations to Sort a String"), but it does **not** address the problem statement provided: "Maximum Width of Binary Tree". The logic is entirely unrelated to binary trees, breadth-first search, or indexing.

## Complexity
- **Time Complexity**: $O(N \log N)$ due to `std::sort`, where $N$ is the length of the string.
- **Space Complexity**: $O(N)$ to store the copy of the string `z`.

## Efficiency Feedback
- The code is efficient for the logic it implements, but since the logic is irrelevant to the actual problem (Maximum Width of Binary Tree), the efficiency is moot.
- Bottleneck: Sorting the string takes $O(N \log N)$, though $O(N)$ is possible if only counting characters.

## Code Quality
- **Readability**: Poor. The logic consists of arbitrary `if-else` conditions without comments explaining the reasoning behind the return values (0, 1, 2, 3).
- **Structure**: Moderate. It is a simple linear flow, but it fails to handle the actual problem constraints or requirements.
- **Naming**: Poor. Variable names `s` and `z` are non-descriptive.
- **Improvements**: The entire implementation must be replaced with a BFS-based approach using positional indexing (e.g., `2 * i + 1` and `2 * i + 2`) to calculate the width of a binary tree.

---

# Question Revision
# Revision Report: Maximum Width of Binary Tree

- **Pattern:** Breadth-First Search (BFS) + Heap-like Indexing.
- **Brute Force:** Use BFS to traverse level by level, but store actual node references. To calculate width, you would need to manually count every null node between the leftmost and rightmost non-null nodes at each level. This is inefficient as the number of nulls can grow exponentially ($2^h$).
- **Optimal Approach:** 
    - Assign a unique index to each node based on its position in a complete binary tree: if a parent is at index $i$, its left child is $2i$ and its right child is $2i + 1$.
    - Perform a BFS traversal. For each level, record the index of the first and last node.
    - The width of the level is calculated as `last_index - first_index + 1`.
    - **Time Complexity:** $O(n)$ — each node is visited once.
    - **Space Complexity:** $O(w)$ — where $w$ is the maximum width of the tree (queue size).
- **The 'Aha' Moment:** The requirement to count "null nodes" suggests treating the tree as a complete binary tree array, where indices explicitly define the distance between nodes.
- **Summary:** Use BFS with heap-style indexing ($2i, 2i+1$) to calculate the distance between the first and last nodes of each level.

---