---
title: "First Unique Character in a String"
slug: first-unique-character-in-a-string
date: "2026-06-10"
---

# My Solution
~~~

~~~

# Submission Review
No code was provided for analysis. Please provide the implementation you would like me to review.

---

# Question Revision
### First Unique Character in a String

**Pattern:** Hash Map / Frequency Array

**Brute Force:** Use nested loops to compare each character with every other character in the string to check for uniqueness.
- Time: $O(n^2)$
- Space: $O(1)$

**Optimal Approach:** 
1. **First Pass:** Traverse the string to populate a frequency map (or an array of size 26) with the count of each character.
2. **Second Pass:** Traverse the string again; the first character encountered with a frequency of 1 is the first unique character.
- Time: $O(n)$
- Space: $O(1)$ (since the character set is fixed at 26)

**The 'Aha' Moment:** The requirement to find the *first* unique character means I must know the *total* count of all characters before I can make a decision about any single one.

**Summary:** Use a two-pass approach: first to count frequencies, second to identify the first character with a count of one.

---