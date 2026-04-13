---
title: "Online Stock Span"
slug: online-stock-span
date: "2026-04-13"

---
---

# My Solution
~~~cpp
class StockSpanner {
public:
    stack<int> s;
    unordered_map<int,int> mp;
    StockSpanner() {
        
    }
    
    int next(int price) {

        int count=1;

        while(!s.empty() && s.top()<=price){
            count=count+mp[s.top()];

            s.pop();
        }
        s.push(price);
        mp[price]=count;

        return count;
        
    }
};

/**
 * Your StockSpanner object will be instantiated and called as such:
 * StockSpanner* obj = new StockSpanner();
 * int param_1 = obj->next(price);
 */
~~~

# Submission Review
## Approach
*   **Technique:** Monotonic stack combined with a hash map to memoize the span of processed elements.
*   **Optimal:** No. The approach is logically flawed. Using `unordered_map<int, int>` to store the span of a price will cause incorrect results if the same `price` occurs multiple times, as the map will overwrite the previous span for that specific price value.

## Complexity
*   **Time Complexity:** Amortized $O(N)$ for the `next` calls, where $N$ is the total number of calls. 
*   **Space Complexity:** $O(N)$ to store prices in the stack and the map.

## Efficiency Feedback
*   **Bottleneck:** The use of `unordered_map` is not only logically incorrect but adds unnecessary overhead.
*   **Optimization:** The standard monotonic stack approach for this problem involves storing pairs of `{price, span}` directly in the stack. This eliminates the need for the `unordered_map` entirely and correctly handles duplicate prices.

## Code Quality
*   **Readability:** Moderate. The logic is concise but depends on a map that incorrectly handles duplicate keys.
*   **Structure:** Poor. Using a global map to track spans is an over-engineered way to solve a standard stack problem.
*   **Naming:** Moderate. `s`, `mp`, and `count` are standard, but `s` and `mp` are somewhat generic.
*   **Concrete Improvements:**
    *   Change the stack definition to `stack<pair<int, int>> s;` where the pair represents `{price, span}`.
    *   Inside `next(price)`, initialize `int count = 1`.
    *   Pop from the stack while `s.top().first <= price`. Add `s.top().second` to `count` and pop.
    *   Push `{price, count}` onto the stack and return `count`.
    *   Remove the `unordered_map` entirely.

---
---


# Question Revision
### Revision Report: Online Stock Span

**Pattern:** Monotonic Stack

**Brute Force:**
For each price, iterate backwards through the history of prices until finding a value strictly greater than the current price.
*   **Time Complexity:** $O(n^2)$ in the worst case (e.g., strictly decreasing prices).
*   **Space Complexity:** $O(n)$ to store prices.

**Optimal Approach:**
Maintain a stack of pairs `(price, span)` representing a strictly decreasing sequence. When a new price arrives, pop all elements from the stack that are less than or equal to the current price, accumulating their spans into the current price's span. Push the result onto the stack.
*   **Time Complexity:** $O(1)$ amortized (each element is pushed and popped exactly once).
*   **Space Complexity:** $O(n)$ to store elements in the stack.

**The 'Aha' Moment:**
When the problem requires finding the "nearest previous element that satisfies a condition" (greater/smaller/equal), a monotonic stack is the standard tool to discard irrelevant historical data efficiently.

**Summary:**
Use a monotonic stack whenever you need to find the distance to the previous element that breaks a sequence of increasing or decreasing values.

---
