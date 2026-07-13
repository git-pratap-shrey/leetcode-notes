---
title: "Generate Parentheses"
slug: generate-parentheses
date: "2026-06-14"
---

# My Solution
~~~

~~~

# Submission Review
No code was provided for analysis. Please provide the source code you would like me to review.

---

# Question Revision
### Generate Parentheses

**Pattern:** Backtracking

**Brute Force:** Generate all $2^{2n}$ possible sequences of parentheses and use a stack to validate if each sequence is well-formed.

**Optimal Approach:** Use recursion to build the string incrementally. Maintain counters for `open` and `closed` parentheses:
1. Add `(` if `open < n`.
2. Add `)` if `closed < open`.
3. Base case: When string length reaches $2n$, add to results.

*   **Time Complexity:** $O(\frac{4^n}{\sqrt{n}})$ (The $n$-th Catalan number)
*   **Space Complexity:** $O(n)$ (Maximum depth of the recursion stack)

**The 'Aha' Moment:** The "well-formed" constraint means the number of closing parentheses can never exceed the number of opening parentheses at any point in the string.

**Summary:** Construct valid sequences by enforcing `closed < open` and `open < n` constraints during recursion to prune invalid paths immediately.

---