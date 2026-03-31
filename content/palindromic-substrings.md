### Revision Report: Palindromic Substrings

**Pattern:** Expand Around Center (Two Pointers)

**Brute Force:**
Generate all possible substrings ($O(n^2)$) and verify if each is a palindrome ($O(n)$), resulting in a total complexity of **$O(n^3)$**.

**Optimal Approach:**
Treat every index (and the gap between indices) as a potential center of a palindrome. Expand outward as long as characters match.
*   **Complexity:** **$O(n^2)$** time; **$O(1)$** space.

**The 'Aha' Moment:**
A palindrome's symmetry allows you to grow outwards from its core, meaning you don't need to re-scan substrings—you only need to check the boundaries of the previous expansion.

**Summary:** 
Whenever you need to count palindromes, "expand from the middle" to turn a $O(n^3)$ validation problem into a $O(n^2)$ search.
