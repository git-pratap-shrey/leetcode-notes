---
title: "To Lower Case"
slug: to-lower-case
date: "2026-07-28"
---

# My Solution
~~~

~~~

# Submission Review
No code was provided for analysis. Please provide the solution you would like me to review.

---

# Question Revision
### To Lower Case

**Pattern:** String Manipulation / ASCII Mapping

**Brute Force:** Use the language's built-in `.toLowerCase()` or `.lower()` method.

**Optimal Approach:** 
Iterate through the string; if a character falls within the ASCII range of 'A' (65) to 'Z' (90), add 32 to its integer value to shift it to the lowercase range ('a' = 97).
- **Time Complexity:** $O(n)$
- **Space Complexity:** $O(n)$ (to store the resulting string)

**The 'Aha' Moment:** The consistent 32-point offset between uppercase and lowercase letters in the ASCII table allows for a simple mathematical transformation.

**Summary:** Convert uppercase characters to lowercase by adding 32 to their ASCII values.

---