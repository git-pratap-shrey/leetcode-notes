### Revision Report: Longest Palindromic Substring

**Pattern:** Expand Around Center

**Brute Force:**
Check every possible substring ($O(n^2)$ total substrings) and verify if each is a palindrome ($O(n)$ check), resulting in **$O(n^3)$** complexity.

**Optimal Approach:**
Treat each character (and the gap between characters) as a potential center of a palindrome and expand outwards until the palindrome property is violated. 
*   **Complexity:** **$O(n^2)$** time and **$O(1)$** space.

**The 'Aha' Moment:**
Recognizing that a palindrome mirrors itself around its center means you don't need to check all substrings; you only need to explore the $2n-1$ possible centers (each character and each gap between them).

**Summary:**
Instead of verifying every substring, treat every character and every gap as a pivot and expand outward until the symmetry breaks.
