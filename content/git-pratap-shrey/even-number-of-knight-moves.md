---
title: "Even Number of Knight Moves"
slug: even-number-of-knight-moves
date: "2026-07-19"
---

# My Solution
~~~cpp
class Solution {
public:
    bool fn(int x, int y, set<tuple<int, int, bool>>& reached, vector<int>& target, bool is_even){
        if(find(reached.begin(), reached.end(), make_tuple(x, y, is_even)) != reached.end()){
            // cout<<"F1";
            return false;
        }
        // cout<<x<<" "<<y<<endl;
        reached.insert({x, y, is_even});
        if(x == target[0] && y == target[1]){
            if(is_even){
                // cout<<x<<" "<<y<<endl;
                return true;
            }
        }

        if(x+2 < 8 && y+1 < 8){
            if(fn(x+2, y+1, reached, target, !is_even)){return true;}
        }
        if(x+2 < 8 && y-1 >= 0){
            if(fn(x+2, y-1, reached, target, !is_even)){return true;}
        }
        if(x-2 >= 0 && y+1 < 8){
            if(fn(x-2, y+1, reached, target, !is_even)){return true;}
        }
        if(x-2 >= 0 && y-1 >= 0){
            if(fn(x-2, y-1, reached, target, !is_even)){return true;}
        }
        if(y+2 < 8 && x+1 < 8){
            if(fn(x+1, y+2, reached, target, !is_even)){return true;}
        }
        if(y+2 < 8 && x-1 >= 0){
            if(fn(x-1, y+2, reached, target, !is_even)){return true;}
        }
        if(y-2 >= 0 && x+1 < 8){
            if(fn(x+1, y-2, reached, target, !is_even)){return true;}
        }
        if(y-2 >= 0 && x-1 >= 0){
            if(fn(x-1, y-2, reached, target, !is_even)){return true;}
        }
        // cout<<"F3";
        return false;
    }
    
    bool canReach(vector<int>& start, vector<int>& target) {
        set<tuple<int, int, bool>> reached;
        int x = start[0];
        int y = start[1];
        
        return fn(x, y, reached, target, true);
    }
};
~~~

# Submission Review
## Approach
* **Technique**: Recursive Depth-First Search (DFS) with a `std::set` for memoization.
* **Optimality**: **Suboptimal**. While correct for small, finite grids, DFS is not ideal for finding the *existence* of a path in a state space that can be solved via parity or Breadth-First Search (BFS).

## Complexity
* **Time Complexity**: $O(V + E)$ where $V = 8 \times 8 \times 2 = 128$ states. In the worst case, the recursion visits each state once.
* **Space Complexity**: $O(V)$ due to the `std::set` storing states and the recursion stack depth. 

## Efficiency Feedback
* **Bottleneck**: Using `std::set<tuple<...>>` is significantly slower than using a 3D boolean array `bool visited[8][8][2]`. The overhead of `std::set` (tree operations) is unnecessary for a fixed-size grid.
* **Redundancy**: The `reached` set is passed by value (implied, as it is not passed by reference). This causes a deep copy of the set at every recursive step, resulting in exponential time complexity $O(k^N)$ instead of $O(V)$. **This will likely result in a Time Limit Exceeded (TLE) error.**

## Code Quality
* **Readability**: **Moderate**. The code is simple, but the logic is cluttered by repetitive `if` conditions.
* **Structure**: **Poor**. Passing the `set` by value is a critical performance error. The code structure for 8-way knight moves should be handled via a direction array (e.g., `dx[]`, `dy[]`) to avoid repetition.
* **Naming**: **Good**. Variable names are clear and consistent.

### Concrete Improvements
1.  **Pass by Reference**: Change the function signature to `bool fn(..., set<...>& reached, ...)`.
2.  **Use Arrays instead of Sets**: Replace `std::set<tuple<...>>` with a simple 3D array: `bool visited[8][8][2] = {false};`.
3.  **Direction Arrays**: Use a loop to iterate through the 8 knight moves:
    ```cpp
    int dx[] = {2, 2, -2, -2, 1, 1, -1, -1};
    int dy[] = {1, -1, 1, -1, 2, -2, 2, -2};
    for(int i = 0; i < 8; ++i) {
        int nx = x + dx[i], ny = y + dy[i];
        // check bounds and recurse
    }
    ```
4.  **Parity Logic**: A knight move always toggles the color of the square. On an $8 \times 8$ board, the parity of the distance is the only constraint. This problem can be solved in $O(1)$ without recursion.

---

# Question Revision
### Revision Report: Knight’s Move Optimization

**Pattern:** Breadth-First Search (BFS) / Symmetry Reduction

**Brute Force:**
Simulate every possible sequence of knight moves using DFS or exhaustive recursion. This fails due to the exponential branching factor ($8^k$) and the infinite nature of the board.

**Optimal Approach:**
*   **Logic:** Since the board is symmetric, constrain the search to the first quadrant ($x \ge 0, y \ge 0$) and ensure $x \ge y$. For coordinates far from the origin, use a greedy approach (moving towards the target); for coordinates near the origin, use BFS with a set to track visited states.
*   **Time Complexity:** $O(1)$ (The search space near the origin is constant, and the greedy steps are mathematical calculations).
*   **Space Complexity:** $O(1)$ (The number of states in the BFS for small coordinates is capped).

**The 'Aha' Moment:**
When a movement problem involves a target far away on an infinite grid, identify that the local behavior is a shortest-path graph problem, while the distant behavior is a predictable, repeatable geometric pattern.

**Summary:**
Always check if you can reduce an infinite grid problem to a small BFS search for "start-up" moves followed by a constant-time calculation for the remaining distance.

---