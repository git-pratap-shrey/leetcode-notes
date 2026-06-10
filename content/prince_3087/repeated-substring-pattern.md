---
title: "Repeated Substring Pattern"
slug: repeated-substring-pattern
date: "2026-06-10"
---

# My Solution
~~~

~~~

# Submission Review
No code was provided for analysis. Please provide the implementation and the language used to receive a technical review.

---

# Question Revision
### Repeated Substring Pattern

**Pattern**: String Manipulation / KMP (Prefix Function)

**Brute Force**: Iterate through all possible substring lengths $L$ from $1$ to $n/2$. If $n$ is divisible by $L$, check if repeating the prefix of length $L$ for $n/L$ times reconstructs the original string.
- **Time**: $O(n \sqrt{n})$ or $O(n^2)$ depending on divisors.
- **Space**: $O(n)$ for string construction.

**Optimal Approach (String Doubling)**: Concatenate the string with itself ($s + s$), remove the first and last characters to break the original boundaries, and search for the original string $s$ within this modified string.
- **Logic**: If $s$ consists of a repeated pattern, the rotation (shifting) of $s$ will eventually align with itself before a full cycle is completed.
- **Time**: $O(n)$ (using KMP or optimized built-in search).
- **Space**: $O(n)$ to store the doubled string.

**The 'Aha' Moment**: If a string is periodic, doubling it and stripping the edges forces a shift that must reveal the original string if a repeating unit exists.

**Summary**: A string is composed of repeated substrings if and only if it is a substring of $(s + s)$ after removing the first and last characters.

---