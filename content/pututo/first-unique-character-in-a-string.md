---
title: "First Unique Character in a String"
slug: first-unique-character-in-a-string
date: "2026-06-08"
---

# My Solution
~~~

~~~

# Submission Review
Please provide the code you would like me to analyze. The **Code:** section in your request was empty.

---

# Question Revision
### First Unique Character in a String

**Pattern:** Frequency Map / Hashing

**Brute Force:** 
Use nested loops to compare each character with every other character in the string. Return the index of the first character that has no duplicates.
- **Time:** $O(n^2)$
- **Space:** $O(1)$

**Optimal Approach:** 
1. **First Pass:** Traverse the string and store the frequency of each character in a hash map or a fixed-size array (size 26 for lowercase English).
2. **Second Pass:** Traverse the string again and return the index of the first character whose stored frequency is exactly 1.
- **Time:** $O(n)$
- **Space:** $O(1)$ (The map size is bounded by the alphabet size, regardless of input length).

**The 'Aha' Moment:** 
"First unique" requires global frequency knowledge before a local index decision can be made, signaling a two-pass frequency count.

**Summary:** 
Map the frequencies first, then re-scan the string to find the first character with a count of one.

---