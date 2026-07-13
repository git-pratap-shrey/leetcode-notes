---
title: "Generate Parentheses"
slug: generate-parentheses
date: "2026-06-11"
---

# My Solution
~~~

~~~

# Submission Review
No code was provided for analysis. Please provide the implementation you would like me to review.

---

# Question Revision
### Generate Parentheses

**Pattern:** Backtracking / DFS

**Brute Force:** Generate all $2^{2n}$ possible combinations of parentheses and use a stack-based validator to filter only the well-formed ones.

**Optimal Approach:** 
Use recursive backtracking to build the string incrementally, maintaining counts of `open` and `closed` parentheses used.
1. **Add `(`**: If `open < n`.
2. **Add `)`**: If `closed < open` (ensures the string remains valid).
3. **Base Case**: When `string.length == 2 * n`, add to results.

- **Time Complexity:** $O(\frac{4^n}{\sqrt{n}})$ — The number of valid sequences is the $n$-th Catalan number.
- **Space Complexity:** $O(n)$ — Maximum depth of the recursion stack.

**The 'Aha' Moment:** The "well-formed" constraint implies a strict dependency: you can't place a closing bracket unless there is a matching, unmatched opening bracket already in the string.

**Summary:** Build the string recursively, ensuring open brackets don't exceed $n$ and closed brackets never exceed the current open count.

---