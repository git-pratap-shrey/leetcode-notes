---
title: "Two Sum"
slug: two-sum
date: "2026-07-08"

---

# My Solution
~~~
class
 Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        int n=nums.size();
        unordered_map<int,int> mp;
        for(int i=0;i<n;i++){
            int need=target-nums[i];
            if(mp.find(need) != mp.end()){
                return {mp[need],i};
            }
            mp[nums[i]]=i;
        }
        return{-1,-1};
        
    }
};
~~~

# Submission Review

## Approach

- **Technique**: Single-pass Hash Map.
- **Optimality**: Optimal. It achieves the best possible time complexity for an unsorted array by trading space for time.

## Complexity

- **Time Complexity**: $O(n)$ — Each element is visited once, and `unordered_map` lookups/insertions are $O(1)$ on average.
- **Space Complexity**: $O(n)$ — In the worst case, all elements are stored in the map before a pair is found.

## Efficiency Feedback
- The implementation is highly efficient. 
- Using `unordered_map` (hash table) instead of `map` (red-black tree) ensures linear time complexity rather than $O(n \log n)$.

## Code Quality

- **Readability**: Good. The logic is concise and easy to follow.
- **Structure**: Good. Standard competitive programming structure.
- **Naming**: Moderate. While `mp` is a common shorthand for map, more descriptive names like `numToIndex` or `seen` would improve clarity. `need` is acceptable, though `complement` is the standard mathematical term.
- **Concrete Improvements**:
    - Change `int n = nums.size();` to `size_t` or use the iterator/range-based loop to avoid signed/unsigned comparison warnings.
    - `mp.count(need)` is a more concise alternative to `mp.find(need) != mp.end()`.

---

# Question Revision

#

## Two Sum

**Pattern:** Hash Map (Complement Search)

**Brute Force:** Use nested loops to iterate through every possible pair of elements to check if their sum equals the target.
- Time: $O(n^2)$
- Space: $O(1)$

**Optimal Approach:** Iterate through the array once. For each element $x$, calculate the complement $target - x$. If the complement exists in the hash map, return its index and the current index; otherwise, store the current element and its index in the map.
- Time: $O(n)$
- Space: $O(n)$

**The 'Aha' Moment:** The requirement to find a specific "missing" value to reach a target suggests using a hash map for $O(1)$ lookup of previously seen elements.

**Summary:** Trade space for time by storing seen values in a map to find the target complement in a single pass.

---
