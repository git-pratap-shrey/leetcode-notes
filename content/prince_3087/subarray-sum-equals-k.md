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
        unordered_map<int,int>mp;
        mp[0]=1;
        int count =0;
        int sum=0;
        for(int i=0;i<nums.size();i++){
            sum =sum+nums[i];
            int ques = sum-k;
            if(mp.find(ques)!=mp.end()){
                count = count+mp[ques];
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
*   **Optimality:** Optimal. It achieves the linear time complexity required to solve the problem by trading space for speed.

## Complexity
*   **Time Complexity:** $O(N)$, where $N$ is the number of elements in the vector, as it involves a single pass with $O(1)$ average-case hash map lookups.
*   **Space Complexity:** $O(N)$ in the worst case, as the hash map might store up to $N$ distinct prefix sums.

## Efficiency Feedback
*   **Performance:** The use of `std::unordered_map` is appropriate here. In highly constrained environments (with anti-hash test cases), `std::map` would cause a TLE ($O(N \log N)$), while `std::unordered_map` is efficient on average.
*   **Optimization:** If the range of potential prefix sums is small and known, a fixed-size array could outperform a hash map, but for general inputs, the current approach is the standard, efficient solution.

## Code Quality
*   **Readability:** Good. The logic is concise and easy to follow.
*   **Structure:** Good. The initialization of `mp[0] = 1` correctly handles subarrays starting from index 0.
*   **Naming:** Moderate. `ques` is a slightly ambiguous name; `target` or `diff` would be more descriptive.
*   **Concrete Improvements:** 
    *   Use `size_t` or `int` consistently for the loop index.
    *   `mp[sum]++` can be slightly faster by using `mp.emplace(sum, 0).first->second++` to avoid double lookup, though for this problem size, it is negligible.
    *   Consider adding `ios::sync_with_stdio(0); cin.tie(0);` if this were part of a larger competitive programming template to ensure fast I/O.

---
---


# Question Revision
### Revision Report: Subarray Sum Equals K

**Pattern:** Prefix Sum + Hash Map

**Brute Force:** 
Calculate the sum of every possible subarray using nested loops (starting index $i$, ending index $j$) and compare each against $k$.
*   **Time:** $O(n^2)$
*   **Space:** $O(1)$

**Optimal Approach:**
Maintain a running `prefix_sum` as you iterate. Use a Hash Map to store the frequency of each `prefix_sum` encountered so far. At each index, check if `(prefix_sum - k)` exists in the map; if it does, it means a subarray summing to $k$ exists ending at the current index.
*   **Time:** $O(n)$
*   **Space:** $O(n)$

**The 'Aha' Moment:**
When a problem asks for the number of contiguous subarrays that meet a sum condition, realize that the difference between two prefix sums gives you the sum of the elements between them.

**Summary:** 
Use a Hash Map to store frequency counts of running prefix sums to identify valid subarrays in linear time whenever the calculation requires a "range sum" check.

---
