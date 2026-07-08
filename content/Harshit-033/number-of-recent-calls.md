---
title: "Number of Recent Calls"
slug: number-of-recent-calls
date: "2026-06-19"
---

# My Solution
~~~

~~~

# Submission Review
No code was provided for analysis. Please provide the source code you would like reviewed.

---

# Question Revision
### Number of Recent Calls

**Pattern:** Queue / Sliding Window

**Brute Force:** Store every timestamp in a list. For each new request, iterate backward through the entire list to count timestamps within the $[t-3000, t]$ range. 
- Time: $O(n)$ per call
- Space: $O(n)$

**Optimal Approach:** Use a **Queue** to maintain a sliding window of valid timestamps. For every new call, append the current time to the queue and `popleft()` all timestamps smaller than $t-3000$. The current size of the queue represents the number of recent calls.
- Time: $O(1)$ amortized per call
- Space: $O(W)$ where $W$ is the max number of calls in any 3000ms window.

**The 'Aha' Moment:** The timestamps arrive in strictly increasing order, meaning expired calls always exit the window from the front (FIFO).

**Summary:** Maintain a queue of timestamps and prune the head whenever elements fall outside the 3000ms window.

---