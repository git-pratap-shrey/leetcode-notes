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
- **Technique:** Prefix Sum with Hash Map (Frequency Map).
- **Optimality:** Optimal. It reduces the $O(N^2)$ brute-force approach to $O(N)$ by leveraging the property: `current_prefix_sum - previous_prefix_sum = k`.

## Complexity
- **Time Complexity:** $O(N)$ on average. Each element is processed once, and hash map operations (insertion/lookup) are $O(1)$ on average.
- **Space Complexity:** $O(N)$ in the worst case to store prefix sums in the `unordered_map`.

## Efficiency Feedback
- **Runtime:** High efficiency due to the single-pass traversal. 
- **Memory:** `std::unordered_map` has some constant overhead. If the range of values is small and known, an array could be faster, but for arbitrary integer values, this is the standard approach.
- **Micro-optimization:** The `sum` variable is redundant and can be replaced directly with `prefix - k` to save a minor allocation/assignment.

## Code Quality
- **Readability:** Good. The logic is clear and follows standard idiomatic C++.
- **Structure:** Good. The code is concise and logic is localized.
- **Naming:** Moderate. `mp` is acceptable, but `prefix_counts` would be more descriptive. `sum` is confusingly named; it actually represents the "target" prefix sum needed to satisfy the condition `prefix - target = k`.
- **Concrete Improvements:**
    - Remove the `sum` variable to tighten the loop.
    - Use `reserve` on the `unordered_map` if $N$ is expected to be very large to prevent frequent rehashing.
    - `len` variable is unnecessary; use `nums.size()` directly in the loop condition or use a range-based for loop.

```cpp
// Suggested refinement
int subarraySum(vector<int>& nums, int k) {
    unordered_map<int, int> prefix_counts;
    prefix_counts[0] = 1;
    int current_prefix = 0, count = 0;
    
    for (int x : nums) {
        current_prefix += x;
        if (prefix_counts.count(current_prefix - k)) {
            count += prefix_counts[current_prefix - k];
        }
        prefix_counts[current_prefix]++;
    }
    return count;
}
```

---
---


# Question Revision
### Revision Report: Subarray Sum Equals K

**Pattern:** Prefix Sum + Hash Map

**Brute Force:** 
Iterate through all possible subarrays using nested loops to calculate sums, resulting in $O(n^2)$ time complexity.

**Optimal Approach:** 
Maintain a running `prefix_sum` and store the frequency of each sum encountered in a Hash Map. For every current index, check if `(prefix_sum - k)` exists in the map; if it does, add its frequency to the total count.
*   **Time Complexity:** $O(n)$
*   **Space Complexity:** $O(n)$

**The 'Aha' Moment:** 
Whenever you need to find a subarray that satisfies a sum condition, think of the prefix sum equation `sum(i, j) = prefix_sum[j] - prefix_sum[i-1]` and use a map to look up previous prefix sums in constant time.

**Summary:** 
When asked to count subarrays with a specific target sum, store running prefix sums in a hash map to transform the search into a $O(1)$ lookup.

---
