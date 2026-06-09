---
title: "Ransom Note"
slug: ransom-note
date: "2026-06-08"
---

# My Solution
~~~

~~~

# Submission Review
Please provide the code you would like me to analyze. The "Code" section in your prompt was empty.

---

# Question Revision
### Ransom Note

**Pattern:** Frequency Map / Counting

**Brute Force:** 
Iterate through each character in `ransomNote`, searching for it in `magazine`. If found, remove the character from `magazine` to prevent reuse. 
- **Complexity:** Time $O(m \cdot n)$, Space $O(1)$ (if modifying input) or $O(n)$ (if copying).

**Optimal Approach:** 
Use a fixed-size array (size 26) or a Hash Map to store the frequency of each character in `magazine`. Iterate through `ransomNote`, decrementing the count for each character encountered; if a count drops below zero, the note cannot be formed.
- **Time Complexity:** $O(m + n)$
- **Space Complexity:** $O(1)$ (since the alphabet size is constant).

**The 'Aha' Moment:** 
The constraint that each letter can only be used once signals that this is a counting problem rather than a simple set-membership problem.

**Summary:** 
Verify if the magazine's character frequencies are greater than or equal to those required by the ransom note.

---