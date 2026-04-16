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
- **Optimality**: Optimal. This is the standard algorithmic approach to find the lexicographically next permutation.

## Complexity
- **Time Complexity**: $O(N)$, where $N$ is the number of elements in the vector. The STL implementation performs a single pass to find the pivot and another pass to reverse the suffix.
- **Space Complexity**: $O(1)$, as the transformation is performed in-place.

## Efficiency Feedback
- The runtime and memory usage are minimal as it leverages highly optimized library code.
- No further optimizations are possible for this approach.

## Code Quality
- **Readability**: Good. The intent is clear and concise.
- **Structure**: Good. Simple wrapper class.
- **Naming**: Good. Follows standard naming conventions.
- **Concrete Improvements**: While correct and efficient for production, in a competitive programming or interview context, implementing the algorithm manually (finding the first decreasing element from the right, swapping with the smallest larger element, and reversing the suffix) is usually required to demonstrate algorithmic knowledge.

---

# Question Revision
### Next Permutation

**Pattern:** Two Pointers / Array Manipulation

**Brute Force:** Generate all possible permutations of the array, sort them lexicographically, locate the current permutation, and return the subsequent one.

**Optimal Approach:**
1. **Find Pivot:** Scan from right to left to find the first index $i$ where `nums[i] < nums[i + 1]`. This is the rightmost point that can be increased to create a larger permutation.
2. **Find Successor:** If $i$ exists, scan from right to left again to find the first index $j$ where `nums[j] > nums[i]`.
3. **Swap:** Swap `nums[i]` and `nums[j]`.
4. **Reverse:** Reverse the sub-array to the right of index $i$ to transform it from descending (largest possible) to ascending (smallest possible) order.

*   **Time Complexity:** $O(n)$
*   **Space Complexity:** $O(1)$

**The 'Aha' Moment:** The "next" lexicographical sequence is achieved by making the smallest possible increase at the rightmost position where an increase is possible.

**Summary:** Find the rightmost dip, swap it with the next larger element to its right, and reverse the remaining suffix.

---