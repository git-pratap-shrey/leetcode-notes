---
title: "Set Matrix Zeroes"
slug: set-matrix-zeroes
date: "2026-04-14"
---

# My Solution
~~~

~~~

# Submission Review
Please provide the code you would like me to analyze. No code was included in your request.

---

# Question Revision
### Set Matrix Zeroes

**Pattern:** In-place State Tracking

**Brute Force:** 
Create a copy of the matrix. Iterate through the original; whenever a `0` is encountered, mark the entire row and column as `0` in the copy to avoid "cascading" zeros.
- **Time:** $O(m \cdot n)$
- **Space:** $O(m \cdot n)$

**Optimal Approach:** 
Repurpose the first row and first column of the matrix as markers to track which rows and columns need to be zeroed. Use a single boolean variable to track if the first column itself needs to be zeroed (since `matrix[0][0]` is shared).
1. Scan the matrix; if `matrix[i][j] == 0`, set `matrix[i][0] = 0` and `matrix[0][j] = 0`.
2. Iterate backwards (or skip the first row/col) to update cells based on the markers.
3. Update the first row and column last.
- **Time:** $O(m \cdot n)$
- **Space:** $O(1)$

**The 'Aha' Moment:** 
The requirement for $O(1)$ space suggests that the matrix itself must store the state of which rows and columns are "dirty."

**Summary:** Use the matrix's first row and column as flag arrays to track zeros in-place.

---