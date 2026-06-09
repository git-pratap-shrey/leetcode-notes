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

**Pattern:** Frequency Counting (Hash Map/Array)

**Brute Force:** 
Iterate through each character in `ransomNote` and search for it in `magazine`. If found, remove that character from `magazine` to prevent reuse.
- Time: $O(m \cdot n)$
- Space: $O(1)$ or $O(n)$ depending on string mutability.

**Optimal Approach:**
Build a frequency map (or an integer array of size 26) of all characters in `magazine`. Iterate through `ransomNote`, decrementing the count for each character used. If a character's count drops below zero, return `false`.
- Time: $O(m + n)$
- Space: $O(1)$ (Fixed alphabet size of 26).

**The 'Aha' Moment:** 
The requirement to track the "available quantity" of specific characters indicates a need for frequency counting.

**Summary:** 
Verify if `magazine` contains sufficient counts of every character required by `ransomNote` using a frequency map.

---