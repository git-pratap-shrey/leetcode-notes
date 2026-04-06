---
title: "Find a Peak Element II"
slug: find-a-peak-element-ii
date: "2026-04-06"

---
---

# My Solution
~~~c
int* findPeakGrid(int** mat, int matSize, int* matColSize, int* returnSize) {
    *returnSize = 2;
    int* arr = (int*)malloc(sizeof(int) * 2);

    int low = 0;
    int high = matColSize[0] - 1;

    while (low <= high) {
        int mid = (low + high) / 2;

        
        int maxRow = 0;
        for (int i = 0; i < matSize; i++) {
            if (mat[i][mid] > mat[maxRow][mid]) {
                maxRow = i;
            }
        }

        int left = (mid > 0) ? mat[maxRow][mid - 1] : -1;
        int right = (mid < matColSize[0] - 1) ? mat[maxRow][mid + 1] : -1;

        
        if (mat[maxRow][mid] > left && mat[maxRow][mid] > right) {
            arr[0] = maxRow;
            arr[1] = mid;
            return arr;
        }
        else if (mat[maxRow][mid] < right) {
            low = mid + 1;  
        }
        else {
            high = mid - 1;  
        }
    }

    return arr;
}
~~~

# Submission Review
## Approach
*   **Technique:** Binary search on the columns of the matrix combined with finding the maximum element in the selected column.
*   **Optimality:** Optimal. By finding the global maximum of a column and comparing it to its horizontal neighbors, the algorithm guarantees finding a peak in $O(m \log n)$ time, where $m$ is the number of rows and $n$ is the number of columns.

## Complexity
*   **Time Complexity:** $O(m \log n)$, where $m$ is `matSize` and $n$ is `matColSize`.
*   **Space Complexity:** $O(1)$ (excluding the returned array), as the search is performed in-place.

## Efficiency Feedback
*   **Strengths:** The use of binary search significantly reduces the search space compared to a linear scan $O(m \times n)$.
*   **Potential Bottleneck:** The loop to find the `maxRow` iterates through all rows for every binary search step. This is necessary for correctness to ensure the peak property holds, and given the constraints of the problem, it is efficient.
*   **Safety:** The `returnSize` and `arr` allocation are handled correctly for C-style array returns.

## Code Quality
*   **Readability:** Good. The logic is concise and follows standard binary search patterns.
*   **Structure:** Good. The separation of finding the column max and performing the binary search decision is logical.
*   **Naming:** Good. Variable names (`maxRow`, `low`, `high`, `mid`) are intuitive and standard.
*   **Concrete Improvements:**
    *   **Memory Safety:** The code does not check if `malloc` succeeds. In competitive programming, this is often omitted, but for production-grade C, it should be checked.
    *   **Logic:** The current logic assumes `matColSize[0]` is consistent for all rows. While typical for matrix problems, explicitly using `matColSize[maxRow]` when accessing neighbors or bounds would be safer if the matrix were jagged (though the problem implies a standard grid).
    *   **Edge Case:** The initialization of `maxRow` to 0 is correct, but ensure the matrix is guaranteed to have at least one element.

---
---


# Question Revision
### Revision Report: Find a Peak Element II

**Pattern:** Binary Search on Grid (2D Binary Search)

**Brute Force:**
Iterate through every cell $(i, j)$ and check if it is strictly greater than its neighbors. 
*   **Time Complexity:** $O(n \times m)$
*   **Space Complexity:** $O(1)$

**Optimal Approach:**
Perform binary search on the columns (or rows). In a chosen column, find the global maximum row index. Since this maximum element is greater than its vertical neighbors by definition, you only need to compare it to its horizontal neighbors to decide whether to move left or right. If the neighbor is greater, a peak must exist in that direction.
*   **Time Complexity:** $O(n \log m)$ where $n$ is the number of rows and $m$ is the number of columns.
*   **Space Complexity:** $O(1)$

**The 'Aha' Moment:**
When the problem asks for *any* valid peak in a massive search space where local information determines the direction of the global optimum, Binary Search is the tool to prune half the search space.

**Summary:**
In a 2D grid, performing binary search on columns and greedily following the direction of the largest neighbor guarantees you will always converge on a local peak in logarithmic time.

---
