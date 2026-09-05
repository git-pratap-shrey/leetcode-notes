---
title: "Count Number of Maximum Bitwise-OR Subsets"
slug: count-number-of-maximum-bitwise-or-subsets
date: "2026-08-23"
---

# My Solution
~~~java
class Solution {
    int count;
    public int countMaxOrSubsets(int[] nums) {
        int target = 0;
        for(int num:nums){
            target |= num;
        }
        backtrack(0,nums,0,target);
        return count;
    }
    void backtrack(int i,int[] nums,int current,int target){
        if(i==nums.length){
            if(current==target){
                count++;
            }
            return;
        }
        backtrack(i+1,nums,current|nums[i],target);
        backtrack(i+1,nums,current,target);

    }
}
~~~

# Submission Review
## Approach
*   **Technique:** Backtracking (Brute-force subset generation).
*   **Optimality:** Optimal for the given constraint range ($N \le 16$). This approach explores all $2^N$ subsets, which is $2^{16} = 65,536$ operations, well within standard time limits.

## Complexity
*   **Time Complexity:** $O(2^N)$, where $N$ is the length of `nums`. Each element has two choices (include or exclude).
*   **Space Complexity:** $O(N)$ due to the recursion stack depth.

## Efficiency Feedback
*   **Performance:** The runtime is efficient for $N \le 16$.
*   **Optimization:** The solution is already pruned implicitly by the recursive structure. No significant optimizations are required for these constraints. However, one could pass `target` as a class-level variable to avoid passing it through every recursive call, though the performance gain is negligible.

## Code Quality
*   **Readability:** Good. The logic is straightforward and standard for backtracking problems.
*   **Structure:** Good. The separation of the main logic and the helper method is clean.
*   **Naming:** Moderate. `i` is acceptable for an index, but `currentOr` would be more descriptive than `current` to clarify it represents the bitwise OR sum.
*   **Concrete Improvements:**
    *   Initialize `count` explicitly if the class instance is reused across test cases in the same JVM session (though LeetCode creates a new instance per test, it is a good practice).
    *   The `if (current == target)` check is only performed at the leaf node. This is correct, but the logic is clear. No major refactoring is needed.

---

# Question Revision
### Revision Report: Count Number of Maximum Bitwise-OR Subsets

**Pattern:** Recursion with Backtracking / Dynamic Programming

**Brute Force:** 
Generate all $2^n - 1$ non-empty subsets, calculate the bitwise OR for each, find the global maximum, and count how many subsets match that maximum.
*   **Time Complexity:** $O(2^n \cdot n)$
*   **Space Complexity:** $O(n)$ (recursion stack)

**Optimal Approach:**
1.  **Phase 1:** Iterate through the array once to calculate the `target_max` (the bitwise OR of all elements).
2.  **Phase 2:** Use DFS to explore the inclusion/exclusion of each element. If the current running OR equals `target_max`, increment the count. To optimize, prune branches that cannot reach `target_max` if needed, though for small $n$ (usually $\leq 16$), standard backtracking is sufficient.
*   **Time Complexity:** $O(2^n)$
*   **Space Complexity:** $O(n)$

**The 'Aha' Moment:**
When the constraints on $n$ are small (e.g., $n \leq 16$ or $20$) and the problem asks for properties of all possible subsets, it is a clear signal to use backtracking to exhaustively explore the power set.

**Summary:**
Whenever you need to evaluate all subset combinations and $n$ is small, reach for recursion to traverse the state space of "include" vs. "exclude" for each element.

---