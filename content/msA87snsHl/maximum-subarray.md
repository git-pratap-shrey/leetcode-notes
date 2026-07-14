---
title: "Maximum Subarray"
slug: maximum-subarray
date: "2026-06-12"
---

# My Solution
~~~java
class Solution {
    public int maxSubArray(int[] nums) {
        
        int maxSum = nums[0];
        int sum = nums[0];
        for( int i = 1; i < nums.length; i++){
           if( nums[i] > nums[i] + sum){
              sum = nums[i];
           }
           else{
            sum = sum + nums[i];
           }
           if ( sum > maxSum){
            maxSum = sum;
            
           }
           
        }
        return maxSum;
    }
}
~~~

# Submission Review
## Approach
- **Technique**: Kadane's Algorithm (Dynamic Programming).
- **Optimality**: Optimal. It solves the problem in a single pass with constant extra space.

## Complexity
- **Time Complexity**: $O(n)$ where $n$ is the length of the input array.
- **Space Complexity**: $O(1)$ as it only uses two integer variables regardless of input size.

## Efficiency Feedback
- The implementation is highly efficient.
- The condition `nums[i] > nums[i] + sum` is mathematically equivalent to `sum < 0`. While correct, using `Math.max(nums[i], sum + nums[i])` is the more idiomatic way to express this logic in Java.

## Code Quality
- **Readability**: Moderate. The conditional logic `nums[i] > nums[i] + sum` is slightly unintuitive compared to checking if the previous accumulated sum is negative.
- **Structure**: Good. The linear flow is clear and handles the base case (single element array) correctly.
- **Naming**: Good. `maxSum` and `sum` clearly describe their roles.
- **Improvements**: 
    - Use `Math.max()` to simplify the `if-else` blocks.
    - Consistent spacing (e.g., remove leading space in `for( int i` and `if( nums[i]`).

---

# Question Revision
### Maximum Subarray (Kadane's Algorithm)

**Pattern:** Dynamic Programming / Greedy

**Brute Force:** Iterate through every possible start and end index pair to calculate the sum of all contiguous subarrays.
- **Complexity:** $O(n^2)$ time, $O(1)$ space.

**Optimal Approach:** Iterate through the array once, maintaining a `current_sum`. If `current_sum` drops below zero, discard it and restart the sum from the next element, as a negative prefix will only decrease the potential sum of future subarrays. Track the global maximum throughout the process.
- **Time Complexity:** $O(n)$
- **Space Complexity:** $O(1)$

**The 'Aha' Moment:** If the sum of the subarray leading up to the current element is negative, it is mathematically better to start a fresh subarray from the current element than to continue the existing one.

**Summary:** Discard negative prefix sums and keep track of the highest peak encountered.

---