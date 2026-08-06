---
title: "Longest Common Prefix"
slug: longest-common-prefix
date: "2026-08-01"
---

# My Solution
~~~

~~~

# Submission Review
Please provide the code you would like me to analyze. The `Code:` section in your request was left empty.

---

# Question Revision
### Longest Common Prefix

**Pattern:** Vertical Scanning / String Manipulation

**Brute Force:**
Compare the first two strings to find their common prefix, then compare that resulting prefix with the third string, updating the prefix length as you proceed through the array.

**Optimal Approach:**
Iterate through the characters of the first string one by one. For each character, check if it is identical to the character at the same index in all other strings. Terminate and return the substring as soon as a mismatch is found or the end of any string is reached.

*   **Time Complexity:** $O(S)$, where $S$ is the sum of all characters in all strings.
*   **Space Complexity:** $O(1)$ (ignoring the space required for the output string).

**The 'Aha' Moment:**
The common prefix is limited by the shortest string in the array, meaning we only need to validate characters until the first point of divergence across all strings.

**Summary:**
Compare characters vertically across all strings and stop at the first mismatch.

---