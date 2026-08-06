---
title: "Sum of Square Numbers"
slug: sum-of-square-numbers
date: "2026-08-01"
---

# My Solution
~~~

~~~

# Submission Review
No code was provided for analysis. Please provide the source code to proceed with the review.

---

# Question Revision
### Sum of Square Numbers

**Pattern:** Two Pointers

**Brute Force:** 
Iterate through all possible values of $a$ from $0$ to $\sqrt{c}$ and for each $a$, check if $c - a^2$ is a perfect square.
- **Complexity:** $O(\sqrt{c})$ time, $O(1)$ space.

**Optimal Approach:** 
Initialize two pointers: `left = 0` and `right = floor(sqrt(c))`. While `left <= right`, calculate the current sum of squares. If the sum equals $c$, return true; if it is less than $c$, increment `left` to increase the sum; if it is greater than $c$, decrement `right` to decrease the sum.
- **Time Complexity:** $O(\sqrt{c})$
- **Space Complexity:** $O(1)$

**The 'Aha' Moment:** Since the possible values of $a$ and $b$ are bounded and sorted, we can shrink the search space linearly from both ends.

**Summary:** Use two pointers starting at $0$ and $\sqrt{c}$ to converge on the target sum.

---