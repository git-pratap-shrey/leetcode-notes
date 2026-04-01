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
*   **Technique:** In-place matrix transformation. The code uses two steps:
    1.  **Transpose:** Swapping `matrix[i][j]` with `matrix[j][i]`.
    2.  **Reverse Rows:** Reversing each row individually.
*   **Optimality:** This is the standard, optimal $O(1)$ space approach for rotating a square matrix by 90 degrees clockwise.

## Complexity
*   **Time Complexity:** $O(N^2)$, where $N$ is the side length of the matrix. Each element is visited a constant number of times.
*   **Space Complexity:** $O(1)$, as the rotation is performed in-place.

## Efficiency Feedback
*   **Runtime:** The efficiency is optimal for this problem. The code minimizes memory access overhead.
*   **Memory:** No auxiliary data structures are used, making it highly memory-efficient.
*   **Constraint Note:** The code assumes a square matrix (`matrixSize` rows and `matrixColSize[0]` columns where `matrixSize == matrixColSize[0]`), which is consistent with the standard LeetCode "Rotate Image" problem.

## Code Quality
*   **Readability:** Good. The logic is divided into two distinct, clear steps.
*   **Structure:** Good. Simple loops and clear swap logic. 
*   **Naming:** Moderate. Variables `a` and `b` are generic; `left` and `right` would be more descriptive for the pointers used during the row reversal.
*   **Concrete Improvements:**
    *   **Loop Constraints:** In the transpose step, starting `j` from `i` is correct; however, ensure the logic handles non-square inputs gracefully if that were ever a requirement (though not required here).
    *   **Declarations:** The variables `a` and `b` are declared outside the second loop structure; they could be moved inside the `for` loop scope for better C coding style.
    *   **Header:** Consider adding `const` to `matrixColSize` parameters if they are not meant to be modified, although not strictly necessary for this logic.

---
---


# Question Revision
### Revision Report: Rotate Image

**Pattern:** Matrix Manipulation / In-place Transformation

**Brute Force:** 
Create a new $n \times n$ matrix. Map each element at `matrix[i][j]` to the new position `matrix[j][n - 1 - i]`. 
*   **Time:** $O(n^2)$
*   **Space:** $O(n^2)$

**Optimal Approach:** 
Perform the rotation in two distinct steps to achieve an in-place transformation:
1.  **Transpose:** Swap `matrix[i][j]` with `matrix[j][i]` (reflect across the main diagonal).
2.  **Reverse:** Reverse each individual row horizontally.
*   **Time:** $O(n^2)$ (each element is touched constant times).
*   **Space:** $O(1)$ (in-place).

**The 'Aha' Moment:** 
Recognizing that a 90-degree clockwise rotation is mathematically equivalent to a matrix transpose followed by a horizontal row reflection.

**Summary:** 
To rotate a matrix in-place, transpose it first, then reverse its rows.

---
