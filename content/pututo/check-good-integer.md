---
title: "Check Good Integer"
slug: check-good-integer
date: "2026-06-14"
---

# My Solution
~~~

~~~

# Submission Review
Please provide the **code** and the **language** used. You have provided the problem name, but the code section is empty. I cannot perform the analysis without the implementation.

---

# Question Revision
### Problem: Check Good Integer

**Pattern:** String Iteration / Single Pass

**Brute Force:** Compare every pair of digits in the string to ensure they are identical.
- Time: $O(n^2)$
- Space: $O(1)$

**Optimal Approach:** Compare every digit in the string to the first character. If any digit differs, return `false`.
- **Time Complexity:** $O(n)$
- **Space Complexity:** $O(1)$

**The 'Aha' Moment:** "All digits are the same" implies that every single element must be identical to the first element.

**Summary:** A string is "good" if every character matches the character at index 0.

---