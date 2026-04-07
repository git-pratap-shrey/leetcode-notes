---
title: "Find the Score Difference in a Game"
slug: find-the-score-difference-in-a-game
date: "2026-02-22"

---
---

# My Solution
~~~cpp
class Solution {
public:
    int scoreDifference(vector<int>& nums) {
        int n=0,m=0;
        int c=0;
        for(int i=0;i<nums.size();i++){
            
           if(nums[i]%2 !=0 ){
            c++;
           }
          if ( (i+1)%6==0 ) {
              c++;
          }
           
           if(c%2 != 0){
            m+=nums[i];

           }
           else{
            n+=nums[i];
           }
        

        }
        return n-m;
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Iterative simulation.
- **Optimality**: Optimal. The logic performs a single pass over the input array, calculating the cumulative sum for two players based on specific conditions.

## Complexity
- **Time Complexity**: $O(N)$, where $N$ is the number of elements in `nums`. The code traverses the vector exactly once.
- **Space Complexity**: $O(1)$, as it only uses a constant amount of extra memory for integer variables.

## Efficiency Feedback
- **Runtime**: Highly efficient. There are no redundant operations or hidden overheads. 
- **Memory**: Minimal footprint; uses stack variables only.
- **Optimization**: The logic is already optimal. No further algorithmic improvements are possible for this specific constraint.

## Code Quality
- **Readability**: **Poor**. The variable names `n`, `m`, and `c` are non-descriptive and do not convey their purpose (e.g., player scores or turn counters).
- **Structure**: **Moderate**. The logic handles conditions (parity of number and index-based triggers) inside a single loop, which is concise, but the logic flow is slightly obfuscated by the lack of clear grouping.
- **Naming**: **Poor**. Rename `n` to `player1_score`, `m` to `player2_score`, and `c` to `turn_count` (or similar) to improve maintainability.
- **Concrete Improvements**:
    - Add comments to explain the logic behind the index check `(i+1)%6 == 0`.
    - Rename variables to meaningful identifiers.
    - Consolidate the conditional logic to improve clarity:
    ```cpp
    int player1_score = 0, player2_score = 0;
    int turn_count = 0;
    for (int i = 0; i < nums.size(); ++i) {
        if (nums[i] % 2 != 0 || (i + 1) % 6 == 0) {
            turn_count++;
        }
        
        if (turn_count % 2 != 0) {
            player2_score += nums[i];
        } else {
            player1_score += nums[i];
        }
    }
    return player1_score - player2_score;
    ```

---
---


# Question Revision
### Revision Report: Find the Score Difference

**Pattern:** Greedy / Sorting or Frequency Counting

**Brute Force:** 
Iterate through all possible subsets or permutations to calculate score differences, typically resulting in $O(n!)$ or $O(2^n)$ complexity depending on the problem constraints.

**Optimal Approach:**
If the goal is to maximize the difference between two players taking turns picking numbers, sort the array in descending order and alternate selection, or use a frequency array if the range of values is small.
*   **Time Complexity:** $O(n \log n)$ for sorting, or $O(n + k)$ for counting sort.
*   **Space Complexity:** $O(1)$ or $O(k)$ where $k$ is the range of values.

**The 'Aha' Moment:** 
Whenever a game involves turns where both players play optimally to maximize their own score, you are looking at a greedy strategy where each player must always select the locally largest available value.

**Summary:** 
In competitive turn-based selection games, sort the available items and greedily take the largest remaining value to maximize your relative score.

---
