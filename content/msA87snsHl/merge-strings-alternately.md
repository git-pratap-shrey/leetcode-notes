---
title: "Merge Strings Alternately"
slug: merge-strings-alternately
date: "2026-07-12"
---

# My Solution
~~~java
class Solution {
    public String mergeAlternately(String word1, String word2) {
        StringBuilder s = new StringBuilder();
        int i = 0;
        for( i = 0; i < word1.length() && i < word2.length() ; i++){
            
            s.append( word1.charAt(i) );
            s.append( word2.charAt(i) );

        }
        if ( word1.length() < word2.length()){
            for( int j = i ; j < word2.length(); j++){
                s.append( word2.charAt(j));
            }
        }else{
            for( int j = i; j < word1.length(); j++){
                s.append( word1.charAt(j));
            }    
        }
        String str = s.toString();
        return str;
    }
}
~~~

# Submission Review
## Approach
*   **Technique:** Two-pointer/Iteration approach.
*   **Optimality:** Optimal. It performs a single pass over both strings to construct the result.

## Complexity
*   **Time Complexity:** $O(N + M)$, where $N$ and $M$ are the lengths of `word1` and `word2`. We traverse each string exactly once.
*   **Space Complexity:** $O(N + M)$ to store the result in the `StringBuilder`.

## Efficiency Feedback
*   **Runtime:** High efficiency. Using `StringBuilder` is the correct approach in Java to avoid $O((N+M)^2)$ string concatenation overhead.
*   **Optimization:** The two trailing `for` loops can be simplified. You could use `s.append(word1.substring(i))` and `s.append(word2.substring(i))` to handle the remaining characters, which is more idiomatic and concise.

## Code Quality
*   **Readability:** Good. The logic is straightforward and easy to follow.
*   **Structure:** Moderate. The conditional logic for the remaining characters is slightly verbose.
*   **Naming:** Moderate. `s` and `str` are generic; `mergedResult` would be more descriptive.
*   **Concrete Improvements:**
    *   Initialize `StringBuilder` with the capacity `word1.length() + word2.length()` to prevent internal array resizing.
    *   Simplify the post-loop cleanup:
        ```java
        if (i < word1.length()) s.append(word1.substring(i));
        if (i < word2.length()) s.append(word2.substring(i));
        ```
    *   Remove unnecessary variable `i` declaration outside the loop; declare it within the `for` statement.

---

# Question Revision
### Revision Report: Merge Strings Alternately

**Pattern:** Two Pointers / Linear Scan

**Brute Force:** Create a new string by pre-allocating the total length, then loop through both strings using nested checks or string concatenation (which is inefficient due to immutability in many languages).
*   **Time:** $O(n + m)$
*   **Space:** $O(n + m)$

**Optimal Approach:** Use two pointers ($i$ and $j$) to traverse both strings simultaneously until the end of the shorter string is reached, then append the remainder of the longer string using a slice or a final loop. 
*   **Time:** $O(n + m)$ where $n$ and $m$ are lengths of the two strings.
*   **Space:** $O(n + m)$ to store the resulting merged string.

**The 'Aha' Moment:** Whenever a problem requires interleaving elements from two linear sequences based on their indices, a dual-pointer approach is the most efficient way to ensure you visit each element exactly once.

**Summary:** For string interleaving, maintain individual pointers for each source and append the remaining suffix once the shorter sequence is exhausted.

---