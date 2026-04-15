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
- **Technique**: Nested loop exchange sort (a variant of Selection Sort).
- **Optimality**: **Not optimal**. The problem is a classic "Dutch National Flag" problem, which can be solved in a single pass $O(n)$ using three pointers. This solution uses a generic sorting approach that ignores the constraint that there are only three distinct values.

## Complexity
- **Time Complexity**: $O(n^2)$ due to the nested loops iterating through the array.
- **Space Complexity**: $O(1)$ as it sorts the array in-place.
- **Bottleneck**: The quadratic time complexity is the primary bottleneck; it performs unnecessary comparisons and swaps regardless of the number of distinct elements.

## Efficiency Feedback
- **Runtime**: High. While it passes for small constraints, it is inefficient for larger arrays.
- **Optimization**: Implement the **Three-Way Partition** algorithm:
    - Use three pointers (`low`, `mid`, `high`).
    - Move `0`s to the front, `2`s to the back, and keep `1`s in the middle.
    - This reduces time complexity from $O(n^2)$ to $O(n)$.

## Code Quality
- **Readability**: Good. The logic is simple and easy to follow.
- **Structure**: Good. It follows the expected method signature.
- **Naming**: Moderate. While `i` and `j` are standard for loop indices, the overall implementation is too naive for a technical interview/competitive context.
- **Improvements**: 
    - Replace the $O(n^2)$ loops with a linear scan.
    - Use `std::sort` if a generic sort is acceptable, though that would be $O(n \log n)$.

---

# Question Revision
### Revision Report: Sort Colors

**Pattern:** Three-Way Partitioning (Two Pointers)

**Brute Force:** Use a built-in sorting algorithm or perform a counting sort (two passes: first to count occurrences of 0, 1, and 2, second to overwrite the array).

**Optimal Approach:** 
Maintain three pointers: `low` (boundary for 0s), `mid` (current element), and `high` (boundary for 2s). 
- If `nums[mid] == 0`: Swap `nums[low]` and `nums[mid]`, increment `low` and `mid`.
- If `nums[mid] == 1`: Increment `mid`.
- If `nums[mid] == 2`: Swap `nums[mid]` and `nums[high]`, decrement `high` (do not increment `mid` as the swapped element needs validation).

- **Time Complexity:** $O(n)$
- **Space Complexity:** $O(1)$

**The 'Aha' Moment:** When the input consists of a very small, fixed set of discrete values, the goal is partitioning the array into zones rather than traditional comparison sorting.

**Summary:** Use three pointers to isolate 0s at the beginning and 2s at the end, leaving 1s in the middle in a single pass.

---