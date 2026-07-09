--- title: "Largest Rectangle in Histogram" slug: largest-rectangle-in-histogram date: "2026-06-18" ---  # My Solution ~~~class Solution {
public:
    int largestRectangleArea(vector<int>& heights) {

        int n = heights.size();

        vector<int> left(n);
        vector<int> right(n);

        stack<int> st;

        for(int i = 0; i < n; i++) {

            while(!st.empty() &&
                  heights[st.top()] >= heights[i]) {
                st.pop();
            }

            if(st.empty()) {
                left[i] = -1;
            }
            else {
                left[i] = st.top();
            }

            st.push(i);
        }

        while(!st.empty()) st.pop();

        
        for(int i = n - 1; i >= 0; i--) {

            while(!st.empty() &&
                  heights[st.top()] >= heights[i]) {
                st.pop();
            }

            if(st.empty()) {
                right[i] = n;
            }
            else {
                right[i] = st.top();
            }

            st.push(i);
        }

        int ans = 0;

        for(int i = 0; i < n; i++) {

            int width = right[i] - left[i] - 1;

            int area = heights[i] * width;

            ans = max(ans, area);
        }

        return ans;
    }
}; - cpp~~~  # Submission Review ## Approach
- **Technique:** Monotonic Stack.
- **Optimality:** Optimal. It uses a monotonic stack to precompute the boundaries (nearest smaller element to the left and right) for every bar in $O(n)$ time.

## Complexity
- **Time Complexity:** $O(n)$. Each index is pushed onto and popped from the stack at most twice across the two boundary-finding loops.
- **Space Complexity:** $O(n)$ to store the `left` and `right` boundary arrays and the stack.

## Efficiency Feedback
- **Performance:** The implementation is highly efficient. 
- **Optimization:** While a single-pass approach exists (calculating area as elements are popped from the stack), the current three-pass approach (left, right, then area) is $O(n)$ and maintains better clarity without any significant performance penalty.

## Code Quality
- **Readability:** Good. The logic is split into clear phases, and the use of whitespace makes it easy to scan.
- **Structure:** Good. The flow is linear and logical: calculate left limits $\rightarrow$ clear stack $\rightarrow$ calculate right limits $\rightarrow$ compute maximum area.
- **Naming:** Good. Variables like `left`, `right`, and `st` (stack) are standard and intuitive in this context.
- **Improvements:**
    - `ans` could be declared as `long long` if the problem constraints allowed for areas exceeding $2^{31}-1$, though for standard LeetCode constraints on this problem, `int` suffices.
    - The `while(!st.empty()) st.pop();` can be replaced with `st = stack<int>();` or simply declaring a new stack to be more idiomatic.  ---  # Question Revision ### Largest Rectangle in Histogram

**Pattern:** Monotonic Stack

**Brute Force:** Iterate through every possible pair of boundaries $(i, j)$, find the minimum height $h$ within that range, and calculate $\text{area} = h \times (j - i + 1)$. 
- Time: $O(n^2)$
- Space: $O(1)$

**Optimal Approach:** Maintain a stack of indices with heights in non-decreasing order. When a height shorter than the stack top is encountered, pop the stack; the popped height is the minimum height of a rectangle that extends from the index after the new stack top to the current index.
- Time: $O(n)$
- Space: $O(n)$

**The 'Aha' Moment:** The maximum area is determined by the distance between the first smaller element to the left and the first smaller element to the right of each bar.

**Summary:** Use a monotonic stack to find the left and right boundaries where each bar serves as the shortest height.  ---