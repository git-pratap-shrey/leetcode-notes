---
title: "Repeated Substring Pattern"
slug: repeated-substring-pattern
date: "2026-06-10"
---

# My Solution
~~~

~~~

# Submission Review
Please provide the code you would like me to analyze. I am ready to review it according to your guidelines as soon as you paste it.

---

# Question Revision
### Revision Report: Repeated Substring Pattern

**Pattern:** String Manipulation / KMP Preprocessing

**Brute Force:** Generate all possible prefixes, repeat each one to match the target string length, and verify equality. 
*   **Complexity:** $O(n^2)$ time, $O(n)$ space.

**Optimal Approach:** Concatenate the string with itself ($S + S$) and remove the first and last characters. If the original string $S$ exists within this new string, it is composed of a repeated substring. 
*   **Complexity:** $O(n)$ time (string search), $O(n)$ space.

**The 'Aha' Moment:** If a string $S$ is made of a repeating unit, $S$ must be a periodic shift of itself, causing the pattern to reappear when the string is doubled and the boundary characters are stripped.

**Summary:** To check for repeating periods, look for the original string inside the concatenation of `(s + s)[1:-1]`.

---