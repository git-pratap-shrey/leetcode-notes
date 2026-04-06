---
title: "Contiguous Array"
slug: contiguous-array
date: "2026-03-29"

---
---

# My Solution
~~~cpp
class Solution {
public:
    int findMaxLength(vector<int>& nums) {
        unordered_map<int,int>mp;
        mp[0]=-1;
        int zero =0;
        int one = 0;
        int diff;
        int result =0;
        for(int i=0;i<nums.size();i++){
            if(nums[i]==0){
                zero++;
            }
            if(nums[i]==1){
                one++;
            }
            diff = one -zero ;
            // if(diff == 0){
            //     result = max(result , i+1);
            //     continue;
            // }
            if(mp.find(diff)==mp.end()){
                mp[diff]=i;
            }
            else{
                int idx = mp[diff];
                int len = i-idx;
                result = max(result ,len);
            }


        }
        // if(result == 0){
        //     return 0;
        // }
        return result ;
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Hash Map with Prefix Sum transformation. The problem is converted to finding the longest subarray with a sum of 0 by treating `0` as `-1` and `1` as `1`.
*   **Optimality:** Optimal. It effectively uses the property that if the prefix sum (difference) at two indices is the same, the subarray between them has an equal count of 0s and 1s.

## Complexity
*   **Time Complexity:** $O(N)$ on average, where $N$ is the number of elements in `nums`. Every element is processed exactly once, and map operations are $O(1)$ on average.
*   **Space Complexity:** $O(N)$ in the worst case (e.g., all 0s or all 1s), where the hash map stores $N$ distinct difference values.

## Efficiency Feedback
*   **Overhead:** The use of `std::unordered_map` can lead to worst-case $O(N^2)$ time complexity if there are many hash collisions, though this is rare. For strictly constrained competitive programming environments, a `std::vector` of size $2N+1$ (with an offset of $N$) can be used as a frequency array for $O(N)$ guaranteed time.
*   **Unnecessary Logic:** Tracking `zero` and `one` separately is redundant. You only need a single `count` variable, incrementing for `1` and decrementing for `0`.

## Code Quality
*   **Readability:** Good. The logic is easy to follow.
*   **Structure:** Moderate. The commented-out code blocks should be removed to maintain a clean submission.
*   **Naming:** Moderate. `mp` is standard but `diffMap` or `firstOccurrence` would be more descriptive.
*   **Concrete Improvements:**
    *   **Consolidate Counters:** Replace `zero` and `one` with a single integer `count`.
        ```cpp
        count += (nums[i] == 1) ? 1 : -1;
        ```
    *   **Cleanup:** Remove dead/commented-out code.
    *   **Performance Optimization:** If performance is critical, consider `mp.reserve()` or a vector-based map replacement since the range of possible differences is fixed between `[-N, N]`.

---
---


# Question Revision
### Revision Report: Contiguous Array

**Pattern:** Prefix Sum + Hash Map

**Brute Force:**
Iterate through all possible subarrays using nested loops, checking if the count of 0s equals the count of 1s.
*   **Time:** $O(n^2)$
*   **Space:** $O(1)$

**Optimal Approach:**
Treat `0` as `-1` and `1` as `1`. Calculate the running prefix sum. If the same prefix sum value appears at two different indices, the subarray between them must have a net sum of zero (i.e., an equal number of 0s and 1s). Store the *first occurrence* of each prefix sum in a hash map to maximize the distance.
*   **Time:** $O(n)$
*   **Space:** $O(n)$

**The 'Aha' Moment:**
Whenever you need to track the relative balance between two distinct elements in an array, mapping the transformation to $\{-1, 1\}$ and tracking the running prefix sum turns a "frequency counting" problem into a "distance between indices" problem.

**Summary:**
When a problem asks for the longest subarray with equal counts of two different items, transform the values to $\pm 1$ and use a hash map to find the maximum distance between identical prefix sums.

---
