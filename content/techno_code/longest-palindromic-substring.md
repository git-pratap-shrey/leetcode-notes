---
title: "Longest Palindromic Substring"
slug: longest-palindromic-substring
date: "2026-08-03"
---

# My Solution
~~~

~~~

# Submission Review
No code was provided for analysis. Please provide the implementation you wish to have reviewed.

---

# Question Revision
### Longest Palindromic Substring

**Pattern:** Two Pointers (Expand Around Center)

**Brute Force:** Check every possible substring ($O(n^2)$) and verify if it's a palindrome ($O(n)$), resulting in $O(n^3)$ time complexity.

**Optimal Approach:**
- **Logic:** A palindrome mirrors around its center. Iterate through each character (odd length) and each gap between characters (even length) as a potential center. Expand outwards symmetrically as long as the characters match.
- **Time Complexity:** $O(n^2)$
- **Space Complexity:** $O(1)$

**The 'Aha' Moment:** Palindromes are defined by symmetry, meaning it is more efficient to start at the center and expand outwards than to check all possible boundaries.

**Summary:** Find the longest palindrome by expanding outwards from all $2n-1$ possible centers.

---