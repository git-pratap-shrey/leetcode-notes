---
title: "Is Subsequence"
slug: is-subsequence
date: "2026-06-11"
---

# My Solution
~~~

~~~

# Submission Review
No code was provided for analysis. Please provide the source code and the language used to proceed with the review.

---

# Question Revision
### Is Subsequence

**Pattern:** Two Pointers

**Brute Force:** Use recursion to explore all possible character combinations of `t` to see if they form `s`. Time Complexity: $O(2^n)$.

**Optimal Approach:** 
Use two pointers (`i` for `s`, `j` for `t`). Iterate through `t` using `j`; whenever `s[i] == t[j]`, increment `i` to look for the next character of the subsequence. If `i` reaches the end of `s`, the subsequence is confirmed.
- **Time Complexity:** $O(n)$, where $n$ is the length of the target string `t`.
- **Space Complexity:** $O(1)$.

**The 'Aha' Moment:** The requirement to maintain the *relative order* of characters while allowing gaps points directly to a linear scan with two pointers.

**Summary:** Traverse both strings linearly, advancing the subsequence pointer only upon a character match.

---