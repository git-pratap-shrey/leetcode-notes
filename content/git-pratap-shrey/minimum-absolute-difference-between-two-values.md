---
title: "Minimum Absolute Difference Between Two Values"
slug: minimum-absolute-difference-between-two-values
date: "2026-04-05"

---
---

# My Solution
~~~cpp
class Solution {
public:
    int minAbsoluteDifference(vector<int>& nums) {
        int diff = 200;
        int index1 = -1;
        int index2 = -1;

        for(int i = 0; i < nums.size(); i++){
            if(nums[i] == 1){
                index1 = i;
            }
            if(nums[i] == 2){
                index2 = i;
            }

            if(index1 != -1 && index2 != -1){
                diff = min(diff, abs(index1 - index2));
            }
        }

        if(diff == 200){
            return -1;
        }
        return diff;
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Linear scan with state tracking (greedy).
*   **Optimality:** Optimal. The problem requires tracking the most recently seen indices of the target values to minimize the distance, which this single-pass approach does in $O(N)$ time.

## Complexity
*   **Time Complexity:** $O(N)$, where $N$ is the size of the input vector. The array is traversed exactly once.
*   **Space Complexity:** $O(1)$, as it only uses three integer variables regardless of input size.

## Efficiency Feedback
*   **High Efficiency:** The logic is minimal and performs the constant-time operations inside a single loop. 
*   **Constraint Assumption:** The initialization `int diff = 200;` assumes the input size is at most 200. While functional for small constraints, it is fragile. If the input size exceeds this, the logic will fail.

## Code Quality
*   **Readability:** Good. The logic is straightforward and easy to follow.
*   **Structure:** Good. Uses a standard linear traversal pattern.
*   **Naming:** Moderate. `index1` and `index2` are generic; naming them `lastPosOfOne` and `lastPosOfTwo` would improve clarity.
*   **Improvements:**
    *   **Robustness:** Replace `200` with `INT_MAX` or `nums.size()` to handle arbitrary input sizes safely.
    *   **Logic:** The `if` block for calculating `diff` could be moved outside the main `if` conditions to ensure it checks at every step where both indices have been found at least once. 
    *   **Safety:** The current code initializes `diff` to 200; if the array is larger than 200 elements and the only occurrence of 1 and 2 are at indices 0 and 201, the code would incorrectly return 200 instead of 201.

```cpp
// Suggested change for robustness:
int diff = INT_MAX; 
// ... inside loop
if (index1 != -1 && index2 != -1) {
    diff = min(diff, abs(index1 - index2));
}
// ... return logic
return (diff == INT_MAX) ? -1 : diff;
```

---
---


# Question Revision
### Revision Report: Minimum Absolute Difference

**Pattern:** Sorting + Linear Scan

**Brute Force:** Compare every possible pair in the array using nested loops.
*   **Time Complexity:** $O(n^2)$
*   **Space Complexity:** $O(1)$

**Optimal Approach:** Sort the array first, then iterate once through the sorted elements to compare only adjacent pairs. Since the minimum difference must exist between two numbers that are closest to each other in value, sorting brings these candidates together.
*   **Time Complexity:** $O(n \log n)$ due to sorting.
*   **Space Complexity:** $O(1)$ or $O(n)$ depending on the language's sorting implementation.

**The 'Aha' Moment:** Whenever a problem asks for a minimum difference between any two elements, sorting transforms the search space from an $O(n^2)$ global comparison into an $O(n)$ local comparison of neighbors.

**Summary:** If the problem involves relative order or pairwise differences, sort first to reduce complexity from quadratic to linear scan.

---
