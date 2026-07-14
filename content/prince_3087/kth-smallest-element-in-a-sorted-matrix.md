---
title: "Kth Smallest Element in a Sorted Matrix"
slug: kth-smallest-element-in-a-sorted-matrix
date: "2026-06-09"
---

# My Solution
~~~cpp
class Solution {
public:
    int fun(vector<vector<int>>& mat , int n , int m , int guess){
            int row = n-1;
            int column = 0 , count =0;
            while(row>=0 && column<m){
                if(mat[row][column]<=guess){
                    count = count + row +1;
                    column++;
                }
                else{
                    row--;
                }
            }
        return count;
    }
    int kthSmallest(vector<vector<int>>& mat, int k) {
        int n = mat.size();
        int m = mat[0].size() , res = 0;
        int low = mat[0][0];
        int high = mat[n-1][m-1];
        while(low<=high){
            int guess = (low+high)/2;
            int ans = fun(mat , n , m , guess);
            if(ans < k){
                low = guess+1;
            }
            else{
                res = guess;
                high = guess -1 ;
            }
            
        }
        return res;    
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Binary Search on the value range combined with a "Staircase Search" (two-pointer approach) to count elements.
- **Optimality**: Optimal. The staircase search leverages the sorted property of both rows and columns to count elements in $O(n + m)$ time, which is more efficient than a naive $O(n \log m)$ search per guess.

## Complexity
- **Time Complexity**: $O((n + m) \log(\text{max} - \text{min}))$, where $n$ and $m$ are matrix dimensions and $\text{max}/\text{min}$ are the matrix boundary values.
- **Space Complexity**: $O(1)$, as it only uses a few integer variables regardless of input size.

## Efficiency Feedback
- **Runtime**: Very efficient. The logarithmic factor depends on the range of values rather than the number of elements.
- **Potential Overflow**: `int guess = (low + high) / 2;` is susceptible to integer overflow if `low` and `high` are very large. Using `low + (high - low) / 2` is safer.

## Code Quality
- **Readability**: Moderate. The logic is clear, but the naming is generic.
- **Structure**: Good. The counting logic is decoupled into a helper function.
- **Naming**: Poor. 
    - `fun` is non-descriptive; `countLessEqual` would be better.
    - `ans` and `res` are generic; `count` and `result` would be clearer.
- **Concrete Improvements**:
    - Change `int guess = (low + high) / 2` to `int guess = low + (high - low) / 2`.
    - Rename `fun` to something that describes its purpose (e.g., `countSmallerOrEqual`).
    - Use `const vector<vector<int>>&` in the helper function to explicitly signal that the matrix is not modified.

---

# Question Revision
### Kth Smallest Element in a Sorted Matrix

**Pattern:** Binary Search on Value Range

**Brute Force:** 
Flatten the $n \times n$ matrix into a 1D array, sort the array, and return the element at index $k-1$.
- **Time:** $O(n^2 \log n)$
- **Space:** $O(n^2)$

**Optimal Approach:** 
Perform binary search on the range of values between the smallest element `matrix[0][0]` and the largest element `matrix[n-1][n-1]`. For each `mid` value, count how many elements are less than or equal to `mid` by starting from the bottom-left corner and moving up/right (staircase search).
- **Time:** $O(n \cdot \log(\text{max} - \text{min}))$
- **Space:** $O(1)$

**The 'Aha' Moment:** 
The dual-sorting (rows and columns) allows you to count elements smaller than a target in $O(n)$ time, turning the search for a rank into a binary search over the value range.

**Summary:** 
Binary search the value space and use a linear staircase scan to count elements until the $k$-th smallest is found.

---