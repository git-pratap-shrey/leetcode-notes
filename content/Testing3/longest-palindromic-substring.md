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
- **Technique:** Brute-force. It iterates through all possible substrings ($O(n^2)$) and performs a linear palindrome check ($O(n)$) for each.
- **Optimality:** Not optimal. It performs redundant work by re-checking substrings and generating new string objects inside the loop.

## Complexity
- **Time Complexity:** $O(n^3)$, where $n$ is the length of the string. The nested loops provide $O(n^2)$ iterations, and the `pal` function takes $O(n)$.
- **Space Complexity:** $O(n)$ to store the `sub` string during iteration.

## Efficiency Feedback
- **Bottleneck:** The $O(n^3)$ approach will time out on strings with lengths $n > 1000$.
- **Optimizations:** 
    - Use the "Expand Around Center" approach, which reduces complexity to $O(n^2)$ and eliminates $O(n)$ space overhead per iteration.
    - Manacher’s Algorithm can achieve $O(n)$ time complexity.
    - Avoid `s.substring()` inside the loop to prevent excessive memory allocation and GC pressure.

## Code Quality
- **Readability:** Good. The logic is simple and easy to follow.
- **Structure:** Moderate. The helper method `pal` is well-separated, but the overall approach is inefficient for competitive programming standards.
- **Naming:** Moderate. `ans`, `pal`, and `sub` are somewhat generic; `isPalindrome` or `longestPalindromeSubstring` would be more descriptive.
- **Concrete Improvements:** 
    - Remove `String sub = s.substring(j, i + 1)` and pass indices to the `pal` method to avoid creating new string objects.
    - Implement a center-based expansion: iterate through each character (and gaps between characters) as a potential center and expand outward as long as characters match.

---
---


# Question Revision
### Revision Report: Longest Palindromic Substring

**Pattern:** Expand Around Center / Dynamic Programming

**Brute Force:**
Generate all possible substrings ($O(n^2)$), check if each is a palindrome ($O(n)$), resulting in **$O(n^3)$** time and **$O(1)$** space.

**Optimal Approach:**
Treat every index (and the gap between indices) as a potential center and expand outwards as long as the characters match.
*   **Logic:** A palindrome mirrors around its center. There are $2n-1$ possible centers (single characters for odd lengths, gaps between characters for even lengths).
*   **Time Complexity:** $O(n^2)$ 
*   **Space Complexity:** $O(1)$ (ignoring the space required for the output string).

**The 'Aha' Moment:**
When you realize that expanding outward from a center is computationally cheaper than validating every single substring from scratch because it reuses the palindromic property of the inner core.

**Summary:**
Whenever a problem involves finding a symmetric structure, don't check every possibility—start from the middle and push outward to leverage existing symmetry.

---
