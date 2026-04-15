---
title: "Two Sum"
slug: two-sum
date: "2026-04-10"
---

# My Solution
~~~cpp
class Solution {
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
        return {};
        
    }
};
~~~

# Submission Review
## Approach
- **Technique**: One-pass Hash Map.
- **Optimality**: Optimal. It achieves the best possible time complexity for an unsorted input array.

## Complexity
- **Time Complexity**: $O(n)$ on average. The algorithm traverses the list once, and hash map lookups/insertions are $O(1)$ average.
- **Space Complexity**: $O(n)$. In the worst case, the map stores $n-1$ elements before finding a pair.

## Efficiency Feedback
- **Runtime**: Very efficient. The single-pass approach minimizes operations.
- **Memory**: Standard for this approach. To slightly improve performance in high-load scenarios, `mp.reserve(n)` could be used to prevent multiple rehashes as the map grows.

## Code Quality
- **Readability**: Good. The logic is straightforward and follows standard conventions.
- **Structure**: Good. The function is concise and handles the return case correctly.
- **Naming**: Moderate. `mp` is a generic name; `numToIndex` would be more descriptive. `need` is acceptable, though `complement` is the mathematical term.
- **Improvements**: 
    - Use `const auto&` or similar if the elements were larger objects, though `int` is fine here.
    - Adding `std::ios::sync_with_stdio(false); cin.tie(nullptr);` is a common competitive programming habit for C++ to speed up I/O, though not applicable to the logic inside the class.

---

# Question Revision
### Two Sum

**Pattern:** Hash Map (Complement Search)

**Brute Force:** 
Nested loops iterating through every possible pair to check if their sum equals the target.
- Time: $O(n^2)$
- Space: $O(1)$

**Optimal Approach:** 
Iterate through the array once. For each element, calculate the `complement` (`target - current_value`). If the complement exists in the hash map, return its index and the current index; otherwise, store the current value and its index in the map.
- Time: $O(n)$
- Space: $O(n)$

**The 'Aha' Moment:** 
The requirement to find a specific "matching" value for the current element suggests using a hash map to turn a search problem into a constant-time lookup.

**Summary:** 
Trade space for time by using a map to store previously seen numbers and their indices for $O(1)$ complement retrieval.

---