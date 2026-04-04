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
*   **Technique**: Linear scan / State machine approach. It tracks if a '0' has been encountered to ensure no '1' appears after the first segment of '1's has ended.
*   **Optimality**: Optimal. The solution processes the string in a single pass without auxiliary data structures.

## Complexity
*   **Time Complexity**: $O(n)$, where $n$ is the length of the string, as it traverses the string exactly once.
*   **Space Complexity**: $O(1)$, as it uses only a single boolean flag regardless of input size.

## Efficiency Feedback
*   **Performance**: The code is highly efficient. It benefits from early termination; if a violation is found, it returns `false` immediately without scanning the remainder of the string.
*   **Alternative**: The problem can also be solved by checking `!s.contains("01")`, which is more idiomatic in Java, though it may be slightly slower due to substring searching overhead. The current iterative approach is superior in terms of raw execution speed.

## Code Quality
*   **Readability**: Moderate. The logic is concise, but the flag name `flg` is uninformative.
*   **Structure**: Good. The loop correctly handles the transitions between '0' and '1'.
*   **Naming**: Poor. `flg` should be renamed to something descriptive like `seenZero` or `foundSegmentEnd` to clarify its purpose.
*   **Concrete Improvements**:
    *   Rename `flg` to `hasSeenZero`.
    *   The conditional `if(s.charAt(i)=='1' && flg)` is correct, but adding a comment explaining the logic (i.e., "If a '1' is found after a '0', the segment property is violated") would improve maintainability for junior developers.

---
---


# Question Revision
### Revision Report: Check if Binary String Has at Most One Segment of Ones

**Pattern:** String Traversal / State Tracking

**Brute Force:** 
Split the string by '0's and count the number of resulting non-empty segments, or iterate through the string and keep a counter that increments every time you transition from '0' to '1'.

**Optimal Approach:**
Since the problem asks for *at most* one segment of ones, any appearance of the pattern `"01"` indicates that a second segment has started. If the string contains `"01"`, it must have more than one segment (provided the string starts with '1').
*   **Logic:** Simply check if `"01"` exists as a substring in `s`.
*   **Time Complexity:** $O(n)$ (where $n$ is the length of the string).
*   **Space Complexity:** $O(1)$.

**The 'Aha' Moment:**
The constraint of "at most one segment" is equivalent to saying the string cannot contain a '1' that appears after a '0'.

**Summary:** 
If a binary string contains the substring `"01"`, it violates the condition of having at most one contiguous block of ones.

---
