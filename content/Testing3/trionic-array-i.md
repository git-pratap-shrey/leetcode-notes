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
* **Technique:** Linear scan (state machine/three-pass validation).
* **Correctness:** The code validates a "trionic" structure (implicitly defined as an increasing sequence, followed by a decreasing sequence, followed by an increasing sequence). It correctly checks for monotonic segments and ensures each transition is valid. It is optimal for a single-pass verification.

## Complexity
* **Time Complexity:** $O(n)$, where $n$ is the length of the array, as the index $i$ traverses the array exactly once.
* **Space Complexity:** $O(1)$, as it uses a constant amount of extra space.

## Efficiency Feedback
* **Efficiency:** High. The algorithm is minimal, using single-pointer traversal without auxiliary data structures. 
* **Optimizations:** No meaningful optimizations are required; the approach is already at the theoretical lower bound for time and space.

## Code Quality
* **Readability:** Moderate. The logic is compact, but the lack of comments explaining the three required phases (rise, fall, rise) makes the intent slightly opaque.
* **Structure:** Good. The logical grouping of `while` loops clearly separates the three segments.
* **Naming:** Poor. Variable names like `i`, `n`, `dc` (decreasing checkpoint?), and `st` (starting point?) are non-descriptive and rely on the reader to infer their purpose. 
* **Improvements:** 
    * Rename variables for clarity: `n` $\rightarrow$ `length`, `dc` $\rightarrow$ `peakIndex`, `st` $\rightarrow$ `valleyIndex`.
    * Add a brief comment describing the expected pattern (i.e., "Valley-Peak-Valley" or "Up-Down-Up" sequence).
    * Consider using descriptive method names if this is part of a larger codebase.

---
---


# Question Revision
### Revision Report: Trionic Array I

**Pattern:** Prefix Sums / Sliding Window

**Brute Force:** 
Calculate the sum of every possible subarray of length $k$ by iterating through each starting index $i$ and summing the next $k$ elements, resulting in **$O(n \cdot k)$** time complexity.

**Optimal Approach:** 
Use a sliding window to maintain the sum of the current subarray. Add the new element entering the window and subtract the one leaving it.
*   **Time Complexity:** $O(n)$ (Single pass).
*   **Space Complexity:** $O(1)$ (Only tracking the running sum).

**The 'Aha' Moment:**
When the problem asks for calculations over contiguous sub-segments of a fixed size, you should never re-sum the entire segment; instead, perform constant-time updates by sliding the window.

**Summary:** 
If you need to calculate overlapping subarrays, move the window boundaries instead of re-scanning the internal elements.

---
