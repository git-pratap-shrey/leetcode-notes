---
title: "Build Array from Permutation"
slug: build-array-from-permutation
date: "2026-07-09"
---

# My Solution
~~~
cpp
class Solution {
public:
    vector<int> buildArray(vector<int>& nums) {
        vector<int> ans;
        for(int i=0;i<nums.size();i++){
            ans.push_back(nums[nums[i]]);
        }
        return ans;
    }
};
~~~

# Submission Review

## Approach
- **Technique:** Iterative array mapping.
- **Optimality:** Optimal in terms of time complexity ($O(N)$), but utilizes $O(N)$ extra space. While the problem can be solved in $O(1)$ extra space using bit manipulation/encoding, this approach is standard and acceptable for most interview contexts.

## Complexity
- **Time Complexity:** $O(N)$, where $N$ is the size of the input array. The code performs a single pass through the array.
- **Space Complexity:** $O(N)$ to store the result vector `ans`.

## Efficiency Feedback
- **Runtime:** The current implementation is efficient; however, `ans.push_back` may cause multiple reallocations as the vector grows.
- **Optimization:** You can reserve memory for the result vector to avoid dynamic resizing overhead: `ans.reserve(nums.size());`.

## Code Quality
- **Readability:** Good. The logic is straightforward and easy to follow.
- **Structure:** Good. Minimalistic and clean.
- **Naming:** Good. `nums` and `ans` are standard conventions for this type of problem.
- **Improvements:** 
    - Use `ans.reserve(nums.size())` to pre-allocate memory.
    - Since `nums.size()` is used multiple times, you could store it in a `size_t n` variable for slight readability improvement and to ensure the compiler treats the loop bound as constant.
    - Consider passing `nums` by `const vector<int>&` to clarify that the input is not modified (if allowed by the function signature).

---

# Question Revision

#

## Revision Report: Build Array from Permutation

**Pattern:** Array Index Manipulation (In-place Encoding)

**Brute Force:** Create a new array `ans` of the same size and populate it using `ans[i] = nums[nums[i]]`.
*   **Time:** $O(n)$
*   **Space:** $O(n)$

**Optimal Approach:** Use the property that $0 \le \text{nums}[i] < n$ to encode two values into a single array element using the formula: `nums[i] = nums[i] + (nums[nums[i]] % n) * n`. To retrieve the new value, use `nums[i] / n`.
*   **Time:** $O(n)$
*   **Space:** $O(1)$ (In-place modification)

**The 'Aha' Moment:** The constraint that all values are within the range $[0, n-1]$ is a massive hint that you can "hide" the new value by modifying the existing element without losing the original data through modular arithmetic.

**Summary:** When an array stores values within its own index range, use the $O(1)$ space encoding trick to store the new value in the remainder of the division.

---