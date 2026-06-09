---
title: "Rotate String"
slug: rotate-string
date: "2026-05-09"
---

# My Solution
~~~

~~~

# Submission Review
No code was provided for analysis. Please provide the source code and specify the language to receive a detailed review.

---

# Question Revision
### Rotate String

**Pattern:** String Manipulation

**Brute Force:** 
Iteratively shift the first character of `s` to the end $n$ times, comparing the resulting string to `goal` at each step.

**Optimal Approach:** 
If `s` and `goal` have different lengths, they can never be rotations. If lengths are equal, concatenate `s` with itself (`s + s`). If `goal` is a substring of this concatenated string, it is a valid rotation.

*   **Time Complexity:** $O(n)$ (assuming efficient string search like KMP)
*   **Space Complexity:** $O(n)$ to store the concatenated string

**The 'Aha' Moment:** 
Any possible rotation of a string is guaranteed to be a substring of that string concatenated with itself.

**Summary:** 
If lengths match, check if `goal` is a substring of `s + s`.

---