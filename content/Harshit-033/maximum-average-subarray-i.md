---
title: "Maximum Average Subarray I"
slug: maximum-average-subarray-i
date: "2026-06-02"
---

# My Solution
~~~

~~~

# Submission Review
No code was provided for analysis. Please provide the solution you would like me to review.

---

# Question Revision
### Maximum Average Subarray I

**Pattern:** Sliding Window (Fixed Size)

**Brute Force:** 
Iterate through all possible subarrays of length $k$, calculating the sum for each from scratch.
- Time: $O(n \cdot k)$
- Space: $O(1)$

**Optimal Approach:** 
1. Compute the sum of the first $k$ elements to initialize the window.
2. Slide the window across the array: add the next element (`nums[i]`) and subtract the element that just left the window (`nums[i - k]`).
3. Track the maximum sum encountered.
4. Divide the final maximum sum by $k$ to get the average.

- **Time Complexity:** $O(n)$
- **Space Complexity:** $O(1)$

**The 'Aha' Moment:** 
The requirement for a **contiguous subarray of a fixed length $k$** is the primary signal to use a fixed-size sliding window.

**Summary:** 
Maintain a running sum of $k$ elements and shift the window by adding the new lead and dropping the old tail to find the maximum sum in linear time.

---