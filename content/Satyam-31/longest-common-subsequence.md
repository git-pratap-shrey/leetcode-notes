---
title: "Longest Common Subsequence"
slug: longest-common-subsequence
date: "2026-09-08"
---

# My Solution
~~~cpp
class Solution {
public:
    bool isRectangleOverlap(vector<int>& rec1, vector<int>& rec2) {
        return !(rec1[2] <= rec2[0] ||rec1[0] >= rec2[2] || rec1[3] <= rec2[1] || rec1[1] >= rec2[3]);
    }
};
~~~

# Submission Review
## Approach
- **Technique:** Geometric boundary check (Separating Axis Theorem for AABB).
- **Optimality:** Optimal. It uses a constant number of comparisons to determine non-overlap.
- **Critical Error:** The code provided solves the **"Rectangle Overlap"** problem, but the problem statement specified was **"Longest Common Subsequence"**. The implementation is entirely irrelevant to the requested problem.

## Complexity
- **Time Complexity:** $O(1)$
- **Space Complexity:** $O(1)$

## Efficiency Feedback
- The logic is highly efficient for the rectangle overlap problem as it returns as soon as a separating boundary is found.

## Code Quality
- **Readability:** Good. The logic is a concise single-line return.
- **Structure:** Good.
- **Naming:** Moderate. `rec1` and `rec2` are acceptable, though the indices (0-3) are implicit; named constants or a struct would improve clarity.
- **Concrete Improvements:**
    - Fix the logic to actually implement the **Longest Common Subsequence** (DP approach) as per the problem title.
    - If keeping the rectangle logic, adding comments explaining the index mapping (e.g., `[0]: x1, [1]: y1, [2]: x2, [3]: y2`) would improve maintainability.

---

# Question Revision
# Revision Report: Longest Common Subsequence (LCS)

- **Pattern:** Dynamic Programming (2D Grid / String Matching)
- **Brute Force:** Use recursion to explore all possible subsequences. For every pair of characters, if they match, increment count; if they don't, branch into two recursive calls (skip character from string A or skip character from string B).
- **Optimal Approach:** Use a 2D DP table `dp[i][j]` where the value represents the LCS of `text1[0...i-1]` and `text2[0...j-1]`.
    - **Match:** If `text1[i-1] == text2[j-1]`, then `dp[i][j] = 1 + dp[i-1][j-1]`.
    - **Mismatch:** If they don't match, take the maximum of skipping one character from either string: `dp[i][j] = max(dp[i-1][j], dp[i][j-1])`.
    - **Complexity:** 
        - Time: $O(N \times M)$
        - Space: $O(N \times M)$ (can be optimized to $O(\min(N, M))$ using two rows).
- **The 'Aha' Moment:** The problem asks for the "longest" sequence (optimization) and involves comparing two strings where a decision at one index depends on the results of previous indices.
- **Summary:** Use a 2D grid to track matches: increment diagonally on a match, otherwise inherit the maximum from the top or left cell.

---