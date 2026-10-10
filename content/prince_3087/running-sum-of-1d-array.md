---
title: "Running Sum of 1d Array"
slug: running-sum-of-1d-array
date: "2026-10-07"
---

# My Solution
~~~cpp
class Solution {
public:
    vector<int> runningSum(vector<int>& nums) {
        int res = 0;
        vector<int>r;
        for(int i = 0 ; i<nums.size();i++){
           res = res+nums[i];
            r.push_back(res);

        }
        return r;
        
    }
};
~~~

# Submission Review
## Approach
- **Technique:** Iterative prefix sum.
- **Optimality:** Optimal in terms of time complexity, but suboptimal in terms of space complexity.

## Complexity
- **Time Complexity:** $O(n)$, where $n$ is the size of `nums`. The array is traversed once.
- **Space Complexity:** $O(n)$ to store the result vector `r`.

## Efficiency Feedback
- **Memory Usage:** The solution allocates a new vector `r`. Since the problem allows modifying the input array, the space complexity could be reduced to $O(1)$ (excluding output space) by updating `nums` in-place.
- **Allocation Overhead:** `push_back` may cause multiple reallocations as the vector grows. Using `r.reserve(nums.size())` or initializing the vector with a fixed size `vector<int> r(nums.size())` would be more efficient.

## Code Quality
- **Readability:** Moderate. Indentation is inconsistent, and there is a lack of whitespace around operators (e.g., `i<nums.size()`).
- **Structure:** Good. The logic is straightforward and follows a standard linear flow.
- **Naming:** Poor. `res` (usually meaning result) is used for the running total, and `r` is used for the result vector. More descriptive names like `currentSum` and `runningSums` would improve clarity.

**Concrete Improvements:**
1. Perform the operation in-place: `nums[i] += nums[i-1]` starting from index 1.
2. Fix indentation and spacing for professional standards.
3. Use `size_t` or `int n = nums.size()` to avoid repeated function calls in the loop header.

---

# Question Revision
# Revision Report: Running Sum of 1d Array

- **Pattern:** Prefix Sum
- **Brute Force:** For every index $i$, start a nested loop from $0$ to $i$ to calculate the sum of all previous elements. 
- **Optimal Approach:** Iterate through the array once; update the current element by adding the value of the previous element to it.
    - **Time Complexity:** $O(n)$
    - **Space Complexity:** $O(1)$ (if modifying the input array in-place) or $O(n)$ (if creating a new result array).
- **The 'Aha' Moment:** The requirement to track a cumulative total as you traverse a linear sequence is the classic definition of a Prefix Sum.
- **Summary:** Update the current element using the previously calculated sum to avoid redundant additions.

---