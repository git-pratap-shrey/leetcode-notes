---
title: "Longest Palindromic Substring"
slug: longest-palindromic-substring

---
---

# My Solution
~~~java
class Solution {
    public String longestPalindrome(String s) {
        String ans="";
        for(int j=0;j<s.length();j++){
            for(int i=j;i<s.length();i++){
                String sub=s.substring(j,i+1);
                if(pal(sub) && sub.length()>ans.length()){
                    ans=sub;
                }
            }
        }
        return ans;
    }
    public boolean pal(String str){
        int n=str.length();
        for(int i=0;i<n/2;i++){
            if(str.charAt(i)!=str.charAt(n-1-i)){
                return false;
            }
        }
        return true;
    }
}
~~~

# Submission Review
## Approach
*   **Technique:** Brute force. It generates every possible substring ($O(n^2)$ substrings) and checks if each is a palindrome ($O(n)$ check).
*   **Optimality:** Suboptimal. The optimal approach (Manacher's Algorithm) runs in $O(n)$, and the "Expand Around Center" approach runs in $O(n^2)$ time with $O(1)$ space, avoiding the massive overhead of substring creation.

## Complexity
*   **Time Complexity:** $O(n^3)$. The nested loops generate $O(n^2)$ substrings, and the `pal` method iterates up to $n/2$ times for each, leading to $O(n^3)$ total time.
*   **Space Complexity:** $O(n)$ in the worst case (due to `s.substring()` creating a new string object in the heap for every iteration).

## Efficiency Feedback
*   **Bottleneck:** String creation and redundant checks. Creating `sub` via `s.substring()` inside the inner loop is memory-intensive and adds garbage collection overhead.
*   **Optimization:** Use the **"Expand Around Center"** technique. Instead of checking every substring, iterate through each index (and the space between indices) as a potential center and expand outwards. This eliminates the need to create new string objects and reduces the complexity to $O(n^2)$.

## Code Quality
*   **Readability:** Moderate. The logic is simple, but the variable naming is sparse.
*   **Structure:** Poor. The nested loops logic is coupled with string generation, making it inefficient.
*   **Naming:** Poor. `ans`, `pal`, `sub`, `n`, `i`, `j` are too generic for a production or interview context.
*   **Concrete Improvements:**
    *   Replace the nested loop structure with `expandAroundCenter(left, right)` helper method.
    *   Track the `start` and `end` indices of the longest palindrome rather than storing the `String` object itself until the very end.
    *   Avoid `s.substring()` until the return statement.

---
---


# Question Revision
### Revision Report: Longest Palindromic Substring

**Pattern:** Expand Around Center / Dynamic Programming

**Brute Force:**
*   **Logic:** Generate all possible substrings, check if each is a palindrome, and track the maximum length.
*   **Complexity:** Time $O(n^3)$, Space $O(1)$.

**Optimal Approach:**
*   **Logic:** Instead of checking all substrings, treat every character (and the gap between characters) as a potential center of a palindrome and expand outwards until the palindrome property is violated.
*   **Complexity:** Time $O(n^2)$, Space $O(1)$.
*   *(Note: Manacher’s Algorithm can achieve $O(n)$, but is rarely required in interviews.)*

**The 'Aha' Moment:**
When a problem asks for a "longest" structure that exhibits local symmetry, shifting focus from "generating substrings" to "expanding from a center" instantly reduces redundant checks.

**Summary:** 
Whenever you need to find a symmetric structure within a string, always attempt to expand outward from every possible center instead of iterating through all substrings.

---
