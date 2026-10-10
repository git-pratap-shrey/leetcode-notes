---
title: "Counting Bits"
slug: counting-bits
date: "2026-10-09"
---

# My Solution
~~~cpp

class Solution {
public:
    vector<int> countBits(int n) {
        vector<int> v(n+1);
        int i=0;

        while(i<=n){
            int count=0;
            int j=i;

            while(j){
                if(j%2==1) count++;
                j=j/2;
            }

            v[i]=count;
            i++;
        }

        return v;
    }
};
~~~

# Submission Review
## Approach
- **Technique:** Brute force. The solution iterates through every integer from $0$ to $n$ and manually counts set bits by repeatedly dividing by 2.
- **Optimality:** Not optimal. The problem can be solved in linear time using Dynamic Programming (DP) by leveraging previously computed values (e.g., `v[i] = v[i >> 1] + (i & 1)`).

## Complexity
- **Time Complexity:** $O(n \log n)$. For each of the $n$ elements, the inner `while` loop runs for the number of bits in the integer ($\log n$).
- **Space Complexity:** $O(1)$ auxiliary space (excluding the $O(n)$ space required for the output vector).

## Efficiency Feedback
- **Bottleneck:** The inner loop recalculates the bit count from scratch for every number, ignoring the mathematical relationship between $i$ and $i/2$.
- **Optimization:** Using the built-in `__builtin_popcount(i)` in C++ would improve the constant factor, but a DP approach would reduce the asymptotic complexity to $O(n)$.

## Code Quality
- **Readability:** Good. The logic is straightforward and easy to follow.
- **Structure:** Moderate. Using a `while` loop for the outer iteration is less idiomatic in C++ than a `for` loop when the range is known.
- **Naming:** Moderate. `v` is a generic name; `result` or `bits` would be more descriptive. `i` and `j` are acceptable for loop indices.
- **Improvements:**
    - Replace the outer `while` loop with `for (int i = 0; i <= n; ++i)`.
    - Use bitwise operators (`j & 1` instead of `j % 2 == 1` and `j >>= 1` instead of `j = j / 2`) for better alignment with the problem domain.

---

# Question Revision
# Revision Report: Counting Bits

- **Pattern:** Dynamic Programming (Bit Manipulation)
- **Brute Force:** Iterate from $0$ to $n$, and for each number, use a built-in function or a `while` loop to count the set bits (1s) by repeatedly shifting right or using `n & (n - 1)`.
- **Optimal Approach:** Use DP to derive the count of bits for $i$ from a previously computed smaller value.
    - **Logic:** A number $i$ has the same number of set bits as $i >> 1$ (which is $i/2$), plus $1$ if $i$ is odd (checked via `i & 1`). 
    - **Relation:** `dp[i] = dp[i >> 1] + (i & 1)`
    - **Complexity:** 
        - Time: $O(n)$
        - Space: $O(1)$ (excluding the output array)
- **The 'Aha' Moment:** The realization that the binary representation of $i$ is simply the binary representation of $i/2$ shifted left by one position.
- **Summary:** The number of 1s in $i$ is the number of 1s in $i//2$ plus the remainder of $i\%2$.

---