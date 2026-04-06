---
title: "First Matching Character From Both Ends"
slug: first-matching-character-from-both-ends
date: "2026-04-03"

---
---

# My Solution
~~~cpp
class Solution {
public:
    int firstMatchingIndex(string s) {
        int i=0;
        int j=s.size()-1;
        int count =0;
        int res = 0;
        while(i<=j){
            if(s[i]==s[j]){
                return i;
                 
                
            }
            i++;
            j--;
            
        }      
        return -1;
            
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Two-pointer approach.
*   **Optimal:** Yes. The problem asks for the first index where a character from the front matches the character at the corresponding position from the back. Since the loop starts from both ends and moves inward, returning `i` upon the first encounter is the correct greedy strategy.

## Complexity
*   **Time Complexity:** $O(N)$, where $N$ is the length of the string. In the worst case, the loop runs $N/2$ times.
*   **Space Complexity:** $O(1)$, as it uses only a constant amount of extra space.

## Efficiency Feedback
*   The solution is already highly efficient. It performs a single pass and terminates early as soon as the condition is met.
*   The `count` and `res` variables are initialized but never used; these should be removed to clean up the code.

## Code Quality
*   **Readability:** Good. The logic is straightforward and easy to follow.
*   **Structure:** Moderate. The inclusion of unused variables (`count`, `res`) clutters the function.
*   **Naming:** Good. `i` and `j` are standard conventions for two-pointer traversals.
*   **Concrete Improvements:**
    *   Remove `int count = 0;` and `int res = 0;`.
    *   The `while(i <= j)` loop condition is technically correct, but if `s.size()` is 0, the code correctly handles it (the loop won't execute). Ensure the function signature or input handling accounts for empty strings if required.

### Refined Code
```cpp
class Solution {
public:
    int firstMatchingIndex(string s) {
        int i = 0;
        int j = s.size() - 1;
        while (i <= j) {
            if (s[i] == s[j]) {
                return i;
            }
            i++;
            j--;
        }      
        return -1;
    }
};
```

---
---


# Question Revision
### Revision Report: First Matching Character From Both Ends

**Pattern:** Two Pointers (Converging)

**Brute Force:** 
Nested loops comparing every character from the beginning with every character from the end, resulting in $O(n^2)$ time complexity.

**Optimal Approach:** 
Initialize two pointers, `left` at index 0 and `right` at index $n-1$. Iterate while `left < right`, checking if `s[left] == s[right]`. Return the character or index upon the first match.
*   **Time Complexity:** $O(n)$
*   **Space Complexity:** $O(1)$

**The 'Aha' Moment:**
When a problem asks to compare elements based on their relative distance from the start and end of a sequence, the constraints on positions naturally map to two pointers moving towards a common boundary.

**Summary:**
Whenever you need to find a relationship between elements at the opposite ends of a structure, move two pointers inward until the condition is met.

---
