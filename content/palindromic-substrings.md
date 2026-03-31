### Revision Report: Palindromic Substrings

**Pattern:** Expand Around Center (Two Pointers)

**Brute Force:**
Generate all possible substrings ($O(n^2)$) and check if each is a palindrome ($O(n)$), resulting in a total complexity of **$O(n^3)$**.

**Optimal Approach:**
A palindrome mirrors around its center. Since a palindrome of length $n$ has $2n-1$ possible centers (each character and the space between characters), iterate through every center and expand outwards as long as the characters match.
*   **Complexity:** **$O(n^2)$** time; **$O(1)$** space.

**The 'Aha' Moment:**
When a problem asks for all substrings with a specific property, don't build the substrings; instead, treat every index as a potential anchor point to "grow" your solution.

**Summary:** 
To count palindromes efficiently, treat every character and every gap between characters as a center and expand outward until the symmetry breaks.
