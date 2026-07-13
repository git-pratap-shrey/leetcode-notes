---
title: "Find the Index of the First Occurrence in a String"
slug: find-the-index-of-the-first-occurrence-in-a-string
date: "2026-06-11"
---

# My Solution
~~~

~~~

# Submission Review
No code was provided for analysis. Please provide the implementation you would like reviewed.

---

# Question Revision
### Find the Index of the First Occurrence in a String

**Pattern:** Sliding Window / String Matching

**Brute Force:** Iterate through the `haystack` and, for every character, trigger a nested loop to check if the subsequent characters match the `needle` sequence.

**Optimal Approach:** 
*   **Logic:** Use a sliding window of fixed size $m$ (length of `needle`). Slide this window across the `haystack` from index $0$ to $n-m$, comparing the current substring with the `needle`. (For advanced performance, KMP algorithm can be used to skip unnecessary comparisons using a prefix table).
*   **Time Complexity:** $O(n \cdot m)$ (Standard sliding window) or $O(n + m)$ (KMP).
*   **Space Complexity:** $O(1)$ (Standard sliding window) or $O(m)$ (KMP).

**The 'Aha' Moment:** The requirement to find a **contiguous** substring of a **fixed length** is a direct signal to use a sliding window.

**Summary:** Slide a window the size of the needle across the haystack and return the first index where the contents match exactly.

---