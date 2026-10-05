---
title: "Minimum Size Subarray Sum"
slug: minimum-size-subarray-sum
date: "2026-10-05"
---

# My Solution
~~~cpp
class Solution {
public:
    int minSubArrayLen(int target, vector<int>& nums) {
      map<int,int>mp;
      int len=INT_MAX;
      int sum=0;
      mp[0]=-1;
      for(int i=0;i<nums.size();i++){
        sum+=nums[i];
        int need=sum-target;

        auto it=mp.upper_bound(need);
        if(it!= mp.begin()){
            --it;
            len=min(len,i-it->second);
        }
        mp[sum]=i;
      }
      return len==INT_MAX?0:len;
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Prefix Sums combined with a `std::map` to store the first occurrence of sums, utilizing `upper_bound` to find the closest prefix sum that satisfies the condition $\text{sum}_i - \text{sum}_j \ge \text{target}$.
- **Optimality**: **Suboptimal**. This is a "sum of positive integers" problem, which is classically solved using a **Two-Pointer / Sliding Window** approach in $O(n)$ time. This solution uses a map, introducing logarithmic overhead and unnecessary space.

## Complexity
- **Time Complexity**: $O(n \log n)$ due to the `std::map` insertions and `upper_bound` lookups for each element in the array.
- **Space Complexity**: $O(n)$ to store the prefix sums in the map.

## Efficiency Feedback
- **Bottleneck**: The use of `std::map` is the primary bottleneck. Since all elements in `nums` are positive (implied by the problem context), the prefix sum is monotonically increasing.
- **Optimization**: Replace the map and binary search with a sliding window (two pointers). This would reduce time complexity to $O(n)$ and space complexity to $O(1)$.

## Code Quality
- **Readability**: Moderate. The logic is clever but overkill for the specific problem constraints.
- **Structure**: Good. The flow is linear and easy to follow.
- **Naming**: Moderate. `mp` and `it` are generic; `prefixSumMap` and `iterator` would be more descriptive.
- **Concrete Improvements**:
    - Use `std::unordered_map` if binary search weren't required, though here it is required for `upper_bound`.
    - Replace the entire logic with a `while` loop and two pointers (`left`, `right`) to eliminate the map entirely.
    - Use `size_t` for indexing to avoid signed/unsigned comparison warnings.

---

# Question Revision
# Revision Report: Minimum Size Subarray Sum

- **Pattern:** Two Pointers (Sliding Window - Dynamic Size)
- **Brute Force:** Use nested loops to check every possible subarray $[i, j]$. Calculate the sum of each and track the minimum length that meets or exceeds the target. 
    - Time: $O(n^2)$ | Space: $O(1)$
- **Optimal Approach:** 
    - Use two pointers (`left`, `right`) to maintain a window. 
    - Expand `right` to increase the window sum until it $\ge$ target. 
    - Once the condition is met, shrink `left` to find the smallest possible window that still satisfies the condition.
    - Update the global minimum length at each valid window.
    - **Time Complexity:** $O(n)$ (each element is visited at most twice).
    - **Space Complexity:** $O(1)$.
- **The 'Aha' Moment:** Finding a "minimum length" of a "contiguous subarray" based on a "sum threshold" is a classic signal for a sliding window.
- **Summary:** Expand the right pointer to meet the target, then shrink the left pointer to minimize the length.

---