---
title: "First Missing Positive"
slug: first-missing-positive
date: "2026-04-27"
---

# My Solution
~~~cpp
class Solution {
public:
    int firstMissingPositive(vector<int>& nums) {

        vector<int> hass(nums.size()+1,0);
        for(int i=0;i<nums.size();i++){
            if(nums[i]>0 && nums[i] <= nums.size()){
                hass[nums[i]]=1;
            }
            
        }
        for(int j=1;j<=nums.size();j++){
            if(hass[j]==0) return j;
            
        }
        return nums.size()+1;
        
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Frequency array (Hashing). The code tracks the occurrence of positive integers within the range $[1, N]$ using an auxiliary boolean-like vector.
- **Optimality**: Suboptimal. While time-optimal, it fails to meet the common $O(1)$ auxiliary space constraint typically associated with this specific problem.

## Complexity
- **Time Complexity**: $O(N)$, where $N$ is the number of elements in `nums`. The code performs two linear passes.
- **Space Complexity**: $O(N)$ to store the `hass` vector.

## Efficiency Feedback
- **Memory Bottleneck**: The allocation of `vector<int> hass(nums.size()+1, 0)` consumes linear extra space.
- **Optimization**: To achieve $O(1)$ space, use the **Cyclic Sort** algorithm or the **Negation** method to mark presence directly within the input `nums` array.

## Code Quality
- **Readability**: Good. The logic is straightforward and easy to follow.
- **Structure**: Good. The flow is linear and logical.
- **Naming**: Poor. `hass` is a non-standard name (likely a typo for `has` or `hash`) and lacks descriptiveness.
- **Concrete Improvements**:
    - Rename `hass` to `present` or `seen`.
    - Use `vector<bool>` instead of `vector<int>` for the tracking array to reduce the memory footprint (though the complexity remains $O(N)$).
    - Use `size_t` or `int n = nums.size()` to avoid calling `.size()` repeatedly in loop conditions.

---

# Question Revision
### First Missing Positive

**Pattern:** Cyclic Sort

**Brute Force:** 
Sort the array and iterate to find the first gap in the sequence of positive integers, or use a Hash Set to store all elements and check for $1, 2, \dots, n$.
- Time: $O(n \log n)$ or $O(n)$
- Space: $O(1)$ (if sorted in-place) or $O(n)$ (if using a Set)

**Optimal Approach:**
Treat the input array as its own hash map. Iterate through the array; for each element $x$, if $1 \le x \le n$ and $x$ is not at its correct position (index $x-1$), swap it with the element at index $x-1$. Repeat this until the current element cannot be swapped further. Finally, scan the array from left to right; the first index $i$ where `nums[i] != i + 1` reveals the missing positive $i+1$.
- Time: $O(n)$ (each element is placed in its correct position at most once)
- Space: $O(1)$

**The 'Aha' Moment:**
The requirement for $O(n)$ time and $O(1)$ space while searching for a value within a known range $[1, n]$ implies the input array must be repurposed as the frequency tracker.

**Summary:** 
Use cyclic sort to place every number $x$ at index $x-1$, then return the first index that doesn't match its value.

---