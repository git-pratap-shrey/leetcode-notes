---
title: "Next Permutation"
slug: next-permutation
date: "2026-04-12"
---

# My Solution
~~~cpp
class Solution {
public:
    void nextPermutation(vector<int>& nums) {
       next_permutation(nums.begin(),nums.end()); 
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Utilizes the C++ Standard Template Library (STL) function `std::next_permutation`.
- **Optimality**: Optimal. The STL implementation follows the standard algorithm (finding the pivot, swapping with the successor, and reversing the suffix), which is the most efficient way to solve this problem.

## Complexity
- **Time Complexity**: $O(N)$, where $N$ is the number of elements in `nums`. The algorithm performs at most two passes over the array.
- **Space Complexity**: $O(1)$ auxiliary space as the transformation is performed in-place.

## Efficiency Feedback
- **Runtime/Memory**: Extremely low. By delegating to a highly optimized standard library function, the overhead is minimized.
- **Optimizations**: No further optimizations are possible for this problem.

## Code Quality
- **Readability**: Good. The intent is clear and concise.
- **Structure**: Good. A simple wrapper around the STL function.
- **Naming**: Good. Follows standard naming conventions.
- **Concrete Improvements**: While functionally perfect, in a technical interview context, this approach may be viewed as "cheating" the algorithm's logic. Implementing the manual logic (pivot search $\rightarrow$ swap $\rightarrow$ reverse) would demonstrate a deeper understanding of the underlying process.

---

# Question Revision
### Next Permutation

**Pattern:** Array Manipulation / Two Pointers

**Brute Force:** Generate all $n!$ permutations, sort them lexicographically, locate the current permutation, and return the next one. 
- **Complexity:** $O(n! \cdot n)$ time, $O(n! \cdot n)$ space.

**Optimal Approach:**
1. **Find the Pivot:** Scan from right to left to find the first element $nums[i]$ that is smaller than $nums[i+1]$. This is the point where the increasing sequence (from the right) breaks.
2. **Find the Successor:** If a pivot exists, scan from right to left again to find the first element $nums[j]$ greater than $nums[i]$.
3. **Swap:** Swap $nums[i]$ and $nums[j]$.
4. **Reverse:** Reverse the subarray to the right of index $i$ to transform it from descending to ascending order (the smallest possible arrangement).
- **Time Complexity:** $O(n)$
- **Space Complexity:** $O(1)$

**The 'Aha' Moment:** To get the *smallest* possible increase, you must modify the rightmost digit that can be increased and then minimize the remaining suffix.

**Summary:** Find the first dip from the right, swap it with the next largest value to its right, and reverse the remaining suffix.

---