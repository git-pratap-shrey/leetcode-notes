---
title: "Maximum Gap Between Stations"
slug: maximum-gap-between-stations
date: "2026-08-16"
---

# My Solution
~~~cpp
class Solution {
public:
    int maximumGap(string skill, string station) {
        int len1=skill.size();
        int len2=station.size();
        int m=0;
        int mx=0;
        vector<int> left(len1);
        vector<int> right(len1);
        
        if (len1==1) return mx;
        
        for(int i=0;i<len1;i++){
            
            while(skill[i]!=station[m]){
                m++;
            }
            left[i]=m;
            m++;
            
        }
        m=len2-1;
        for(int i=len1-1;i>=0;i--){
            
            while(skill[i]!=station[m]){
                m--;
            }
            right[i]=m;
            m--;
            
        }
        for(int i=0;i<len1-1;i++){
            mx=max(mx,right[i+1]-left[i]);
        }
        
        return mx;
        
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Greedy matching (Two-pointer approach).
*   **Logic:** The algorithm calculates the earliest possible index (`left`) and the latest possible index (`right`) for each character of `skill` within `station`, then finds the maximum distance between the `left` boundary of character `i` and the `right` boundary of character `i+1`.
*   **Optimality:** Optimal. It achieves the result in linear time relative to the lengths of the strings.

## Complexity
*   **Time Complexity:** $O(N + M)$, where $N$ is the length of `skill` and $M$ is the length of `station`. Each index in `station` is visited at most once by the pointers.
*   **Space Complexity:** $O(N)$ to store the `left` and `right` arrays.

## Efficiency Feedback
*   **Runtime:** The implementation is highly efficient. It avoids nested loops and redundant traversals.
*   **Potential Risk:** The code assumes that `skill` is always a subsequence of `station`. If `skill` cannot be found in `station`, the `while` loops will cause an **out-of-bounds access** on `station` (specifically when `m` exceeds `len2-1` or goes below `0`). Adding safety checks is recommended if input guarantees aren't strict.

## Code Quality
*   **Readability:** Moderate. The logic is concise, but the lack of comments makes the intent behind the `right[i+1] - left[i]` calculation slightly opaque at first glance.
*   **Structure:** Good. The separation into three distinct passes (left indexing, right indexing, and max calculation) is logical and clean.
*   **Naming:** Moderate. `len1`, `len2`, `m`, and `mx` are generic; using descriptive names like `skillLen`, `stationLen`, `stationIdx`, and `maxGap` would improve maintainability.
*   **Improvements:**
    *   **Safety:** Add checks to ensure `m` does not exceed `len2 - 1` during the `left` pass or drop below `0` during the `right` pass.
    *   **Input Validation:** Handle cases where `skill` might not be a valid subsequence.
    *   **Style:** `len1` and `len2` could be marked as `const` or `size_t` to avoid signed/unsigned comparison warnings.

---

# Question Revision
### Revision Report: Maximum Gap (Bucket Sort)

**Pattern:** Bucket Sort / Pigeonhole Principle

**Brute Force:** 
Sort the array ($O(n \log n)$) and iterate through to find the maximum difference between adjacent elements.

**Optimal Approach:**
1. Find the min and max values to calculate the minimum possible gap: $gap = \lceil (max - min) / (n - 1) \rceil$.
2. Create $n-1$ buckets, each covering a range of `gap`.
3. Track only the `min` and `max` values within each bucket.
4. The maximum gap will **never** be between elements within the same bucket; it must be between the `max` of one bucket and the `min` of the next non-empty bucket.
5. **Complexity:** $O(n)$ time and $O(n)$ space.

**The 'Aha' Moment:**
When a problem asks for an $O(n)$ solution involving gaps and the input isn't sorted, the Pigeonhole Principle implies that the largest gap must be greater than the average gap, effectively allowing you to ignore intra-bucket differences.

**Summary:**
Whenever you need the "maximum gap" in $O(n)$, distribute values into buckets based on the average gap to ensure the answer resides only at bucket boundaries.

---