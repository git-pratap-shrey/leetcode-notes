---
title: "Best Time to Buy and Sell Stock"
slug: best-time-to-buy-and-sell-stock
date: "2026-08-30"
---

# My Solution
~~~cpp
class Solution {
public:
    int countSpecialIntegers(vector<int>& nums) {
        unordered_map<int,int>blocks;
        for(int i =0;i<nums.size();i++){
            if(i==0 || nums[i]!=nums[i-1]){
                blocks[nums[i]]++;
            }
        }
        int ans = 0;
        for(auto it= blocks.begin(); it!=blocks.end();it++){
            if(it->second==1){
                ans++;
            }
        }
        return ans;
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** The code implements a linear scan with a hash map to track value transitions.
*   **Optimal:** **No.** This solution is fundamentally incorrect for the "Best Time to Buy and Sell Stock" problem (which requires finding the maximum difference between two elements where the smaller index precedes the larger index). The current logic seems to be attempting to count contiguous segments or frequency blocks, which is irrelevant to the stated problem.

## Complexity
*   **Time Complexity:** $O(N)$ due to the single pass over the input array.
*   **Space Complexity:** $O(N)$ due to the use of an `unordered_map` that could store up to $N$ unique elements.
*   **Bottleneck:** The approach itself is entirely wrong for the problem requirements; it performs unnecessary hashing instead of simple variable tracking.

## Efficiency Feedback
*   **Runtime/Memory:** Using an `unordered_map` adds significant overhead (hashing, memory allocation, potential collisions) compared to the standard $O(1)$ space, $O(N)$ time approach of tracking the `min_price` and `max_profit` variables.

## Code Quality
*   **Readability:** Moderate. The code is clean, but the logic is completely decoupled from the intended problem.
*   **Structure:** Poor. The use of `blocks` as a map is an over-engineered solution for a problem that requires only two scalar variables.
*   **Naming:** Poor. The function name `countSpecialIntegers` and variable `blocks` do not reflect the domain of the "Best Time to Buy and Sell Stock" problem.
*   **Improvements:** 
    *   Discard the `unordered_map`. 
    *   Initialize `minPrice` to `INT_MAX` and `maxProfit` to `0`. 
    *   Iterate once, updating `minPrice` as `min(minPrice, price)` and `maxProfit` as `max(maxProfit, price - minPrice)`.

---

# Question Revision
### Revision Report: Best Time to Buy and Sell Stock

**Pattern:** One-Pass / Greedy

**Brute Force:** 
Use nested loops to calculate the difference between every pair of elements $(prices[j] - prices[i])$ where $j > i$ and track the global maximum.
*   **Time:** $O(n^2)$
*   **Space:** $O(1)$

**Optimal Approach:** 
Iterate through the array once while maintaining a `min_price` variable. For each price, calculate the potential profit (`price - min_price`) and update the `max_profit` if the current potential is higher. Update `min_price` if the current price is lower than the previous minimum.
*   **Time:** $O(n)$
*   **Space:** $O(1)$

**The 'Aha' Moment:** 
The realization that you only need the lowest price *seen so far* to maximize the profit for the current day eliminates the need to look at historical prices repeatedly.

**Summary:** 
Always track the running minimum to calculate the maximum delta in a single pass.

---