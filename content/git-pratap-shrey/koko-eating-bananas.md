---
title: "Koko Eating Bananas"
slug: koko-eating-bananas
date: "2026-10-02"
---

# My Solution
~~~cpp
class Solution {
public:
    int carFleet(int target, vector<int>& position, vector<int>& speed) {
        int n = position.size();
        vector<int> idx(n);
        iota(idx.begin(), idx.end(), 0);

        // closest to target first
        sort(idx.begin(), idx.end(), [&](int i, int j) {
            return position[i] > position[j];
        });

        int fleets = 0;
        double lastTime = 0;

        for (int i : idx) {
            double t = (double)(target - position[i]) / speed[i];
            if (t > lastTime) {   // can't catch the fleet ahead
                fleets++;
                lastTime = t;
            }
        }
        return fleets;
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Greedy approach using sorting. The solution sorts cars by position (descending) and calculates the time to reach the target to determine if a car will catch up to the fleet in front.
- **Optimality**: Optimal. Sorting by position is necessary to process cars from the target backwards, and a single pass is sufficient to count fleets.

## Complexity
- **Time Complexity**: $O(N \log N)$ due to the sorting of the index vector. The subsequent linear scan is $O(N)$.
- **Space Complexity**: $O(N)$ to store the `idx` vector.

## Efficiency Feedback
- **Runtime**: The use of `std::iota` and a custom lambda for sorting is efficient.
- **Memory**: Memory usage is minimal and appropriate for the problem constraints.
- **Optimization**: No significant optimizations needed; using a `vector<pair<int, int>>` instead of an index vector might slightly improve cache locality but would not change the complexity.

## Code Quality
- **Readability**: Good. The logic is linear and easy to follow.
- **Structure**: Good. It follows a logical flow: indexing $\rightarrow$ sorting $\rightarrow$ iterating.
- **Naming**: Moderate. While `idx` and `t` are standard in competitive programming, `lastTime` and `fleets` are clear.
- **Concrete Improvements**:
    - **Problem Mismatch**: The provided code solves the **"Car Fleet"** problem, but the prompt identifies the problem as **"Koko Eating Bananas"**. This is a critical discrepancy in the provided input.
    - **Type Casting**: `(double)(target - position[i])` is correct, but `1.0 * (target - position[i])` is a common idiomatic alternative in C++.

---

# Question Revision
# Revision Report: Koko Eating Bananas

- **Pattern:** Binary Search on Answer Space.
- **Brute Force:** Linear search through all possible eating speeds $k$ from $1$ to $\max(\text{piles})$. For each $k$, calculate the total hours spent. Return the first $k$ where total hours $\le h$.
- **Optimal Approach:** 
    - Use binary search to find the minimum $k$ in the range $[1, \max(\text{piles})]$.
    - For a middle value `mid`, calculate total hours: $\sum \lceil \text{pile} / \text{mid} \rceil$.
    - If total hours $\le h$, `mid` is a potential answer; try a smaller speed (search left).
    - Otherwise, the speed is too slow; increase speed (search right).
    - **Time Complexity:** $O(n \log m)$ where $n$ is the number of piles and $m$ is the maximum number of bananas in a single pile.
    - **Space Complexity:** $O(1)$.
- **The 'Aha' Moment:** When you need to find the "minimum $X$ such that a condition is met" and the condition is monotonic (if speed $k$ works, any speed $> k$ also works).
- **Summary:** Treat the possible eating speeds as a sorted array and binary search for the lowest value that satisfies the time constraint.

---