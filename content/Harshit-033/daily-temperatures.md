--- title: "Daily Temperatures" slug: daily-temperatures date: "2026-06-18" ---  # My Solution ~~~class Solution {
public:
    vector<int> dailyTemperatures(vector<int>& temperatures) {
        int n=temperatures.size();

        vector<int> answer(n,0);
        stack<int> st;

        for (int i=0;i<n;i++) {

            while(!st.empty() && temperatures[i]>temperatures[st.top()]) {
                int idx=st.top();
                st.pop();

                answer[idx]=i-idx;
            }

            st.push(i);
        }

        return answer;
    }
}; - cpp~~~  # Submission Review ## Approach
- **Technique:** Monotonic Stack.
- **Optimality:** Optimal. This is the standard approach for "Next Greater Element" problems, ensuring each element is processed a constant number of times.

## Complexity
- **Time Complexity:** $O(n)$, where $n$ is the number of temperatures. Each index is pushed onto and popped from the stack exactly once.
- **Space Complexity:** $O(n)$ to store the `answer` vector and the `stack` in the worst case (e.g., strictly decreasing temperatures).

## Efficiency Feedback
- The implementation is highly efficient.
- Runtime is minimized by avoiding nested loops that re-scan the array.
- Memory usage is optimal for the given constraints.

## Code Quality
- **Readability:** Good. The logic is clean and follows standard competitive programming patterns.
- **Structure:** Good. The flow is linear and easy to trace.
- **Naming:** Moderate. While `n` and `i` are standard, `st` is generic; `indexStack` would be more descriptive.
- **Improvements:**
    - Use `std::vector<int> st` as a manual stack or `reserve()` space if using a vector to avoid potential reallocations, though `std::stack` is perfectly acceptable here.
    - The code is already concise; no significant structural changes are needed.  ---  # Question Revision ### Daily Temperatures

**Pattern:** Monotonic Stack

**Brute Force:**
Use nested loops: for every day, iterate through all subsequent days until a higher temperature is encountered.
- Time: $O(n^2)$
- Space: $O(1)$

**Optimal Approach:**
Maintain a **monotonically decreasing stack** of indices. As you iterate through the array, if the current temperature is higher than the temperature at the index stored on the top of the stack, you have found the "next warmer day." Pop the index, calculate the difference between the current index and the popped index, and repeat until the stack is empty or the current temperature is no longer greater.
- Time: $O(n)$ (each element is pushed and popped exactly once)
- Space: $O(n)$

**The 'Aha' Moment:**
The requirement to find the "next greater element" for every item in a linear sequence is the classic signal for a monotonic stack.

**Summary:**
Store indices in a decreasing stack and pop them the moment a warmer temperature "breaks" the trend to calculate the distance.  ---