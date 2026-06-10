---
title: "Is Subsequence"
slug: is-subsequence
date: "2026-06-10"
---

# My Solution
~~~

~~~

# Submission Review
Please provide the code you would like me to analyze. The "Code" section in your request was empty.

---

# Question Revision
### Is Subsequence

**Pattern:** Two Pointers

**Brute Force:**
Use recursion to check every possible combination of characters in `t` to see if they can form `s`. This results in exponential time complexity.

**Optimal Approach:**
Initialize two pointers, $i$ for `s` and $j$ for `t`. Iterate through `t` using $j$; whenever $s[i] == t[j]$, increment $i$ to look for the next character of the subsequence. If $i$ reaches the length of `s`, the subsequence is confirmed.

- **Time Complexity:** $O(n)$, where $n$ is the length of the target string `t`.
- **Space Complexity:** $O(1)$.

**The 'Aha' Moment:**
The requirement to maintain the relative order of characters while allowing gaps in the target string signals a linear scan with independent pointers.

**Summary:**
Traverse the target string once, advancing the subsequence pointer only upon a character match.

---