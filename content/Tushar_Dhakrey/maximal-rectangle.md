---
title: "Maximal Rectangle"
slug: maximal-rectangle
date: "2026-04-18"
---

# My Solution
~~~java
class Solution {
    public int maximalRectangle(char[][] matrix) {
        int n = matrix.length;
        int m = matrix[0].length;
        int maxrea = 0;
        int prefix[][] = new int[n][m];
        for(int j=0;j<m;j++){
            int sum = 0;
            for(int i=0;i<n;i++){
                sum += (matrix[i][j]-'0');
                if(matrix[i][j]=='0'){
                    sum = 0;
                }
                prefix[i][j] = sum;
            }
            
        }
        for(int i=0;i<n;i++){
            maxrea = Math.max(maxrea,largestRectangleArea(prefix[i]));
        }
        return maxrea;
    }
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
- **Technique**: The solution treats each row of the matrix as the base of a histogram. It transforms the 2D binary matrix into a series of 1D histogram problems. For each row, it calculates the heights of consecutive '1's and then applies the **Monotonic Stack** technique to find the largest rectangle area in that histogram.
- **Optimality**: The approach is asymptotically optimal in terms of time complexity $O(n \times m)$.

## Complexity
- **Time Complexity**: $O(n \times m)$, where $n$ is the number of rows and $m$ is the number of columns. Each cell is visited a constant number of times during prefix calculation and stack processing.
- **Space Complexity**: $O(n \times m)$ due to the `prefix` matrix. This is suboptimal; it can be reduced to $O(m)$ by using a 1D array to track heights.

## Efficiency Feedback
- **Memory Bottleneck**: The `int prefix[][]` array stores heights for the entire matrix. Since each row's calculation only depends on the previous row, a single `int[] heights` array of size $m$ updated in-place would reduce space from $O(n \times m)$ to $O(m)$.
- **Java Collections**: The code uses `java.util.Stack`. In Java, `Stack` is synchronized and extends `Vector`, which incurs unnecessary overhead. `ArrayDeque` is the preferred implementation for a stack.
- **Redundant Passes**: The `largestRectangleArea` method makes two separate passes (one for `nse` and one for `psee`). This can be optimized into a single pass using a single monotonic stack.

## Code Quality
- **Readability**: Moderate. The logic is clear, but variable names like `maxrea`, `nse`, and `psee` are overly abbreviated.
- **Structure**: Good. The problem is decomposed into logical helper methods (`nse`, `psee`, `largestRectangleArea`).
- **Naming**: Poor. `prefix` is a misleading name for a height map; `heights` would be more accurate. `nse` (Next Smaller Element) and `psee` (Previous Smaller or Equal Element) are jargon.
- **Concrete Improvements**:
    1. Replace `Stack<Integer>` with `ArrayDeque<Integer>`.
    2. Replace the 2D `prefix` array with a 1D `int[]` array updated per row.
    3. Consolidate `nse` and `psee` logic into one loop within `largestRectangleArea`.

---

# Question Revision
### Maximal Rectangle

**Pattern:** Monotonic Stack / Histogram-based DP

**Brute Force:**
Check every possible pair of top-left and bottom-right coordinates $(r1, c1)$ and $(r2, c2)$, then verify if all elements within that subgrid are '1'.
*   **Complexity:** $O(R^3 C^3)$

**Optimal Approach:**
Treat each row of the matrix as the base of a histogram. For every row, maintain an array of heights where the height is the number of consecutive '1's ending at that row. For each row's height array, apply the **Largest Rectangle in Histogram** algorithm using a monotonic increasing stack to find the maximum area.
*   **Time Complexity:** $O(R \times C)$
*   **Space Complexity:** $O(C)$

**The 'Aha' Moment:**
Recognizing that a 2D grid of ones can be decomposed into multiple 1D histogram problems by treating each row as the ground.

**Summary:**
Convert the matrix into row-by-row histograms and solve each using a monotonic stack.

---