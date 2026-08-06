---
title: "Stone Game"
slug: stone-game
date: "2026-08-02"
---

# My Solution
~~~

~~~

# Submission Review
No code was provided for analysis. Please provide the implementation you would like me to review.

---

# Question Revision
### Stone Game

**Pattern:** Game Theory / Greedy (Mathematical)

**Brute Force:** 
Recursive backtracking exploring all possible combinations of picking from the left or right end, calculating the maximum score for each player. Time complexity: $O(2^n)$.

**Optimal Approach:** 
Since there are an even number of piles and Alice moves first, she can force the game to take either all even-indexed piles or all odd-indexed piles. By calculating the sum of stones at even positions vs. odd positions, Alice simply picks the larger sum.
- **Time Complexity:** $O(n)$
- **Space Complexity:** $O(1)$

**The 'Aha' Moment:** 
The constraint of an "even number of piles" allows the first player to control the parity of all subsequent moves.

**Summary:** 
Alice always wins by choosing the maximum of the sum of even-indexed or odd-indexed piles.

---