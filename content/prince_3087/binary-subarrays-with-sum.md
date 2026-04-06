---
title: "Binary Subarrays With Sum"
slug: binary-subarrays-with-sum
date: "2026-03-29"

---
---

# My Solution
~~~cpp
class Solution {
public:
    int numSubarraysWithSum(vector<int>& nums, int goal) {
        unordered_map<int,int>mp;
        mp[0]=1;
        int sum =0;
        int count =0;
        for(int i=0;i<nums.size();i++){
            sum = sum+nums[i];
            int ques = sum-goal;
            if(mp.find(ques)!=mp.end()){
                count = count + mp[ques];
            }
           
            mp[sum]++;
            
        }
        return count;
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Prefix Sum with Hash Map (Frequency Map).
*   **Optimality:** Optimal in terms of logic. It solves the problem in a single pass by tracking the frequency of prefix sums encountered so far to identify subarrays that sum to `goal`.

## Complexity
*   **Time Complexity:** $O(N)$ on average, where $N$ is the size of `nums`. 
*   **Space Complexity:** $O(N)$ in the worst case (when all prefix sums are distinct).
*   **Bottleneck:** The use of `std::unordered_map` can lead to $O(N^2)$ worst-case time complexity due to hash collisions, although this is rare in competitive programming.

## Efficiency Feedback
*   **Runtime:** The `std::unordered_map` has higher constant-time overhead compared to a `std::vector` or a flat array. Since prefix sums are bounded by the length of the array ($0 \le \text{sum} \le \text{nums.size()}$), a `std::vector<int>` of size $N+1$ would be significantly faster and more memory-efficient.
*   **Optimization:** Replace `unordered_map<int, int>` with `vector<int> freq(nums.size() + 1, 0)`.

## Code Quality
*   **Readability:** Good. The logic is clear and standard for this type of problem.
*   **Structure:** Good. Minimalist and follows a logical flow.
*   **Naming:** Moderate. `mp` is acceptable but `prefixSumCounts` is more descriptive. `ques` is non-standard; `target` or `diff` would be clearer.
*   **Concrete Improvements:**
    *   Change `unordered_map` to `vector<int>` to improve performance and memory usage.
    *   Initialize the frequency vector with `freq[0] = 1`.
    *   Consider `long long` for `count` if the problem constraints were larger (though `int` is sufficient for this specific problem based on LeetCode constraints).

```cpp
// Suggested optimization:
vector<int> freq(nums.size() + 1, 0);
freq[0] = 1;
// ... inside loop:
if (sum >= goal) count += freq[sum - goal];
freq[sum]++;
```

---
---


# Question Revision
### Revision Report: Binary Subarrays With Sum

**Pattern:** Prefix Sum + Hash Map (or Sliding Window)

**Brute Force:**
Iterate through all possible subarrays using nested loops, calculating the sum of each, and incrementing a counter if the sum equals the target.
*   **Time Complexity:** $O(n^2)$
*   **Space Complexity:** $O(1)$

**Optimal Approach:**
Treat the array as a sequence of prefix sums. As you iterate, maintain a hash map of frequencies of previous prefix sums encountered. For each index $i$, the number of subarrays ending at $i$ with `sum == goal` is equal to the frequency of `(current_prefix_sum - goal)` found in the map.
*   **Time Complexity:** $O(n)$
*   **Space Complexity:** $O(n)$

**The 'Aha' Moment:**
When a problem asks for the *count of subarrays* that satisfy a specific sum condition, transform the problem into finding a target *difference* between two prefix sums.

**Summary:**
Whenever you need to count subarrays with a specific sum, map the frequency of prefix sums to solve it in a single linear pass.

---
