---
title: "Can Place Flowers"
slug: can-place-flowers
date: "2026-04-14"
---

# My Solution
~~~

~~~

# Submission Review
## Approach
- **Technique**: Greedy. The algorithm iterates through the array and places a flower at the first available spot that satisfies the non-adjacency constraint.
- **Optimality**: Optimal. Planting a flower as early as possible maximizes the remaining space for future plantings.

## Complexity
- **Time Complexity**: $O(N)$, where $N$ is the length of the flowerbed. The array is traversed once.
- **Space Complexity**: $O(1)$. The operation is performed in-place on the input list.

## Efficiency Feedback
- **Runtime**: Efficient. The inclusion of the early exit `if count >= n: return True` prevents unnecessary iterations once the requirement is met.
- **Memory**: Minimal. No additional data structures are allocated.

## Code Quality
- **Readability**: Good. The logic for handling boundary conditions (start and end of array) is concise.
- **Structure**: Good. Simple linear flow.
- **Naming**: Moderate. `prev` and `next` are used as boolean flags (representing "is the adjacent spot empty?"), which is slightly ambiguous as these names often refer to indices or values. `is_prev_empty` and `is_next_empty` would be more explicit.
- **Improvements**:
    - Consider adding a check at the start: `if n == 0: return True` to handle the zero-flower case immediately.

---

# Question Revision
### Can Place Flowers

**Pattern:** Greedy

**Brute Force:** 
Iterate through the array and for every `0` encountered, check the left and right neighbors. If both are `0` (or boundary), plant a flower and decrement the required count.

**Optimal Approach:**
Perform a single linear scan. A flower can be planted at index `i` if:
1. `flowerbed[i] == 0`
2. `i == 0` OR `flowerbed[i-1] == 0` (Left boundary or empty)
3. `i == length-1` OR `flowerbed[i+1] == 0` (Right boundary or empty)

If these conditions are met, set `flowerbed[i] = 1` and decrement $n$. If $n \le 0$, return `true` immediately.

- **Time Complexity:** $O(n)$
- **Space Complexity:** $O(1)$

**The 'Aha' Moment:** 
Since planting a flower only affects its immediate neighbors, making the first available valid spot a "1" never prevents a more optimal placement later.

**Summary:** 
Greedily plant a flower whenever a plot and its immediate neighbors are all empty.

---