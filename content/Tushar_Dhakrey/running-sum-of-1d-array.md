---
title: "Running Sum of 1d Array"
slug: running-sum-of-1d-array
date: "2026-09-30"
---

# My Solution
~~~java
class Solution {
    public int sum(int num1, int num2) {
        return num1+num2;
    }
}
~~~

# Submission Review
## Approach
- **Technique:** Basic arithmetic addition.
- **Optimality:** **Incorrect**. The code implements a sum of two integers, whereas the problem requires the running sum of a 1D array (prefix sum). It fails to address the problem requirements entirely.

## Complexity
- **Time Complexity:** $O(1)$
- **Space Complexity:** $O(1)$
- **Bottleneck:** The logic is fundamentally wrong; it does not process an array.

## Efficiency Feedback
- The runtime and memory are minimal because the code performs a single addition regardless of the input size expected by the problem.

## Code Quality
- **Readability:** Poor. The code does not correspond to the problem statement.
- **Structure:** Poor. It lacks the necessary method signature to handle an array input.
- **Naming:** Moderate. `sum`, `num1`, and `num2` are appropriate for an addition function, but irrelevant for a running sum problem.
- **Improvements:** 
    - Change method signature to accept an `int[]` and return an `int[]`.
    - Implement a loop to calculate the prefix sum of the array.

---

# Question Revision
# Revision Report: Running Sum of 1d Array

- **Pattern:** Prefix Sum
- **Brute Force:** For every index `i`, start a nested loop from `0` to `i` to calculate the sum of all previous elements.
- **Optimal Approach:** Iterate through the array once. Update the current element by adding the value of the previous element to it (`nums[i] = nums[i] + nums[i-1]`).
    - **Time Complexity:** $O(n)$
    - **Space Complexity:** $O(1)$ (if modifying the input array in-place).
- **The 'Aha' Moment:** The requirement to calculate a cumulative total as you move through an array is the textbook definition of a Prefix Sum.
- **Summary:** Use a single pass to accumulate the sum of all prior elements into the current position.

---