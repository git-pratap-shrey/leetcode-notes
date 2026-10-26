---
title: "Count Subarrays With Loose Bounds"
slug: count-subarrays-with-loose-bounds
date: "2026-10-24"
---

# My Solution
~~~cpp
class Solution {
public:
    long long countSubarrays(vector<int>& nums, int mink, int maxk) {
        long long ans=0;
        int inv=-1;
        int mn=-1;
        int mx=-1;
        for(int i=0;i<nums.size();i++){
            if(nums[i]<mink || nums[i]>maxk){
                inv=i;
            }
            if(nums[i]>=mink) mn=i;
            if(nums[i]<=maxk) mx=i;

            ans=ans+max(0,min(mn,mx)-inv);
        }
        return ans;
        
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Two-pointer/Sliding Window variation using tracking indices. The solution maintains the most recent positions of an invalid element (`inv`), an element $\ge minK$ (`mn`), and an element $\le maxK$ (`mx`).
- **Optimality**: Optimal. It processes the array in a single pass, calculating the number of valid subarrays ending at each index $i$ based on the closest constraints.

## Complexity
- **Time Complexity**: $O(n)$ where $n$ is the size of `nums`. The loop iterates through the array exactly once.
- **Space Complexity**: $O(1)$ as it only uses a few integer variables regardless of input size.

## Efficiency Feedback
- **Runtime**: Highly efficient. The logic uses basic arithmetic and `std::min`/`std::max` operations.
- **Memory**: Minimal memory footprint.
- **Optimization**: No meaningful optimizations required; the logic is already streamlined.

## Code Quality
- **Readability**: Moderate. While the logic is concise, the variable names `inv`, `mn`, and `mx` are slightly ambiguous without context (though inferable from the logic).
- **Structure**: Good. The logic is linear and avoids unnecessary branching or complex data structures.
- **Naming**: Moderate. `ans` is standard, but `inv`, `mn`, and `mx` could be more descriptive (e.g., `lastInvalid`, `lastMinBound`, `lastMaxBound`).

**Concrete Improvements**:
- Use more descriptive variable names to improve maintainability.
- Use `std::size_t` or `int` consistently for indices to avoid potential signed/unsigned comparison warnings.

---

# Question Revision
# Revision Report: Count Subarrays With Loose Bounds

- **Pattern:** Sliding Window / Three-Pointer Approach.
- **Brute Force:** Iterate through all possible subarrays ($O(n^2)$), tracking the minimum and maximum elements of each, and check if they satisfy the given bound constraints.
- **Optimal Approach:** 
    - Maintain three pointers (indices) as you iterate through the array:
        1. `left_min`: The last index where an element was `< min_bound`.
        2. `left_max`: The last index where an element was `> max_bound`.
        3. `left_valid`: The last index where an element was within `[min_bound, max_bound]`.
    - For every index `i`, the number of valid subarrays ending at `i` is the distance between the latest "valid" element and the latest "invalid" element (whichever occurred most recently).
    - **Formula:** $\text{count} += \max(0, \text{left\_valid} - \max(\text{left\_min}, \text{left\_max}))$.
    - **Complexity:** Time: $O(n)$ | Space: $O(1)$.
- **The 'Aha' Moment:** The requirement to count subarrays based on boundaries of "at least one" and "no more than" suggests tracking the *last seen positions* of boundary-breaking elements.
- **Summary:** Use three pointers to track the most recent indices of elements that are too small, too large, and just right to calculate valid subarray windows in one pass.

---