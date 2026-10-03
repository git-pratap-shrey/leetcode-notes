---
title: "Reverse Pairs"
slug: reverse-pairs
date: "2026-09-27"
---

# My Solution
~~~java
class Solution {
    public int numSubmatrixSumTarget(int[][] matrix, int target) {
        int m = matrix.length;
        int n = matrix[0].length;
        for(int row=0;row<m;row++){
            for(int col=1;col<n;col++){
                matrix[row][col] += matrix[row][col-1];
            }
        }
        int count = 0;
        for(int c1=0;c1<n;c1++){
            for(int c2=c1;c2<n;c2++){
                Map<Integer,Integer> map = new HashMap<>();
                map.put(0,1);
                int sum = 0;
                for(int r=0;r<m;r++){
                    sum += matrix[r][c2]-(c1>0 ?matrix[r][c1-1]:0);
                    count += map.getOrDefault(sum-target,0);
                    map.put(sum,map.getOrDefault(sum,0)+1);
                }
            }
        }
        return count;
    }
}
~~~

# Submission Review
## Approach
- **Technique**: 2D Prefix Sums combined with a Hash Map (Subarray Sum Equals K pattern). The code reduces the 2D problem into a 1D problem by fixing column boundaries ($c1, c2$) and iterating through rows.
- **Optimality**: This is the optimal approach for this specific problem (Number of Submatrices That Sum to Target), with a complexity of $O(n^2 \cdot m)$.
- **Note**: The provided code solves "Number of Submatrices That Sum to Target," **not** "Reverse Pairs" as stated in the problem prompt.

## Complexity
- **Time Complexity**: $O(n^2 \cdot m)$, where $n$ is the number of columns and $m$ is the number of rows.
- **Space Complexity**: $O(m)$ to store the prefix sums in the `HashMap` for each column pair iteration.

## Efficiency Feedback
- **Runtime**: The use of `HashMap<Integer, Integer>` introduces significant overhead due to boxing/unboxing of `Integer` objects. In competitive programming, replacing this with a primitive array (if the range allows) or a more optimized map would be faster.
- **Memory**: The space complexity is efficient, as the map is cleared/re-initialized for every column pair.
- **Bottleneck**: The nested loop structure is necessary, but the constant factor from `HashMap` is the primary bottleneck.

## Code Quality
- **Readability**: Moderate. The logic is compact, but the lack of spaces around operators and minimal indentation makes it slightly dense.
- **Structure**: Good. The logic flows logically from row-wise prefix sums to the search phase.
- **Naming**: Poor. Variables like `m`, `n`, `c1`, `c2`, and `r` are overly brief. `c1` and `c2` should be `colStart` and `colEnd`.
- **Concrete Improvements**:
    1. **Fix Problem Mismatch**: The code solves a different problem than "Reverse Pairs."
    2. **Naming**: Use descriptive names for dimensions and loop indices.
    3. **Performance**: Use `matrix[r][c2] - (c1 == 0 ? 0 : matrix[r][c1-1])` for slightly better clarity than the ternary inside the sum.

---

# Question Revision
# Revision Report: Reverse Pairs

- **Pattern**: Divide and Conquer (Modified Merge Sort)
- **Brute Force**: Use nested loops to check every pair $(i, j)$ where $i < j$ and verify if $nums[i] > 2 \times nums[j]$.
    - **Complexity**: Time: $O(n^2)$, Space: $O(1)$.
- **Optimal Approach**: 
    - Utilize the **Merge Sort** framework. While merging two sorted halves (left and right), since both halves are internally sorted, we can use a two-pointer approach to count reverse pairs efficiently.
    - For each element in the left half, we move a pointer in the right half as far as the condition $nums[i] > 2 \times nums[j]$ holds. Because the left half is also sorted, the pointer in the right half does not need to reset for the next $i$.
    - **Complexity**: Time: $O(n \log n)$, Space: $O(n)$ for the temporary merging array.
- **The 'Aha' Moment**: When a problem asks for pairs $(i < j)$ satisfying a specific inequality, and $O(n^2)$ is too slow, it is a strong signal to use a Modified Merge Sort to count pairs during the merge step.
- **Summary**: Count the pairs using a moving pointer during the merge step of a Merge Sort to leverage the sorted property of subarrays.

---