---
title: "Shortest Subarray with Sum at Least K"
slug: shortest-subarray-with-sum-at-least-k
date: "2026-10-21"
---

# My Solution
~~~java
class Solution {
    public int timeRequiredToBuy(int[] tickets, int k) {
        Queue<int[]> q = new LinkedList<>();
        int time = 0;
        for(int i=0;i<tickets.length;i++){
            q.offer(new int[]{i,tickets[i]});
        }
        while(!q.isEmpty()){
            int[] curr = q.poll();
            curr[1]--;
            time++;
            if(curr[0]==k && curr[1]==0){
                return time;
            }
            if(curr[1]>0){
                q.offer(curr);
            }
        }
        return time;
    }
}
~~~

# Submission Review
## Approach
- **Technique**: Simulation using a Queue.
- **Correctness**: **Incorrect**. The provided code solves the problem "Time Needed to Buy Tickets," but the problem statement provided is "Shortest Subarray with Sum at Least K." There is a total mismatch between the problem and the implementation.

## Complexity
- **Time Complexity**: $O(\sum tickets[i])$, as the queue processes every single ticket unit. This is suboptimal for the stated problem (Shortest Subarray), which typically requires $O(n)$ or $O(n \log n)$.
- **Space Complexity**: $O(n)$ to store the indices and ticket counts in the queue.

## Efficiency Feedback
- **Logic Error**: The code implements a round-robin simulation. For the actual problem "Shortest Subarray with Sum at Least K," this logic is entirely irrelevant.
- **Simulation Overhead**: Even for the ticket problem, using a `Queue<int[]>` involves significant object allocation overhead. A simple loop with mathematical calculation $O(n)$ would be more efficient.

## Code Quality
- **Readability**: Moderate. The simulation logic is easy to follow, but it does not address the requested problem.
- **Structure**: Good. Standard queue-based simulation structure.
- **Naming**: Good. Variable names (`q`, `time`, `curr`) are appropriate for a simulation.
- **Concrete Improvements**: Replace the entire logic. To solve "Shortest Subarray with Sum at Least K," use a **Deque (Double-Ended Queue)** with a prefix sum array to maintain a monotonic increasing sequence of prefix sums.

---

# Question Revision
# Revision Report: Shortest Subarray with Sum at Least K

- **Pattern:** Monotonic Queue + Prefix Sums
- **Brute Force:** Calculate all possible subarray sums using nested loops and keep track of the minimum length that satisfies the condition. Time: $O(n^2)$.
- **Optimal Approach:** 
    - Calculate the **Prefix Sum** array to transform the problem into finding $P[j] - P[i] \ge K$ where $j > i$ and $j - i$ is minimized.
    - Use a **Deque** to maintain indices of the prefix sum array in increasing order of value.
    - **Two-step optimization:**
        1. **Shrink from Left:** If $P[curr] - P[deque.front()] \ge K$, we found a valid subarray; update the minimum length and pop the front (as it cannot provide a shorter subarray for future indices).
        2. **Maintain Monotonicity:** Before pushing $curr$, pop from the back if $P[curr] \le P[deque.back()]$. A smaller prefix sum at a later index is always more optimal than a larger prefix sum at an earlier index.
    - **Complexity:** Time: $O(n)$, Space: $O(n)$.
- **The 'Aha' Moment:** The presence of **negative numbers** prevents a standard sliding window, requiring a monotonic deque to prune suboptimal prefix sums.
- **Summary:** When seeking a shortest subarray with a sum constraint and negative values are present, use a Monotonic Queue on Prefix Sums.

---