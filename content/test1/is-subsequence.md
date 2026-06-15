---
title: "Is Subsequence"
slug: is-subsequence
date: "2026-06-11"
---

# My Solution
~~~

~~~

# Submission Review
Please provide the code you would like me to review. You did not include the source code in your message. Once provided, I will analyze it based on your criteria.

---

# Question Revision
### Revision Report: Is Subsequence

**Pattern:** Two Pointers (Greedy)

**Brute Force:** 
Generate all possible subsequences of the target string $t$ and check if $s$ exists within them, resulting in $O(2^n)$ time complexity.

**Optimal Approach:**
Use two pointers, `i` for string $s$ and `j` for string $t$. Iterate through $t$ once; whenever `s[i] == t[j]`, increment `i`. If `i` reaches the length of $s$, the sequence is found.
*   **Time Complexity:** $O(n)$, where $n$ is the length of $t$.
*   **Space Complexity:** $O(1)$, as we only store two integer pointers.

**The 'Aha' Moment:**
The requirement to maintain the relative order of characters without needing them to be contiguous is the definitive signal that a greedy pointer traversal is sufficient.

**Summary:** 
When searching for a relative ordering in a string, advance your pointers greedily to ensure the maximum possible room for remaining matches.

---