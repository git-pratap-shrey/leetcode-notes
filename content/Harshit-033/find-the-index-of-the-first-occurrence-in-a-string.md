---
title: "Find the Index of the First Occurrence in a String"
slug: find-the-index-of-the-first-occurrence-in-a-string
date: "2026-04-08"

---
---

# My Solution
~~~cpp
class Solution {
public:
    int strStr(string haystack, string needle) {
        int n=haystack.size();
        int m=needle.size();

        for(int i=0;i<n-m+1;i++){
            int j=0;

            while(j<m && haystack[i+j]==needle[j]){
                j++;
            }

            if(j==m){
                return i;
            }
        }
        return -1;

    }
        
};


~~~

# Submission Review
## Approach
- **Technique:** Brute-force sliding window (naive pattern matching).
- **Optimality:** Suboptimal. While sufficient for typical constraints where the needle is short, it does not achieve the linear time complexity of advanced algorithms like KMP (Knuth-Morris-Pratt) or Z-algorithm.

## Complexity
- **Time Complexity:** $O((n - m + 1) \cdot m)$, where $n$ is `haystack.size()` and $m$ is `needle.size()`. The worst case occurs with inputs like `haystack = "aaaaaaaaab"` and `needle = "aaab"`.
- **Space Complexity:** $O(1)$, as it uses a constant amount of extra space.

## Efficiency Feedback
- **Bottleneck:** Re-scanning characters in `haystack` after a partial match fails.
- **Optimization:** If performance is critical for large inputs, implementing KMP would reduce time complexity to $O(n + m)$ by using the "Longest Prefix Suffix" (LPS) array to skip unnecessary comparisons.
- **Built-in alternative:** In production C++, `haystack.find(needle)` is highly optimized and preferred over manual implementation.

## Code Quality
- **Readability:** Good. The logic is standard and easy to follow.
- **Structure:** Good. The loop bounds correctly handle the edge case where $m > n$.
- **Naming:** Moderate. `n` and `m` are standard in competitive programming, but `haystackLen` and `needleLen` would improve clarity.
- **Concrete Improvements:**
    - Add a check at the start: `if (needle.empty()) return 0;`. Although not strictly required by some problem constraints, it is robust practice.
    - Consider `if (m > n) return -1;` explicitly for readability before entering the loop. 
    - Use `std::string::size_type` or `size_t` for index variables to match the return type of `.size()` and avoid potential signed/unsigned comparison warnings.

---
---


# Question Revision
### Revision Report: Find the Index of the First Occurrence in a String

**Pattern:** Sliding Window / String Matching (KMP)

**Brute Force:**
Iterate through the `haystack` with a pointer `i` and for each position, compare the substring starting at `i` with the `needle`.
*   **Time:** $O(n \times m)$
*   **Space:** $O(1)$

**Optimal Approach:**
Use the **Knuth-Morris-Pratt (KMP) algorithm** to precompute a Partial Match Table (LPS array) for the `needle`. This allows skipping redundant comparisons by shifting the pattern based on previous prefix/suffix overlaps instead of resetting to `i + 1`.
*   **Time:** $O(n + m)$
*   **Space:** $O(m)$

**The 'Aha' Moment:**
When you realize that shifting the search pointer back by one after a mismatch is inefficient because it ignores the information you already gained about the overlapping characters, the need for a precomputed shift table becomes obvious.

**Summary:**
When string matching performance matters, avoid $O(n \times m)$ re-scanning by using the KMP failure function to jump past known mismatches.

---
