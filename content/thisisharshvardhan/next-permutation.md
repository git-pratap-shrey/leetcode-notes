---
title: "Next Permutation"
slug: next-permutation
date: "2026-04-12"
---

# My Solution
~~~

~~~

# Submission Review
Please provide the code you would like me to analyze. The code section in your request was empty.

---

# Question Revision
### Next Permutation

**Pattern:** Array Manipulation / Two-Pointer

**Brute Force:** 
Generate all possible permutations of the array, sort them lexicographically, find the current permutation, and return the immediate successor.  
**Complexity:** $O(n! \cdot n)$

**Optimal Approach:**
1. **Find Pivot:** Scan from right to left to find the first element $nums[i]$ that is smaller than its successor $nums[i+1]$. This is the point where the increasing sequence (from right) breaks.
2. **Find Successor:** If a pivot exists, scan from right to left again to find the first element $nums[j]$ larger than $nums[i]$.
3. **Swap:** Swap $nums[i]$ and $nums[j]$.
4. **Reverse:** Reverse the subarray to the right of index $i$ to transform it from descending to ascending order (minimizing the suffix).
5. **Edge Case:** If no pivot is found, the array is sorted in descending order; reverse the entire array.

**Complexity:**
- **Time:** $O(n)$
- **Space:** $O(1)$

**The 'Aha' Moment:** 
To get the smallest possible increase, I must find the rightmost digit that can be increased and pair it with the smallest available larger digit from its right.

**Summary:** 
Find the first dip from the right, swap it with the smallest larger number to its right, and reverse the suffix.

---