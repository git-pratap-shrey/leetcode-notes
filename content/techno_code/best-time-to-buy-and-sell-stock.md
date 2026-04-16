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
- **Technique:** One-pass Greedy approach. It tracks the minimum price encountered so far and calculates the potential profit at each step.
- **Optimality:** Optimal. This is the most efficient way to solve the problem as it requires only a single traversal of the data.

## Complexity
- **Time Complexity:** $O(n)$, where $n$ is the number of elements in the `prices` vector.
- **Space Complexity:** $O(1)$, as only a constant amount of extra space is used regardless of input size.

## Efficiency Feedback
- **Runtime/Memory:** Both are optimal.
- **Potential Issue:** The code lacks a check for an empty input vector. Accessing `prices[0]` when the vector is empty will result in a runtime error (segmentation fault).

## Code Quality
- **Readability:** Good. The logic is straightforward and easy to follow.
- **Structure:** Good.
- **Naming:** Moderate.
    - `mini` is acceptable, but `minPrice` would be more descriptive.
    - `cost` is misleading; it actually represents the current transaction's `profit`.
- **Concrete Improvements:**
    1. Add a guard clause: `if (prices.empty()) return 0;`.
    2. Rename `cost` to `currentProfit` to accurately reflect its purpose.

---

# Question Revision
### Best Time to Buy and Sell Stock

**Pattern:** Single Pass (Greedy)

**Brute Force:**
Iterate through every possible pair of buy and sell days using nested loops to find the maximum difference.
- **Time:** $O(n^2)$
- **Space:** $O(1)$

**Optimal Approach:**
Traverse the array once, maintaining a variable for the `min_price` encountered so far. For each element, calculate the potential profit (`current_price - min_price`) and update the `max_profit` if it exceeds the previous maximum.
- **Time:** $O(n)$
- **Space:** $O(1)$

**The 'Aha' Moment:**
The constraint that you must buy before you can sell implies that the optimal buy price is simply the minimum value seen to the left of the current index.

**Summary:**
Track the running minimum price and the maximum gap between that minimum and the current price in one pass.

---