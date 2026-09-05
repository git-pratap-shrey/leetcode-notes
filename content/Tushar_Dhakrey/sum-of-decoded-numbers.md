---
title: "Sum of Decoded Numbers"
slug: sum-of-decoded-numbers
date: "2026-08-30"
---

# My Solution
~~~java
class Solution {
    public int countSpecialIntegers(int[] nums) {
        HashSet<Integer> seen = new HashSet<>();
        HashSet<Integer> notspe = new HashSet<>();
        for(int i=0;i<nums.length;i++){
            if(i==0 || nums[i]!=nums[i-1]){
                if(seen.contains(nums[i])){
                    notspe.add(nums[i]);
                }
                seen.add(nums[i]);
            }
        }
        return seen.size()-notspe.size();
    }
}
~~~

# Submission Review
## Approach
*   **Technique:** Frequency counting using `HashSet` to identify duplicates.
*   **Optimal:** No. The approach is logically flawed. It assumes the input is sorted (by checking `nums[i] != nums[i-1]`), but the problem statement (implicitly) and general competitive programming contexts do not guarantee sorted input. Furthermore, the logic for `notspe` only checks if a number was seen *previously*, which fails to count occurrences correctly for unsorted inputs.

## Complexity
*   **Time Complexity:** $O(N)$, where $N$ is the length of `nums`.
*   **Space Complexity:** $O(U)$, where $U$ is the number of unique elements stored in the sets.

## Efficiency Feedback
*   The current logic is insufficient for general cases. If the goal is to count elements that appear exactly once, a `HashMap<Integer, Integer>` (frequency map) or a two-pass approach is required. 
*   Using two `HashSet` objects is memory-inefficient compared to a single frequency map or a sorting-based approach.

## Code Quality
*   **Readability:** Moderate. The code is concise but the logic is opaque and fragile.
*   **Structure:** Poor. The dependency on `i-1` makes the code prone to `ArrayIndexOutOfBoundsException` if not carefully guarded (though it is guarded here by `i==0`) and fundamentally restricts it to sorted inputs.
*   **Naming:** Poor. Variables like `notspe` (not special) are non-descriptive and cryptic.
*   **Concrete Improvements:**
    *   If you need to count elements that appear exactly once:
        ```java
        Map<Integer, Integer> counts = new HashMap<>();
        for (int num : nums) counts.put(num, counts.getOrDefault(num, 0) + 1);
        int count = 0;
        for (int freq : counts.values()) if (freq == 1) count++;
        return count;
        ```
    *   If the input is guaranteed to be sorted, use a simple counter variable instead of `HashSet` to reduce memory overhead to $O(1)$.

---

# Question Revision
### Revision Report: Sum of Decoded Numbers

**Pattern:** Recursion with Memoization / String Traversal

**Brute Force:** 
Generate every possible valid decoding permutation by branching at each digit, then sum the numeric values of the resulting strings.
*   **Time Complexity:** $O(2^n)$ (exponential growth due to branching).
*   **Space Complexity:** $O(n)$ (recursion stack depth).

**Optimal Approach:** 
Use dynamic programming to calculate the count or sum of decodings by building from the end of the string to the beginning (or vice versa). Maintain an array `dp[i]` representing the sum of decoded numbers possible starting from index `i`. At each step, consider single-digit decodings and valid two-digit decodings (10-26).
*   **Time Complexity:** $O(n)$
*   **Space Complexity:** $O(n)$ (can be optimized to $O(1)$ by storing only the last two states).

**The 'Aha' Moment:**
When a problem presents choices that create overlapping subproblems with constraints on how characters can be grouped, it is a structural signal to use DP to aggregate results rather than exploring paths.

**Summary:**
Whenever a problem asks for the sum or count of ways to decode a sequence, treat it as a path-counting problem where the constraints on valid groupings define your DP transitions.

---