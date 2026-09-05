---
title: "Check Divisibility by Digit Sum and Product"
slug: check-divisibility-by-digit-sum-and-product
date: "2026-08-26"
---

# My Solution
~~~java
class Solution {
    public boolean checkDivisibility(int n) {
        int sum = 0;
        int product = 1;
        int original = n;
        while(n>0){
            int digit = n%10;
            sum += digit;
            product *= digit;
            n = n/10;
        }
        if(original%(sum+product)==0){
            return true;
        }
        else{
            return false;
        }
    }
}
~~~

# Submission Review
## Approach
*   **Technique**: Iterative digit extraction.
*   **Optimality**: Optimal. The solution processes each digit exactly once, which is the theoretical lower bound for this problem.

## Complexity
*   **Time Complexity**: $O(d)$, where $d$ is the number of digits in $n$ (i.e., $O(\log_{10} n)$).
*   **Space Complexity**: $O(1)$, as it uses a constant amount of extra space.

## Efficiency Feedback
*   The solution is efficient and performs minimal operations. 
*   **Potential Edge Case**: The logic does not explicitly handle cases where `n=0`. If `n=0` is a valid input, `sum=0` and `product=0` (due to initialization), leading to a `DivisionByZeroException` at `original % (sum + product)`.

## Code Quality
*   **Readability**: Good. The code is straightforward and easy to follow.
*   **Structure**: Moderate. The `if-else` block returning boolean literals is redundant; it can be simplified to a direct return expression.
*   **Naming**: Good. Variable names (`sum`, `product`, `original`) clearly describe their purpose.

### Concrete Improvements
1.  **Simplify Return Statement**: Replace the `if-else` with a single return line:
    ```java
    return original % (sum + product) == 0;
    ```
2.  **Input Handling**: Add a guard clause for `n == 0` if the problem constraints allow it, or ensure `sum + product` is never zero.
3.  **Variable Scope**: The variable `original` is well-used to preserve the state of `n` since `n` is consumed by the loop.

---

# Question Revision
### Revision Report: Check Divisibility by Digit Sum and Product

**Pattern:** Math / Digit Manipulation

**Brute Force:** Iterate through the number, extract each digit using modulo 10, calculate the sum and product, and check the divisibility condition for each.
*   **Time:** $O(d)$, where $d$ is the number of digits ($O(\log_{10} n)$).
*   **Space:** $O(1)$.

**Optimal Approach:** 
Since the input size is limited by the integer representation (typically $\leq 19$ digits), the brute force approach *is* the optimal approach. The logic remains:
1. Extract digits using `n % 10` and `n /= 10`.
2. Maintain `sum` and `product` variables.
3. Validate if `n % sum == 0` and `n % product == 0`.
*   **Time:** $O(\log n)$
*   **Space:** $O(1)$

**The 'Aha' Moment:**
When a problem involves arithmetic properties of individual digits, the constraints are implicitly bound by the logarithmic number of digits, making direct extraction the most efficient path.

**Summary:**
Digit-based problems are always $O(\log n)$ because the number of operations is strictly limited by the fixed number of digits in the data type.

---