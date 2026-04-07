---
title: "3Sum"
slug: 3sum
date: "2026-04-06"

---
---

# My Solution
~~~cpp
class Solution {
public:
    vector<vector<int>> threeSum(vector<int>& nums) {
        int len=nums.size();
    
        int i;
        int j;
        int k;
        sort(nums.begin(), nums.end());
        vector<vector<int>> ans;
        for(i=0;i<len-2;i++){
            if(i>0 && nums[i]==nums[i-1]){
                continue;
            }
            j=i+1;
            k=len-1;
            while(j<k){
                if((nums[i]+nums[j]+nums[k])==0){
                    ans.push_back({nums[i],nums[j],nums[k]});
                    j++;
                    k--;
                    while(j<k && nums[j]==nums[j-1]) j++;
                    while(j<k && nums[k]==nums[k+1] ) k--;
                    
                    

                }

                else if((nums[i]+nums[j]+nums[k])>0){
                    k--;
                }
                else{
                    j++;
                }

            }
        }
        return ans;
        
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Sorting combined with the Two-Pointer technique.
*   **Optimality:** Optimal. The $O(N^2)$ approach is the standard, efficient way to solve 3Sum, as reducing it to $O(N \log N)$ or lower is generally not possible without extra constraints.

## Complexity
*   **Time Complexity:** $O(N^2)$, where $N$ is the length of the input array. The sorting takes $O(N \log N)$, and the nested loop structure (outer loop + two-pointer scan) takes $O(N^2)$.
*   **Space Complexity:** $O(1)$ or $O(N)$ depending on the implementation of `sort()` (often $O(\log N)$ stack space), excluding the space required for the output vector.

## Efficiency Feedback
*   **Runtime:** High efficiency; the pruning logic (`nums[i]==nums[i-1]` and the inner `while` loops for duplicates) effectively avoids redundant calculations and duplicate triplets.
*   **Memory:** Highly efficient. No extra data structures (like HashMaps) are used, keeping overhead to a minimum.

## Code Quality
*   **Readability:** Good. The logic is clear and standard for this algorithm.
*   **Structure:** Good. The use of `continue` for the outer loop and `while` loops for the inner pointers handles edge cases and duplicates cleanly.
*   **Naming:** Moderate. `i`, `j`, `k` are acceptable for this specific algorithm, but `n` or `size` would be more conventional than `len`.
*   **Concrete Improvements:**
    *   **Loop Initialization:** You declared `i`, `j`, and `k` at the top of the function. Declare them within the loop scopes (e.g., `for (int i = 0; ...)`) to limit their scope and improve clarity.
    *   **Early Exit:** Since the array is sorted, if `nums[i] > 0`, you can `break` immediately, because no three numbers starting with a positive number can sum to zero.
    *   **Standard Naming:** Rename `len` to `n` for conciseness and adhere to the C++ style of declaring variables close to their usage.

---
---


# Question Revision
### Revision Report: 3Sum

**Pattern:** Two Pointers (Sorting + Fixed Anchor)

**Brute Force:** 
Three nested loops iterate through all possible triplets $(i, j, k)$ to check if $nums[i] + nums[j] + nums[k] == 0$.
*   **Time:** $O(n^3)$
*   **Space:** $O(1)$ (or $O(n)$ depending on storage for results)

**Optimal Approach:**
1. Sort the array.
2. Fix one element ($nums[i]$) as an anchor.
3. Use two pointers ($left = i + 1, right = n - 1$) to find pairs that sum to $-nums[i]$.
4. Skip duplicate values for all pointers to ensure uniqueness.
*   **Time:** $O(n^2)$ (Sorting is $O(n \log n)$, the nested scan is $O(n^2)$)
*   **Space:** $O(1)$ (ignoring space for output) or $O(n)$ depending on the sort implementation.

**The 'Aha' Moment:**
When a problem asks for combinations that satisfy a sum in a sorted or sortable array, anchoring one element and reducing the remainder to a 2Sum problem using two pointers is the most efficient way to avoid redundant work.

**Summary:**
Sort first to eliminate duplicates and enable the two-pointer approach, turning an $O(n^3)$ exhaustive search into a manageable $O(n^2)$ linear scan.

---
