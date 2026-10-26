---
title: "Difference Between Peaks and Valleys"
slug: difference-between-peaks-and-valleys
date: "2026-10-24"
---

# My Solution
~~~cpp
class Solution {
public:
    int peakValleyDifference(vector<int>& nums) {
        int peak=0;
        int valley=0;
        int n=nums.size();
        if (n==1) return nums[0];
        /*
        if(nums[0]>nums[1]){
            peak+=nums[0];
        }
        else if(nums[0]<nums[1]){
            valley+=nums[0];
        }

        if(nums[n-1]>nums[n-2]){
            peak+=nums[n-1];
        }
        else if(nums[n-1]<nums[n-2]){
            valley+=nums[n-1];
        }*/
                
            
        for(int i=1;i<n-1;i++){
            
            
            if(nums[i]>nums[i-1] && nums[i]>nums[i+1]){
                peak+=nums[i];
            }
            if(nums[i]<nums[i-1] && nums[i]<nums[i+1]){
                valley+=nums[i];
            }
            
        }
        return peak-valley;
    }
};
~~~

# Submission Review
## Approach
- **Technique:** Single-pass iterative traversal (Linear Scan).
- **Optimality:** Suboptimal/Incorrect. While the linear scan is the correct approach for this problem type, the implementation fails to handle boundary conditions (the first and last elements), and it incorrectly sums all peaks and valleys instead of finding specific max/min values or differences as usually required by such problems.

## Complexity
- **Time Complexity:** $O(n)$, where $n$ is the size of the input vector.
- **Space Complexity:** $O(1)$, as it uses a constant amount of extra space.

## Efficiency Feedback
- The runtime is optimal for a single pass.
- **Correctness Bottleneck:** The logic is fundamentally flawed. It calculates the sum of all peaks minus the sum of all valleys ($\sum \text{peaks} - \sum \text{valleys}$), which is likely not the intended "Difference Between Peaks and Valleys" (usually defined as $\max(\text{peaks}) - \min(\text{valleys})$ or similar).
- **Boundary Neglect:** The code contains commented-out logic for the first and last elements. Without these, the solution ignores potential peaks or valleys at the ends of the array.

## Code Quality
- **Readability:** Poor. There are large blocks of commented-out code and excessive whitespace that clutter the logic.
- **Structure:** Moderate. The basic loop structure is correct, but the logic inside is incomplete.
- **Naming:** Good. Variable names like `peak`, `valley`, and `nums` are clear.

**Concrete Improvements:**
1. **Remove Dead Code:** Delete the commented-out block to improve maintainability.
2. **Fix Boundary Logic:** Implement logic to check if `nums[0]` and `nums[n-1]` are peaks or valleys relative to their only neighbor.
3. **Clarify Requirements:** Ensure whether the problem asks for the *sum* of peaks/valleys or the *maximum/minimum* values; the current summation logic is highly unusual for this problem name.
4. **Handle Plateaus:** The current strict inequalities (`>` and `<`) will ignore "flat" peaks or valleys (e.g., `[1, 2, 2, 1]`).

---

# Question Revision
# Revision Report: Difference Between Peaks and Valleys

- **Pattern**: Linear Scan / State Tracking
- **Brute Force**: Iterate through the array and for every element, check its immediate neighbors to determine if it's a peak or valley. Handle edges by treating them as potential peaks/valleys if they satisfy the condition relative to their only neighbor.
- **Optimal Approach**: 
    - **Logic**: Traverse the array while skipping consecutive duplicate values (since platforms don't change the peak/valley status). Identify a **Peak** when $arr[i-1] < arr[i] > arr[i+1]$ and a **Valley** when $arr[i-1] > arr[i] < arr[i+1]$. Maintain a running sum of the differences between the current peak/valley and the previous one.
    - **Time Complexity**: $O(n)$ — single pass through the array.
    - **Space Complexity**: $O(1)$ — only constant extra space for pointers and sums.
- **The 'Aha' Moment**: The requirement to ignore "plateaus" (consecutive identical elements) signals that I need to compress the array or skip duplicates to treat the sequence as a series of strict increases and decreases.
- **Summary**: Treat the array as a simplified sequence of unique consecutive values and sum the absolute differences between every local extremum.

---