---
title: "Number of Recent Calls"
slug: number-of-recent-calls
date: "2026-06-22"

---

# My Solution
~~~
class
 RecentCounter {
public:
    queue<int> q;

    RecentCounter() {
    }

    int ping(int t) {

        q.push(t);

        while(!q.empty() && q.front() < t - 3000) {
            q.pop();
        }

        return q.size();
    }
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * RecentCounter* obj = new RecentCounter();
 * int param_1 = obj->ping(t);
 */
~~~

# Submission Review

## Approach

- **Technique**: Sliding Window using a `std::queue`.
- **Optimality**: Optimal. The queue naturally maintains the chronological order of timestamps, allowing for efficient removal of expired entries from the front.

## Complexity

- **Time Complexity**: $O(1)$ amortized per `ping` call. While a single call may trigger multiple `pop()` operations, each timestamp is pushed and popped exactly once across the entire lifecycle of the object.
- **Space Complexity**: $O(W)$, where $W$ is the maximum number of pings received within any 3000ms window.

## Efficiency Feedback
- The solution is highly efficient. The use of `std::queue` (which typically wraps `std::deque`) provides $O(1)$ insertions and deletions at the boundaries, which is ideal for this problem.

## Code Quality

- **Readability**: Good. The logic is concise and easy to follow.
- **Structure**: Moderate. The queue `q` is declared as a `public` member; it should be `private` to ensure encapsulation.
- **Naming**: Good. Variable names are clear and consistent with the problem context.
- **Concrete Improvements**:
    - Move `std::queue<int> q` to a `private` access modifier.
    - Remove the empty constructor `RecentCounter() {}` as the compiler provides a default one.

---

# Question Revision

#

## Number of Recent Calls

**Pattern:** Sliding Window / Queue

**Brute Force:** Store every timestamp in a list. For each new call, iterate through the entire list to count timestamps within the $[t - 3000, t]$ range.
- **Time:** $O(n)$ per request

- **Space:** $O(n)$

**Optimal Approach:** Use a **Queue** to maintain the window. Append the new timestamp to the back and dequeue all timestamps from the front that are older than $t - 3000$. The current queue size represents the number of recent calls.
- **Time:** $O(1)$ amortized (each timestamp is pushed and popped exactly once)
- **Space:** $O(W)$, where $W$ is the maximum number of calls within the 3000ms window.

**The 'Aha' Moment:** The fact that timestamps are **strictly increasing** implies that once a timestamp falls out of the 3000ms window, it will never be relevant again, making a FIFO queue the ideal structure.

**Summary:** Use a queue to slide a time window, popping expired timestamps from the head until the window constraint is met.

---
