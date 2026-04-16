---
title: "Maximal Rectangle"
slug: maximal-rectangle
date: "2026-04-16"
---

# My Solution
~~~cpp
class Solution {
public:
    
    int maxarea(vector<int>& arr, int i, int len){

        stack<int> s;
        int area = 0;
        int maxim = 0;

        for(int j = 0; j < len; j++){
            while(!s.empty() && arr[s.top()] >= arr[j]){
                int height = arr[s.top()];
                s.pop();

                int rs = j;
                int ls = s.empty() ? -1 : s.top();

                area = height * (rs - ls - 1);
                maxim = max(maxim, area);
            }
            s.push(j);
        }

        
        while(!s.empty()){
            int height = arr[s.top()];
            s.pop();

            int rs = len;
            int ls = s.empty() ? -1 : s.top();

            area = height * (rs - ls - 1);
            maxim = max(maxim, area);
        }

        return maxim;
    }

    
    int maxarr(vector<vector<char>>& matrix, vector<int>& arr, int i){
        int len = matrix[0].size();  // fixed ;

        for(int j = 0; j < len; j++){
            if(matrix[i][j] == '0'){
                arr[j] = 0;
            }
            else{
                arr[j] += 1;
            }
        }

        return maxarea(arr, i, len);
    }


    int maximalRectangle(vector<vector<char>>& matrix) {
        vector<int> arr(matrix[0].size(), 0);

        int m = 0;
        for(int i = 0; i < matrix.size(); i++){
            int current = maxarr(matrix, arr, i);
            m = max(m, current);
        }

        return m;
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Monotonic Stack + Histogram conversion.
- **Optimality**: Optimal. The solution converts each row into a histogram representing the height of consecutive '1's and solves the "Largest Rectangle in Histogram" problem for each row.

## Complexity
- **Time Complexity**: $O(R \times C)$, where $R$ is the number of rows and $C$ is the number of columns. Each cell is visited once during the histogram update and each column element is pushed/popped from the stack exactly once per row.
- **Space Complexity**: $O(C)$ to store the heights array and the stack.

## Efficiency Feedback
- The runtime is optimal.
- **Minor Overhead**: The code repeatedly allocates and deallocates the `stack<int> s` inside the `maxarea` function for every row. While the complexity remains $O(C)$, reusing a single stack or using a fixed-size array as a stack could marginally reduce allocation overhead.

## Code Quality
- **Readability**: Moderate. The logic is standard, but the function partitioning is slightly disjointed.
- **Structure**: Moderate. 
    - `maxarr` performs two distinct actions: updating the state (`arr`) and triggering the calculation (`maxarea`).
    - `maxarea` contains an unused parameter `int i`.
- **Naming**: Moderate.
    - `maxarr` is a vague name for a function that updates heights and computes area.
    - `maxim` is non-standard naming for a maximum variable (e.g., `max_area` or `ans` is preferred).
- **Concrete Improvements**:
    - Remove the unused `int i` from `maxarea`.
    - Rename `maxarr` to something more descriptive like `updateHeightsAndGetMax`.
    - The `len` variable inside `maxarr` is recalculated every row; it could be passed once or stored.

---

# Question Revision
### Maximal Rectangle

**Pattern:** Monotonic Stack / Histogram Transformation

**Brute Force:** 
Iterate through every possible pair of top-left and bottom-right coordinates, then validate if all cells within the resulting rectangle are '1'.
- **Time:** $O(R^3 C^3)$
- **Space:** $O(1)$

**Optimal Approach:**
Treat each row as the base of a histogram. For every row, update a `heights` array where `heights[j]` is the number of consecutive '1's ending at the current row. For each row's histogram, use a monotonic increasing stack to find the largest rectangle area in $O(C)$ time.
- **Time:** $O(R \times C)$
- **Space:** $O(C)$

**The 'Aha' Moment:** 
The problem becomes a 1D "Largest Rectangle in Histogram" problem if you treat each row as the ground and accumulate heights from the rows above.

**Summary:** 
Convert the 2D grid into a series of 1D histogram problems, processing one row at a time.

---