---
title: "Repeated Substring Pattern"
slug: repeated-substring-pattern
date: "2026-06-10"
---

# My Solution
~~~

~~~

# Submission Review
No code was provided for analysis. Please provide the implementation in the **Language** and **Code** sections to receive a technical review.

---

# Question Revision
### Revision Report: Repeated Substring Pattern

**Pattern:** String Manipulation / Periodicity

**Brute Force:** 
Iterate through all possible prefix lengths $L$ from $1$ to $n/2$. If $n$ is divisible by $L$, check if the prefix of length $L$ repeated $n/L$ times equals the original string $s$.
- **Time:** $O(n\sqrt{n})$ or $O(n^2)$
- **Space:** $O(n)$

**Optimal Approach (String Concatenation Trick):** 
Create a new string by concatenating $s$ with itself ($s + s$). Remove the first and last characters of this combined string. If $s$ is still found as a substring within this modified string, then $s$ consists of a repeated pattern.
- **Time:** $O(n)$ (assuming efficient substring search like KMP)
- **Space:** $O(n)$

**The 'Aha' Moment:** 
If $s$ is periodic, rotating it by one period results in the same string, meaning $s$ must reappear within $s+s$ at an index other than $0$ or $n$.

**Summary:** 
A string is made of repeated substrings if and only if it is a substring of $(s+s)$ after stripping the first and last characters.

---