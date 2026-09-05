---
title: "Coin Change"
slug: coin-change
date: "2026-08-22"
---

# My Solution
~~~cpp
class KthLargest {
public:
    int k;
    priority_queue<int, vector<int>, greater<int>> pq;

    KthLargest(int k, vector<int>& nums) {
        this->k = k;

        for (int n : nums)
        {
            pq.push(n);
        }

        while (pq.size() > k)
            pq.pop();

    }
    
    int add(int val) {
        pq.push(val);

        if(pq.size() > k){
            pq.pop();
        }

        return pq.top();
    }
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * KthLargest* obj = new KthLargest(k, nums);
 * int param_1 = obj->add(val);
 */
~~~

# Submission Review
## Approach
*   **Technique:** Min-Heap (priority queue) to maintain the top $k$ largest elements.
*   **Optimality:** Optimal. Using a min-heap of size $k$ ensures that the root always contains the $k$-th largest element seen so far.

## Complexity
*   **Time Complexity:** 
    *   Constructor: $O(N \log N)$ where $N$ is the size of the input vector (can be optimized to $O(N)$ using `std::priority_queue` constructor with range).
    *   `add` method: $O(\log k)$.
*   **Space Complexity:** $O(k)$ to store the heap elements.

## Efficiency Feedback
*   **Initialization:** In the constructor, pushing elements one by one into the heap takes $O(N \log N)$. You can improve this to $O(N)$ by using the constructor `priority_queue(begin, end)` and then popping the excess elements.
*   **Constraints:** The current implementation is efficient enough for standard competitive programming limits given the $O(\log k)$ `add` performance.

## Code Quality
*   **Readability:** Good. The logic is straightforward and standard for this classic problem.
*   **Structure:** Good. The class encapsulates the state properly.
*   **Naming:** Good. `pq` and `k` are standard conventions for this type of problem.
*   **Concrete Improvements:**
    *   **Constructor Optimization:** Use the range constructor for the priority queue to reduce initialization time from $O(N \log N)$ to $O(N)$.
    ```cpp
    KthLargest(int k, vector<int>& nums) : k(k), pq(nums.begin(), nums.end()) {
        while (pq.size() > k) pq.pop();
    }
    ```
    *   **Member Initialization List:** Use the constructor initializer list (as shown above) to initialize `k` and `pq` rather than assignment inside the body for better performance and style.

---

# Question Revision
### Revision Report: Coin Change

**Pattern:** Dynamic Programming (Unbounded Knapsack)

**Brute Force:** 
Use recursion to explore every combination of coins by subtracting the current coin value from the target until the remainder is 0 (success) or negative (failure). 
*   **Complexity:** $O(S^n)$ where $S$ is the amount and $n$ is the number of coin denominations, due to the exponential branching factor.

**Optimal Approach:** 
Use a 1D DP array of size `amount + 1`, where `dp[i]` stores the minimum coins needed for amount `i`. Initialize `dp[0] = 0` and all other indices to infinity. Iterate through each amount from 1 to `amount`, and for each coin, update `dp[i] = min(dp[i], dp[i - coin] + 1)`.
*   **Time Complexity:** $O(n \times S)$
*   **Space Complexity:** $O(S)$

**The 'Aha' Moment:**
When a problem asks for the *minimum* or *maximum* number of items to reach a target sum and you have an infinite supply of those items, it is a classic indicator that you are solving an unbounded knapsack problem using DP.

**Summary:**
If the problem asks for the fewest elements to reach a sum with unlimited repetitions, use a DP array where `dp[i]` builds upon the optimal solutions of smaller sub-amounts.

---