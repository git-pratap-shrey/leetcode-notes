---
title: "Maximum Average Subarray I"
slug: maximum-average-subarray-i
date: "2026-06-02"
---

# My Solution
~~~

~~~

# Submission Review
## Approach
- **Technique:** Sliding Window.
- **Optimality:** Optimal. It processes the array in a single pass, avoiding the $O(n \cdot k)$ complexity of a naive brute-force approach.

## Complexity
- **Time Complexity:** $O(n)$, where $n$ is the length of the input array. Each element is visited at most twice.
- **Space Complexity:** $O(1)$. Only a constant amount of extra space is used for variables.

## Efficiency Feedback
- **Runtime:** Highly efficient. By maintaining a running sum and updating it using the difference between the entering and exiting elements of the window, the solution minimizes redundant additions.
- **Precision/Safety:** Using `double` for the `sum` and `max` variables prevents potential integer overflow before the final division, which is a critical detail for large input values.

## Code Quality
- **Readability:** Good. The logic is straightforward and follows a standard sliding window implementation.
- **Structure:** Good. The method is concise and performs a single logical task.
- **Naming:** Good. Variable names (`sum`, `max`, `k`) are clear and descriptive within the context of the problem.
- **Improvements:** No meaningful improvements needed; the implementation is clean and idiomatic.

---

# Question Revision
### Revision Report: Maximum Average Subarray I

**Pattern:** Sliding Window (Fixed Size)

**Brute Force:** 
Iterate through all possible starting positions $i$ from $0$ to $n-k$, calculating the sum of the next $k$ elements for each.
* **Time:** $O(n \cdot k)$
* **Space:** $O(1)$

**Optimal Approach:** 
Calculate the sum of the first $k$ elements. Slide the window across the array by adding the next element and subtracting the element that is no longer in the window. Track the maximum sum found and divide by $k$ at the end.
* **Time:** $O(n)$
* **Space:** $O(1)$

**The 'Aha' Moment:** 
The requirement for a **contiguous subarray** of a **fixed length** $k$ is the primary signal to use a fixed-size sliding window.

**Summary:** 
Maintain a running sum of size $k$ to find the maximum total, dividing by $k$ only once at the end to avoid floating-point overhead.

---