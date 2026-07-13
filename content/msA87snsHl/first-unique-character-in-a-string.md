---
title: "First Unique Character in a String"
slug: first-unique-character-in-a-string
date: "2026-06-28"
---

# My Solution
~~~java
class Solution {
    public int firstUniqChar(String s) {
        int[] freq = new int[26];
        for( int i = 0; i < s.length(); i++){
            freq[s.charAt(i) - 'a']++;
        }
       

        for ( int i = 0; i < s.length(); i++){
            if( freq[s.charAt(i) - 'a'] == 1){
                return i;
            }
           
        }
        return -1;
    }
}
~~~

# Submission Review
## Approach
*   **Technique:** Frequency counting using a fixed-size integer array.
*   **Optimality:** Optimal. The problem requires identifying the first character with a count of 1, which necessitates at least two passes over the input string (or one pass with auxiliary storage).

## Complexity
*   **Time Complexity:** $O(N)$, where $N$ is the length of the string. The algorithm performs two linear passes over the input.
*   **Space Complexity:** $O(1)$. The frequency array is of size 26 regardless of the input size (constant space).

## Efficiency Feedback
*   **Efficiency:** Highly efficient. Using an `int[26]` array is more performant than a `HashMap<Character, Integer>` due to lower memory overhead and the avoidance of boxing/unboxing overhead.
*   **Minor Optimization:** If the string is very long, the code is already as efficient as it can be. No significant improvements are needed.

## Code Quality
*   **Readability:** Good. The logic is straightforward and easy to follow.
*   **Structure:** Good. The solution is modular and clearly defined within the required class structure.
*   **Naming:** Good. `freq` is a standard and descriptive name for a frequency counter.
*   **Improvements:** 
    *   **Whitespace:** There are minor inconsistencies in spacing (e.g., `for( int i...` vs `for ( int i...`). Standardizing this would improve aesthetics.
    *   **Constraint Handling:** The code assumes the input consists only of lowercase English letters (`'a'-'z'`). If the input character set is larger (e.g., ASCII), consider using an array of size 256 or a `HashMap` to prevent `ArrayIndexOutOfBoundsException`.

---

# Question Revision
### Revision Report: First Unique Character in a String

**Pattern:** Frequency Counting (Hash Map/Array)

**Brute Force:**
For each character at index $i$, iterate through the entire string again to check if its count is 1.
*   **Time:** $O(n^2)$
*   **Space:** $O(1)$

**Optimal Approach:**
1. Perform a first pass to populate a frequency map (or a fixed-size array of 26 integers) with character counts.
2. Perform a second pass over the string to return the index of the first character that has a frequency of 1 in the map.
*   **Time:** $O(n)$ (Two linear passes)
*   **Space:** $O(1)$ (Fixed map size of 26 characters regardless of input length)

**The 'Aha' Moment:**
When a problem asks for the "first" occurrence of an element with a specific property across an entire dataset, a two-pass approach—caching frequencies first, then validating—is the most efficient way to decouple the search from the count.

**Summary:**
Whenever you need to find the "first" item satisfying a global condition, use a frequency array for $O(1)$ lookups to trade space for a linear time complexity.

---