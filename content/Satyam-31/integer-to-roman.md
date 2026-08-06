---
title: "Integer to Roman"
slug: integer-to-roman
date: "2026-07-26"
---

# My Solution
~~~

~~~

# Submission Review
No code was provided for analysis. Please provide the solution you would like me to review.

---

# Question Revision
### Integer to Roman

**Pattern:** Greedy / Mapping

**Brute Force:** 
Hardcode every possible digit position (thousands, hundreds, tens, ones) using multiple `if-else` or `switch` blocks to handle standard and subtractive cases separately.

**Optimal Approach:**
1. Create a sorted mapping of Roman symbols to their integer values in descending order, including the subtractive pairs (e.g., `{"M": 1000, "CM": 900, "D": 500, ...}`).
2. Iterate through the mapping: while the current integer value is greater than or equal to the symbol's value, append the symbol to the result string and subtract the value from the integer.
- **Time Complexity:** $O(1)$ (The input range is limited to 3999, and the symbol set is constant).
- **Space Complexity:** $O(1)$ (Fixed-size mapping).

**The 'Aha' Moment:**
Treating subtractive pairs (like IV or CM) as their own unique "denominations" allows the problem to be solved as a simple greedy subtraction.

**Summary:** 
Map all standard and subtractive symbols in descending order and greedily consume the integer.

---