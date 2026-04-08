---
title: "Largest Odd Number in String"
slug: largest-odd-number-in-string
date: "2026-04-08"

---
---

# My Solution
~~~c
char* largestOddNumber(char* num) {

    int len=strlen(num);
    int n=0;
    int j=-1;
    for(int i=len-1;i>=0;i--){
        n=num[i]-'0';
        if(n%2!=0){
            j=i;
            break;

        }
    }
    if(j==-1){
        return "";
    }
    char* s=(char*)malloc(sizeof(char)*(j+2));

    for(int i=0;i<=j;i++){
        s[i]=num[i];
    }
    s[j + 1] = '\0';
    return s;
}
~~~

# Submission Review
## Approach
*   **Technique:** Greedy traversal from right-to-left.
*   **Optimality:** Optimal. The largest odd number is formed by the longest prefix that ends with an odd digit. Finding the rightmost odd digit and truncating the string there is the most efficient way to satisfy the condition.

## Complexity
*   **Time Complexity:** $O(N)$, where $N$ is the length of the string. We iterate once to find the digit and once to copy the prefix.
*   **Space Complexity:** $O(N)$ for the newly allocated string buffer.

## Efficiency Feedback
*   The solution is efficient. The allocation size `(j + 2)` is correct, accounting for the null terminator.
*   **Optimization:** Since the input string `num` is already in memory, you could modify it in-place by setting `num[j+1] = '\0'` if the problem constraints and ownership rules allowed (though returning a modified pointer or the original string might be safer depending on caller expectations).

## Code Quality
*   **Readability:** Good. The logic is straightforward and easy to follow.
*   **Structure:** Good. Uses a standard loop and conditional return.
*   **Naming:** Moderate. `n`, `j`, and `s` are somewhat generic; `last_odd_idx` or `result` would be more descriptive.
*   **Concrete Improvements:**
    *   Include `<string.h>` and `<stdlib.h>` to ensure standard functions are available.
    *   Add a check for `num == NULL` to prevent crashes on invalid input.
    *   The `n` variable is unnecessary; you can check the digit parity directly: `if ((num[i] - '0') % 2 != 0)`. Even simpler: `if ((num[i] - '0') & 1)`.

---
---


# Question Revision
### Revision Report: Largest Odd Number in String

**Pattern:** Greedy / Right-to-Left Traversal

**Brute Force:**
Generate every possible substring, check if the last digit is odd, and convert to integer to compare for the maximum. This results in $O(n^2)$ time due to nested loops and $O(n)$ space.

**Optimal Approach:**
An odd number is determined solely by its last digit. Since we want the *largest* odd number, we traverse the string from the end to the beginning. The first odd digit we encounter marks the end of the longest possible prefix that forms an odd number.
*   **Logic:** Iterate backwards from `n-1` to `0`. As soon as `s[i]` is odd, return `s[0...i]`. Return empty string if no odd digit is found.
*   **Time Complexity:** $O(n)$
*   **Space Complexity:** $O(1)$ (ignoring the space required for the output substring).

**The 'Aha' Moment:**
The parity of an entire number is defined entirely by its last digit, meaning any trailing even digits are dead weight that must be discarded to maximize the value.

**Summary:**
To find the largest prefix-based odd number, scan from right-to-left and prune all trailing even digits.

---
