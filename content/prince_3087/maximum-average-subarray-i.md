---
title: "Maximum Average Subarray I"
slug: maximum-average-subarray-i
date: "2026-06-02"
---

# My Solution
~~~

~~~

# Submission Review
Please provide the code you would like me to analyze. The **Code** and **Language** sections of your request were left blank; therefore, I cannot perform a review.

---

# Question Revision
### Maximum Average Subarray I

**Pattern:** Sliding Window (Fixed Size)

**Brute Force:** Iterate through every possible starting index $i$, calculate the sum of the next $k$ elements, and track the maximum average.
- Time: $O(n \cdot k)$
- Space: $O(1)$

**Optimal Approach:** 
Calculate the sum of the first $k$ elements. Slide the window across the array by adding the next element and subtracting the element that is no longer in the window. Track the maximum sum encountered.
- Time: $O(n)$
- Space: $O(1)$

**The 'Aha' Moment:** The requirement for a "contiguous subarray" of a "fixed length $k$" indicates that we can update the window sum in $O(1)$ rather than re-summing.

**Summary:** To maximize the average of a fixed-length subarray, maximize its sum using a sliding window and divide by $k$ once at the end.

---