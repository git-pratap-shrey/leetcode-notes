---
title: "Maximum Equal Adjacent Pairs After at Most One Replacement"
slug: maximum-equal-adjacent-pairs-after-at-most-one-replacement
date: "2026-09-27"
---

# My Solution
~~~cpp
class Solution {
public:
    int maxEqualAdjacentPairs(vector<int>& nums) {
        unordered_map<long long,int> mp;
        int x=0;
        int y=0;
        long long mn;
        long long mx;
        long long k;
        for(int i=1;i<nums.size();i++){
            if(nums[i]==nums[i-1]){
                x++;
            }
            else{
                if(nums[i]>nums[i-1]){
                    mn=nums[i-1];
                    mx=nums[i];
                }
                else{
                    mn=nums[i];
                    mx=nums[i-1];
                }
                k=(mn<<32)|mx;
                mp[k]++;
                y=max(y,mp[k]);
                
            }
        }
        int ans=x+y;
        return ans;
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Frequency counting using a Hash Map. The code counts existing equal adjacent pairs (`x`) and tracks the most frequent distinct adjacent pair (`y`) using a bit-packed `long long` key to represent a pair of numbers.
- **Optimality**: **Suboptimal/Incorrect**. The logic assumes that replacing one element in a pair `(a, b)` can magically create a new equal pair without affecting surrounding pairs. It fails to account for the fact that changing `nums[i]` to match `nums[i-1]` may break an existing equal pair at `nums[i+1]`. It also doesn't handle the constraint of "at most one replacement" correctly across the entire array.

## Complexity
- **Time Complexity**: $O(N)$, where $N$ is the size of `nums`. It performs a single pass through the array.
- **Space Complexity**: $O(N)$ in the worst case to store all unique adjacent pairs in the `unordered_map`.

## Efficiency Feedback
- **Bit-packing**: Using `(mn << 32) | mx` is an efficient way to create a unique key for a pair of integers, avoiding the overhead of `std::pair` as a map key.
- **Map Overhead**: `unordered_map` is generally fast, but for competitive programming, a sorted vector or a custom hash function could further reduce runtime.

## Code Quality
- **Readability**: **Poor**. The variables `x`, `y`, `k`, `mn`, and `mx` are non-descriptive.
- **Structure**: **Moderate**. The logic is linear and simple, but the lack of boundary checks or input validation (though common in CP) makes it fragile.
- **Naming**: **Poor**. 
    - `x` $\rightarrow$ `existingPairs`
    - `y` $\rightarrow$ `maxPotentialPairs`
    - `mp` $\rightarrow$ `pairCounts`
- **Concrete Improvements**:
    1. Use descriptive variable names.
    2. Fix the logical flaw: a replacement affects two potential pairs (the one before and the one after the changed index). The current code treats each pair in isolation.
    3. Initialize variables (e.g., `mn`, `mx`) at the point of declaration.

---

# Question Revision
# Revision Report: Maximum Equal Adjacent Pairs After at Most One Replacement

- **Pattern:** Greedy / Case Analysis (Array Traversal)
- **Brute Force:** Try replacing every single element in the array with every possible value that appears in the array, and for each replacement, count the adjacent pairs.
- **Optimal Approach:** 
    - **Logic:** Traverse the array once to count existing adjacent pairs. Then, iterate through each index $i$ and evaluate the potential gain of changing $arr[i]$ to match either $arr[i-1]$ or $arr[i+1]$. 
    - Specifically, check if changing $arr[i]$ creates a new pair without destroying an existing one (i.e., $arr[i]$ was not already part of a pair).
    - **Complexity:** 
        - Time: $O(n)$ — single pass to count and single pass to evaluate replacements.
        - Space: $O(1)$ — only a few variables used for tracking counts.
- **The 'Aha' Moment:** The constraint "at most one replacement" means I only need to evaluate local changes at each index rather than global state changes.
- **Summary:** Calculate initial pairs and check if any single element can be changed to create a new pair without breaking an existing one.

---