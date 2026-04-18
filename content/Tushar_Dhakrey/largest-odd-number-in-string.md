---
title: "Largest Odd Number in String"
slug: largest-odd-number-in-string
date: "2026-04-17"
---

# My Solution
~~~java
class Solution {
    public String largestOddNumber(String num) {
        int ind = -1;
        for(int i=num.length()-1;i>=0;i--){
            if((num.charAt(i)-'0')%2==1){
                ind = i;
                break;
            }
        }
        if(ind == -1) return "";
        int i = 0;
        while(i<=ind && num.charAt(i)=='0') i++;
        return num.substring(i,ind+1);
    }
}
~~~

# Submission Review
## Approach
- **Technique**: Two-pointer/Linear Scan. The solution scans from the end of the string to find the rightmost odd digit to determine the boundary of the largest possible odd substring, then scans from the start to trim leading zeros.
- **Optimality**: Suboptimal/Incorrect. While finding the rightmost odd digit is the correct strategy for this problem, **trimming leading zeros is typically incorrect** for this specific challenge (e.g., LeetCode 1903). The problem asks for the largest odd number that is a *substring*; the longest prefix ending at the last odd digit is the largest. Trimming zeros may fail test cases expecting the exact substring.

## Complexity
- **Time Complexity**: $O(N)$, where $N$ is the length of the string. The code performs at most two linear passes.
- **Space Complexity**: $O(1)$ auxiliary space (excluding the space required for the output substring).

## Efficiency Feedback
- **Runtime**: The runtime is optimal as it only requires linear scans.
- **Potential Bottleneck**: The `substring()` method in Java creates a new string, which is necessary here, but the logic to remove leading zeros is redundant and potentially harmful to correctness.

## Code Quality
- **Readability**: Moderate. The logic is simple, but the lack of descriptive variable names makes it less intuitive.
- **Structure**: Good. The flow is linear and easy to follow.
- **Naming**: Poor. 
    - `ind` $\rightarrow$ `lastOddIndex`
    - `i` (in the second loop) $\rightarrow$ `firstNonZeroIndex`
- **Concrete Improvements**:
    1. **Remove the leading zero logic**: Delete the `while(i<=ind && num.charAt(i)=='0') i++;` block and simply return `num.substring(0, ind + 1)`.
    2. **Use `charAt` efficiently**: The current implementation is fine, but ensure the substring range is handled carefully to avoid `IndexOutOfBoundsException`.
    3. **Variable Naming**: Rename `ind` to something more descriptive.

**Corrected Logic Suggestion:**
```java
public String largestOddNumber(String num) {
    for (int i = num.length() - 1; i >= 0; i--) {
        if ((num.charAt(i) - '0') % 2 != 0) {
            return num.substring(0, i + 1);
        }
    }
    return "";
}
```

---

# Question Revision
### Largest Odd Number in String

**Pattern:** Right-to-Left Scan (Greedy)

**Brute Force:** 
Check every possible substring from longest to shortest; verify if the last character is odd and return the first one that satisfies the condition. 
Time: $O(n^2)$ | Space: $O(1)$

**Optimal Approach:** 
Iterate backward from the end of the string. The first odd digit encountered defines the boundary of the largest possible odd substring. Return the prefix from index `0` to that point.
- **Time Complexity:** $O(n)$
- **Space Complexity:** $O(1)$ (excluding output string)

**The 'Aha' Moment:** 
Since a number's parity is determined solely by its last digit, the largest odd substring must be the longest prefix that ends in an odd digit.

**Summary:** 
Scan from right to left and truncate the string at the first odd digit found.

---