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
- **Technique:** Sorting followed by a greedy linear scan.
- **Optimality:** Optimal. The problem requires $O(N \log N)$ time due to the necessity of sorting, and the linear scan processes each interval exactly once.

## Complexity
- **Time Complexity:** $O(N \log N)$, where $N$ is `intervalsSize`. The `qsort` dominates the runtime.
- **Space Complexity:** $O(N)$ for the output array `arr` and column size tracking.

## Efficiency Feedback
- **Runtime:** Very efficient. Memory allocation is proportional to the input size, which is unavoidable. 
- **Optimization:** You could technically reuse the input array memory to perform the merge in-place if the problem constraints allowed modifying the input. However, since the caller expects a new structure for the return value, the current approach is standard.

## Code Quality
- **Readability:** Good. The logic is clean and easy to follow.
- **Structure:** Good. Standard C implementation for competitive programming memory requirements.
- **Naming:** Good. The variable names `arr` and `k` are standard for this algorithm.
- **Concrete Improvements:**
    - **Robustness:** The comparator function `x[0] - y[0]` can cause integer overflow if interval values are near `INT_MIN` or `INT_MAX`. Use `(x[0] > y[0]) - (x[0] < y[0])` to safely handle all integer ranges.
    - **Memory Allocation:** If `intervalsSize` is large, repeated `malloc` calls for `arr[i]` can be slow. A single `malloc` for the entire 2D structure (or a block for the inner arrays) would be slightly more cache-friendly.
    - **Minor:** The `if(intervalsSize == 0)` check is correct, but consider initializing `*returnColumnSizes` to `NULL` to prevent dangling pointers if it were ever accessed incorrectly.

---
---


# Question Revision
### Revision Report: Merge Intervals

**Pattern:** Sorting + Greedy (Sweep Line)

**Brute Force:** 
Compare every interval with every other interval to check for overlaps, repeatedly merging until no overlaps remain. 
*   **Time:** $O(n^2)$
*   **Space:** $O(n)$ (to store the result)

**Optimal Approach:**
1.  **Sort** the intervals by their start times ($O(n \log n)$).
2.  Iterate through the sorted list, maintaining a `current_interval`.
3.  If the next interval's start is $\le$ the `current_interval`'s end, merge them by updating the `current_interval`'s end to the maximum of both ends.
4.  Otherwise, push the `current_interval` to the results and start a new one.
*   **Time:** $O(n \log n)$ due to sorting.
*   **Space:** $O(n)$ or $O(\log n)$ depending on the sorting implementation.

**The 'Aha' Moment:**
When a problem involves overlapping ranges, sorting by the start time transforms a chaotic search space into a linear sequence where you only ever need to compare the "current" interval with the "next" one.

**Summary:** 
Always sort intervals by start time first, then greedily track the "end" boundary to determine if the next interval extends your current range or starts a new one.

---
