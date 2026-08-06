---
title: "Largest Integer With Given Digit Sum"
slug: largest-integer-with-given-digit-sum
date: "2026-07-26"
---

# My Solution
~~~

~~~

# Submission Review
Please provide the code you would like me to analyze. There was no code included in your message following the "Code:" label.

---

# Question Revision
### Largest Integer With Given Digit Sum

**Pattern:** Greedy

**Brute Force:** 
Generate all possible combinations of digits that sum to `digitSum` and have a length $\le$ `maxNumDigits`, then find the maximum. This is computationally infeasible due to the combinatorial explosion of digit placements.

**Optimal Approach:** 
To maximize the integer, prioritize filling the most significant digits (leftmost) with the largest possible value (9) until the `digitSum` budget is exhausted. If the budget is not a multiple of 9, place the remainder in the next slot and fill all remaining positions up to `maxNumDigits` with zeros to maximize the magnitude.
- **Time Complexity:** $O(\text{maxNumDigits})$
- **Space Complexity:** $O(\text{maxNumDigits})$ to store the resulting string.

**The 'Aha' Moment:** 
"Largest integer" signals a Greedy approach where you must maximize the value of the highest place-value positions first.

**Summary:** 
Fill the leftmost positions with as many 9s as possible, then the remainder, then pad the rest with 0s.

---