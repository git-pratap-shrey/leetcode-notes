---
title: "First Unique Character in a String"
slug: first-unique-character-in-a-string
date: "2026-06-08"
---

# My Solution
~~~

~~~

# Submission Review
Please provide the code and the language you would like me to analyze. The code snippet was missing from your request.

---

# Question Revision
### First Unique Character in a String

**Pattern:** Frequency Map / Hash Table

**Brute Force:** 
Nested loops: for every character, scan the rest of the string to check for duplicates.
- Time: $O(n^2)$
- Space: $O(1)$

**Optimal Approach:** 
Two-pass strategy:
1. **First Pass:** Populate a frequency map (or an array of size 26) to store the count of each character.
2. **Second Pass:** Traverse the string again; the first character with a frequency of 1 is the first unique character.
- Time: $O(n)$
- Space: $O(1)$ (Fixed space for 26 lowercase English letters)

**The 'Aha' Moment:** You cannot determine if a character is unique until you have seen the entire string, requiring a global count before making a local decision.

**Summary:** Map character frequencies in one pass, then re-scan the string to find the first index with a count of one.

---