---
title: "Subsets"
slug: subsets
date: "2026-04-09"

---
---

# My Solution
~~~cpp
class Solution {
public:
    vector<vector<int>> subsets(vector<int>& nums) {

        vector<vector<int>> ans;
        int len=nums.size();

        int sublen=1<<len;

        for(int i=0;i<sublen;i++){
            int temp=i;
            vector<int> sub;
            for(int j=0;j<len;j++){
                if(temp&1) sub.push_back(nums[j]);
                
                if(temp==0) break;
                temp=temp>>1;
                
            }

            ans.push_back(sub);
        }

        return ans;
        
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Bit manipulation (iterative generation of the power set).
*   **Optimality:** This is the standard, optimal approach for generating all subsets. Time complexity $O(n \cdot 2^n)$ is necessary because there are $2^n$ subsets and each requires proportional work to construct.

## Complexity
*   **Time Complexity:** $O(n \cdot 2^n)$, where $n$ is the size of `nums`. Each of the $2^n$ iterations performs up to $n$ operations.
*   **Space Complexity:** $O(n \cdot 2^n)$ to store all subsets.

## Efficiency Feedback
*   **Bitwise Optimization:** The check `if(temp==0) break;` is a clever micro-optimization that short-circuits inner loops for early bits, though it doesn't change the overall asymptotic complexity.
*   **Vector Allocation:** `sub.push_back()` is efficient enough, but `sub.reserve(n)` could theoretically reduce reallocations, though it may be overkill given the small expected size of subsets.

## Code Quality
*   **Readability:** Good. The logic is clear and standard.
*   **Structure:** Good. The loop bounds and bitwise logic are correctly implemented.
*   **Naming:** Moderate. `sublen` and `temp` are acceptable, though `mask` is a more standard term than `temp` in this context.
*   **Improvements:** 
    *   **Style:** Consider `1 << nums.size()` instead of `1 << len` to reduce local variables.
    *   **Constraint Safety:** While not an issue here, using `1LL << len` is safer if `nums.size()` could exceed 30 (though not applicable for typical LeetCode "Subsets" constraints).
    *   **Logic:** The `if(temp==0) break;` is technically correct, but note that it works because `sub` is naturally empty when `i=0` (the empty set). However, it stops checking bits for numbers where higher-order bits might still be set if the bitwise shift were handled differently. As written, it is safe, but be careful with such manual optimizations.

---
---


# Question Revision
### Revision Report: Subsets

**Pattern:** Backtracking / Bit Manipulation

**Brute Force:**
Iterate through all possible combinations by deciding for each element whether to include it or exclude it in the current subset. Generate all $2^n$ subsets and store them.

**Optimal Approach:**
*   **Backtracking:** Use a recursive function to build subsets incrementally. At each step, add the current path to the result and iterate through remaining elements to branch out.
*   **Cascading:** Start with `[[]]`. For each number in the input, iterate through existing subsets and create a new subset by adding the number to each.
*   **Time Complexity:** $O(n \cdot 2^n)$ (there are $2^n$ subsets, and each takes $O(n)$ to construct/copy).
*   **Space Complexity:** $O(n)$ (recursion stack depth or path storage, excluding the result set).

**The 'Aha' Moment:**
When a problem asks to generate "all possible combinations" where order doesn't matter and every element is distinct, it is a classic Power Set problem signaling a Backtracking or Cascading approach.

**Summary:** 
To generate a power set, treat each element as a binary choice—either include it in the current path or move on to the next—to explore the full state space.

---
