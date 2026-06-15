---
title: "Generate Parentheses"
slug: generate-parentheses
date: "2026-06-14"
---

# My Solution
~~~

~~~

# Submission Review
Please provide the code you would like me to review. Once the code is provided, I will analyze it based on your specified criteria.

---

# Question Revision
### Revision Report: Generate Parentheses

**Pattern:** Backtracking (State-space Search)

**Brute Force:**
Generate all possible $2^{2n}$ sequences of '(' and ')' of length $2n$ and validate each using a stack or counter.
*   **Time:** $O(2^{2n} \cdot n)$
*   **Space:** $O(n)$

**Optimal Approach:**
Use backtracking to build the string incrementally. Maintain `open` and `close` counts. Add an '(' if `open < n`, and add a ')' if `close < open`. This approach inherently ensures validity, generating only valid sequences (Catalan number complexity).
*   **Time:** $O(\frac{4^n}{\sqrt{n}})$
*   **Space:** $O(n)$ (Recursion stack depth)

**The 'Aha' Moment:**
When the problem requires building valid sequences where a constraint (like "well-formed") must be satisfied at every step of construction, pruning the recursion tree based on that constraint is more efficient than generating and checking.

**Summary:**
Whenever a construction problem requires keeping a running balance to stay "valid," use backtracking to prune paths that violate the constraint before they are completed.

---