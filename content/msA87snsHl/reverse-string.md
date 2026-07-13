---
title: "Reverse String"
slug: reverse-string
date: "2026-06-23"
---

# My Solution
~~~java
class Solution {
    public void reverseString(char[] s) {
        int j = s.length-1;
        for(int i = 0 ; i < j; i++ ){
            char temp = s[i];
            s[i] = s[j];
            s[j] = temp;
            j--;
        }
    }
}
~~~

# Submission Review
## Approach
* **Technique:** Two-pointer approach.
* **Optimality:** Optimal. It performs an in-place swap, meeting the common requirement of $O(1)$ extra space.

## Complexity
* **Time Complexity:** $O(N)$, where $N$ is the length of the string, as each element is visited at most once.
* **Space Complexity:** $O(1)$, as the reversal is performed in-place using a single temporary variable.

## Efficiency Feedback
* The logic is highly efficient. Using a `for` loop with two decrement/increment pointers is standard and avoids the overhead of recursion.
* The loop condition `i < j` correctly terminates the process at the middle of the array, preventing unnecessary swaps.

## Code Quality
* **Readability:** Good. The logic is straightforward and idiomatic.
* **Structure:** Good. The algorithm is contained within a single method and follows a clean flow.
* **Naming:** Moderate. `i` and `j` are standard for pointers, though `left` and `right` would be slightly more descriptive for long-term maintenance.
* **Improvements:** 
    * The code is concise. No significant functional improvements are needed.
    * For readability, you could use a `while` loop, which is often considered more idiomatic for two-pointer traversals where both pointers move toward each other:
      ```java
      int left = 0, right = s.length - 1;
      while (left < right) {
          char temp = s[left];
          s[left++] = s[right];
          s[right--] = temp;
      }
      ```
      This eliminates the manual decrementing of `j` inside the `for` loop update block, making the pointer movement more explicit.

---

# Question Revision
### Revision Report: Reverse String

**Pattern:** Two Pointers

**Brute Force:** Create a new array/string, iterate from the end of the input to the beginning, and push elements into the new structure.
*   **Time:** $O(n)$
*   **Space:** $O(n)$

**Optimal Approach:** Place a pointer at the start ($i=0$) and one at the end ($j=n-1$). Swap the elements at these pointers, increment $i$, decrement $j$, and repeat until the pointers meet in the middle.
*   **Time:** $O(n)$
*   **Space:** $O(1)$ (In-place modification)

**The 'Aha' Moment:** The requirement to modify the input array *in-place* is the definitive signal to use two pointers to swap elements without allocating extra memory.

**Summary:** Whenever you need to transform or reverse a sequence in-place, use two pointers moving toward each other to minimize space complexity to constant time.

---