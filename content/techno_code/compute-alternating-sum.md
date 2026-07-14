---
title: "Compute Alternating Sum"
slug: compute-alternating-sum
date: "2026-07-14"
---

# My Solution
~~~cpp
class Solution {
public:
    int alternatingSum(vector<int>& nums) {
       int even=0;
       int odd=0;
      for(int i=0;i<nums.size();i++) {
        if(i%2==0) even+=nums[i];
        else odd+=nums[i];
      }
      return even-odd;
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Iterative simulation using a single pass.
- **Optimality**: Optimal. Every element must be visited once to compute the sum.

## Complexity
- **Time Complexity**: $O(N)$ where $N$ is the number of elements in `nums`.
- **Space Complexity**: $O(1)$ as it uses only two integer variables regardless of input size.

## Efficiency Feedback
- **Runtime/Memory**: Both are minimal and optimal.
- **Potential Issue**: The code is susceptible to **integer overflow** if the sum of elements exceeds the capacity of a 32-bit signed `int`. Depending on the problem constraints, `long long` should be used for the accumulator variables.

## Code Quality
- **Readability**: Moderate. The indentation is inconsistent (e.g., the `for` loop and `if` blocks are not aligned correctly).
- **Structure**: Good. The logic is straightforward and correctly implements the alternating sum.
- **Naming**: Good. `even` and `odd` clearly describe what is being tracked.
- **Concrete Improvements**:
    1. **Fix Indentation**: Standardize spacing for better maintainability.
    2. **Index Type**: Use `size_t` or `int n = nums.size()` to avoid compiler warnings regarding signed/unsigned comparisons between `int i` and `nums.size()`.
    3. **Refactor to Single Variable**: Instead of two variables, use one: `int sum = 0; sum += (i % 2 == 0) ? nums[i] : -nums[i];`.

---

# Question Revision
### Revision Report: Compute Alternating Sum

**Pattern:** Array Traversal / Simulation

**Brute Force:** 
Iterate through the array using a loop and a conditional check (`if index % 2 == 0`) to determine whether to add or subtract the current element from a running total.

**Optimal Approach:** 
Iterate through the array once, maintaining a sign variable (starting at `1`) that is multiplied by the element and then flipped (`sign *= -1`) at each step.
- **Time Complexity:** $O(n)$
- **Space Complexity:** $O(1)$

**The 'Aha' Moment:** 
The phrase "alternating sum" is a direct signal to use the parity of the index or a flipping sign toggle to determine the operation.

**Summary:** 
Traverse the array and toggle the operation between addition and subtraction for each consecutive element.

---