---
title: "Ransom Note"
slug: ransom-note
date: "2026-06-10"
---

# My Solution
~~~

~~~

# Submission Review
Please provide the code you would like me to analyze. There was no code included in your request.

---

# Question Revision
### Ransom Note

**Pattern:** Frequency Map (Hash Map/Array)

**Brute Force:** For every character in `ransomNote`, iterate through `magazine` to find a match. If found, remove that character from `magazine` to prevent reuse and move to the next character.

**Optimal Approach:** 
Count the occurrences of each character in `magazine` using a frequency array (size 26) or a hash map. Iterate through `ransomNote`, decrementing the count for each character encountered; if a count drops below zero, the note cannot be formed.
- **Time Complexity:** $O(m + n)$ where $m$ is the length of `ransomNote` and $n$ is the length of `magazine`.
- **Space Complexity:** $O(1)$ as the storage is limited to the fixed size of the English alphabet.

**The 'Aha' Moment:** The constraint that each letter can be used "only once" signals that this is an inventory problem, requiring a count of available resources.

**Summary:** Track available characters in a frequency map and return false if any required character's count is exhausted.

---