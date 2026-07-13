---
title: "Ransom Note"
slug: ransom-note
date: "2026-06-08"
---

# My Solution
~~~

~~~

# Submission Review
No code was provided for analysis. Please provide the solution you would like me to review.

---

# Question Revision
### Ransom Note

**Pattern:** Hash Table (Frequency Map)

**Brute Force:** For every character in `ransomNote`, search for its first occurrence in `magazine`, remove that character to prevent reuse, and repeat.

**Optimal Approach:** 
Create a frequency map (or an integer array of size 26) to count occurrences of each character in `magazine`. Iterate through `ransomNote`, decrementing the corresponding count in the map; if a count drops below zero, the note cannot be constructed.
- **Time Complexity:** $O(m + n)$ where $m$ and $n$ are the lengths of the two strings.
- **Space Complexity:** $O(1)$ since the map size is capped by the alphabet size (26).

**The 'Aha' Moment:** The requirement to use each character "only once" transforms the problem from a search task into an inventory management task.

**Summary:** Use a frequency map to treat the magazine as a finite inventory of characters to validate the ransom note.

---