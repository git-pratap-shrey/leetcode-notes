---
title: "Fruit Into Baskets"
slug: fruit-into-baskets
date: "2026-10-01"
---

# My Solution
~~~cpp
class Solution {
public:
    int totalFruit(vector<int>& fruits) {
        unordered_map<int,int> mp;

        
        int j=0;
        int i=0;
        int ans=0;
        while(i<fruits.size()){
            
            mp[fruits[i]]+=1;

            while(mp.size()>2){
                
                mp[fruits[j]]-=1;
                if(mp[fruits[j]]==0) mp.erase(fruits[j]);
                j++;
            }
            
            ans=max(ans,i-j+1);
            i++;
        }
        return ans;

    }
};
~~~

# Submission Review
## Approach
- **Technique**: Sliding Window (Two Pointers) using a hash map to track the frequency of elements within the window.
- **Optimality**: Optimal. It ensures each element is processed at most twice (once by the leading pointer and once by the trailing pointer).

## Complexity
- **Time Complexity**: $O(N)$, where $N$ is the number of elements in `fruits`. Each element is added and removed from the map at most once.
- **Space Complexity**: $O(1)$. Although a map is used, its size is strictly capped at 3 elements, regardless of the input size $N$.

## Efficiency Feedback
- The runtime is optimal.
- **Minor Optimization**: `unordered_map` has a constant overhead. Given the map size is capped at 3, using a `std::vector` or a fixed-size array would be faster if the range of fruit IDs were small, but since IDs can be large, the map is the correct general-purpose choice.

## Code Quality
- **Readability**: Moderate. The logic is clear, but the variable naming is generic.
- **Structure**: Good. The sliding window implementation follows the standard template.
- **Naming**: Poor. 
    - `i` and `j` should be `right` and `left` to clearly indicate window boundaries.
    - `mp` should be `counts` or `fruitMap`.
    - `ans` should be `maxFruits`.
- **Improvements**:
    - Replace the `while(i < fruits.size())` loop with a `for` loop for the right pointer to make the code more idiomatic.
    - Use `size_t` for indices to avoid signed/unsigned comparison warnings with `fruits.size()`.

---

# Question Revision
### Fruit Into Baskets

**Pattern:** Sliding Window (Variable Size)

**Brute Force:** Iterate through all possible subarrays, use a set to count distinct fruit types, and track the maximum length of subarrays containing $\le 2$ types.  
**Complexity:** $O(n^2)$ time, $O(1)$ space.

**Optimal Approach:** 
Maintain a window `[left, right]` and a frequency map of fruits within that window. Expand `right` to include fruits; if the map size exceeds 2, increment `left` and decrement the count of the fruit at `left` until the map size returns to 2 (removing the key when its count reaches 0).
- **Time Complexity:** $O(n)$ (each element is visited at most twice).
- **Space Complexity:** $O(1)$ (the map stores a maximum of 3 keys).

**The 'Aha' Moment:** The requirement for "consecutive" elements combined with a constraint on the number of "distinct" types is a textbook signal for a sliding window.

**Summary:** Find the longest subarray containing at most two distinct elements using a sliding window and a frequency map.

---