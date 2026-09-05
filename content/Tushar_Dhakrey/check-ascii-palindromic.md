---
title: "Check ASCII Palindromic"
slug: check-ascii-palindromic
date: "2026-08-23"
---

# My Solution
~~~java
class Solution {
    public boolean isPalindromic(String s) {
        StringBuilder binary = new StringBuilder();
        for(int i=0;i<s.length();i++){
            int ascii = (int) s.charAt(i);
            String b = String.format("%8s",Integer.toBinaryString(ascii)).replace(' ','0');
            binary.append(b);
            
        }
        return palindrome(binary.toString());
    }
    public boolean palindrome(String s){
        int left  = 0;
        int right = s.length()-1;
        while(left<right){
            if(s.charAt(left)!=s.charAt(right)){
                return false;
            }
            left++;
            right--;
        }
        return true;
    }
}
~~~

# Submission Review
## Approach
* **Technique:** String manipulation and two-pointer verification. 
* **Logic:** The code converts each character to its 8-bit binary representation, concatenates them into a single string, and checks if the resulting binary sequence is a palindrome.
* **Optimality:** **Suboptimal.** It performs unnecessary heavy string allocations and binary conversions. A palindrome check can be performed directly on the original string or via bitwise operations without creating an auxiliary binary string.

## Complexity
* **Time Complexity:** $O(N \cdot K)$, where $N$ is the length of the string and $K$ is the constant bit-length (8). String building and `String.format` create significant overhead.
* **Space Complexity:** $O(N)$, as it stores the entire binary representation in a `StringBuilder`.

## Efficiency Feedback
* **Bottleneck:** `String.format("%8s", ...)` inside a loop is extremely expensive due to repeated parsing, object creation, and formatting logic.
* **Optimization:** To determine if the binary representation is a palindrome:
    * If the string has length $N$, the $i$-th bit of the binary sequence can be calculated on-the-fly using `(s.charAt(i / 8) >> (7 - (i % 8))) & 1`.
    * This allows for $O(1)$ extra space and avoids all string allocations.

## Code Quality
* **Readability:** **Good.** The logic is simple and easy to follow.
* **Structure:** **Moderate.** The helper method `palindrome` is well-encapsulated, but the binary conversion logic is needlessly verbose.
* **Naming:** **Good.** Variable names (`binary`, `left`, `right`) are clear and standard.
* **Concrete Improvements:** 
    * Eliminate the `StringBuilder` and `String.format`.
    * Use a two-pointer approach directly on the input string $s$ while calculating bits mathematically.
    * Use `int` or `char` arrays instead of `StringBuilder` if string manipulation is required, though direct index calculation is preferred here.

---

# Question Revision
### Revision Report: Check ASCII Palindromic

**Pattern:** Two Pointers

**Brute Force:** 
Generate a reversed copy of the string and compare it to the original.
*   **Time:** $O(n)$
*   **Space:** $O(n)$

**Optimal Approach:** 
Use two pointers (`left` at index 0, `right` at index $n-1$). Compare characters at each pointer, increment `left` and decrement `right` until they meet. If any mismatch occurs, it is not a palindrome.
*   **Time:** $O(n)$
*   **Space:** $O(1)$

**The 'Aha' Moment:** 
The symmetry of a palindrome implies that the element at index $i$ must match the element at index $n-1-i$, making a bidirectional scan from the boundaries the most efficient traversal.

**Summary:** 
Whenever a problem requires checking for symmetry or mirroring, use two pointers moving inward to achieve constant space complexity.

---