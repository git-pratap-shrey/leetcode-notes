---
title: "Trionic Array I"
slug: trionic-array-i

---
---

# My Solution
~~~java
class Solution {
    public boolean isTrionic(int[] nums) {
        int n=nums.length;
        if(n<4) return false;
        int i=0;
        while(i+1<n && nums[i+1]>nums[i]){
            i++;
        }
        if(i==0) return false;
        int dc=i;
        while(i+1<n && nums[i+1]<nums[i]){
            i++;
        }
        if(i==dc) return false;
        int st=i;
        while(i+1<n && nums[i+1]>nums[i]){
            i++;
        }
        if(i==st) return false;
        return i==n-1;
    }
}
~~~

# Submission Review
## Approach
*   **Technique:** Iterative state machine / Two-pointer scan.
*   **Optimal:** Yes. The solution scans the array exactly once (linear time) to verify the sequence pattern (increasing, then decreasing, then increasing) without additional auxiliary structures.

## Complexity
*   **Time Complexity:** $O(n)$, where $n$ is the length of the array, as the pointer `i` traverses the array exactly once.
*   **Space Complexity:** $O(1)$, as it only uses a few integer variables.

## Efficiency Feedback
*   The logic is highly efficient. It avoids extra memory allocation and minimizes unnecessary comparisons.
*   The checks for `i == dc` and `i == st` correctly handle edge cases where a segment (increasing or decreasing) might be empty.

## Code Quality
*   **Readability:** Moderate. The variable names `dc` (decline start) and `st` (second rise start) are not immediately descriptive, making the code harder to scan for a maintainer.
*   **Structure:** Good. The logic is cleanly partitioned into three consecutive phases representing the trionic shape.
*   **Naming:** Poor. Use more expressive names to improve maintainability (e.g., `peakIndex`, `valleyIndex`).
*   **Concrete Improvements:**
    *   Rename `i` to `index` or `ptr`.
    *   Rename `dc` to `peakIndex` and `st` to `valleyIndex`.
    *   Add brief comments explaining the three required segments for a "Trionic" sequence to clarify the intent of the logic. 
    *   Example:
        ```java
        // Phase 1: Climb to first peak
        // Phase 2: Descend to valley
        // Phase 3: Climb to end
        ```

---
---


# Question Revision
### Revision Report: Trionic Array I

**Pattern:** Prefix Sums / Sliding Window

**Brute Force:** 
Calculate the sum for every possible subarray by iterating through all pairs $(i, j)$ and summing the elements between them, resulting in $O(n^2)$ time complexity.

**Optimal Approach:** 
Use a **Prefix Sum array** (or running sum variable) to precompute cumulative totals. By storing prefix sums in a hash map, you can determine if a target subarray exists in $O(1)$ time per lookup by checking `current_sum - target == previous_prefix_sum`.
*   **Time Complexity:** $O(n)$
*   **Space Complexity:** $O(n)$ to store prefix sum frequencies.

**The 'Aha' Moment:** 
When a problem asks for the existence of a subarray summing to a specific value $k$, the constraint of $O(n)$ usually mandates transforming the range-sum query into a point-lookup using the property $Sum(i, j) = Prefix(j) - Prefix(i-1)$.

**Summary:** 
Whenever you need to find a subarray with a specific sum, map the prefix sums to their occurrences to turn a range calculation into a constant-time difference check.

---
