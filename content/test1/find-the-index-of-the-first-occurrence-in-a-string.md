---
title: "Find the Index of the First Occurrence in a String"
slug: find-the-index-of-the-first-occurrence-in-a-string
date: "2026-06-11"
---

# My Solution
~~~

~~~

# Submission Review
Please provide the code you would like me to analyze. I am ready to evaluate it based on your criteria as soon as you paste it.

---

# Question Revision
### Revision Report: Find the Index of the First Occurrence in a String

**Pattern:** Sliding Window / String Matching

**Brute Force:**
Iterate through the `haystack` with a pointer `i`. At each position, compare the substring of length `m` (length of `needle`) with `needle`.
*   **Time Complexity:** $O((n - m + 1) \cdot m)$
*   **Space Complexity:** $O(1)$

**Optimal Approach:**
Use the **Knuth-Morris-Pratt (KMP) Algorithm**. Preprocess the `needle` to create a "Longest Prefix Suffix" (LPS) array. This allows the search pointer in `haystack` to never backtrack, skipping unnecessary comparisons by leveraging previous matches.
*   **Time Complexity:** $O(n + m)$
*   **Space Complexity:** $O(m)$

**The 'Aha' Moment:**
When you realize that a brute force mismatch forces you to re-scan characters you’ve already seen, you recognize the need for a failure function (LPS) to skip redundant comparisons.

**Summary:**
Whenever string matching feels like it’s doing redundant work on a partial match, use the KMP failure function to jump ahead instead of backtracking.

---