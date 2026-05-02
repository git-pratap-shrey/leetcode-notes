---
title: "Max Consecutive Ones"
slug: max-consecutive-ones
date: "2026-05-01"
---

# My Solution
~~~java
class Solution {
    public int findMaxConsecutiveOnes(int[] nums) {
        int n = nums.length;
        int max = 0;
        int maxans=0;
        for(int i=0;i<n;i++){
            if(nums[i]==1){
                max++;
            }
            else if(nums[i]==0){
                max = 0;
            }
            maxans = Math.max(maxans,max);
        }
        return maxans;
    }
}
~~~

# Submission Review
## Approach
- **Technique**: Single-pass linear scan (Iterative).
- **Optimality**: Optimal. The problem requires checking every element at least once to determine the maximum sequence.

## Complexity
- **Time Complexity**: $O(n)$, where $n$ is the length of the input array.
- **Space Complexity**: $O(1)$, as it only uses two integer variables regardless of input size.

## Efficiency Feedback
- The runtime and memory usage are minimal.
- **Minor Optimization**: `maxans = Math.max(maxans, max)` is called during every iteration. Moving this call inside the `if(nums[i] == 1)` block would slightly reduce the number of operations, though the impact is negligible in Java.

## Code Quality
- **Readability**: Moderate. The logic is simple, but variable naming is misleading.
- **Structure**: Good. The flow is logical and concise.
- **Naming**: Poor. 
    - `max` is used to track the *current* consecutive count, which is confusing. A name like `currentCount` would be more appropriate.
    - `maxans` is a non-standard abbreviation. `maxConsecutive` or `result` would be clearer.
- **Improvements**:
    - Rename `max` $\rightarrow$ `count`.
    - Rename `maxans` $\rightarrow$ `maxCount`.

---

# Question Revision
### Max Consecutive Ones

**Pattern:** Linear Scan / Greedy

**Brute Force:** Use nested loops to identify every contiguous subarray consisting only of ones and track the maximum length found.

**Optimal Approach:** Maintain a `current_count` and a `max_count`. Iterate through the array: increment `current_count` if the element is `1`, and reset it to `0` if the element is `0`. Update `max_count` at each step.
- **Time Complexity:** $O(n)$
- **Space Complexity:** $O(1)$

**The 'Aha' Moment:** The word "consecutive" in a linear array implies that a single pass with a reset trigger (the zero) is sufficient to capture all streaks.

**Summary:** Track the running length of ones and reset the counter immediately upon hitting a zero.

---