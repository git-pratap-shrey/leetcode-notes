---
title: "Count Valid Prefixes"
slug: count-valid-prefixes
date: "2026-08-01"
---

# My Solution
~~~

~~~

# Submission Review
Please provide the code you would like me to analyze. The `Code:` section in your request was empty.

---

# Question Revision
### Revision Report: Count Valid Prefixes

**Pattern:** Sliding Window / Frequency Map

**Brute Force:**
Iterate through every possible prefix length $i$ from $1$ to $n$. For each prefix, iterate through all its characters to verify the validity condition. 
- Time: $O(n^2)$
- Space: $O(k)$ (where $k$ is the alphabet size)

**Optimal Approach:**
Maintain a running frequency map (or array) as you iterate through the string once. Update the character count for the current index and check if the validity condition is met using a counter for "unique characters required." Since a prefix grows monotonically, once the condition is met, it often stays met or changes predictably.
- Time: $O(n)$
- Space: $O(k)$

**The 'Aha' Moment:**
The "prefix" constraint means the window only expands from the left, transforming a potential $O(n^2)$ search into a single linear pass.

**Summary:**
Use a frequency map to track character requirements in one pass and increment the count whenever the prefix satisfies the target condition.

---