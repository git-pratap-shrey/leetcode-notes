---
title: "Longest Balanced Substring After One Swap"
slug: longest-balanced-substring-after-one-swap
date: "2026-06-14"
---

# My Solution
~~~

~~~

# Submission Review
Please provide the source code you would like me to review. Once you paste the code, I will perform the analysis based on your criteria.

---

# Question Revision
### Revision Report: Longest Balanced Substring After One Swap

**Pattern:** Sliding Window / Greedy Prefix-Suffix Analysis

**Brute Force:**
Generate all possible swaps by iterating through every index pair $(i, j)$, perform the swap, and scan the entire string for the longest balanced substring.
*   **Complexity:** $O(n^3)$

**Optimal Approach:**
1.  **Preprocessing:** Calculate the maximum balanced substring length achievable for every starting position using a sliding window or stack-based approach. 
2.  **Constraint Handling:** Since only one swap is allowed, identify "near-balanced" segments (e.g., those missing exactly one '0' or '1' to be balanced). 
3.  **Swap Logic:** Pre-calculate counts of consecutive '0's and '1's. For every index, determine if swapping a character could merge two existing balanced segments or complete a sequence.
*   **Time Complexity:** $O(n)$
*   **Space Complexity:** $O(n)$

**The 'Aha' Moment:**
When a problem constraints a "single operation" that affects global structure, focus on pre-calculating local segment properties to evaluate the impact of that operation in constant time.

**Summary:**
Transform the global swap constraint into a local search by pre-calculating the boundaries of consecutive balanced segments.

---