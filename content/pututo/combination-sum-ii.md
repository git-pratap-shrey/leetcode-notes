---
title: "Combination Sum II"
slug: combination-sum-ii
date: "2026-04-06"
---

# My Solution
~~~cpp
class Solution {
public:
    void solve(vector<int>& candidates, int target, vector<vector<int>>& ans, vector<int>& temp, int idx) {
        if(target == 0) {
            ans.push_back(temp);
            return;
        }
        for(int i = idx; i < candidates.size(); i++) {
            if(i > idx && candidates[i] == candidates[i-1]) continue;
            if(candidates[i] > target) break;
            temp.push_back(candidates[i]);
            solve(candidates, target - candidates[i], ans, temp, i + 1);
            temp.pop_back();
        }
    }
    vector<vector<int>> combinationSum2(vector<int>& candidates, int target) {
        vector<vector<int>> ans;
        vector<int> temp;
        sort(candidates.begin(), candidates.end());
        solve(candidates, target, ans, temp, 0);
        return ans;
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Backtracking with sorting and pruning.
- **Optimality**: Optimal. Sorting allows the algorithm to skip duplicate elements and terminate loops early when the current candidate exceeds the remaining target.

## Complexity
- **Time Complexity**: $O(2^N \cdot N)$, where $N$ is the number of candidates. In the worst case, every subset is explored, and copying a valid combination into the result takes $O(N)$.
- **Space Complexity**: $O(N)$. This accounts for the recursion stack and the `temp` vector used to store the current combination (excluding the space required for the final output).

## Efficiency Feedback
- **Pruning**: The line `if(candidates[i] > target) break;` is highly efficient as it stops unnecessary iterations once the sorted elements become too large to fit the target.
- **Duplicate Handling**: The condition `if(i > idx && candidates[i] == candidates[i-1]) continue;` correctly prevents duplicate combinations without requiring a `std::set`, keeping the runtime lean.

## Code Quality
- **Readability**: Good. The logic is concise and follows standard backtracking patterns.
- **Structure**: Good. The separation of the recursive helper function from the main interface is correct.
- **Naming**: Moderate. `solve` is too generic (e.g., `backtrack` would be better); `ans` and `temp` are common in competitive programming but less descriptive than `results` and `currentCombination`.
- **Concrete Improvements**:
    - Change function name `solve` $\rightarrow$ `backtrack` for better semantic clarity.
    - Change variable names `ans` $\rightarrow$ `results` and `temp` $\rightarrow$ `currentCombination`.

---

# Question Revision
### Combination Sum II

**Pattern:** Backtracking with Sorting

**Brute Force:** Generate all $2^n$ possible subsets, calculate their sums, and store unique combinations in a Set.
- **Time:** $O(2^n \cdot n)$
- **Space:** $O(2^n \cdot n)$

**Optimal Approach:**
1. **Sort** the input array to group duplicates.
2. Use **DFS Backtracking**: at each step, iterate through the remaining candidates.
3. **Prune** the search: if the current element exceeds the remaining target, break the loop.
4. **Skip Duplicates**: if `i > start` and `candidates[i] == candidates[i-1]`, skip the iteration to avoid redundant combinations.
- **Time:** $O(2^n \cdot k)$ (where $k$ is the average length of a combination)
- **Space:** $O(n)$ (recursion stack depth)

**The 'Aha' Moment:** The constraint "no duplicate combinations" combined with "use each number once" signals that sorting is mandatory to skip identical elements at the same recursion level.

**Summary:** Use sorted backtracking and skip adjacent identical elements (`if i > start && nums[i] == nums[i-1]`) to prevent duplicate result sets.

---