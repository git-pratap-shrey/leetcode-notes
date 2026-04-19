---
title: "Smallest Stable Index I"
slug: smallest-stable-index-i
date: "2026-04-19"
---

# My Solution
~~~cpp
class Solution {
public:
    int firstStableIndex(vector<int>& nums, int k) {
        int n=nums.size();
        vector<int>su(n);
        su[n-1]=nums[n-1];
        for(int i=n-2;i>=0;i--){
            su[i]=min(nums[i],su[i+1]);
            
        }
        int pr=INT_MIN;
        for(int i=0;i<n;i++){
            pr=max(pr,nums[i]);
            if(pr-su[i] <=k){
                return i;
            }
        }
        return -1;
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Prefix Maximum and Suffix Minimum preprocessing.
- **Optimality**: Optimal. The problem requires comparing the max of the left partition and the min of the right partition for every possible split point; precomputing these values allows each split to be evaluated in $O(1)$.

## Complexity
- **Time Complexity**: $O(n)$, where $n$ is the size of the input array. The code performs two linear passes.
- **Space Complexity**: $O(n)$ to store the suffix minimum array `su`.

## Efficiency Feedback
- The runtime is optimal.
- **Memory**: Space could be slightly reduced by using a more memory-efficient container if $n$ were extremely large, but $O(n)$ is standard for this approach.

## Code Quality
- **Readability**: Moderate. The logic is straightforward, but variable names are cryptic.
- **Structure**: Good. The separation between the preprocessing phase and the evaluation phase is clear.
- **Naming**: Poor. 
    - `su` is used for suffix minimums; `suffixMin` would be clearer.
    - `pr` is used for prefix maximums; `prefixMax` would be clearer.
- **Improvements**: 
    - Replace `su` and `pr` with descriptive names.
    - Use `std::vector::assign` or initialize the vector size directly to avoid multiple allocations if applicable, though current usage is acceptable.

---

# Question Revision
### Smallest Stable Index I

**Pattern:** Hash Map / Frequency Counting

**Brute Force:** For every index $i$, iterate through the entire array to count occurrences of `nums[i]`. Track the minimum count and its corresponding smallest index.
*   Time: $O(n^2)$
*   Space: $O(1)$

**Optimal Approach:** 
1. Use a hash map to store the frequency of every number in the array.
2. Identify the minimum frequency value across the entire map.
3. Iterate through the array a second time from index $0$; return the first index whose element's frequency equals the minimum frequency.
*   Time: $O(n)$
*   Space: $O(n)$

**The 'Aha' Moment:** The need to find the "smallest index" based on a global property (minimum frequency) necessitates a two-pass approach: first to gather global statistics, second to find the first local match.

**Summary:** Map all frequencies, find the global minimum, and return the first index that hits that minimum.

---