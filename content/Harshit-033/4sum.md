---
title: "4Sum"
slug: 4sum
date: "2026-04-08"

---
---

# My Solution
~~~cpp
class Solution {
public:
    vector<vector<int>> fourSum(vector<int>& nums, int target) {
        int len=nums.size();

        sort(nums.begin(),nums.end());

        vector<vector<int>> ans;

        int i,j,k,l;

        for(i=0;i<len-3;i++){
            if(i>0 && nums[i]==nums[i-1]){
                continue;
            }

            for(j=i+1;j<len-2;j++){
                if(j>i+1 && nums[j]==nums[j-1] ){
                    continue;
                }
                k=j+1;
                l=len-1;
                while(k<l){
                    long long sum=(long long)nums[i]+nums[j]+nums[k]+nums[l];
                    if(sum==target){
                        ans.push_back({nums[i],nums[j],nums[k],nums[l]});
                        k++;
                        l--;
                        while(k<l && nums[k]==nums[k-1]) k++;
                        while(k<l && nums[l]==nums[l+1]) l--;
                    }
                    else if(sum<target) k++;
                    else l--;
                }

            }
        }
        return ans;
        
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Sorting combined with nested loops and the two-pointer technique.
*   **Optimality:** Optimal. It reduces the $O(n^4)$ brute-force approach to $O(n^3)$ by fixing two elements and using two pointers for the remaining two.

## Complexity
*   **Time Complexity:** $O(n^3)$. Sorting takes $O(n \log n)$, followed by two nested loops ($O(n^2)$) each containing a two-pointer scan ($O(n)$).
*   **Space Complexity:** $O(1)$ auxiliary space (excluding the space required for the output vector and sorting overhead).

## Efficiency Feedback
*   **Runtime:** The use of `long long` for `sum` is necessary and correctly implemented to prevent integer overflow during calculation, which is a common pitfall when summing four 32-bit integers.
*   **Optimization:** The pruning conditions (`if(i>0 && nums[i]==nums[i-1])` and `if(j>i+1 && nums[j]==nums[j-1])`) are efficient and effectively handle duplicates without extra memory.
*   **Potential Improvement:** You could add early exit conditions inside the loops. For example, if `(long long)nums[i] + nums[i+1] + nums[i+2] + nums[i+3] > target`, you can `break` because any further elements will only increase the sum. Similarly, check if `(long long)nums[i] + nums[len-3] + nums[len-2] + nums[len-1] < target` and `continue` to the next `i`.

## Code Quality
*   **Readability:** Good. The logic is standard and easy to follow.
*   **Structure:** Good. The nested structure clearly separates the stages of the algorithm.
*   **Naming:** Moderate. Variables `i, j, k, l` are standard for indexing but somewhat cryptic; `left` and `right` or similar descriptive names would improve readability.
*   **Improvements:** 
    *   Use more descriptive variable names for the pointers.
    *   While the current approach is standard, incorporating the "early exit" optimizations mentioned above would significantly improve performance for cases where the target is much smaller or larger than the available range of sums.
    *   `len` can be declared as `size_t` or `int` consistently. Since `nums.size()` returns a `size_t`, using `int` is acceptable here as constraints for 4Sum typically fit in `int`, but it is better to be explicit.

---
---


# Question Revision
### Revision Report: 4Sum

**Pattern:** Two Pointers (K-Sum generalization)

**Brute Force:** 
Four nested loops iterating through every combination of indices $(i, j, k, l)$ to check if `nums[i] + nums[j] + nums[k] + nums[l] == target`.
*   **Time Complexity:** $O(n^4)$
*   **Space Complexity:** $O(1)$ (excluding output space)

**Optimal Approach:** 
Sort the array first. Fix the first two numbers using two nested loops, then use the "Two Pointers" technique (left and right pointers) to find the remaining two numbers in $O(n)$ time. Use `while` loops to skip duplicate values at each of the four levels to avoid redundant quadruplets.
*   **Time Complexity:** $O(n^3)$
*   **Space Complexity:** $O(1)$ or $O(n)$ depending on sorting implementation.

**The 'Aha' Moment:** 
The transition from 2Sum to K-Sum is solved by fixing $K-2$ variables and reducing the remaining problem to the standard Two Pointers approach for 2Sum.

**Summary:** 
Sort the array and anchor $K-2$ pointers to transform any $K$-Sum problem into a predictable $O(n^{k-1})$ two-pointer scan.

---
