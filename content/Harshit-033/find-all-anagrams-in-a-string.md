---
title: "Find All Anagrams in a String"
slug: find-all-anagrams-in-a-string
date: "2026-06-09"
---

# My Solution
~~~

~~~

# Submission Review
Please provide the code you would like me to analyze. The `Code` section of your request is currently empty, so no analysis can be performed.

---

# Question Revision
### Find All Anagrams in a String

**Pattern:** Fixed-Size Sliding Window

**Brute Force:** 
Iterate through every possible substring of length $|p|$, sort it, and compare it to the sorted version of $p$.
- Time: $O(n \cdot m \log m)$
- Space: $O(m)$

**Optimal Approach:**
Maintain a frequency map (array of size 26) for string $p$ and a sliding window of length $|p|$ over string $s$. As the window slides, increment the count for the entering character and decrement the count for the exiting character. Compare the window's frequency map to $p$'s map at each step.
- **Time Complexity:** $O(n)$ (where $n$ is the length of $s$; alphabet comparison is $O(26)$, which is constant).
- **Space Complexity:** $O(1)$ (fixed-size arrays regardless of input length).

**The 'Aha' Moment:** 
The requirement for an "anagram" indicates character frequency counting, and the search for a contiguous block of a specific length indicates a fixed-size sliding window.

**Summary:** 
Use a sliding window with a frequency array to track character counts and identify anagrams in a single pass.

---