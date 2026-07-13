---
title: "Valid Binary Strings With Cost Limit"
slug: valid-binary-strings-with-cost-limit
date: "2026-06-07"
---

# My Solution
~~~

~~~

# Submission Review
Please provide the code you would like me to analyze. The "Code" section in your request was empty. Once provided, I will review it for correctness, efficiency, and quality according to the specified format.

---

# Question Revision
### Valid Binary Strings With Cost Limit

**Pattern:** Dynamic Programming (Counting with State)

**Brute Force:**
Generate all $2^n$ possible binary strings via recursion/backtracking, calculate the total cost for each, and count those where $\text{cost} \le X$.

**Optimal Approach:**
Use a DP table where `dp[i][c]` represents the number of valid strings of length $i$ with a cumulative cost of $c$. For each index $i$, transition to $i+1$ by adding either '0' or '1', provided the resulting cost $c + \text{cost}_i \le X$. To optimize space, use only two rows (current and previous) since $i+1$ only depends on $i$.

*   **Time Complexity:** $O(n \cdot X)$
*   **Space Complexity:** $O(X)$

**The 'Aha' Moment:** 
The requirement to count "number of ways" subject to a "cumulative sum limit" indicates the sum must be part of the DP state.

**Summary:**
Use DP to count combinations by tracking the accumulated cost as a state variable to ensure it remains within the given limit.

---