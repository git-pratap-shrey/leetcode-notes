---
title: "Split Array Largest Sum"
slug: split-array-largest-sum
date: "2026-04-30"
---

# My Solution
~~~cpp
class Solution {
public:
    bool canSplit(vector<int>& nums, int k, int maxSum) {
        int count = 1;
        long long currSum = 0;

        for (int num : nums) {
            if (currSum + num <= maxSum) {
                currSum += num;
            } else {
                count++;
                currSum = num;
            }
        }
        return count <= k;
    }

    int splitArray(vector<int>& nums, int k) {
        int low = *max_element(nums.begin(), nums.end());
        long long high = 0;

        for (int num : nums) {
            high += num;
        }

        int ans = high;

        while (low <= high) {
            int mid = low + (high - low) / 2;

            if (canSplit(nums, k, mid)) {
                ans = mid;
                high = mid - 1;
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
- **Technique**: Binary Search on the Answer combined with a Greedy verification function (`canSplit`).
- **Optimality**: Optimal. This is the standard efficient approach for "minimize the maximum value" problems.

## Complexity
- **Time Complexity**: $O(N \cdot \log(\sum \text{nums}))$, where $N$ is the number of elements. The binary search runs for $\log(\text{sum})$ iterations, and each iteration performs a linear scan of the array.
- **Space Complexity**: $O(1)$ auxiliary space beyond the input array.

## Efficiency Feedback
- The runtime is optimal.
- **Potential Overflow**: The variable `high` is correctly declared as `long long` to handle the sum of the array. However, `mid` and `ans` are declared as `int`. While the final answer is expected to fit in an `int` based on typical problem constraints, if the total sum exceeds $2^{31}-1$, `int mid` will overflow. For robustness, `mid` and `ans` should be `long long`.

## Code Quality
- **Readability**: Good. The logic is clear and the helper function is well-defined.
- **Structure**: Good. Logic is logically separated between the search space management and the feasibility check.
- **Naming**: Good. Variable names like `canSplit`, `currSum`, and `maxSum` accurately describe their purpose.
- **Concrete Improvements**:
    - Change `int mid` to `long long mid` to prevent overflow during calculations when `high` is large.
    - Change `int ans` to `long long ans` for consistency with `high`.

---

# Question Revision
### Split Array Largest Sum

**Pattern:** Binary Search on Answer

**Brute Force:** 
Use recursion or backtracking to explore every possible way to partition the array into $k$ contiguous subarrays, calculating the maximum sum for each configuration and picking the minimum.

**Optimal Approach:**
Binary search for the optimal "largest sum" within the range $[\max(nums), \sum nums]$. For a candidate value `mid`, greedily traverse the array to count how many subarrays are needed such that no subarray sum exceeds `mid`. If the count is $\le k$, the value is feasible; attempt to find a smaller maximum by searching the left half.

- **Time Complexity:** $O(n \log(\sum nums - \max(nums)))$
- **Space Complexity:** $O(1)$

**The 'Aha' Moment:** 
The phrase "minimize the maximum value" is a primary signal to use Binary Search on the answer space rather than the input array.

**Summary:** 
Binary search for the smallest possible limit that allows the array to be partitioned into $k$ or fewer contiguous subarrays.

---