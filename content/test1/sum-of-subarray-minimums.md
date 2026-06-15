---
title: "Sum of Subarray Minimums"
slug: sum-of-subarray-minimums
date: "2026-06-10"
---

# My Solution
~~~

~~~

# Submission Review
Please provide the code you would like me to review. You did not include the source code in your message.

Once you provide the code, I will analyze it based on your criteria:

## Approach
- Identify the technique used.
- Assess optimality.

## Complexity
- Time and Space Complexity.
- Explanation of any bottlenecks.

## Efficiency Feedback
- Runtime/memory observations.
- Specific, actionable optimizations.

## Code Quality
- Readability, Structure, and Naming assessments with concrete suggestions.

---

# Question Revision
### Revision Report: Sum of Subarray Minimums

**Pattern:** Monotonic Stack

**Brute Force:** Generate all possible subarrays, find the minimum for each, and sum them.
*   **Time:** $O(n^2)$
*   **Space:** $O(1)$

**Optimal Approach:** 
Calculate the contribution of each element $A[i]$ as the minimum of a subarray. For each $A[i]$, find the distance to the nearest smaller element to the left ($L$) and to the right ($R$). The number of subarrays where $A[i]$ is the minimum is $(i - L) \times (R - i)$. Sum these products multiplied by $A[i]$.
*   **Time:** $O(n)$
*   **Space:** $O(n)$

**The 'Aha' Moment:** Whenever you need to determine the range in which an element acts as an extremum (min/max), the "Next Smaller/Greater Element" pattern via a Monotonic Stack is the standard tool.

**Summary:** Treat each element as a "center" and use a monotonic stack to find its span of influence, turning a subarray search problem into a local contribution problem.

---