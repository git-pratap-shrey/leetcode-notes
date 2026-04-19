---
title: "Smallest Stable Index II"
slug: smallest-stable-index-ii
date: "2026-04-19"
---

# My Solution
~~~cpp
class Solution {
public:
    int firstStableIndex(vector<int>& nums, int k) {
        int n=nums.size();
        vector<int>s(n);
        s[n-1]=nums[n-1];
        for(int i=n-2;i>=0;i--){
            s[i]=min(nums[i],s[i+1]);
            
        }
        int p=INT_MIN;
        for(int i=0;i<n;i++){
            p=max(p,nums[i]);
            if(p-s[i]<=k){
                return i;
            }
        }
        return -1;
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Prefix Maximum and Suffix Minimum.
- **Optimality**: Optimal. The problem requires evaluating a condition based on the range $[0, i]$ and $[i, n-1]$. Precomputing the suffix minimum allows the condition to be checked in a single linear pass.

## Complexity
- **Time Complexity**: $O(n)$, where $n$ is the size of `nums`. The code performs two linear passes.
- **Space Complexity**: $O(n)$ to store the suffix minimum array `s`.

## Efficiency Feedback
- **Runtime**: Very efficient due to linear time complexity.
- **Memory**: The $O(n)$ space is standard for this approach. Memory could be reduced if the input array `nums` were allowed to be modified to store suffix minimums, but that is generally avoided unless necessary.

## Code Quality
- **Readability**: Moderate. The logic is clear, but the lack of whitespace and descriptive variable names makes it feel like a quick draft.
- **Structure**: Good. The logic flows logically from precomputation to evaluation.
- **Naming**: Poor. `s` and `p` are non-descriptive. `suffixMin` and `prefixMax` would be significantly clearer.
- **Concrete Improvements**:
    - Rename `s` $\rightarrow$ `suffixMin`.
    - Rename `p` $\rightarrow$ `prefixMax`.
    - Add consistent spacing around operators (e.g., `i = n - 2` instead of `i=n-2`).
    - Initialize `p` with `nums[0]` or `INT_MIN` (as done), though `nums[0]` is more idiomatic for prefix maximums.

---

# Question Revision
### Revision Report: Smallest Stable Index II

**Pattern:** Fenwick Tree (Binary Indexed Tree) + Coordinate Compression

**Brute Force:** 
For every index $i$, iterate through the entire array to count elements to the left that are greater than $A[i]$ and elements to the right that are smaller than $A[i]$. 
**Complexity:** $O(n^2)$ time, $O(1)$ space.

**Optimal Approach:**
1. **Coordinate Compression:** Map the array values to a range $[1, N]$ to handle large input values within the Fenwick Tree's index constraints.
2. **Pre-calculation:** Calculate the total frequency of each element in the array to easily determine the total number of elements smaller than any $A[i]$ globally.
3. **Single Pass Scanning:** Iterate through the array from left to right. Use the Fenwick Tree to maintain the counts of elements encountered so far.
4. **Balance Check:** For each index $i$, use the Fenwick Tree to find the number of elements to the left smaller than $A[i]$ ($L_{<}$). Derive the number of elements to the right smaller than $A[i]$ using the pre-calculated total counts.
5. **Condition:** Check if the stability condition (e.g., $L_{>} == R_{<}$) is met and track the minimum index.
**Complexity:** $O(n \log n)$ time, $O(n)$ space.

**The 'Aha' Moment:** 
Counting elements smaller or larger than a target value while traversing a sequence is a classic signal to use a Fenwick Tree to convert range counts into prefix sums.

**Summary:** 
Use coordinate compression and a Fenwick Tree to efficiently track and compare relative element ranks in $O(\log n)$ per index.

---