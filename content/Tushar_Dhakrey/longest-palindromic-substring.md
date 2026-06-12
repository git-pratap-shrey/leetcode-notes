---
title: "Longest Palindromic Substring"
slug: longest-palindromic-substring
date: "2026-06-12"
---

# My Solution
~~~

~~~

# Submission Review
Please provide the **language** and the **code** you would like me to analyze. I cannot perform a review without the source implementation.

---

# Question Revision
### Longest Palindromic Substring

**Pattern:** Expand Around Center (Two Pointers)

**Brute Force:** 
Check every possible substring ($O(n^2)$ pairs) and verify if it is a palindrome ($O(n)$), resulting in $O(n^3)$ time complexity.

**Optimal Approach:** 
Iterate through the string, treating each character (odd length) and the gap between characters (even length) as a potential center. Expand two pointers outwards as long as the characters match and boundaries are respected.
- **Time Complexity:** $O(n^2)$
- **Space Complexity:** $O(1)$

**The 'Aha' Moment:** 
Palindromes are symmetrical, meaning the center is the most efficient anchor point for validation rather than the boundaries.

**Summary:** 
Treat every index and gap as a center and expand outwards to find the longest mirror image.

---