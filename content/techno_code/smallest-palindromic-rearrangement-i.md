---
title: "Smallest Palindromic Rearrangement I"
slug: smallest-palindromic-rearrangement-i
date: "2026-07-28"
---

# My Solution
~~~

~~~

# Submission Review
It appears that you have not provided the code for analysis. Please provide the implementation you would like me to review, and I will analyze it according to the specified criteria.

---

# Question Revision
### Revision Report: Smallest Palindromic Rearrangement I

**Pattern:** Frequency Map + Greedy Construction

**Brute Force:** 
Generate all possible permutations of the string, filter for those that are palindromes, and select the lexicographically smallest one. 
Complexity: $O(n! \cdot n)$

**Optimal Approach:**
1. **Frequency Count:** Count occurrences of each character.
2. **Feasibility Check:** A palindrome is possible if and only if at most one character has an odd frequency.
3. **Greedy Construction:** 
    * Iterate through the alphabet ('a' to 'z').
    * Append half of each character's count to a `first_half` string.
    * If a character has an odd count, store it as the `middle` element.
4. **Final Assembly:** The result is `first_half` + `middle` + `reverse(first_half)`.

**Complexity:**
* **Time:** $O(n)$ to count characters and construct the string.
* **Space:** $O(1)$ additional space (fixed alphabet size of 26) or $O(n)$ to store the output.

**The 'Aha' Moment:**
The requirement for the "lexicographically smallest" result dictates that the smallest available characters must be placed at the outermost indices of the palindrome.

**Summary:**
Verify palindrome feasibility via character counts, then greedily build the first half from smallest to largest characters to ensure the lexicographically minimum result.

---