---
title: "Ransom Note"
slug: ransom-note
date: "2026-06-05"
---

# My Solution
~~~

~~~

# Submission Review
No code was provided for analysis. Please provide the code implementation you would like me to review.

---

# Question Revision
### Ransom Note

**Pattern:** Frequency Map (Counting)

**Brute Force:** 
Iterate through each character in `ransomNote`, search for it in `magazine`, and remove/mark it as used if found.  
Time: $O(n \cdot m)$, Space: $O(1)$ (if modifying in place) or $O(m)$.

**Optimal Approach:** 
Use a fixed-size array of length 26 to store the counts of each character in `magazine`. Traverse `ransomNote` and decrement the corresponding counts; if any count drops below zero, return `false`.
- **Time Complexity:** $O(n + m)$
- **Space Complexity:** $O(1)$ (constant space for 26 lowercase English letters)

**The 'Aha' Moment:** 
The constraint that each letter can be used "only once" transforms the problem from a simple set membership check to a quantity tracking problem.

**Summary:** 
Verify if a string can be constructed by ensuring the magazine's character frequencies are greater than or equal to the note's requirements.

---