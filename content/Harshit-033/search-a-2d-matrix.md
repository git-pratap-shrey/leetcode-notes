---
title: "Search a 2D Matrix"
slug: search-a-2d-matrix

---
---

# My Solution
~~~c
bool searchMatrix(int** matrix, int matrixSize, int* matrixColSize, int target) {
    int m=matrixColSize[0];
    
    int low=0;
    int high=(matrixSize*m)-1;
    int r,c,mid;
    while(low<=high){
        mid=(low+high)/2;
        r=mid/m;
        c=mid%m;
        if(matrix[r][c]==target) return true;

        if(matrix[r][c]<target){
            low=mid+1;
        }
        else{
            high=mid-1;
        }
    }
    return false;
    
}
~~~

# Submission Review
## Approach
*   **Technique:** Binary Search on a flattened 2D array index.
*   **Optimality:** Optimal. The matrix has row-wise and column-wise sorted properties that allow treating it as a virtual sorted 1D array of size $M \times N$.

## Complexity
*   **Time Complexity:** $O(\log(M \times N))$, where $M$ is `matrixSize` and $N$ is `matrixColSize[0]`. This is the theoretical lower bound for this search problem.
*   **Space Complexity:** $O(1)$, as it uses a constant amount of extra space.

## Efficiency Feedback
*   **Runtime:** Highly efficient. No unnecessary overhead or extra memory allocation.
*   **Optimization:** Using `mid = low + (high - low) / 2` is safer than `(low + high) / 2` to prevent potential integer overflow if `low + high` exceeds the maximum value of a signed 32-bit integer. Given constraints of standard matrix problems, this is unlikely but recommended for robustness.

## Code Quality
*   **Readability:** Good. The logic is concise and follows standard binary search patterns.
*   **Structure:** Good. The flow is logical and the exit conditions are correct.
*   **Naming:** Moderate. `r` and `c` are acceptable, but `rows` and `cols` (or `row`, `col`) would improve clarity. `m` is ambiguous (usually implies number of rows, but here represents number of columns).
*   **Concrete Improvements:**
    *   **Overflow protection:** Use `mid = low + (high - low) / 2`.
    *   **Clarity:** Rename `m` to `numCols` to clearly distinguish it from the number of rows (`matrixSize`).
    *   **Safety:** While not strictly required by the prompt, verify `matrix` and `matrixColSize` pointers are not `NULL` if this were production code.

---
---


# Question Revision
### Revision Report: Search a 2D Matrix

**Pattern:** Binary Search (Flattened View)

**Brute Force:** Iterate through every element in the matrix ($O(m \times n)$ time) or perform a linear search on each row ($O(m \times n)$ time).

**Optimal Approach:** Treat the $m \times n$ matrix as a sorted 1D array of length $N = m \times n$. Use standard binary search by mapping 1D index `mid` back to 2D coordinates: `row = mid / n`, `col = mid % n`.
*   **Time Complexity:** $O(\log(m \times n))$
*   **Space Complexity:** $O(1)$

**The 'Aha' Moment:** The fact that the entire matrix is sorted globally (the last element of row $i$ is smaller than the first element of row $i+1$) allows you to bypass the 2D structure entirely and treat the indices as a continuous, sorted range.

**Summary:** Whenever a 2D matrix is strictly sorted across rows, map the 1D search space to 2D coordinates to unlock logarithmic search time.

---
