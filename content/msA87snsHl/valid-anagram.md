---
title: "Valid Anagram"
slug: valid-anagram
date: "2026-06-28"
---

# My Solution
~~~java
class Solution {
    public boolean isAnagram(String s, String t) {
        int[] freq = new int[26];

        if( s.length() != t.length()){
            return false;
        }

        for( int i = 0; i < s.length(); i++){
            freq[s.charAt(i) - 'a']++;
            freq[t.charAt(i) - 'a']--;
        }
        
        for( int count : freq){
            if( count != 0){
                return false;
            }
        }

        return true;

    }
}
~~~

# Submission Review
## Approach
*   **Technique:** Frequency counting using a fixed-size integer array (`int[26]`).
*   **Optimality:** Optimal. It achieves the best possible time complexity for comparing character counts by performing a single pass over the strings.

## Complexity
*   **Time Complexity:** $O(n)$, where $n$ is the length of the string. The solution performs two linear passes: one to populate the frequency array and one to verify it.
*   **Space Complexity:** $O(1)$, as the array size is constant (26) regardless of input size.

## Efficiency Feedback
*   **Runtime:** High efficiency. The use of a primitive `int[]` array avoids the overhead of hash maps or object wrappers.
*   **Optimizations:** The current approach is already optimal. No meaningful further performance gains are possible while maintaining $O(n)$ time complexity.

## Code Quality
*   **Readability:** Good. The logic is straightforward and easy to follow.
*   **Structure:** Good. Early return for length mismatch correctly handles edge cases.
*   **Naming:** Good. `freq` is descriptive for a frequency array.
*   **Concrete Improvements:**
    *   **Input Handling:** The code assumes the input consists only of lowercase English letters. If the input includes Unicode or uppercase, the code will throw an `ArrayIndexOutOfBoundsException`. If the problem constraints aren't guaranteed, consider using a `Map<Character, Integer>` or a larger array (e.g., `int[256]` for extended ASCII).
    *   **Micro-optimization:** The second loop can theoretically return `false` as soon as a non-zero value is found, which it already does. The code is idiomatic Java.

---

# Question Revision
### Revision Report: Valid Anagram

**Pattern:** Frequency Counting (Hash Map / Array Mapping)

**Brute Force:** 
Sort both strings and compare them for equality.
*   **Time Complexity:** $O(n \log n)$ due to sorting.
*   **Space Complexity:** $O(1)$ or $O(n)$ depending on the sorting implementation.

**Optimal Approach:** 
Use a fixed-size array (size 26) or a hash map to count character frequencies of the first string, then decrement based on the second. If all counts return to zero, they are anagrams.
*   **Time Complexity:** $O(n)$ where $n$ is the length of the string.
*   **Space Complexity:** $O(1)$ since the alphabet size is constant (max 26 characters).

**The 'Aha' Moment:**
When the problem constraints revolve around character frequencies or permutations rather than the order of elements, a frequency map is almost always more efficient than sorting.

**Summary:** 
Whenever you need to verify if two collections contain the exact same items regardless of sequence, count the frequencies instead of reordering them.

---