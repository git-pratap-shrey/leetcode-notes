---
title: "Maximum Average Subarray I"
slug: maximum-average-subarray-i
date: "2026-06-12"
---

# My Solution
~~~java
class Solution {
    public double findMaxAverage(int[] nums, int k) {
        int maxSum = 0;
        for( int i = 0; i < k; i++){
            maxSum += nums[i];
        }
        int start = 0;
        int sum = maxSum;

        for ( int end = k; end < nums.length; end++){
            sum = sum - nums[start] + nums[end];
            if (sum > maxSum){
                maxSum = sum;
            }
           
            start++;
        }
        return (double) maxSum / k;

    
    }
}
~~~

# Submission Review
## Approach
- **Technique**: Sliding Window.
- **Optimality**: Optimal. It processes the array in a single pass, maintaining a running sum of the window of size $k$.

## Complexity
- **Time Complexity**: $O(n)$, where $n$ is the length of the `nums` array.
- **Space Complexity**: $O(1)$, as it only uses a few integer variables regardless of input size.

## Efficiency Feedback
- The runtime is optimal.
- **Critical Bug**: The initialization `int maxSum = 0;` is incorrect. If the array contains only negative numbers, the algorithm will incorrectly return `0.0` (or a value derived from 0) instead of the actual maximum negative average. `maxSum` should be initialized to the sum of the first window.

## Code Quality
- **Readability**: Moderate. The logic is simple, but the bug mentioned above affects correctness.
- **Structure**: Good. The separation between the initial window setup and the sliding phase is clear.
- **Naming**: Good. Variables like `maxSum`, `sum`, `start`, and `end` clearly describe their purpose.
- **Concrete Improvements**:
    - Change `int maxSum = 0;` to `int maxSum = sum;` after the first loop to handle negative input arrays.
    - The `start` variable is redundant; it can be replaced by `end - k`.

---

# Question Revision
### Maximum Average Subarray I

**Pattern:** Sliding Window (Fixed Size)

**Brute Force:** 
Iterate through every possible starting index $i$, calculate the sum of the next $k$ elements using a nested loop, and track the maximum average.
- Time: $O(n \cdot k)$
- Space: $O(1)$

**Optimal Approach:** 
1. Calculate the sum of the first $k$ elements to initialize the window.
2. Slide the window across the array: add the next element (`nums[i]`) and subtract the element that just left the window (`nums[i - k]`).
3. Track the maximum sum encountered; divide by $k$ only once at the end to get the maximum average.
- Time: $O(n)$
- Space: $O(1)$

**The 'Aha' Moment:** 
The requirement for a **contiguous** subarray of a **fixed length $k$** is the definitive signal to use a fixed-size sliding window.

**Summary:** 
Maintain a running sum of $k$ elements by adding the leading edge and subtracting the trailing edge to find the maximum sum in linear time.

---