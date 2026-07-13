---
title: "Maximum Subarray"
slug: maximum-subarray
date: "2026-06-02"
---

# My Solution
~~~

~~~

# Submission Review
Please provide the code implementation you would like me to review. The **Code** section of your request is currently empty, and per my instructions, I cannot hallucinate details or analyze a solution that has not been provided.

---

# Question Revision
### Maximum Subarray

**Pattern:** Dynamic Programming (Kadane's Algorithm)

**Brute Force:** Calculate the sum of all possible contiguous subarrays using nested loops. 
- Time: $O(n^2)$ | Space: $O(1)$

**Optimal Approach:** Iterate through the array while maintaining a `current_sum`. At each element, decide whether to add the element to the existing subarray or start a new subarray from that element (whichever is larger). Track the global maximum encountered.
- Time: $O(n)$
- Space: $O(1)$

**The 'Aha' Moment:** A subarray prefix with a negative sum will always decrease the potential sum of any subsequent subarray.

**Summary:** Reset the current running sum to zero whenever it becomes negative to ensure you only track potentially optimal subarrays.

---