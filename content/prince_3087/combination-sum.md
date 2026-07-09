--- title: "Combination Sum" slug: combination-sum date: "2026-06-27" ---  # My Solution ~~~class Solution {
public:
    void fun(vector<int>& candidates , int n , int target , vector<int>&diary , vector<vector<int>>&res , int sum,int idx){
        if(idx == n){
            if(sum == target){
                res.push_back(diary);
            }
            return;
        }
        if(sum + candidates[idx]<=target){
            diary.push_back(candidates[idx]);
            sum = sum+candidates[idx];
            fun(candidates,n,target,diary,res,sum,idx);
            diary.pop_back();
            sum = sum-candidates[idx];
        }
    
        fun(candidates,n,target,diary,res,sum,idx+1);
      
    }
    vector<vector<int>> combinationSum(vector<int>& candidates, int target) {
        int idx = 0;
        int sum =0;
        vector<int>diary;
        int n = candidates.size();
        vector<vector<int>>res;
        fun(candidates,n,target,diary,res,sum,idx);
        return res;
        
    }
}; - cpp~~~  # Submission Review ## Approach
- **Technique**: Backtracking (Recursive DFS).
- **Optimality**: Optimal in terms of algorithmic class. Since the problem requires generating all possible combinations, an exponential time complexity is unavoidable.

## Complexity
- **Time Complexity**: $O(N^{\frac{T}{M}})$, where $N$ is the number of candidates, $T$ is the target value, and $M$ is the minimum value among candidates. The depth of the recursion tree can reach $T/M$.
- **Space Complexity**: $O(\frac{T}{M})$ to account for the recursion stack and the `diary` vector storing the current combination.

## Efficiency Feedback
- **Pruning**: The code performs basic pruning with `if(sum + candidates[idx] <= target)`. However, it does not sort the `candidates` array first. If the array were sorted, the algorithm could stop exploring further candidates as soon as `sum + candidates[idx] > target` is encountered, rather than continuing to check subsequent indices.
- **Parameter Overhead**: Passing `n` and `target` by value is fine, but `sum` is tracked manually. Subtracting/adding to `sum` is efficient, but the base case `if(idx == n)` is only reached after all elements are processed, which is slightly less efficient than returning immediately when `sum == target`.

## Code Quality
- **Readability**: Moderate. The logic is straightforward, but the naming is non-standard.
- **Structure**: Good. Standard backtracking template (Choose $\rightarrow$ Explore $\rightarrow$ Un-choose).
- **Naming**: Poor. 
    - `fun`: Non-descriptive name for a recursive helper function (e.g., `backtrack` or `findCombinations` would be better).
    - `diary`: Unconventional name for a path or current combination buffer (e.g., `currentCombination` or `path`).
- **Improvements**:
    - Sort `candidates` and implement a `break` condition to prune the search space.
    - Change the base case to `if (sum == target)` to return earlier and avoid unnecessary recursive calls once the target is met.  ---  # Question Revision ### Combination Sum

**Pattern:** Backtracking

**Brute Force:** Generate all possible permutations of candidates that could potentially sum to the target and filter those that match exactly.

**Optimal Approach:**
Use a Depth-First Search (DFS) backtracking algorithm to explore the decision tree.
1. Sort the candidates (optional, but allows for early pruning).
2. Recursively subtract the current candidate from the target.
3. To avoid duplicate combinations, pass the current index `i` to the next recursive call, ensuring the algorithm only picks elements from the current position forward.
4. Base cases: If `target == 0`, a valid combination is found; if `target < 0`, terminate that branch.

**Complexity:**
*   **Time:** $O(N^{\frac{T}{M} + 1})$ where $N$ is the number of candidates, $T$ is the target value, and $M$ is the minimum value among candidates.
*   **Space:** $O(\frac{T}{M})$ for the recursion stack depth.

**The 'Aha' Moment:** The requirement to find "all unique combinations" where elements can be reused signals a state-space search using backtracking with a fixed starting index.

**Summary:** Use backtracking with a `start` index to explore candidate combinations while allowing the same element to be picked repeatedly.  ---