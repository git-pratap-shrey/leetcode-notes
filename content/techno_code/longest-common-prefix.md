---
title: "Longest Common Prefix"
slug: longest-common-prefix
date: "2026-05-06"
---

# My Solution
~~~

~~~

# Submission Review
Please provide the code you would like me to analyze. The "Code" section of your message was left empty.

---

# Question Revision
### Longest Common Prefix

**Pattern:** String Manipulation / Vertical Scanning

**Brute Force:**
Compare the first string with the second to find their common prefix, then compare that resulting prefix with the third string, continuing until the array is exhausted or the prefix becomes empty.

**Optimal Approach:**
Iterate through the characters of the first string (index $i$). For every other string in the array, check if the character at index $i$ matches. Stop and return the substring as soon as a mismatch is found or the end of any string is reached.
- **Time Complexity:** $O(S)$, where $S$ is the total number of characters across all strings.
- **Space Complexity:** $O(1)$ (excluding the output string).

**The 'Aha' Moment:**
Because the prefix must be shared by *all* strings, a single mismatch at index $i$ immediately invalidates that index and all subsequent indices for every string.

**Summary:** 
Scan strings vertically index-by-index and terminate at the first character mismatch.

---