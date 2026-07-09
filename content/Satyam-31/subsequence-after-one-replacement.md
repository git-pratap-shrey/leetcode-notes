--- title: "Subsequence After One Replacement" slug: subsequence-after-one-replacement date: "2026-07-05" ---  # My Solution ~~~ - ~~~  # Submission Review No code was provided for analysis. Please provide the implementation you would like me to review.  ---  # Question Revision ### Revision Report: Subsequence After One Replacement

**Pattern:** Precomputation / Prefix-Suffix Sums

**Brute Force:** 
Iterate through every index $i$, replace $s[i]$ with every possible character in the alphabet, and re-count the target subsequence from scratch. 
Complexity: $O(n^2 \cdot \Sigma)$

**Optimal Approach:**
1. **Precompute:** Create prefix arrays for the count of characters required *before* the replacement point and suffix arrays for characters required *after* the replacement point.
2. **Evaluate:** Iterate through the string once. For each index $i$, treat it as the replacement point. Use the precomputed prefix and suffix values to calculate the new subsequence count in $O(1)$.
3. **Maximize:** Track the maximum value found across all possible replacements.

*   **Time Complexity:** $O(n)$
*   **Space Complexity:** $O(n)$

**The 'Aha' Moment:** 
The constraint "one replacement" indicates that the global result is a function of local change, meaning the impact of changing $s[i]$ depends only on the fixed counts of characters to its left and right.

**Summary:** 
Use prefix and suffix arrays to transform a global recount into a local $O(1)$ lookup for every possible replacement point.  ---