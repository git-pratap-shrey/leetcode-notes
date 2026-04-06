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
*   **Technique:** The solution uses a **Search Space Reduction** technique (also known as the "Staircase Search"). By starting at the top-right corner, the algorithm eliminates either a row or a column in each iteration based on the comparison with the target.
*   **Optimality:** **Optimal.** This is the standard efficient approach for a matrix sorted both row-wise and column-wise.

## Complexity
*   **Time Complexity:** $O(M + N)$, where $M$ is the number of rows and $N$ is the number of columns. In the worst case, the algorithm traverses the entire height and width of the matrix.
*   **Space Complexity:** $O(1)$. It uses a constant amount of extra space.

## Efficiency Feedback
*   **Performance:** The implementation is highly efficient. It performs at most $M+N$ comparisons, which is the theoretical lower bound for this problem.
*   **Safety:** The code correctly handles the boundaries using `matrixSize` and `matrixColSize[0]`.

## Code Quality
*   **Readability:** **Good.** The logic is clean and easy to follow.
*   **Structure:** **Good.** It follows a standard iterative structure for 2D array traversal.
*   **Naming:** **Good.** Variable names (`row`, `col`) are intuitive and standard for matrix manipulation.
*   **Improvements:** 
    *   The code assumes `matrixSize` is the row count and `matrixColSize[0]` is the column count, which is consistent with LeetCode's C interface. However, ensure that `matrixColSize` is not NULL before accessing `matrixColSize[0]` if the input constraints allow for empty matrices.
    *   Consider adding a check for `matrix == NULL || matrixSize == 0 || matrixColSize == NULL` at the start to ensure robustness against edge cases.

---
---


# Question Revision
### Revision Report: Search a 2D Matrix II

**Pattern:** Search Space Reduction (Divide & Conquer / Two Pointers)

**Brute Force:** Iterate through every element in the matrix to find the target.
*   **Time:** $O(m \times n)$
*   **Space:** $O(1)$

**Optimal Approach:** Start from the **top-right** (or bottom-left) corner. If the current value is greater than the target, move left (column--); if smaller, move down (row++).
*   **Time:** $O(m + n)$
*   **Space:** $O(1)$

**The 'Aha' Moment:** The sorted property of both rows and columns implies that starting from a corner creates a monotonic path where one direction always increases and the other always decreases, allowing you to discard an entire row or column with every comparison.

**Summary:** Treat the matrix as a binary search tree rooted at the top-right corner to prune the search space linearly.

---
