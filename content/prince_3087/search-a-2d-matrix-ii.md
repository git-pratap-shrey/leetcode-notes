---
title: "Search a 2D Matrix II"
slug: search-a-2d-matrix-ii
date: "2026-06-06"
---

# My Solution
~~~

~~~

# Submission Review
No code was provided for analysis. Please provide the implementation and the language used to receive a technical review.

---

# Question Revision
### Search a 2D Matrix II

**Pattern:** Two Pointers (Staircase Search)

**Brute Force:** Iterate through every cell using nested loops to check for the target.
- **Complexity:** Time: $O(m \times n)$ | Space: $O(1)$

**Optimal Approach:** Start at the **top-right corner**. Since rows are sorted left-to-right and columns are sorted top-to-bottom, the current element acts as a decision node:
- If `matrix[row][col] > target`: The entire current column can be discarded (move left).
- If `matrix[row][col] < target`: The entire current row can be discarded (move down).
- Repeat until the target is found or boundaries are exceeded.

- **Complexity:** Time: $O(m + n)$ | Space: $O(1)$

**The 'Aha' Moment:** The dual-sorting (rows and columns) allows the top-right (or bottom-left) corner to function as a root of a Binary Search Tree, where one direction strictly increases and the other strictly decreases.

**Summary:** Treat the top-right corner as a pivot to prune one row or one column per step.

---