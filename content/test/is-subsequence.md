---
title: "Is Subsequence"
slug: is-subsequence
date: "2026-06-11"
---

# My Solution
~~~

~~~

# Submission Review
Please provide the code you would like me to analyze! You haven't included the solution in your message. Once you paste the code, I will provide the analysis according to your requirements.

---

# Question Revision
### Revision Report: Is Subsequence

**Pattern:** Two Pointers (Greedy)

**Brute Force:** Generate all possible subsequences of the target string ($O(2^n)$) and check for existence, or use nested loops to find indices ($O(n \cdot m)$).

**Optimal Approach:** Use two pointers ($i$ for `s`, $j$ for `t`). Iterate through `t` once; whenever `s[i] == t[j]`, increment $i$. If $i$ reaches the length of `s`, return `true`.
*   **Time Complexity:** $O(n)$, where $n$ is the length of `t`.
*   **Space Complexity:** $O(1)$.

**The 'Aha' Moment:** The problem asks to verify the relative order of characters, which implies a linear scan where success in matching a character allows you to "lock in" and move forward to the next requirement.

**Summary:** Whenever you need to verify if one sequence exists within another while preserving relative order, use a greedy pointer to consume the "container" string while tracking your progress through the "subsequence" string.

---