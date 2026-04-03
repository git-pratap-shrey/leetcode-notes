---
title: "Continuous Subarray Sum"
slug: continuous-subarray-sum

---
---

# My Solution
~~~cpp
class Solution {
public:
    bool checkSubarraySum(vector<int>& nums, int k) {
        unordered_map<int,int>mp;
        mp[0]=-1;
        int sum=0;
        
        for(int i=0;i<nums.size();i++){
            sum = sum+nums[i];
            int rem = sum % k;
            if(mp.find(rem)!=mp.end()){
               if(i-mp[rem]>=2){
                return true ;
               }
            }
            else{
                mp[rem]=i;
            }

        }

    return false;                                   
        
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Prefix sum with Hash Map (modular arithmetic).
*   **Optimality:** Optimal. It uses the property that if `(sum[i] - sum[j]) % k == 0`, then `sum[i] % k == sum[j] % k`. Storing the first occurrence index ensures the subarray length constraint ($\ge 2$) is met.

## Complexity
*   **Time Complexity:** $O(n)$, where $n$ is the number of elements in `nums`. The map operations are average $O(1)$.
*   **Space Complexity:** $O(\min(n, k))$, as the map stores at most $k$ distinct remainders.

## Efficiency Feedback
*   **Runtime:** The approach is efficient. Note that `sum % k` can be negative in C++ if `sum` is negative; however, `k` is stated to be positive in typical constraints for this problem, so `rem` will behave predictably.
*   **Optimization:** Using `std::unordered_map` is generally fine, but if memory is a bottleneck and $k$ is small, a `std::vector<int> mp(k, -2)` could be used for faster constant-time access.

## Code Quality
*   **Readability:** Good. The logic is clear and concise.
*   **Structure:** Good. The initialization of `mp[0] = -1` correctly handles subarrays starting from index 0.
*   **Naming:** Moderate. `mp` and `rem` are standard but slightly generic; `remainder_map` and `current_remainder` would be more descriptive.
*   **Concrete Improvements:**
    *   **Safety:** The code assumes `k != 0`. While the problem constraints usually guarantee $k \ge 1$, adding a check or comment is good practice.
    *   **Efficiency:** If the constraints allow negative numbers in `nums`, ensure `rem = (sum % k + k) % k` to handle negative remainders consistently.
    *   **Formatting:** Add a blank line before the final `return false;` for better visual flow.

---
---


# Question Revision
### Revision Report: Continuous Subarray Sum

**Pattern:** Prefix Sums + Hash Map (Remainder Theorem)

**Brute Force:**
Iterate through all possible subarrays using nested loops to calculate their sums and check if the sum is a multiple of $k$.
*   **Time:** $O(n^2)$
*   **Space:** $O(1)$

**Optimal Approach:**
Calculate the running prefix sum modulo $k$. Store the first occurrence of each remainder in a Hash Map (`remainder -> index`). If the same remainder reappears later, it indicates that the subarray sum between those two indices is a multiple of $k$.
*   **Time:** $O(n)$
*   **Space:** $O(min(n, k))$

**The 'Aha' Moment:**
When a problem asks for a subarray sum that satisfies a modular constraint, using the property $(sum[j] - sum[i]) \% k == 0 \iff sum[j] \% k == sum[i] \% k$ turns a range-sum problem into a simple equality check of remainders.

**Summary:**
Whenever you need to find a subarray sum meeting a divisibility condition, map prefix-sum remainders to their indices to detect valid intervals in linear time.

---
