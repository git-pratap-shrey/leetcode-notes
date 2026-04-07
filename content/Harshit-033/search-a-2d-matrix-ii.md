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
*   **Technique:** Staircase search (Greedy/Two-pointer approach).
*   **Optimality:** Optimal. It utilizes the property that rows and columns are sorted to discard an entire row or column in each iteration.

## Complexity
*   **Time Complexity:** $O(M + N)$, where $M$ is the number of rows and $N$ is the number of columns.
*   **Space Complexity:** $O(1)$, as it uses constant extra space.

## Efficiency Feedback
*   **Performance:** Highly efficient. The algorithm performs at most $M+N$ comparisons, which is the theoretical lower bound for this problem.
*   **Memory:** Excellent; no additional memory allocation is required.

## Code Quality
*   **Readability:** Good. The logic is concise and easy to follow.
*   **Structure:** Good. The implementation correctly handles boundary conditions for the search space.
*   **Naming:** Moderate. `row` and `col` are standard, though `matrixSize` refers to the number of rows, which could be named `m` or `rows` for better clarity.
*   **Improvements:**
    *   **Input Validation:** The code assumes `matrixSize > 0` and `matrixColSize` exists. Adding a check for `matrix == NULL` or `matrixSize == 0` would make the function more robust.
    *   **Pointer Const-correctness:** The `matrix` parameter should be `int** const matrix` since the matrix itself is not being modified.

---
---


# Question Revision
### Revision Report: Search a 2D Matrix II

**Pattern:** Search Space Reduction / Two Pointers

**Brute Force:**
Iterate through every element in the matrix and check for the target.
*   **Time:** $O(m \times n)$
*   **Space:** $O(1)$

**Optimal Approach:**
Start at the **top-right** corner (or bottom-left) of the matrix. If the current value is greater than the target, move left (decrease column). If the current value is less than the target, move down (increase row). Because rows and columns are sorted independently, moving in these directions eliminates an entire row or column from the search space in each step.
*   **Time:** $O(m + n)$
*   **Space:** $O(1)$

**The 'Aha' Moment:**
When rows and columns are sorted but the matrix is not fully sorted like a list, treating the top-right corner as a BST root—where moving left decreases value and moving down increases it—transforms the search into a simple path-finding problem.

**Summary:**
Whenever you face a grid sorted by both rows and columns, use a corner-pointer strategy to prune the search space linearly rather than treating it like a standard 2D array.

---
