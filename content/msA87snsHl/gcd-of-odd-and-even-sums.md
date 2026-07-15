---
title: "GCD of Odd and Even Sums"
slug: gcd-of-odd-and-even-sums
date: "2026-07-15"
---

# My Solution
~~~java
class Solution {
    public int gcdOfOddEvenSums(int n) {
        int sumOdd = n * n;
        int sumEven = n * (n + 1);
        int remainder = sumOdd;
        int div = sumEven;
        while ( remainder > 0){
            div = remainder;
            remainder = div % remainder;
            
        }
        return n;
    }
}
~~~

# Submission Review
## Approach
- **Technique:** Mathematical derivation followed by an attempted GCD calculation.
- **Correctness:** The code is **incorrect**.
    - The mathematical premise is flawed: For a range $1$ to $N$, the sum of odds and evens are not necessarily $N^2$ and $N(N+1)$.
    - The GCD logic is broken: The `while` loop implementation is logically invalid (it performs an infinite loop or incorrect assignment) and the function returns `n` regardless of the calculation performed in the loop.

## Complexity
- **Time Complexity:** The loop logic is non-terminating or logically flawed, but theoretically, a proper GCD implementation would be $O(\log(\min(\text{sumOdd}, \text{sumEven})))$.
- **Space Complexity:** $O(1)$.

## Efficiency Feedback
- The logic within the `while` loop (`div = remainder; remainder = div % remainder;`) is circular and incorrect for the Euclidean algorithm.
- The `return n;` statement ignores the computation entirely, making the loop redundant.

## Code Quality
- **Readability:** Poor. The code performs a calculation that is ultimately ignored by the return statement.
- **Structure:** Poor. The implementation of the Euclidean algorithm is syntactically broken.
- **Naming:** Moderate. `sumOdd`, `sumEven`, and `gcd` related names are descriptive of intent, but the actual implementation fails that intent.
- **Concrete Improvements:** 
    - If the goal is to find the GCD of two sums, implement the Euclidean algorithm correctly:
      ```java
      int a = sumOdd, b = sumEven;
      while (b != 0) {
          int temp = b;
          b = a % b;
          a = temp;
      }
      return a;
      ```
    - Verify the mathematical formulas for the sums of odd and even numbers before hardcoding them, as they depend on the definition of the range (e.g., first $N$ odd/even integers vs. integers up to $N$).

---

# Question Revision
### Revision Report: GCD of Odd and Even Sums

**Pattern:** Prefix Sums / Math (GCD Property)

**Brute Force:** Calculate all possible subarrays, compute their odd/even sums, find the GCD for every pair, and track the maximum.
*   **Complexity:** $O(n^2)$ time, $O(1)$ space.

**Optimal Approach:** 
The GCD of two numbers $a$ and $b$ is equal to $GCD(a, b-a)$. By maintaining running prefix sums for odd and even indices separately, any subarray sum can be expressed as $Sum_{total} = (PrefixOdd_j - PrefixOdd_i) + (PrefixEven_j - PrefixEven_i)$. Since the problem reduces to finding the GCD of these segment sums, leverage the Euclidean algorithm on the prefix differences.
*   **Complexity:** $O(n \log(\min(sum)))$ time, $O(n)$ space.

**The 'Aha' Moment:** Whenever a problem asks for the GCD of subarray sums, remember that $GCD(a, b) = GCD(a, b-a)$, allowing you to replace complex range queries with simple prefix difference computations.

**Summary:** Transform range GCD problems into prefix-difference GCDs to bypass $O(n^2)$ subarray enumeration.

---