---
title: "Subarray Sum Equals K"
slug: subarray-sum-equals-k
date: "2026-04-08"

---
---

# My Solution
~~~cpp
class Solution {
public:
    int subarraySum(vector<int>& nums, int k) {
        vector<int> prefixSum;
        prefixSum.push_back(0);

        for(int num : nums){
            prefixSum.push_back(num + prefixSum.back());
        }
        
        unordered_map<int, int> hash;
        hash[0] = 1;

        int count;
        count = 0;
        
        for(int i = 1; i < prefixSum.size(); i++){
            // cout << prefixSum[i];
            if (hash.count(prefixSum[i] - k)){
                // cout << "yes";
                count += hash[prefixSum[i] - k];
            }

            hash[prefixSum[i]]++;
            // cout << endl;
        }
        return count;
    }
};
~~~

# Submission Review
## Approach
* **Technique:** Prefix sum combined with a hash map (frequency map) to track seen prefix sums.
* **Optimality:** Optimal. It reduces the $O(N^2)$ brute-force approach to $O(N)$ by calculating the number of subarrays ending at index $i$ in constant time.

## Complexity
* **Time Complexity:** $O(N)$ on average due to hash map lookups.
* **Space Complexity:** $O(N)$ to store the `prefixSum` vector and the `hash` map.

## Efficiency Feedback
* **Bottleneck:** The `prefixSum` vector is redundant. You can maintain a running `currentSum` variable inside the loop instead of allocating $O(N)$ extra space.
* **Optimization:** Remove the `vector<int> prefixSum` entirely. Update `currentSum += num` on the fly. This reduces space complexity to $O(N)$ (strictly for the hash map) and improves cache locality.

## Code Quality
* **Readability:** Good. The logic is straightforward and easy to follow.
* **Structure:** Moderate. The separation of prefix sum calculation and counting could be merged into a single loop.
* **Naming:** Good. Variable names like `hash`, `count`, and `prefixSum` are descriptive enough.
* **Concrete Improvements:**
    * Use `int currentSum = 0;` instead of a vector.
    * Use `unordered_map::find` or the result of `hash[prefixSum[i] - k]` directly if you are certain about existence, though your current `count` logic is safe.
    * Avoid commenting out `cout` statements; clean code should be free of debug artifacts.

```cpp
// Optimized implementation suggestion:
int subarraySum(vector<int>& nums, int k) {
    unordered_map<int, int> hash;
    hash[0] = 1;
    int currentSum = 0, count = 0;
    
    for(int num : nums) {
        currentSum += num;
        if(hash.count(currentSum - k)) {
            count += hash[currentSum - k];
        }
        hash[currentSum]++;
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
Calculate the sum of every possible subarray using nested loops (starting index $i$, ending index $j$) and check if the sum equals $k$.
*   **Time:** $O(n^2)$
*   **Space:** $O(1)$

**Optimal Approach:** 
Maintain a running `current_sum` as you iterate. Use a hash map to store the frequency of each prefix sum encountered so far. At each step, calculate `diff = current_sum - k`; if `diff` exists in the hash map, it means a subarray summing to $k$ exists ending at the current index.
*   **Time:** $O(n)$
*   **Space:** $O(n)$

**The 'Aha' Moment:**
When a problem asks for the count of subarrays with a specific sum, realize that the difference between two prefix sums $S_j - S_i = k$ is algebraically equivalent to finding a subarray $[i+1, j]$ that sums to $k$.

**Summary:**
Whenever you see "subarray sum," transform the problem into a prefix sum lookup by storing previous sums in a hash map to achieve linear time complexity.

---
