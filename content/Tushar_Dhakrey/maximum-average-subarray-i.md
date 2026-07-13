---
title: "Maximum Average Subarray I"
slug: maximum-average-subarray-i
date: "2026-06-02"
---

# My Solution
~~~

~~~

# Submission Review
No code was provided for analysis. Please provide the source code and the language used to receive a professional review.

---

# Question Revision
### Maximum Average Subarray I

**Pattern:** Sliding Window (Fixed Size)

**Brute Force:** Iterate through every possible starting index $i$, calculate the sum of the next $k$ elements, and track the maximum average.
- **Time:** $O(n \cdot k)$
- **Space:** $O(1)$

**Optimal Approach:** 
1. Calculate the sum of the first window of size $k$.
2. Slide the window across the array by adding the incoming element and subtracting the outgoing element to update the sum in $O(1)$.
3. Track the maximum sum encountered.
4. Divide the maximum sum by $k$ at the end to obtain the maximum average.
- **Time:** $O(n)$
- **Space:** $O(1)$

**The 'Aha' Moment:** The requirement for a **contiguous** subarray of a **fixed length $k$** signals that we can reuse the sum of the previous window instead of recalculating from scratch.

**Summary:** Use a fixed-size sliding window to find the maximum sum of $k$ consecutive elements and divide by $k$ once.

---