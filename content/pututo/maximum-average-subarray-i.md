---
title: "Maximum Average Subarray I"
slug: maximum-average-subarray-i
date: "2026-06-08"
---

# My Solution
~~~

~~~

# Submission Review
Please provide the code you would like me to analyze. The **Code** section of your request was empty. Once you provide the implementation, I will review it for correctness, efficiency, and quality according to the specified criteria.

---

# Question Revision
### Maximum Average Subarray I

**Pattern:** Sliding Window (Fixed Size)

**Brute Force:** 
Iterate through all possible subarrays of length $k$, calculating the sum for each individually.
- Time: $O(n \cdot k)$
- Space: $O(1)$

**Optimal Approach:** 
Calculate the sum of the first $k$ elements. Slide the window across the array by adding the next element and subtracting the first element of the previous window, tracking the maximum sum found. Divide the final maximum sum by $k$ to get the average.
- Time: $O(n)$
- Space: $O(1)$

**The 'Aha' Moment:** 
The requirement for a "contiguous subarray" of a "fixed length $k$" is a direct signal to use a fixed-size sliding window.

**Summary:** 
To maximize the average of a fixed-length subarray, maximize its sum using a single pass sliding window.

---