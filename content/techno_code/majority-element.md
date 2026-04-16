---
title: "Majority Element"
slug: majority-element
date: "2026-04-11"
---

# My Solution
~~~cpp
class Solution {
public:
    int majorityElement(vector<int>& nums) {
        map <int,int> mp;
        int n=nums.size();
        for(int it:nums){
            mp[it]++;
            if (mp[it]>n/2) return it;
        }
        return -1;
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Frequency counting using a balanced binary search tree (`std::map`).
- **Optimality**: Suboptimal. While correct, it does not leverage the property of the majority element. The optimal approach is the **Boyer-Moore Voting Algorithm**, which achieves linear time and constant space.

## Complexity
- **Time Complexity**: $O(n \log n)$ — Each of the $n$ elements requires an insertion/lookup in `std::map`, which takes $O(\log n)$.
- **Space Complexity**: $O(n)$ — In the worst case (where few elements repeat), the map stores up to $n$ distinct keys.

## Efficiency Feedback
- **Bottleneck**: The use of `std::map` introduces logarithmic overhead.
- **Optimization 1**: Replacing `std::map` with `std::unordered_map` would reduce the average time complexity to $O(n)$.
- **Optimization 2**: Using Boyer-Moore Voting Algorithm would reduce space complexity from $O(n)$ to $O(1)$.

## Code Quality
- **Readability**: Good. The logic is straightforward and easy to follow.
- **Structure**: Good. Standard implementation.
- **Naming**: Moderate. The variable `it` is used for the element value; in C++, `it` typically denotes an *iterator*, which may cause momentary confusion for experienced developers. `num` or `val` would be more appropriate.
- **Improvement**: Use `const auto&` in the range-based for loop to avoid unnecessary copying, though negligible for `int`.

---

# Question Revision
### Majority Element

**Pattern:** Boyer-Moore Voting Algorithm

**Brute Force:** 
Use a Hash Map to store the frequency of each element. Iterate through the map to find the key with a value $> n/2$.
- **Time:** $O(n)$
- **Space:** $O(n)$

**Optimal Approach:** 
Maintain a `candidate` and a `count`. Iterate through the array: if `count` is 0, assign the current element as the `candidate`. If the current element matches the `candidate`, increment `count`; otherwise, decrement it. The remaining candidate is the majority element.
- **Time:** $O(n)$
- **Space:** $O(1)$

**The 'Aha' Moment:** 
The constraint that the element appears *more than half* the time means it can effectively "outvote" all other distinct elements combined.

**Summary:** 
Cancel out different elements using a counter; the element that survives the pairing process is the majority.

---