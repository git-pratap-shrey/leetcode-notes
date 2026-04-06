---
title: "Word Search"
slug: word-search
date: "2026-03-29"

---
---

# My Solution
~~~cpp
class Solution {
public:
    bool checkDFS(vector<vector<char>>& board, string& word,
                  vector<vector<bool>>& visited, int m, int n, int startRow,
                  int startCol, int currPos) {
        if (startRow >= m || startRow < 0 || startCol >= n || startCol < 0) {
            return false;
        }
        if (visited[startRow][startCol]) return false;

        if (board[startRow][startCol] != word[currPos]) {
            return false;
        }
        if (currPos == word.size() - 1) {
            return true;
        }

        visited[startRow][startCol] = true;

        if(checkDFS(board, word, visited, m, n, startRow, startCol + 1, currPos + 1)){
            visited[startRow][startCol] = false; return true;
        }
        if(checkDFS(board, word, visited, m, n, startRow + 1, startCol, currPos + 1)){
            visited[startRow][startCol] = false; return true;
        }
        if(checkDFS(board, word, visited, m, n, startRow, startCol - 1, currPos + 1)){
            visited[startRow][startCol] = false; return true;
        }
        if(checkDFS(board, word, visited, m, n, startRow - 1, startCol, currPos + 1)){
            visited[startRow][startCol] = false; return true;
        }

        visited[startRow][startCol] = false; 
        return false;
    }

    bool exist(vector<vector<char>>& board, string word) {
        int m = board.size();
        int n = board[0].size();
        vector<vector<bool>> visited(m, vector<bool>(n, false)); 

        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (checkDFS(board, word, visited, m, n, i, j, 0)) {
                    return true;
                }
            }
        }
        return false;
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Backtracking (DFS).
*   **Optimality:** Optimal in terms of algorithmic complexity, as searching for a path in a grid necessitates exploring potential branches.

## Complexity
*   **Time Complexity:** $O(N \cdot M \cdot 3^L)$, where $N \times M$ is the grid size and $L$ is the word length. Each cell branches into 3 directions (excluding the parent).
*   **Space Complexity:** $O(L)$ for the recursion stack and $O(N \cdot M)$ for the `visited` matrix.

## Efficiency Feedback
*   **Bottleneck:** The `visited` matrix is passed by reference and maintained correctly, but it allocates $O(N \cdot M)$ space which persists throughout the execution.
*   **Optimization:** You can eliminate the `visited` matrix entirely by modifying the `board` characters (e.g., temporarily setting them to a non-alphabetic character like `#` or `'\0'`) during the DFS and restoring them afterward. This reduces the space complexity to $O(L)$ (recursion stack only).

## Code Quality
*   **Readability:** Good. The logic is standard and easy to follow.
*   **Structure:** Moderate. The repeated `if` statements for the four directions can be refactored using a direction array (e.g., `dx = {0, 0, 1, -1}`) to make the code more concise and less prone to errors.
*   **Naming:** Good. Variable names like `currPos` and `checkDFS` are descriptive.

### Suggested Improvements
1.  **Use Direction Arrays:** Replace the four `if` blocks with a simple loop over a direction array:
    ```cpp
    int dr[] = {0, 0, 1, -1};
    int dc[] = {1, -1, 0, 0};
    for (int i = 0; i < 4; ++i) {
        if (checkDFS(..., startRow + dr[i], startCol + dc[i], ...)) return true;
    }
    ```
2.  **In-place Modification:** Avoid the `visited` vector to save space and reduce memory access overhead.
3.  **Const Correctness:** `word` and `board` could be passed as `const` references where applicable to clarify intent, though since you are modifying the board in-place (if you adopt that optimization), `board` must remain non-const.

---
---


# Question Revision
### Revision Report: Word Search (LeetCode #79)

**Pattern:** Backtracking (Depth-First Search)

**Brute Force:** 
Iterate through every cell $(i, j)$ in the grid. If the character matches `word[0]`, initiate a recursive search in all four cardinal directions. Use a separate `visited` set (or modify the grid in-place) to track the current path and avoid cycles.

**Optimal Approach:**
Perform DFS from each cell. To optimize space, mark visited cells by temporarily mutating the grid (e.g., changing the character to `#`) and reverting the change (backtracking) after the recursive calls return.
*   **Time Complexity:** $O(N \cdot 3^L)$, where $N$ is the number of cells and $L$ is the length of the word. We explore 3 directions at each step (excluding the one we just came from).
*   **Space Complexity:** $O(L)$, representing the maximum depth of the recursion stack.

**The 'Aha' Moment:**
When a problem requires finding a sequence that cannot reuse the same element and has a branching choice structure, the grid represents a graph where state needs to be reset after exploration.

**Summary:**
Use backtracking with in-place mutation to explore paths in a grid when the state must be reverted to allow for alternative search routes.

---
