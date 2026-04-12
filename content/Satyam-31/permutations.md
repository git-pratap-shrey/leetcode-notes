---
title: "Permutations"
slug: permutations
date: "2026-04-12"

---
---

# My Solution
~~~cpp
class Solution {
public:
    void solve(vector<int>& nums, vector<int>& temp, vector<vector<int>>& ans, vector<bool>& used) {
       
        if (temp.size() == nums.size()) {
            ans.push_back(temp);
            return;
        }

        for (int i = 0; i < nums.size(); i++) {
            if (used[i]) continue;

            used[i] = true;
            temp.push_back(nums[i]);

           
            solve(nums, temp, ans, used);

            
            temp.pop_back();
            used[i] = false;
        }
    }

    vector<vector<int>> permute(vector<int>& nums) {
        vector<vector<int>> ans;
        vector<int> temp;
        vector<bool> used(nums.size(), false);

        solve(nums, temp, ans, used);
        return ans;
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Backtracking (recursive depth-first search) to explore all permutations.
*   **Optimality:** Optimal for generating all permutations. The complexity is inherently tied to the number of permutations ($O(n!)$), which is the lower bound for this problem.

## Complexity
*   **Time Complexity:** $O(n \cdot n!)$, where $n$ is the length of `nums`. There are $n!$ permutations, and copying each permutation into the `ans` vector takes $O(n)$ time.
*   **Space Complexity:** $O(n)$. The recursion stack depth is $O(n)$, and the auxiliary space for `used` and `temp` is $O(n)$. Note: The output vector `ans` occupies $O(n \cdot n!)$ space, which is expected.

## Efficiency Feedback
*   **Performance:** The code is efficient for generating all permutations. 
*   **Optimization:** The memory footprint can be slightly reduced by using `std::swap` to permute the array in place, avoiding the `used` boolean array and the auxiliary `temp` vector. This would reduce the space complexity of the recursion state to $O(n)$ while modifying the original array (or a copy of it).

## Code Quality
*   **Readability:** Good. The logic is standard and easy to follow.
*   **Structure:** Good. Separation of the helper function `solve` from the main interface `permute` is appropriate.
*   **Naming:** Good. `ans`, `temp`, and `used` are standard and self-explanatory in the context of backtracking.
*   **Concrete Improvements:**
    *   **Reserve Memory:** You can call `ans.reserve(factorial(nums.size()))` inside `permute` to avoid multiple reallocations of the result vector.
    *   **Parameter Passing:** Pass `nums` by reference to the helper (already done). Consider passing `const vector<int>& nums` to clearly indicate that the input array should not be modified.
    *   **Functional Alternative:** For production code, `std::next_permutation` is often preferred for simplicity and performance, though manual backtracking is excellent for learning.

---
---


# Question Revision
### Revision Report: Permutations (LeetCode 46)

**Pattern:** Backtracking

**Brute Force:**
Use nested loops for each position in the permutation, maintaining a global set to track used numbers and filtering out duplicates, resulting in $O(n \cdot n!)$ time complexity.

**Optimal Approach:**
Use **Backtracking with Swapping**. Swap the element at the current index `i` with every subsequent element to generate permutations in place, then backtrack by swapping back.
*   **Time Complexity:** $O(n \cdot n!)$ (Each of the $n!$ permutations takes $O(n)$ to copy/build).
*   **Space Complexity:** $O(n)$ (Recursion stack depth).

**The 'Aha' Moment:**
When the problem asks for all possible orderings of a set where order matters and every element must be included exactly once, think of it as a state-space tree where each level represents a decision for a specific position.

**Summary:**
Whenever you need to generate all exhaustive orderings of a fixed set, use backtracking to prune the state space by swapping elements into their required positions.

---
