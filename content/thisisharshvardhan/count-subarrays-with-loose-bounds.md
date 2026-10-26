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
        vector<int>peak;
        vector<int>valley;
        int n=nums.size();
        for(int i =1;i<n-1;i++){
            if ((nums[i]>nums[i-1])&&(nums[i]>nums[i+1])){
                peak.push_back(nums[i]);
            }
            else if ((nums[i]<nums[i-1])&&(nums[i]<nums[i+1])){
              valley.push_back(nums[i]);
            }
        }
        int sum1=accumulate(peak.begin(),peak.end(),0);
        int sum2=accumulate(valley.begin(),valley.end(),0);
        return sum1-sum2;
        
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Linear scan to identify local extrema (peaks and valleys) and calculating the difference of their sums.
- **Correctness**: The solution does not solve the problem "Count Subarrays With Loose Bounds." Instead, it implements a logic to calculate the sum of peaks minus the sum of valleys. It is **incorrect** based on the provided problem title.

## Complexity
- **Time Complexity**: $O(n)$, where $n$ is the size of the `nums` vector. The code performs one pass for identification and two passes for summation.
- **Space Complexity**: $O(n)$ in the worst case (e.g., a zigzag array), as it stores peaks and valleys in separate vectors.

## Efficiency Feedback
- **Bottleneck**: The use of two auxiliary vectors (`peak` and `valley`) is unnecessary. 
- **Optimization**: The sums could be calculated using two integer variables during the initial loop, reducing space complexity from $O(n)$ to $O(1)$.

## Code Quality
- **Readability**: Moderate. The logic is simple, but the discrepancy between the function name (`peakValleyDifference`) and the problem title (`Count Subarrays With Loose Bounds`) is confusing.
- **Structure**: Moderate. The separation of identification and summation into two steps is clean but inefficient.
- **Naming**: Good. Variables `peak`, `valley`, `sum1`, and `sum2` clearly describe their purpose within the local logic.
- **Improvements**:
    - Replace `vector<int>` with `long long` sum variables to prevent overflow and reduce memory overhead.
    - Use `long long` for the return type if the sum of elements exceeds $2^{31}-1$.

---

# Question Revision
# Revision Report: Count Subarrays With Loose Bounds

- **Pattern**: Sliding Window / Three-Pointer Technique (At-most $K$ logic).
- **Brute Force**: Iterate through all possible subarrays $(i, j)$, track the minimum and maximum values within each, and check if they satisfy the loose bounds condition.
    - Complexity: $O(n^2)$ time, $O(1)$ space.
- **Optimal Approach**: 
    - Use a sliding window to find the number of subarrays where $\max(subarray) \le \text{upper\_bound}$ and $\min(subarray) \ge \text{lower\_bound}$. 
    - The "Loose Bounds" problem is typically solved by calculating `count(subarrays with max <= upper)` minus `count(subarrays with max < lower)` or similar inclusion-exclusion logic based on the specific constraint.
    - Use three pointers (or two separate sliding window passes) to maintain the valid range where the conditions are met.
    - Complexity: $O(n)$ time, $O(1)$ space.
- **The 'Aha' Moment**: When a problem asks for subarrays satisfying a "range" or "bounds" condition, think of it as `count(at most upper)` minus `count(at most lower - 1)`.
- **Summary**: Use the sliding window inclusion-exclusion principle to convert a "strict range" constraint into the difference between two "at-most" constraints.

---