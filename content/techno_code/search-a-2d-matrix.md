---
title: "Search a 2D Matrix"
slug: search-a-2d-matrix
date: "2026-08-22"
---

# My Solution
~~~cpp
class Solution {
public:
    bool searchMatrix(vector<vector<int>>& matrix, int target) {
        int m=matrix.size();
        int n=matrix[0].size();
        int low=0;
        int high=m*n-1;
        while(low<=high){
            int mid=low+(high-low)/2;
            int r=mid/n;
            int c=mid%n;
            if(matrix[r][c]==target){
                return true;
            }
            else if(matrix[r][c]<target){
                low=mid+1;
            }
            else{
                high=mid-1;
            }
        }
        return false;
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Binary Search on a virtual 1D array.
- **Optimality**: Optimal. By treating the $m \times n$ matrix as a single sorted list, the search space is reduced logarithmically.

## Complexity
- **Time Complexity**: $O(\log(m \times n))$, where $m$ is the number of rows and $n$ is the number of columns.
- **Space Complexity**: $O(1)$ as no additional data structures are used.

## Efficiency Feedback
- The implementation is highly efficient. 
- Using `mid = low + (high - low) / 2` correctly prevents potential integer overflow that would occur with `(low + high) / 2`.
- Index mapping via `/` and `%` operators is the standard and most efficient way to handle virtual 1D-to-2D conversion.

## Code Quality
- **Readability**: Good. The logic is concise and follows standard binary search patterns.
- **Structure**: Good.
- **Naming**: Moderate. While `m`, `n`, `r`, and `c` are common in competitive programming, using more descriptive names (e.g., `rows`, `cols`, `row`, `col`) would improve maintainability.
- **Improvements**:
    - Add a guard clause to check if the matrix is empty (`matrix.empty() || matrix[0].empty()`) to prevent runtime errors on empty inputs, depending on the problem's constraints.

---

# Question Revision
### Search a 2D Matrix

**Pattern:** Binary Search

**Brute Force:** 
Iterate through every element in the matrix using nested loops until the target is found.
- **Time:** $O(m \times n)$
- **Space:** $O(1)$

**Optimal Approach:**
Treat the matrix as a single, flattened sorted array. Perform a binary search on the range $[0, (m \times n) - 1]$. Map the 1D index `mid` back to 2D coordinates using:
- `row = mid / cols`
- `col = mid % cols`

- **Time:** $O(\log(m \times n))$
- **Space:** $O(1)$

**The 'Aha' Moment:** 
The constraint that the first integer of a row is greater than the last integer of the previous row reveals the matrix is essentially one long sorted list.

**Summary:** 
Map 2D coordinates to a 1D index to perform a single binary search over the entire matrix.

---