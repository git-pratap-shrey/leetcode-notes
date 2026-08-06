---
title: "Find the K-Beauty of a Number"
slug: find-the-k-beauty-of-a-number
date: "2026-08-02"
---

# My Solution
~~~

~~~

# Submission Review
No code was provided for analysis. Please provide the implementation you would like me to review.

---

# Question Revision
### Find the K-Beauty of a Number

**Pattern:** Fixed-Size Sliding Window

**Brute Force:** Convert the number to a string and use nested loops to extract every possible substring of length $k$, converting each to an integer to compare with $k$.

**Optimal Approach:** Convert the number to a string once. Use a single loop to slide a window of size $k$ across the string, slicing the window and checking if its integer value equals $k$.
- **Time Complexity:** $O(n \cdot k)$, where $n$ is the number of digits in `num` (slicing and integer conversion take $O(k)$).
- **Space Complexity:** $O(n)$ to store the string representation of the number.

**The 'Aha' Moment:** The requirement to check substrings of a constant length $k$ is a direct signal to use a fixed-size sliding window.

**Summary:** Treat the number as a string and count how many windows of length $k$ numerically evaluate to $k$.

---