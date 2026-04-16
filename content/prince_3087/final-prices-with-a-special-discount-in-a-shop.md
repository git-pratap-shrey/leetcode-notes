---
title: "Final Prices With a Special Discount in a Shop"
slug: final-prices-with-a-special-discount-in-a-shop
date: "2026-04-16"
---

# My Solution
~~~cpp
class Solution {
public:
    vector<int> finalPrices(vector<int>& prices) {
        stack<int>st;
        int n=prices.size();
        vector<int>res(n);
        
        for(int i=n-1;i>=0;i--){
            while(!st.empty()&& st.top()>prices[i]){
                st.pop();
            }
            if(st.empty()){
                
                res[i]=prices[i];
               
               st.push(prices[i]);
               continue;
            }
            else{
                res[i]=prices[i]-st.top();
                st.push(prices[i]);
            }
            

        }
        return res;
        
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Monotonic Stack.
- **Optimality**: Optimal. The solution iterates through the array once and each element is pushed and popped from the stack at most once, achieving the best possible time complexity for this problem.

## Complexity
- **Time Complexity**: $O(n)$, where $n$ is the number of prices.
- **Space Complexity**: $O(n)$ to store the result vector and the monotonic stack.

## Efficiency Feedback
- The implementation is efficient.
- The use of a stack to maintain a non-decreasing sequence of prices from right to left correctly identifies the first smaller or equal element to the right.

## Code Quality
- **Readability**: Moderate. There are excessive empty lines and redundant logic.
- **Structure**: Good. The flow is logical and follows standard competitive programming patterns.
- **Naming**: Moderate. Variables `st`, `n`, and `res` are generic. While common in competitive programming, `s` or `priceStack` and `result` would be clearer.
- **Concrete Improvements**:
    - **Remove Redundancy**: The `if(st.empty())` block and the `else` block both call `st.push(prices[i])`. This can be moved outside the conditional.
    - **Simplify Logic**: The `continue` keyword is unnecessary.
    - **Refined Logic**:
      ```cpp
      for (int i = n - 1; i >= 0; i--) {
          while (!st.empty() && st.top() > prices[i]) {
              st.pop();
          }
          res[i] = st.empty() ? prices[i] : prices[i] - st.top();
          st.push(prices[i]);
      }
      ```

---

# Question Revision
### Revision Report: Final Prices With a Special Discount in a Shop

**Pattern:** Monotonic Stack

**Brute Force:** 
Nested loops: For every element at index $i$, iterate through all subsequent elements $j > i$ until the first price $\le prices[i]$ is found.

**Optimal Approach:**
*   Maintain a **monotonic increasing stack** that stores indices of prices awaiting a discount.
*   Iterate through the array: while the stack is not empty and the current price is less than or equal to the price at the index on top of the stack, pop the index and apply the current price as the discount.
*   Push the current index onto the stack to be processed by future elements.
*   **Time Complexity:** $O(n)$ — each element is pushed and popped exactly once.
*   **Space Complexity:** $O(n)$ — worst case for the stack when prices are strictly increasing.

**The 'Aha' Moment:** 
The requirement to find the "first element to the right" that satisfies a specific comparison is the classic signature of a Monotonic Stack.

**Summary:** 
Use a stack to defer price calculations until the first smaller or equal value is encountered during a single linear scan.

---