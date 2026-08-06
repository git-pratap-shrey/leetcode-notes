---
title: "Count Subarrays With Even Odd Ratio I"
slug: count-subarrays-with-even-odd-ratio-i
date: "2026-08-03"
---

# My Solution
~~~

~~~

# Submission Review
Please provide the code you would like me to analyze. The "Code:" section of your request is currently empty.

---

# Question Revision
### Count Subarrays With Even Odd Ratio I

**Pattern:** Prefix Sum + Hash Map

**Brute Force:** Iterate through all possible subarrays $(i, j)$, counting evens and odds for each.
- **Time:** $O(n^2)$
- **Space:** $O(1)$

**Optimal Approach:** 
Transform the array: map even numbers to $+1$ and odd numbers to $-1$. The problem then becomes finding subarrays that sum to $0$. Maintain a running prefix sum and a hash map to store the frequency of each sum encountered. If a prefix sum repeats, the range between the two occurrences has an equal number of evens and odds.
- **Time:** $O(n)$
- **Space:** $O(n)$

**The 'Aha' Moment:** Converting a "count balance" requirement into a "zero-sum" problem by mapping binary states to $+1$ and $-1$.

**Summary:** Use a hash map to track prefix sums of parity-mapped values ($\text{even}=1, \text{odd}=-1$) to find subarrays with equal counts.

---