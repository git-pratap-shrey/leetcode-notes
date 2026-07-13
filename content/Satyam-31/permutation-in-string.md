---
title: "Permutation in String"
slug: permutation-in-string
date: "2026-06-09"
---

# My Solution
~~~

~~~

# Submission Review
Please provide the code you would like me to analyze. The `Code:` section in your request was empty.

---

# Question Revision
### Permutation in String

**Pattern:** Sliding Window (Fixed Size)

**Brute Force:** Generate all possible permutations of `s1` and check if any exist as a substring within `s2`.
- **Complexity:** $O(n! \cdot m)$ time, where $n$ is the length of `s1`.

**Optimal Approach:** 
Maintain a frequency map (array of size 26) for `s1` and a sliding window of size `len(s1)` across `s2`. As the window slides, update the current window's frequency map by adding the new character and removing the character that just exited the window. If the maps match, a permutation exists.
- **Time Complexity:** $O(m)$ where $m$ is the length of `s2`.
- **Space Complexity:** $O(1)$ (fixed-size alphabet array).

**The 'Aha' Moment:** "Permutation" implies identical character frequencies, and "substring" implies a contiguous block of a fixed length.

**Summary:** Use a fixed-size sliding window with frequency maps to identify anagrams of `s1` within `s2`.

---