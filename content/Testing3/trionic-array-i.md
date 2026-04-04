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
- **Technique:** State machine / Linear scan.
- **Optimality:** Optimal. It performs a single pass over the array with constant extra space, which is the theoretical lower bound for this problem.

## Complexity
- **Time Complexity:** $O(n)$, where $n$ is the length of the array, as the index `i` only increments and traverses the array once.
- **Space Complexity:** $O(1)$, as only a few integer variables are used regardless of input size.

## Efficiency Feedback
- The efficiency is excellent. The code avoids unnecessary collections or multiple passes. 
- The use of short-circuiting logic with `i+1 < n` is correct and prevents `ArrayIndexOutOfBoundsException`.

## Code Quality
- **Readability:** Moderate. The logic is compact, but the lack of comments explaining the three distinct phases (increasing, decreasing, increasing) makes it slightly harder to verify at a glance.
- **Structure:** Good. The structure clearly separates the three phases of the sequence.
- **Naming:** Poor. Variable names like `i`, `dc`, and `st` are non-descriptive. While common in competitive programming, they hinder maintainability.

### Concrete Improvements
1. **Meaningful Naming:** Rename `dc` to `peakIndex` and `st` to `troughIndex` to improve code self-documentation.
2. **Readability:** Add brief comments labeling the phases (e.g., `// Ascending Phase`, `// Descending Phase`, `// Final Ascending Phase`).
3. **Logic Safety:** The code assumes a specific structure (Up-Down-Up). Ensure this logic aligns with the problem's strict definition of a "Trionic Array" (e.g., whether segments must be strictly monotonic or just non-decreasing/non-increasing). The current implementation assumes strictly monotonic segments.

---
---


# Question Revision
### Revision Report: Trionic Array I

**Pattern:** Prefix Sums / Sliding Window (Fixed Size)

**Brute Force:**
Iterate through the array for every possible sub-array of length $k$, calculating the sum each time.
*   **Time Complexity:** $O(n \cdot k)$
*   **Space Complexity:** $O(1)$

**Optimal Approach:**
Precompute the total sum of the first $k$ elements, then use a sliding window to subtract the element leaving the window and add the element entering it. Alternatively, construct a prefix sum array to calculate any sub-array sum in $O(1)$.
*   **Time Complexity:** $O(n)$
*   **Space Complexity:** $O(1)$ (Sliding Window) or $O(n)$ (Prefix Array)

**The 'Aha' Moment:**
Whenever a problem asks for aggregate calculations over a contiguous range of elements, transforming the array into a running total eliminates redundant re-calculations.

**Summary:**
When you see repeated range-sum queries, use a sliding window for $O(1)$ updates or a prefix sum array for $O(1)$ lookups to drop the redundant iterations.

---
