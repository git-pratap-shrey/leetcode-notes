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
* **Technique**: Linear scan (Greedy/State tracking).
* **Optimality**: Optimal. The solution processes the string in a single pass ($O(N)$) and uses constant extra space ($O(1)$).

## Complexity
* **Time Complexity**: $O(N)$, where $N$ is the length of the string.
* **Space Complexity**: $O(1)$, as it only uses one boolean flag and an index variable.

## Efficiency Feedback
* The efficiency is excellent. It stops early as soon as a violation is found, making the average case performance faster for strings with invalid segments near the start.
* The logic is correct: once a '0' is encountered, any subsequent '1' violates the "at most one segment" rule.

## Code Quality
* **Readability**: Good. The logic is concise and easy to follow.
* **Structure**: Good. Minimalist approach fitting for the problem constraints.
* **Naming**: Moderate. `flg` is acceptable but `hasZeroBeenSeen` or `foundZero` would be more descriptive for a production environment.
* **Concrete Improvements**:
    * The problem can also be solved using a built-in library function: `return !s.contains("01");`. While your implementation is efficient, this alternative is more idiomatic in Java for simple substring checks, though it might perform a $O(N \cdot M)$ search depending on the implementation of `contains`. Stick with your current $O(N)$ manual approach for performance-critical scenarios.

---
---


# Question Revision
### Revision Report: Check if Binary String Has at Most One Segment of Ones

**Pattern:** String Traversal / Pattern Matching

**Brute Force:** 
Split the string into an array of substrings using `'0'` as a delimiter, then count how many non-empty substrings consist only of `'1's`. 
*Complexity:* $O(n)$ time, $O(n)$ space.

**Optimal Approach:** 
A string has at most one segment of ones if and only if it does not contain the substring `"01"`. By checking for the presence of `"01"`, you can determine the validity in a single pass.
*Complexity:* $O(n)$ time, $O(1)$ space.

**The 'Aha' Moment:**
The constraint of "at most one segment" implies that once you transition from a '1' to a '0', encountering another '1' is mathematically forbidden.

**Summary:**
If a binary string contains the pattern `"01"`, it has already formed more than one segment of ones, making the condition impossible.

---
