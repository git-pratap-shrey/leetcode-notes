---
title: "Stone Game"
slug: stone-game
date: "2026-02-25"

---
---

# My Solution
~~~cpp
class Solution {
public:
    bool stoneGame(vector<int>& piles) {
        return true;
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Mathematical observation/Game Theory.
*   **Optimality:** Optimal. The problem is a variant of the minimax game on an array where the total number of piles is even and the sum is odd. Since the first player can always choose to take all even-indexed piles or all odd-indexed piles, and one of those sums must be strictly greater than the other, the first player has a guaranteed winning strategy.

## Complexity
*   **Time Complexity:** $O(1)$.
*   **Space Complexity:** $O(1)$.

## Efficiency Feedback
*   The solution is maximally efficient. It bypasses the $O(n^2)$ Dynamic Programming approach typically used for general minimax problems by leveraging the specific constraints of this problem (even length, odd sum).

## Code Quality
*   **Readability:** Good. The code is self-documenting for those familiar with the problem's mathematical property.
*   **Structure:** Good. The solution is encapsulated correctly within the class structure.
*   **Naming:** Good. `stoneGame` matches the problem signature.
*   **Improvements:** While the code is correct for the specific constraints of the LeetCode "Stone Game" problem, it is brittle. Adding a comment explaining *why* it is always `true` (e.g., "First player can always win by choosing the larger sum of odd/even indexed piles") would improve maintainability for developers unfamiliar with this specific competitive programming "trick."

---
---


# Question Revision
### Revision Report: Stone Game

**Pattern:** Minimax / Dynamic Programming (Game Theory)

**Brute Force:**
Use recursion to explore all possible game states by picking either the leftmost or rightmost pile. At each turn, subtract the current player's gain from the next player's optimal result.
*   **Time:** $O(2^n)$
*   **Space:** $O(n)$ (stack depth)

**Optimal Approach:**
Since the total number of stones is even and the sum is constant, the first player (Alex) can always ensure they choose either all odd-indexed piles or all even-indexed piles. By comparing the sums of these two sets, Alex simply picks the larger one.
*   **Time:** $O(1)$ (if the sum is known) or $O(n)$ to calculate the array sum.
*   **Space:** $O(1)$

**The 'Aha' Moment:**
The constraint that the total number of stones is even, combined with the ability to choose from either end, reveals that the first player can force a win by controlling the parity of the piles chosen.

**Summary:**
In zero-sum games where you control the ends of an array, check if you can force a parity-based advantage to win by default.

---
