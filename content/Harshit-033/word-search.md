---
title: "Word Search"
slug: word-search
date: "2026-08-26"
---

# My Solution
~~~cpp
class Solution {
public:
    bool find(vector<vector<char>>& board, string word,int row,int col,int i,int j,int ind){
        if(i<0 || i>=row){
            return false;
        }
        if(j<0 || j>=col){
            return false;
        }
        if(ind==word.size()-1){
            if(word[ind]==board[i][j]){
                return true;
            }
        }
        if(word[ind]!=board[i][j]){
                return false;
            }

        char ch=board[i][j];
        board[i][j]='#';
        bool ans=find(board,word,row,col,i+1,j,ind+1) ||
                 find(board,word,row,col,i-1,j,ind+1) ||
                 find(board,word,row,col,i,j+1,ind+1) ||
                 find(board,word,row,col,i,j-1,ind+1);

        board[i][j]=ch;

        return ans;


    }
    bool exist(vector<vector<char>>& board, string word) {
        int row=board.size();
        int col=board[0].size();
        for(int i=0;i<row;i++){
            for(int j=0;j<col;j++){
                if(find(board,word,row,col,i,j,0)){
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
*   **Technique:** Backtracking (Depth-First Search).
*   **Optimality:** Optimal. It explores possible paths and uses in-place modification (the `#` character) to mark visited cells, avoiding extra space for a `visited` array.

## Complexity
*   **Time Complexity:** $O(N \cdot M \cdot 3^L)$, where $N \times M$ is the board size and $L$ is the word length. Each cell can branch into at most 3 directions (excluding the cell we just came from).
*   **Space Complexity:** $O(L)$ due to the recursion stack depth.

## Efficiency Feedback
*   **Runtime:** The approach is efficient for this problem type. Passing the `string word` by value in the `find` function creates a copy of the string in every recursive call. This is a significant bottleneck.
*   **Optimizations:** Change `string word` to `const string& word` in the `find` function signature to avoid unnecessary memory allocations.

## Code Quality
*   **Readability:** Good. The logic is straightforward and easy to follow.
*   **Structure:** Moderate. The recursion logic is clean, but the base cases could be tightened. For instance, `if(ind==word.size()-1)` is handled, but checking `board[i][j]` inside that block is redundant because the condition `word[ind]!=board[i][j]` is checked immediately after.
*   **Naming:** Moderate. `find` and `ind` are acceptable, but more descriptive names (e.g., `backtrack` or `dfs` and `index`) would improve clarity.
*   **Concrete Improvements:**
    *   Pass `word` by reference: `const string& word`.
    *   Refactor the base case: Check `word[ind] == board[i][j]` once at the start of the function.
    *   The `ind == word.size() - 1` check can be simplified by checking `ind == word.size()` at the start of the function, allowing the main logic to process a successful match more uniformly.

---

# Question Revision
### Revision Report: Word Search

**Pattern:** Backtracking (DFS)

**Brute Force:** 
Iterate through every cell in the grid. If the cell matches the first character of the word, initiate a recursive search in all four cardinal directions, marking visited cells to avoid cycles.

**Optimal Approach:**
Use DFS with **in-place backtracking**. Since the board has fixed dimensions, traverse the grid. For each match, temporarily mutate the board cell (e.g., set to `#`) to signify it is "visited" during the current recursion stack, then revert the change (backtrack) once the branch is fully explored.
*   **Time Complexity:** $O(N \cdot 3^L)$, where $N$ is the number of cells and $L$ is the length of the word (3 directions excluding the one we came from).
*   **Space Complexity:** $O(L)$ for the recursion stack.

**The 'Aha' Moment:**
When a problem asks to find paths or sequences in a grid with constraints on revisiting nodes, it is a signal to treat the grid as an implicit graph and explore it using DFS with state restoration.

**Summary:** 
Use DFS with in-place mutation to explore paths, but always revert the board state before returning from the recursive call.

---