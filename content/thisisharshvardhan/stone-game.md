---
title: "Stone Game"
slug: stone-game
date: "2026-06-23"
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
- **Technique**: Constant return.
- **Optimality**: Optimal. Due to the game's constraints (even number of piles, odd total stones), the first player (Alice) can always force a win by choosing all even-indexed or all odd-indexed piles, whichever sum is greater.

## Complexity
- **Time Complexity**: $O(1)$
- **Space Complexity**: $O(1)$

## Efficiency Feedback
- The solution is maximally efficient as it bypasses all game simulation or dynamic programming by leveraging the mathematical certainty of the outcome.

## Code Quality
- **Readability**: Good (extremely simple).
- **Structure**: Good.
- **Naming**: Good (follows the provided boilerplate).
- **Improvements**: None needed for this specific problem.

---

# Question Revision
### Stone Game

**Pattern:** Game Theory / Minimax (Optimal Strategy)

**Brute Force:** 
Use recursion with memoization to explore every possible move for both players, tracking the relative score difference. 
- **Time:** $O(n^2)$
- **Space:** $O(n^2)$

**Optimal Approach:** 
Since Alice moves first and the number of piles is even, she can force the game to take either all even-indexed piles or all odd-indexed piles. By calculating both sums, she simply chooses the larger one, guaranteeing a win.
- **Time:** $O(1)$ (The problem asks if Alice wins; since she can always force a win, we just return `true`).
- **Space:** $O(1)$

**The 'Aha' Moment:** 
The constraint that the number of piles is even and the total stone count is odd allows the first player to control the parity of all subsequent moves.

**Summary:** Alice always wins by choosing the larger sum between all even-indexed and all odd-indexed piles.

---