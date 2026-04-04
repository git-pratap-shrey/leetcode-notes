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
*   **Technique:** Iterative refinement (Horizontal Scanning). The algorithm maintains a current prefix and iteratively compares it with each subsequent string in the array, shortening the prefix as needed.
*   **Optimality:** Optimal for this type of linear scan. It effectively reduces the search space by shrinking the prefix length monotonically.

## Complexity
*   **Time Complexity:** $O(S)$, where $S$ is the sum of all characters in all strings. In the worst case, every character is compared.
*   **Space Complexity:** $O(M)$, where $M$ is the length of the longest string (for `StringBuilder` storage and char array conversion).

## Efficiency Feedback
*   **String conversions:** The code frequently converts `StringBuilder` to `String` and back (`sb.toString()`, `new StringBuilder(temp)`). This creates unnecessary object allocations.
*   **Memory usage:** Creating `char[]` arrays inside the `srn` helper function for every iteration is costly. It would be more efficient to compare characters directly from the strings using `charAt()` without copying them into arrays.
*   **Redundancy:** The `StringBuilder` operations (`sb.replace`) are more complex than simply storing the prefix as a `String` reference, as `String` objects are immutable and the result is frequently re-assigned.

## Code Quality
*   **Readability:** Good. The logic is straightforward and easy to follow.
*   **Structure:** Good. Using a helper function `srn` (though poorly named) separates concerns appropriately.
*   **Naming:** Poor. `srn` is cryptic and provides no insight into the function's purpose (e.g., `getCommonPrefix`).
*   **Concrete Improvements:**
    *   Rename `srn` to `commonPrefix`.
    *   Avoid `toCharArray()`: Use `s1.charAt(i)` inside the loop to save memory allocation.
    *   Simplify the loop: You don't need a `StringBuilder` for `sb`. Just store the prefix as a `String` variable and update it: `String prefix = strs[0]; ... prefix = getCommonPrefix(prefix, strs[i]);`.
    *   Add a check for empty input (`if (strs == null || strs.length == 0) return "";`) to handle edge cases.

---
---


# Question Revision
### Revision Report: Longest Common Prefix

**Pattern:** Horizontal Scanning / Vertical Scanning

**Brute Force:** 
Compare every possible prefix of the first string against all other strings, checking for existence.  
**Complexity:** $O(S)$, where $S$ is the sum of all characters in all strings, but with excessive redundant comparisons.

**Optimal Approach (Horizontal Scanning):**
Take the first string as the `prefix`. Iteratively compare it with the next string, shortening the `prefix` from the end until the next string starts with it. If `prefix` becomes empty, return `""`.  
**Complexity:**  
*   **Time:** $O(S)$ where $S$ is the sum of all characters in all strings.  
*   **Space:** $O(1)$ (ignoring the result string).

**The 'Aha' Moment:**
The constraint that the prefix must be a prefix of *all* strings means the length of the common prefix can only decrease or stay the same as you iterate through the list.

**Summary:** 
Whenever you need to find a common property across a set of items, greedily update your candidate by comparing it against each item sequentially.

---
