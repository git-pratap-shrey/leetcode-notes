---
title: "Longest Common Prefix"
slug: longest-common-prefix

---
---

# My Solution
~~~java
// class Solution {
//     public String longestCommonPrefix(String[] strs) {
//         StringBuilder sb=new StringBuilder("");
//         if(strs.length==1){
//             return strs[0];
//         }
//         for(int i=1;i<strs.length-1;i++){
//             StringBuilder s=new StringBuilder();
//             s.append(strs[0]);
//             if(srn(strs[i],strs[i+1]).equals("")){
//                 return sb.toString();
//             }else{
//                 s = new StringBuilder(srn(s.toString(), strs[i]));
//                 sb = new StringBuilder(srn(s.toString(), strs[i+1]));
//             }
//         }
//         return sb.toString();
//     }
//     public static String srn(String s1,String s2){
//         StringBuilder s=new StringBuilder();
//         char[] c1=s1.toCharArray();
//         char[] c2=s2.toCharArray();
//         int l=Math.min(c1.length,c2.length);
//         for(int i=0;i<l;i++){
//             if(c1[i]==c2[i]){
//                 s.append(c1[i]);
//             }else{
//                 break;
//             }
//         }
//         return s.toString();
//     }
// }





class Solution {
    public String longestCommonPrefix(String[] strs) {
        StringBuilder sb = new StringBuilder(strs[0]);

        if(strs.length == 1){
            return strs[0];
        }

        for(int i = 1; i < strs.length; i++){
            String temp = srn(sb.toString(), strs[i]);

            if(temp.equals("")){
                return "";
            }else{
                sb.replace(0, sb.length(), temp);
            }
        }

        return sb.toString();
    }

    public static String srn(String s1,String s2){
        StringBuilder s=new StringBuilder();
        char[] c1=s1.toCharArray();
        char[] c2=s2.toCharArray();
        int l=Math.min(c1.length,c2.length);

        for(int i=0;i<l;i++){
            if(c1[i]==c2[i]){
                s.append(c1[i]);
            }else{
                break;
            }
        }
        return s.toString();
    }
}
~~~

# Submission Review
## Approach
*   **Technique:** Iterative Horizontal Scanning.
*   **Optimal:** Yes. This is a standard, efficient approach for this problem, maintaining a running prefix and updating it against each subsequent string.

## Complexity
*   **Time Complexity:** $O(S)$, where $S$ is the sum of all characters in all strings. In the worst case, every character of every string is compared.
*   **Space Complexity:** $O(M)$, where $M$ is the length of the longest common prefix (the size of the `StringBuilder` buffer).

## Efficiency Feedback
*   **Runtime:** The current implementation is efficient. However, `sb.replace(0, sb.length(), temp)` internally involves buffer management. For even better performance, consider using a simple `String` variable to track the prefix, or directly trimming the `StringBuilder` length via `sb.setLength(newLength)`.
*   **Memory:** Converting strings to char arrays (`toCharArray()`) inside `srn` creates new object allocations for every iteration, which increases GC pressure. You can perform the character comparisons directly on the strings using `charAt(i)` to avoid these extra allocations.

## Code Quality
*   **Readability:** Good. The logic is straightforward and easy to follow.
*   **Structure:** Good. Using a helper method (`srn`) separates concerns effectively.
*   **Naming:** Moderate. `srn` is an obscure function name; `findCommonPrefix` or `getCommonPrefix` would be significantly more descriptive.
*   **Improvements:**
    *   Rename `srn` to a descriptive name.
    *   Avoid `toCharArray()` inside `srn`; use `s1.charAt(i)` instead.
    *   Instead of `sb.replace(...)`, simply update `sb` by setting its length: `sb.setLength(temp.length())`.
    *   Minor optimization: Check `if (strs == null || strs.length == 0) return "";` as a defensive programming practice.

---
---


# Question Revision
### Revision Report: Longest Common Prefix

**Pattern:** Vertical Scanning / Character-by-Character Comparison

**Brute Force:** Compare the first string with every other string to find the prefix, then update the prefix iteratively.
*   **Complexity:** $O(S)$ where $S$ is the sum of all characters in all strings.

**Optimal Approach:** Vertical Scanning. Compare the character at index $i$ for all strings simultaneously. Stop when a mismatch occurs or you reach the end of any string.
*   **Time Complexity:** $O(S)$, where $S$ is the total number of characters in the input array.
*   **Space Complexity:** $O(1)$ (ignoring the space required for the output string).

**The 'Aha' Moment:** The realization that the common prefix must be a prefix of the first string, allowing you to discard all other strings once a mismatch is found at any index $i$.

**Summary:** Treat the input as a grid of characters and scan vertically column-by-column until you hit the first mismatch.

---
