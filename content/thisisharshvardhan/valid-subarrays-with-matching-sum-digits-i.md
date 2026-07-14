---
title: "Valid Subarrays With Matching Sum Digits I"
slug: valid-subarrays-with-matching-sum-digits-i
date: "2026-06-21"
---

# My Solution
~~~cpp
class Solution {
public:
    int countValidSubarrays(vector<int>& nums, int x) {
        int n = nums.size();
        int count=0;
        vector<long long> prefix(n+1,0);
        for (int i=0;i<n; i++){
            prefix[i+1] = prefix[i] + nums[i];
        }

        for (int l=0;l<n;l++){
            for (int r=l; r<n; r++){
                long long sum = prefix[r+1] - prefix[l];
                if (sum%10 !=x) continue;
                long long lead = sum;
                while (lead>=10) lead/=10;
                if (lead==x) count++;
            }
        }
        return count;
    }
};
~~~

# Submission Review
## Approach
- **Technique:** Brute force with Prefix Sums.
- **Optimality:** Suboptimal. The solution iterates through all possible subarrays, resulting in quadratic time complexity. While acceptable for small constraints (typically $N \le 5000$), it is not the most efficient approach for larger datasets.

## Complexity
- **Time Complexity:** $O(n^2 \cdot \log(\text{max\_sum}))$. The nested loops generate all $O(n^2)$ subarrays, and the `while` loop to find the leading digit takes logarithmic time relative to the sum of the subarray.
- **Space Complexity:** $O(n)$ to store the `prefix` sum array.

## Efficiency Feedback
- **Redundant Space:** The `prefix` array is unnecessary. Since the inner loop iterates through $r$ incrementally for a fixed $l$, a running sum variable could reduce space complexity to $O(1)$.
- **Digit Extraction:** The condition `sum % 10 != x` acts as a fast filter, reducing the number of times the `while` loop is executed, which is a positive optimization.

## Code Quality
- **Readability:** Good. The logic is straightforward and easy to follow.
- **Structure:** Good. The separation of prefix sum calculation and subarray evaluation is clear.
- **Naming:** Moderate. `l` and `r` are common for pointers, but `lead` is slightly ambiguous (though understandable in context).
- **Improvements:**
    - Replace the `prefix` vector with a local `current_sum` variable inside the first loop to eliminate $O(n)$ space.
    - Use `long long` for `count` if the problem constraints allow for a result exceeding $2^{31}-1$.

---

# Question Revision
### Revision Report: Valid Subarrays With Matching Sum Digits I

**Pattern**: Prefix Sum + Hash Map

**Brute Force**: Iterate through all possible subarrays using nested loops, calculate the sum of each, and verify if the sum of its digits matches the required criteria.
- **Time**: $O(n^2 \cdot \log(\text{sum}))$
- **Space**: $O(1)$

**Optimal Approach**: 
Utilize the property that the sum of digits of a number is congruent to the number modulo 9 (Digital Root theory). Maintain a running prefix sum and use a hash map to store the frequency of each remainder encountered so far. For a target condition, calculate the required prefix remainder and add its frequency to the total count.
- **Time**: $O(n)$
- **Space**: $O(1)$ (since the map size is limited to 9 possible remainders)

**The 'Aha' Moment**: The mention of "sum of digits" is a strong hint to use modulo 9 arithmetic to transform a digit-based problem into a standard prefix sum problem.

**Summary**: Use a hash map to track prefix sums modulo 9 to count valid subarrays in linear time.

---