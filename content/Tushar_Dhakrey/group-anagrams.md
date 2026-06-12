---
title: "Group Anagrams"
slug: group-anagrams
date: "2026-06-12"
---

# My Solution
~~~

~~~

# Submission Review
Please provide the code you would like me to analyze. The `Code:` section of your request is currently empty.

---

# Question Revision
### Group Anagrams

**Pattern:** Hashing / Categorization

**Brute Force:** 
Compare every pair of strings in the array. For each pair, check if they are anagrams by sorting both or comparing character counts. 
Complexity: $O(n^2 \cdot k \log k)$ where $n$ is the number of strings and $k$ is the maximum string length.

**Optimal Approach:**
Use a hash map where the key is a "canonical" representation of the string and the value is a list of strings matching that representation. 
1. For each string, generate a key: either by sorting the characters ($O(k \log k)$) or creating a frequency array of 26 integers ($O(k)$).
2. Append the original string to the list associated with that key.

- **Time Complexity:** $O(n \cdot k \log k)$ (sorting) or $O(n \cdot k)$ (frequency array).
- **Space Complexity:** $O(n \cdot k)$ to store the groups in the map.

**The 'Aha' Moment:**
The need to group different permutations of the same characters implies creating a unique, normalized key that is identical for all anagrams.

**Summary:** 
Group strings in a hash map using their sorted version or character-frequency tuple as the key.

---