---
title: "Sum of Integers with Maximum Digit Range"
slug: sum-of-integers-with-maximum-digit-range
date: "2026-07-05"

---

# My Solution
~~~
class
 Solution {
    public int maxDigitRange(int[] nums) {
        int maxrange = -1;
        int sum =0;
        for(int num : nums){
            int temp = num;
            int smallest = 9 ;
            int largest = 0;
            while(temp>0){
                int digit = temp%10;
                largest = Math.max(largest,digit);
                smallest = Math.min(smallest,digit);
                temp /= 10;
            }
            int range = largest - smallest;
            if(range<maxrange){
                continue;
            }
            if(range>maxrange){
                maxrange = range;
                sum = num;
            }
            else if(range == maxrange){
                sum += num;
            }
        }
        return sum;
    }
}
~~~

# Submission Review

## Approach

- **Technique:** Iterative digit extraction. The code iterates through the array, calculates the digit range (max digit - min digit) for each number, and maintains a running sum of elements that share the current maximum range.
- **Optimality:** Optimal. Every element must be visited, and every digit of every element must be inspected to determine the range.

## Complexity

- **Time Complexity:** $O(N \cdot \log_{10}(M))$, where $N$ is the number of elements in the array and $M$ is the maximum value of an element.
- **Space Complexity:** $O(1)$ as only a few integer variables are used regardless of input size.

## Efficiency Feedback

- **Runtime:** The complexity is minimal.
- **Edge Case Bug:** The logic `while(temp > 0)` fails if an element in `nums` is `0`. In such cases, the loop is skipped, `smallest` remains `9` and `largest` remains `0`, resulting in a range of `-9`. This will lead to incorrect results if $0$ is the only element or if other elements have ranges smaller than $-9$ (though the latter is impossible).

## Code Quality

- **Readability:** Moderate. The logic is straightforward, but the handling of the `maxrange` update is slightly verbose.
- **Structure:** Moderate. The `if(range < maxrange) continue;` block is redundant and adds unnecessary noise to the control flow.
- **Naming:** Good. Variables like `maxrange`, `smallest`, and `largest` clearly communicate their purpose.

**Concrete Improvements:**
1. **Fix Zero Handling:** Change `while(temp > 0)` to a `do-while` loop or add a specific check for `num == 0` to ensure the digit range for zero is calculated as $0$.
2. **Clean Conditionals:** Replace the three `if/else if` blocks with a simpler structure:
   ```java
   if (range > maxrange) {
       maxrange = range;
       sum = num;
   } else if (range == maxrange) {
       sum += num;
   }
   ```
3. **Negative Numbers:** If the input can contain negative integers, `temp = Math.abs(num)` should be used to avoid issues with the modulo operator.

---

# Question Revision

#

## Revision Report: Sum of Integers with Maximum Digit Range

**Pattern:** Digit DP (Dynamic Programming)

**Brute Force:** 
Iterate through every integer from $L$ to $R$, extract digits to find the difference between the maximum and minimum digit, and add to a running total if the range is maximized.
*   **Time Complexity:** $O(N \cdot \log_{10} N)$ where $N$ is the magnitude of the range.
*   **Space Complexity:** $O(1)$.

**Optimal Approach:**
Use Digit DP to count and sum numbers satisfying the digit range constraint. Define a DP state: `dp(index, tight_constraint, leading_zeros, current_min, current_max)`. 
1.  **State Tracking:** Maintain two values per state: the `count` of valid numbers and the `sum` of those numbers.
2.  **Transition:** For each digit $d \in [0, 9]$, update the `current_min` and `current_max`. The sum is updated as: $\text{new\_sum} = \sum (d \cdot 10^{\text{remaining\_pos}} \cdot \text{count\_of\_suffixes} + \text{sum\_of\_suffixes})$.
3.  **Range Query:** Solve for $[0, R]$ and subtract the result for $[0, L-1]$.
*   **Time Complexity:** $O(\log_{10} N \cdot 10 \cdot 10 \cdot 10)$ which simplifies to $O(\log_{10} N)$.
*   **Space Complexity:** $O(\log_{10} N)$ for the memoization table.

**The 'Aha' Moment:** 
When a problem asks for a sum of integers in a range $[L, R]$ based on properties of their individual digits, it is almost always a Digit DP problem.

**Summary:** 
Use Digit DP to track min/max digits and propagate both count and sum through the state transitions to avoid iterating over the range.

---
