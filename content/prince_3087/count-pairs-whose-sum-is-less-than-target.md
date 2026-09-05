---
title: "Count Pairs Whose Sum is Less than Target"
slug: count-pairs-whose-sum-is-less-than-target
date: "2026-08-25"
---

# My Solution
~~~cpp
class Solution {
public:
    int appendCharacters(string s, string t) {
        int j   = 0;
        for(int i=0;i<s.size();i++){
            if(j<t.size() && s[i]==t[j]){
                j++;
            }
        }
        return t.size()- j;
        
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Two-pointer (or Greedy).
*   **Optimal:** Yes. The problem is a standard subsequence matching problem. Iterating through the string `s` once and advancing the pointer `j` whenever a character match is found is the optimal approach.

## Complexity
*   **Time Complexity:** $O(n)$, where $n$ is the length of string `s`. We traverse `s` exactly once.
*   **Space Complexity:** $O(1)$, as we only use a single integer index `j`.

## Efficiency Feedback
*   **Runtime:** Highly efficient. It performs a single linear pass and involves only basic comparisons.
*   **Memory:** Highly efficient. No additional data structures are used.

## Code Quality
*   **Readability:** Moderate. The function name `appendCharacters` is highly misleading as it does not match the problem's intent (which appears to be "find the minimum number of characters to append to make `t` a subsequence of `s`").
*   **Structure:** Good. The logic is concise and follows standard idiomatic C++.
*   **Naming:** Poor. The function name does not reflect the logic performed; `minCharsToAppend` or `remainingChars` would be more descriptive.
*   **Concrete Improvements:**
    *   Rename the function to something descriptive like `minCharsToAppend`.
    *   Use `s.length()` or `s.size()` consistently (already doing this, but ensure consistency if the codebase grows).
    *   Add `const` qualifiers to parameters (e.g., `const string& s`) to avoid unnecessary string copies if the caller passes a large string by value.

---

# Question Revision
### Revision Report: Count Pairs Whose Sum is Less than Target

**Pattern:** Two Pointers (Sorting-based)

**Brute Force:**
Iterate through all possible pairs $(i, j)$ using nested loops and increment a counter if `nums[i] + nums[j] < target`.
*   **Time:** $O(n^2)$
*   **Space:** $O(1)$

**Optimal Approach:**
1. Sort the array.
2. Use two pointers (`left` at 0, `right` at $n-1$).
3. If `nums[left] + nums[right] < target`, then all elements between `left` and `right` satisfy the condition with `nums[left]` because the array is sorted. Add `(right - left)` to count and increment `left`.
4. Otherwise, decrement `right`.
*   **Time:** $O(n \log n)$ due to sorting.
*   **Space:** $O(1)$ (or $O(n)$ depending on the sort implementation).

**The 'Aha' Moment:**
When the relative order of elements doesn't matter for the final count, sorting allows you to greedily account for entire ranges of valid pairs at once rather than checking them individually.

**Summary:**
Whenever you need to count pairs based on a sum threshold in an unordered array, sort it first to transform an $O(n^2)$ search into a linear $O(n)$ sweep using two pointers.

---