---
title: "Combinations"
slug: combinations
date: "2026-04-02"
---

# My Solution
~~~cpp
class Solution {
public:
    void comb(vector<vector<int>>& ans,vector<int>& temp,int idx,int k,int n){
        if(temp.size()==k){
            ans.push_back(temp);
            return;
        }
        for(int i=idx;i<=n;i++){
            temp.push_back(i);
            comb(ans,temp,i+1,k,n);
            temp.pop_back();
        }
    }
    vector<vector<int>> combine(int n, int k) {
        vector<vector<int>>ans;
        vector<int>temp;
        comb(ans,temp,1,k,n);
        return ans;
    }
};
~~~

# Submission Review
## Approach
- **Technique:** Backtracking.
- **Optimality:** Optimal for the given problem, as all combinations must be generated.

## Complexity
- **Time Complexity:** $O(k \cdot \binom{n}{k})$. There are $\binom{n}{k}$ combinations, and each requires $O(k)$ time to be copied into the result vector.
- **Space Complexity:** $O(k)$. This is the space used by the recursion stack and the `temp` vector (excluding the output storage).

## Efficiency Feedback
- **Pruning Opportunity:** The loop `for(int i=idx; i<=n; i++)` continues even when there aren't enough remaining elements in the range $[i, n]$ to fill the remaining $k - \text{temp.size()}$ slots.
- **Optimization:** Change the loop condition to `i <= n - (k - temp.size()) + 1`. This prevents unnecessary recursive calls that will never reach the base case.

## Code Quality
- **Readability:** Good. The logic is straightforward and easy to follow.
- **Structure:** Good. Separation of the entry function and the recursive helper is appropriate.
- **Naming:** Moderate. `comb` and `temp` are acceptable but generic; `backtrack` and `currentCombination` would be more descriptive.
- **Improvements:**
    - Pass `k` and `n` by value (already done) or as constants to avoid accidental modification.
    - Consider using `.reserve()` on the `ans` vector if the number of combinations is known via a formula to reduce reallocations.

---

# Question Revision
### Pattern: Backtracking

**Brute Force**
Generate the entire power set ($2^n$ subsets) and filter for those with exactly length $k$.

**Optimal Approach**
Use recursive backtracking to build combinations incrementally. By passing a `start` index to each recursive call, you ensure that only elements to the right of the current element are considered, naturally preventing duplicate combinations (e.g., ensuring $[1, 2]$ is picked but $[2, 1]$ is not).

*   **Time Complexity:** $O(k \cdot \binom{n}{k})$ — There are $\binom{n}{k}$ combinations, and each takes $O(k)$ to copy into the result list.
*   **Space Complexity:** $O(k)$ — To maintain the recursion stack and the current combination path.

**The 'Aha' Moment**
The phrase "all possible combinations" combined with a fixed size $k$ is a direct signal to use backtracking with a pointer to maintain order.

**Summary**
Explore the search space recursively, incrementing the start index at each step to ensure unique, sorted combinations of length $k$.

---