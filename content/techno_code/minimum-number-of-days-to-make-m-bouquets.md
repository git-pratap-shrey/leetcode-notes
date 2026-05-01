---
title: "Minimum Number of Days to Make m Bouquets"
slug: minimum-number-of-days-to-make-m-bouquets
date: "2026-04-26"
---

# My Solution
~~~cpp
class Solution {
public:
    bool canMake(vector<int>& bloomDay, int m, int k, int day) {
        int count = 0;   // consecutive flowers
        int bouquets = 0;

        for (int i = 0; i < bloomDay.size(); i++) {
            if (bloomDay[i] <= day) {
                count++;
                if (count == k) {
                    bouquets++;
                    count = 0;
                }
            } else {
                count = 0;
            }
        }
        return bouquets >= m;
    }

    int minDays(vector<int>& bloomDay, int m, int k) {
        long long n = bloomDay.size();
        if ((long long)m * k > n) return -1;

        int low = *min_element(bloomDay.begin(), bloomDay.end());
        int high = *max_element(bloomDay.begin(), bloomDay.end());

        int ans = -1;

        while (low <= high) {
            int mid = low + (high - low) / 2;

            if (canMake(bloomDay, m, k, mid)) {
                ans = mid;
                high = mid - 1; // try smaller day
            } else {
                low = mid + 1;
            }
        }
        return ans;
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Binary Search on the Answer combined with a Greedy check function (`canMake`).
- **Optimality**: Optimal. The problem exhibits monotonicity (if it's possible to make $m$ bouquets in $d$ days, it is also possible in $d+1$ days), making binary search the most efficient approach.

## Complexity
- **Time Complexity**: $O(n \log R)$, where $n$ is the number of flowers and $R$ is the range between the minimum and maximum bloom days.
- **Space Complexity**: $O(1)$ auxiliary space.

## Efficiency Feedback
- **Range Initialization**: Using `min_element` and `max_element` to narrow the search space is efficient and avoids hardcoding large constants.
- **Overflow Prevention**: The use of `(long long)m * k` correctly prevents integer overflow during the initial feasibility check.
- **Check Function**: The greedy linear scan in `canMake` is the most efficient way to count consecutive available flowers.

## Code Quality
- **Readability**: Good. The logic is straightforward and follows standard binary search patterns.
- **Structure**: Good. The separation of the predicate function (`canMake`) from the search logic (`minDays`) improves clarity.
- **Naming**: Good. Variable names like `bloomDay`, `bouquets`, and `canMake` clearly communicate their purpose.
- **Improvement**: Minor performance gain could be achieved by replacing `*min_element` and `*max_element` with a single pass to find both, though this does not change the asymptotic complexity.

---

# Question Revision
### Minimum Number of Days to Make m Bouquets

**Pattern:** Binary Search on Answer

**Brute Force:** 
Iterate through every day from $\min(\text{bloomDay})$ to $\max(\text{bloomDay})$. For each day, traverse the array to count how many bouquets of $k$ adjacent flowers can be formed. Return the first day that satisfies $m$.

**Optimal Approach:** 
Since the ability to form $m$ bouquets is monotonic (if possible on day $x$, it is also possible on day $x+1$), binary search the range $[\min(\text{bloomDay}), \max(\text{bloomDay})]$. For a midpoint `mid`, use a greedy linear scan to count contiguous flowers that bloom by `mid`; if the total bouquets $\ge m$, search the left half (smaller days), otherwise search the right.

*   **Time Complexity:** $O(n \log(\max(\text{bloomDay})))$
*   **Space Complexity:** $O(1)$

**The 'Aha' Moment:** 
The request for a "minimum [value]" combined with a property that, once true, remains true for all larger values, signals Binary Search on the Answer.

**Summary:** Binary search the day range and use a greedy linear check to validate if $m$ bouquets of $k$ adjacent flowers can be formed.

---