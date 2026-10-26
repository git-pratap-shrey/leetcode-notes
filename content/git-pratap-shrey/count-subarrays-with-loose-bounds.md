---
title: "Count Subarrays With Loose Bounds"
slug: count-subarrays-with-loose-bounds
date: "2026-10-24"
---

# My Solution
~~~cpp
class Solution {
public:
    int peakValleyDifference(vector<int>& nums) {
        int peaks = 0;
        int valleys = 0;
        
        for(int i = 1; i < nums.size() - 1; i++){
            int x = nums[i];
            int y = nums[i-1];
            int z = nums[i+1];
            
            if(x > y && x > z){
                peaks += x;
            }
            if(x< y && x < z){
                valleys += x;
            }
        }

        return peaks-valleys;
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Simple linear scan (single pass) to identify local extrema.
- **Correctness**: **Incorrect**. The code implements a logic to calculate the sum of peaks minus the sum of valleys. This does not solve the problem "Count Subarrays With Loose Bounds." The implementation is entirely unrelated to counting subarrays.

## Complexity
- **Time Complexity**: $O(N)$, where $N$ is the size of the input vector.
- **Space Complexity**: $O(1)$.

## Efficiency Feedback
- The runtime is optimal for a linear scan, but the logic is irrelevant to the problem title provided.
- **Bottleneck**: The primary failure is functional correctness, not performance.

## Code Quality
- **Readability**: Good. The loop and conditional logic are clear.
- **Structure**: Good. Standard class/method structure.
- **Naming**: Moderate. While `peaks` and `valleys` describe the logic inside the function, they do not align with the problem goal (counting subarrays).
- **Improvements**:
    - The function name `peakValleyDifference` contradicts the problem title `Count Subarrays With Loose Bounds`.
    - The logic fails to handle cases where `nums.size() < 3` (it will return 0 without processing, which may be intended for peak/valley logic but likely incorrect for subarray counting).

---

# Question Revision
# Revision Report: Count Subarrays With Loose Bounds

- **Pattern**: Sliding Window / Two Pointers (Difference of Subarrays)
- **Brute Force**: Iterate through every possible subarray $(i, j)$, check if the minimum and maximum elements satisfy the given bounds. Time Complexity: $O(n^2)$.
- **Optimal Approach**: 
    - The problem asks for subarrays where $\min \ge \text{lower}$ AND $\max \le \text{upper}$.
    - This is equivalent to counting subarrays where **every** element $x$ in the range $[i, j]$ satisfies $\text{lower} \le x \le \text{upper}$.
    - Use a sliding window to find contiguous segments of "valid" elements. For a segment of length $k$ where all elements are within bounds, the number of subarrays is $\frac{k(k+1)}{2}$.
    - **Complexity**: Time: $O(n)$, Space: $O(1)$.
- **The 'Aha' Moment**: When the condition is "all elements in a range must satisfy a property," the problem reduces to counting contiguous subarrays of valid elements.
- **Summary**: Treat the array as a series of valid blocks separated by invalid elements and sum the combinations of each block.

---