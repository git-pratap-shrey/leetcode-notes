---
title: "Plus One"
slug: plus-one
date: "2026-04-30"
---

# My Solution
~~~java
class Solution {
    public int[] plusOne(int[] digits) {
        int n = digits.length;
        for(int i=n-1;i>=0;i--){
            if(digits[i]<9){
                digits[i]++;
                return digits;
            }
            digits[i]=0;
        }
        digits = new int[n+1];
        digits[0]=1;
        return digits;
    }
}
~~~

# Submission Review
## Approach
- **Technique**: Iterative simulation of addition (Right-to-Left traversal).
- **Optimality**: Optimal. It processes the array in a single pass and handles the carry-over logic with minimum overhead.

## Complexity
- **Time Complexity**: $O(n)$, where $n$ is the length of the array. In the worst case (all digits are 9), every element is visited once.
- **Space Complexity**: $O(1)$ if modified in-place; $O(n)$ in the worst case where a new array of size $n+1$ must be allocated.

## Efficiency Feedback
- **Performance**: The solution is highly efficient. The early `return` statement ensures that in most cases, the loop terminates quickly without traversing the entire array.
- **Memory**: Memory usage is minimal. The allocation of a new array only occurs when the number of digits increases (e.g., `999` $\rightarrow$ `1000`).

## Code Quality
- **Readability**: Good. The logic is concise and follows a clear path.
- **Structure**: Good. The separation between the carry-handling loop and the overflow case is logical.
- **Naming**: Good. Variable names (`digits`, `n`, `i`) are appropriate for a competitive programming context.
- **Improvements**: No concrete improvements needed; the implementation is clean and idiomatic for this problem.

---

# Question Revision
### Plus One

**Pattern:** Array Simulation

**Brute Force:** Convert the digit array into a single integer, add one, and convert the result back into an array. (Risk: Integer overflow for large input arrays).

**Optimal Approach:** 
Iterate through the array from right to left. If the current digit is less than 9, increment it and return the array immediately. If the digit is 9, set it to 0 and continue to the next digit to handle the carry. If the loop completes, it means all digits were 9; prepend a 1 to the array.

*   **Time Complexity:** $O(n)$
*   **Space Complexity:** $O(n)$ (only when all digits are 9, requiring a new array of size $n+1$)

**The 'Aha' Moment:** The carry operation only persists as long as you encounter the digit 9.

**Summary:** Traverse backwards to increment the first non-9 digit, otherwise flip all 9s to 0s and prepend a 1.

---