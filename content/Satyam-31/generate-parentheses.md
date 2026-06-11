---
title: "Generate Parentheses"
slug: generate-parentheses
date: "2026-06-11"
---

# My Solution
~~~

~~~

# Submission Review
Please provide the code you would like me to analyze. The `Code:` section of your request was empty.

---

# Question Revision
### Generate Parentheses

**Pattern:** Backtracking

**Brute Force:** Generate all $2^{2n}$ possible permutations of `(` and `)` and use a stack/counter to validate if each sequence is well-formed.

**Optimal Approach:** 
Use recursion to build the string incrementally. Only add a character if it maintains a valid state:
1. Add `(` if the count of open parentheses is less than $n$.
2. Add `)` if the count of closed parentheses is less than the count of open parentheses.

*   **Time Complexity:** $O(\frac{4^n}{\sqrt{n}})$ — proportional to the $n$-th Catalan number.
*   **Space Complexity:** $O(n)$ — depth of the recursion stack.

**The 'Aha' Moment:** The "well-formed" constraint means the number of closing brackets can never exceed opening brackets at any point in the string, allowing for efficient pruning of the search space.

**Summary:** Use backtracking to incrementally build sequences while enforcing `closed < open` and `open < n`.

---