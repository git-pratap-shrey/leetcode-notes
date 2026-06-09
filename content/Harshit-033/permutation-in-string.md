---
title: "Permutation in String"
slug: permutation-in-string
date: "2026-06-09"
---

# My Solution
~~~

~~~

# Submission Review
Please provide the code you would like me to analyze. The `Code:` section of your request is currently empty, and I cannot perform an analysis without the source implementation.

---

# Question Revision
### Revision Report: Permutation in String

**Pattern:** Sliding Window (Fixed Size)

**Brute Force:** 
Generate all possible permutations of `s1` and check if any exist as a substring in `s2`. Alternatively, extract every substring of length `len(s1)` from `s2`, sort it, and compare it to the sorted version of `s1`.

**Optimal Approach:** 
Use a frequency array (size 26) to store character counts of `s1`. Slide a window of size `len(s1)` across `s2`, updating the window's frequency map by adding the new character on the right and removing the old one on the left. Compare the two maps at each step.
- **Time Complexity:** $O(n)$, where $n$ is the length of `s2`.
- **Space Complexity:** $O(1)$, as the frequency array remains constant regardless of input size.

**The 'Aha' Moment:** 
The keyword "permutation" implies that character counts must be identical regardless of order, which signals the use of a frequency map combined with a fixed-size window.

**Summary:** 
Use a fixed-size sliding window with a frequency map to track character counts in linear time.

---