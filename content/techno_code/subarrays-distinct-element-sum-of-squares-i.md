---
title: "Subarrays Distinct Element Sum of Squares I"
slug: subarrays-distinct-element-sum-of-squares-i
date: "2026-10-15"
---

# My Solution
~~~cpp
class Solution {
public:
    int sumCounts(vector<int>& nums) {
        int n = nums.size();
        int res = 0;
        for(int i = 0; i < n; i++) {
            unordered_set<int> st;
            for(int j = i; j < n; j++) {
                st.insert(nums[j]);
                int m = st.size();
                res += m * m;
            }
        }
        return res;
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Brute-force nested loops with a hash set to track distinct elements for every possible subarray.
- **Optimality**: Not optimal for large inputs, but likely sufficient for small constraints (typical of "Part I" problems). The bottleneck is the repeated set insertions and size queries for every subarray.

## Complexity
- **Time Complexity**: $O(n^2)$ on average. The nested loops iterate through all $n(n+1)/2$ subarrays, and `unordered_set::insert` operates in $O(1)$ average time.
- **Space Complexity**: $O(n)$ to store the distinct elements of the current subarray in the set.

## Efficiency Feedback
- **Runtime**: The use of `std::unordered_set` involves frequent dynamic memory allocations and hashing overhead. 
- **Optimization**: Since the range of values in `nums` is often small in these problems, replacing the `unordered_set` with a fixed-size boolean array or a frequency array (if the maximum value of `nums[i]` is known) would significantly reduce the constant factor and eliminate heap allocations.

## Code Quality
- **Readability**: Good. The logic is straightforward and easy to follow.
- **Structure**: Good. Simple implementation fitting for a competitive programming context.
- **Naming**: Moderate. `res` is acceptable, but `m` (for count) and `st` (for set) are overly generic. `distinctCount` and `seen` would be more descriptive.
- **Improvements**:
    - Change `res` to `long long` if the problem constraints allow the total sum to exceed $2^{31}-1$ (though `int` is used here, which may overflow depending on $n$).
    - Replace `unordered_set` with a bitmask or boolean array if values are within a small range.

---

# Question Revision
# Revision Report: Subarrays Distinct Element Sum of Squares I

- **Pattern**: Sliding Window / Two Pointers + Contribution Technique.
- **Brute Force**: Iterate through all possible subarrays $O(n^2)$, maintain a set of distinct elements for each, calculate the sum of squares, and accumulate the total. Time Complexity: $O(n^3)$ or $O(n^2)$.
- **Optimal Approach**: 
    - Use a **Sliding Window** to find the range $[L, R]$ where each element is distinct.
    - Instead of recalculating sums, use the **Contribution Technique**: for each element $A[i]$, determine how many valid subarrays it belongs to.
    - Maintain a frequency map and a running sum of squares. When the window is valid, the contribution of the current window to the total can be derived from the distance between pointers.
    - **Time Complexity**: $O(n)$ (each pointer moves from $0$ to $n$ once).
    - **Space Complexity**: $O(k)$ where $k$ is the number of distinct elements.
- **The 'Aha' Moment**: Whenever a problem asks for a sum over all "subarrays" with a "distinct" constraint, it's a signal to use a sliding window to bound the validity range.
- **Summary**: Use a sliding window to track distinct elements and calculate the contribution of each element to the total sum of squares.

---