---
title: "Repeated Substring Pattern"
slug: repeated-substring-pattern
date: "2026-06-11"
---

# My Solution
~~~

~~~

# Submission Review
Please provide the code snippet you would like me to analyze. You haven't included the code in your message. 

Once you provide the code, I will evaluate it based on your criteria: **Approach**, **Complexity**, **Efficiency Feedback**, and **Code Quality**.

---

# Question Revision
### Revision Report: Repeated Substring Pattern

**Pattern:** String Manipulation / KMP Preprocessing

**Brute Force:** Generate all possible prefixes, check if the string length is divisible by the prefix length, and repeat that prefix to see if it reconstructs the original string.
*   **Complexity:** $O(n^2)$ time, $O(n)$ space.

**Optimal Approach:** Concatenate the string with itself (`s + s`), remove the first and last characters, and check if the original string `s` exists within the remaining substring.
*   **Logic:** If `s` is composed of a repeating pattern $P$, then $s = nP$. Therefore, $s+s = 2nP$. Removing the boundaries ensures we break the original two occurrences of $s$ at the edges, leaving at least one full instance of $s$ in the middle formed by the overlapping parts.
*   **Complexity:** $O(n)$ time (using KMP search or optimized built-in `contains`), $O(n)$ space.

**The 'Aha' Moment:** If a string is periodic, it must appear within a shifted version of itself, which is why `(s + s)[1:-1]` captures all potential cyclic shifts containing the original pattern.

**Summary:** If a string is composed of repeated segments, doubling it and removing the outer boundaries forces the original pattern to realign and manifest in the middle.

---