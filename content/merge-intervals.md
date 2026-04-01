---
title: "Merge Intervals"
slug: merge-intervals

---
---

# My Solution
~~~c
/**
 * Return an array of arrays of size *returnSize.
 * The sizes of the arrays are returned as *returnColumnSizes array.
 * Note: Both returned array and *columnSizes array must be malloced, assume caller calls free().
 */
int cmp(const void* a, const void* b) {
    int* x = *(int**)a;
    int* y = *(int**)b;
    return x[0] - y[0];
}

int** merge(int** intervals, int intervalsSize, int* intervalsColSize, int* returnSize, int** returnColumnSizes) {

    if(intervalsSize == 0){
        *returnSize = 0;
        return NULL;
    }

    qsort(intervals, intervalsSize, sizeof(int*), cmp);

    int** arr = (int**)malloc(sizeof(int*) * intervalsSize);
    for(int i = 0; i < intervalsSize; i++){
        arr[i] = (int*)malloc(sizeof(int) * 2);
    }

    int k = 0;
    arr[0][0] = intervals[0][0];
    arr[0][1] = intervals[0][1];

    for(int i = 1; i < intervalsSize; i++){
        if(intervals[i][0] <= arr[k][1]) {
            
            if(intervals[i][1] > arr[k][1]){
                arr[k][1] = intervals[i][1];
            }
        } else {
           
            k++;
            arr[k][0] = intervals[i][0];
            arr[k][1] = intervals[i][1];
        }
    }

    *returnSize = k + 1;

    *returnColumnSizes = (int*)malloc(sizeof(int) * (*returnSize));
    for(int i = 0; i < *returnSize; i++){
        (*returnColumnSizes)[i] = 2;
    }

    return arr;
}
~~~

# Submission Review
## Approach
*   **Technique:** Sorting followed by a single-pass linear scan (Greedy approach).
*   **Optimality:** Optimal. Sorting is necessary to process intervals in linear time.

## Complexity
*   **Time Complexity:** $O(N \log N)$ due to `qsort`, where $N$ is the number of intervals. The subsequent scan is $O(N)$.
*   **Space Complexity:** $O(N)$ to store the result set. Note that the memory allocation for `arr` is worst-case $O(N)$.

## Efficiency Feedback
*   **Memory Overhead:** The solution performs $O(N)$ individual `malloc` calls for the inner arrays. This can lead to heap fragmentation and overhead. Consider allocating one contiguous block of memory for all interval pairs if performance is critical.
*   **Redundancy:** The `returnColumnSizes` allocation is correct, but since every output interval is guaranteed to be size 2, this is effectively overhead.

## Code Quality
*   **Readability:** Good. The logic flow is standard and easy to follow.
*   **Structure:** Good. Input edge cases (empty array) are handled correctly.
*   **Naming:** Good. Variable names like `arr` and `k` are standard for this type of algorithm, though `result` or `merged` would be more descriptive than `arr`.
*   **Concrete Improvements:**
    1.  **Integer Overflow:** The `cmp` function uses `x[0] - y[0]`. While standard for small values, if the interval boundaries can be large (near `INT_MIN` or `INT_MAX`), this will overflow. Use `(x[0] > y[0]) - (x[0] < y[0])` for safety.
    2.  **Memory Management:** The current implementation does not explicitly handle the case where `intervals` contains individual pointer arrays. It assumes the caller passed a well-formed 2D array structure.
    3.  **Unused `intervalsColSize`:** The parameter `intervalsColSize` is ignored, which is acceptable since the problem defines the width as 2, but it should be noted.

---
---


# Question Revision
### Merge Intervals Revision Report

**Pattern:** Sorting + Linear Scan

**Brute Force:** 
For every interval, compare it against all other intervals to check for overlaps and merge, then repeat until no more merges are possible.
*   **Time Complexity:** $O(n^2)$
*   **Space Complexity:** $O(n)$ (for the output array)

**Optimal Approach:** 
1. Sort the intervals by their start times.
2. Initialize an empty list and add the first interval.
3. Iterate through the remaining intervals: if the current interval's start is $\le$ the last added interval's end, merge them by updating the end of the last added interval. Otherwise, append the current interval.
*   **Time Complexity:** $O(n \log n)$ due to sorting.
*   **Space Complexity:** $O(n)$ to store the merged intervals.

**The 'Aha' Moment:** 
The problem requires checking relationships between multiple ranges, and sorting by the start time guarantees that any potential overlaps will be adjacent in the sorted list.

**Summary:** 
Sort by start time to turn a global search problem into a local, sequential neighbor-comparison problem.

---
