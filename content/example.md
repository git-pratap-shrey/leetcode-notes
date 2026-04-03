## Output Example

---
title: "Subarray Sum Equals K"
slug: subarray-sum-equals-k

---
---

# My Solution
~~~cpp
class Solution {
public:
    int subarraySum(vector<int>& nums, int k) {
        unordered_map<int,int> mp;
        int len=nums.size();
        mp[0]=1;
        int prefix=0;
        int count=0;
        int sum=0;
        for(int i=0;i<len;i++){
            prefix=prefix+nums[i];
            sum=prefix-k;
            count=count+mp[sum];
            mp[prefix]+=1;

            
        }

        return count;

    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Prefix Sum with Hash Map (Frequency Map).
*   **Optimality:** Optimal. It achieves $O(N)$ time complexity by transforming the range sum problem into a difference lookup, effectively finding subarrays $[j, i]$ where $P[i] - P[j-1] = k$.

## Complexity
*   **Time Complexity:** $O(N)$ average, where $N$ is the length of `nums`, as `unordered_map` operations take $O(1)$ on average.
*   **Space Complexity:** $O(N)$ in the worst case to store up to $N$ unique prefix sums in the hash map.

## Efficiency Feedback
*   **Performance:** The logic is efficient. Using `std::unordered_map` is generally fine, but in scenarios with strict time limits or malicious test cases, `std::unordered_map` can suffer from collisions ($O(N^2)$ worst case). 
*   **Optimization:** If the constraints on `nums` values are small, a `std::vector` or a custom hash table could be used. For competitive programming, `std::map` is $O(N \log N)$ and safer against anti-hash tests.

## Code Quality
*   **Readability:** Good. The logic is concise and follows standard idiomatic C++.
*   **Structure:** Good. The initialization `mp[0]=1` correctly handles subarrays starting from index 0.
*   **Naming:** Moderate. `prefix` and `sum` variables are slightly redundant; `current_sum` and `target` might be more descriptive.
*   **Concrete Improvements:**
    *   **Redundancy:** The variable `sum` is unnecessary. You can directly perform `count += mp[prefix - k]`.
    *   **Performance:** Reserve space for the map if the input size $N$ is large: `mp.reserve(len);` to avoid rehashing overhead.
    *   **Refactored snippet:**
        ```cpp
        unordered_map<int, int> mp;
        mp.reserve(nums.size());
        mp[0] = 1;
        int current_sum = 0, count = 0;
        for (int x : nums) {
            current_sum += x;
            if (mp.count(current_sum - k)) count += mp[current_sum - k];
            mp[current_sum]++;
        }
        ```

---
---


# Question Revision
### Revision Report: Subarray Sum Equals K

**Pattern:** Prefix Sum + Hash Map

**Brute Force:** Generate all possible subarrays using nested loops, calculate their sums, and compare each against `k`.
*   **Time Complexity:** $O(n^2)$
*   **Space Complexity:** $O(1)$

**Optimal Approach:** Use a running prefix sum to track the current total. Store the frequency of each prefix sum encountered so far in a hash map. If `(current_sum - k)` exists in the map, it means there is a subarray ending at the current index that sums to `k`.
*   **Time Complexity:** $O(n)$
*   **Space Complexity:** $O(n)$

**The 'Aha' Moment:** The problem asks for the *number of* subarrays that sum to a target, implying you need a way to look back at previous prefix sums to find the difference `k` instantly.

**Summary:** When asked for the count of subarrays with a specific sum, map the frequency of prefix sums to instantly identify valid segments.

---
