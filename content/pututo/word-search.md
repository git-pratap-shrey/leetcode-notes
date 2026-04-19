---
title: "Word Search"
slug: word-search
date: "2026-04-18"
---

# My Solution
~~~cpp
class Solution {
public:
    bool nq(vector<vector<char>>& board,string& word,int i ,int j,int count){
        if(count==word.length()){
            return true;
        }
        if(i<0||j<0||i>=board.size()||j>=board[0].size()||board[i][j]!=word[count]){
            return false;
        }
        char temp=board[i][j];
        board[i][j]='.';
        bool milgya =nq(board,word,i-1,j,count+1)||nq(board,word,i,j+1,count+1)||nq(board,word,i,j-1,count+1)||nq(board,word,i+1,j,count+1);
        board[i][j]=temp;
        return milgya;
    }
    bool exist(vector<vector<char>>& board, string word) {
        int m=board.size(),n=board[0].size();
        for(int i=0;i<m;i++){
            for(int j=0;j<n;j++){
                if(nq(board,word,i,j,0)){
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
- **Technique**: Backtracking using Depth First Search (DFS).
- **Optimality**: Optimal. Given the constraints of the Word Search problem, an exhaustive search with backtracking is the standard approach to ensure all possible paths are explored.

## Complexity
- **Time Complexity**: $O(M \cdot N \cdot 4^L)$, where $M \times N$ is the board dimensions and $L$ is the length of the word. The search explores 4 directions at each step of the word length.
- **Space Complexity**: $O(L)$ for the recursion stack depth.

## Efficiency Feedback
- **In-place Marking**: The code efficiently uses the input `board` to mark visited cells (`board[i][j] = '.'`), avoiding the $O(M \cdot N)$ space overhead of a separate `visited` matrix.
- **Pass-by-Reference**: The `word` string is correctly passed by reference, preventing expensive string copying during recursion.
- **Pruning**: The early return `board[i][j] != word[count]` effectively prunes the search tree.

## Code Quality
- **Readability**: Poor. The function name `nq` and the boolean variable `milgya` are non-descriptive and non-standard.
- **Structure**: Good. The logic is cleanly separated between the grid traversal and the recursive search.
- **Naming**: Poor. 
    - `nq` should be named something like `dfs` or `search`.
    - `milgya` (which translates to "found it" in Hindi) should be named `found` or `result`.
- **Improvements**:
    - Use a constant or a specific non-alphabetical character for marking to ensure no collision with actual word characters (though `'.'` is generally safe here).
    - Add `const` qualifiers to the `word` parameter in `nq` since it is not modified.

---

# Question Revision
### Word Search

**Pattern:** Backtracking / DFS on a Grid

**Brute Force:** Iterate through every cell and explore all possible paths using a separate `visited` set to track used coordinates, clearing the set for every new starting cell.

**Optimal Approach:**
Iterate through each cell as a potential starting point. If the first character matches, trigger a recursive DFS to explore the four adjacent directions. To optimize space, mark the current cell as visited in-place (e.g., replace the character with `#`) and restore it after the recursive calls return (backtrack).

*   **Time Complexity:** $O(N \cdot M \cdot 3^L)$ where $N \times M$ is the grid size and $L$ is the word length.
*   **Space Complexity:** $O(L)$ for the recursion stack.

**The 'Aha' Moment:** The constraint that "the same letter cell may not be used more than once" signals a need to track state and backtrack.

**Summary:** Perform a DFS from every matching start character, using in-place modification to track visited cells and backtracking to restore them.

---