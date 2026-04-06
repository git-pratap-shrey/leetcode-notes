---
title: "House Robber"
slug: house-robber
date: "2026-03-30"

---
---

# My Solution
~~~cpp
class Solution {
public:
    int rob(vector<int>& nums) {
        // vector<int> dp(nums.size()) = {0,0};

        int prev1 = 0;
        int prev2 = 0;
        int current;

        for(int i = 0; i < nums.size(); i++){
            current = max(prev2 + nums[i], prev1);
            prev2 = prev1;
            prev1 = current;
        }

        return current;
    }
};
~~~

# Submission Review
## Approach
* **Technique:** Iterative Dynamic Programming with space optimization.
* **Optimality:** Optimal. It correctly reduces the standard $O(N)$ space DP table to $O(1)$ by only tracking the last two states.

## Complexity
* **Time Complexity:** $O(N)$, where $N$ is the number of houses, as it iterates through the vector once.
* **Space Complexity:** $O(1)$, as it uses a constant amount of extra space.

## Efficiency Feedback
* The logic is highly efficient.
* **Edge Case:** The code fails when `nums` is empty (`nums.size() == 0`). Accessing `current` when the loop does not execute results in undefined behavior (uninitialized variable). 
* **Fix:** Initialize `current` to `0` or add a guard clause `if (nums.empty()) return 0;`.

## Code Quality
* **Readability:** Good. The logic is standard and easy to follow.
* **Structure:** Moderate. The commented-out line `vector<int> dp(nums.size()) = {0,0};` should be removed as it is syntactically incorrect and serves no purpose.
* **Naming:** Good. `prev1` and `prev2` clearly represent the previous states in the recurrence relation.

### Concrete Improvements
1. **Handle Empty Input:** Add `if (nums.empty()) return 0;` at the beginning.
2. **Cleanup:** Remove the commented-out code.
3. **Initialization:** Explicitly initialize `current = 0` to ensure safe returns for empty inputs.

```cpp
class Solution {
public:
    int rob(vector<int>& nums) {
        if (nums.empty()) return 0;

        int prev1 = 0; // Represents dp[i-1]
        int prev2 = 0; // Represents dp[i-2]

        for(int num : nums){
            int current = max(prev2 + num, prev1);
            prev2 = prev1;
            prev1 = current;
        }

        return prev1;
    }
};
```

---
---


# Question Revision
### Revision Report: House Robber

**Pattern:** Dynamic Programming (1D)

**Brute Force:** Use recursion to explore all possible combinations of houses by deciding at each house whether to rob it (and skip the next) or skip it (and move to the next).
*   **Complexity:** $O(2^n)$ time, $O(n)$ space (recursion stack).

**Optimal Approach:** Use an iterative DP array (or two variables) to store the maximum loot possible up to house $i$, defined as `dp[i] = max(dp[i-1], dp[i-2] + current_house_value)`.
*   **Time Complexity:** $O(n)$ 
*   **Space Complexity:** $O(1)$ (by tracking only the last two results).

**The 'Aha' Moment:** The constraint of "not robbing adjacent houses" creates overlapping subproblems where the decision at house $i$ depends strictly on the optimal outcomes of houses $i-1$ and $i-2$.

**Summary:** Whenever you face a decision-making sequence with local constraints, define your state as the "optimal value up to this index" and transition by choosing between taking or skipping the current item.

---
