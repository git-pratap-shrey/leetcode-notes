---
title: "Online Stock Span"
slug: online-stock-span
date: "2026-10-19"
---

# My Solution
~~~java
class StockSpanner {
    Stack<int[] > st;
    public StockSpanner() {
        st = new Stack();
    }
    public int next(int price) {
        int span = 1;
        while(!st.isEmpty() && st.peek()[0]<=price){
            span += st.pop()[1];
        }
        st.push(new int[]{price,span});
        return span;
    }
}

/**
 * Your StockSpanner object will be instantiated and called as such:
 * StockSpanner obj = new StockSpanner();
 * int param_1 = obj.next(price);
 */
~~~

# Submission Review
## Approach
- **Technique**: Monotonic Stack. The solution stores pairs of `[price, span]` and pops elements while the current price is greater than or equal to the top of the stack to aggregate the total span.
- **Optimality**: Optimal. This approach ensures each element is pushed and popped from the stack at most once.

## Complexity
- **Time Complexity**: $O(1)$ average (amortized) per `next()` call. While a single call can take $O(n)$ in the worst case (popping many elements), across $n$ calls, the total time is $O(n)$.
- **Space Complexity**: $O(n)$ to store the stock prices and their spans in the stack.

## Efficiency Feedback
- **Runtime**: The amortized time complexity is optimal. However, using `java.util.Stack` is slightly slower than `java.util.Deque` (e.g., `ArrayDeque`) because `Stack` is synchronized.
- **Memory**: Using `int[]` arrays for every entry creates many small objects, increasing overhead and GC pressure. A custom `Pair` class or two separate primitive arrays/stacks would be more memory-efficient.

## Code Quality
- **Readability**: Good. The logic is concise and the implementation follows the standard monotonic stack pattern.
- **Structure**: Good. The logic is encapsulated correctly within the required methods.
- **Naming**: Moderate. `st` is a generic name; `stack` or `spanStack` would be more descriptive.
- **Concrete Improvements**:
    - Replace `Stack<int[]>` with `Deque<int[]>` (using `ArrayDeque`) to avoid unnecessary synchronization.
    - Use a dedicated `Pair` class or two primitive stacks to reduce object allocation overhead.
    - Add generic type to the constructor: `st = new Stack<>();` (though it works as is due to raw type usage).

---

# Question Revision
# Revision Report: Online Stock Span

- **Pattern**: Monotonic Stack (Decreasing)
- **Brute Force**: For every new price, iterate backward through the history of prices until a higher price is encountered or the start of the list is reached.
- **Optimal Approach**: 
    - Use a stack to store pairs of `(price, span)`.
    - When a new price arrives, pop all elements from the stack that have a price less than or equal to the current price, accumulating their spans into the current price's span.
    - Push the current price and its total calculated span onto the stack.
    - **Time Complexity**: $O(1)$ average per call (Amortized $O(n)$ for $n$ calls, as each element is pushed and popped exactly once).
    - **Space Complexity**: $O(n)$ to store the prices in the stack.
- **The 'Aha' Moment**: The requirement to find the "nearest element to the left that is greater than the current element" is the classic signature of a Monotonic Stack.
- **Summary**: Use a monotonic stack to store price-span pairs and "collapse" smaller previous prices into the current span.

---