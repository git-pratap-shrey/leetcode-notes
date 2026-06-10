---
title: "Find the Index of the First Occurrence in a String"
slug: find-the-index-of-the-first-occurrence-in-a-string
date: "2026-06-10"
---

# My Solution
~~~

~~~

# Submission Review
No code was provided for analysis. Please provide the implementation you would like reviewed.

---

# Question Revision
### Find the Index of the First Occurrence in a String

**Pattern:** String Matching / KMP (Knuth-Morris-Pratt)

**Brute Force:** Iterate through the `haystack` and, at every index, check if the subsequent substring matches the `needle`.
- Time: $O(n \cdot m)$
- Space: $O(1)$

**Optimal Approach:** Use the KMP algorithm to precompute a Longest Prefix Suffix (LPS) array. This array tracks the length of the longest proper prefix that is also a suffix for every sub-pattern of the `needle`, allowing the search to skip redundant comparisons after a mismatch.
- Time: $O(n + m)$
- Space: $O(m)$

**The 'Aha' Moment:** Recognizing that a mismatch doesn't require resetting the haystack pointer, as the internal structure of the `needle` tells you exactly where the next potential match can start.

**Summary:** Use KMP's LPS array to achieve linear time complexity by skipping redundant character checks during string searching.

---