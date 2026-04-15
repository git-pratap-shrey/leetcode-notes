---
title: "Spiral Matrix"
slug: spiral-matrix
date: "2026-04-15"
---

# My Solution
~~~

~~~

# Submission Review
Please provide the code you would like me to analyze. The `Code:` section of your request is currently empty.

---

# Question Revision
### Spiral Matrix

**Pattern:** Simulation / Boundary Management

**Brute Force:** Use a `visited` boolean matrix to track seen cells and a direction array to handle turns when hitting a boundary or a visited cell.

**Optimal Approach:** 
Maintain four pointers: `top`, `bottom`, `left`, and `right`. Traverse the perimeter in a cycle (Right $\to$ Down $\to$ Left $\to$ Up), incrementing/decrementing the respective boundary after each side is completed. Continue until `top > bottom` or `left > right`.

*   **Time Complexity:** $O(M \times N)$ — every element is visited exactly once.
*   **Space Complexity:** $O(1)$ — excluding the output array.

**The 'Aha' Moment:** The requirement to move in a fixed sequence of directions while the "available" area shrinks suggests contracting boundaries.

**Summary:** Use four boundary pointers and shrink them inward after completing each directional traversal.

---