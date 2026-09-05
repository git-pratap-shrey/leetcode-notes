---
title: "Longest Happy String"
slug: longest-happy-string
date: "2026-08-18"
---

# My Solution
~~~cpp
class Solution {
public:
    const long long MOD = 1e9 + 7;

    long long power(long long x, long long y) {
        long long ans = 1;
        x %= MOD;

        while (y > 0) {
            if (y % 2 == 1) {
                ans = (ans * x) % MOD;
            }

            x = (x * x) % MOD;
            y /= 2;
        }

        return ans;
    }

    long long decode(long long n, int w, long long d) {
        int m = 0;
        long long temp = d;

        while (temp > 0) {
            temp /= 10;
            m++;
        }

        int k = m - w;

        long long p = 1;
        for (int i = 0; i < k; i++) {
            p *= 10;
        }

        long long x = d / p;
        long long y = d % p;

        return power(x, y);
    }

    int sumDecoded(vector<long long>& nums) {
        long long c = 0;

        for (long long x : nums) {
            c = (c + decode(x, x % 10, x / 10)) % MOD;
        }

        return c;
    }
};
~~~

# Submission Review
## Approach
- **Technique:** Iterative modular exponentiation and basic number manipulation.
- **Optimality:** The code does not solve the "Longest Happy String" problem (a greedy problem typically involving a priority queue or character counts). Instead, it implements a custom decoding algorithm that calculates $(x^y) \pmod{MOD}$ based on input digits. It is **not optimal or correct** for the stated problem.

## Complexity
- **Time Complexity:** $O(N \cdot (\log(D) + \log(Y)))$, where $N$ is the number of elements and $D$ is the numeric value. Each `decode` involves $O(\log_{10}(D))$ to extract digits and $O(\log(Y))$ for modular exponentiation.
- **Space Complexity:** $O(1)$, as it uses a constant amount of extra space.

## Efficiency Feedback
- **Bottleneck:** The `power` function is efficient ($O(\log Y)$). However, the manual calculation of `p` in the `decode` function using a loop is less efficient than using `std::pow` or precomputing powers of 10, though negligible for `long long` ranges.
- **Modulo Usage:** The `MOD` constant is defined but only applied in the `power` function and the sum; however, the intermediate `p` calculation could overflow if $k$ is large.

## Code Quality
- **Readability:** Moderate. The code is clean, but the logic is opaque because it does not match the problem title.
- **Structure:** Poor. The logic is tightly coupled; the `decode` function assumes a specific input format ($x/10$ as the base $d$ and $x\%10$ as the width $w$) that is not documented or standard for this problem.
- **Naming:** Poor. Functions like `decode` and variables like `w`, `k`, `p`, `x`, `y` provide no context on their purpose or the expected input format.
- **Improvements:**
    - **Rename:** Use descriptive names like `calculateExponentiation` instead of `decode`.
    - **Logic:** Validate the code against the actual "Longest Happy String" requirements. If this is intended for a different problem, the class/method names should be updated to reflect the actual functionality.
    - **Safety:** Add checks for `MOD` overflow and edge cases where `m < w` (which would make `k` negative).

---

# Question Revision
### Revision Report: Longest Happy String

**Pattern:** Greedy (Priority Queue / Heap)

**Brute Force:**
Attempt to build the string by picking the character with the highest remaining count at every step, but naive approaches fail when they greedily pick the most frequent character too early, leading to an invalid state (e.g., "aaa") that prevents completing the string.

**Optimal Approach:**
Use a Max-Heap to track character counts. At each step, attempt to pick the character with the highest count. If picking it violates the "no three consecutive" rule, pick the character with the second-highest count. If no characters can be picked (or the top two are exhausted), terminate.
*   **Time Complexity:** $O(n \log k)$ where $n$ is the total number of characters and $k$ is the alphabet size (constant $k=3$).
*   **Space Complexity:** $O(k)$ to store the character counts in the heap.

**The 'Aha' Moment:**
When a problem requires maintaining constraints while balancing multiple resources (character counts), always prioritize the most "constrained" resource first, while keeping a "fallback" option ready for when the primary choice hits a limit.

**Summary:**
Prioritize the most abundant character but be prepared to pivot to a second-best option the moment your greedy choice risks violating the local constraint.

---