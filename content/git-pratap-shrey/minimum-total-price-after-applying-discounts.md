---
title: "Minimum Total Price After Applying Discounts"
slug: minimum-total-price-after-applying-discounts
date: "2026-08-09"
---

# My Solution
~~~cpp
class Solution {
public:
    vector<vector<int>> findDisappearedNumbers(vector<int>& nums, int lower, int upper) {
        sort(nums.begin(), nums.end());

        vector<vector<int>> ans;
        int nextMissing = lower;

        for (int x : nums) {
            if (x < nextMissing) continue; 
            if (x > upper) break;

            if (x > nextMissing) {
                ans.push_back({nextMissing, x - 1});
            }

            nextMissing = x + 1;
        }

       
        if (nextMissing <= upper) {
            ans.push_back({nextMissing, upper});
        }

        return ans;
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Greedy/Sorting.
*   **Optimality:** Optimal. Sorting the array allows for a single linear pass to identify gaps between the input numbers and the requested `[lower, upper]` range.

## Complexity
*   **Time Complexity:** $O(N \log N)$ due to the sorting step, where $N$ is the size of the input array. The subsequent linear pass is $O(N)$.
*   **Space Complexity:** $O(1)$ auxiliary space (excluding the output vector), assuming the sort is done in-place.

## Efficiency Feedback
*   **Performance:** The $O(N \log N)$ complexity is standard for this type of problem. 
*   **Optimization:** While a linear-time $O(N)$ approach is possible using a hash set or a boolean array (if the range of numbers is small and bounded), the sorting approach is more memory-efficient and robust for large value ranges.

## Code Quality
*   **Readability:** Good. The logic is straightforward and easy to follow.
*   **Structure:** Good. The flow clearly handles the beginning of the range, the gaps between sorted elements, and the trailing segment after the last element.
*   **Naming:** Moderate. The function name `findDisappearedNumbers` is highly misleading as it does not return the missing numbers themselves, but rather the **ranges** of missing numbers. It should be renamed to something like `findMissingRanges`.
*   **Concrete Improvements:**
    *   **Rename function:** Match the purpose (e.g., `findMissingRanges`).
    *   **Input Handling:** If `nums` could contain duplicates, `nextMissing = x + 1` handles it correctly, but adding a note or comment on expected input constraints (e.g., duplicates) would improve clarity.
    *   **Type Safety:** The problem parameters `lower` and `upper` should be checked against potential integer overflow if the gaps cover the full range of `int` (though not strictly necessary given typical constraints).

---

# Question Revision
### Revision Report: Minimum Total Price After Applying Discounts

**Pattern:** Tree Traversal (DFS) + Greedy / Path Counting

**Brute Force:**
For each query $(u, v)$, perform a BFS/DFS to find the path and increment the count for every node on that path. Afterward, iterate through the tree to identify nodes with the highest frequency, apply the 50% discount to those nodes, and sum the total costs.
*   **Time:** $O(Q \cdot N)$, where $Q$ is queries and $N$ is nodes.
*   **Space:** $O(N)$.

**Optimal Approach:**
1.  **Count Path Occurrences:** Since the tree structure is static, use DFS to find the path from $u$ to $v$ for each query. Maintain a frequency array `freq[]` and increment the count for every node visited during all path traversals.
2.  **Greedy Reduction:** To minimize total price, apply the 50% discount greedily to nodes that appear most frequently, *provided they are not adjacent to another node that already received a discount*.
3.  **Dynamic Programming (State):** For each node, maintain two states: `dp[u][0]` (node $u$ is not discounted) and `dp[u][1]` (node $u$ is discounted). 
    *   If $u$ is discounted, children must not be discounted: $dp[u][1] = price[u]/2 + \sum dp[child][0]$.
    *   If $u$ is not discounted, children can be either: $dp[u][0] = price[u] + \sum \min(dp[child][0], dp[child][1])$.
*   **Time:** $O(Q \cdot N + N)$.
*   **Space:** $O(N)$.

**The 'Aha' Moment:**
When a problem asks to minimize a cost where certain choices (discounting) exclude adjacent options, it is a classic indicator that you need to combine frequency counting with tree-based DP (Independent Set variation).

**Summary:**
When path overlaps are involved, use DFS to compute frequencies, then apply tree DP to handle the constraints of local optimality.

---