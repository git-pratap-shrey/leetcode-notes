---
title: "Daily Temperatures"
slug: daily-temperatures
date: "2026-06-18"
---

# My Solution
~~~cpp
class Solution {
public:
    vector<int> dailyTemperatures(vector<int>& temperatures) {

        int n = temperatures.size();

        vector<int> ans(n, 0);
        stack<int> st;   

        for(int i = n - 1; i >= 0; i--) {

            while(!st.empty() && temperatures[st.top()] <= temperatures[i]) {
                st.pop();
            }

            if(!st.empty()) {
                ans[i] = st.top() - i;
            }

            st.push(i);
        }

        return ans;
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Monotonic Stack (specifically a decreasing stack).
*   **Optimality:** Optimal. This is the standard linear-time approach for finding the "Next Greater Element." Iterating backwards allows the stack to maintain indices of future temperatures, ensuring each element is pushed and popped at most once.

## Complexity
*   **Time Complexity:** $O(n)$, where $n$ is the number of temperatures. Each index is pushed onto and popped from the stack exactly once.
*   **Space Complexity:** $O(n)$ in the worst case (e.g., temperatures in non-increasing order) to store the stack.

## Efficiency Feedback
*   **Performance:** Excellent. The solution minimizes overhead by using a single pass and stack operations.
*   **Optimization:** The memory usage is already optimal for this algorithm. If memory constraints were extremely tight, there is no better algorithmic alternative, though `std::vector` overhead is negligible here.

## Code Quality
*   **Readability:** Good. The logic is concise and follows standard idiomatic C++ for competitive programming.
*   **Structure:** Good. The reverse iteration makes the logic intuitive for a "Next Greater Element" problem.
*   **Naming:** Good. `ans`, `st`, and `temperatures` are clear and standard.
*   **Concrete Improvements:**
    *   **Reserve Stack Memory:** Since $n$ is known, you could technically use a `std::vector` as a stack to avoid dynamic memory allocation overhead associated with `std::stack` (which uses `std::deque` by default). 
    *   **Input optimization:** The pass-by-reference `vector<int>& temperatures` is correct and avoids unnecessary copies. 
    *   **Const correctness:** The parameter could be marked `const vector<int>&` since the input is not modified.

---

# Question Revision
### Revision Report: Daily Temperatures

**Pattern:** Monotonic Stack

**Brute Force:**
For each element, iterate through the remaining elements to find the first one larger than the current.
*   **Time Complexity:** $O(n^2)$
*   **Space Complexity:** $O(1)$

**Optimal Approach:**
Maintain a stack of indices for temperatures that haven't found a "warmer" day yet. Iterate through the array; whenever the current temperature is higher than the temperature at the index stored at the top of the stack, pop the stack and calculate the difference in indices.
*   **Time Complexity:** $O(n)$ (each index is pushed and popped at most once).
*   **Space Complexity:** $O(n)$ (worst case for a strictly decreasing sequence).

**The 'Aha' Moment:**
When the problem asks for the "next greater element" at each position, it implies you need to look ahead and compare against past values that haven't been resolved yet, which is the signature use case for a monotonic stack.

**Summary:**
Use a monotonic stack whenever you need to find the next element that is greater or smaller than the current element in linear time.

---