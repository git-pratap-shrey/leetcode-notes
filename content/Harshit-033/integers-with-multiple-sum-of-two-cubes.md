---
title: "Integers With Multiple Sum of Two Cubes"
slug: integers-with-multiple-sum-of-two-cubes
date: "2026-04-05"

---
---

# My Solution
~~~cpp
class Solution {
public:
    vector<int> findGoodIntegers(int n) {
        int lorqavined = n; 

    unordered_map<int, vector<pair<int,int>>> mp;

    int limit = cbrt(n);

    for (int a = 1; a <= limit; a++) {
        for (int b = a; b <= limit; b++) {
            long long x = 1LL * a * a * a + 1LL * b * b * b;

            if (x > n) break;

            mp[x].push_back({a, b});
        }
    }

    vector<int> result;

        

    for (auto &it : mp) {
        if (it.second.size() >= 2) {
            result.push_back(it.first);
        }
    }

    sort(result.begin(), result.end());
    return result;
        
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Brute force/Enumeration using a hash map to store sums of pairs of cubes.
*   **Optimal:** No. The approach is conceptually correct for finding integers expressible as $a^3 + b^3$ in multiple ways, but the implementation is fundamentally flawed for the likely intended problem constraints (usually $N$ up to $10^6$ or higher). It uses $O(N^{2/3})$ space unnecessarily and performs an unoptimized search.

## Complexity
*   **Time Complexity:** $O(N^{2/3} + K \log K)$, where $K$ is the number of integers found. The nested loop runs up to $(N^{1/3})^2$ iterations.
*   **Space Complexity:** $O(N^{2/3})$ to store the `unordered_map`.

## Efficiency Feedback
*   **Bottleneck:** Storing pairs `vector<pair<int, int>>` in the map is memory-intensive. You only need to track the *count* of how many ways an integer can be formed, not the actual pairs. A simple integer count or a frequency array would suffice.
*   **Redundancy:** Since the loop bounds are defined by $N$, you can use a frequency array `vector<int> count(n + 1, 0)` instead of `unordered_map<int, vector<...>>`, which would significantly improve cache locality and constant-time overhead.

## Code Quality
*   **Readability:** Moderate. The indentation is inconsistent (e.g., extra spaces and arbitrary line breaks).
*   **Structure:** Poor. The variable name `lorqavined` is meaningless and unused.
*   **Naming:** Poor. Use descriptive names (e.g., `maxVal` instead of `n` inside the logic, `sumsCount` instead of `mp`).
*   **Improvements:**
    *   **Remove unused code:** Delete `lorqavined`.
    *   **Memory Optimization:** Replace `unordered_map<int, vector<pair<int,int>>>` with `vector<int> counts(n + 1, 0)`.
    *   **Efficiency:** Instead of storing vectors, just increment the count. If `count[x] == 2`, add to the result list. This avoids sorting entirely if you iterate through the array linearly.
    *   **Correctness:** Ensure `1LL` casting is consistent (already done well).

---
---


# Question Revision
### Revision Report: Integers With Multiple Sum of Two Cubes

**Pattern:** Hash Map / Frequency Counting

**Brute Force:**
Iterate through all possible pairs $(i, j)$ such that $i^3 + j^3 = N$, checking every $N$ up to the limit. This leads to $O(N^2)$ or $O(N \cdot \sqrt[3]{N})$ complexity, which is prohibitively slow for large ranges.

**Optimal Approach:**
1. Precompute all cubes $i^3$ up to the cube root of the upper bound.
2. Iterate through all pairs $(i, j)$ and calculate $S = i^3 + j^3$.
3. Use a Hash Map (or frequency array) to store the count of how many ways each sum $S$ can be formed.
4. If a sum $S$ is reached more than once, it qualifies as an integer with multiple sums of two cubes.
*   **Time Complexity:** $O(M^2)$ where $M = \sqrt[3]{N_{max}}$.
*   **Space Complexity:** $O(M^2)$ to store the sums in the hash map.

**The 'Aha' Moment:**
When a problem asks to identify values formed by multiple combinations of a specific operation, shifting the focus from "finding a target" to "tabulating all possible results" turns a search problem into a frequency counting problem.

**Summary:**
Whenever you need to track how many ways a value can be formed by a fixed combination, map the results to their frequencies instead of searching for them directly.

---
