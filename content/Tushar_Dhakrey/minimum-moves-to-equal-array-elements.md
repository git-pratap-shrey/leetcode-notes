---
title: "Minimum Moves to Equal Array Elements"
slug: minimum-moves-to-equal-array-elements
date: "2026-11-01"
---

# My Solution
~~~java
class Solution {
    public int minMoves(int[] nums) {
        int n = nums.length;
        int sum = 0;
        int min = Integer.MAX_VALUE;
        for(int i=0;i<nums.length;i++){
            sum += nums[i];
            min = Math.min(min,nums[i]);
        }
        int ans = sum - (n*min);
        return ans;
    }
}
~~~

# Submission Review
## Approach
- **Technique:** Greedy / Mathematical. The solution leverages the observation that incrementing $n-1$ elements by 1 is mathematically equivalent to decrementing a single element by 1. To make all elements equal, the most efficient target value is the minimum element currently in the array.
- **Optimality:** Optimal. This reduces the problem to calculating the sum of differences between every element and the minimum element.

## Complexity
- **Time Complexity:** $O(n)$ where $n$ is the length of the array. The array is traversed exactly once.
- **Space Complexity:** $O(1)$ as only a few integer variables are used regardless of input size.

## Efficiency Feedback
- **Performance:** The runtime and memory usage are minimal.
- **Potential Overflow:** There is a significant risk of **integer overflow**. `sum` and `ans` are declared as `int`. If the input array is large or contains large values, `sum` will exceed `Integer.MAX_VALUE` (2^31 - 1), leading to an incorrect negative result. Using `long` for `sum` and `ans` is necessary for robustness.

## Code Quality
- **Readability:** Good. The logic is straightforward and easy to follow.
- **Structure:** Good. The single-pass approach is clean.
- **Naming:** Good. Variables (`sum`, `min`, `ans`) clearly describe their purpose.
- **Concrete Improvements:**
    - Change `int sum` and `int ans` to `long` to prevent overflow.
    - The loop `i < nums.length` can be replaced with an enhanced for-loop (`for (int num : nums)`) for slightly cleaner syntax.

---

# Question Revision
# Revision Report: Minimum Moves to Equal Array Elements

- **Pattern:** Greedy / Mathematical Observation
- **Brute Force:** 
  Iteratively find the minimum element in the array and increment all other $n-1$ elements by 1 until all elements are equal. This simulates the process literally but is computationally expensive.
- **Optimal Approach:** 
  Instead of thinking about incrementing $n-1$ elements, realize that incrementing $n-1$ elements is mathematically equivalent to **decrementing one element by 1** relative to the rest of the group. To make all elements equal, you simply need to reduce every element down to the value of the current minimum element.
  - **Formula:** $\sum (nums[i] - \min(nums))$
  - **Time Complexity:** $O(n)$ to traverse the array.
  - **Space Complexity:** $O(1)$.
- **The 'Aha' Moment:** Incrementing all elements *except one* is a mirrored operation to decrementing *only* that one element.
- **Summary:** To equalize elements by incrementing $n-1$ values, simply sum the differences between every element and the minimum element.

---