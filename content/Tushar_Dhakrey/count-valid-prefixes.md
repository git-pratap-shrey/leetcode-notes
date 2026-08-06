---
title: "Count Valid Prefixes"
slug: count-valid-prefixes
date: "2026-08-01"
---

# My Solution
~~~

~~~

# Submission Review
No code was provided for analysis. Please provide the solution you would like me to review.

---

# Question Revision
### Count Valid Prefixes

**Pattern**: Hash Map / Frequency Tracking

**Brute Force**: For every possible prefix length $i \in [1, n]$, iterate through the substring, count character frequencies, and check if all counts are identical.
- **Time**: $O(n^2)$
- **Space**: $O(k)$ (where $k$ is alphabet size)

**Optimal Approach**: 
Maintain a frequency map for characters encountered and a variable for the count of distinct characters. A prefix is valid if the length of the prefix is exactly equal to the `number_of_distinct_characters * frequency_of_any_seen_character`.
- **Time**: $O(n)$
- **Space**: $O(k)$ (effectively $O(1)$ for a fixed English alphabet)

**The 'Aha' Moment**: If all present characters must have the same frequency, then the total length of the prefix must be a multiple of the number of unique characters seen so far.

**Summary**: Track unique character counts and verify if `distinct_chars * current_freq == prefix_length` in a single pass.

---