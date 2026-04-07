---
title: "Longest Increasing Subsequence"
slug: longest-increasing-subsequence
date: "2026-04-06"

---
---

# My Solution
~~~cpp
class Solution {
public:
    void fn(vector<int>& nums, vector<int>& dp, int curr, int& answer){
        if(curr == nums.size()){
            return;
        }
        for(int i = 0; i < curr; i++){
            if(nums[i] < nums[curr]){
                dp[curr] = max(dp[curr], dp[i]+1);
            }
        }

        answer = max(answer, dp[curr]);
        fn(nums, dp, curr+1, answer);
    }

    int lengthOfLIS(vector<int>& nums) {
        vector<int> dp(nums.size(), 1);
        int answer = 1;

        fn(nums, dp, 0, answer);

        // for(auto i : dp){
        //     cout<<i<<" ";
        // }

        return answer;
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Recursive Dynamic Programming (memoization-like state update using a helper function).
*   **Optimality:** Suboptimal. The logic is essentially the $O(N^2)$ DP approach, but implemented via recursion instead of an iterative loop. This incurs unnecessary function call overhead and stack depth risks.

## Complexity
*   **Time Complexity:** $O(N^2)$, where $N$ is the number of elements in `nums`. The nested loop structure inside the recursion covers all pairs.
*   **Space Complexity:** $O(N)$ for the `dp` vector plus $O(N)$ for the recursion stack depth.

## Efficiency Feedback
*   **Bottleneck:** The recursion adds overhead for every index. In competitive programming, recursion for standard DP problems is generally slower and risks a stack overflow on larger constraints (e.g., $N=10^5$).
*   **Optimization:** Convert to an iterative `for` loop. The $O(N^2)$ algorithm is acceptable for $N \le 2500$, but for $N > 2500$, an $O(N \log N)$ approach using `std::lower_bound` (Patience Sorting) is required.

## Code Quality
*   **Readability:** Moderate. The logic is clear, but the recursive structure is unnecessary.
*   **Structure:** Poor. The state management (passing `answer` by reference and manually tracking `curr`) makes the code unnecessarily complex compared to a simple iterative solution.
*   **Naming:** Poor. `fn` is a non-descriptive function name.
*   **Concrete Improvements:** 
    1. Replace the recursive `fn` with a standard nested loop:
       ```cpp
       for (int i = 0; i < n; ++i)
           for (int j = 0; j < i; ++j)
               if (nums[j] < nums[i]) dp[i] = max(dp[i], dp[j] + 1);
       ```
    2. If $N$ is large, implement the $O(N \log N)$ approach using a `tails` vector.
    3. Remove the commented-out debugging code.

---
---


# Question Revision
### Revision Report: Longest Increasing Subsequence

**Pattern:** Dynamic Programming / Binary Search

**Brute Force:** 
Generate all possible subsequences using recursion and verify if each is increasing. This results in $O(2^n)$ time complexity as each element has two choices (include or exclude).

**Optimal Approach:**
*   **DP ($O(n^2)$):** Maintain an array `dp` where `dp[i]` stores the LIS ending at index `i`. For each `i`, iterate through all `j < i` and update `dp[i] = max(dp[i], dp[j] + 1)` if `nums[i] > nums[j]`.
*   **Binary Search ($O(n \log n)$):** Maintain a list `tails` where `tails[i]` is the smallest tail of all increasing subsequences of length `i+1`. For each number, use binary search to find its insertion point in `tails`, effectively extending an existing subsequence or lowering a tail value to enable future growth.

**The 'Aha' Moment:** 
When you realize you only need to track the "smallest possible tail" for a subsequence of a given length to maximize the potential for future elements, the problem shifts from exhaustive search to maintaining a sorted state.

**Summary:** 
Always look for $O(n \log n)$ potential when you need to maintain a set of "best candidates" that can be updated via binary search.

---
