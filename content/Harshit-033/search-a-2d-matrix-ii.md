---
title: "Search a 2D Matrix II"
slug: search-a-2d-matrix-ii
date: "2026-04-06"

---
---

# My Solution
~~~c


bool searchMatrix(int** matrix, int matrixSize, int* matrixColSize, int target){

    int col=matrixColSize[0]-1;
    int row=0;

    while(row<matrixSize && col>=0){
        if(matrix[row][col]==target){
            return true;
        }

        if(matrix[row][col]<target){
            row++;
        }
        else{
            col--;
        }
    }

    return false;


}
~~~

# Submission Review
## Approach
*   **Technique:** The solution uses a **Search Space Reduction** technique (also known as the "Staircase Search"). By starting at the top-right corner of the matrix, the search reduces to a linear path through the matrix.
*   **Optimality:** This is the **optimal** approach for this problem, as it achieves $O(m + n)$ time complexity, which is the theoretical lower bound for a sorted 2D matrix where rows and columns are sorted independently.

## Complexity
*   **Time Complexity:** $O(m + n)$, where $m$ is the number of rows and $n$ is the number of columns. In the worst case, the algorithm traverses the entire height and width of the matrix.
*   **Space Complexity:** $O(1)$, as it uses a constant amount of extra space.

## Efficiency Feedback
*   **Runtime:** The performance is highly efficient. No memory allocation occurs, and the loop terminates as soon as the target is found or the bounds are exceeded.
*   **Optimization:** No meaningful optimizations are required. The current implementation is as efficient as possible for the given constraints.

## Code Quality
*   **Readability:** **Good**. The logic is concise and follows standard patterns for this specific algorithm.
*   **Structure:** **Good**. The use of a `while` loop with clear termination conditions makes the flow easy to follow.
*   **Naming:** **Moderate**. While `row` and `col` are descriptive, using `m` and `n` or `numRows` and `numCols` is common practice in C for matrix dimensions.
*   **Concrete Improvements:** 
    *   The code assumes the matrix is not empty and that `matrixColSize` is valid. While typical in competitive programming, adding a defensive check `if (matrixSize == 0 || matrixColSize == NULL)` would improve robustness in production code.
    *   The `matrixColSize` access assumes all rows have the same number of columns (or that only the first is needed), which is correct based on the problem constraints for this specific problem (LeetCode #240).

---
---


# Question Revision
### Search a 2D Matrix II

**Pattern:** Search Space Reduction (Staircase Search)

**Brute Force:** Iterate through every element in the matrix until the target is found.
*   **Time:** $O(m \times n)$
*   **Space:** $O(1)$

**Optimal Approach:** Start at the **top-right corner** (or bottom-left). If the current value is greater than the target, move left (column decreases); if less than the target, move down (row increases). This effectively eliminates an entire row or column at each step.
*   **Time:** $O(m + n)$
*   **Space:** $O(1)$

**The 'Aha' Moment:** The sorted property of both rows and columns creates a monotonic path where moving in one direction consistently increases the value and the other decreases it, allowing you to treat the matrix as a binary search tree.

**Summary:** Whenever a matrix is sorted both row-wise and column-wise, treat the corner as a decision point to discard a full row or column in $O(m+n)$.

---
