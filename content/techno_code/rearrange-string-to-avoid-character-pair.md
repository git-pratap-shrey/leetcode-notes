---
title: "Rearrange String to Avoid Character Pair"
slug: rearrange-string-to-avoid-character-pair
date: "2026-07-18"
---

# My Solution
~~~cpp
class Solution {
public:
    string rearrangeString(string s, char x, char y) {
        string t="";
        for(int i=0;i<s.length();i++){
            if(s[i]==y){
                t +=s[i];
            }
        }
        for(int i=0;i<s.length();i++){
            if(s[i] !=y){
                t +=s[i];
            }
        }
        return t;
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** The code uses a simple two-pass partitioning approach (collecting all `y` characters, then collecting the remaining characters).
*   **Optimal:** **No.** The problem (as implied by the title "Avoid Character Pair") usually requires ensuring no two specific characters (often `x` and `y`) are adjacent. This code merely moves all instances of `y` to the front, which does not guarantee that `x` and `y` are separated if they end up adjacent at the junction of the two loops or within the strings themselves.

## Complexity
*   **Time Complexity:** $O(N)$, where $N$ is the length of the string, as it performs two linear passes.
*   **Space Complexity:** $O(N)$ to store the result string `t`.

## Efficiency Feedback
*   **Runtime:** The runtime is linear, which is optimal for a single traversal, but the logic does not satisfy the likely constraints of a "rearrange to avoid" problem.
*   **Optimizations:** If the problem requires satisfying adjacency constraints, a greedy approach using a frequency map or a heap (to place most frequent characters first) is typically required, not a simple partition.

## Code Quality
*   **Readability:** Moderate. The logic is simple, but the intent is unclear as it doesn't solve the "avoid pair" requirement.
*   **Structure:** Poor. The code performs two separate loops over the same input. This could be done in a single pass if the logic were correct.
*   **Naming:** Moderate. `t` is a generic name for a result string; `result` would be clearer.
*   **Concrete Improvements:**
    *   If the goal is to prevent `xy` or `yx` pairs, you must check the constraints of the problem (e.g., character counts). 
    *   Avoid string concatenation (`t += s[i]`) in a loop if $N$ is very large; use `t.reserve(s.length())` to prevent multiple reallocations.
    *   The current implementation ignores the character `x` entirely, which is suspicious for a problem involving pairs.

---

# Question Revision
### Revision Report: Rearrange String to Avoid Adjacent Characters

**Pattern:** Greedy + Priority Queue (Max-Heap)

**Brute Force:**
Generate all permutations of the string and check if any adjacent characters are identical. This results in $O(n!)$ time complexity, which is computationally infeasible for larger strings.

**Optimal Approach:**
Use a Max-Heap to always place the most frequent remaining character first, provided it does not violate the distance constraint ($k$). By holding used characters in a buffer (queue) until the distance requirement is met, we ensure validity while maximizing distribution.
*   **Time Complexity:** $O(n \log A)$, where $n$ is the string length and $A$ is the size of the character alphabet (fixed at 26).
*   **Space Complexity:** $O(A)$ to store character frequencies.

**The 'Aha' Moment:**
When the problem demands local constraints (no neighbors) based on global frequencies, prioritizing the most frequent elements first is the only way to avoid running out of "buffer" characters later.

**Summary:**
When you must separate identical items, always greedily place the most frequent remaining element to prevent it from bottlenecking your options at the end.

---