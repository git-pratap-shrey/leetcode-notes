---
title: "Ransom Note"
slug: ransom-note
date: "2026-06-08"
---

# My Solution
~~~

~~~

# Submission Review
Please provide the code implementation you would like me to analyze. The `Language` and `Code` sections in your request are currently empty.

---

# Question Revision
### Ransom Note

**Pattern:** Frequency Map (Counting)

**Brute Force:** For every character in `ransomNote`, search for a matching character in `magazine`. If found, remove that character from `magazine` to avoid reuse and move to the next character.

**Optimal Approach:** 
1. Create a frequency array (size 26) or hash map to store the counts of each character in `magazine`.
2. Iterate through `ransomNote`, decrementing the count for each character encountered.
3. If a character's count drops below zero, the note cannot be formed.

*   **Time Complexity:** $O(m + n)$ where $m$ is the length of `ransomNote` and $n$ is the length of `magazine`.
*   **Space Complexity:** $O(1)$ because the storage is limited to a fixed alphabet size (26).

**The 'Aha' Moment:** The constraint "each letter can be used once" immediately signals a need to track available resource counts.

**Summary:** Verify if the character frequency of the note is a subset of the magazine's character frequency.

---