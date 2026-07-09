--- title: "Daily Temperatures" slug: daily-temperatures date: "2026-07-07" ---  # My Solution ~~~class Solution {
public:
vector<int> dailyTemperatures(vector<int>& temp) {
    int n=temp.size();
    vector<int> ans(n,0);
      stack<int> st;

    for(int i=0;i<n;i++) {
        while(!st.empty() && temp[i]>temp[st.top()]) {
            int idx=st.top();
            st.pop();
            ans[idx]=i-idx;
        }
        st.push(i);
    }

    return ans;
}
}; - cpp~~~  # Submission Review ## Approach
- **Technique:** Monotonic Stack (specifically, a non-increasing stack storing indices).
- **Optimality:** Optimal. This is the standard approach for the "Next Greater Element" problem, ensuring each element is processed a constant number of times.

## Complexity
- **Time Complexity:** $O(n)$, where $n$ is the number of temperatures. Each index is pushed onto and popped from the stack exactly once.
- **Space Complexity:** $O(n)$ to store the `ans` vector and the `st` stack in the worst case (e.g., temperatures in strictly decreasing order).

## Efficiency Feedback
- **Runtime/Memory:** Performance is optimal. The use of `vector<int> ans(n, 0)` avoids repeated reallocations and handles the "no warmer temperature found" case automatically.
- **Optimizations:** No meaningful algorithmic optimizations available. Using a fixed-size array or a custom stack implementation could marginally reduce overhead, but is unnecessary here.

## Code Quality
- **Readability:** Good. The logic is concise and follows standard competitive programming patterns.
- **Structure:** Good. The flow is linear and logical.
- **Naming:** Moderate. While `temp`, `ans`, and `n` are acceptable in a competitive context, `st` is generic; `indexStack` would be more descriptive.
- **Improvements:**
    - Add `const` qualifier to the input `vector<int>& temp` to prevent accidental modification and signal intent.
    - Use `std::size_t` for indices to avoid signed/unsigned comparison warnings (though `int` is typically sufficient for $10^4$ - $10^5$ constraints).  ---  # Question Revision ### Daily Temperatures

**Pattern:** Monotonic Stack

**Brute Force:** For every element, iterate through all subsequent elements until a higher temperature is found. 
- Time: $O(n^2)$
- Space: $O(1)$

**Optimal Approach:** Use a stack to store indices of temperatures that haven't yet found a warmer day. Iterate through the array; while the current temperature is greater than the temperature at the index on top of the stack, pop the index and calculate the distance (`current_index - popped_index`).
- Time: $O(n)$
- Space: $O(n)$

**The 'Aha' Moment:** The requirement to find the "next greater element" is the classic signature of a Monotonic Stack.

**Summary:** Maintain a decreasing stack of indices to resolve pending "warmer day" requests as soon as a higher temperature is encountered.  ---