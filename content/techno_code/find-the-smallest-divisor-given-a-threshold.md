---
title: "Find the Smallest Divisor Given a Threshold"
slug: find-the-smallest-divisor-given-a-threshold
date: "2026-04-27"
---

# My Solution
~~~cpp
class Solution {
public:
    bool isPossible(vector<int>& nums, int threshold, int divisor) {
        int sum = 0;
        
        for (int i = 0; i < nums.size(); i++) {
            sum += (nums[i] + divisor - 1) / divisor; // ceil division
            
            if (sum > threshold) return false; // early break
        }
        
        return sum <= threshold;
    }

    int smallestDivisor(vector<int>& nums, int threshold) {
        int low = 1;
        int high = *max_element(nums.begin(), nums.end());
        
        int ans = high;
        
        while (low <= high) {
            int mid = low + (high - low) / 2;
            
            if (isPossible(nums, threshold, mid)) {
                ans = mid;
                high = mid - 1; // try smaller
            } else {
                low = mid + 1;  // need bigger divisor
            }
        }
        
        return ans;
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Binary Search on the Answer. The problem exhibits monotonicity: if a divisor $d$ satisfies the threshold, any divisor $d' > d$ will also satisfy it.
- **Optimality**: Optimal. The search space for the divisor is $[1, \max(nums)]$, and each check takes linear time.

## Complexity
- **Time Complexity**: $O(N \log(\max(nums)))$, where $N$ is the size of the input array.
- **Space Complexity**: $O(1)$ auxiliary space.

## Efficiency Feedback
- **Early Exit**: The `if (sum > threshold) return false;` inside the loop is an effective optimization to prevent unnecessary iterations.
- **Potential Bug (Overflow)**: The variable `sum` is declared as `int`. In scenarios where `nums.size()` is large (e.g., $10^5$) and the divisor is small, the cumulative sum can exceed `INT_MAX` before the `sum > threshold` check triggers, provided `threshold` is also a large value. Using `long long` for `sum` would be safer.
- **Ceil Calculation**: The use of `(nums[i] + divisor - 1) / divisor` is an efficient way to perform ceiling division without floating-point math.

## Code Quality
- **Readability**: Good. The logic is straightforward and easy to follow.
- **Structure**: Good. The separation of the validation logic into `isPossible` improves maintainability.
- **Naming**: Good. Variables like `low`, `high`, `mid`, and `ans` are standard for binary search implementations.
- **Improvements**:
    - Change `int sum` to `long long sum` to prevent integer overflow.
    - Pass `vector<int>& nums` by reference in `isPossible` (already done, which is correct).

---

# Question Revision
### Revision Report: Find the Smallest Divisor Given a Threshold

**Pattern:** Binary Search on Answer Space

**Brute Force:** 
Iterate through every integer from $1$ to $\max(nums)$. For each integer, calculate the sum of divisions (ceiling) and return the first one that is $\le$ threshold. 
- **Complexity:** $O(\max(nums) \cdot n)$

**Optimal Approach:**
Perform binary search over the range of possible divisors $[1, \max(nums)]$. For each midpoint `mid`, calculate the total sum; if the sum is $\le$ threshold, the divisor is valid, and we attempt to find a smaller one by searching the left half.
- **Time Complexity:** $O(n \log(\max(nums)))$
- **Space Complexity:** $O(1)$

**The 'Aha' Moment:** 
The request for the "smallest" value that satisfies a condition, combined with the fact that the sum decreases monotonically as the divisor increases, signals binary search on the result range.

**Summary:** 
Apply binary search on the answer range when the problem asks for a minimum/maximum value that satisfies a monotonic condition.

---