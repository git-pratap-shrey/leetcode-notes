---
title: "Rotate Image"
slug: rotate-image

---
---

# My Solution
~~~c
void rotate(int** matrix, int matrixSize, int* matrixColSize) {
    int temp;
    int col=matrixColSize[0];
    for(int i=0;i<matrixSize;i++){
        for(int j=i;j<col;j++){
            temp=matrix[j][i];
            matrix[j][i]=matrix[i][j];
            matrix[i][j]=temp;
        }
    }
    int a,b;
    for(int i=0;i<matrixSize;i++){
        a=0,b=col-1;
        while(a<b){
            temp=matrix[i][a];
            matrix[i][a]=matrix[i][b];
            matrix[i][b]=temp;
            a++;
            b--;
        }
    }  
    
}
~~~

# Submission Review
## Approach
*   **Technique:** In-place matrix transformation via two distinct steps:
    1.  **Transposition:** Swapping elements across the main diagonal (`matrix[i][j]` with `matrix[j][i]`).
    2.  **Reflection:** Reversing each row horizontally.
*   **Optimal:** Yes. This is the standard, memory-efficient algorithm for rotating a square matrix 90 degrees clockwise in-place.

## Complexity
*   **Time Complexity:** $O(N^2)$, where $N$ is the side length of the matrix. Each element is visited a constant number of times.
*   **Space Complexity:** $O(1)$. No additional data structures are used, satisfying the in-place constraint.

## Efficiency Feedback
*   The implementation is highly efficient. It avoids redundant allocations and performs the minimum number of swaps required to achieve the rotation.
*   Accessing `matrixColSize[0]` is safe given the problem constraints (square matrix), though note that `matrixSize` is used for the row count, which is correct.

## Code Quality
*   **Readability:** Good. The logic is clearly separated into two logical passes (transpose, then reverse).
*   **Structure:** Good. Clean use of loops and standard swap logic.
*   **Naming:** Moderate. `a` and `b` are acceptable for pointers in a swap, but `left` and `right` would be more descriptive.
*   **Concrete Improvements:**
    *   **Loop bounds:** The logic is correct, but ensure that the input is indeed square; the current code assumes `matrixSize == matrixColSize[0]`.
    *   **Syntactic style:** You could declare `int a, b;` inside the loop for better scope management, though this is a minor preference. 
    *   **Robustness:** While not strictly necessary for competitive programming, adding an assertion for `matrixSize == matrixColSize[0]` could help catch invalid inputs during debugging.

---
---


# Question Revision
### Revision Report: Rotate Image

**Pattern:** Matrix In-Place Transformation

**Brute Force:**
Create a new $n \times n$ matrix. Iterate through the original matrix and place element `matrix[i][j]` into `new_matrix[j][n - 1 - i]`. 
*   **Time Complexity:** $O(n^2)$
*   **Space Complexity:** $O(n^2)$

**Optimal Approach:**
Perform the rotation in two steps:
1.  **Transpose:** Swap `matrix[i][j]` with `matrix[j][i]` for all $j > i$.
2.  **Reverse Rows:** Reverse each row in the matrix.
*   **Time Complexity:** $O(n^2)$ (each cell is visited twice).
*   **Space Complexity:** $O(1)$ (in-place modification).

**The 'Aha' Moment:**
When a matrix transformation requires "in-place" updates, look to decompose the movement into standard linear algebra operations like transposing and reversing.

**Summary:**
To rotate a matrix 90 degrees clockwise, transpose it first, then reverse each row.

---
