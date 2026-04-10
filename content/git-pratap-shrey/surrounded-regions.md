---
title: "Surrounded Regions"
slug: surrounded-regions
date: "2026-04-10"

---
---

# My Solution
~~~cpp
class Solution {
public:
    void dfs(vector<vector<char>>& board, int i, int j, vector<vector<bool>>& visited, bool& surrounded) {
        if(visited[i][j]){
            return;
        }
        if(i == 0 || j == 0 || i == board.size()-1 || j == board[0].size()-1){
            surrounded = true;
        }
        visited[i][j] = true;

        if (i + 1 < board.size() && board[i+1][j] == 'O') {
            dfs(board, i + 1, j, visited, surrounded);
        }
        if (j + 1 < board[0].size() && board[i][j+1] == 'O') {
            dfs(board, i, j + 1, visited, surrounded);
        }
        if (i - 1 >= 0 && board[i-1][j] == 'O') {
            dfs(board, i - 1, j, visited, surrounded);
        }
        if (j - 1 >= 0 && board[i][j-1] == 'O') {
            dfs(board, i, j - 1, visited, surrounded);
        }
    }

    void capture(vector<vector<char>>& board, vector<vector<bool>>& visited){
        for (int i = 0; i < board.size(); i++) {
            for (int j = 0; j < board[0].size(); j++) {
                if(visited[i][j]){
                    board[i][j] = 'X';
                    visited[i][j] = false;
                }
            }
        }
    }

    void populate(vector<vector<char>>& board, vector<vector<bool>>& visited, vector<vector<bool>>& notSurrounded){
        for (int i = 0; i < board.size(); i++) {
            for (int j = 0; j < board[0].size(); j++) {
                if(visited[i][j]){
                    notSurrounded[i][j] = true;
                    visited[i][j] = false;
                }
            }
        }
    }

    void solve(vector<vector<char>>& board) {
        vector<vector<bool>> visited(board.size(), vector<bool>(board[0].size()));
        vector<vector<bool>> notSurrounded(board.size(), vector<bool>(board[0].size()));

        bool surrounded;

        for (int i = 0; i < board.size(); i++) {
            for (int j = 0; j < board[0].size(); j++) {
                if (!visited[i][j] && !notSurrounded[i][j], board[i][j] == 'O') {
                    surrounded = false;
                    dfs(board, i, j, visited, surrounded);
                    if(!surrounded){
                        capture(board, visited);
                    }
                    else{
                        populate(board, visited, notSurrounded);
                    }
                }
            }
        }
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Depth-First Search (DFS) with multiple auxiliary boolean matrices (`visited`, `notSurrounded`).
*   **Optimal Status:** Suboptimal. The logic attempts to identify connected components of 'O's and check if they touch the boundary. However, the implementation is unnecessarily complex, involving multiple full-grid traversals to reset/update states.

## Complexity
*   **Time Complexity:** $O(N \cdot M)$ where $N$ is rows and $M$ is columns. While the search visits each node a constant number of times, the overhead of the `capture` and `populate` functions (full-grid scans) inside the main loop can lead to high constant-factor penalties.
*   **Space Complexity:** $O(N \cdot M)$ due to the explicit `visited` and `notSurrounded` matrices and the recursion stack.

## Efficiency Feedback
*   **Bottleneck:** The `capture` and `populate` functions iterate through the entire $N \times M$ grid every time a component is found. This is inefficient compared to simply marking nodes during the DFS.
*   **Optimization:** Instead of global scans, pass a reference to a `vector<pair<int, int>>` to the DFS to store the current component's coordinates. If the component is "surrounded," you can iterate only over those stored coordinates to modify the board.
*   **Logic Simplification:** Standard approach is to perform DFS/BFS **starting from the boundary 'O's** to mark all "not surrounded" cells first, then iterate over the grid once more to flip any remaining 'O's to 'X's. This eliminates the need for the `notSurrounded` matrix and the `surrounded` boolean flag.

## Code Quality
*   **Readability:** Moderate. The logic is fragmented across multiple helper functions that perform redundant grid iterations.
*   **Structure:** Poor. The separation of concerns is confusing; `capture` and `populate` handle state reset duties that should be integrated into the traversal.
*   **Naming:** Good. Function names like `dfs`, `capture`, and `populate` accurately reflect their intended purpose.
*   **Concrete Improvements:**
    *   Delete `capture` and `populate`.
    *   Use the standard boundary-traversal approach: start DFS from every 'O' on the edge of the board, mark them as a temporary character (e.g., 'T'), then iterate the whole board once: change 'O' to 'X' and 'T' back to 'O'.
    *   Remove the `visited` and `notSurrounded` matrices; modify the `board` in-place using temporary values to save memory.
    *   Fix the syntax error in `solve`: `if (!visited[i][j] && !notSurrounded[i][j], board[i][j] == 'O')` uses a comma operator which likely does not behave as intended (it will evaluate the whole expression but only use the result of the last part).

---
---


# Question Revision
### Revision Report: Surrounded Regions

**Pattern:** Breadth-First Search (BFS) / Depth-First Search (DFS) / Graph Traversal

**Brute Force:**
Iterate through every 'O' cell, perform a search to see if it reaches the boundary. If it does not reach the boundary, flip it to 'X'. This is inefficient as it leads to redundant traversals.

**Optimal Approach:**
Instead of looking for 'O's to capture, identify 'O's that *cannot* be captured. Perform a traversal starting from all 'O's on the four borders. Mark these "border-connected" cells (e.g., change to 'T'). After the traversal, iterate through the entire grid: change all remaining 'O's to 'X' (they are surrounded) and all 'T's back to 'O' (they were safe).
*   **Time Complexity:** $O(m \times n)$ where $m$ is rows and $n$ is columns.
*   **Space Complexity:** $O(m \times n)$ for the recursion stack or queue in the worst case.

**The 'Aha' Moment:**
When a problem asks to find regions defined by boundaries, it is often easier to identify the "exempt" elements from the edge inward rather than validating every internal element individually.

**Summary:**
Don't search for what to flip; identify the survivors connected to the perimeter, then flip everything else.

---
