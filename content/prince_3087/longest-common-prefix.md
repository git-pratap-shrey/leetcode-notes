---
title: "Longest Common Prefix"
slug: longest-common-prefix
date: "2026-06-05"
---

# My Solution
~~~

~~~

# Submission Review
## Approach
- **Technique**: Horizontal Scanning. The algorithm initializes the prefix as the first string and iteratively shrinks it from the end until it matches the start of every subsequent string in the list.
- **Optimality**: Optimal. It visits each string once and, in the worst case, examines each character of the shortest string.

## Complexity
- **Time Complexity**: $O(S)$, where $S$ is the sum of all characters in all strings. In the worst case, it compares the prefix against every character of every string.
- **Space Complexity**: $O(1)$ auxiliary space (excluding the space required for the output string). Note that Python's string slicing `prefix[:-1]` creates a new string, but this does not scale with the number of input strings $N$.

## Efficiency Feedback
- **Runtime**: The use of `.startswith()` is idiomatic and efficient in Python.
- **Potential Optimization**: Instead of repeated slicing (`prefix[:-1]`), which creates new string objects, one could use indices to track the prefix length. However, given the typical constraints of this problem, the current approach is sufficiently performant.

## Code Quality
- **Readability**: Good. The logic is linear and easy to follow.
- **Structure**: Good. The base case (`if not strs`) is handled correctly.
- **Naming**: Good. Variable names (`strs`, `prefix`) are standard and descriptive.
- **Concrete Improvements**: None required for a competitive programming context; the code is clean and concise.

---

# Question Revision
### Longest Common Prefix

**Pattern:** Vertical Scanning

**Brute Force:** Compare the first two strings to find their common prefix, then compare that resulting prefix with the third string, repeating until the list is exhausted or the prefix becomes empty.

**Optimal Approach:** 
Iterate through the characters of the first string. For each character at index $i$, check if all other strings in the array have the same character at index $i$. Stop and return the substring from $0$ to $i$ as soon as a mismatch is found or the end of any string is reached.

- **Time Complexity:** $O(S)$, where $S$ is the sum of all characters in all strings.
- **Space Complexity:** $O(1)$ (excluding the output string).

**The 'Aha' Moment:** Because the prefix must be *common* to all, a single mismatch at any index $i$ immediately invalidates all subsequent characters.

**Summary:** Compare strings character-by-character vertically across the array and stop at the first mismatch.

---