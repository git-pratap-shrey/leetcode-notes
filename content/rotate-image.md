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
*   **Technique:** In-place matrix manipulation using two steps: transposition (swapping `matrix[i][j]` with `matrix[j][i]`) followed by a horizontal flip (reversing each row).
*   **Optimality:** Optimal. This is the standard in-place algorithm for rotating an $N \times N$ matrix by 90 degrees clockwise.

## Complexity
*   **Time Complexity:** $O(N^2)$, where $N$ is the side length of the matrix. Each element is visited a constant number of times.
*   **Space Complexity:** $O(1)$, as the rotation is performed in-place.

## Efficiency Feedback
*   **Performance:** The runtime is as efficient as possible for an in-place transformation.
*   **Optimization:** The use of a temporary variable for swapping is standard and efficient. No meaningful further optimizations are possible without violating the $O(1)$ space requirement.

## Code Quality
*   **Readability:** Good. The logic is segmented into two clear phases: transposition and row reversal.
*   **Structure:** Good. The use of nested loops for the transpose and a `while` loop for the reversal is idiomatic and clean.
*   **Naming:** Moderate. Variables `a` and `b` are generic; using descriptive names like `left` and `right` would improve clarity.
*   **Concrete Improvements:**
    *   **Input Validation:** The code assumes a square matrix (`matrixSize == matrixColSize[0]`). While typical for this problem, explicitly checking or asserting this is safer.
    *   **Loop Constraints:** `int col = matrixColSize[0];` is fine, but since it is guaranteed to be a square matrix, `matrixSize` could be used directly to improve consistency.
    *   **Variable Scope:** The declarations of `a` and `b` can be moved inside the `for` loop to reduce scope.

```c
// Recommended minor refactor for readability
for (int i = 0; i < matrixSize; i++) {
    int left = 0, right = matrixSize - 1;
    while (left < right) {
        int temp = matrix[i][left];
        matrix[i][left] = matrix[i][right];
        matrix[i][right] = temp;
        left++;
        right--;
    }
}
```

---
---


# Question Revision
### Revision Report: Rotate Image

**Pattern:** Matrix Manipulation / In-place Transformation

**Brute Force:** 
Create an auxiliary $n \times n$ matrix. Map each element at `matrix[i][j]` to the new position `matrix[j][n - 1 - i]`. 
*   **Time:** $O(n^2)$
*   **Space:** $O(n^2)$

**Optimal Approach:** 
Perform the rotation in two distinct steps to avoid auxiliary storage:
1. **Transpose:** Swap `matrix[i][j]` with `matrix[j][i]` (reflect across the main diagonal).
2. **Reverse Rows:** Reverse each row individually (reflect across the vertical midline).
*   **Time:** $O(n^2)$ — We visit each element a constant number of times.
*   **Space:** $O(1)$ — Transformation is done in-place.

**The 'Aha' Moment:** 
Recognizing that a 90-degree clockwise rotation is mathematically equivalent to a transpose followed by a horizontal reflection.

**Summary:** 
To rotate a matrix in-place, transpose it first, then flip it horizontally.

---
