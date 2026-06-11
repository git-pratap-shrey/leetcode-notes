---
title: "Repeated Substring Pattern"
slug: repeated-substring-pattern
date: "2026-06-11"
---

# My Solution
~~~

~~~

# Submission Review
Please provide the code you would like me to analyze. The "Code" section of your message is currently empty.

---

# Question Revision
### Revision Report: Repeated Substring Pattern

**Pattern:** String Manipulation / Mathematical Property

**Brute Force:** 
Iterate through all possible substring lengths $L$ from $1$ to $n/2$. If $n$ is divisible by $L$, check if the prefix of length $L$ repeated $n/L$ times reconstructs the original string.
- Time: $O(n \cdot \sqrt{n})$ or $O(n^2)$
- Space: $O(n)$

**Optimal Approach (Concatenation Trick):**
Concatenate the string with itself ($s + s$) and remove the first and last characters of the resulting string. If the original string $s$ is still present as a substring in this modified version, it is composed of a repeated pattern.
- Time: $O(n)$
- Space: $O(n)$

**The 'Aha' Moment:** 
If a string is periodic, it must be a non-trivial rotation of itself.

**Summary:** 
A string $S$ consists of a repeated pattern if $S$ is a substring of $(S + S)[1:-1]$.

---