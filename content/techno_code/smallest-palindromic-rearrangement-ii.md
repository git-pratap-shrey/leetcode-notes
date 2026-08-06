---
title: "Smallest Palindromic Rearrangement II"
slug: smallest-palindromic-rearrangement-ii
date: "2026-07-29"
---

# My Solution
~~~

~~~

# Submission Review
No code was provided for analysis. Please provide the implementation you would like me to review.

---

# Question Revision
### Smallest Palindromic Rearrangement II

**Pattern:** Greedy + Frequency Map

**Brute Force:** Generate all permutations of the string, filter for palindromes, and select the lexicographically smallest one. Time Complexity: $O(n! \cdot n)$.

**Optimal Approach:**
1. **Frequency Count:** Count occurrences of each character.
2. **Validity Check:** If more than one character has an odd frequency, a palindrome is impossible.
3. **Greedy Construction:** 
   - Iterate through characters 'a' through 'z'.
   - For each character, append half of its total count to a `half` string.
   - Store the single odd-frequency character (if any) as the `middle`.
4. **Mirroring:** The result is `half` + `middle` + `reverse(half)`.

- **Time Complexity:** $O(n)$ to count and construct the string.
- **Space Complexity:** $O(1)$ or $O(k)$ where $k$ is the alphabet size (constant 26).

**The 'Aha' Moment:** "Lexicographically smallest" combined with "Palindrome" requires placing the smallest available characters at the outermost positions.

**Summary:** Use a frequency map to greedily build the first half of the palindrome in alphabetical order, then mirror it.

---