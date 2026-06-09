---
title: "First Unique Character in a String"
slug: first-unique-character-in-a-string
date: "2026-06-08"
---

# My Solution
~~~

~~~

# Submission Review
No code was provided for analysis. Please provide the code snippet you would like reviewed.

---

# Question Revision
### First Unique Character in a String

**Pattern:** Frequency Map (Hashing)

**Brute Force:**
Use nested loops to compare each character with every other character in the string. If no match is found for a character, return its index.

**Optimal Approach:**
1. Create a frequency map (or a fixed-size array of 26 for lowercase English letters).
2. **Pass 1:** Traverse the string to populate the counts of each character.
3. **Pass 2:** Traverse the string again; the first character with a count of 1 is the first unique character.

*   **Time Complexity:** $O(n)$
*   **Space Complexity:** $O(1)$ (constant space since the alphabet size is fixed)

**The 'Aha' Moment:**
The requirement to determine if a character is unique across the *entire* string before picking the *first* occurrence signals a need for a two-pass frequency count.

**Summary:**
Store character frequencies in a map and perform a second linear scan to identify the first index with a count of one.

---