---
title: "Transform Array Using Pair Operations"
slug: transform-array-using-pair-operations
date: "2026-09-26"
---

# My Solution
~~~cpp
class Solution {
public:
    bool canTransform(vector<int>& source, vector<int>& target) {
        long long x=0;
        long long y=0;
        for(int i:source){
            x+=i;
        }
        for(int j:target){
            y+=j;
        }
        if(x==y) return true;
        return false;
    
        
    }
};
~~~

# Submission Review
## Approach
- **Technique:** Summation comparison. The code checks if the sum of elements in the `source` array equals the sum of elements in the `target` array.
- **Optimality:** **Incorrect.** Comparing sums is a necessary condition for transformations involving pair operations (like adding/subtracting the same value from two indices), but it is not a sufficient condition. The code ignores index constraints and the specific rules of "pair operations" typically associated with this problem type.

## Complexity
- **Time Complexity:** $O(N)$, where $N$ is the length of the arrays.
- **Space Complexity:** $O(1)$.

## Efficiency Feedback
- While the runtime is minimal, the logic is fundamentally flawed. A correct solution would likely require tracking prefix sums or parity, depending on the exact operation rules.

## Code Quality
- **Readability:** Good. The code is simple and easy to follow.
- **Structure:** Good. Standard class structure for competitive programming.
- **Naming:** Poor. Variable names `x` and `y` are non-descriptive; `sourceSum` and `targetSum` would be appropriate.
- **Improvements:** 
    - The `if(x==y) return true; return false;` block can be simplified to `return x == y;`.
    - Logic must be entirely rewritten to account for the actual problem constraints beyond simple summation.

---

# Question Revision
# Revision Report: Transform Array Using Pair Operations

- **Pattern**: Greedy / Two Pointers
- **Brute Force**: Try all possible pairs of indices $(i, j)$ for each operation to see if the array can be transformed into the target. This leads to an exponential search space ($O(n!)$ or $O(2^n)$) and is computationally infeasible.
- **Optimal Approach**: 
    - **Logic**: Since we can pick *any* two indices $i$ and $j$ to perform the operation, the actual positions of the numbers do not matter—only their values do. Sort both the current array and the target array. Use two pointers to compare the sorted arrays element by element. If any element at index $k$ in the sorted current array differs from the element at index $k$ in the sorted target array, the transformation is impossible.
    - **Time Complexity**: $O(n \log n)$ due to sorting.
    - **Space Complexity**: $O(1)$ or $O(n)$ depending on the sorting implementation.
- **The 'Aha' Moment**: The phrase "pick any two indices $i$ and $j$" implies that the relative order is irrelevant, suggesting that sorting is the key to simplifying the comparison.
- **Summary**: When operations allow picking any two indices to modify values, sort both arrays and compare them linearly.

---