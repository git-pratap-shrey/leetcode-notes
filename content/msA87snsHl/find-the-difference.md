---
title: "Find the Difference"
slug: find-the-difference
date: "2026-07-07"
---

# My Solution
~~~java
class Solution {
    public char findTheDifference(String s, String t) {
        int[] freq = new int[26];
        for( int i = 0; i < s.length(); i++){
            freq[s.charAt(i) - 'a']++;
            freq[t.charAt(i) - 'a']--;

        }
        freq[t.charAt(t.length() - 1) - 'a']--;
        
        for (int i = 0; i < 26; i++){
            if( freq[i] == -1){
                return (char)(i + 'a');
            }
        }

        return ' ';

    }
}
~~~

# Submission Review
## Approach
*   **Technique:** Frequency counting (Hashing/Bucket).
*   **Optimal:** Yes, the approach is $O(N)$. However, it can be implemented more space-efficiently using XOR or ASCII summation.

## Complexity
*   **Time Complexity:** $O(N)$, where $N$ is the length of string `t`. The code iterates through the strings once.
*   **Space Complexity:** $O(1)$, as the array size is fixed at 26 regardless of input size.

## Efficiency Feedback
*   The logic is efficient, but the manual frequency array approach is slightly less performant than bit manipulation (XOR). XORing all characters in both strings will yield the extra character directly without requiring an auxiliary array or a second pass over the 26-character alphabet.

## Code Quality
*   **Readability:** Good. The logic is straightforward and easy to follow.
*   **Structure:** Moderate. The code handles the first $N$ characters in the loop and the last character of `t` outside the loop, which is functional but slightly unconventional.
*   **Naming:** Good. `freq` is clear.
*   **Improvements:** 
    *   **Simplify:** You can iterate through `s` and `t` separately or use a single loop to compute the character sum difference.
    *   **Idiomatic Approach:** Use XOR. Since `a ^ a = 0` and `0 ^ b = b`, XORing all characters of `s` and `t` together will isolate the unique character in `O(1)` space and `O(N)` time without an array.
    *   **Safety:** The `return ' ';` is technically unreachable given problem constraints, but returning a default value is fine.

**Refactored Suggestion (XOR approach):**
```java
public char findTheDifference(String s, String t) {
    int res = 0;
    for (char c : s.toCharArray()) res ^= c;
    for (char c : t.toCharArray()) res ^= c;
    return (char) res;
}
```

---

# Question Revision
### Revision Report: Find the Difference

**Pattern:** Bit Manipulation (XOR) / Hash Map

**Brute Force:** 
Count the frequency of each character in the first string using a hash map, then iterate through the second string to decrement counts; the character with a remaining count of -1 or the one not present in the map is the difference.
*   **Time:** $O(n + m)$
*   **Space:** $O(1)$ (limited to 26 characters)

**Optimal Approach:**
Initialize a variable to `0` and XOR all character codes from both strings together. Since $x \oplus x = 0$ and $x \oplus 0 = x$, all identical characters cancel out, leaving only the added character.
*   **Time:** $O(n + m)$
*   **Space:** $O(1)$

**The 'Aha' Moment:**
When a problem asks to find a single element that breaks symmetry (like an extra character in a string or an extra number in a list), the XOR operator acts as a "cancellation" mechanism that isolates the outlier without requiring extra memory.

**Summary:** 
When comparing two collections to identify a single unique addition, XORing all elements allows identical values to neutralize each other, leaving the difference behind.

---