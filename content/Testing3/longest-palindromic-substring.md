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
*   **Technique:** Brute force. It generates all possible substrings ($O(N^2)$) and verifies each for the palindromic property ($O(N)$).
*   **Optimality:** Suboptimal. The optimal approach (e.g., Manacher's Algorithm or Expand Around Center) solves this in $O(N^2)$ or $O(N)$ time, whereas this solution is $O(N^3)$.

## Complexity
*   **Time Complexity:** $O(N^3)$. There are $O(N^2)$ substrings, and the palindrome check `pal()` takes $O(N)$.
*   **Space Complexity:** $O(N)$ due to the creation of substring objects in the heap.

## Efficiency Feedback
*   **Bottleneck:** The nested loops combined with the $O(N)$ string creation and $O(N)$ verification are highly inefficient for large strings (e.g., $N > 1000$ will likely result in a Time Limit Exceeded).
*   **Optimizations:** 
    *   Use the "Expand Around Center" technique: iterate through each character (and the gaps between them) as a potential center and expand outwards. This reduces the time complexity to $O(N^2)$ and eliminates $O(N)$ string allocation.

## Code Quality
*   **Readability:** Good. The logic is straightforward and easy to follow.
*   **Structure:** Moderate. The helper method `pal` is well-separated, but the overall logic is inefficient.
*   **Naming:** Moderate. `ans` and `pal` are slightly ambiguous; `longestPalindrome` and `isPalindrome` would be more descriptive.
*   **Improvements:** 
    *   Avoid creating substring objects inside the loop (`s.substring(j, i+1)`); it puts significant pressure on the Garbage Collector.
    *   If using the brute force approach for very small constraints, use indices to check for palindromes rather than extracting substrings.

---
---


# Question Revision
### Revision Report: Longest Palindromic Substring

**Pattern:** Expand Around Center / Dynamic Programming

**Brute Force:**
Iterate through all possible substrings ($O(n^2)$) and check if each is a palindrome ($O(n)$), resulting in a time complexity of **$O(n^3)$**.

**Optimal Approach:**
Treat each character (and the gap between characters) as a potential center and expand outwards while the characters match.
*   **Time Complexity:** $O(n^2)$
*   **Space Complexity:** $O(1)$ (if expanding in-place) or $O(n^2)$ for DP table.

**The 'Aha' Moment:**
Palindromes grow symmetrically from their middle, so recognizing that every palindrome has either one or two central characters turns a search problem into an expansion problem.

**Summary:** 
Whenever you need to find a symmetric structure, don't build it from the ends; pin the center and expand until the symmetry breaks.

---
