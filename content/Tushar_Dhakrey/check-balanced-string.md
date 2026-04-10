---
title: "Check Balanced String"
slug: check-balanced-string
date: "2026-04-10"

---
---

# My Solution
~~~java
class Solution {
    public boolean isBalanced(String num) {
        int evensum = 0;
        int oddsum = 0;
        for(int i=0;i<num.length();i++){
            int digit = num.charAt(i)-'0';
            if(i%2==0){
                evensum = evensum +digit; 
            }
            else{
                oddsum = oddsum + digit;
            }
        }
        if(evensum == oddsum){
            return true;
        }
        else{
            return false;
        }
    }
}
~~~

# Submission Review
## Approach
*   **Technique:** Iterative accumulation (Linear Scan).
*   **Optimality:** Optimal. The problem requires inspecting each digit at least once, and this approach does so in a single pass $O(N)$ with $O(1)$ auxiliary space.

## Complexity
*   **Time Complexity:** $O(N)$, where $N$ is the length of the string.
*   **Space Complexity:** $O(1)$, as it only uses two integer variables regardless of input size.

## Efficiency Feedback
*   **Runtime/Memory:** Highly efficient. It avoids unnecessary data structures or string conversions.
*   **Potential Optimization:** None required for logic. If the input string is exceptionally large, using `num.charAt(i)` is the correct, memory-efficient way to process it without creating character arrays or substrings.

## Code Quality
*   **Readability:** Good. The logic is straightforward and easy to follow.
*   **Structure:** Good. Simple, standard implementation.
*   **Naming:** Moderate. `evensum` and `oddsum` are clear, though `evenSum` and `oddSum` (camelCase) would better adhere to standard Java naming conventions.
*   **Concrete Improvements:**
    *   **Simplification:** The `if-else` return block is redundant. It can be replaced with a single return statement: `return evensum == oddsum;`.
    *   **Naming:** Rename variables to `evenSum` and `oddSum` for Java naming compliance.
    *   **Input Validation:** The current code assumes the input string contains only digits. Adding a check for null or empty strings could improve robustness.

```java
public boolean isBalanced(String num) {
    if (num == null) return false;
    int evenSum = 0;
    int oddSum = 0;
    for (int i = 0; i < num.length(); i++) {
        int digit = num.charAt(i) - '0';
        if (i % 2 == 0) evenSum += digit;
        else oddSum += digit;
    }
    return evenSum == oddSum;
}
```

---
---


# Question Revision
### Revision Report: Check Balanced String

**Pattern:** Iterative Index Tracking

**Brute Force:** Calculate the sum of all digits at even indices and all digits at odd indices by traversing the string twice or storing digits in two separate lists, then compare the sums. $O(n)$ time, $O(n)$ space.

**Optimal Approach:** Traverse the string once, maintaining a running `balance` variable. Add the digit value to the total if the index is even, and subtract it if the index is odd. If the final `balance` is zero, the string is balanced.
*   **Time Complexity:** $O(n)$
*   **Space Complexity:** $O(1)$

**The 'Aha' Moment:** Whenever a problem asks to compare two distinct sets of indices (even vs. odd), you can treat one set as additive and the other as subtractive to solve it in a single pass.

**Summary:** Transform index-based parity conditions into a single running sum to collapse $O(n)$ space into $O(1)$.

---
