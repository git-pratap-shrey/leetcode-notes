---
title: "Generate Parentheses"
slug: generate-parentheses
date: "2026-10-03"
---

# My Solution
~~~cpp
class Solution {
public:
    int subarraysDivByK(vector<int>& A, int K) {

        vector<int> map(K, 0);
        map[0] = 1;
        int count = 0;
        int sum = 0;
       for (int a : A) {

            sum = (sum + a) % K;
            if (sum < 0)
                sum += K;

            count += map[sum];
            map[sum]++;
        }
        return count;
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Prefix Sum with Modulo arithmetic (Frequency Map).
- **Optimality**: Optimal. It solves the problem in a single pass by tracking the remainder of the prefix sum modulo $K$.

## Complexity
- **Time Complexity**: $O(N)$, where $N$ is the length of the array `A`. The code iterates through the input once.
- **Space Complexity**: $O(K)$ to store the frequency of remainders in the `map` vector.

## Efficiency Feedback
- **Runtime**: Very efficient. Using a `std::vector` instead of a `std::unordered_map` for the frequency array is an optimal choice since the range of keys is known and small ($0$ to $K-1$).
- **Memory**: Minimal overhead.

## Code Quality
- **Readability**: Moderate. The logic is clear, but the code is provided as a solution for "Generate Parentheses" while actually solving "Subarray Sums Divisible by K."
- **Structure**: Good. The logic flows linearly and handles negative remainders correctly.
- **Naming**: Poor. 
    - The class/method names do not match the problem solved.
    - `map` is a poor name for a `vector` (confusing since `std::map` is a standard container).
    - `A` and `K` follow competitive programming style but lack descriptive clarity.

**Concrete Improvements**:
1. **Fix Problem Alignment**: Rename the function to `subarraysDivByK` and ensure it belongs to the correct problem context.
2. **Rename Variable**: Change `vector<int> map` to `vector<int> remainderCount` to avoid confusion with `std::map`.
3. **Consistency**: Standardize indentation and remove unnecessary empty lines.

---

# Question Revision
# Revision Report: Generate Parentheses

- **Pattern**: Backtracking (Recursive State Space Search)
- **Brute Force**: Generate all $2^{2n}$ possible strings of length $2n$ consisting of `(` and `)`, then validate each string using a stack or counter to check if it is well-formed.
- **Optimal Approach**: 
    - Use recursion to build the string incrementally.
    - **Constraint 1**: You can add a `(` if the count of open parentheses is less than $n$.
    - **Constraint 2**: You can add a `)` only if the count of closed parentheses is less than the count of open parentheses (ensuring validity).
    - **Complexity**: 
        - **Time**: $O(\frac{4^n}{\sqrt{n}})$ — This follows the $n$-th Catalan number, which describes the number of valid parentheses combinations.
        - **Space**: $O(n)$ — To store the recursion stack and the current string builder.
- **The 'Aha' Moment**: When the problem asks to "generate all" possible combinations and provides a set of strict validity rules, it is a signal to use backtracking with pruning.
- **Summary**: Use backtracking to build the string, ensuring `closed < open` at every step to maintain validity.

---