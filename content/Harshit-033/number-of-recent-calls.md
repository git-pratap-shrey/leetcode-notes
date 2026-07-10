--- title: "Number of Recent Calls" slug: number-of-recent-calls date: "2026-06-19" ---  # My Solution ~~~
class RecentCounter {
public:
    queue<int> q;

    RecentCounter() {

    }
    int ping(int t) {
        q.push(t);
        while (!q.empty() && q.front()<t-3000) {
            q.pop();
        }

        return q.size();
    }
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * RecentCounter* obj = new RecentCounter();
 * int param_1 = obj->ping(t);
 */ - cpp~~~  # Submission Review ## Approach
- **Technique**: Queue-based sliding window.
- **Optimality**: Optimal. Since input timestamps $t$ are guaranteed to be strictly increasing, a queue effectively maintains the window $[t-3000, t]$ by removing expired elements from the front.

## Complexity
- **Time Complexity**: $O(1)$ amortized per `ping` call. Each timestamp is pushed and popped exactly once.
- **Space Complexity**: $O(W)$, where $W$ is the maximum number of pings occurring within any 3000ms window.

## Efficiency Feedback
- The solution is highly efficient. Using `std::queue` is the appropriate choice here as it provides $O(1)$ push and pop operations.
- No meaningful optimizations are required.

## Code Quality
- **Readability**: Good. The logic is straightforward and easy to follow.
- **Structure**: Good. The class encapsulates the state correctly.
- **Naming**: Moderate. While `q` is acceptable in a competitive programming context, a name like `timestamps` would be more descriptive.
- **Improvements**: 
    - The constructor `RecentCounter()` is empty and can be omitted or defaulted (`RecentCounter() = default;`).
    - The member variable `q` is public; it should be `private` to follow encapsulation principles.  ---  # Question Revision ### Number of Recent Calls

**Pattern:** Queue / Sliding Window

**Brute Force:** Store every timestamp in a list. For every new call, iterate through the entire list and count how many timestamps fall within the range $[t - 3000, t]$.
- **Time:** $O(n)$ per call
- **Space:** $O(n)$

**Optimal Approach:** Use a `Queue` to store timestamps. For every `ping(t)`, append $t$ to the queue, then repeatedly remove elements from the front of the queue that are less than $t - 3000$. The remaining queue size is the count of recent calls.
- **Time:** $O(1)$ amortized (each timestamp is pushed and popped exactly once).
- **Space:** $O(W)$, where $W$ is the maximum number of calls in the 3000ms window.

**The 'Aha' Moment:** Since timestamps are strictly increasing, any call that is too old for the current `ping` will also be too old for all future `pings`.

**Summary:** Use a queue to track timestamps and prune the head to maintain a sliding time window.  ---