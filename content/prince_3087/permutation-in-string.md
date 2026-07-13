---
title: "Permutation in String"
slug: permutation-in-string
date: "2026-06-09"
---

# My Solution
~~~

~~~

# Submission Review
No code was provided in the `Code:` section. Please provide the implementation you would like me to analyze.

---

# Question Revision
### Permutation in String

**Pattern:** Sliding Window (Fixed Size)

**Brute Force:** 
Generate all permutations of `s1` and check if any exist as a substring in `s2`.
- **Complexity:** $O(n! \cdot m)$ time, where $n = \text{len}(s1)$ and $m = \text{len}(s2)$.

**Optimal Approach:** 
Maintain two frequency arrays (size 26) to track character counts of `s1` and the current window in `s2`. Slide a window of size `len(s1)` across `s2`, updating the window's frequency array by adding the entering character and removing the exiting character. Compare the arrays at each step.
- **Time Complexity:** $O(m)$
- **Space Complexity:** $O(1)$ (fixed alphabet size)

**The 'Aha' Moment:** 
"Permutation" signals that character frequencies must be identical, and searching within a string signals a contiguous window.

**Summary:** 
Find an anagram of `s1` within `s2` using a fixed-size sliding window and frequency maps.

---