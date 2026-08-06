---
title: "Maximum Average Subarray I"
slug: maximum-average-subarray-i
date: "2026-08-04"
---

# My Solution
~~~

~~~

# Submission Review
No code was provided for analysis. Please provide the implementation and the language used to proceed with the review.

---

# Question Revision
### Revision Report: Maximum Average Subarray I

**Pattern:** Sliding Window (Fixed Size)

**Brute Force:** Iterate through all possible subarrays of length $k$, calculate their sums using a nested loop, and track the maximum.
- **Time Complexity:** $O(n \cdot k)$
- **Space Complexity:** $O(1)$

**Optimal Approach:** Initialize the sum of the first $k$ elements. Slide the window across the array by adding the next element and subtracting the element that is no longer in the window, updating the maximum sum encountered.
- **Time Complexity:** $O(n)$
- **Space Complexity:** $O(1)$

**The 'Aha' Moment:** The requirement for a "contiguous subarray" of a "fixed length $k$" is a direct signal to use a fixed-size sliding window.

**Summary:** To find the maximum average of a fixed-size window, maximize the window's sum and divide by $k$ at the end.

---