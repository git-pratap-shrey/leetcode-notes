---
title: "Largest Integer With Given Digit Sum"
slug: largest-integer-with-given-digit-sum
date: "2026-07-26"
---

# My Solution
~~~

~~~

# Submission Review
Please provide the code you would like me to analyze. No code was included in your message.

---

# Question Revision
### Largest Integer With Given Digit Sum

**Pattern:** Greedy

**Brute Force:** Generate all possible combinations of digits that sum to $S$ with a length up to $D$, then identify the maximum value. This results in exponential time complexity.

**Optimal Approach:** 
To maximize the integer, prioritize the most significant digits (leftmost) by assigning the largest possible value (9) until the remaining sum $S$ is exhausted, while ensuring the total length does not exceed $D$.
1. If $S > 9 \times D$, return "-1" (impossible to reach sum $S$ within length $D$).
2. Iterate from the first digit to the $D$-th digit.
3. For each position, append $\min(9, S)$ to the result and subtract that value from $S$.
4. Stop once $S$ reaches 0.

**Complexity:**
- Time: $O(D)$
- Space: $O(D)$ to store the resulting string.

**The 'Aha' Moment:** To maximize a number, the most significant digits must be as large as possible, regardless of the digits that follow.

**Summary:** Fill the number from left to right with as many 9s as the sum $S$ allows, capping the total length at $D$.

---