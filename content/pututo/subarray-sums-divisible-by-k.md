---
title: "Subarray Sums Divisible by K"
slug: subarray-sums-divisible-by-k
date: "2026-09-15"
---

# My Solution
~~~cpp
class Solution {
public:
    int countCommas(int n) {
        return max(0,n-999);
    }
};
~~~

# Submission Review
## Approach
- **Technique**: The code implements a basic subtraction/clamping operation.
- **Optimality**: **Incorrect**. The code does not address the "Subarray Sums Divisible by K" problem; it calculates a value based on a constant (999) unrelated to the problem requirements.

## Complexity
- **Time Complexity**: $O(1)$
- **Space Complexity**: $O(1)$

## Efficiency Feedback
- While the runtime is minimal, the code is functionally irrelevant to the problem statement.

## Code Quality
- **Readability**: Poor. The function name `countCommas` has no relation to the problem of subarray sums.
- **Structure**: Poor. It is a stub that does not accept the necessary inputs (the array and $K$).
- **Naming**: Poor. `countCommas` and `n` are misleading given the problem context.
- **Improvements**: The entire logic must be replaced with a prefix-sum and hash map (or frequency array) approach to track remainders modulo $K$.

---

# Question Revision
# Revision Report: Subarray Sums Divisible by K

### Pattern
**Prefix Sum + Hash Map (Modulo Arithmetic)**

### Brute Force
Iterate through all possible subarrays using nested loops, calculate the sum of each, and check if `sum % k == 0`.
- **Complexity:** Time $O(n^2)$, Space $O(1)$.

### Optimal Approach
Maintain a running prefix sum and track the **remainder** of that sum when divided by $k$ using a Hash Map. If the same remainder has been seen before, it means the elements between those two indices sum up to a multiple of $k$.
- **Logic:** 
    1. Initialize a map `{0: 1}` to handle subarrays that are divisible by $k$ starting from index 0.
    2. Calculate `current_sum % k`. 
    3. **Crucial:** Handle negative remainders by normalizing them: `(rem % k + k) % k`.
    4. If the remainder exists in the map, add its frequency to the total count.
    5. Update the map with the current remainder.
- **Complexity:** Time $O(n)$, Space $O(k)$.

### The 'Aha' Moment
Whenever a problem asks for the **number of subarrays** satisfying a **sum-based condition**, think Prefix Sums and Hash Maps.

### Summary
If two prefix sums have the same remainder modulo $k$, the subarray between them is divisible by $k$.

---