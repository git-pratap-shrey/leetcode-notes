---
title: "Number of Submatrices That Sum to Target"
slug: number-of-submatrices-that-sum-to-target
date: "2026-09-27"
---

# My Solution
~~~java
class Solution {
    public boolean canTransform(int[] source, int[] target) {
        long s = 0;
        long t = 0;
        for(int i=0;i<source.length;i++){
            s += source[i];
            t += target[i];
        }
        if(s==t){
            return true;
        }
        return false;
    }
}
~~~

# Submission Review
## Approach
- **Technique:** Summation check.
- **Optimality:** **Not optimal/Incorrect.** The solution calculates the sum of two arrays and returns true if they are equal. This is a fundamentally incorrect approach for the "Number of Submatrices That Sum to Target" problem, as it neither handles 2D arrays (matrices) nor counts submatrices. In fact, the code appears to be a failed attempt at a completely different problem (likely "Check if Two String Arrays are Equivalent" or "Transform String").

## Complexity
- **Time Complexity:** $O(N)$, where $N$ is the length of the input array.
- **Space Complexity:** $O(1)$.
- **Bottleneck:** The logic is conceptually wrong; it solves for array sum equality rather than submatrix counting.

## Efficiency Feedback
- While the runtime is $O(N)$, it is irrelevant because the code does not address the requirements of the problem statement (it expects `int[][]` inputs for submatrices, but uses `int[]`).

## Code Quality
- **Readability:** Poor. The method name `canTransform` contradicts the problem title "Number of Submatrices That Sum to Target."
- **Structure:** Poor. The logic does not match the problem domain.
- **Naming:** Poor. Variable names `s` and `t` are overly brief.
- **Improvements:** 
    - The entire implementation must be replaced.
    - Use a 2D prefix sum array and a HashMap to count submatrices that sum to the target.
    - Change the method signature to accept `int[][] matrix` and return `int`.

---

# Question Revision
### Revision Report: Number of Submatrices That Sum to Target

- **Pattern**: 2D Prefix Sum $\rightarrow$ 1D Subarray Sum (Hash Map)
- **Brute Force**: Iterate through all possible top-left $(r1, c1)$ and bottom-right $(r2, c2)$ coordinates and calculate the sum of the rectangle using a 2D prefix sum array.
    - **Complexity**: $O(N^2 \cdot M^2)$
- **Optimal Approach**: 
    1. Fix the left and right column boundaries ($c1$ and $c2$).
    2. For each fixed pair of columns, compress the 2D area into a 1D array where each element is the sum of that row between $c1$ and $c2$.
    3. Solve the "Subarray Sum Equals K" problem on this 1D array using a Hash Map to track prefix sums.
    - **Time Complexity**: $O(M^2 \cdot N)$ (where $M$ is columns, $N$ is rows)
    - **Space Complexity**: $O(N)$ to store the prefix sum map.
- **The 'Aha' Moment**: The requirement for a specific "Target Sum" in a 1D array suggests a Hash Map, and fixing two boundaries allows us to treat a 2D slice as a 1D array.
- **Summary**: Reduce the 2D problem to 1D by fixing column boundaries and applying the prefix sum hash map technique.

---