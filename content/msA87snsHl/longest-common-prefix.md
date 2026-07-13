---
title: "Longest Common Prefix"
slug: longest-common-prefix
date: "2026-06-24"
---

# My Solution
~~~java
class Solution {
    public String longestCommonPrefix(String[] strs) {
        StringBuilder s = new StringBuilder();
        String p = new String();
        p = strs[0];
        for( int i = 1; i < strs.length; i++){
            for(int j = 0; j < strs[i].length() && j < p.length(); j++){
                if( p.charAt(j) == strs[i].charAt(j)){
                    s.append(p.charAt(j));
                }
                else{
                    break;
                }
                
                
            }
            p = s.toString();
            s.setLength(0);
            
        }
        return p;
    }
}
~~~

# Submission Review
## Approach
*   **Technique:** Iterative horizontal scanning (comparing the current prefix with each subsequent string).
*   **Optimality:** Suboptimal. While the logic is correct, the constant creation of `String` objects and the overhead of `StringBuilder` clearing within the loop are unnecessary compared to a direct character comparison or sorting-based approach.

## Complexity
*   **Time Complexity:** $O(S)$, where $S$ is the sum of all characters in all strings. In the worst case, you compare every character.
*   **Space Complexity:** $O(m)$, where $m$ is the length of the longest prefix, due to the `StringBuilder` and string storage.

## Efficiency Feedback
*   **Bottleneck:** The code repeatedly invokes `s.toString()` and clears the `StringBuilder` (`s.setLength(0)`) inside the loop. This incurs unnecessary memory allocation and object copying.
*   **Optimization:** You can simply track the prefix length or index and compare characters directly against the first string (`strs[0]`). There is no need for a `StringBuilder` if you only need the resulting substring at the end.

## Code Quality
*   **Readability:** Moderate. The logic is understandable but cluttered by the unnecessary `StringBuilder` manipulation.
*   **Structure:** Moderate. The loop nesting is appropriate for the chosen approach, but the variable management is redundant.
*   **Naming:** Poor. Variables `s` and `p` are non-descriptive. Use `prefix` or `currentCommonPrefix` instead.
*   **Improvements:**
    *   Initialize `prefix` as `strs[0]`.
    *   In the loop, instead of using `StringBuilder`, just use `strs[i].indexOf(prefix)` to check for matching prefixes or truncate the `prefix` string using `substring(0, j)` when a mismatch is found.
    *   Remove `new String()` initialization; `String p = strs[0];` is sufficient.
    *   Handle the edge case where `strs` might be empty (though not strictly required if problem constraints guarantee `strs.length > 0`).

---

# Question Revision
### Revision Report: Longest Common Prefix

**Pattern:** Horizontal Scanning / Vertical Scanning

**Brute Force:** Compare the first string with every other string and truncate the result based on common characters.
*   **Time:** $O(S)$, where $S$ is the sum of all characters in all strings.
*   **Space:** $O(1)$ (ignoring result storage).

**Optimal Approach:** Vertical Scanning. Iterate through the characters of the first string at index `i` and check if all other strings share the same character at that index. If a mismatch or length limit occurs, return the prefix found so far.
*   **Time:** $O(S)$, where $S$ is the sum of all characters. Best case $O(n \cdot m)$ where $n$ is the number of strings and $m$ is the length of the shortest string.
*   **Space:** $O(1)$.

**The 'Aha' Moment:** The problem defines the prefix as a shared property across *all* elements, implying that the length of the longest possible prefix is strictly bounded by the shortest string in the array.

**Summary:** Treat the first string as a template and scan vertically until you hit a mismatch or the end of any string.

---