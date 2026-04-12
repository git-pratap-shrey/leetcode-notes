---
title: "Duplicate Zeros"
slug: duplicate-zeros
date: "2026-04-11"

---
---

# My Solution
~~~cpp
class Solution {
public:
    void duplicateZeros(vector<int>& arr) {
        int n = arr.size();
        int zeros = 0;
        for (int i = 0; i < n; i++) {
            if (arr[i] == 0) zeros++;
        }

        int i = n - 1;
        int j = n + zeros - 1;
        
        while (i >= 0) {
            if (j < n) {
                arr[j] = arr[i];
            }
            if (arr[i] == 0) {
                j--;
                if (j < n) {
                    arr[j] = 0;
                }
            }
            i--;
            j--;
        }
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Two-pointer approach (in-place modification).
*   **Optimality:** Optimal. It performs the task in $O(N)$ time with $O(1)$ extra space, avoiding the $O(N)$ space required by a auxiliary array.

## Complexity
*   **Time Complexity:** $O(N)$, where $N$ is the size of the array. The algorithm traverses the array twice: once to count zeros and once to shift elements.
*   **Space Complexity:** $O(1)$, as it modifies the input vector in-place using only a few integer variables.

## Efficiency Feedback
*   The approach is highly efficient as it avoids unnecessary memory allocation and shifting.
*   The condition `j < n` correctly handles the edge case where the shifted elements would fall outside the bounds of the original array size.

## Code Quality
*   **Readability:** Good. The logic is straightforward and follows a standard pattern for this type of in-place array manipulation.
*   **Structure:** Good. The separation of the counting phase and the writing phase is clear.
*   **Naming:** Moderate. `i` and `j` are standard for pointers, but more descriptive names (e.g., `writePointer`, `readPointer`) could slightly improve clarity for less experienced readers.
*   **Improvements:** 
    *   The logic is solid; no functional changes are needed. 
    *   Adding a comment explaining that `j` tracks the "virtual" index in the expanded array would improve maintainability.

---
---


# Question Revision
### Revision Report: Duplicate Zeros

**Pattern:** Two Pointers (In-place modification)

**Brute Force:** Create a new array and copy elements, shifting subsequent values every time a zero is encountered.
*   **Complexity:** $O(n^2)$ time, $O(n)$ space.

**Optimal Approach:**
1.  **Count Pass:** Iterate to find the number of zeros that can actually fit within the array length.
2.  **Fill Pass:** Use a second pointer starting from the end of the array to move elements to their final positions, duplicating zeros as they appear.
*   **Time Complexity:** $O(n)$ (two passes).
*   **Space Complexity:** $O(1)$ (in-place).

**The 'Aha' Moment:** Whenever you are asked to modify an array in-place while shifting elements, processing from back to front prevents overwriting data you still need to read.

**Summary:** When shifting elements in-place to accommodate insertions, always iterate backwards to avoid the "lost data" trap of forward iteration.

---
