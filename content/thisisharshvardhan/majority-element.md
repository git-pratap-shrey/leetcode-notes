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
- **Technique**: Counting using a Frequency Map.
- **Optimality**: Suboptimal. While it solves the problem, it does not leverage the specific property of a majority element (appearing $> n/2$ times), which allows for a linear time and constant space solution (Boyer-Moore Voting Algorithm).

## Complexity
- **Time Complexity**: $O(n \log n)$ — The code uses `std::map`, which is implemented as a balanced BST. Each of the $n$ insertions/lookups takes $O(\log n)$.
- **Space Complexity**: $O(n)$ — In the worst case (no majority element until the end), the map stores up to $n/2 + 1$ distinct elements.

## Efficiency Feedback
- **Bottleneck**: The choice of `std::map` introduces logarithmic overhead.
- **Optimizations**: 
    - Replacing `std::map` with `std::unordered_map` would reduce time complexity to $O(n)$ average.
    - Implementing the **Boyer-Moore Voting Algorithm** would reduce space complexity from $O(n)$ to $O(1)$.

## Code Quality
- **Readability**: Good. The logic is simple and easy to follow.
- **Structure**: Good. The early return `if (mp[it]>n/2)` is an efficient way to terminate the loop.
- **Naming**: Moderate. `mp` is a generic name; `counts` or `freq` would be more descriptive. `it` is typically used for iterators; `num` or `val` would be more appropriate for the element value.
- **Improvement**: Change `map` to `unordered_map` for a quick win in performance, or rewrite using two variables (candidate and count) for optimal space.

---

# Question Revision
### Majority Element

**Pattern:** Boyer-Moore Voting Algorithm

**Brute Force:** 
Use a Hash Map to count occurrences of each element. Iterate through the map to find the key with a frequency $> \lfloor n/2 \rfloor$.
- Time: $O(n)$
- Space: $O(n)$

**Optimal Approach:**
Maintain a `candidate` and a `count`. Iterate through the array: if `count` is 0, assign the current element as the `candidate`. Increment `count` if the current element matches the `candidate`, otherwise decrement it. The `candidate` remaining at the end is the majority element.
- Time: $O(n)$
- Space: $O(1)$

**The 'Aha' Moment:** 
The constraint that one element appears *more than half* the time ensures it can "outvote" all other distinct elements combined.

**Summary:** 
Pair up and cancel out different elements; the last one standing is the majority.

---