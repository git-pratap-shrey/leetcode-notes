---
title: "Search a 2D Matrix"
slug: search-a-2d-matrix
date: "2026-10-04"
---

# My Solution
~~~cpp
class Solution {
public:
    bool searchMatrix(vector<vector<int>>& mat, int target) {
         int rows = mat.size();
        int cols = mat[0].size();
        int low = 0;
        int high =rows-1;
        int row = -1;
        while(low<=high){
            int guess = (low+high)/2;
            if(mat[guess][0]==target){
                row = guess;
                break;
            }
            else if(mat[guess][0]<target){
                row= guess;
                low=guess+1;
            }
            else{
                high = guess-1;
            }
        } 
        if(row==-1){
            return false;
        }
        low = 0;
        high = cols-1;
        while(low<=high){
            int guess = (low+high)/2;
            if(mat[row][guess]==target){
                return true;
            }
            else if(mat[row][guess]<target){
                low = guess+1;
            }
            else{
                high = guess-1;
            }
        }
        return false;
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Two-step Binary Search. The first binary search identifies the potential row containing the target by checking the first element of each row. The second binary search searches for the target within that specific row.
- **Optimality**: Optimal. The logic leverages the sorted properties of the matrix to achieve logarithmic time complexity.

## Complexity
- **Time Complexity**: $O(\log(\text{rows}) + \log(\text{cols}))$, which simplifies to $O(\log(\text{rows} \times \text{cols}))$.
- **Space Complexity**: $O(1)$ as only a few integer variables are used regardless of input size.

## Efficiency Feedback
- The approach is highly efficient.
- **Minor Optimization**: The matrix can be treated as a single sorted array of size `rows * cols`. A single binary search using index mapping `mat[mid / cols][mid % cols]` would reduce the code length and eliminate the need for two separate loops, though the asymptotic complexity remains the same.

## Code Quality
- **Readability**: Moderate. The logic is clear, but the lack of spacing around operators (e.g., `low<=high`, `high =rows-1`) makes it slightly dense.
- **Structure**: Good. The separation of row-selection and element-searching is logical.
- **Naming**: Moderate. `guess` is an acceptable name for a midpoint, though `mid` is more conventional in binary search implementations. `mat` is acceptable, but `matrix` is more descriptive.
- **Improvements**: 
    - Use `int mid = low + (high - low) / 2;` instead of `(low + high) / 2` to prevent potential integer overflow for very large matrices.
    - Consistently use whitespace around operators for better legibility.

---

# Question Revision
# Revision Report: Search a 2D Matrix

- **Pattern:** Binary Search (Virtual Flattening)
- **Brute Force:** Iterate through every row and column using nested loops to find the target.
  - Time: $O(m \times n)$
  - Space: $O(1)$
- **Optimal Approach:** Treat the $m \times n$ matrix as a single sorted array. Map the 1D index back to 2D coordinates using `row = index // n` and `col = index % n` to perform a standard binary search.
  - Time: $O(\log(m \times n))$
  - Space: $O(1)$
- **The 'Aha' Moment:** The property that the first integer of each row is greater than the last integer of the previous row indicates the entire matrix is strictly sorted in a linear sequence.
- **Summary:** Flatten the 2D sorted matrix into a virtual 1D array to apply a single Binary Search.

---