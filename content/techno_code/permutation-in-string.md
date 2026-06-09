---
title: "Permutation in String"
slug: permutation-in-string
date: "2026-06-09"
---

# My Solution
~~~

~~~

# Submission Review
No code was provided for analysis. Please provide the implementation you would like me to review in the `Code:` section.

---

# Question Revision
### Permutation in String

**Pattern:** Sliding Window (Fixed Size)

**Brute Force:** Generate all permutations of `s1` and check if any permutation exists as a substring in `s2`. 
- **Complexity:** $O(n! \cdot m)$

**Optimal Approach:** 
Use two frequency arrays (size 26) to track character counts of `s1` and the current window in `s2`. Slide a window of length `s1.length` across `s2`, adding one character to the right and removing one from the left at each step. If the two arrays are identical, a permutation exists.
- **Time Complexity:** $O(m)$ where $m$ is the length of `s2`.
- **Space Complexity:** $O(1)$ as the frequency array size is constant (26).

**The 'Aha' Moment:** The word "permutation" signals that character order is irrelevant but frequency is critical, pointing directly to a hash map/frequency array within a sliding window.

**Summary:** Match the character frequency map of `s1` against a sliding window of the same length across `s2`.

---