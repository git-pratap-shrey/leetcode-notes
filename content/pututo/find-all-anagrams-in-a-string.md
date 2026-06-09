---
title: "Find All Anagrams in a String"
slug: find-all-anagrams-in-a-string
date: "2026-06-09"
---

# My Solution
~~~

~~~

# Submission Review
Please provide the code you would like me to analyze. The "Code" section of your request was empty.

---

# Question Revision
### Revision Report: Find All Anagrams in a String

**Pattern:** Sliding Window (Fixed Size) + Frequency Map

**Brute Force:** Iterate through every possible substring of length `p` in `s`, sort both the substring and `p`, and compare for equality.
- **Complexity:** $O(s \cdot p \log p)$ time | $O(1)$ or $O(p)$ space.

**Optimal Approach:** 
Use two frequency arrays (size 26) to track character counts for `p` and the current window in `s`. Slide the window across `s` by adding the leading character and removing the trailing character, comparing the arrays at each step.
- **Time Complexity:** $O(n)$ where $n$ is the length of `s`.
- **Space Complexity:** $O(1)$ as the frequency arrays are fixed at 26 characters regardless of input size.

**The 'Aha' Moment:** The requirement for "anagrams" signals frequency tracking, while searching for a fixed-length pattern across a string signals a sliding window.

**Summary:** Use a fixed-size sliding window and compare character frequency maps to identify anagrams in linear time.

---