---
title: "Minimum Element After Replacement With Digit Sum"
slug: minimum-element-after-replacement-with-digit-sum
date: "2026-10-07"
---

# My Solution
~~~java
class Solution {
    public int minElement(int[] nums) {
        int min = Integer.MAX_VALUE;
        for(int num:nums){
            int sum = 0;
            while(num>0){
                sum += num%10;
                num /= 10;
            }
            min = Math.min(min,sum);
        }
        return min;
    }
}
~~~

# Submission Review
## Approach
- **Technique**: Iterative traversal with digit extraction.
- **Optimality**: Optimal. Each element must be evaluated at least once, and digit summation is the most direct way to find the replacement value.

## Complexity
- **Time Complexity**: $O(n \cdot \log_{10}(\text{max\_val}))$, where $n$ is the length of the array and $\log_{10}(\text{max\_val})$ represents the number of digits in the largest number.
- **Space Complexity**: $O(1)$, as only a few integer variables are used regardless of input size.

## Efficiency Feedback
- **Runtime**: The solution is highly efficient.
- **Memory**: Minimal footprint.
- **Optimization**: While a separate `digitSum` method could improve modularity, it would not change the asymptotic complexity or runtime in a meaningful way for this problem.

## Code Quality
- **Readability**: Good. The logic is straightforward and follows standard Java conventions.
- **Structure**: Good. Simple loop-based implementation.
- **Naming**: Good. Variable names (`min`, `sum`, `num`) are concise and appropriate for the context.
- **Improvements**: 
    - Consider moving the digit sum logic into a helper method to separate the "finding minimum" logic from the "digit calculation" logic.

---

# Question Revision
# Revision Report: Minimum Element After Replacement With Digit Sum

- **Pattern:** Greedy / Digit Manipulation
- **Brute Force:** For every element in the array, repeatedly calculate the sum of its digits until it becomes a single digit, then find the minimum of these results.
- **Optimal Approach:** 
    - Iterate through the array once.
    - For each number, compute its **digital root**. While you can use a loop to sum digits, the mathematical formula for the digital root of $n$ is: $1 + (n - 1) \pmod 9$ (for $n > 0$).
    - Maintain a global minimum variable to track the smallest digital root found.
    - **Time Complexity:** $O(n)$ (single pass through the array).
    - **Space Complexity:** $O(1)$.
- **The 'Aha' Moment:** The phrase "replace with digit sum" repeated until a condition is met is a textbook definition of the **Digital Root** property.
- **Summary:** To find the minimum possible digit sum of a number, calculate its digital root using modulo 9.

---