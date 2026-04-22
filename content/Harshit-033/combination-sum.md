---
title: "Combination Sum"
slug: combination-sum
date: "2026-04-22"
---

# My Solution
~~~cpp
class Solution {
public:
    vector<vector<int>> ans;
    vector<int> current;
    void adder(vector<int>& cand, int target,int ind){
        if(target==0){
            ans.push_back(current);
            return;
        }
        if(target<0 || ind>=cand.size()) return;
        current.push_back(cand[ind]);
        adder(cand,target-cand[ind],ind);
        current.pop_back();
        adder(cand,target,ind+1);

    }
    vector<vector<int>> combinationSum(vector<int>& cand, int target) {
        adder(cand,target,0);
        return ans;
        

    }
};
~~~

# Submission Review
## Approach
- **Technique:** Backtracking (Recursive Depth-First Search).
- **Optimality:** Optimal. Since the problem requires finding all unique combinations, an exhaustive search of the state space is necessary.

## Complexity
- **Time Complexity:** $O(N^{\frac{T}{M}})$, where $N$ is the number of candidates, $T$ is the target value, and $M$ is the minimum value among candidates. In the worst case, the depth of the recursion tree is $T/M$.
- **Space Complexity:** $O(T/M)$ for the recursion stack and the `current` vector. (Excluding the space required for the final `ans` list).

## Efficiency Feedback
- **Pruning:** The code checks `if(target < 0)`, which prevents further recursion. However, if the `cand` vector were sorted initially, the code could stop iterating through the remaining candidates entirely once `cand[ind] > target`, reducing unnecessary recursive calls.
- **Memory:** Using member variables for `ans` and `current` avoids passing them by reference in every call, which is slightly more efficient.

## Code Quality
- **Readability:** Moderate. The logic is clear, but the naming is suboptimal.
- **Structure:** Good. The separation of the recursive helper and the main interface is standard.
- **Naming:** Poor. 
    - `adder` is an ambiguous name for a backtracking function; `backtrack` or `findCombinations` would be more descriptive.
    - `cand` is a shorthand for `candidates`.
- **Improvements:** 
    - Pass `ans` and `current` as references to the helper function instead of using class member variables to make the class stateless and thread-safe.
    - Sort the input `cand` to enable earlier pruning.

---

# Question Revision
### Combination Sum

**Pattern:** Backtracking

**Brute Force:** Generate every possible permutation of candidates that sums to the target, then use a set to filter out duplicate combinations.

**Optimal Approach:** Use Recursive DFS to explore the state space. To avoid duplicate combinations and allow element reuse, pass the current index `i` into the recursive call; this ensures the algorithm only picks elements from index `i` onwards. Prune the search tree by terminating a branch as soon as the current sum exceeds the target.

*   **Time Complexity:** $O(N^{\frac{T}{M} + 1})$ where $N$ is the number of candidates, $T$ is the target, and $M$ is the minimum value among candidates.
*   **Space Complexity:** $O(\frac{T}{M})$ to account for the recursion stack depth.

**The 'Aha' Moment:** The requirement to find "all unique combinations" where "numbers may be used multiple times" indicates a decision tree where you can stay at the current index or move forward.

**Summary:** Use backtracking with a starting index to allow element reuse while preventing duplicate sets.

---