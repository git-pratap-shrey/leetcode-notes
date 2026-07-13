---
title: "Sum of Subarray Minimums"
slug: sum-of-subarray-minimums
date: "2026-06-10"
---

# My Solution
~~~

~~~

# Submission Review
Please provide the code you would like me to analyze. No code was included in your request.

---

# Question Revision
### Sum of Subarray Minimums

**Pattern:** Monotonic Stack

**Brute Force:** Iterate through all possible subarray pairs $(i, j)$, find the minimum element within each range, and accumulate the sum. 
- **Complexity:** $O(n^2)$

**Optimal Approach:**
Instead of iterating through subarrays, calculate how many subarrays a specific element `arr[i]` acts as the minimum.
1. Use a monotonic increasing stack to find the **Previous Smaller Element (PSE)** and **Next Smaller Element (NSE)** for every index.
2. For an element at index `i`, let $L$ be the distance to the PSE and $R$ be the distance to the NSE.
3. The number of subarrays where `arr[i]` is the minimum is $L \times R$.
4. Contribution to total sum: $\text{arr}[i] \times (i - \text{PSE\_idx}) \times (\text{NSE\_idx} - i)$.
5. *Edge Case:* To avoid double-counting duplicate elements, use a strict inequality for one boundary (e.g., PSE) and non-strict for the other (NSE).

- **Time Complexity:** $O(n)$
- **Space Complexity:** $O(n)$

**The 'Aha' Moment:** When asked for the sum of a property across all subarrays, shift from "iterating subarrays" to "calculating the contribution of each individual element."

**Summary:** Use a monotonic stack to determine the range boundaries where each element is the minimum, then multiply the element by the number of subarrays it covers.

---