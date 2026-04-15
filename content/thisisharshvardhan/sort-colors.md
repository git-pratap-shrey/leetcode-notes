---
title: "Sort Colors"
slug: sort-colors
date: "2026-04-11"
---

# My Solution
~~~

~~~

# Submission Review
Please provide the code you would like me to analyze. The `Code:` section of your request is currently empty, and per my instructions, I cannot hallucinate a solution or analyze a problem without the specific implementation provided.

---

# Question Revision
### Sort Colors (LeetCode 75)

**Pattern:** Two Pointers (Three-Way Partitioning / Dutch National Flag)

**Brute Force:** 
Use a standard sorting algorithm (e.g., `sort()`) or perform two passes: first count the occurrences of 0s, 1s, and 2s, then overwrite the original array based on those counts.

**Optimal Approach:** 
Maintain three pointers: `low` (boundary for 0s), `mid` (current element), and `high` (boundary for 2s).
1. If `nums[mid] == 0`: Swap `nums[low]` and `nums[mid]`, increment `low` and `mid`.
2. If `nums[mid] == 1`: Increment `mid`.
3. If `nums[mid] == 2`: Swap `nums[mid]` and `nums[high]`, decrement `high` (do not increment `mid` as the swapped element needs evaluation).

- **Time Complexity:** $O(n)$
- **Space Complexity:** $O(1)$

**The 'Aha' Moment:** 
The constraint of exactly three distinct, known values suggests partitioning the array into three zones rather than using a general comparison sort.

**Summary:** 
Use three pointers to isolate 0s at the start and 2s at the end, naturally leaving 1s in the middle in a single pass.

---