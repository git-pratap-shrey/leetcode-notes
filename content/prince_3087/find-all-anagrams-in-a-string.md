---
title: "Find All Anagrams in a String"
slug: find-all-anagrams-in-a-string
date: "2026-06-09"
---

# My Solution
~~~

~~~

# Submission Review
Please provide the code you would like me to analyze. The `Code` section in your request is currently empty, and per my instructions, I cannot hallucinate a solution or provide generic theory.

---

# Question Revision
### Find All Anagrams in a String

**Pattern:** Sliding Window (Fixed Size)

**Brute Force:** Iterate through every substring of length `p.length()`, sort it, and compare it to the sorted version of `p`.
- **Complexity:** $O(n \cdot m \log m)$ where $n$ is length of $s$ and $m$ is length of $p$.

**Optimal Approach:** 
Maintain two frequency arrays (size 26) to track character counts for `p` and the current window in `s`. Slide the window one character at a time: increment the count for the entering character and decrement for the exiting character. If the two arrays are identical, the current start index is an anagram.
- **Time Complexity:** $O(n)$
- **Space Complexity:** $O(1)$ (fixed array size of 26)

**The 'Aha' Moment:** The combination of "anagram" (character frequency) and "substring" (contiguous sequence) signals a fixed-size sliding window with a frequency map.

**Summary:** Use a sliding window and a frequency array to track character counts, comparing the window state to the target pattern in linear time.

---