---
title: "Construct Uniform Parity Array I"
slug: construct-uniform-parity-array-i
date: "2026-09-03"
---

# My Solution
~~~java
class Solution {
    public double[] convertTemperature(double celsius) {
        double[] ans = {-1,-1};
        double kelvin = celsius+273.15;
        double fahren = celsius*1.80 + 32.00;
        ans[0] = kelvin;
        ans[1] = fahren;
        return ans;
        
    }
}
~~~

# Submission Review
## Approach
*   **Technique**: Direct computation (arithmetic conversion).
*   **Optimal**: Yes, it performs the necessary mathematical conversions in constant time with minimal operations.

## Complexity
*   **Time Complexity**: $O(1)$.
*   **Space Complexity**: $O(1)$ (allocating a fixed-size array of length 2).

## Efficiency Feedback
*   **Performance**: The code is as efficient as possible.
*   **Optimizations**: The array instantiation can be inlined to reduce verbosity: `return new double[] {celsius + 273.15, celsius * 1.80 + 32.00};`.

## Code Quality
*   **Readability**: Good. The logic is straightforward and standard for temperature conversion.
*   **Structure**: Moderate. While functional, the pre-allocation and assignment of the array are slightly redundant.
*   **Naming**: Good. `kelvin` and `fahren` clearly communicate their intent.
*   **Concrete Improvements**: 
    *   Remove the intermediate `ans` array variable.
    *   Initialize and return the array in a single statement.
    *   Ensure the problem name "Construct Uniform Parity Array I" does not match the provided code (which solves "Convert the Temperature"). This suggests a potential file naming or submission mismatch.

```java
class Solution {
    public double[] convertTemperature(double celsius) {
        return new double[] { celsius + 273.15, celsius * 1.80 + 32.00 };
    }
}
```

---

# Question Revision
### Revision Report: Construct Uniform Parity Array I

**Pattern:** Prefix Sum / Parity Tracking

**Brute Force:** 
For each possible subarray or construction, iterate through all elements and calculate parity sums, leading to $O(n^2)$ complexity due to repeated summation.

**Optimal Approach:** 
Maintain a running count of odd and even numbers using a prefix parity array or a simple counter. By calculating the difference between prefix counts at indices $i$ and $j$, you can determine the parity distribution of any segment in $O(1)$ time after an $O(n)$ preprocessing step.
*   **Time Complexity:** $O(n)$
*   **Space Complexity:** $O(n)$ (or $O(1)$ if tracking only current state)

**The 'Aha' Moment:** 
The requirement to validate parity properties across arbitrary ranges is a classic indicator that converting absolute values into prefix-based parity counts will eliminate redundant summations.

**Summary:** 
When a problem asks about parity ranges, transform the input into a binary state ($0$ for even, $1$ for odd) and use prefix sums to query ranges in constant time.

---