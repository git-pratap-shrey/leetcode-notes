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
- **Technique**: Frequency counting using a balanced Binary Search Tree (`std::map`).
- **Optimality**: Suboptimal. While it correctly solves the problem, it does not meet the $O(n)$ time and $O(1)$ space constraints typically expected for this problem (which can be achieved via the Boyer-Moore Voting Algorithm).

## Complexity
- **Time Complexity**: $O(n \log m)$, where $n$ is the number of elements and $m$ is the number of unique elements. Each map insertion/update takes logarithmic time.
- **Space Complexity**: $O(m)$ to store the frequency of each unique element in the map.

## Efficiency Feedback
- **Bottleneck**: The use of `std::map` introduces a logarithmic overhead per element.
- **Optimizations**: 
    - Replacing `std::map` with `std::unordered_map` would reduce average time complexity to $O(n)$.
    - Implementing the Boyer-Moore Voting Algorithm would reduce space complexity from $O(n)$ to $O(1)$.

## Code Quality
- **Readability**: Good. The logic is simple and easy to follow.
- **Structure**: Good.
- **Naming**: Poor. Variable names `mp` and `v` are non-descriptive; `counts` and `result` would be more appropriate.
- **Concrete Improvements**:
    - Use a range-based for loop for the first loop: `for (int num : nums) mp[num]++;`.
    - Use `const auto& it` in the second loop to avoid copying pairs from the map.

---

# Question Revision
### Majority Element II

**Pattern:** Boyer-Moore Voting Algorithm (Extension)

**Brute Force:** Use a Hash Map to store frequencies of all elements and return those with counts $> \lfloor n/3 \rfloor$.
- Time: $O(n)$
- Space: $O(n)$

**Optimal Approach:** Maintain two candidates and two counters. 
1. **Phase 1 (Voting):** Iterate through the array. If the current element matches a candidate, increment its counter. If a counter is zero, assign the current element as the new candidate. If the element matches neither and both counters are non-zero, decrement both counters.
2. **Phase 2 (Verification):** Since the voting phase only finds *potential* candidates, iterate again to count actual occurrences and keep only those appearing more than $n/3$ times.
- Time: $O(n)$
- Space: $O(1)$

**The 'Aha' Moment:** The requirement for $O(1)$ space combined with a "more than $n/k$" frequency threshold is a direct signal to use a modified Boyer-Moore Voting Algorithm.

**Summary:** Track two candidates and their counts to filter potential majorities, then verify their frequencies in a final pass.

---