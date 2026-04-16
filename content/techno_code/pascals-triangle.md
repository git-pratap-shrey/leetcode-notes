---
title: "Pascal's Triangle"
slug: pascals-triangle
date: "2026-04-15"
---

# My Solution
~~~cpp
class Solution {
public:

    // function to generate a single row
    vector<int> generateRow(int row) {
        long long ans = 1;
        vector<int> ansRow;
        ansRow.push_back(1);

        for (int col = 1; col < row; col++) {
            ans = ans * (row - col);
            ans = ans / col;
            ansRow.push_back(ans);
        }

        return ansRow;
    }

    vector<vector<int>> generate(int numRows) {
        vector<vector<int>> ans;

        for (int i = 1; i <= numRows; i++) {
            ans.push_back(generateRow(i));
        }

        return ans;
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Combinatorial formula. It calculates each element of a row based on the previous element using the identity $C(n, k) = C(n, k-1) \times \frac{n-k+1}{k}$.
- **Optimality**: Optimal. The time complexity is the same as the additive approach ($O(N^2)$), as every element of the triangle must be computed.

## Complexity
- **Time Complexity**: $O(N^2)$, where $N$ is `numRows`. The nested loop structure calculates $\frac{N(N+1)}{2}$ elements.
- **Space Complexity**: $O(N^2)$ to store the resulting triangle.

## Efficiency Feedback
- **Arithmetic**: Using `long long` for the intermediate product is necessary to prevent overflow before the division, which is a correct safeguard.
- **Memory Allocation**: The `ansRow` vector is grown dynamically. Adding `ansRow.reserve(row);` would prevent multiple reallocations per row, reducing overhead.
- **Redundancy**: While this approach is mathematically sound, the standard additive approach (`row[i] = prev[i-1] + prev[i]`) is typically slightly faster as it avoids multiplication and division.

## Code Quality
- **Readability**: Good. The logic is straightforward and the helper function separates concerns.
- **Structure**: Good. Modular design allows for easy testing of individual rows.
- **Naming**: Good. Variable names like `ansRow` and `numRows` are descriptive.
- **Improvements**:
    - Use `ansRow.reserve(row)` to optimize memory allocation.
    - Use `std::move` or return value optimization (RVO) is already handled by the compiler, but the structure is clean.

---

# Question Revision
### Pascal's Triangle

**Pattern:** Simulation / Dynamic Programming (Iterative)

**Brute Force:** Use the combination formula $\binom{n}{k} = \frac{n!}{k!(n-k)!}$ to calculate each element independently. This is inefficient due to repeated factorial calculations and risk of integer overflow.

**Optimal Approach:** 
Construct the triangle row-by-row. The first and last elements of every row are always `1`. Every other element at index `j` is the sum of elements at index `j-1` and `j` from the preceding row.
- **Time Complexity:** $O(n^2)$ where $n$ is the number of rows.
- **Space Complexity:** $O(n^2)$ to store the resulting triangle.

**The 'Aha' Moment:** The fact that each value depends strictly on the two values directly above it signals a bottom-up construction pattern.

**Summary:** Build each row iteratively by summing adjacent pairs from the previous row.

---