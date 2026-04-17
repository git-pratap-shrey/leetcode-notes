---
title: "Permutations"
slug: permutations
date: "2026-03-29"
---

# My Solution
~~~cpp
class Solution {
public:
    void per(vector<int>& nums,int idx,vector<vector<int>>& ans){
        if(idx==nums.size()){
            ans.push_back({nums});
            return;
        }
        for(int i=idx;i<nums.size();i++){
            swap(nums[idx],nums[i]);
            per(nums,idx+1,ans);
            swap(nums[idx],nums[i]);
        }
    }
    vector<vector<int>> permute(vector<int>& nums) {
        vector<vector<int>>ans;
        per(nums,0,ans);
        return ans;
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Backtracking using in-place swapping.
- **Optimality**: Optimal. Generating all permutations of a set of size $N$ inherently requires $O(N \cdot N!)$ time as there are $N!$ permutations, each taking $O(N)$ to store.

## Complexity
- **Time Complexity**: $O(N \cdot N!)$ where $N$ is the size of the input array.
- **Space Complexity**: $O(N)$ for the recursion stack depth. (Excluding the output storage).

## Efficiency Feedback
- **Performance**: The runtime is optimal for the problem requirements.
- **Optimization**: In `ans.push_back({nums})`, the curly braces `{}` are unnecessary and create a temporary initializer list; `ans.push_back(nums)` is more direct.

## Code Quality
- **Readability**: Moderate. The logic is clear, but the function name `per` is overly cryptic.
- **Structure**: Good. The separation between the entry function and the recursive helper is standard.
- **Naming**: Poor. `per` should be renamed to something descriptive like `backtrack` or `generatePermutations`.
- **Improvements**: 
    - Use `const` for parameters that aren't modified within the helper (though `nums` must remain mutable for the swapping logic).
    - Remove redundant braces in `push_back`.

---

# Question Revision
### Permutations

**Pattern:** Backtracking

**Brute Force:** 
Generate all possible sequences of length $n$ from the input elements and filter out those containing duplicates.

**Optimal Approach:** 
Use recursive Depth-First Search (DFS). Maintain a `used` boolean array (or use in-place swapping) to track elements already included in the current path. Once the path length equals the input array length, a valid permutation is found.

- **Time Complexity:** $O(n \cdot n!)$ — There are $n!$ permutations, and copying each to the result list takes $O(n)$.
- **Space Complexity:** $O(n)$ — For the recursion stack and the current path storage.

**The 'Aha' Moment:** 
The requirement to generate "all possible" arrangements of a fixed set of distinct elements indicates a state-space search where every element must be used exactly once per path.

**Summary:** 
Use backtracking to explore all permutations by recursively picking an available element, marking it as used, and unmarking it after the recursive call to explore other branches.

---