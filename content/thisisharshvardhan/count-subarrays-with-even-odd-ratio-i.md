---
title: "Count Subarrays With Even Odd Ratio I"
slug: count-subarrays-with-even-odd-ratio-i
date: "2026-08-02"
---

# My Solution
~~~

~~~

# Submission Review
Please provide the code you would like me to analyze. The "Code" section in your request was left empty.

---

# Question Revision
### Revision Report: Count Subarrays With Even Odd Ratio I

**Pattern:** Prefix Sum + Hash Map

**Brute Force:** Iterate through all possible subarray pairs $(i, j)$, count the number of even and odd elements in each, and check if they satisfy the required ratio.
- **Complexity:** $O(n^2)$ time, $O(1)$ space.

**Optimal Approach:**
1. **Transformation:** Transform the array by assigning a value of $+1$ to even numbers and $-1$ to odd numbers (assuming a $1:1$ ratio).
2. **Prefix Sum:** Maintain a running `prefix_sum` as you iterate through the array.
3. **Frequency Tracking:** Store the frequency of each `prefix_sum` in a hash map.
4. **Counting:** If a `prefix_sum` repeats, it means the elements between the previous occurrence and the current index sum to $0$, indicating an equal number of evens and odds.
- **Time Complexity:** $O(n)$
- **Space Complexity:** $O(n)$

**The 'Aha' Moment:** When a problem asks for subarrays matching a specific ratio or balance, transform the elements into complementary values (e.g., $+1$ and $-1$) to turn it into a "zero-sum subarray" problem.

**Summary:** Transform elements to weights and use a hash map to track prefix sum frequencies for linear-time subarray counting.

---