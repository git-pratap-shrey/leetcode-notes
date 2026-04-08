---
title: "Max Area of Island"
slug: max-area-of-island
date: "2026-04-08"

---
---

# My Solution
~~~cpp
class Solution {
public:
    int dfs(vector<vector<int>>& grid, vector<vector<bool>>& dp, int i, int j) {
        if (i >= grid.size() || j >= grid[0].size() || grid[i][j] == 0 || dp[i][j]) {
            return 0;
        }
        // cout<<i<<" "<<j<<"->"<<grid[i][j]<<endl;


        grid[i][j] = 0;
        dp[i][j] = 1;

        return 1 + dfs(grid, dp, i + 1, j) + dfs(grid, dp, i - 1, j) + dfs(grid, dp, i, j + 1) + dfs(grid, dp, i, j - 1);
        
    }

    int maxAreaOfIsland(vector<vector<int>>& grid) {
        int MaxIslandArea = 0;

        vector<vector<bool>> dp(grid.size(), vector<bool>(grid[0].size()));

        for (int i = 0; i < grid.size(); i++) {
            for (int j = 0; j < grid[0].size(); j++) {
                if(grid[i][j] == 1){
                    MaxIslandArea = max(MaxIslandArea, dfs(grid, dp, i, j));
                }

            }
        }

        return MaxIslandArea;
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Depth-First Search (DFS) for graph traversal to compute connected component sizes.
*   **Optimality:** Optimal in terms of algorithmic logic, but the implementation is redundant (see Efficiency).

## Complexity
*   **Time Complexity:** $O(R \times C)$, where $R$ is rows and $C$ is columns. Each cell is visited once.
*   **Space Complexity:** $O(R \times C)$. The recursion stack can go up to $O(R \times C)$ in the worst case, and the `dp` table uses $O(R \times C)$ extra space.

## Efficiency Feedback
*   **Redundant Memory:** The `dp` table is entirely redundant. The code already modifies the input `grid` (setting `grid[i][j] = 0`), which effectively serves as a "visited" marker. 
*   **Impact:** By removing the `dp` table, you save $O(R \times C)$ space and reduce memory allocation overhead.

## Code Quality
*   **Readability:** Moderate. The presence of unused/redundant logic (`dp` table) confuses the reader's understanding of the algorithm.
*   **Structure:** Moderate. The recursion logic is standard, but the `if` checks in `dfs` could be cleaner by handling negative bounds explicitly (current code relies on implicit behavior if `i-1` or `j-1` is passed, but the base case `i >= grid.size()` fails to account for `i < 0`).
*   **Naming:** Moderate. `MaxIslandArea` follows PascalCase, while the rest of the function uses camelCase. Stick to one convention (typically camelCase for variables).

### Concrete Improvements
1.  **Remove the `dp` table:** Rely solely on the `grid[i][j] = 0` modification to mark visited nodes.
2.  **Fix Bound Checks:** Update the base case to handle negative indices safely:
    ```cpp
    if (i < 0 || i >= grid.size() || j < 0 || j >= grid[0].size() || grid[i][j] == 0) {
        return 0;
    }
    ```
3.  **Const Correctness:** If the grid were not modified, it should be passed as `const`, but since you are modifying it to save space, the current signature is acceptable. However, explicitly documenting this "mutation as optimization" is good practice.

---
---


# Question Revision
### Revision Report: Max Area of Island

**Pattern:** Depth-First Search (DFS) / Graph Traversal

**Brute Force:** 
Iterate through every cell in the $m \times n$ grid. If a cell contains a '1' (land), initiate a recursive search (or BFS) to visit all reachable connected land cells, keeping track of the count and marking visited cells to avoid infinite loops.

**Optimal Approach:**
Use DFS with in-place modification. Iterate through the grid; whenever a '1' is encountered, trigger a DFS to traverse the island. Mark visited land as '0' (or a special character) to effectively "sink" the island, ensuring each cell is processed only once.
*   **Time Complexity:** $O(m \times n)$, where $m$ is the number of rows and $n$ is the number of columns.
*   **Space Complexity:** $O(m \times n)$ in the worst case for the recursion stack (if the entire grid is land).

**The 'Aha' Moment:**
The requirement to identify "connected components" in a grid is a clear signal that the problem can be modeled as a graph where adjacent land cells are nodes linked by edges.

**Summary:**
Whenever you need to measure the size of connected regions in a 2D grid, treat the grid as an adjacency list and use DFS/BFS to flood-fill and mark visited nodes.

---
