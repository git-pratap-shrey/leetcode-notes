---
title: "Count Commas in Range"
slug: count-commas-in-range
date: "2026-09-08"
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
- **Technique**: Mathematical formula (constant time calculation).
- **Optimality**: Optimal. The solution uses a direct arithmetic operation to derive the count.

## Complexity
- **Time Complexity**: $O(1)$
- **Space Complexity**: $O(1)$

## Efficiency Feedback
- The runtime and memory usage are minimal as there are no loops, data structures, or recursive calls.

## Code Quality
- **Readability**: Good. The logic is a single, clear line of code.
- **Structure**: Good. Standard class-based structure for competitive programming.
- **Naming**: Good. Method name `countCommas` accurately describes the purpose.
- **Improvements**: None. The solution is as concise as possible.

---

# Question Revision
# Revision Report: Count Commas in Range

- **Pattern**: Prefix Sum / Precomputation.
- **Brute Force**: Iterate through every character of every string in the given range $[L, R]$ and increment a counter whenever a comma is encountered.
- **Optimal Approach**: 
    - Create a `prefixSum` array where `prefixSum[i]` stores the total number of commas from the start of the collection up to index $i$.
    - For any query range $[L, R]$, the total commas are calculated as: $\text{Total} = \text{prefixSum}[R] - \text{prefixSum}[L-1]$.
    - **Time Complexity**: $O(N)$ for precomputation, $O(1)$ per query.
    - **Space Complexity**: $O(N)$ to store the prefix sum array.
- **The 'Aha' Moment**: When a problem asks for the sum or count of a property over multiple different ranges, it is a signal to use Prefix Sums to avoid redundant iteration.
- **Summary**: Use a prefix sum array to transform range counting queries from linear time to constant time.

---