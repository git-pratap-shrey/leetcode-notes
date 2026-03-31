### Revision Report: Longest Palindromic Substring

**Pattern:** Expand Around Center

**Brute Force:** Generate all possible substrings ($O(n^2)$) and check each for symmetry ($O(n)$), resulting in an **$O(n^3)$** complexity.

**Optimal Approach:**
*   **Logic:** A palindrome mirrors around its center. Since a center can be a single character (odd length, e.g., "aba") or between two characters (even length, e.g., "abba"), there are $2n - 1$ possible centers. Iterate through each center and expand outward as long as the characters match.
*   **Complexity:** $O(n^2)$ time and $O(1)$ space.

**The 'Aha' Moment:**
Realizing that a palindrome is inherently symmetric means you don't need to check all substrings; you only need to anchor at a center and grow outwards.

**Summary:**
To find the longest palindrome, treat every character and every gap between characters as a potential mirror center and expand until the symmetry breaks.
