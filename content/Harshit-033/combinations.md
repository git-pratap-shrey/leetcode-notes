---
title: "Combinations"
slug: combinations
date: "2026-08-11"
---

# My Solution
~~~cpp
class Solution {
public:
    vector<vector<int>> result;
    vector<int> temp;
    void solve(int n,int k,int ind){
        if(k==0){
            result.push_back(temp);
            return;
        }
        for(int i=ind;i<=n;i++){
            temp.push_back(i);
            solve(n,k-1,i+1);
            temp.pop_back();

        }
    }
    vector<vector<int>> combine(int n, int k) {
        solve(n,k,1);
        return result;

        
    }
};
~~~

# Submission Review
## Approach
*   **Technique**: Backtracking (recursive depth-first search).
*   **Optimality**: Suboptimal. While the search space is correctly explored, it lacks a standard pruning optimization that significantly improves performance.

## Complexity
*   **Time Complexity**: $O\left(k \cdot \binom{n}{k}\right)$. In the worst case, the number of combinations is $\binom{n}{k}$, and each requires $O(k)$ to copy the `temp` vector into `result`.
*   **Space Complexity**: $O(k)$ (excluding the space required for the output), representing the maximum recursion depth and the size of the `temp` vector.

## Efficiency Feedback
*   **Bottleneck**: The current loop `for(int i = ind; i <= n; i++)` explores branches that can never result in a valid combination. 
*   **Optimization**: Pruning can be applied by limiting the upper bound of the loop. If the number of remaining elements (`n - i + 1`) is less than the number of needed elements (`k`), the branch should be terminated. Update the loop to `for(int i = ind; i <= n - k + 1; i++)`.

## Code Quality
*   **Readability**: Good. The code is concise and follows standard backtracking patterns.
*   **Structure**: Moderate. The use of class-level member variables (`result`, `temp`) is common in competitive programming to avoid passing state, though it makes the class non-thread-safe.
*   **Naming**: Moderate. `ind` is clear enough, but `start` or `current` would be more idiomatic.
*   **Concrete Improvements**:
    *   **Pass by Reference**: While the recursive state is minimal, consider passing `result` and `temp` as references if you move `solve` out of the class or into a helper to keep `combine` cleaner.
    *   **Memory Reservation**: If $n$ and $k$ are large, calling `result.reserve(...)` using the binomial coefficient formula can prevent multiple reallocations during runtime.

---

# Question Revision
### Revision Report: Combinations (LeetCode #77)

**Pattern:** Backtracking / State-Space Search

**Brute Force:**
Use nested loops to pick $k$ elements. Since $k$ is variable, this requires recursion or a stack-based approach equivalent to generating all $2^n$ subsets and filtering for size $k$.

**Optimal Approach:**
Use backtracking with a pruning strategy. Maintain a `start` index to ensure combinations are unique (avoiding permutations) and stop recursion if the remaining numbers are fewer than the slots left to fill.
*   **Time Complexity:** $O(k \cdot \binom{n}{k})$
*   **Space Complexity:** $O(k)$ (excluding the output list, for recursion depth).

**The 'Aha' Moment:**
When the problem asks for unique subsets of a fixed size where order doesn't matter, it is a direct signal to use backtracking with a "start" index to prevent duplicate combinations.

**Summary:**
Always pass a `start` index to your recursive function to explore only the remaining elements, effectively preventing redundant permutations and ensuring unique combinations.

---