---
title: "Find the Degree of Each Vertex"
slug: find-the-degree-of-each-vertex
date: "2026-07-27"
---

# My Solution
~~~

~~~

# Submission Review
No code was provided for analysis. Please provide the source code to receive a technical review.

---

# Question Revision
### Revision Report: Find the Degree of Each Vertex

**Pattern:** Frequency Counting (Hash Map / Array)

**Brute Force:** 
For every unique vertex in the graph, iterate through the entire edge list to count how many times that vertex appears. 
- Time: $O(V \cdot E)$
- Space: $O(V)$

**Optimal Approach:** 
Initialize a frequency array (or map) of size $V$. Iterate through the `edges` list exactly once; for every edge `[u, v]`, increment the count for both `u` and `v`.
- Time: $O(E)$
- Space: $O(V)$

**The 'Aha' Moment:** 
The "degree" of a vertex is mathematically equivalent to the number of times that vertex appears across all pairs in the edge list.

**Summary:** 
Map each vertex to a counter and increment it for every edge endpoint encountered in a single linear scan.

---