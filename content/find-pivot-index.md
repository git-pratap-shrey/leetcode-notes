---
title: "Find Pivot Index"
slug: find-pivot-index

---
---

# My Solution
~~~c
int pivotIndex(int* nums, int numsSize) {
    int sum=0;
    for(int i=0; i<numsSize; i++){
        sum=sum+nums[i];

    }

    int prefix=0;
    if(prefix==(sum-prefix-nums[0])){
            return 0;
        }
    for(int i=1;i<numsSize;i++){
        prefix=prefix+nums[i-1];
        if(prefix==(sum-prefix-nums[i])){
            return i;
        }
    }
    return -1;
}
~~~

# Submission Review
## Approach
*   **Technique:** Prefix Sum / Linear Scan.
*   **Optimality:** Optimal. The algorithm computes the total sum once and performs a single pass to check the pivot condition.

## Complexity
*   **Time Complexity:** $O(N)$, where $N$ is `numsSize`. It iterates through the array twice (once for total sum, once for the pivot check).
*   **Space Complexity:** $O(1)$. No auxiliary data structures are used.

## Efficiency Feedback
*   The logic is highly efficient.
*   **Optimization:** The initial `if` block for `i=0` can be merged into the main loop by setting `prefix = 0` and iterating from `i = 0`. Inside the loop, the condition `prefix == (sum - prefix - nums[i])` naturally covers the index 0 case.

## Code Quality
*   **Readability:** Good. The logic is clear and follows standard prefix sum patterns.
*   **Structure:** Moderate. The code duplication (the special `if` block before the loop) makes it slightly more verbose than necessary.
*   **Naming:** Good. Variables `sum` and `prefix` clearly represent their purposes.

### Concrete Improvements
Simplify the structure by removing the initial `if` check and starting the loop at 0:

```c
int pivotIndex(int* nums, int numsSize) {
    int sum = 0;
    for (int i = 0; i < numsSize; i++) {
        sum += nums[i];
    }

    int prefix = 0;
    for (int i = 0; i < numsSize; i++) {
        // sum - prefix - nums[i] is the right sum
        if (prefix == (sum - prefix - nums[i])) {
            return i;
        }
        prefix += nums[i];
    }
    return -1;
}
```
*   **Benefit:** This removes the redundancy and ensures the code is more maintainable and cleaner.

---
---


# Question Revision
### Problem: Find Pivot Index

**Pattern:** Prefix Sum

**Brute Force:**
For every index $i$, iterate through all elements to the left to calculate the left sum and all elements to the right to calculate the right sum.
*   **Time Complexity:** $O(n^2)$
*   **Space Complexity:** $O(1)$

**Optimal Approach:**
1. Calculate the `totalSum` of the array.
2. Initialize `leftSum = 0`. Iterate through the array; for each element `nums[i]`, the `rightSum` is `totalSum - leftSum - nums[i]`.
3. If `leftSum == rightSum`, return `i`. Otherwise, add `nums[i]` to `leftSum` and continue.
*   **Time Complexity:** $O(n)$
*   **Space Complexity:** $O(1)$

**The 'Aha' Moment:**
Whenever a problem asks you to compare a running total against a remaining balance, treat the "total" as a constant and derive the parts using subtraction to avoid nested loops.

**Summary:** 
Use a total sum variable to transform a "sum of sides" comparison into an $O(1)$ arithmetic check at each index.

---
