---
title: "Merge Strings Alternately"
slug: merge-strings-alternately
date: "2026-07-12"
---

# My Solution
~~~cpp
class Solution {
public:
    string mergeAlternately(string word1, string word2) {

        int n1=word1.length();
        int n2=word2.length();

        int i=0,j=0;
        string ans="";

        while(i<n1 && j<n2){
            ans+=word1[i];
            ans+=word2[j];
            i++;
            j++;
        }

        while(i<n1){
            ans+=word1[i];
            i++;
        }

        while(j<n2){
            ans+=word2[j];
            j++;
        }

        return ans;
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Two-pointer linear traversal.
*   **Optimality:** Optimal. The algorithm processes each character exactly once to build the result string.

## Complexity
*   **Time Complexity:** $O(N + M)$, where $N$ and $M$ are the lengths of `word1` and `word2`.
*   **Space Complexity:** $O(N + M)$ to store the resulting merged string.

## Efficiency Feedback
*   **Bottleneck:** Repeated concatenation using `ans += ...` can trigger multiple memory reallocations as the string grows. 
*   **Optimization:** Use `ans.reserve(n1 + n2)` before the loops to allocate the required memory upfront, preventing unnecessary copying during `push_back` or `+=` operations.

## Code Quality
*   **Readability:** Good. The logic is straightforward and easy to follow.
*   **Structure:** Good. The use of separate `while` loops for remaining characters is clear and handles edge cases (unequal string lengths) correctly.
*   **Naming:** Moderate. `n1`, `n2`, `i`, and `j` are standard for competitive programming, but `ans` is slightly generic (could be `result`).
*   **Concrete Improvements:**
    *   Add `ans.reserve(n1 + n2);` at the start to improve performance.
    *   Use `ans.push_back(char)` instead of `ans += char` for clarity, as it expresses the intent of adding a single character more explicitly.

---

# Question Revision
### Revision Report: Merge Strings Alternately

**Pattern:** Two Pointers / Linear Scan

**Brute Force:** Create a new string by pre-calculating the final length and iteratively appending characters from both strings using a nested loop or condition check, often resulting in inefficient memory reallocation if using immutable strings.

**Optimal Approach:** Use a single pointer `i` to traverse both strings simultaneously until the end of the shorter string, then append the remainder of the longer string using a single slice operation.
*   **Time Complexity:** $O(n + m)$, where $n$ and $m$ are the lengths of the two strings.
*   **Space Complexity:** $O(n + m)$ to store the result string.

**The 'Aha' Moment:** The requirement to interleave elements from two sequences of varying lengths is a classic indicator that a single pointer tracking the shared index is cleaner than maintaining two separate pointers.

**Summary:** When merging sequences, use a single loop to process the common length and handle the remaining tail of the longer sequence separately to avoid unnecessary conditional checks inside the loop.

---