---
title: "Compute Alternating Sum"
slug: compute-alternating-sum
date: "2026-07-14"
---

# My Solution
~~~java
class Solution {
    public int alternatingSum(int[] nums) {
        int sum = 0;
        for ( int i = 0; i < nums.length; i++){
            if( i % 2 == 0){
                sum = sum + nums[i];
            }
            else{
                sum = sum - nums[i];
            }
        }
        return sum;
    }
}
~~~

# Submission Review
## Approach
- **Technique:** Iterative linear scan.
- **Optimality:** Optimal. The problem requires visiting every element once to compute the sum.

## Complexity
- **Time Complexity:** $O(n)$, where $n$ is the length of the input array.
- **Space Complexity:** $O(1)$, as it only uses a single primitive integer for the accumulator.

## Efficiency Feedback
- The runtime and memory usage are minimal.
- No significant bottlenecks exist.

## Code Quality
- **Readability:** Good. The logic is straightforward and easy to follow.
- **Structure:** Good. 
- **Naming:** Good.
- **Concrete Improvements:**
    - Use compound assignment operators for conciseness: `sum += nums[i]` and `sum -= nums[i]`.
    - The logic could be condensed using a ternary operator: `sum += (i % 2 == 0) ? nums[i] : -nums[i];`.

---

# Question Revision
### Compute Alternating Sum

**Pattern:** Linear Scan / Simulation

**Brute Force:** Use a boolean flag (e.g., `isPositive`) and toggle it inside a loop to add or subtract the current element.

**Optimal Approach:** Iterate through the sequence once. Use the index parity (even index = positive, odd index = negative) to determine the operation.
- **Time Complexity:** $O(n)$
- **Space Complexity:** $O(1)$

**The 'Aha' Moment:** The requirement for signs to flip at every step is a direct signal to use index parity (`i % 2`) to drive the logic.

**Summary:** Calculate the sum by adding elements at even indices and subtracting elements at odd indices in a single pass.

---