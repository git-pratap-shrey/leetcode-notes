---
title: "Count Subarrays With Fixed Bounds"
slug: count-subarrays-with-fixed-bounds
date: "2026-10-24"
---

# My Solution
~~~java
class Solution {
    public long countSubarrays(int[] nums, int minK, int maxK) {
        int lastmin = -1;
        int lastmax = -1;
        int lastinvalid = -1;
        long count =0;
        for(int i=0;i<nums.length;i++){
            if(nums[i]==minK){
                lastmin = i;
            }
            if(nums[i]==maxK){
                lastmax = i;
            }
            if(nums[i]>maxK || nums[i]<minK){
                lastinvalid = i;
            }
            int validstart= Math.min(lastmin,lastmax);
            int newsub = Math.max(0,validstart-lastinvalid);
            count += newsub;
        }
        return count;
    }
}
~~~

# Submission Review
## Approach
- **Technique**: Sliding Window / Two-Pointer (Single Pass).
- **Optimality**: Optimal. The problem is solved in a single linear scan by tracking the most recent indices of the required bounds and the most recent invalid element.

## Complexity
- **Time Complexity**: $O(n)$ where $n$ is the length of the `nums` array. Each element is processed exactly once.
- **Space Complexity**: $O(1)$. Only a constant number of integer/long variables are used regardless of input size.

## Efficiency Feedback
- **Runtime**: Very efficient. The logic uses basic arithmetic and comparisons inside a single loop.
- **Memory**: Minimal. No auxiliary data structures are allocated.
- **Observation**: Using `Math.max(0, validstart - lastinvalid)` correctly handles cases where the required bounds have not yet been encountered (indices are -1).

## Code Quality
- **Readability**: Good. The logic is straightforward and mirrors the mathematical requirement of the problem.
- **Structure**: Good. The flow is linear and clean.
- **Naming**: Moderate. 
    - `lastmin`, `lastmax`, and `lastinvalid` are clear.
    - `newsub` is slightly ambiguous; `validSubarraysEndingHere` would be more descriptive.
- **Improvements**:
    - Consistent casing for variable names (e.g., `validstart` should be `validStart` to follow Java camelCase conventions).
    - The logic is concise, no structural changes are required.

---

# Question Revision
# Revision Report: Count Subarrays With Fixed Bounds

### Pattern
**Sliding Window / Three-Pointer Technique**

### Brute Force
Iterate through every possible subarray $[i, j]$. For each subarray, scan all elements to check if:
1. All elements are within the range `[minK, maxK]`.
2. At least one element equals `minK`.
3. At least one element equals `maxK`.
**Complexity:** $O(n^3)$ or $O(n^2)$ with optimization.

### Optimal Approach
Maintain three pointers/indices while iterating through the array:
1. `badIdx`: The index of the last element that falls outside `[minK, maxK]`.
2. `leftK`: The index of the last seen element equal to `minK`.
3. `rightK`: The index of the last seen element equal to `maxK`.

For every index `i`, if the current element is within bounds, the number of valid subarrays ending at `i` is:
$$\max(0, \min(\text{leftK}, \text{rightK}) - \text{badIdx})$$

**Complexity:**
- **Time:** $O(n)$ — single pass through the array.
- **Space:** $O(1)$ — only tracking three integer indices.

### The 'Aha' Moment
The requirement for *both* a minimum and maximum value to exist within a range defined by *invalid* boundaries suggests tracking the "last seen" positions of the required bounds relative to the last "illegal" element.

### Summary
Count valid subarrays by subtracting the last invalid index from the leftmost of the two required bound indices.

---