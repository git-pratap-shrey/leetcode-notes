---
title: "Find the Degree of Each Vertex"
slug: find-the-degree-of-each-vertex
date: "2026-06-14"
---

# My Solution
~~~

~~~

# Submission Review
No code was provided for analysis. Please provide the source code you would like me to review.

---

# Question Revision
### Revision Report: Find the Degree of Each Vertex

**Pattern:** Frequency Mapping (Counting)

**Brute Force:** 
Iterate through every possible vertex, and for each one, scan the entire edge list to count occurrences. 
Time: $O(V \cdot E)$

**Optimal Approach:** 
Initialize a frequency array or hash map. Traverse the edge list exactly once; for every edge $(u, v)$, increment the count for both vertex $u$ and vertex $v$.
- **Time Complexity:** $O(E)$
- **Space Complexity:** $O(V)$

**The 'Aha' Moment:** 
The degree of a vertex is mathematically equivalent to the number of times that vertex ID appears across all pairs in the edge list.

**Summary:** 
Use a single-pass frequency map to tally edge endpoints for each vertex.

---