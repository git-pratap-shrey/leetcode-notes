---
title: "Integer to Roman"
slug: integer-to-roman
date: "2026-07-27"
---

# My Solution
~~~

~~~

# Submission Review
No code was provided for analysis. Please provide the solution code to proceed with the review.

---

# Question Revision
### Integer to Roman

**Pattern:** Greedy / Mapping

**Brute Force:** Use nested `if-else` or `switch` blocks for every decimal place (thousands, hundreds, tens, ones) to handle standard and subtractive cases (e.g., 4 and 9) separately.

**Optimal Approach:**
Create a predefined mapping of integer values to their Roman symbols in descending order, including subtractive pairs (e.g., 900 $\rightarrow$ CM, 40 $\rightarrow$ XL). Iterate through this map; while the current value is less than or equal to the remaining number, append the symbol to the result and subtract the value.

*   **Time Complexity:** $O(1)$ — The input is capped at 3999, meaning the loop runs a constant maximum number of times.
*   **Space Complexity:** $O(1)$ — The mapping is fixed size and the output string length is bounded.

**The 'Aha' Moment:** Treating subtractive pairs (like IV or CM) as their own unique "digits" allows you to use a simple greedy subtraction loop.

**Summary:** Use a sorted map of value-symbol pairs and greedily subtract the largest possible value until the number reaches zero.

---