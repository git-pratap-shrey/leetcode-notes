---
title: "Find All Anagrams in a String"
slug: find-all-anagrams-in-a-string
date: "2026-06-06"
---

# My Solution
~~~

~~~

# Submission Review
No code was provided for analysis. Please provide the source code you wish to have reviewed, and I will analyze it according to the requested criteria.

---

# Question Revision
### Find All Anagrams in a String

**Pattern:** Sliding Window (Fixed Size)

**Brute Force:**
Iterate through every substring of length `p` in `s`, sort both the substring and `p`, and compare them.
- **Complexity:** $O(n \cdot m \log m)$ time, $O(1)$ space.

**Optimal Approach:**
Use two frequency arrays (size 26) to track character counts for `p` and the current window in `s`. Slide the window one character at a time: increment the count for the incoming character and decrement the count for the outgoing character. If the two arrays are identical, the current start index is an anagram.
- **Time Complexity:** $O(n)$ — each character is visited twice.
- **Space Complexity:** $O(1)$ — the frequency arrays are constant size (26).

**The 'Aha' Moment:**
The requirement to find a fixed-length substring with a specific character composition (regardless of order) signals a sliding window combined with a frequency map.

**Summary:** 
Use a fixed-size sliding window and compare character frequency arrays to find all occurrences of an anagram in linear time.

---