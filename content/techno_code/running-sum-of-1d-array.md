---
title: "Running Sum of 1d Array"
slug: running-sum-of-1d-array
date: "2026-07-09"
---

# My Solution
~~~
cpp
class Solution {
public:
    vector<int> runningSum(vector<int>& nums) {
        int n=nums.size();
        vector <int> v;
        int sum=0;
        for(int i=0; i<nums.size();i++){
            sum += nums[i];
            v.push_back(sum);
        }
        return v;
    }
};
~~~

# Submission Review

## Approach
*   **Technique:** Prefix Sum (Iterative accumulation).
*   **Optimal:** No. The approach is sub-optimal because it allocates a new vector (`v`) instead of performing the operation in-place.

## Complexity
*   **Time Complexity:** $O(n)$, where $n$ is the size of the input array.
*   **Space Complexity:** $O(n)$ additional space for the new vector. 
*   **Bottleneck:** Memory allocation for the output vector is unnecessary; the problem can be solved with $O(1)$ auxiliary space by modifying the input vector directly.

## Efficiency Feedback
*   **Memory:** The current implementation triggers $n$ reallocations (if not pre-allocated) and maintains two copies of the data. 
*   **Optimization:** Since the input is passed by reference (`vector<int>&`), you should modify `nums` in-place and return it. Additionally, if a new vector is required, use `v.reserve(n)` to avoid multiple reallocations during `push_back`.

## Code Quality
*   **Readability:** Good. The logic is straightforward and easy to follow.
*   **Structure:** Moderate. Mixing variable declarations (`int n`) with loop logic is acceptable but slightly cluttered.
*   **Naming:** Moderate. `v` is too generic; `running_sums` or `result` would be more descriptive.
*   **Concrete Improvements:**
    *   Perform the calculation in-place: `nums[i] += nums[i-1]` for $i > 0$.
    *   If the original array must be preserved, use `vector<int> result(n);` and access by index to avoid `push_back` overhead.
    *   Remove unused variable `int n = nums.size();`.

**Recommended Refactor:**
```cpp
class Solution {
public:
    vector<int> runningSum(vector<int>& nums) {
        for (size_t i = 1; i < nums.size(); ++i) {
            nums[i] += nums[i - 1];
        }
        return nums;
    }
};
```

---

# Question Revision

#

## Revision Report: Running Sum of 1d Array

**Pattern:** Prefix Sum

**Brute Force:** 
For each index $i$, iterate from the start of the array to $i$ and calculate the sum of elements.
*   **Time:** $O(n^2)$
*   **Space:** $O(1)$ (excluding output array)

**Optimal Approach:** 
Maintain a running total variable while iterating through the array once, adding the current element to the previous sum and storing it in the result array at each step ($nums[i] = nums[i] + nums[i-1]$).
*   **Time:** $O(n)$
*   **Space:** $O(1)$ (if modifying in-place)

**The 'Aha' Moment:** 
Whenever a problem asks for the accumulation of values where the current state depends on all previous results, look to cache the previous calculation to avoid redundant re-summation.

**Summary:** 
Prefix sums turn $O(n^2)$ range-sum queries into $O(n)$ linear scans by reusing the work from the immediate predecessor.

---