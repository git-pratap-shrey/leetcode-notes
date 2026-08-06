---
title: "Count Valid Prefixes"
slug: count-valid-prefixes
date: "2026-08-01"
---

# My Solution
~~~

~~~

# Submission Review
No code or language was provided for analysis. Please provide the solution you wish to have reviewed.

---

# Question Revision
### Count Valid Prefixes

**Pattern:** Frequency Tracking / Linear Scan

**Brute Force:** For every possible prefix length $i \in [1, n]$, iterate through the substring and count character frequencies to check if any exceed $k$.
- **Time Complexity:** $O(n^2)$
- **Space Complexity:** $O(1)$

**Optimal Approach:** Maintain a frequency map (array of size 26) and iterate through the string once. Increment the count for the current character; if it exceeds $k$, stop immediately as all subsequent prefixes will also be invalid.
- **Time Complexity:** $O(n)$
- **Space Complexity:** $O(1)$

**The 'Aha' Moment:** Because we are evaluating *prefixes* sequentially, the state of prefix $i$ is simply the state of prefix $i-1$ plus one character, allowing for an incremental update.

**Summary:** Use a single pass with a frequency array and break the loop the moment any character count exceeds $k$.

---