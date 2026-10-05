---
title: "Convert the Temperature"
slug: convert-the-temperature
date: "2026-10-05"
---

# My Solution
~~~cpp
class Solution {
public:
    vector<double> convertTemperature(double c) {
        /*double f=(c*1.80000)+32;
        double k=c+273.15000;
        vector<double> ans;
        ans.push_back(k);
        ans.push_back(f);
        return ans;*/
        return {c+273.15, c*1.80+32.00};
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Direct mathematical transformation (formula application).
- **Optimality**: Optimal. The problem requires a simple constant-time calculation based on fixed formulas.

## Complexity
- **Time Complexity**: $O(1)$ — Performs a constant number of arithmetic operations.
- **Space Complexity**: $O(1)$ — Returns a vector of fixed size (2 elements) regardless of the input value.

## Efficiency Feedback
- The solution is maximally efficient. 
- The use of an initializer list `{}` in the return statement is more efficient and concise than the commented-out `push_back` approach as it avoids multiple reallocations.

## Code Quality
- **Readability**: Moderate. The logic is clear, but the large block of commented-out code creates visual clutter.
- **Structure**: Good. The logic is contained within a single return statement.
- **Naming**: Good. The parameter `c` is standard for Celsius in this context.
- **Concrete Improvements**: 
    - Remove the commented-out block of code to clean up the source.
    - Although not required for correctness, using `const` for the input `c` (if the signature allowed) would be best practice.

---

# Question Revision
# Revision Report: Convert the Temperature

- **Pattern:** Basic Simulation / Mathematical Formula
- **Brute Force:** Directly apply the provided linear conversion formulas for Kelvin and Fahrenheit to the input Celsius value.
- **Optimal Approach:** 
    - **Logic:** Calculate $K = Celsius + 273.15$ and $F = Celsius \times 1.80 + 32.00$. Return both as a list/array.
    - **Time Complexity:** $O(1)$
    - **Space Complexity:** $O(1)$
- **The 'Aha' Moment:** When the problem provides exact mathematical formulas, the goal is simple implementation rather than algorithmic optimization.
- **Summary:** A straightforward simulation problem that tests the ability to translate a given mathematical formula into code.

---