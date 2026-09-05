---
title: "Minimum Bishop Moves to Reach Target"
slug: minimum-bishop-moves-to-reach-target
date: "2026-08-29"
---

# My Solution
~~~cpp
class Solution {
public:
    int leastInterval(vector<char>& tasks, int n) {
        int freq[26] = {0};

        for(char task : tasks){
            freq[task-'A']++;
        }

        priority_queue<pair<int, char>> max_heap;
        vector<pair<int, char>> temp;

        for(int i = 0; i < 26; i++){
            if(freq[i]){
                max_heap.push({freq[i], 'A'+ i});
            }
        }
        
        int count = tasks.size();

        while(max_heap.size()){
            int cycle_count = 0;
            for(int i = 0; i <= n; i++){
                if(max_heap.size()){
                    temp.push_back(max_heap.top());
                    temp[i].first--;
                    max_heap.pop();
                }
                else{
                    cycle_count++;
                }
            }
            int l = temp.size();
            
            for(int i = l - 1; i >= 0; i--){
                if(temp[i].first){
                    max_heap.push(temp[i]);
                }
                temp.pop_back();
            }

            if(max_heap.size()){
                count += cycle_count;
            }
        }

        return count;
    }
};
~~~

# Submission Review
## Approach
- **Technique:** Greedy simulation using a max-priority queue.
- **Optimality:** Suboptimal. The problem (Task Scheduler) can be solved in $O(N)$ time using a mathematical formula based on the frequency of the most frequent task. The simulation approach is significantly slower due to the overhead of priority queue operations and iterative cycles.

## Complexity
- **Time Complexity:** $O(N \log K)$, where $N$ is the number of tasks and $K=26$ (constant). While technically $O(N)$, the constant factor from the priority queue and nested loops is high compared to the $O(N)$ mathematical approach.
- **Space Complexity:** $O(1)$ (fixed size arrays and priority queue of size 26).

## Efficiency Feedback
- **Bottleneck:** The simulation loop performs redundant work by manually filling "idle" slots.
- **Optimization:** You can calculate the result directly: `(max_freq - 1) * (n + 1) + count_of_max_freq_tasks`. If this value is less than `tasks.size()`, the answer is `tasks.size()`. This eliminates the need for `priority_queue`, `vector` temporary storage, and complex loop logic.

## Code Quality
- **Readability:** Moderate. The logic is clear enough to follow, but the complex nested loop structure makes it harder to maintain than the mathematical approach.
- **Structure:** Moderate. The `temp` vector handling (pushing/popping) is unnecessary boilerplate.
- **Naming:** Good. Variable names like `freq`, `max_heap`, and `cycle_count` are descriptive.
- **Improvements:**
    - Remove the `priority_queue` and `vector<pair>` entirely.
    - Calculate the maximum frequency and the number of elements with that frequency in one pass.
    - Implement the O(1) formula to replace the `while` loop. 
    - **Note:** The problem name provided ("Minimum Bishop Moves") does not match the function name (`leastInterval`) or the code logic (Task Scheduler); ensure synchronization between problem description and implementation.

---

# Question Revision
### Revision Report: Minimum Bishop Moves

**Pattern:** Parity/Geometric Logic (Math)

**Brute Force:**
Represent the chessboard as a graph and perform a Breadth-First Search (BFS) to find the shortest path from the starting square $(r1, c1)$ to $(r2, c2)$, where each bishop move covers all squares along its two diagonals.

**Optimal Approach:**
Observe the chessboard parity: $(r + c) \pmod 2$.
1. **If the target square has a different color than the starting square:** It is unreachable; return -1.
2. **If the target square is on the same diagonal:** It takes 1 move.
3. **If the target square is not on the same diagonal but has the same color:** It takes exactly 2 moves (a bishop can reach any square of the same color on an empty board in at most 2 moves).
*   **Time Complexity:** $O(1)$
*   **Space Complexity:** $O(1)$

**The 'Aha' Moment:**
The realization that a bishop's movement is constrained by cell color (parity) and that any two squares of the same color are either on the same diagonal or can be connected via exactly one intermediate square.

**Summary:**
Bishop movement on an empty board is a parity check: if the colors match, the answer is always 0, 1, or 2 moves.

---