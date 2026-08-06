---
title: "Generate Parentheses"
slug: generate-parentheses
date: "2026-08-05"
---

# My Solution
~~~

~~~

# Submission Review
No code was provided in the `Code:` section. Please provide the implementation you would like me to review, and I will analyze it according to the specified criteria.

---

# Question Revision
### Generate Parentheses

**Pattern:** Backtracking

**Brute Force:** 
Generate all $2^{2n}$ possible combinations of brackets and use a stack-based validator to filter only the well-formed ones. 
Complexity: $O(2^{2n} \cdot n)$

**Optimal Approach:** 
Use recursive backtracking to build the string incrementally. Maintain counts of `open` and `closed` brackets used. 
1. Add `(` if `open < n`.
2. Add `)` if `closed < open`.
3. Base case: when string length reaches $2n$.

**Complexity:**
- **Time:** $O(\frac{4^n}{\sqrt{n}})$ — proportional to the $n$-th Catalan number.
- **Space:** $O(n)$ — maximum depth of the recursion stack.

**The 'Aha' Moment:** 
The requirement to maintain a "well-formed" state at every step implies a decision tree where paths are pruned the moment `closed > open`.

**Summary:** 
Build the string recursively by only adding an opening bracket if under the limit and a closing bracket if it doesn't exceed the current number of open brackets.

---