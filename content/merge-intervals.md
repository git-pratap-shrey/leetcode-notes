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
*   **Technique:** Sorting followed by a single linear pass (Greedy).
*   **Optimality:** Optimal. The problem requires $O(n \log n)$ time due to the sorting requirement, and the linear pass handles merging in $O(n)$.

## Complexity
*   **Time Complexity:** $O(n \log n)$, where $n$ is the number of intervals, dominated by `qsort`.
*   **Space Complexity:** $O(n)$ to store the output array. Note: The code allocates $O(n)$ space for the output even if all intervals merge into one, which is safe but occasionally slightly inefficient regarding peak memory usage.

## Efficiency Feedback
*   **Memory Allocation:** The code performs $n+1$ calls to `malloc` for the rows and the column-size array. While functional, this can lead to heap fragmentation. In competitive programming, it is often more efficient to allocate one contiguous block of memory for all interval data if possible.
*   **Efficiency:** The logic is efficient. The use of an auxiliary pointer array to sort the input is the correct way to handle intervals in C.

## Code Quality
*   **Readability:** Good. The logic flow is standard and easy to follow.
*   **Structure:** Good. Handles edge cases (empty input) correctly.
*   **Naming:** Good. The variable names `arr` and `k` are clear in the context of the algorithm.
*   **Concrete Improvements:**
    *   **Safety:** While `x[0] - y[0]` is common in `cmp` functions, it can overflow if interval coordinates are very large (near `INT_MIN` or `INT_MAX`). Using `(x[0] > y[0]) - (x[0] < y[0])` is a safer, overflow-proof idiom.
    *   **Resource Management:** In a professional or long-running context, you should consider adding a cleanup path to `free` already allocated memory if a subsequent `malloc` fails, though this is usually ignored in competitive programming.
    *   **Consistency:** The `returnColumnSizes` allocation is standard, but you could initialize it using `calloc` or a single loop logic to keep it compact.

---
---


# Question Revision
### Revision Report: Merge Intervals

**Pattern:** Sorting + Greedy (Linear Scan)

**Brute Force:**
Compare every interval with every other interval to check for overlaps, repeatedly merging and updating the list until no further merges are possible.
*   **Time Complexity:** $O(n^2)$
*   **Space Complexity:** $O(n)$ (or $O(1)$ if modifying in-place)

**Optimal Approach:**
1.  **Sort:** Sort the list of intervals primarily by their start times.
2.  **Linear Scan:** Initialize an empty list for merged intervals. Iterate through the sorted intervals; if the current interval's start is less than or equal to the previous interval's end, merge them by updating the end time. Otherwise, push the current interval as a new entry.
*   **Time Complexity:** $O(n \log n)$ due to the sorting step.
*   **Space Complexity:** $O(n)$ to store the result.

**The 'Aha' Moment:**
When a problem asks to process ranges, sorting by the start coordinate collapses the complexity because it guarantees that any overlapping intervals will be adjacent in the sequence.

**Summary:**
Always sort by start time first to transform a global comparison problem into a local, linear merge operation.

---
