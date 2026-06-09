---
title: "Valid Anagram"
slug: valid-anagram
date: "2026-06-08"
---

# My Solution
~~~

~~~

# Submission Review
Please provide the code you would like me to analyze. The code section in your request is currently empty.

---

# Question Revision
### Valid Anagram

**Pattern:** Frequency Map (Hashing)

**Brute Force:** Sort both strings alphabetically and compare them for equality.
- Time: $O(n \log n)$
- Space: $O(1)$ or $O(n)$ depending on language sorting implementation.

**Optimal Approach:** Use a fixed-size array of length 26 (for lowercase English letters) or a hash map to track character counts. Increment the count for each character in string `s` and decrement for each character in string `t`. If all counts return to zero, the strings are anagrams.
- Time: $O(n)$
- Space: $O(1)$ (alphabet size is constant).

**The 'Aha' Moment:** The requirement for "same characters with the same frequency" is a direct signal to use a counting mechanism.

**Summary:** Use a frequency map to verify that both strings contain identical character counts.

---