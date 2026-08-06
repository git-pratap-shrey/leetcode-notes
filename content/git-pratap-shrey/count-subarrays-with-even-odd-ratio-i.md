---
title: "Count Subarrays With Even Odd Ratio I"
slug: count-subarrays-with-even-odd-ratio-i
date: "2026-08-02"
---

# My Solution
~~~

~~~

# Submission Review
Please provide the code you would like me to analyze. The "Code:" section in your request is currently empty.

---

# Question Revision
### Count Subarrays With Even Odd Ratio I

**Pattern:** Prefix Sum + Hash Map

**Brute Force:** 
Iterate through all possible subarray pairs $(i, j)$, count the number of even and odd elements in each, and increment the total if `even_count == odd_count`.
- **Time:** $O(n^2)$
- **Space:** $O(1)$

**Optimal Approach:**
1. Transform the array: Treat even numbers as $+1$ and odd numbers as $-1$.
2. The condition `even_count == odd_count` now means the subarray sum is exactly $0$.
3. Maintain a running `prefix_sum`. If the same `prefix_sum` value has been seen before, it means the elements between those two indices sum to $0$.
4. Use a hash map to store the frequency of each `prefix_sum` encountered. For every current `prefix_sum`, add its existing frequency to the total count.
- **Time:** $O(n)$
- **Space:** $O(n)$

**The 'Aha' Moment:** 
Converting a "count equality" constraint into a "zero-sum" problem allows the use of a prefix sum hash map to find subarrays in linear time.

**Summary:** 
Map evens to $1$ and odds to $-1$, then count pairs of identical prefix sums.

---