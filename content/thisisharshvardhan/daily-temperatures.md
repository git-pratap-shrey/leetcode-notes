---
title: "Daily Temperatures"
slug: daily-temperatures
date: "2026-10-17"
---

# My Solution
~~~cpp
class Solution {
public:
    vector<int> dailyTemperatures(vector<int>& temperatures) {
        int n=temperatures.size();
        stack <int>st;
        vector<int>result(n,0);
        for(int i=n-1;i>=0;i--){
           while(!st.empty()&& temperatures[i]>=temperatures[st.top()]){
            st.pop();
           }
           if(!st.empty()){
             result[i]=st.top()-i;
           }
           st.push(i);
        }
        return result;
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Monotonic Stack (processed from right to left).
- **Optimality**: Optimal. The solution ensures each element is pushed and popped from the stack at most once.

## Complexity
- **Time Complexity**: $O(n)$, where $n$ is the number of temperatures. Each index enters and leaves the stack exactly once.
- **Space Complexity**: $O(n)$ to store the stack in the worst case (e.g., strictly decreasing temperatures) and the result vector.

## Efficiency Feedback
- **Performance**: The implementation is highly efficient.
- **Optimization**: Using a `std::vector` as a stack or pre-allocating the stack size could slightly reduce overhead, but `std::stack` is appropriate here.

## Code Quality
- **Readability**: Good. The logic is straightforward and follows standard monotonic stack patterns.
- **Structure**: Good. The flow is linear and easy to follow.
- **Naming**: Moderate. `st` is a common abbreviation, but `s` or `monotonicStack` would be clearer; `n` is standard for size.
- **Improvements**:
    - Add a space after `stack <int>st;` $\rightarrow$ `stack<int> st;` for better formatting.
    - Consistently use spaces around operators (e.g., `i=n-1` $\rightarrow$ `i = n - 1`).

---

# Question Revision
# Revision Report: Daily Temperatures

- **Pattern**: Monotonic Stack (Decreasing)
- **Brute Force**: For each day, iterate through all subsequent days until a higher temperature is found. If no higher temperature exists, assign 0.
- **Optimal Approach**: 
    - Maintain a stack of indices of temperatures that haven't found a "warmer day" yet.
    - As you iterate through the array, while the current temperature is higher than the temperature at the index on top of the stack, you have found the warmer day for that index.
    - Pop the index, calculate the difference between the current index and the popped index, and store it in the result array.
    - Push the current index onto the stack and repeat.
    - **Time Complexity**: $O(n)$ — each element is pushed and popped exactly once.
    - **Space Complexity**: $O(n)$ — to store the stack in the worst case (strictly decreasing temperatures).
- **The 'Aha' Moment**: The requirement to find the "next greater element" in a linear array is the signature trigger for a Monotonic Stack.
- **Summary**: Use a stack to keep track of "unresolved" days and pop them as soon as a warmer temperature is encountered.

---