---
title: "Combination Sum"
slug: combination-sum
date: "2026-04-05"
---

# My Solution
~~~cpp
class Solution {
public:
    void sub(vector<int>& candidates, int target,vector<int>& ans,vector<vector<int>>& result,int idx){
        if(target==0){
           result.push_back(ans);
           return; 
        }
        if(target<0){
            return;
        }
        for(int i=idx;i<candidates.size();i++){
            ans.push_back(candidates[i]);
            sub(candidates,target-candidates[i],ans,result,i);
            ans.pop_back();
        }
    }
    vector<vector<int>> combinationSum(vector<int>& candidates, int target) {
        vector<vector<int>>result;
        vector<int>ans;
        sub(candidates,target,ans,result,0);
        return result;
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Backtracking (Recursive DFS).
- **Optimality**: Optimal for the problem type (generating all combinations), though the implementation lacks pruning.

## Complexity
- **Time Complexity**: $O(N^{\frac{T}{M}})$, where $N$ is the number of candidates, $T$ is the target, and $M$ is the minimum value in `candidates`.
- **Space Complexity**: $O(\frac{T}{M})$ for the recursion stack and the `ans` vector.

## Efficiency Feedback
- **Lack of Pruning**: The code checks `if(target < 0)` at the start of the recursive call. If the `candidates` array were sorted, the loop could be terminated early (`if (candidates[i] > target) break;`), preventing unnecessary recursive calls and reducing the search space.
- **Pass-by-Reference**: Correctly uses references for `candidates`, `ans`, and `result` to avoid expensive copies.

## Code Quality
- **Readability**: Moderate. The logic is clear, but the naming is vague.
- **Structure**: Good. The separation between the entry function and the recursive helper is standard.
- **Naming**: Poor. 
    - `sub`: Non-descriptive name for a backtracking helper.
    - `ans`: Generic; `currentCombination` or `path` would be more descriptive.
- **Improvements**:
    1. **Sort** `candidates` initially to enable early exit in the loop.
    2. **Rename** `sub` to `backtrack` or `findCombinations`.
    3. **Const-correctness**: Mark `candidates` as `const vector<int>&` in the helper function.

---

# Question Revision
### Combination Sum

**Pattern:** Backtracking (DFS)

**Brute Force:** Explore every possible combination of numbers by recursively adding candidates until the sum equals or exceeds the target, regardless of order.

**Optimal Approach:** 
Use a recursive backtracking function that tracks the current remaining target and the current index in the candidates array. To allow the reuse of the same element, the recursive call passes the current index `i` instead of `i + 1`. To avoid duplicate combinations (e.g., `[2, 2, 3]` and `[3, 2, 2]`), only iterate through candidates from the current index forward.

*   **Time Complexity:** $O(N^{\frac{T}{M} + 1})$ where $N$ is the number of candidates, $T$ is the target value, and $M$ is the minimal value among candidates.
*   **Space Complexity:** $O(\frac{T}{M})$ for the recursion stack depth.

**The 'Aha' Moment:** The requirement to find "all unique combinations" where elements can be reused indicates a decision tree where each node can branch into itself or any subsequent element.

**Summary:** Use backtracking with a pointer to the current element to explore all additive combinations without creating permutations.

---