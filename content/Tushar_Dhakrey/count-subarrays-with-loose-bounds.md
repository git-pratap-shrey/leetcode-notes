---
title: "Count Subarrays With Loose Bounds"
slug: count-subarrays-with-loose-bounds
date: "2026-10-24"
---

# My Solution
~~~java
class Solution {
    public long countSubarrays(int[] nums, int minK, int maxK) {
        long count = 0;
        int left = 0;
        for(int right=0;right<nums.length;right++){
            if(nums[right]<minK || nums[right]>maxK){
                left = right+1;
            }
            else{
                count += right-left+1;
            }
        }
        return count;
    }
}
~~~

# Submission Review
## Approach
- **Technique**: Two-pointer / Sliding Window.
- **Optimality**: Optimal. The solution counts subarrays ending at each index `right` that contain only elements within $[minK, maxK]$. When an invalid element is encountered, it resets the window start (`left`), effectively partitioning the array into valid segments.

## Complexity
- **Time Complexity**: $O(n)$ where $n$ is the length of `nums`. The array is traversed exactly once.
- **Space Complexity**: $O(1)$. Only a few primitive variables are used regardless of input size.

## Efficiency Feedback
- **Runtime**: Extremely efficient. It avoids nested loops and redundant checks.
- **Memory**: Minimal.
- **Observation**: The use of `long` for the `count` variable correctly prevents integer overflow for arrays up to $10^5$ elements (where the max result could be $\approx 5 \times 10^9$).

## Code Quality
- **Readability**: Good. The logic is concise and the flow is easy to follow.
- **Structure**: Good.
- **Naming**: Moderate. `left` and `right` are standard for sliding windows, though `minK` and `maxK` are specific to the problem.
- **Improvements**: 
    - The `else` block is technically redundant; the `count += right - left + 1` can be placed outside the `else` if `left` is updated first, but the current structure is more explicit about only counting when the current element is valid.
    - Consistent spacing around operators (e.g., `right=0` $\to$ `right = 0`) would improve visual consistency.

---

# Question Revision
# Revision Report: Count Subarrays With Loose Bounds

### Pattern
**Two Pointers / Sliding Window** (specifically: Counting subarrays via the "At Most" principle).

### Brute Force
Iterate through every possible subarray $(i, j)$, track the minimum and maximum values within that range, and check if they satisfy the bounds.
- **Complexity:** $O(n^2)$ time, $O(1)$ space.

### Optimal Approach
Instead of counting subarrays that satisfy the bounds directly, use the property:
`Count(Exact) = Count(At Most Upper Bound) - Count(At Most Lower Bound - 1)`.

1. Define a helper function `countAtMost(limit)` that counts all subarrays where the maximum element is $\le limit$.
2. Within `countAtMost`, use a sliding window: whenever you encounter an element $> limit$, reset the window.
3. For a valid window of length $k$, the number of subarrays is the sum of integers from $1$ to $k$, or $\frac{k(k+1)}{2}$.
4. Result is `countAtMost(upperBound) - countAtMost(lowerBound - 1)`.

- **Time Complexity:** $O(n)$ (two passes over the array).
- **Space Complexity:** $O(1)$.

### The 'Aha' Moment
When a problem asks for subarrays within a specific range $[L, R]$, calculating "subarrays with max $\le R$" minus "subarrays with max $\le L-1$" transforms a complex range constraint into a simpler prefix-style subtraction.

### Summary
Use the "At Most" subtraction pattern with a sliding window to convert a bounded range problem into two simpler monotonic counting problems.

---