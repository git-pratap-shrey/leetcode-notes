---
title: "Find Minimum in Rotated Sorted Array II"
slug: find-minimum-in-rotated-sorted-array-ii
date: "2026-10-13"
---

# My Solution
~~~cpp
class Solution {
public:
    int findMin(vector<int>& nums) {
        return *min_element(nums.begin(),nums.end());
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Linear scan using the STL `std::min_element` function.
- **Optimality**: **Suboptimal**. The problem is a variation of a sorted array (rotated), which allows for a binary search approach to achieve logarithmic time complexity.

## Complexity
- **Time Complexity**: $O(n)$, where $n$ is the number of elements in `nums`.
- **Space Complexity**: $O(1)$.
- **Bottleneck**: The solution iterates through every element of the array regardless of its sorted/rotated nature.

## Efficiency Feedback
- **Runtime**: High for large input sizes compared to the expected $O(\log n)$ average-case performance of binary search.
- **Optimization**: Implement a modified binary search. While the presence of duplicates (indicated by "II" in the problem title) can force a worst-case $O(n)$ in certain scenarios (e.g., all elements are the same), binary search remains significantly faster for most cases.

## Code Quality
- **Readability**: Good. The code is extremely concise and uses standard library functions.
- **Structure**: Good. Simple and direct implementation.
- **Naming**: Good. Uses the provided method signature.
- **Improvements**: Replace the linear scan with a binary search algorithm to leverage the "Sorted" property of the array.

---

# Question Revision
# Revision Report: Find Minimum in Rotated Sorted Array II

- **Pattern:** Modified Binary Search
- **Brute Force:** Linear scan through the array to find the minimum element.
- **Optimal Approach:** 
    - Use two pointers (`left`, `right`). Compare `nums[mid]` with `nums[right]`.
    - If `nums[mid] > nums[right]`, the minimum must be in the right half.
    - If `nums[mid] < nums[right]`, the minimum is at `mid` or in the left half.
    - If `nums[mid] == nums[right]`, we cannot determine the side; decrement `right--` to shrink the search space.
    - **Time Complexity:** Average $O(\log n)$, Worst case $O(n)$ (when all elements are identical).
    - **Space Complexity:** $O(1)$.
- **The 'Aha' Moment:** The presence of duplicates means the "sorted" property is ambiguous when `nums[mid] == nums[right]`, requiring a linear shrink step.
- **Summary:** Use binary search to find the inflection point, but shrink the boundary linearly when duplicates make the direction ambiguous.

---