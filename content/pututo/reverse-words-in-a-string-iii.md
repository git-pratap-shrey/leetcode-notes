---
title: "Reverse Words in a String III"
slug: reverse-words-in-a-string-iii
date: "2026-06-12"
---

# My Solution
~~~

~~~

# Submission Review
No code was provided for analysis. Please provide the source code you would like me to review.

---

# Question Revision
### Reverse Words in a String III

**Pattern:** Two Pointers

**Brute Force:** Split the string into a list of words, reverse each word using a built-in language function, and join them back with spaces.

**Optimal Approach:** 
Convert the string to a mutable character array. Iterate through the array to identify the start and end indices of each word. For every identified word, use two pointers (one at the start, one at the end) to swap characters moving inward until they meet.
- **Time Complexity:** $O(n)$
- **Space Complexity:** $O(n)$ (to store the mutable character array)

**The 'Aha' Moment:** The requirement to reverse characters *within* words while preserving the *word order* signals the need to isolate segments and perform local in-place reversals.

**Summary:** Identify word boundaries and reverse the characters in each segment using two pointers.

---