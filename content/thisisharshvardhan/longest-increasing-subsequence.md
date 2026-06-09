---
title: "Longest Increasing Subsequence"
slug: longest-increasing-subsequence
date: "2026-04-16"
---

# My Solution
~~~

~~~

# Submission Review
No code was provided for analysis. Please provide the implementation you would like me to review.

---

# Question Revision
### Longest Increasing Subsequence

**Pattern:** Dynamic Programming / Binary Search (Patience Sorting)

**Brute Force:** 
Recursively explore all $2^n$ possible subsequences, checking if each is strictly increasing and tracking the maximum length.

**Optimal Approach:** 
Maintain a `tails` array where `tails[i]` stores the smallest ending element of all increasing subsequences of length $i+1$. For each number $x$ in the input:
1. Use binary search to find the index of the first element in `tails` $\ge x$.
2. If $x$ is larger than all elements in `tails`, append $x$.
3. Otherwise, replace the element at that index with $x$ to lower the tail value, making it easier to append future elements.

*   **Time Complexity:** $O(n \log n)$
*   **Space Complexity:** $O(n)$

**The 'Aha' Moment:** 
To maximize the subsequence length, you must keep the ending elements of existing subsequences as small as possible to leave more room for future numbers.

**Summary:** 
Use a `tails` array to track the smallest possible end-elements for each length and update them via binary search.

---