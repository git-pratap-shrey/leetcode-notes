---
title: "Sort Colors"
slug: sort-colors
date: "2026-04-11"
---

# My Solution
~~~cpp
class Solution {
public:
    void sortColors(vector<int>& nums) {
        int n=nums.size();
        for(int i=0;i<n-1;i++){
            for(int j=i+1;j<n;j++){
                if(nums[i]>nums[j]) swap(nums[i],nums[j]);
            }
        }
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Bubble/Selection Sort variant (Nested loop comparison).
- **Optimality**: **Suboptimal**. The problem "Sort Colors" is designed to be solved in $O(n)$ time using the Dutch National Flag algorithm (three-pointer approach) or counting sort, as there are only three distinct values. This implementation uses a generic $O(n^2)$ sorting approach.

## Complexity
- **Time Complexity**: $O(n^2)$ due to nested loops iterating through the array.
- **Space Complexity**: $O(1)$ as it sorts in-place.
- **Bottleneck**: The nested loop structure performs redundant comparisons and swaps regardless of the number of unique elements.

## Efficiency Feedback
- **Runtime**: High. For a large input size $n$, the quadratic time complexity will be significantly slower than the expected linear time.
- **Optimization**: Implement a three-pointer approach (low, mid, high) to sort the 0s, 1s, and 2s in a single pass.

## Code Quality
- **Readability**: Good. The code is simple and easy to follow.
- **Structure**: Good. It follows the expected class/method signature.
- **Naming**: Moderate. `n`, `i`, and `j` are standard for indices, but lack descriptive meaning.
- **Concrete Improvements**: 
    - Replace the $O(n^2)$ loops with a `while` loop using three pointers to achieve $O(n)$ complexity.
    - Avoid using a generic sort when the range of values is strictly limited to $\{0, 1, 2\}$.

---

# Question Revision
### Revision Report: Sort Colors

**Pattern:** Three Pointers (Dutch National Flag Algorithm)

**Brute Force:** 
Use a standard sorting algorithm (e.g., QuickSort) or a two-pass counting sort where you count occurrences of 0, 1, and 2, then overwrite the array.
- **Time:** $O(n \log n)$ or $O(n)$ (two-pass)
- **Space:** $O(1)$

**Optimal Approach:** 
Maintain three pointers: `low` (boundary for 0s), `mid` (current element), and `high` (boundary for 2s). Iterate through the array with `mid`:
- If `nums[mid] == 0`: Swap `nums[low]` and `nums[mid]`, increment both `low` and `mid`.
- If `nums[mid] == 1`: Just increment `mid`.
- If `nums[mid] == 2`: Swap `nums[mid]` and `nums[high]`, decrement `high` (do not increment `mid` yet, as the swapped element needs evaluation).

- **Time:** $O(n)$
- **Space:** $O(1)$

**The 'Aha' Moment:** 
When a problem requires sorting a small, fixed number of distinct values in-place, think "partitioning" rather than "comparison sorting."

**Summary:** 
Use three pointers to partition the array into three distinct zones (0s, 1s, and 2s) in a single linear pass.

---