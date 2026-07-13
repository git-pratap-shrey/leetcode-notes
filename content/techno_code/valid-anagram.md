---
title: "Valid Anagram"
slug: valid-anagram
date: "2026-06-07"
---

# My Solution
~~~

~~~

# Submission Review
Please provide the code you would like me to analyze. The **Language** and **Code** fields in your request were left blank, so there is no implementation currently available for review.

---

# Question Revision
### Valid Anagram

**Pattern:** Frequency Map (Hashing)

**Brute Force:** 
Sort both strings alphabetically and compare them for equality.
- Time: $O(n \log n)$
- Space: $O(1)$ or $O(n)$ depending on sorting implementation.

**Optimal Approach:** 
Use a fixed-size array (size 26 for lowercase English) or a hash map to track character counts. Increment counts for string `s` and decrement for string `t`. The strings are anagrams if the final state of the counter is all zeros.
- Time: $O(n)$
- Space: $O(1)$ (constant space since the alphabet size is fixed).

**The 'Aha' Moment:** 
"Rearranging letters" implies that order is irrelevant, but character identity and frequency must be identical.

**Summary:** Use a frequency counter to verify both strings contain the exact same characters with the same occurrences.

---