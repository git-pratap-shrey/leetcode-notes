---
title: "Largest Rectangle in Histogram"
slug: largest-rectangle-in-histogram
date: "2026-04-15"
---

# My Solution
~~~java
class Solution {
    public int largestRectangleArea(int[] heights) {
        int maxarea = 0;
        int n = heights.length;
        int nse[] = nse(heights);
        int psee[] = psee(heights);
        for(int i=0;i<n;i++){
            int width = (nse[i]-1)-(psee[i]+1)+1;
            int area = heights[i]*width;
            maxarea = Math.max(maxarea,area);
        }
        return maxarea;
    }
    public int[] nse(int[] arr){
        Stack<Integer> st = new Stack<>();
        int n = arr.length;
        int nse[] = new int[n];
        for(int i=n-1;i>=0;i--){
            while(!st.isEmpty() && arr[st.peek()]>=arr[i]){
                st.pop();
            }
            nse[i] = st.isEmpty() ?n:st.peek();
            st.push(i);
        }
        return nse;
    }
    public int[] psee(int[] arr){
        Stack<Integer> st = new Stack<>();
        int n = arr.length;
        int psee[] = new int[n];
        for(int i=0;i<n;i++){
            while(!st.isEmpty() && arr[st.peek()]>arr[i]){
                st.pop();
            }
            psee[i] = st.isEmpty() ?-1:st.peek();
            st.push(i);
        }
        return psee;
    }
}
~~~

# Submission Review
## Approach
- **Technique**: Monotonic Stack.
- **Optimality**: Optimal. The solution correctly identifies the left and right boundaries for each bar to determine the maximum rectangle it can sustain, which is the standard $O(n)$ approach for this problem.

## Complexity
- **Time Complexity**: $O(n)$. The code performs three linear passes: one to find the Next Smaller Element (`nse`), one for the Previous Smaller Element (`psee`), and one to calculate the maximum area. Each element is pushed and popped from the stack at most once per pass.
- **Space Complexity**: $O(n)$. It allocates two arrays of size $n$ to store indices and uses stacks that can grow up to size $n$.

## Efficiency Feedback
- **Stack Implementation**: The code uses `java.util.Stack`, which is synchronized and generally slower. Using `java.util.ArrayDeque` as a stack is more efficient in Java.
- **Redundant Calculations**: The width formula `(nse[i]-1)-(psee[i]+1)+1` simplifies mathematically to `nse[i] - psee[i] - 1`, which would slightly reduce arithmetic operations.
- **Passes**: While $O(n)$, the logic uses three passes. This can be optimized to a single pass using a single stack, though the current implementation is more modular.

## Code Quality
- **Readability**: Moderate. The logic is clear, but the naming conventions are shorthand (`nse`, `psee`).
- **Structure**: Good. The logic is well-decomposed into helper methods.
- **Naming**: Moderate. 
    - `nse` and `psee` are cryptic; `nextSmaller` and `prevSmaller` would be clearer.
    - `maxarea` should follow camelCase (`maxArea`) per Java conventions.
- **Concrete Improvements**:
    - Replace `Stack<Integer>` with `Deque<Integer> stack = new ArrayDeque<>()`.
    - Simplify `width` calculation to `nse[i] - psee[i] - 1`.
    - Rename helper methods for clarity.

---

# Question Revision
### Largest Rectangle in Histogram

**Pattern:** Monotonic Stack

**Brute Force:** 
Iterate through every possible pair of boundaries $(i, j)$, find the minimum height within that range, and calculate the area.
- **Complexity:** $O(n^2)$ time, $O(1)$ space.

**Optimal Approach:** 
Maintain a stack of indices where heights are in non-decreasing order. When a bar is encountered that is shorter than the bar at the stack's top, pop the top bar and calculate the area using the popped bar as the height. The width is determined by the distance between the current index and the index of the element now at the top of the stack.
- **Time Complexity:** $O(n)$ — each element is pushed and popped exactly once.
- **Space Complexity:** $O(n)$ — to store the stack.

**The 'Aha' Moment:** 
The need to find the first smaller element to both the left and right of every bar to determine its maximum possible width points directly to a Monotonic Stack.

**Summary:** 
Use a monotonic increasing stack to track heights and trigger area calculations as soon as a shorter bar "breaks" the trend.

---