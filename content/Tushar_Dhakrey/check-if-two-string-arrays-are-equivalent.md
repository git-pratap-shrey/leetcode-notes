---
title: "Check If Two String Arrays are Equivalent"
slug: check-if-two-string-arrays-are-equivalent
date: "2026-08-04"
---

# My Solution
~~~

~~~

# Submission Review
Please provide the code you would like me to analyze. The "Code" section in your request was empty.

---

# Question Revision
### Revision Report: Check If Two String Arrays are Equivalent

**Pattern:** Two Pointers (Virtual Concatenation)

**Brute Force:** 
Concatenate all elements of `word1` into one string and all elements of `word2` into another. Compare the two resulting strings for equality.
- **Time:** $O(N + M)$
- **Space:** $O(N + M)$ where $N, M$ are total characters across all strings.

**Optimal Approach:** 
Use four pointers to traverse both arrays simultaneously without allocating new memory:
1. `w1`, `w2`: Indices for the current string in `word1` and `word2`.
2. `i`, `j`: Indices for the current character within `word1[w1]` and `word2[w2]`.
Compare characters at `word1[w1][i]` and `word2[w2][j]`. Increment character pointers; if a pointer reaches the end of a string, reset it to 0 and increment the string index.

- **Time:** $O(N + M)$
- **Space:** $O(1)$

**The 'Aha' Moment:** 
The requirement to check equality of concatenated strings without needing the final string itself suggests simulating the concatenation using pointers to avoid $O(N)$ auxiliary space.

**Summary:** 
Use nested pointers (array index and character index) to stream-compare two fragmented strings in constant space.

---