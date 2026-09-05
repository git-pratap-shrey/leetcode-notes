---
title: "Distribute Elements Into Two Arrays I"
slug: distribute-elements-into-two-arrays-i
date: "2026-08-20"
---

# My Solution
~~~cpp
class Solution {
public:
    vector<int> resultArray(vector<int>& nums) {
        int n = nums.size();
        vector<int> arr1, arr2;
        arr1.push_back(nums[0]);
        arr2.push_back(nums[1]);
        for (int i = 2; i < n; i++) {
            if (arr1.back() > arr2.back()) {
                arr1.push_back(nums[i]);
            } else {
                arr2.push_back(nums[i]);
            }
        }
        arr1.insert(arr1.end(), arr2.begin(), arr2.end());
        return arr1;
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Simulation. The code iterates through the input array once and distributes elements into two auxiliary vectors based on a comparison of their current tail elements.
- **Optimality**: Optimal. The problem requires a single pass to distribute elements and a final concatenation.

## Complexity
- **Time Complexity**: $O(n)$, where $n$ is the number of elements in `nums`. The loop runs $n-2$ times, and the `insert` operation takes linear time relative to the size of `arr2`.
- **Space Complexity**: $O(n)$ to store the distributed elements in `arr1` and `arr2` before returning the combined result.

## Efficiency Feedback
- **Memory Allocations**: The code performs multiple dynamic reallocations as `arr1` and `arr2` grow. Since the total number of elements is known ($n$), calling `arr1.reserve(n)` and `arr2.reserve(n/2)` (approx) would reduce allocation overhead.
- **Concatenation**: `arr1.insert` is the idiomatic and efficient way to append one vector to another in C++.

## Code Quality
- **Readability**: Good. The logic is linear and easy to follow.
- **Structure**: Good. It follows a clear initialization $\rightarrow$ processing $\rightarrow$ merging flow.
- **Naming**: Moderate. `arr1` and `arr2` are generic; however, they align with the problem's terminology.
- **Improvements**: 
    - Use `reserve()` to minimize reallocations.
    - Ensure the code handles cases where $n < 2$ (though likely guaranteed by problem constraints, the current code would crash on `nums[1]` if $n=1$).

---

# Question Revision
### Revision Report: Distribute Elements Into Two Arrays I

**Pattern:** Greedy / Sorting

**Brute Force:**
Iterate through all possible combinations of splitting the array into two equal halves and calculate the sum difference for each to find the maximum. 
Complexity: $O(\binom{n}{n/2})$

**Optimal Approach:**
Sort the array in ascending order. Assign the first $n/2$ elements (the smallest) to `perm2` and the remaining $n/2$ elements (the largest) to `perm1`. This maximizes the gap between the two sums.
- **Time Complexity:** $O(n \log n)$
- **Space Complexity:** $O(n)$ to store the output arrays.

**The 'Aha' Moment:**
To maximize the absolute difference between two sums, you must group the smallest possible values against the largest possible values.

**Summary:**
Sort the array and split it exactly in half to maximize the sum disparity.

---