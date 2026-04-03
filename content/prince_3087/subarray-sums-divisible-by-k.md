---
title: "Subarray Sums Divisible by K"
slug: subarray-sums-divisible-by-k

---
---

# My Solution
~~~cpp
class Solution {
public:
    int subarraysDivByK(vector<int>& nums, int k) {
        unordered_map<int,int>mp;
        mp[0]=1;
        int sum =0;
        int rem =0;
        int result =0;
        for(int i=0;i<nums.size();i++){
            sum = sum+nums[i];
            rem = sum%k;
            if(rem<0){
                rem = rem+k;
            }
            result = result+mp[rem];
            mp[rem]++;
        }
        return result;
        
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Prefix sum with hash map (frequency array) to track modular remainders.
*   **Optimality:** Optimal. The problem requires checking subarray sums $(sum[j] - sum[i]) \pmod k = 0$, which is equivalent to $sum[j] \pmod k = sum[i] \pmod k$. This approach does this in a single pass.

## Complexity
*   **Time Complexity:** $O(N)$ on average, where $N$ is the number of elements in `nums`.
*   **Space Complexity:** $O(\min(N, K))$, as the map stores at most $K$ distinct remainders.

## Efficiency Feedback
*   **Bottleneck:** The use of `std::unordered_map` introduces overhead due to hashing and potential collisions. 
*   **Optimization:** Since the remainders are guaranteed to be in the range $[0, K-1]$, a fixed-size array `std::vector<int> count(k, 0)` is significantly faster and more memory-efficient than `unordered_map`.

## Code Quality
*   **Readability:** Good. The logic is concise and easy to follow.
*   **Structure:** Good. Standard prefix sum pattern.
*   **Naming:** Good. Variable names (`mp`, `rem`, `sum`) are standard and clear.
*   **Concrete Improvements:** 
    *   Replace `unordered_map<int, int> mp` with `vector<int> count(k, 0)` to eliminate hashing overhead.
    *   Avoid storing `mp[0]=1` in a map if using an array; simply initialize `count[0] = 1`.
    *   Consider using `long long` for `sum` if the input constraints allow for potential integer overflow (though not explicitly required by typical LC constraints for this problem, it is safer).

```cpp
// Optimized version
int subarraysDivByK(vector<int>& nums, int k) {
    vector<int> count(k, 0);
    count[0] = 1;
    int sum = 0, result = 0;
    for (int x : nums) {
        sum = (sum + x) % k;
        if (sum < 0) sum += k;
        result += count[sum];
        count[sum]++;
    }
    return result;
}
```

---
---


# Question Revision
### Revision Report: Subarray Sums Divisible by K

**Pattern:** Prefix Sum + Hash Map (Remainder Theorem)

**Brute Force:** 
Iterate through all possible subarrays $(i, j)$, calculate the sum, and check if `sum % K == 0`.
*   **Time Complexity:** $O(n^2)$
*   **Space Complexity:** $O(1)$

**Optimal Approach:** 
Use a Hash Map to store the frequency of prefix sum remainders. As you iterate, calculate the current prefix sum `s`. The remainder is `r = ((s % K) + K) % K`. If this remainder has been seen before, the subarray between the previous occurrence and the current index is divisible by $K$. Add the frequency of this remainder to the count and update the map.
*   **Time Complexity:** $O(n)$
*   **Space Complexity:** $O(K)$

**The 'Aha' Moment:** 
When a problem asks for "subarrays with a property based on a sum" and involves modular arithmetic, realizing that two prefix sums $P_i$ and $P_j$ result in a subarray sum divisible by $K$ if and only if $P_i \equiv P_j \pmod K$ turns the problem into a simple frequency count.

**Summary:** 
Whenever you see "subarray sum divisible by K," map the running prefix sum's remainder to its frequency to find matching pairs in linear time.

---
