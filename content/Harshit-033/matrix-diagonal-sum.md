---
title: "Matrix Diagonal Sum"
slug: matrix-diagonal-sum
date: "2026-06-04"
---

# My Solution
~~~cpp
class Solution {
public:
    int diagonalSum(vector<vector<int>>& mat) {
        int s=mat.size();
        int sum=0;
        for(int i=0;i<s;i++){
            sum=sum+mat[i][i]+mat[i][s-1-i];
            if(i==s-1-i){
                sum=sum-mat[i][s-1-i];
            }
        }
        return sum;
        
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Single-pass linear iteration.
- **Optimality**: Optimal. The algorithm visits each element of the two diagonals exactly once.

## Complexity
- **Time Complexity**: $O(n)$, where $n$ is the dimension of the square matrix.
- **Space Complexity**: $O(1)$ auxiliary space.

## Efficiency Feedback
- The runtime and memory usage are minimal.
- **Minor Optimization**: The conditional check `if(i == s-1-i)` runs $n$ times. This can be replaced by adding the primary and secondary diagonals fully and then subtracting the center element once at the end if $n$ is odd: `if (s % 2 != 0) sum -= mat[s/2][s/2];`.

## Code Quality
- **Readability**: Good. The logic is straightforward and easy to follow.
- **Structure**: Good. The logic is contained within a single efficient loop.
- **Naming**: Moderate. `s` is vague (prefer `n` or `size`); `sum` is acceptable but generic.
- **Concrete Improvements**: 
    - Use compound assignment operators (e.g., `sum += ...`) for brevity.
    - Use `const auto&` or ensure the matrix size is stored in a `size_t` to avoid signed/unsigned comparison warnings if the compiler settings are strict.

---

# Question Revision
### Matrix Diagonal Sum

**Pattern:** Array/Matrix Traversal (Single Pass)

**Brute Force:** Use two separate loops: one to iterate through the primary diagonal `mat[i][i]` and another for the secondary diagonal `mat[i][n-1-i]`, then manually check if the matrix size is odd to subtract the overlapping center element.

**Optimal Approach:** 
Iterate through the matrix once using a single loop from $0$ to $n-1$. In each iteration, add both `mat[i][i]` (primary) and `mat[i][n-1-i]` (secondary) to the total. If $n$ is odd, subtract the center element `mat[n/2][n/2]` once at the end to account for the overlap.

*   **Time Complexity:** $O(n)$ where $n$ is the side length of the matrix.
*   **Space Complexity:** $O(1)$.

**The 'Aha' Moment:** The indices for both diagonals can be expressed as functions of a single iterator $i$, allowing a simultaneous traversal.

**Summary:** Sum both diagonals in one loop and subtract the center element if the dimension is odd.

---