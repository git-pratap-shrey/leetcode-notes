---
title: "Maximum Average Subarray I"
slug: maximum-average-subarray-i
date: "2026-06-02"
---

# My Solution
~~~

~~~

# Submission Review
No code was provided for analysis. Please provide the source code you would like me to review.

---

# Question Revision
### Maximum Average Subarray I

**Pattern:** Sliding Window (Fixed Size)

**Brute Force:** Iterate through all possible subarrays of length $k$, calculating the sum for each. 
- **Complexity:** $O(n \cdot k)$ time, $O(1)$ space.

**Optimal Approach:** 
1. Calculate the sum of the first $k$ elements to initialize the window.
2. Slide the window across the array: add the next element and subtract the element that is no longer in the window.
3. Track the maximum sum encountered during the process.
4. Divide the maximum sum by $k$ to get the maximum average.
- **Time Complexity:** $O(n)$
- **Space Complexity:** $O(1)$

**The 'Aha' Moment:** The requirement for a **contiguous** subarray of a **fixed length $k$** is the definitive signal to use a Fixed-Size Sliding Window.

**Summary:** Maintain a running sum of $k$ elements by adding the entering element and subtracting the exiting element to find the maximum sum in linear time.

---