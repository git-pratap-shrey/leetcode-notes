---
title: "Count Subarrays With Even Odd Ratio I"
slug: count-subarrays-with-even-odd-ratio-i
date: "2026-08-02"
---

# My Solution
~~~

~~~

# Submission Review
Please provide the code you would like me to analyze. The **Code** section of your request is currently empty, so I cannot perform the review.

---

# Question Revision
### Revision Report: Count Subarrays With Even Odd Ratio

**Pattern:** Prefix Sum + Hash Map (Difference Tracking)

**Brute Force:** 
Iterate through all possible subarrays using nested loops, count the number of even and odd elements in each, and check if they satisfy the required ratio.
- **Time:** $O(n^2)$
- **Space:** $O(1)$

**Optimal Approach:**
1. Transform the array: Assign a value to even numbers (e.g., $+1$) and a different value to odd numbers (e.g., $-1$).
2. Maintain a running `prefix_sum` as you traverse the array.
3. Use a Hash Map to store the frequency of each `prefix_sum` encountered.
4. If the current `prefix_sum` has been seen before, the number of subarrays ending here that satisfy the ratio is equal to the count stored in the map for that sum.
- **Time:** $O(n)$
- **Space:** $O(n)$

**The 'Aha' Moment:** 
Converting a relative count or ratio into a numeric difference allows you to treat the problem as finding subarrays that sum to zero.

**Summary:** 
Map parity to opposite signs and use a prefix sum frequency map to find subarrays with a net difference of zero in linear time.

---