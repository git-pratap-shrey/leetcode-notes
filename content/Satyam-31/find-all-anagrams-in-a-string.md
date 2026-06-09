---
title: "Find All Anagrams in a String"
slug: find-all-anagrams-in-a-string
date: "2026-06-09"
---

# My Solution
~~~

~~~

# Submission Review
No code was provided for analysis. Please provide the implementation and the language used so I can conduct the review according to the requested criteria.

---

# Question Revision
### Find All Anagrams in a String

**Pattern:** Sliding Window (Fixed Size)

**Brute Force:** Iterate through every possible substring of length $|p|$, sort the substring, and compare it to the sorted version of $p$.
*   Time: $O(n \cdot m \log m)$
*   Space: $O(m)$

**Optimal Approach:** Use a frequency array (size 26) to store counts for string $p$ and a second array for the current window in $s$. Slide the window across $s$, updating counts by incrementing the entering character and decrementing the exiting character, then compare the two arrays.
*   Time: $O(n)$
*   Space: $O(1)$ (fixed alphabet size)

**The 'Aha' Moment:** The need to find permutations of a **fixed-length** string $p$ indicates a sliding window where only the frequency of characters matters, not their order.

**Summary:** Maintain a fixed-size sliding window and compare character frequency maps to identify all permutations of a pattern string.

---