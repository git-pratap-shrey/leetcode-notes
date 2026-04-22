---
title: "Combination Sum II"
slug: combination-sum-ii
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
        for(int i=ind;i<cand.size();i++){
            if(i>ind && cand[i]==cand[i-1]) continue;

            if(cand[i]>target) break;

            current.push_back(cand[i]);
            adder(cand,target-cand[i],i+1);
            current.pop_back();
        }

    }
    
    vector<vector<int>> combinationSum2(vector<int>& cand, int target) {
        sort(cand.begin(), cand.end());
        adder(cand,target,0);
        return ans;
        

    }
};
~~~

# Submission Review
## Approach
- **Technique**: Backtracking with pruning.
- **Optimality**: Optimal. The solution uses sorting to handle duplicates efficiently (`cand[i] == cand[i-1]`) and terminates branches early when the current element exceeds the remaining target (`cand[i] > target`).

## Complexity
- **Time Complexity**: $O(2^N \cdot N)$, where $N$ is the number of candidates. In the worst case, every subset could be explored, and copying a valid combination into the result list takes $O(N)$.
- **Space Complexity**: $O(N)$. The recursion depth is at most $N$, and the `current` vector stores at most $N$ elements.

## Efficiency Feedback
- **Pruning**: The `break` statement is highly effective; because the input is sorted, once `cand[i] > target`, no subsequent elements can possibly satisfy the condition.
- **Memory**: The use of a global/member vector `current` avoids repeated allocations during recursive calls.

## Code Quality
- **Readability**: Moderate. The logic is clear, but the naming is vague.
- **Structure**: Good. The separation of the recursive helper and the main setup is standard.
- **Naming**: Poor. `adder` is a non-descriptive name for a backtracking function; `cand` is an unnecessary abbreviation.
- **Improvements**:
    - Rename `adder` to `backtrack` or `findCombinations`.
    - Pass `ans` and `current` by reference to the helper function instead of using class member variables to make the class stateless and thread-safe.
    - Use `const vector<int>&` for the candidates list in the helper function to avoid implicit copies (though not happening here, it is best practice).

---

# Question Revision
### Combination Sum II

**Pattern:** Backtracking with Sorting

**Brute Force:**
Generate every possible subset (power set) of the input array, calculate their sums, and use a Set to filter out duplicate combinations. 
- **Complexity:** $O(2^n \cdot n)$

**Optimal Approach:**
1. **Sort** the input array to group duplicates together.
2. Use **Recursive Backtracking** to explore combinations.
3. **Prune Duplicates:** Inside the loop, skip the current element if it is the same as the previous element (`i > start && candidates[i] == candidates[i-1]`).
4. **Terminate** the branch early if the current element exceeds the remaining target.

- **Time Complexity:** $O(2^n \cdot k)$ where $n$ is the number of candidates and $k$ is the average length of a combination.
- **Space Complexity:** $O(k)$ for the recursion stack and path storage.

**The 'Aha' Moment:** 
The requirement for "unique combinations" combined with a list containing duplicates signals that sorting is necessary to skip identical elements at the same recursive depth.

**Summary:** 
Sort the array and skip adjacent duplicates at the same level of recursion to prevent redundant combinations.

---