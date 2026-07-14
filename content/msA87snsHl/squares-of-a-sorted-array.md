---
title: "Squares of a Sorted Array"
slug: squares-of-a-sorted-array
date: "2026-06-20"
---

# My Solution
~~~java
class Solution {
    public int[] sortedSquares(int[] nums) {
        for ( int i = 0; i < nums.length; i++){
            nums[i] = nums[i]*nums[i];
        }
        Arrays.sort(nums);
        return nums;
    }
}
~~~

# Submission Review
## Approach
- **Technique**: Brute force / Sorting. The solution squares every element and then sorts the resulting array.
- **Optimality**: Suboptimal. It ignores the property that the input array is already sorted, which allows for a linear time complexity solution.

## Complexity
- **Time Complexity**: $O(n \log n)$ due to the `Arrays.sort()` call.
- **Space Complexity**: $O(\log n)$ or $O(1)$ depending on the implementation of `Arrays.sort()` for primitives (Dual-Pivot Quicksort typically uses $O(\log n)$ auxiliary space).

## Efficiency Feedback
- **Bottleneck**: The $O(n \log n)$ sorting step is the primary bottleneck.
- **Optimization**: A **two-pointer approach** could be used to compare the squares of the elements at both ends of the array, filling a new array from right to left in $O(n)$ time.

## Code Quality
- **Readability**: Good. The logic is trivial and easy to follow.
- **Structure**: Good. The method is concise.
- **Naming**: Good. Standard naming conventions are followed.
- **Improvements**: 
    - Ensure `import java.util.Arrays;` is included for the code to compile.
    - To improve efficiency, implement the two-pointer strategy to avoid the sort.

---

# Question Revision
### Squares of a Sorted Array

**Pattern:** Two Pointers

**Brute Force:** Square every element in the array and then call a standard sorting algorithm. 
- **Complexity:** Time $O(n \log n)$, Space $O(n)$ or $O(1)$.

**Optimal Approach:** Since the input is sorted, the largest squares must reside at the extreme ends (either the most negative or most positive numbers). Use two pointers—one at the start and one at the end—compare their squares, place the larger value at the end of a new result array, and move the pointer inward.
- **Time Complexity:** $O(n)$
- **Space Complexity:** $O(n)$

**The 'Aha' Moment:** The sorting is preserved for positive and negative numbers separately, meaning the maximum absolute values are always at the boundaries.

**Summary:** Use two pointers from the ends to greedily pick the largest square and fill the result array from right to left.

---