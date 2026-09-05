---
title: "Find the Largest Almost Missing Integer"
slug: find-the-largest-almost-missing-integer
date: "2026-08-18"
---

# My Solution
~~~cpp
class Solution {
public:
    int largestInteger(vector<int>& nums, int k) {
        int n = nums.size();
        vector<int> count(51, 0);

        for (int i=0;i<=n-k;i++) {
            set<int> s;
            for (int j=i;j<i+k;j++) {
                s.insert(nums[j]);
            }
           for (int x:s) {
                count[x]++;
            }
        }        
        for (int x=50;x>=0;x--) {
            if (count[x]==1) {
                return x;
            }
        }
        return -1;
    }
};
~~~

# Submission Review
## Approach
- **Technique:** Brute-force sliding window with frequency counting. 
- **Optimality:** Suboptimal. While the logic is correct, the nested loop approach re-evaluates windows redundantly, and the `std::set` overhead is unnecessary given the small constraints.

## Complexity
- **Time Complexity:** $O((n-k) \cdot k \cdot \log k)$, where $n$ is the size of `nums`. The triple-nested structure (window iteration $\times$ window expansion $\times$ set insertion) is inefficient.
- **Space Complexity:** $O(k)$ for the set and $O(1)$ (fixed size 51) for the frequency array.

## Efficiency Feedback
- The use of `std::set` inside the inner loop adds a logarithmic factor and dynamic memory allocation overhead.
- A boolean array or frequency counter inside the loop could eliminate the $O(k \log k)$ per window, reducing it to $O(k)$.
- Since the problem constraints (implicitly implied by `count[51]`) are small, the complexity is acceptable, but it can be improved significantly.

## Code Quality
- **Readability:** Good. The logic is straightforward and easy to follow.
- **Structure:** Moderate. The sliding window logic is nested deeply; extracting the frequency counting into a helper or optimizing the window traversal would improve clarity.
- **Naming:** Good. `nums`, `k`, `count`, and `s` are standard and context-appropriate.
- **Concrete Improvements:**
    - Replace `std::set` with a frequency array or a boolean array of size 51 inside the loop to avoid allocations.
    - If `k` is large, consider a more efficient way to track window counts (e.g., using a sliding window frequency map), though given the range is [0, 50], a simple linear scan per window is perfectly fine.
    - `count[x] == 1` correctly identifies elements present in exactly one window, as required by the "Almost Missing" definition.

---

# Question Revision
### Revision Report: Find the Largest Almost Missing Integer

**Pattern:** Frequency Counting / Hash Map

**Brute Force:**
Iterate through all possible subarrays of length $k$, collect all integers that appear exactly once in their respective subarray, and track the maximum value among those that appear in exactly one subarray total across the entire array. This is $O(n \cdot k)$.

**Optimal Approach:**
1. Use a frequency map to count occurrences of every integer in the array.
2. An integer $x$ can only be "almost missing" if it appears exactly once in the entire array (frequency count of 1) or if it is the only element in a subarray of length $k$ (which implies it must appear exactly $k$ times if $k > 1$, or 1 time if $k=1$).
3. Specifically: 
   - If an integer appears exactly $k$ times, it could potentially be the only element in a subarray of length $k$.
   - If an integer appears exactly once, it qualifies if $k=1$.
4. Check the candidates against the constraints and return the largest.
5. **Complexity:** $O(n)$ time and $O(n)$ space.

**The 'Aha' Moment:**
When a problem asks for an element that appears in a specific "local" context (subarray) but has global constraints, focus on the frequency of occurrences rather than simulating the sliding window.

**Summary:** 
Transform subarray frequency requirements into global occurrence counts to reduce sliding window overhead to linear time.

---