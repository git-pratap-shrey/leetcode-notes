---
title: "Subsets II"
slug: subsets-ii
date: "2026-03-28"
---

# My Solution
~~~cpp
class Solution {
public:
    void As(vector<int>& nums,vector<int>& ans,int i,vector<vector<int>>& result){
        if(i==nums.size()){
            result.push_back({ans});
            return;
        }
        ans.push_back(nums[i]);
        As(nums,ans,i+1,result);
        ans.pop_back();
        int idx=i+1;
        while(idx<nums.size() && nums[idx]==nums[idx-1]){
            idx++;
        }
        As(nums,ans,idx,result);
    }
    vector<vector<int>> subsetsWithDup(vector<int>& nums) {
        sort(nums.begin(),nums.end());
        vector<int>ans;
        vector<vector<int>>result;
        As(nums,ans,0,result);
        return result;
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Recursive backtracking with pruning.
- **Optimality**: Optimal. The algorithm explores the state space and uses sorting combined with a skip-logic (`while` loop) to avoid generating duplicate subsets. Given the problem requires returning all subsets, the exponential complexity is unavoidable.

## Complexity
- **Time Complexity**: $O(N \cdot 2^N)$, where $N$ is the number of elements. There are at most $2^N$ subsets, and copying each subset into the result takes $O(N)$.
- **Space Complexity**: $O(N)$ for the recursion stack and the temporary `ans` vector (excluding the output storage).

## Efficiency Feedback
- **Memory/Runtime**: Performance is efficient for the constraints.
- **Observation**: In the line `result.push_back({ans});`, the curly braces `{}` create a temporary initializer list. While compilers likely optimize this, `result.push_back(ans);` is the standard way to push a vector into a vector of vectors.

## Code Quality
- **Readability**: Poor. The function name `As` is non-descriptive, and variable names like `ans` (usually implies a final answer, not a temporary path) are vague.
- **Structure**: Good. The logic clearly separates the "include" and "exclude" branches of the recursion.
- **Naming**: Poor. 
    - `As` $\rightarrow$ `generateSubsets` or `backtrack`.
    - `ans` $\rightarrow$ `currentSubset` or `path`.
    - `i` $\rightarrow$ `index`.
- **Concrete Improvements**:
    - Rename `As` to something descriptive.
    - Remove redundant braces in `push_back`.
    - Pass `nums` by constant reference (`const vector<int>&`) to prevent accidental modification and signify intent.

---

# Question Revision
### Subsets II

**Pattern:** Backtracking / DFS

**Brute Force:** Generate all $2^n$ subsets using recursion and store them in a `Set` of lists to filter out duplicates.

**Optimal Approach:** 
1. **Sort** the input array to group duplicates together.
2. Use a recursive backtracking function to build subsets.
3. At each level of the decision tree, if the current element is the same as the previous element (`nums[i] == nums[i-1]`) and we are not at the start of the current loop (`i > start`), skip it to avoid duplicate branches.

- **Time Complexity:** $O(n \cdot 2^n)$ where $n$ is the number of elements (generating $2^n$ subsets, each taking $O(n)$ to copy).
- **Space Complexity:** $O(n)$ for the recursion stack and the temporary path list.

**The 'Aha' Moment:** Sorting allows us to identify duplicates side-by-side, meaning any identical element at the same recursion level would produce a redundant subset.

**Summary:** Sort the array and skip consecutive identical elements at the same depth to prune duplicate branches.

---