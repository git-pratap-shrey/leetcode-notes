---
title: "Number of Islands"
slug: number-of-islands
date: "2026-04-08"

---
---

# My Solution
~~~cpp
class Solution {
public:
    void dfs(vector<vector<char>>& grid, vector<vector<bool>>& dp, int i, int j) {
        if (i >= grid.size() || j >= grid[0].size() || grid[i][j] == '0' || dp[i][j]) {
            return;
        }
        // cout<<i<<" "<<j<<"->"<<grid[i][j]<<endl;


        grid[i][j] = 0;
        dp[i][j] = 1;

        dfs(grid, dp, i + 1, j);
        dfs(grid, dp, i - 1, j);
        dfs(grid, dp, i, j + 1);
        dfs(grid, dp, i, j - 1);
    }

    int numIslands(vector<vector<char>>& grid) {
        int islandCount = 0;
        vector<vector<bool>> dp(grid.size(), vector<bool>(grid[0].size()));

        for (int i = 0; i < grid.size(); i++) {
            for (int j = 0; j < grid[0].size(); j++) {
                if(grid[i][j] == '1'){
                    dfs(grid, dp, i, j);
                    islandCount++;
                }

            }
        }

        return islandCount;
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Depth-First Search (DFS) for graph traversal to identify connected components.
*   **Optimality:** Suboptimal. The algorithm uses an auxiliary 2D boolean array (`dp`) to track visited nodes, which is redundant because the input grid can be modified in-place (or by using a `visited` set) to mark nodes as processed.

## Complexity
*   **Time Complexity:** $O(M \times N)$, where $M$ is the number of rows and $N$ is the number of columns. Every cell is visited once.
*   **Space Complexity:** $O(M \times N)$ in the worst case (e.g., a grid filled with '1's) due to the call stack and the `dp` matrix.

## Efficiency Feedback
*   **Bottleneck:** The `dp` matrix is unnecessary memory overhead. You are already modifying `grid[i][j] = 0` inside the `dfs`, which effectively marks the cell as visited.
*   **Redundancy:** The `dfs` function checks `dp[i][j]` *and* `grid[i][j] == '0'`. By simply relying on the `grid` state, you eliminate the need for the `dp` vector entirely, saving $O(M \times N)$ space.
*   **Negative Indexing:** The `dfs` function contains recursive calls for `i - 1` and `j - 1` without checking if the index becomes negative *before* accessing `dp[i][j]`. While the `if` check inside `dfs` handles this, it is safer and cleaner to add bounds checks *before* the recursive call to avoid out-of-bounds access logic inside the base case.

## Code Quality
*   **Readability:** Moderate. The `dp` naming is misleading; `visited` would be much more descriptive.
*   **Structure:** Moderate. The logic is clear, but the code relies on a redundant auxiliary structure.
*   **Naming:** Poor. `dp` is a misnomer; this is not dynamic programming. It should be `visited`.
*   **Improvements:**
    1.  Remove the `vector<vector<bool>> dp` parameter entirely.
    2.  Update `dfs` base case to only check `i < 0` or `j < 0` alongside the upper bounds.
    3.  Consider using a direction array (e.g., `int dx[] = {0, 0, 1, -1}`) to iterate over neighbors instead of four separate recursive calls for cleaner code.
    4.  The assignment `grid[i][j] = 0` (integer 0) is technically a character `'\0'`. Ensure this is intended (it works because `'\0'` is not `'1'`).

---
---


# Question Revision
### Revision Report: Number of Islands

**Pattern:** Graph Traversal (DFS/BFS)

**Brute Force:**
Iterate through every cell in the grid. If a '1' is encountered, initiate a full traversal to mark all connected land cells as visited (e.g., flipping them to '0'), incrementing a global island counter for each fresh start.

**Optimal Approach:**
*   **Logic:** Traverse the $M \times N$ grid. Upon finding an unvisited '1', trigger a recursive DFS (or iterative BFS) to flood-fill the connected component. Mark visited cells in-place or use a separate boolean matrix to ensure each node is processed exactly once.
*   **Time Complexity:** $O(M \times N)$, as each cell is visited at most a constant number of times.
*   **Space Complexity:** $O(M \times N)$ in the worst case (all land) for the recursion stack or queue.

**The 'Aha' Moment:**
When the problem asks for the count of distinct "connected components" in a grid, it is always a graph traversal problem where each cell is a node and adjacent land cells are edges.

**Summary:**
Treat the grid as an adjacency list and use DFS/BFS to "sink" each island once identified to avoid double-counting.

---
