---
title: "Repeated Substring Pattern"
slug: repeated-substring-pattern
date: "2026-06-08"
---

# My Solution
~~~

~~~

# Submission Review
No code was provided for analysis. Please provide the implementation you would like me to review.

---

# Question Revision
### Revision Report: Repeated Substring Pattern

**Pattern:** String Manipulation / Periodicity

**Brute Force:** 
Iterate through all possible prefix lengths $L$ that are divisors of $n$ (where $L < n$). For each $L$, check if repeating the prefix $s[0:L]$ exactly $n/L$ times reconstructs the original string $s$.
- **Time:** $O(n \sqrt{n})$ or $O(n \cdot \text{divisors of } n)$
- **Space:** $O(n)$

**Optimal Approach:** 
Concatenate the string with itself ($s + s$), then remove the first and last characters of this new string. If the original string $s$ is still found as a substring within this modified result, $s$ is composed of a repeated pattern.
- **Time:** $O(n)$
- **Space:** $O(n)$

**The 'Aha' Moment:** 
If a string is periodic, shifting it by its smallest period will result in the original string, which is exactly what happens when $s$ is found inside $(s+s)[1:-1]$.

**Summary:** 
Check if $s$ is a substring of $(s + s)$ after stripping the outer boundaries.

---