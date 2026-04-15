---
title: "Best Time to Buy and Sell Stock"
slug: best-time-to-buy-and-sell-stock
date: "2026-04-11"
---

# My Solution
~~~cpp
class Solution {
public:
    int maxProfit(vector<int>& prices) {
        int mini=prices[0];
        int maxProfit=0;
        int n=prices.size();
        for(int i=1;i<n;i++){
            int cost=prices[i]-mini;
            maxProfit=max(maxProfit,cost);
            mini=min(mini,prices[i]);
        }
        return maxProfit;
    }
};
~~~

# Submission Review
## Approach
- **Technique**: One-pass Greedy/Dynamic Programming. The code tracks the minimum price seen so far and calculates the potential profit at each subsequent step.
- **Optimality**: Optimal. It finds the global maximum profit in a single traversal.

## Complexity
- **Time Complexity**: $O(n)$, where $n$ is the number of elements in `prices`. The array is traversed once.
- **Space Complexity**: $O(1)$, as only a few integer variables are used regardless of input size.

## Efficiency Feedback
- **Runtime**: Highly efficient due to the single-pass linear scan.
- **Memory**: Minimal overhead.
- **Critical Flaw**: The code lacks a check for an empty input vector. Accessing `prices[0]` when `prices` is empty will lead to a runtime error (segmentation fault).

## Code Quality
- **Readability**: Good. The logic is straightforward and easy to follow.
- **Structure**: Good.
- **Naming**: Moderate. 
    - `mini` is acceptable but `minPrice` would be more descriptive.
    - `cost` is misleading; it actually represents the `currentProfit` for that specific day.
- **Concrete Improvements**:
    - Add `if (prices.empty()) return 0;` at the start to prevent crashes.
    - Rename `cost` to `profit` to accurately reflect the value being calculated.

---

# Question Revision
### Best Time to Buy and Sell Stock

**Pattern:** Greedy / Sliding Window

**Brute Force:**
Iterate through every possible pair of buy and sell days using nested loops to calculate all possible profits and return the maximum.
*   **Time:** $O(n^2)$
*   **Space:** $O(1)$

**Optimal Approach:**
Maintain a `min_price` variable initialized to infinity and a `max_profit` variable at 0. Traverse the array once: update `min_price` if the current price is lower, otherwise calculate the potential profit (current price - `min_price`) and update `max_profit` if it's the highest seen.
*   **Time:** $O(n)$
*   **Space:** $O(1)$

**The 'Aha' Moment:**
The requirement to find the maximum difference between two elements where the smaller element must appear before the larger one implies a single-pass tracking of the minimum value.

**Summary:** 
Track the lowest price seen so far and maximize the difference between it and the current price in one pass.

---