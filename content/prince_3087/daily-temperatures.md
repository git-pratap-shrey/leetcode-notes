---
title: "Daily Temperatures"
slug: daily-temperatures
date: "2026-04-14"
---

# My Solution
~~~cpp
class Solution {
public:
    vector<int> dailyTemperatures(vector<int>& temperatures) {
        int n = temperatures.size();
        int idx;
        vector<int>ans(n,0);
        // ans[n-1]=0;
        stack<int>st;
        st.push(n-1);
        for(int i=n-2;i>=0;i--){
            while(!st.empty() && temperatures[st.top()]<=temperatures[i]){
                st.pop();
            }
            if(st.empty()){
                ans[i]=0;
                // st.push(i);
            }
            else{
                idx = st.top();
                ans[i] = idx-i;
                // st.push(i);
            }
            st.push(i);
        }
       
        return ans;
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Monotonic Stack. The code processes the array from right to left, maintaining a stack of indices where the corresponding temperatures are strictly increasing from top to bottom.
- **Optimality**: Optimal. This is the standard approach for "Next Greater Element" problems, ensuring each element is processed a constant number of times.

## Complexity
- **Time Complexity**: $O(n)$, where $n$ is the number of temperatures. Each index is pushed onto and popped from the stack exactly once.
- **Space Complexity**: $O(n)$ to store the result vector and the stack in the worst case (e.g., strictly decreasing temperatures).

## Efficiency Feedback
- **Runtime**: Very efficient. The linear scan and stack operations minimize overhead.
- **Memory**: Memory usage is optimal given the requirements of the output vector.

## Code Quality
- **Readability**: Moderate. The presence of commented-out code (`// ans[n-1]=0;`, `// st.push(i);`) creates visual noise and reduces clarity.
- **Structure**: Good. The logic flow is straightforward.
- **Naming**: Moderate. `ans` and `st` are generic; `idx` is declared at the function scope but only used inside the `else` block, which is poor scoping practice.
- **Concrete Improvements**:
    - Remove all commented-out lines of code.
    - Move the declaration of `int idx` inside the `else` block to limit its scope.
    - Simplify the loop: Start the loop from `i = n - 1` instead of `n - 2` and remove the manual `st.push(n-1)` to make the code more concise and less error-prone.

---

# Question Revision
### Daily Temperatures

**Pattern:** Monotonic Stack

**Brute Force:** Use nested loops to iterate through the array for every element until a higher temperature is found.
- Time: $O(n^2)$
- Space: $O(1)$

**Optimal Approach:** Maintain a stack of indices whose temperatures are in strictly decreasing order. When the current day's temperature is higher than the temperature at the index on top of the stack, pop the index and calculate the distance between the two days.
- Time: $O(n)$
- Space: $O(n)$

**The 'Aha' Moment:** The requirement to find the "next greater element" is the definitive signal to use a monotonic stack.

**Summary:** Store indices on a stack and pop them once a warmer temperature "resolves" the pending wait time.

---