---
title: "Majority Element II"
slug: majority-element-ii
date: "2026-04-15"
---

# My Solution
~~~cpp
class Solution {
public:
    vector<int> majorityElement(vector<int>& nums) {
        map<int,int> mp;
        int n=nums.size();
        vector<int> v;
        for(int i=0;i<n;i++){
            mp[nums[i]]++;
        }
        for(auto it:mp){
          if(it.second > (n/3))
          v.push_back(it.first);
        }
        return v;
     }
};
~~~

# Submission Review
## Approach
- **Technique**: Frequency counting using a `std::map`.
- **Optimality**: Suboptimal. While it correctly identifies elements appearing more than $n/3$ times, it does not meet the optimal $O(n)$ time and $O(1)$ space constraints typically expected for this problem (which are achievable via the Boyer-Moore Voting Algorithm).

## Complexity
- **Time Complexity**: $O(n \log n)$. Each insertion and lookup in a `std::map` (implemented as a red-black tree) takes $O(\log k)$ time, where $k$ is the number of unique elements.
- **Space Complexity**: $O(n)$. In the worst case (all elements unique), the map stores $n$ entries.

## Efficiency Feedback
- **Bottleneck**: Use of `std::map` introduces a logarithmic factor to the time complexity and linear space overhead.
- **Optimization**: 
    - Replacing `std::map` with `std::unordered_map` would reduce average time complexity to $O(n)$, though space would remain $O(n)$.
    - Implementing the **Boyer-Moore Voting Algorithm** would reduce space complexity to $O(1)$.

## Code Quality
- **Readability**: Good. The logic is simple and easy to follow.
- **Structure**: Good. Standard procedural flow.
- **Naming**: Poor. Variable names `mp`, `n`, and `v` are generic; `counts` and `result` would be more descriptive.
- **Concrete Improvements**:
    - Use `const auto& it : mp` in the second loop to avoid copying pairs.
    - Use `nums.begin()` and `nums.end()` with a range-based for loop for the first pass: `for (int num : nums)`.
    - Pre-allocate the vector size if the maximum possible result size is known (max 2 elements).

---

# Question Revision
### Revision Report: Majority Element II

**Pattern:** Boyer-Moore Voting Algorithm (Generalized)

**Brute Force:** Use a Hash Map to store the frequency of every element, then iterate through the map to collect keys with counts $> \lfloor n/3 \rfloor$.
- **Time:** $O(n)$
- **Space:** $O(n)$

**Optimal Approach:**
Maintain two potential candidates and two counters. 
1. **Phase 1 (Voting):** Iterate through the array. If the current element matches a candidate, increment its counter. If a counter is zero, assign the current element as the new candidate. If the element matches neither and both counters are non-zero, decrement both counters.
2. **Phase 2 (Verification):** Since the voting phase only identifies *potential* candidates, perform a second pass to count the actual occurrences of these two candidates to ensure they exceed $n/3$.

- **Time:** $O(n)$
- **Space:** $O(1)$

**The 'Aha' Moment:** The requirement for elements appearing more than $\lfloor n/k \rfloor$ times implies there can be at most $k-1$ such elements, signaling the need for the generalized Boyer-Moore algorithm.

**Summary:** Use two candidates and counters to isolate potential majority elements in one pass, then verify their actual counts in a second pass.

---