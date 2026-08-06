---
title: "Smallest Palindromic Rearrangement I"
slug: smallest-palindromic-rearrangement-i
date: "2026-07-28"
---

# My Solution
~~~

~~~

# Submission Review
Please provide the code you would like me to analyze. The `Code` section in your request is currently empty.

---

# Question Revision
### Smallest Palindromic Rearrangement I

**Pattern:** Frequency Map / Greedy

**Brute Force:** Generate all permutations of the string, filter for those that are palindromes, and return the lexicographically first one. 
Complexity: $O(n! \cdot n)$

**Optimal Approach:**
1. **Frequency Count:** Use an array/map to count occurrences of each character.
2. **Palindrome Validation:** If more than one character has an odd frequency, a palindrome is impossible.
3. **Greedy Construction:** 
    - Iterate from 'a' to 'z'. For each character, append half of its count to a `first_half` string.
    - Identify the single character with an odd frequency (if any) to serve as the `middle`.
4. **Assembly:** Result = `first_half` + `middle` + `reverse(first_half)`.

**Complexity:**
- **Time:** $O(n)$, where $n$ is the length of the string.
- **Space:** $O(k)$, where $k$ is the alphabet size (constant $O(26)$).

**The 'Aha' Moment:** "Lexicographically smallest" combined with "rearrangement" signals a greedy approach using sorted character frequencies.

**Summary:** Verify that at most one character has an odd frequency, then build the first half of the palindrome greedily from 'a' to 'z'.

---