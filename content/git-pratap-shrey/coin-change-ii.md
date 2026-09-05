---
title: "Coin Change II"
slug: coin-change-ii
date: "2026-08-22"
---

# My Solution
~~~cpp
class Solution {
public:
    int lastStoneWeight(vector<int>& stones) {
        priority_queue<int> pq;
        for(int stone : stones){
            pq.push(stone);
        }

        while(pq.size() > 1){
            int y = pq.top();
            pq.pop();

            int x = pq.top();
            pq.pop();

            if(y > x){
                pq.push(y-x);
            }
        }

        return pq.size() ? pq.top() : 0;
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Greedy simulation using a max-heap (Priority Queue).
*   **Optimal:** Yes. This is the standard optimal approach for the "Last Stone Weight" problem. By always smashing the two largest stones, you reduce the problem space effectively.

## Complexity
*   **Time Complexity:** $O(N \log N)$, where $N$ is the number of stones. Each insertion and extraction operation on the priority queue takes $O(\log N)$, and there are $N$ stones.
*   **Space Complexity:** $O(N)$ to store the stones in the priority queue.

## Efficiency Feedback
*   The approach is highly efficient given the constraints of the problem.
*   **Minor Optimization:** If the input vector `stones` is large, you can construct the `priority_queue` using the range constructor `priority_queue<int> pq(stones.begin(), stones.end());`, which runs in $O(N)$ time (heapify) instead of $O(N \log N)$ (repeated insertions).

## Code Quality
*   **Readability:** Good. The logic is straightforward and follows the problem's greedy simulation requirements.
*   **Structure:** Good. The logic is contained within a single clean loop.
*   **Naming:** Moderate. The function name `lastStoneWeight` matches the problem, but the class name `Solution` is standard. 
*   **Concrete Improvements:** 
    *   **Naming Mismatch:** The code is provided for "Last Stone Weight," but the prompt header labels it as "Coin Change II." This is a significant discrepancy.
    *   **Input Handling:** The logic is correct, but ensure that the case with an empty vector (or size 1) is handled gracefully (which it is, returning 0 or the single element).
    *   **Const correctness:** The parameter `vector<int>& stones` should ideally be `const vector<int>& stones` to signify it is not modified by the function.

---

# Question Revision
### Revision Report: Coin Change II

**Pattern:** Unbounded Knapsack / Dynamic Programming

**Brute Force:** Use backtracking to explore every combination of coins that sum to the target amount. 
*   **Complexity:** $O(2^n)$ (exponential growth due to repeated overlapping subproblems).

**Optimal Approach:** Use a 1D DP array `dp` of size `amount + 1`, where `dp[i]` represents the number of ways to form amount `i`. Iterate through each coin, and for each coin, update the `dp` table from `coin` to `amount` by adding the ways to form the remaining balance: `dp[j] += dp[j - coin]`.
*   **Time Complexity:** $O(n \cdot m)$ where $n$ is the number of coins and $m$ is the target amount.
*   **Space Complexity:** $O(m)$ to store the DP table.

**The 'Aha' Moment:** The problem asks for the *number of combinations* (order doesn't matter) rather than permutations, signaling that the coin loop must be the outer loop to prevent counting different orderings of the same set of coins.

**Summary:** When counting combinations with replacement, iterate through the items in the outer loop to ensure a fixed sequence and avoid redundant permutations.

---