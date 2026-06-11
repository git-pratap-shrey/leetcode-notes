---
title: "Is Subsequence"
slug: is-subsequence
date: "2026-06-11"
---

# My Solution
~~~

~~~

# Submission Review
No code was provided for analysis. Please provide the source code and the programming language used to receive a review based on the specified criteria.

---

# Question Revision
### Is Subsequence

**Pattern:** Two Pointers

**Brute Force:** Generate all possible subsequences of string `t` and check if string `s` exists among them. This results in an exponential time complexity of $O(2^n)$.

**Optimal Approach:** 
Use two pointers: one for `s` (the potential subsequence) and one for `t` (the target string). Iterate through `t`; whenever the characters at both pointers match, increment the pointer for `s`. If the `s` pointer reaches the end of the string, `s` is a subsequence.

- **Time Complexity:** $O(n)$, where $n$ is the length of the target string `t`.
- **Space Complexity:** $O(1)$.

**The 'Aha' Moment:** The requirement to maintain "relative order" while allowing for gaps indicates a linear scan where we only advance the search pointer upon a successful match.

**Summary:** Greedily match characters of `s` within `t` using two pointers to verify the subsequence in a single pass.

---