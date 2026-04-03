---
title: "Merge Strings Alternately"
slug: merge-strings-alternately

---
---

# My Solution
~~~cpp
class Solution {
public:
    string mergeAlternately(string word1, string word2) {
        int i=0;
        int j=0;
        string s;
        while(i<word1.size()&& j<word2.size()){
            s.push_back(word1[i]);
            s.push_back(word2[j]);
            i++;
            j++;
        }
        while(i<word1.size()){
            s.push_back(word1[i]);
            i++;
        }
        while(j<word2.size()){
            s.push_back(word2[j]);
            j++;
        }
        return s;
        
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Iterative two-pointer approach.
*   **Optimality:** Optimal. It performs a single pass through both strings, which is the theoretical lower bound for the problem.

## Complexity
*   **Time Complexity:** $O(N + M)$, where $N$ and $M$ are the lengths of `word1` and `word2`.
*   **Space Complexity:** $O(N + M)$ to store the resulting merged string.

## Efficiency Feedback
*   **Memory Optimization:** The current code uses `push_back`, which may trigger multiple reallocations of the string's internal buffer. 
*   **Improvement:** You can pre-allocate memory using `s.reserve(word1.size() + word2.size())` to avoid overhead from resizing as the string grows.

## Code Quality
*   **Readability:** Good. The logic is straightforward and easy to follow.
*   **Structure:** Good. The separation into a primary merging loop followed by cleanup loops for remaining characters is standard and efficient.
*   **Naming:** Moderate. `s`, `i`, and `j` are standard, but `result` would be more descriptive than `s`.

### Concrete Improvements
1.  **Reserve memory:** Add `s.reserve(word1.length() + word2.length());` at the start to reduce allocations.
2.  **Use `const` references:** While the problem signature passes strings by value (standard for LeetCode), if you were to define your own helper, pass them as `const string&` to avoid unnecessary copies.
3.  **Modern C++ syntax:** You could use `for` loops or iterator-based approaches, but the existing `while` loop implementation is perfectly acceptable for this complexity class.

---
---


# Question Revision
### Revision Report: Merge Strings Alternately

**Pattern:** Two Pointers

**Brute Force:**
Create a new string, append characters by iterating through indices `0` to `max(len1, len2) - 1`, and use conditional checks to append from each string only if the current index is within their respective bounds.

**Optimal Approach:**
Initialize two pointers (`i`, `j`) at the start of both strings. Iterate while either pointer is valid, appending the character at the current pointer to a result buffer (StringBuilder) and incrementing the respective pointer.
*   **Time Complexity:** $O(n + m)$, where $n$ and $m$ are the lengths of the two strings.
*   **Space Complexity:** $O(n + m)$ to store the result string.

**The 'Aha' Moment:**
When the problem requires interleaved processing of two distinct linear data structures, maintaining independent pointers for each is the most direct way to track progress without losing state.

**Summary:**
Whenever you must merge two sequences element-by-element, use two independent pointers to track your position in each source until both are exhausted.

---
