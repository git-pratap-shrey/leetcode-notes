---
title: "Time Needed to Buy Tickets"
slug: time-needed-to-buy-tickets
date: "2026-10-21"
---

# My Solution
~~~java
class Solution {
    public String predictPartyVictory(String senate) {
        int n = senate.length();
        Queue<Integer> ran = new LinkedList<>();
        Queue<Integer> dir = new LinkedList<>();
        for(int i=0;i<n;i++){
            if(senate.charAt(i)=='R'){
                ran.offer(i);
            }
            else{
                dir.offer(i);
            }
        }
        while(!ran.isEmpty() && !dir.isEmpty()){
            int r = ran.poll();
            int d = dir.poll();
            if(r<d){
                ran.offer(r+n);
            }
            else{
                dir.offer(d+n);
            }
        }
        return ran.isEmpty() ? "Dire":"Radiant";
    }
}
~~~

# Submission Review
## Approach
- **Technique**: Greedy simulation using two queues to track the indices of voters.
- **Optimality**: Optimal. It simulates the process by ensuring the senator who acts first bans the other, and the survivor is pushed to the end of the queue for the next round.

## Complexity
- **Time Complexity**: $O(N)$, where $N$ is the length of the senate string. Each senator is either banned or moved to the back, and the total number of operations is proportional to the number of senators.
- **Space Complexity**: $O(N)$ to store the indices of the senators in two queues.

## Efficiency Feedback
- The use of `LinkedList` as a `Queue` is appropriate here.
- Memory and runtime are optimal for this problem as every character is processed and the state transition is linear.

## Code Quality
- **Readability**: Good. The logic is straightforward and follows the standard simulation pattern for this problem.
- **Structure**: Good. The separation of initial population and the simulation loop is clear.
- **Naming**: Moderate. 
    - `ran` and `dir` are shorthand for "Radiant" and "Dire"; while understandable in context, full names would be clearer.
    - `n` is standard for length.
- **Concrete Improvements**:
    - Use `ArrayDeque` instead of `LinkedList` for slightly better performance and lower memory overhead in Java.
    - Explicitly define the queue types as `Queue<Integer> ran = new ArrayDeque<>();` for better efficiency.

---

# Question Revision
# Revision Report: Time Needed to Buy Tickets

- **Pattern:** Simulation / Greedy Observation
- **Brute Force:** Use a `Queue` to simulate the process. Pop the person from the front, decrement their ticket count, increment time, and if they still need tickets, push them to the back. Repeat until the target person reaches zero.
- **Optimal Approach:** Instead of simulating every single second, calculate the contribution of each person to the total time based on the target person's tickets $k$:
    - For the target person (at index $i$): They will wait exactly $k$ turns.
    - For people *before* or *at* index $i$: They will buy $\min(\text{tickets}[j], k)$ tickets.
    - For people *after* index $i$: They will buy $\min(\text{tickets}[j], k - 1)$ tickets (since the process ends the moment the target person gets their last ticket).
    - **Time Complexity:** $O(n)$
    - **Space Complexity:** $O(1)$
- **The 'Aha' Moment:** Realizing that the total time is simply the sum of tickets bought by everyone else before the target person finishes their $k$-th purchase.
- **Summary:** Don't simulate the queue; sum the minimum of each person's tickets and the target's remaining needs.

---