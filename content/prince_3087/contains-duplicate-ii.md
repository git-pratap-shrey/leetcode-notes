---
title: "Contains Duplicate II"
slug: contains-duplicate-ii
date: "2026-08-31"
---

# My Solution
~~~cpp
class Solution {
public:
    bool containsNearbyDuplicate(vector<int>& nums, int k) {
        unordered_map<int,int>mp;
        for(int i=0;i<nums.size();i++){
            if(mp.find(nums[i])!=mp.end()){
                if(abs(i-mp[nums[i]])<=k){
                    return true;
                }
            }
            mp[nums[i]]=i;
        }
        return false;
        
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Hash Map (Tracking last seen index).
*   **Optimality:** Optimal. It effectively tracks the most recent index of each element to minimize the distance between duplicates, ensuring the condition $|i - j| \leq k$ is checked against the best possible candidate.

## Complexity
*   **Time Complexity:** $O(n)$ on average, where $n$ is the number of elements in `nums`. Every element is processed once, and hash map lookups/inserts are $O(1)$ on average.
*   **Space Complexity:** $O(\min(n, k))$ in practice, as the map stores unique elements. While worst-case space is $O(n)$, the logic implicitly handles duplicates efficiently.

## Efficiency Feedback
*   **Performance:** The use of `unordered_map` provides good average-case performance.
*   **Optimization:** For very tight constraints or large datasets, `std::unordered_map` can occasionally suffer from collisions or overhead. If `nums` values were in a small, known range, a fixed-size array could be faster, but given the generic input, the current approach is standard. 
*   **Note:** `std::abs` is unnecessary here because $i$ will always be greater than `mp[nums[i]]` by design.

## Code Quality
*   **Readability:** Good. The logic is straightforward and idiomatic.
*   **Structure:** Good. The loop correctly handles both the condition check and map updates.
*   **Naming:** Moderate. `mp` is acceptable, but `last_seen_indices` would be more descriptive.
*   **Improvements:**
    *   **Redundant Logic:** Remove `abs()` as $i$ is strictly increasing.
    *   **Optimization:** Using `mp.find()` followed by `mp[nums[i]] = i` performs two lookups. You can optimize this by checking the result of `mp.insert` or using the iterator returned by `find` to update the value in-place, saving one hash calculation.
    *   **Const correctness:** The parameter `nums` should ideally be passed as `const vector<int>&` to avoid accidental modifications.

```cpp
// Suggested minor refinement
bool containsNearbyDuplicate(const vector<int>& nums, int k) {
    unordered_map<int, int> last_seen;
    for (int i = 0; i < nums.size(); ++i) {
        auto it = last_seen.find(nums[i]);
        if (it != last_seen.end() && i - it->second <= k) {
            return true;
        }
        last_seen[nums[i]] = i;
    }
    return false;
}
```

---

# Question Revision
### Revision Report: Contains Duplicate II

**Pattern:** Sliding Window / Hash Map

**Brute Force:**
Use nested loops to compare every element $i$ with every element $j$. If `nums[i] == nums[j]` and `abs(i - j) <= k`, return `true`.
*   **Time:** $O(n \cdot k)$
*   **Space:** $O(1)$

**Optimal Approach:**
Maintain a Hash Map (or Set) acting as a sliding window of size $k$. Iterate through the array; if the current element exists in the map, check if the distance to its last recorded index is $\le k$. Otherwise, store/update the current element's index. If the map exceeds size $k$, remove the oldest element.
*   **Time:** $O(n)$
*   **Space:** $O(k)$

**The 'Aha' Moment:**
When the problem constraints require checking a condition within a fixed distance ($k$) of the current element, it’s a clear signal to use a sliding window maintained by a Hash Map to track historical positions.

**Summary:**
Whenever you see a constraint involving "at most $k$ distance," use a sliding window map to track the index of the most recent occurrence to ensure $O(1)$ lookups.

---