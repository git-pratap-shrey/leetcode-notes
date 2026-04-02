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
*   **Optimality:** Optimal. Sorting is required to process intervals in linear order, and merging can be done in one pass thereafter.

## Complexity
*   **Time Complexity:** $O(N \log N)$ due to `qsort`, where $N$ is `intervalsSize`. The merging pass is $O(N)$.
*   **Space Complexity:** $O(N)$ to store the result array (excluding the input modification).

## Efficiency Feedback
*   **Memory Overhead:** The solution performs $O(N)$ allocations for the rows of the result array. This is efficient enough for standard constraints, though it creates heap fragmentation.
*   **Input Modification:** The code sorts the input `intervals` array in place. This is acceptable in many competitive programming environments, but should be documented if the original order needs preservation.
*   **Optimization:** The inner `if(intervals[i][1] > arr[k][1])` can be simplified using a `max` macro/function, though it has negligible performance impact.

## Code Quality
*   **Readability:** Good. The logic is standard and easy to follow.
*   **Structure:** Good. Handles edge cases (empty input) correctly at the start.
*   **Naming:** Good. Variable names like `k` are standard for indices in this context.
*   **Concrete Improvements:**
    *   **Memory Allocation:** The initial allocation for `arr` allocates space for `intervalsSize` pointers, but the final `returnSize` might be significantly smaller. This is safe, but technically over-allocates memory.
    *   **Safety:** The code assumes `intervals` is not NULL and `intervalsColSize` is valid; adding assertions or explicit checks would make it more robust.
    *   **Formatting:** Consider using `const` for parameters that are not modified if the API allowed it.

---
---


# Question Revision
### Revision Report: Merge Intervals

**Pattern:** Sorting + Greedy (Sweep Line)

**Brute Force:** 
Compare every interval with every other interval to check for overlaps and merge them iteratively, or use an $O(n^2)$ approach by maintaining a boolean array for the entire range of coordinates to mark occupied slots.
*   **Time:** $O(n^2)$
*   **Space:** $O(n)$

**Optimal Approach:**
1.  **Sort** the intervals based on their start times.
2.  Initialize an empty list for merged intervals.
3.  Iterate through the sorted list: if the current interval starts after the end of the previous one, append it; otherwise, update the end of the previous interval to be `max(current_end, previous_end)`.
*   **Time:** $O(n \log n)$ due to sorting.
*   **Space:** $O(n)$ to store the result.

**The 'Aha' Moment:**
When the problem involves overlapping ranges, sorting by the start time converts a chaotic set of intervals into a linear sequence where you only ever need to compare the "current" interval with the "most recently merged" one.

**Summary:** 
Sort by start time, then merge greedily by tracking the furthest reach of the overlapping segments.

---
