---
title: "Lexicographically Largest String After Pair Transformations"
slug: lexicographically-largest-string-after-pair-transformations
date: "2026-08-29"
---

# My Solution
~~~cpp
class Solution {
public:
    unordered_map<int, int> dp;

    int coinChange(vector<int>& coins, int amount) {
        if (amount == 0) {
            return 0;
        }

        if (amount < 0) {
            return -1;
        }

        if (dp.count(amount)) {
            return dp[amount];
        }


        int min_change = INT_MAX;
        for(int coin : coins){
            int curr_change = coinChange(coins, amount - coin);
            if(curr_change != -1){
                min_change = min(min_change, curr_change + 1);
            }
        }

        dp[amount] = (min_change == INT_MAX) ? -1 : min_change;
        return dp[amount];
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Top-down Dynamic Programming (Memoization).
*   **Optimality:** This is the standard optimal approach for the Coin Change problem. However, using a `std::unordered_map` for memoization is less efficient than using a `std::vector` when the `amount` range is known and contiguous.

## Complexity
*   **Time Complexity:** $O(A \cdot N)$, where $A$ is the `amount` and $N$ is the number of coin denominations.
*   **Space Complexity:** $O(A)$ for the recursion stack and the memoization table.
*   **Bottleneck:** The use of `unordered_map` introduces significant constant-factor overhead due to hashing and potential collisions compared to a simple array/vector.

## Efficiency Feedback
*   **Memory Overhead:** `unordered_map` stores node objects, pointers, and hash values, which is significantly more memory-intensive than a `vector<int>`.
*   **Performance:** For large `amount` values, hash map lookups are slower than $O(1)$ array indexing.
*   **Recommendation:** Since the problem constraints for `amount` are typically positive integers, initialize a `vector<int> memo(amount + 1, -2)` to track states. Use `-2` as "not computed," `-1` as "impossible," and non-negative integers for the actual count.

## Code Quality
*   **Readability:** Good. The logic is clear and follows standard DP patterns.
*   **Structure:** Moderate. While correct, the state management (`dp.count` vs `dp[amount]`) could be cleaner with a vector.
*   **Naming:** Good. `min_change` and `curr_change` are descriptive.
*   **Improvements:**
    *   **Encapsulation:** The `dp` map is a class member, which risks state leakage if `coinChange` is called multiple times on the same `Solution` object. Move it into the method or clear it explicitly.
    *   **Integer Overflow:** The logic `min_change = min(min_change, curr_change + 1)` is safe here because of the `INT_MAX` check, but it is safer to use a large constant or `long long` to prevent potential overflows if the logic were more complex.
    *   **Input Validation:** The current structure does not handle the `coins` vector being empty or containing zero/negative values, which could lead to infinite recursion or incorrect results.

---

# Question Revision
### Problem: Lexicographically Largest String After Pair Transformations

**Pattern:** Greedy + Monotonic Stack (or Greedy String Construction)

**Brute Force:** 
Generate all possible transformation permutations by applying the pair-swapping rules recursively. Evaluate the lexicographical value of each string to find the maximum. 
**Complexity:** $O(n!)$ or exponential, depending on the constraints of the allowable swaps.

**Optimal Approach:**
Maintain a monotonic stack to build the result string. Iterate through the input; if the current character is greater than the top of the stack and a swap is still permitted (or satisfies the specific transformation condition), pop from the stack to ensure the resulting string maintains the largest possible lexicographical prefix.
**Time Complexity:** $O(n)$
**Space Complexity:** $O(n)$

**The 'Aha' Moment:**
When the goal is to make a string lexicographically "largest," the problem is inherently local—you must prioritize placing the largest possible characters at the most significant indices (leftmost), which screams for a greedy construction managed by a monotonic stack.

**Summary:** 
To maximize lexicographical order, use a monotonic stack to greedily keep the largest possible characters as far to the left as transformation rules allow.

---