---
title: "Minimum Absolute Difference Between Two Values"
slug: minimum-absolute-difference-between-two-values
date: "2026-04-07"

---
---

# My Solution
~~~cpp
class Solution {
public:
    int minAbsoluteDifference(vector<int>& nums) {
        int m = INT_MAX;  
        
        for(int i = 0; i < nums.size(); i++){
            if(nums[i] == 1 || nums[i] == 2){
                for(int j = i + 1; j < nums.size(); j++){
                    
                   
                    if((nums[i] == 1 && nums[j] == 2) || 
                       (nums[i] == 2 && nums[j] == 1)){
                        
                        m = min(m, abs(j - i));
                    }
                }
            }
        }
        
       
        return (m == INT_MAX) ? -1 : m;
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Brute force search. The code iterates through every pair $(i, j)$ where one element is 1 and the other is 2 to find the minimum index distance.
*   **Optimal:** No. The problem can be solved in $O(N)$ time with a single pass.

## Complexity
*   **Time Complexity:** $O(N^2)$, where $N$ is the size of the input array. The nested loops result in a quadratic scan.
*   **Space Complexity:** $O(1)$, as it only uses a few integer variables.
*   **Bottleneck:** The nested loop structure leads to redundant checks, causing $O(N^2)$ performance even though the relative positions of 1s and 2s can be tracked linearly.

## Efficiency Feedback
*   **Performance:** The runtime is unnecessarily slow for large inputs ($N > 10^4$).
*   **Optimization:** Use a single pass. Maintain two variables, `last_idx1` and `last_idx2`, initialized to -1. As you iterate through the array, update the variable corresponding to the current element (`1` or `2`) and calculate `abs(current_index - other_index)` whenever the "other" index is not -1. This reduces complexity to $O(N)$.

## Code Quality
*   **Readability:** Good. The logic is straightforward and easy to follow.
*   **Structure:** Moderate. The `if` conditions are deeply nested and redundant.
*   **Naming:** Good. Variable names like `m` are acceptable for short competitive programming snippets, though `min_diff` would be more descriptive.
*   **Concrete Improvements:** 
    *   Avoid the nested `j` loop entirely.
    *   Remove the `if(nums[i] == 1 || nums[i] == 2)` check; simply update indices when `nums[i]` is either 1 or 2.
    *   Consider using `std::abs` and `std::min` consistently (already done).

---
---


# Question Revision
### Revision Report: Minimum Absolute Difference

**Pattern:** Sorting + Linear Scan

**Brute Force:** Compare every possible pair $(i, j)$ in the array to find the minimum difference.
*   **Time:** $O(n^2)$
*   **Space:** $O(1)$

**Optimal Approach:** Sort the array first, then iterate through the list once, comparing each element only with its immediate neighbor.
*   **Time:** $O(n \log n)$ due to sorting.
*   **Space:** $O(1)$ (or $O(n)$ depending on the language's sorting implementation).

**The 'Aha' Moment:** The problem asks for the minimum difference between *any* two values, and since sorting brings the "closest" candidates next to each other, it eliminates the need to check every non-adjacent pair.

**Summary:** Whenever you need to minimize the difference between elements, sort the array first so that the smallest possible gaps are guaranteed to be between adjacent elements.

---
