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
        int n=nums.size();
        int sum=0;
        for(int i=0;i<n;i++){
            if(i%2==0){
                sum+=nums[i];
            }
            else{
                sum-=nums[i];
            }
        }
        return sum;
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Iterative linear scan.
- **Optimality**: Optimal. Every element must be visited once to compute the sum.

## Complexity
- **Time Complexity**: $O(n)$ where $n$ is the size of the input vector.
- **Space Complexity**: $O(1)$ as it uses a single integer variable for the accumulator.

## Efficiency Feedback
- The implementation is highly efficient. 
- **Potential Risk**: There is no check for integer overflow. If the input array is very large or contains values near `INT_MAX`/`INT_MIN`, the result may overflow the `int` return type. Using `long long` for the `sum` variable would be safer depending on problem constraints.

## Code Quality
- **Readability**: Good. The logic is straightforward and easy to follow.
- **Structure**: Good. Standard implementation.
- **Naming**: Good. Variable names (`sum`, `nums`, `n`) are clear and conventional.
- **Improvements**:
    - Use a `range-based for loop` with a manual toggle/index to avoid repeated modulo operations, although the compiler likely optimizes `i % 2`.
    - Example:
      ```cpp
      int sign = 1;
      for (int x : nums) {
          sum += sign * x;
          sign *= -1;
      }
      ```

---

# Question Revision
### Compute Alternating Sum

**Pattern:** Array Traversal / Simulation

**Brute Force:** 
Iterate through the array and use a conditional check (e.g., `if index % 2 == 0`) to determine whether to add or subtract the current element.

**Optimal Approach:** 
Perform a single pass through the array. Maintain a running sum and a sign multiplier (initially `1`) that flips (`multiplier *= -1`) after every element.
- **Time Complexity:** $O(n)$
- **Space Complexity:** $O(1)$

**The 'Aha' Moment:** 
The requirement to switch operations based on position is a direct signal to track index parity or use a toggling sign variable.

**Summary:** 
Sum elements by alternating their signs based on the index's parity.

---