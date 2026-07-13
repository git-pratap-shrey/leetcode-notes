---
title: "Maximum Average Subarray I"
slug: maximum-average-subarray-i
date: "2026-06-02"
---

# My Solution
~~~c
double findMaxAverage(int* nums, int numsSize, int k) {

    double current = 0;
    for(int i=0;i<k;i++) {
        current+=nums[i];
    }
    double max=current/k;
    for(int i=k;i<numsSize;i++) {
        current+=nums[i];      
        current-=nums[i-k];    
        double avg=current/k;

        if (avg>max) {
            max=avg;
        }
    }

    return max;
}
~~~

# Submission Review
## Approach
- **Technique**: Sliding Window.
- **Optimality**: Optimal. The solution processes the array in a single pass, maintaining a running sum of the window of size $k$.

## Complexity
- **Time Complexity**: $O(n)$, where $n$ is `numsSize`.
- **Space Complexity**: $O(1)$.

## Efficiency Feedback
- **Redundant Operations**: The code performs floating-point division (`current / k`) inside the loop for every element. Since $k$ is constant and positive, comparing the averages is equivalent to comparing the sums.
- **Optimization**: Maintain the `max` as a sum (double or long long) and perform a single division by $k$ only at the final `return` statement. This reduces the number of division operations from $O(n)$ to $O(1)$.

## Code Quality
- **Readability**: Good. The logic is straightforward and easy to follow.
- **Structure**: Good. The separation between the initial window setup and the sliding phase is clear.
- **Naming**: Moderate. `current` is ambiguous; `currentSum` would be more descriptive. `max` is acceptable but `maxAvg` would be more precise.
- **Improvements**:
    - Rename `current` $\rightarrow$ `currentSum`.
    - Replace `double avg = current/k; if (avg > max)` with a direct comparison of sums to avoid precision overhead and unnecessary divisions.

---

# Question Revision
### Maximum Average Subarray I

**Pattern:** Sliding Window (Fixed Size)

**Brute Force:** 
Iterate through every possible starting index $i$, calculate the sum of the next $k$ elements using a nested loop, and track the maximum.
- **Time:** $O(n \cdot k)$
- **Space:** $O(1)$

**Optimal Approach:** 
Calculate the sum of the first $k$ elements. Slide the window across the array by adding the next element and subtracting the first element of the previous window. Update the maximum sum found and divide by $k$ at the very end to get the average.
- **Time:** $O(n)$
- **Space:** $O(1)$

**The 'Aha' Moment:** 
The requirement for a **contiguous subarray of a fixed length $k$** is the definitive signal to use a fixed-size sliding window.

**Summary:** 
Avoid redundant summing by updating a running total as the window shifts one element at a time.

---