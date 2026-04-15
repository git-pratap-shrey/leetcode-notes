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
- **Technique**: Combinatorial mathematics. The solution uses the property $C(n, k) = C(n, k-1) \times \frac{n-k+1}{k}$ to calculate row elements iteratively.
- **Optimality**: Optimal in terms of time and space complexity ($O(N^2)$). While the standard DP approach (summing adjacent elements from the previous row) is more common and avoids multiplication/division, this mathematical approach is equally efficient for the given constraints.

## Complexity
- **Time Complexity**: $O(numRows^2)$ — There are two nested loops: one for the number of rows and one for the elements within each row.
- **Space Complexity**: $O(numRows^2)$ — Required to store the resulting Pascal's Triangle.

## Efficiency Feedback
- **Overflow Prevention**: The use of `long long` for the `ans` variable is critical. It prevents integer overflow during the multiplication `ans * (row - col)` before the division by `col` occurs.
- **Calculation**: The logic is efficient, though for extremely large `numRows` (beyond the scope of typical competitive programming constraints for this problem), even `long long` would overflow.

## Code Quality
- **Readability**: Good. The logic is straightforward and the helper function clearly separates the concerns of row generation from triangle construction.
- **Structure**: Good. The modular design makes the code easy to test and maintain.
- **Naming**: Moderate. `ans` and `ansRow` are generic; more descriptive names like `currentElement` and `currentRow` would be preferable.
- **Improvements**:
    - Use `ansRow.reserve(row)` inside `generateRow` to avoid multiple memory reallocations as the vector grows.
    - Use `const` for parameters that do not change (e.g., `int row`).

---

# Question Revision
### Pascal's Triangle

**Pattern:** Iterative Simulation / Dynamic Programming

**Brute Force:** Calculate each element independently using the combination formula $\binom{n}{k} = \frac{n!}{k!(n-k)!}$. This involves expensive factorial calculations and potential integer overflow.

**Optimal Approach:** 
Build the triangle row-by-row. Each element (except the boundaries) is the sum of the element directly above it and the element to the upper-left in the previous row: `row[i] = prev_row[i-1] + prev_row[i]`.

- **Time Complexity:** $O(n^2)$ — We must visit and calculate every element in the triangle.
- **Space Complexity:** $O(n^2)$ — To store the resulting $n$ rows.

**The 'Aha' Moment:** The dependency of the current row on the values of the immediately preceding row indicates a bottom-up iterative build.

**Summary:** Generate each row by summing adjacent pairs from the previous row and padding the ends with ones.

---