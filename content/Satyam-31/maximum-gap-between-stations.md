---
title: "Maximum Gap Between Stations"
slug: maximum-gap-between-stations
date: "2026-08-16"
---

# My Solution
~~~cpp
class Solution {
public:
    bool uniformArray(vector<int>& nums1) {
        return true;
    }
};
~~~

# Submission Review
## Approach
*   **Technique**: Placeholder implementation.
*   **Optimality**: Non-optimal. The current implementation performs no logic and does not solve the stated problem (Maximum Gap Between Stations). It unconditionally returns `true`.

## Complexity
*   **Time Complexity**: $O(1)$.
*   **Space Complexity**: $O(1)$.
*   **Bottleneck**: The solution is incomplete; it ignores the input data entirely.

## Efficiency Feedback
*   The runtime is technically as fast as possible, but because the code does not perform any computation, it provides zero utility. To solve a "Maximum Gap" problem, an $O(N \log N)$ (sorting) or $O(N)$ (Bucket Sort/Pigeonhole Principle) approach is required.

## Code Quality
*   **Readability**: Good (due to simplicity, but misleading).
*   **Structure**: Poor (lacks any implementation logic).
*   **Naming**: Moderate. `uniformArray` is an unclear name for a function intended to find the maximum gap between stations.
*   **Improvements**:
    *   To find the maximum gap in linear time:
        1. Find the min and max values in the array.
        2. Use the Pigeonhole Principle to create buckets of size `ceil((max - min) / (n - 1))`.
        3. Track the min and max values within each bucket.
        4. The maximum gap will be between the maximum of one bucket and the minimum of the next non-empty bucket.

---

# Question Revision
### Revision Report: Maximum Gap (Bucket Sort)

**Pattern:** Bucket Sort / Pigeonhole Principle

**Brute Force:** 
Sort the array ($O(n \log n)$) and iterate through to find the maximum difference between adjacent elements.

**Optimal Approach:**
1. Find the min and max values to determine the range. 
2. Divide the range into $n-1$ buckets of size $size = \lceil(\text{max} - \text{min}) / (n-1)\rceil$.
3. By the Pigeonhole Principle, the maximum gap cannot exist within a single bucket; it must occur between the maximum of one bucket and the minimum of the next.
4. Track only the `min` and `max` of each bucket.
*   **Time Complexity:** $O(n)$
*   **Space Complexity:** $O(n)$

**The 'Aha' Moment:**
When the problem requires a linear time solution for an ordering-based task where the range of values is large but the number of elements is fixed, using the range to create buckets avoids the $O(n \log n)$ sorting bottleneck.

**Summary:**
If you need a sorted-order property but cannot afford an $O(n \log n)$ sort, use the range of the data to distribute values into buckets and compare only the bucket boundaries.

---