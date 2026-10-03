---
title: "Build Array from Permutation"
slug: build-array-from-permutation
date: "2026-09-27"
---

# My Solution
~~~cpp
class Solution {
public:
    vector<int> buildArray(vector<int>& nums) {
        vector<int> ans(nums.size());
        for(int i=0;i<nums.size();i++){
            ans[i]=nums[nums[i]];
        }
        return ans;
        
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Direct mapping using an auxiliary array.
- **Optimality**: Optimal in terms of time complexity. While it is possible to achieve $O(1)$ extra space using mathematical encoding (storing two values in one index), the current $O(n)$ space approach is the standard and most readable implementation.

## Complexity
- **Time Complexity**: $O(n)$ — The code iterates through the input array exactly once.
- **Space Complexity**: $O(n)$ — An output vector `ans` of size $n$ is allocated.

## Efficiency Feedback
- **Runtime**: Low. The operations inside the loop are constant-time array indexing.
- **Memory**: Moderate. Memory usage is dominated by the allocation of the `ans` vector. 
- **Optimization**: To avoid repeated calls to `nums.size()`, the size could be stored in a variable, though modern compilers usually optimize this.

## Code Quality
- **Readability**: Good. The logic is straightforward and follows the problem requirements.
- **Structure**: Good. Simple and linear flow.
- **Naming**: Moderate. `ans` is acceptable for competitive programming, but `result` or `permutedArray` would be more descriptive for production code.
- **Improvements**:
    - Use `const vector<int>& nums` in the function signature if the input is not intended to be modified (though the provided signature is likely from a LeetCode-style interface).
    - Use `size_t` for the loop index to avoid signed/unsigned comparison warnings.

---

# Question Revision
# Revision Report: Build Array from Permutation

- **Pattern:** Array Transformation / Simulation
- **Brute Force:** Create a new result array of the same size. Iterate through the original array, using the value at the current index as the index for the next lookup (`ans[i] = nums[nums[i]]`), and populate the new array.
- **Optimal Approach:** 
    - **Logic:** Use a single pass to map the values. Since the problem asks for a new array based on a specific mapping rule, a direct simulation is the most straightforward approach. (Note: While $O(1)$ space is possible using mathematical encoding/modulo arithmetic, it is often overkill for this specific problem).
    - **Time Complexity:** $O(n)$ — single traversal of the array.
    - **Space Complexity:** $O(n)$ — to store the output array.
- **The 'Aha' Moment:** The requirement to use a value as an index (`nums[nums[i]]`) signals a direct array mapping pattern.
- **Summary:** A straightforward simulation problem where values serve as pointers to other indices in the same array.

---