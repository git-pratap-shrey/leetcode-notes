---
title: "Combination Sum III"
slug: combination-sum-iii
date: "2026-04-10"
---

# My Solution
~~~cpp
class Solution {
public:
    void sum(int k,int n,vector<int>& temp,vector<vector<int>>& ans,int idx){
        if(temp.size()==k && n==0){
            ans.push_back(temp);
            return;
        }
        if(n<0){
            return;
        }
        for(int i=idx;i<=9;i++){

            temp.push_back(i);
            sum(k,n-i,temp,ans,i+1);
            temp.pop_back();
        }
    }
    vector<vector<int>> combinationSum3(int k, int n) {
        vector<vector<int>> ans;
        vector<int>temp;
        sum(k,n,temp,ans,1);
        return ans;
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Backtracking.
- **Optimality**: Optimal. Given the constraints (numbers 1-9), the search space is extremely small ($\binom{9}{k}$), making exhaustive search the most straightforward and efficient method.

## Complexity
- **Time Complexity**: $O(\binom{9}{k} \cdot k)$. There are at most $\binom{9}{k}$ combinations, and copying a valid combination into the result list takes $O(k)$.
- **Space Complexity**: $O(k)$. The recursion depth and the `temp` vector both scale linearly with $k$.

## Efficiency Feedback
- **Pruning**: The code currently prunes when `n < 0`. However, it lacks a check for when `temp.size() == k` but `n != 0`. In such cases, the loop still executes and makes unnecessary recursive calls before hitting the base case. 
- **Optimization**: Adding `if (temp.size() > k) return;` or checking the size before entering the loop would slightly reduce the number of function calls.

## Code Quality
- **Readability**: Moderate. The logic is clear, but the naming is too generic.
- **Structure**: Good. Follows the standard backtracking template (push $\rightarrow$ recurse $\rightarrow$ pop).
- **Naming**: Poor. 
    - `sum`: Using `sum` as a function name for a backtracking process is misleading, as it suggests a calculation rather than a search. A name like `backtrack` or `findCombinations` would be appropriate.
    - `temp`: While common, `currentCombination` is more descriptive.
- **Improvements**:
    - Change function name `sum` to `backtrack`.
    - Add a base case to stop recursion immediately when `temp.size() == k` regardless of whether `n == 0` to avoid unnecessary loop iterations.

---

# Question Revision
### Combination Sum III

**Pattern:** Backtracking

**Brute Force:** Generate all possible permutations of $k$ digits from the set $\{1, \dots, 9\}$ and filter those whose sum equals $n$.

**Optimal Approach:** 
Use backtracking to explore combinations of length $k$. Start from a `start` digit to avoid duplicate combinations and prune the search tree immediately if the current sum exceeds $n$ or the combination length exceeds $k$.

*   **Time Complexity:** $O(\binom{9}{k})$ — In the worst case, we explore all combinations of $k$ elements from a set of 9.
*   **Space Complexity:** $O(k)$ — Maximum depth of the recursion stack.

**The 'Aha' Moment:** The requirement to find *all* unique combinations from a small, fixed set of numbers (1-9) with a specific count ($k$) is a classic trigger for backtracking.

**Summary:** Use backtracking with a `start` index to find unique $k$-length subsets of $\{1, \dots, 9\}$ that sum to $n$.

---