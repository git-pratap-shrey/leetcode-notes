---
title: "Minimum Total Price After Applying Discounts"
slug: minimum-total-price-after-applying-discounts
date: "2026-08-11"
---

# My Solution
~~~cpp
class Solution {
public:
    double minPrice(vector<int>& prices, vector<int>& discounts) {

        int n = prices.size() ;
        int m = discounts.size() ;

        sort( prices.rbegin() , prices.rend() ) ;
        sort( discounts.rbegin() , discounts.rend() ) ;

        double ans = 0 ;

        int i = 0 ;
        int j = 0 ;
        
        while ( i < n && j < m ) {

            ans += (double)( prices[i] * (double)(100-discounts[j]) / 100 ) ;
            i++ ;
            j++ ;
            
        }

        while ( i < n ) ans += prices[i++] ;

        return ans ;
        
    }
};
~~~

# Submission Review
## Approach
- **Technique:** Greedy. 
- **Optimality:** Optimal. Sorting prices and discounts in descending order allows for the largest possible discounts to be applied to the highest prices, which is the mathematically correct strategy to minimize the total sum.

## Complexity
- **Time Complexity:** $O(N \log N + M \log M)$, where $N$ is the number of prices and $M$ is the number of discounts, due to the sorting steps.
- **Space Complexity:** $O(1)$ (ignoring the space used by the sorting algorithm implementation, which typically uses $O(\log N)$ or $O(\log M)$ stack space).

## Efficiency Feedback
- **Runtime:** Very efficient. The algorithm performs a single pass after sorting.
- **Precision:** The use of `double` is appropriate here as discounts involve division. However, if the problem constraints allow, using integer arithmetic (e.g., keeping everything multiplied by 100) can avoid floating-point precision issues, though it is usually not necessary for standard competitive programming limits.

## Code Quality
- **Readability:** Good. The logic is straightforward and easy to follow.
- **Structure:** Good. The separation of sorting and the greedy calculation is clean.
- **Naming:** Acceptable. `i` and `j` are standard loop iterators for two arrays, though `priceIdx` and `discountIdx` would be more descriptive.
- **Improvements:**
    - The code handles the case where $M < N$ correctly by adding the remaining prices.
    - Explicit type casting `(double)` is consistent, though potentially redundant given the multiplication order; `prices[i] * (100 - discounts[j]) / 100.0` would suffice and be cleaner.
    - **Edge Case:** The logic assumes `discounts[j]` is a percentage (0-100). Ensure the input guarantees this; otherwise, the calculation logic might produce unexpected results.

---

# Question Revision
### Revision Report: Minimum Total Price After Applying Discounts

**Pattern:** Tree Traversal (DFS) + Greedy / Path Counting

**Brute Force:**
For each query $(u, v)$, perform a BFS/DFS to find all nodes in the path. Maintain a frequency array of node visits. After processing all queries, halve the price of nodes with an even frequency count, then sum the total. Complexity: $O(Q \times N)$.

**Optimal Approach:**
1.  **Path Frequency:** Use DFS to find the path from $u$ to $v$ for every query. Store the frequency of each node visited in an array. 
2.  **Greedy Reduction:** Calculate the "gain" for each node if its price is halved: $gain[i] = \lfloor price[i] / 2 \rfloor$.
3.  **Optimal Selection:** To minimize the total, prioritize halving the nodes with the highest frequency count and highest gain. Specifically, use a recursive DFS to perform a Tree DP or simply compute total gain by halving the prices of nodes whose *children* are not halved (to satisfy the constraint that no two adjacent nodes are halved).
4.  **Complexity:** $O(N + Q \times N)$ to find paths and $O(N \log N)$ for sorting gains or $O(N)$ using DP.

**The 'Aha' Moment:**
When a problem involves constraints on adjacent nodes (no two halved) and path-based updates, it’s a clear signal to map path frequencies to nodes first, then apply a standard House Robber-style Tree DP.

**Summary:**
Map overlapping path queries to node frequencies, then treat the non-adjacent constraint as a classic Tree DP problem to maximize your savings.

---