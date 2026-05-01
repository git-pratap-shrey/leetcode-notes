---
title: "Capacity To Ship Packages Within D Days"
slug: capacity-to-ship-packages-within-d-days
date: "2026-04-28"
---

# My Solution
~~~cpp
class Solution {
public:
    int findDays(vector<int>& weights, int cap) {
        int days = 1;
        int load = 0;

        for (int w : weights) {
            if (load + w > cap) {
                days++;
                load = w;
            } else {
                load += w;
            }
        }
        return days;
    }

    int shipWithinDays(vector<int>& weights, int days) {
        int low = *max_element(weights.begin(), weights.end());
        int high = accumulate(weights.begin(), weights.end(), 0);

        while (low <= high) {
            int mid = low + (high - low) / 2;

            int requiredDays = findDays(weights, mid);

            if (requiredDays <= days) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }

        return low;
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Binary Search on Answer combined with a Greedy simulation.
- **Optimality**: Optimal. The problem exhibits monotonicity (if capacity $C$ works, any capacity $> C$ also works), making binary search the most efficient approach.

## Complexity
- **Time Complexity**: $O(N \log(\sum \text{weights} - \max(\text{weights})))$, where $N$ is the number of packages. The binary search runs in logarithmic time relative to the weight range, and each check takes linear time.
- **Space Complexity**: $O(1)$. No additional data structures are used proportional to input size.

## Efficiency Feedback
- **Range Initialization**: Using `max_element` for `low` and `accumulate` for `high` correctly establishes the tightest possible search boundaries.
- **Overflow Prevention**: The use of `mid = low + (high - low) / 2` is a good practice to prevent integer overflow.
- **Performance**: The implementation is highly efficient; no further meaningful optimizations are required for this problem.

## Code Quality
- **Readability**: Good. The logic is clear and follows standard competitive programming patterns.
- **Structure**: Good. The separation of the greedy check into `findDays` makes the binary search logic easy to follow.
- **Naming**: Good. Variables like `low`, `high`, `mid`, and `requiredDays` are descriptive and conventional.
- **Improvements**: 
    - The `findDays` function could be marked as `const` or `static` since it does not modify the class state.
    - Consider using `long long` for `high` and `load` if the problem constraints allow for total weight to exceed $2^{31}-1$ (though for typical LeetCode constraints on this problem, `int` suffices).

---

# Question Revision
### Capacity To Ship Packages Within D Days

**Pattern:** Binary Search on Answer

**Brute Force:**
Iterate through every possible capacity starting from the maximum single package weight up to the sum of all weights. For each capacity, simulate the shipping process to check if it fits within $D$ days.

**Optimal Approach:**
Perform a binary search on the range of possible capacities: `low = max(weights)` and `high = sum(weights)`. For each `mid` capacity, use a greedy helper function to count the days required to ship all packages. If the days required $\le D$, the capacity is viable; attempt to find a smaller valid capacity by searching the left half.

*   **Time Complexity:** $O(n \log(\sum \text{weights} - \max \text{weights}))$
*   **Space Complexity:** $O(1)$

**The 'Aha' Moment:**
The problem asks for a "minimum" value and exhibits monotonicity—if a capacity $X$ works, any capacity greater than $X$ will also work.

**Summary:**
Binary search the answer space between the heaviest package and the total weight sum, using a greedy check to validate each capacity.

---