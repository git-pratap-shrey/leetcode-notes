---
title: "Zigzag Conversion"
slug: zigzag-conversion
date: "2026-07-27"
---

# My Solution
~~~

~~~

# Submission Review
Please provide the code implementation. The `Code:` section of your request is currently empty, making it impossible to analyze the approach, complexity, or code quality.

---

# Question Revision
### Zigzag Conversion

**Pattern:** Simulation / Row-based Traversal

**Brute Force:** 
Initialize a 2D matrix of size `numRows` $\times$ $\lceil \frac{n}{numRows-1} \rceil$. Fill the matrix by simulating the zigzag coordinates and then iterate through the matrix to collect non-empty characters.

**Optimal Approach:**
*   **Logic:** Maintain a list of strings, where each index represents a row. Iterate through the input string, appending each character to the current row. Use a direction flag (boolean or integer) that flips whenever the index reaches the top row (0) or the bottom row (`numRows - 1`). Finally, concatenate all row strings.
*   **Time Complexity:** $O(n)$
*   **Space Complexity:** $O(n)$

**The 'Aha' Moment:** 
The zigzag motion is simply a periodic oscillation of the row index between $0$ and $numRows - 1$.

**Summary:** 
Simulate the process using an array of strings and a direction toggle to track the current row.

---