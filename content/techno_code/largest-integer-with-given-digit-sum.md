---
title: "Largest Integer With Given Digit Sum"
slug: largest-integer-with-given-digit-sum
date: "2026-07-26"
---

# My Solution
~~~

~~~

# Submission Review
Please provide the code you would like me to analyze. The `Code:` section in your request was left empty.

---

# Question Revision
### Largest Integer With Given Digit Sum

**Pattern:** Greedy

**Brute Force:**
Iterate through all possible combinations of digits that sum to `digitSum` and track the maximum value found. This is computationally infeasible due to the exponential number of combinations.

**Optimal Approach:**
To maximize the integer, place the largest possible digits ($9$) in the most significant positions (leftmost).
1. Check if `digitSum > maxNum * 9`; if so, return `"-1"`.
2. Iterate from the first digit to the last:
   - Place $\min(9, \text{remaining digitSum})$ at the current position.
   - Subtract the placed value from `remaining digitSum`.
3. Continue until all `maxNum` positions are filled.

**Complexity:**
- **Time:** $O(\text{maxNum})$ to construct the string.
- **Space:** $O(\text{maxNum})$ to store the result.

**The 'Aha' Moment:**
The requirement for the "largest" integer dictates a greedy strategy: prioritize the highest possible digits at the highest place values.

**Summary:**
Fill the number from left to right with as many 9s as possible, followed by the remaining sum, and pad the rest with 0s.

---