### Revision Report: Spiral Matrix

**Pattern:** Simulation / Boundary Contraction

**Brute Force:** 
Maintain a `visited` boolean matrix of the same size. Traverse in the current direction until hitting a boundary or a visited cell, then rotate 90 degrees clockwise (Right → Down → Left → Up). 
*   **Complexity:** $O(n)$ where $n$ is the total number of elements.

**Optimal Approach:** 
Maintain four boundaries (`top`, `bottom`, `left`, `right`). Iterate through the layers of the matrix, shrinking the boundaries inward after each edge traversal. This eliminates the need for extra space or a `visited` set.
*   **Complexity:** $O(n)$ time (visit each element once) and $O(1)$ extra space (excluding the output array).

**The 'Aha' Moment:** 
The requirement to traverse "inward" while constantly hitting constraints (boundaries) signals that managing dynamic limit variables is cleaner than tracking visited nodes.

**Summary:** 
Think of it as peeling an onion: process the current outer boundary, shrink the limits, and repeat until the shell is exhausted.
