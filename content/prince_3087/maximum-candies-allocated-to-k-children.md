---
title: "Maximum Candies Allocated to K Children"
slug: maximum-candies-allocated-to-k-children
date: "2026-06-10"
---

# My Solution
~~~

~~~

# Submission Review
Please provide the source code you would like me to analyze. The **Code:** section of your request was left blank, and I cannot perform a review without the implementation.

---

# Question Revision
### Maximum Candies Allocated to K Children

**Pattern:** Binary Search on Answer

**Brute Force:** 
Iterate through all possible candy counts from 1 up to the maximum pile size. For each count, calculate how many children can be satisfied. The largest count that satisfies $\ge K$ children is the answer.

**Optimal Approach:**
Since the ability to satisfy $K$ children is monotonic (if $X$ candies per child work, $X-1$ also works), binary search the range $[1, \max(\text{candies})]$. For each `mid` value, calculate the total children served using $\sum (\text{pile} // \text{mid})$. If the sum is $\ge K$, the value is feasible; attempt to find a larger value in the upper half.

*   **Time Complexity:** $O(n \log(\max(\text{candies})))$
*   **Space Complexity:** $O(1)$

**The 'Aha' Moment:** 
The problem asks to "maximize the minimum" (or a specific threshold) and exhibits monotonicity, which is the classic signal for binary search on the result space.

**Summary:** 
Use binary search to find the maximum candies per child by summing the floor division of each pile by the candidate value.

---