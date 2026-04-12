---
title: "Subsets"
slug: subsets
date: "2026-04-12"

---
---

# My Solution
~~~cpp
class Solution {
public:
    void solve(int i, vector<int>& nums, vector<int>& subset, vector<vector<int>>& ans) {
        
        if (i == nums.size()) {
            ans.push_back(subset);
            return;
        }

      
        subset.push_back(nums[i]);
        solve(i + 1, nums, subset, ans);

        
        subset.pop_back();

        
        solve(i + 1, nums, subset, ans);
    }

    vector<vector<int>> subsets(vector<int>& nums) {
        vector<vector<int>> ans;
        vector<int> subset;

        solve(0, nums, subset, ans);
        return ans;
    }
};
~~~

# Submission Review
## Approach
- **Technique:** Recursive backtracking (generating the power set by making a binary choice for each element: include or exclude).
- **Optimality:** Optimal. It visits each of the $2^n$ subsets exactly once, which is the theoretical lower bound for this problem.

## Complexity
- **Time Complexity:** $O(n \cdot 2^n)$, where $n$ is the number of elements. We generate $2^n$ subsets, and copying each subset into the results list takes $O(n)$ time.
- **Space Complexity:** $O(n)$ (excluding the output vector), primarily due to the recursion stack depth of $n$ and the temporary `subset` vector.

## Efficiency Feedback
- **Efficiency:** The approach is highly efficient for the given task.
- **Optimization:** In C++, you can improve performance slightly by reserving space in `ans` to avoid multiple reallocations: `ans.reserve(1 << nums.size());`.

## Code Quality
- **Readability:** Good. The logic is straightforward and standard for this classic problem.
- **Structure:** Good. Using a helper function for the recursion is the correct modular approach.
- **Naming:** Good. `i`, `nums`, `subset`, and `ans` are standard, readable conventions for this type of backtracking problem.
- **Improvements:** 
    - Pass `nums` by `const reference` to enforce immutability (`const vector<int>& nums`).
    - The `ans.reserve` suggestion mentioned above is the only meaningful minor performance improvement.

---
---


# Question Revision
### Revision Report: Subsets

**Pattern:** Backtracking / Bit Manipulation

**Brute Force:**
Iterate through all possible combinations by deciding for each element whether to include it or exclude it (binary choice), resulting in $2^n$ subsets.

**Optimal Approach:**
*   **Backtracking:** Use a recursive function to build subsets incrementally, adding the current subset to the result list at each step. 
*   **Complexity:** 
    *   **Time:** $O(n \cdot 2^n)$ (there are $2^n$ subsets, and copying each takes $O(n)$).
    *   **Space:** $O(n)$ (for the recursion stack).

**The 'Aha' Moment:**
When a problem asks for all possible combinations of varying lengths, it is a clear signal that every element presents a binary "take it or leave it" decision.

**Summary:**
To generate a power set, treat each element as a binary toggle and use backtracking to explore every branch of the decision tree.

---
