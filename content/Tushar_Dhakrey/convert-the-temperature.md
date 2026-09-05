---
title: "Convert the Temperature"
slug: convert-the-temperature
date: "2026-09-02"
---

# My Solution
~~~java
class Solution {
    public int differenceOfSums(int n, int m) {
        int num1 =0;
        int num2 = 0;
        for(int i=1;i<=n;i++){
            if(i%m==0){
                num2 += i;
            }
            else{
                num1 += i;
            }
        }
        return num1-num2;
    }
}
~~~

# Submission Review
## Approach
* **Technique**: Iterative summation (Simulation).
* **Optimality**: Suboptimal. While $O(n)$ is acceptable for small $n$, the problem can be solved in $O(1)$ using arithmetic progression formulas.

## Complexity
* **Time Complexity**: $O(n)$, where $n$ is the input integer.
* **Space Complexity**: $O(1)$, as it uses a fixed number of integer variables.

## Efficiency Feedback
* **Bottleneck**: The loop iterates $n$ times. For extremely large $n$, this is unnecessary.
* **Optimization**: The sum of all numbers from $1$ to $n$ is $S = \frac{n(n+1)}{2}$. The sum of multiples of $m$ is $m \times \frac{k(k+1)}{2}$, where $k = \lfloor n/m \rfloor$. Since `num1 = S - num2`, the result is `(S - num2) - num2`, or `S - 2 * num2`. This reduces complexity to $O(1)$.

## Code Quality
* **Readability**: Good. The logic is straightforward and easy to follow.
* **Structure**: Good. Minimalist class structure appropriate for a competitive programming snippet.
* **Naming**: Moderate. `num1` and `num2` are generic; `notDivisibleSum` and `divisibleSum` would be more descriptive.
* **Concrete Improvements**: 
    * Add a check for edge cases (though constraints likely imply $n, m \ge 1$).
    * If the constraints on $n$ are large ($> 10^7$), switch to the $O(1)$ mathematical approach.
    * The problem name provided ("Convert the Temperature") does not match the logic ("Difference of Sums"); ensure the function implementation aligns with the actual task requirement.

---

# Question Revision
### Revision Report: Convert the Temperature

**Pattern:** Math / Linear Transformation

**Brute Force:**
N/A (The problem defines a direct functional mapping between input variables and output results).

**Optimal Approach:**
Apply the provided conversion formulas ($Kelvin = Celsius + 273.15$; $Fahrenheit = Celsius \times 1.80 + 32.00$) directly to the input variable.
*   **Time Complexity:** $O(1)$
*   **Space Complexity:** $O(1)$

**The 'Aha' Moment:**
When the problem provides explicit formulas for transformation, the task is a simple constant-time mapping rather than an algorithmic search or iteration.

**Summary:** 
If the problem provides the mathematical transformation rules, focus on implementation and precision rather than algorithmic complexity.

---