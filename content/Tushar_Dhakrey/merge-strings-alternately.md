---
title: "Merge Strings Alternately"
slug: merge-strings-alternately
date: "2026-03-29"

---
---

# My Solution
~~~java
class Solution {
    public String mergeAlternately(String word1, String word2) {
        StringBuilder sb = new StringBuilder();
        int i=0;
        while(i<word1.length() || i<word2.length()){
            if(i<word1.length()){
                sb.append(word1.charAt(i));
            }
            if(i<word2.length()){
                sb.append(word2.charAt(i));
            }
            i++;
        }
        return sb.toString();
    }
}
~~~

# Submission Review
## Approach
*   **Technique:** Iterative simulation using two-pointer logic (effectively a single index `i`).
*   **Optimality:** Optimal. It traverses each string exactly once and constructs the result in linear time.

## Complexity
*   **Time Complexity:** $O(N + M)$, where $N$ and $M$ are lengths of `word1` and `word2`.
*   **Space Complexity:** $O(N + M)$ to store the resulting `StringBuilder` / string.

## Efficiency Feedback
*   **Runtime:** High efficiency. The use of `StringBuilder` avoids the $O(N^2)$ overhead associated with repeated string concatenation in Java.
*   **Memory:** Memory usage is optimal as it pre-allocates space for the final string (internally). If memory constraints were extremely tight, one could optimize by setting the `StringBuilder` initial capacity to `word1.length() + word2.length()`.

## Code Quality
*   **Readability:** Good. The logic is clean, concise, and easy to follow.
*   **Structure:** Good. The single-loop approach handles both balanced and unbalanced string lengths elegantly without redundant conditional blocks.
*   **Naming:** Good. `i` is an acceptable standard index name in this context, and `sb` is a common idiom for `StringBuilder`.
*   **Improvements:** 
    *   To be slightly more professional, rename `sb` to `merged` or `result`.
    *   Consider `new StringBuilder(word1.length() + word2.length())` to prevent potential array resizing during string construction, though this is a micro-optimization for most competitive programming constraints.

---
---


# Question Revision
### Revision Report: Merge Strings Alternately

**Pattern:** Two Pointers

**Brute Force:**
Create a new string, append characters one by one by checking the length of both strings, and pad with the remainder of the longer string. This often leads to inefficient string concatenation in languages with immutable strings (e.g., creating $O(n+m)$ intermediate objects).

**Optimal Approach:**
Initialize a pointer at the start of both strings. Iterate while either pointer is within its respective string bounds, appending the character at the current pointer if it exists, and incrementing the pointers. Use a `StringBuilder` (or equivalent dynamic array) to collect characters to ensure $O(n + m)$ time and space complexity.

**The 'Aha' Moment:**
When the problem requires processing two sequences in lockstep until exhaustion, independent pointer movement is the most robust way to handle varying input lengths.

**Summary:** 
Use two pointers to traverse multiple sequences simultaneously when the output relies on a specific interleaved order regardless of input length parity.

---
