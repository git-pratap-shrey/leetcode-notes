---
title: "Check if Binary String Has at Most One Segment of Ones"
slug: check-if-binary-string-has-at-most-one-segment-of-ones

---
---

# My Solution
~~~java
class Solution {
    public boolean checkOnesSegment(String s) {
        int n=s.length();
        boolean flg=false;
        for(int i=0;i<n;i++){
            if(s.charAt(i)=='0') flg=true;
            else
                if(s.charAt(i)=='1' && flg) return false;
        }
        return true;
    }
}
~~~

# Submission Review
## Approach
- **Technique:** Linear scan (Greedy/State tracking).
- **Correctness:** The solution is optimal. It tracks if a '0' has been encountered (`flg`). If a '1' is encountered after the state `flg` becomes true, it implies a second segment of ones, which correctly returns `false`.

## Complexity
- **Time Complexity:** $O(n)$, where $n$ is the length of the string, as it traverses the string exactly once.
- **Space Complexity:** $O(1)$, as it only uses a single boolean flag regardless of input size.

## Efficiency Feedback
- The efficiency is optimal. The algorithm terminates early as soon as a violation is found, making the average case better than $O(n)$.
- No significant performance improvements are possible given the input constraints.

## Code Quality
- **Readability:** Good. The logic is simple and easy to follow.
- **Structure:** Good. The logic is cleanly encapsulated in a single loop.
- **Naming:** Moderate. `flg` is a bit generic; `foundZero` or `seenZero` would be more descriptive.
- **Concrete Improvements:**
    - The `else` block after `if(s.charAt(i)=='0')` is redundant because the code returns early. You can simplify the flow:
    ```java
    public boolean checkOnesSegment(String s) {
        boolean seenZero = false;
        for (char c : s.toCharArray()) {
            if (c == '0') seenZero = true;
            else if (seenZero) return false;
        }
        return true;
    }
    ```
    - Alternatively, using built-in library functions: `return !s.contains("01");` is a highly readable, albeit slightly slower (due to internal regex/searching), one-line equivalent.

---
---


# Question Revision
### Revision Report: Check if Binary String Has at Most One Segment of Ones

**Pattern:** String Traversal / Greedy

**Brute Force:**
Split the string by '0's to create an array of segments, then check if the count of non-empty segments is less than or equal to 1. 
*   **Time:** $O(n)$
*   **Space:** $O(n)$

**Optimal Approach:**
Since we only need to verify if there is at most one group of ones, we can simply check if the substring `"01"` exists anywhere in the string. If `"01"` appears, it implies a '1' has appeared after a '0', meaning the sequence of ones was already broken.
*   **Time:** $O(n)$
*   **Space:** $O(1)$

**The 'Aha' Moment:**
The constraint "at most one segment" is mathematically equivalent to forbidding the transition from a '0' back to a '1'.

**Summary:** 
If a binary string has more than one segment of ones, it must contain the pattern `"01"`, allowing you to validate the condition in a single pass without storing segments.

---
