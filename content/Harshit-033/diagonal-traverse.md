---
title: "Diagonal Traverse"
slug: diagonal-traverse
date: "2026-10-13"
---

# My Solution
~~~cpp
class Solution {
public:
    vector<int> findDiagonalOrder(vector<vector<int>>& mat) {
        int m=mat.size(),n=mat[0].size();
        vector<int> ans;

        int i=0,j=0,dir=1;

        while(ans.size()<m*n){
            ans.push_back(mat[i][j]);

            if(dir==1){
                if(j==n-1){
                    i++;
                    dir=-1;
                }
                else if(i==0){
                    j++;
                    dir=-1;
                }
                else{
                    i--;
                    j++;
                }
            }
            else{
                if(i==m-1){
                    j++;
                    dir=1;
                }
                else if(j==0){
                    i++;
                    dir=1;
                }
                else{
                    i++;
                    j--;
                }
            }
        }

        return ans;
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Simulation. The code tracks the current coordinates $(i, j)$ and a direction flag (`dir`), manually handling boundary conditions to bounce the traversal across the matrix diagonals.
- **Optimality**: Optimal. Every element is visited exactly once, and no unnecessary data structures are used.

## Complexity
- **Time Complexity**: $O(M \times N)$, where $M$ is the number of rows and $N$ is the number of columns.
- **Space Complexity**: $O(1)$ auxiliary space (excluding the output vector).

## Efficiency Feedback
- The implementation is efficient. 
- **Minor Optimization**: `ans.reserve(m * n)` could be used before the while loop to prevent multiple reallocations of the vector as it grows.

## Code Quality
- **Readability**: Good. The logic for direction switching and boundary checks is explicit and easy to follow.
- **Structure**: Good. The `if-else` branching correctly prioritizes corner cases (e.g., checking `j == n-1` before `i == 0` when moving up-right) to prevent index-out-of-bounds errors.
- **Naming**: Moderate. Variables `i`, `j`, `m`, `n` are standard for matrix problems, but `dir` is slightly ambiguous (though its usage as $1/-1$ is clear in context).
- **Concrete Improvements**: 
    - Use `const auto& mat` or similar if the signature allowed, but as per LeetCode's provided signature, it is fine.
    - Add `ans.reserve(m * n)` to optimize memory allocation.

---

# Question Revision
# Revision Report: Diagonal Traverse

- **Pattern**: Simulation / Coordinate Geometry
- **Brute Force**: Iterate through the matrix and group elements by the sum of their indices `(r + c)`. Since elements on the same diagonal share the same sum, store them in a map/list and reverse the lists for every odd-indexed diagonal before flattening them into a single array.
- **Optimal Approach**: 
    - Use a direction flag (`up = true/false`) to toggle between moving diagonally up-right and down-left.
    - **Up-Right**: Decrement row, increment column. Handle boundaries: if column exceeds `cols-1`, move down one row; if row drops below `0`, move right one column.
    - **Down-Left**: Increment row, decrement column. Handle boundaries: if row exceeds `rows-1`, move right one column; if column drops below `0`, move down one row.
    - **Complexity**: 
        - Time: $O(M \times N)$ where $M$ and $N$ are matrix dimensions.
        - Space: $O(1)$ (excluding the output array).
- **The 'Aha' Moment**: Recognizing that all elements on any given diagonal share a constant sum of indices `(r + c)`.
- **Summary**: Toggle directions and handle boundary collisions by shifting to the next row/column and reversing the direction.

---