---
title: "Longest Palindromic Substring"
slug: longest-palindromic-substring
date: "2026-06-12"
---

# My Solution
~~~

~~~

# Submission Review
Please provide the code you would like me to analyze. The code section in your request was empty.

---

# Question Revision
### Longest Palindromic Substring

**Pattern:** Expand Around Center

**Brute Force:**
Check every possible substring $(i, j)$ for the palindrome property. 
- Time: $O(n^3)$
- Space: $O(1)$

**Optimal Approach:**
Iterate through each index as a potential center. Since palindromes can be odd (center is a char) or even (center is between two chars), expand outwards from both cases as long as the characters match.
- Time: $O(n^2)$
- Space: $O(1)$

**The 'Aha' Moment:** 
A palindrome is defined by its symmetry around a center, meaning the longest one must be an expansion of the smallest possible palindrome.

**Summary:** 
Treat every index and every gap between indices as a center and expand outwards to find the maximum length.

---