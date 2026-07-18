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
        string ans;
        for (char c : s){
            if (c!=x) ans +=c;
            
        }
        for (char c :s){
            if (c==x) ans +=c;
            
        }
        return ans;
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Greedy/Heuristic partitioning.
*   **Correctness:** This approach is **incorrect**. It simply moves all instances of character `x` to the end of the string. It ignores the constraint regarding character `y` entirely and fails to handle cases where the sequence `xy` or `yx` must be avoided while preserving the integrity of other character placements. It does not guarantee a valid rearrangement if one exists.

## Complexity
*   **Time Complexity:** $O(N)$, where $N$ is the length of the string, as it performs two linear passes.
*   **Space Complexity:** $O(N)$ to store the result string.

## Efficiency Feedback
*   The runtime is technically optimal for a single-pass or two-pass rearrangement, but since the logic is algorithmically flawed, efficiency is irrelevant. 
*   If the goal were to solve this correctly, a frequency-based greedy approach using a Max-Heap or a sorting strategy based on character counts would be necessary to handle the constraints.

## Code Quality
*   **Readability:** Good. The code is simple and easy to follow.
*   **Structure:** Poor. The logic is incomplete; it fails to check for the existence of the forbidden pair or provide an alternative if the rearrangement is impossible.
*   **Naming:** Moderate. `ans`, `x`, and `y` are standard in competitive programming, but `s`, `x`, and `y` lack descriptive context for a real-world codebase.
*   **Improvements:**
    *   **Logic:** The problem requires ensuring `x` is not adjacent to `y`. You should count the frequencies of all characters and use a priority queue to interleave characters such that `x` and `y` never become adjacent.
    *   **Edge Cases:** The current code does not return an empty string or error indicator when a valid rearrangement is impossible. It should explicitly handle these cases.

---

# Question Revision
### Revision Report: Rearrange String to Avoid Adjacent Characters

**Pattern:** Greedy + Priority Queue (Max-Heap)

**Brute Force:**
Generate all permutations of the input string and validate each one until a valid sequence is found.
*   **Time Complexity:** $O(n!)$
*   **Space Complexity:** $O(n)$

**Optimal Approach:**
Use a Max-Heap to store character frequencies. At each step, extract the character with the highest remaining count that is not the same as the previous character placed. Keep track of the previously used character in a temporary buffer and push it back into the heap only after the next character is processed to ensure the distance constraint is met.
*   **Time Complexity:** $O(n \log k)$, where $k$ is the alphabet size (effectively $O(n)$ for fixed-size alphabets).
*   **Space Complexity:** $O(k)$ to store character counts in the heap.

**The 'Aha' Moment:**
When the problem constraints require satisfying local distance conditions (e.g., "no two characters adjacent"), always prioritize the most frequent remaining element to avoid being left with only one character type at the end.

**Summary:** 
Always drain your most frequent counts first using a Max-Heap, keeping the last-used character "on cooldown" until the next step to prevent invalid adjacencies.

---