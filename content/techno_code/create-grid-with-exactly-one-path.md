---
title: "Create Grid With Exactly One Path"
slug: create-grid-with-exactly-one-path
date: "2026-10-27"
---

# My Solution
~~~cpp
class Solution {
public:
    vector<string> createGrid(int m, int n) {
        vector<string> grid(m);
        grid[0] = string(n, '.');
        string row = string(n - 1, '#') + ".";
        for (int i = 1; i < m; i++) {
                grid[i] = row;
         }
         return grid;
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Construction/Pattern-based. The code creates a grid where the first row is all open (`.`) and subsequent rows have only the last cell open (`.`), creating a "snake" or "L-shaped" path from $(0,0)$ to $(m-1, n-1)$.
- **Optimality**: **Incorrect/Suboptimal**. The solution fails to ensure "Exactly One Path." Depending on the problem's constraints on connectivity and obstacles, this specific layout creates a unique path, but it does not account for the requirement that the path must be the *only* way to reach the destination without creating isolated components or violating specific grid constraints usually associated with this problem (e.g., the requirement that the grid must be filled such that no other paths exist). More importantly, if $m > 1$ and $n > 1$, the path is unique, but the construction is overly simplistic and may not satisfy all edge cases of the problem statement.

## Complexity
- **Time Complexity**: $O(m \times n)$ to initialize and fill the grid.
- **Space Complexity**: $O(m \times n)$ to store the resulting grid.

## Efficiency Feedback
- **Runtime/Memory**: Optimal for the given output size.
- **Optimizations**: No meaningful optimizations possible for $O(m \times n)$ output.

## Code Quality
- **Readability**: Good. The logic is straightforward.
- **Structure**: Good.
- **Naming**: Good.
- **Concrete Improvements**:
    - The `row` string is constructed once outside the loop, which is efficient.
    - **Logic Warning**: The current construction creates a path: $(0,0) \to (0, n-1) \to (1, n-1) \to \dots \to (m-1, n-1)$. While this is a single path, it relies on the assumption that "Exactly One Path" refers to the path from start to end. If the problem requires the grid to be "full" or follow specific connectivity rules, this may be too naive.

---

# Question Revision
# Revision Report: Create Grid With Exactly One Path

- **Pattern:** Constructive Algorithm / Grid Manipulation.
- **Brute Force:** Try every possible combination of $0$s and $1$s in the grid and run a BFS/DFS to count the number of unique paths from $(0,0)$ to $(n-1, m-1)$. This is computationally impossible due to $2^{n \times m}$ combinations.
- **Optimal Approach:** 
    - **Logic:** To ensure exactly one path, create a "snake-like" corridor. Fill the grid with $1$s (obstacles), then carve a path of $0$s that traverses every possible row/column in a zig-zag manner. 
    - Specifically, move right across the first row, drop down to the second row at the last column, move left across the second row, drop down at the first column, and repeat.
    - **Complexity:** 
        - Time: $O(n \times m)$ to populate the grid.
        - Space: $O(1)$ if excluding the output grid, $O(n \times m)$ otherwise.
- **The 'Aha' Moment:** The requirement for "exactly one path" in a grid suggests that any branching point must be blocked, forcing a Hamiltonian-like path that visits nodes in a deterministic sequence.
- **Summary:** Use a zig-zag (snake) pattern of $0$s surrounded by $1$s to eliminate all alternative routes.

---