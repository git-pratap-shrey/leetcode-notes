---
title: "Longest Common Prefix"
slug: longest-common-prefix
date: "2026-06-05"
---

# My Solution
~~~

~~~

# Submission Review
Please provide the code you would like me to analyze. The `Code` section of your request is currently empty, and per my instructions, I cannot hallucinate an implementation or provide generic theory.

---

# Question Revision
### Longest Common Prefix

**Pattern:** Vertical Scanning

**Brute Force:**
Compare the first string against the second to find a common prefix, then use that result to compare against the third, and so on (Horizontal Scanning).

**Optimal Approach:**
Iterate through the characters of the first string. For each character, check if it exists at the same position in all other strings in the array. Terminate immediately when a mismatch is found or the end of any string is reached.

*   **Time Complexity:** $O(S)$, where $S$ is the sum of all characters in all strings.
*   **Space Complexity:** $O(1)$ (excluding the output string).

**The 'Aha' Moment:**
Because the prefix must be common to *all* strings, a single mismatch at any index across any string immediately defines the maximum possible length.

**Summary:**
Scan characters vertically across all strings and stop at the first mismatch.

---