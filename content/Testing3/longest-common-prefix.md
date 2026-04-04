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
*   **Technique**: Iterative Horizontal Scanning.
*   **Optimal**: Yes, it is the standard linear approach ($O(S)$, where $S$ is the sum of all characters in all strings).

## Complexity
*   **Time Complexity**: $O(S)$, where $S$ is the total number of characters in the array. Each character is compared a constant number of times.
*   **Space Complexity**: $O(M)$, where $M$ is the length of the longest common prefix (the size of the `StringBuilder` buffer).

## Efficiency Feedback
*   **Redundant Object Allocation**: In `srn`, you create a new `StringBuilder` and convert `s1`/`s2` to character arrays on every call. This triggers excessive Garbage Collection.
*   **Optimization**: Compare strings in place without creating `char[]` copies. Instead of `s1.toCharArray()`, use `s1.charAt(i)`.
*   **Exit Early**: If `sb` becomes empty, return immediately (already handled).

## Code Quality
*   **Readability**: Moderate. The helper method name `srn` is non-descriptive.
*   **Structure**: Good. The logic is clean and handles the edge case of an array with a single element correctly.
*   **Naming**: Poor. `srn` should be renamed to something like `getCommonPrefix`.
*   **Concrete Improvements**:
    *   Rename `srn` to `commonPrefix`.
    *   Avoid `toCharArray()` inside the helper; iterate using `charAt(i)` to save memory allocations.
    *   Avoid re-initializing `sb` inside the loop. You can simply assign `prefix = commonPrefix(prefix, strs[i])` using simple `String` objects, as `StringBuilder` is not strictly necessary here and adds overhead.

```java
// Suggested improvement for the helper method
private String getCommonPrefix(String s1, String s2) {
    int length = Math.min(s1.length(), s2.length());
    for (int i = 0; i < length; i++) {
        if (s1.charAt(i) != s2.charAt(i)) {
            return s1.substring(0, i);
        }
    }
    return s1.substring(0, length);
}
```

---
---


# Question Revision
### Revision Report: Longest Common Prefix

**Pattern:** Horizontal Scanning / Vertical Scanning

**Brute Force:** 
Compare the first string with every other string character-by-character, updating the current prefix as you go.  
**Complexity:** $O(S)$ where $S$ is the sum of all characters in all strings.

**Optimal Approach (Vertical Scanning):**
Compare characters index by index across all strings simultaneously. Stop when a character mismatch occurs or when you reach the end of the shortest string.  
**Complexity:**  
*   **Time:** $O(S)$, where $S$ is the sum of all characters.
*   **Space:** $O(1)$ (excluding the result string).

**The 'Aha' Moment:**
When the prefix must exist in *every* element, you can discard candidate characters immediately upon the first mismatch found across the vertical column.

**Summary:**
Think of vertical scanning as a "race to the first mismatch"—the moment one string fails the column, the entire prefix search ends.

---
