--- title: "Number of Recent Calls" slug: number-of-recent-calls date: "2026-06-30" ---  # My Solution ~~~class RecentCounter {
private:
    queue<int> counter;

public:
    RecentCounter() {}

    int ping(int t) {
        counter.push(t);
        while (t - 3000 > counter.front()) {
            counter.pop();
        }
        return counter.size();
    }
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * RecentCounter* obj = new RecentCounter();
 * int param_1 = obj->ping(t);
 */ - cpp~~~  # Submission Review ## Approach
- **Technique**: Sliding window using a `std::queue`.
- **Optimality**: Optimal. Since input timestamps `t` are monotonically increasing, a queue effectively maintains the window `[t - 3000, t]` by removing expired elements from the front.

## Complexity
- **Time Complexity**: Amortized $O(1)$ per `ping` call. Each timestamp is pushed into the queue once and popped at most once across all calls.
- **Space Complexity**: $O(W)$, where $W$ is the maximum number of pings that occur within any 3000ms window.

## Efficiency Feedback
- The implementation is highly efficient.
- Using `std::queue` (which defaults to `std::deque`) is appropriate here as it provides $O(1)$ push and pop operations.

## Code Quality
- **Readability**: Good. The logic is concise and follows the problem requirements directly.
- **Structure**: Good. Correct use of private members and public interface.
- **Naming**: Good. Variable and class names are clear.
- **Improvement**: No significant improvements needed for this specific implementation.  ---  # Question Revision ### Number of Recent Calls

**Pattern:** Queue / Sliding Window

**Brute Force:** Store all timestamps in a list. For every request, iterate through the entire list to count how many timestamps fall within the range $[t - 3000, t]$.
*   **Time:** $O(n)$ per request.
*   **Space:** $O(n)$.

**Optimal Approach:** Use a Queue to maintain the sliding window. Append the new timestamp to the back. While the timestamp at the front of the queue is less than $t - 3000$, dequeue it. The number of remaining elements in the queue is the count of recent calls.
*   **Time:** $O(1)$ amortized (each request is pushed and popped exactly once).
*   **Space:** $O(W)$, where $W$ is the maximum number of requests within the 3000ms window.

**The 'Aha' Moment:** Since requests are strictly increasing, the oldest timestamps are always at the front, allowing for efficient removal via a queue.

**Summary:** Maintain a sliding time window using a queue, popping expired timestamps from the head to keep only those within the 3000ms limit.  ---