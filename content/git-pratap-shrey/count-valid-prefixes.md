---
title: "Count Valid Prefixes"
slug: count-valid-prefixes
date: "2026-08-01"
---

# My Solution
~~~

~~~

# Submission Review
Please provide the **code** and the **language** you would like me to analyze. The input provided contains empty fields for both, making it impossible to perform the review.

---

# Question Revision
### Count Valid Prefixes

**Pattern:** Prefix State Tracking (Frequency Map/Hashing)

**Brute Force:** 
Iterate through every possible prefix length $i$ from $1$ to $n$. For each prefix, re-scan the substring $[0, i-1]$ to verify if it meets the validity criteria.
- **Time:** $O(n^2)$
- **Space:** $O(1)$ or $O(k)$

**Optimal Approach:** 
Maintain a running state (e.g., a frequency counter, a balance variable, or a rolling hash) as you iterate through the string once. At each index $i$, the state represents the prefix $[0, i]$. If the current state satisfies the validity condition, increment the result counter.
- **Time:** $O(n)$
- **Space:** $O(k)$ (where $k$ is the alphabet size or state space)

**The 'Aha' Moment:** 
The term "prefix" implies that the state of the current prefix is simply the state of the previous prefix plus the current character.

**Summary:** 
Avoid re-scanning by maintaining a cumulative state variable to validate prefixes in a single linear pass.

---