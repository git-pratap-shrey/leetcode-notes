---
title: "Maximum Total Sum of K Selected Elements"
slug: maximum-total-sum-of-k-selected-elements
date: "2026-07-09"
---

# My Solution
~~~
cpp
class Solution {
public:
    long long maxSum(vector<int>& nums, int k, int mul) {
        int n=nums.size();
        long long Total=0;
        sort(nums.begin(),nums.end(),greater<int>());
        int i=0;
        while(i<min(k,n)){
            long long z=nums[i];
            if(mul>0){
                Total +=z*mul;
            }
            else{
             Total +=z;}
            i++;
            mul--;
        }
        return Total;
    }
};
~~~

# Submission Review

## Approach
*   **Technique:** Greedy.
*   **Optimality:** **Suboptimal/Incorrect.** The logic assumes that selecting the largest $K$ elements and applying the multipliers greedily is sufficient. However, if the multiplier $mul$ can be negative or if the interaction between $mul$ and the values in `nums` changes, this approach fails to consider the optimal sequence of multiplications (e.g., matching the smallest elements with the smallest multipliers or vice-versa to maximize the sum). 

## Complexity
*   **Time Complexity:** $O(N \log N)$ due to the sorting step. The `while` loop is $O(K)$.
*   **Space Complexity:** $O(1)$ (ignoring the space used by the sort implementation).

## Efficiency Feedback
*   The logic is flawed for cases where `mul` decreases. By strictly taking the largest elements, you force the largest values to be multiplied by the smallest (potentially negative) multipliers, which may lead to a lower total than selecting smaller elements or a different subset.
*   The `while` loop condition `i < min(k, n)` is correct for preventing out-of-bounds, but the greedy logic is context-dependent based on the nature of `mul`.

## Code Quality
*   **Readability:** Moderate. The code is concise but lacks comments explaining the greedy strategy.
*   **Structure:** Moderate. The `if (mul > 0)` check inside the loop is redundant because the logic just adds `z` if `mul <= 0` (effectively `z * 1`), which contradicts the standard interpretation of a decreasing multiplier sequence.
*   **Naming:** Moderate. `Total` and `z` are generic; `mul` is acceptable but standard conventions prefer `multiplier`.
*   **Concrete Improvements:**
    *   **Clarify Requirements:** Confirm if the multiplier effectively decreases for every chosen element. If so, a simple greedy sort is only valid if all numbers are positive.
    *   **Simplify Logic:** Instead of `if (mul > 0)`, simply perform `Total += (long long)nums[i] * mul--`.
    *   **Edge Case Handling:** Add checks for `k > n` if the problem constraints do not guarantee `k <= n`.

---

# Question Revision

#

## Revision Report: Maximum Total Sum of K Selected Elements

**Pattern:** Greedy + Priority Queue (Min-Heap)

**Brute Force:**
Generate all possible combinations of size $K$ from the given array and calculate the sum for each, then take the maximum.
*   **Complexity:** $O(\binom{n}{k} \cdot k)$ — computationally infeasible for large $n$.

**Optimal Approach:**
1. Sort both arrays (`nums` and `limits`) to process elements efficiently.
2. Use a **Min-Heap** of size $K$ to maintain the largest $K$ elements encountered so far.
3. Iterate through elements from largest to smallest; if the current element's `limit` allows selection, add it to the heap and decrement the remaining limit count.
4. If a limit reaches zero, remove that element from further consideration.
*   **Time Complexity:** $O(n \log n + n \log k)$
*   **Space Complexity:** $O(n + k)$

**The 'Aha' Moment:**
When the problem constraints require picking $K$ elements under specific capacity limits, treating the `limits` as a "resource count" allows you to greedily pick the largest available values while tracking remaining slots in a Min-Heap.

**Summary:**
When constrained by limited frequencies, sort by value and use a Min-Heap to greedily swap out smaller elements for larger ones as capacity permits.

---