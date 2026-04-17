---
title: "Two Sum"
slug: two-sum
date: "2026-04-01"
---

# My Solution
~~~cpp
class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        int n=nums.size();
        for(int i=0;i<n-1;i++)
        {
            for(int j=i+1;j<n;j++)
            {
                int sum=0;
                sum=nums[i]+nums[j];
                if(sum==target)
                {
                    return {i,j};
                }
            }
        }
       return {};
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Brute-force search using nested loops to check every possible pair.
- **Optimality**: Suboptimal. The problem can be solved in linear time using a hash map.

## Complexity
- **Time Complexity**: $O(n^2)$ where $n$ is the size of the input vector.
- **Space Complexity**: $O(1)$ (excluding the output vector).
- **Bottleneck**: The nested loop structure forces the algorithm to check all combinations, leading to quadratic growth as the input size increases.

## Efficiency Feedback
- **Runtime**: High for large datasets.
- **Optimization**: Use a `std::unordered_map<int, int>` to store the value and index of each element encountered. For each element `nums[i]`, check if `target - nums[i]` exists in the map. This would reduce time complexity to $O(n)$.

## Code Quality
- **Readability**: Good. The logic is straightforward and easy to follow.
- **Structure**: Good. Standard C++ class implementation.
- **Naming**: Moderate. `n` is standard for size, but the variable `sum` is redundant.
- **Concrete Improvements**:
    - Remove the line `int sum=0;` and initialize `int sum = nums[i] + nums[j];` in one step.
    - Use `const vector<int>& nums` to avoid any potential overhead (though already passed by reference here).

---

# Question Revision
### Two Sum

**Pattern:** Hash Map (Complement Lookup)

**Brute Force:** Use nested loops to check every possible pair of elements to see if they sum to the target. 
- **Time:** $O(n^2)$
- **Space:** $O(1)$

**Optimal Approach:** Iterate through the array once. For each element `x`, calculate the complement (`target - x`). If the complement exists in the hash map, return its index and the current index. Otherwise, store the current element and its index in the map.
- **Time:** $O(n)$
- **Space:** $O(n)$

**The 'Aha' Moment:** The need to find a specific "matching" value (the complement) in an unsorted array signals a Hash Map for $O(1)$ retrieval.

**Summary:** Store visited numbers in a map to find the target's complement in a single pass.

---