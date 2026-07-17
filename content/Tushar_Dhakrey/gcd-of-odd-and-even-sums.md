---
title: "GCD of Odd and Even Sums"
slug: gcd-of-odd-and-even-sums
date: "2026-07-17"
---

# My Solution
~~~java
class Solution {
    public int gcdOfOddEvenSums(int n) {
        return n;
    }
}
~~~

# Submission Review
## Approach
- **Technique**: Trivial return.
- **Optimality**: Not optimal. The code simply returns the input `n` and does not implement any logic related to GCD or the summation of odd and even numbers.

## Complexity
- **Time Complexity**: $O(1)$
- **Space Complexity**: $O(1)$

## Efficiency Feedback
- The runtime and memory are minimal because the solution performs no actual computation. It is functionally a placeholder.

## Code Quality
- **Readability**: Poor. The method name suggests a specific mathematical operation, but the implementation does not align with the name.
- **Structure**: Poor. It is an incomplete implementation.
- **Naming**: Moderate. The method name is descriptive, but the implementation renders it misleading.
- **Improvements**: The logic for calculating the sums of odd and even numbers and their subsequent Greatest Common Divisor (GCD) must be implemented.

---

# Question Revision
### GCD of Odd and Even Sums

**Pattern:** Mathematical / Array Traversal

**Brute Force:**
Iterate through the array twice to calculate the sum of elements at even and odd indices separately. Find the GCD by checking every integer from $\min(sum_{even}, sum_{odd})$ down to 1.

**Optimal Approach:**
1. **Single Pass:** Traverse the array once, using the modulo operator (`i % 2`) to accumulate `sum_even` and `sum_odd` in $O(n)$.
2. **Euclidean Algorithm:** Use the iterative subtraction or modulo method to find the GCD: $\text{gcd}(a, b) = \text{gcd}(b, a \pmod b)$.
- **Time Complexity:** $O(n + \log(\min(sum_{even}, sum_{odd})))$
- **Space Complexity:** $O(1)$

**The 'Aha' Moment:**
The requirement for the "GCD of sums" implies that the core problem is simple aggregation followed by the Euclidean Algorithm.

**Summary:**
Sum elements by index parity and compute their GCD using the Euclidean Algorithm.

---