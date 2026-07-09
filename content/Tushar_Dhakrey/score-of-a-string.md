---
title: "Score of a String"
slug: score-of-a-string
date: "2026-07-09"
---

# My Solution
~~~java
class Solution {
    public int scoreOfString(String s) {
        int sum = 0;
        int n = s.length();
        for(int i=0;i<n-1;i++){
            sum += Math.abs(s.charAt(i)-s.charAt(i+1));  
        }
        return sum;
    }
}
~~~

# Submission Review
## Approach
- **Technique:** Linear iteration (Single-pass greedy accumulation).
- **Optimality:** Optimal. The problem requires calculating the absolute difference between every adjacent pair, which necessitates visiting every character at least once.

## Complexity
- **Time Complexity:** $O(n)$, where $n$ is the length of the string. The loop executes $n-1$ times, performing constant-time arithmetic operations.
- **Space Complexity:** $O(1)$, as the solution uses a constant amount of extra space regardless of input size.

## Efficiency Feedback
- **Runtime:** Excellent. The solution is as efficient as possible for the given requirements.
- **Memory:** Excellent. It avoids unnecessary object allocations or data structure overhead.

## Code Quality
- **Readability:** Good. The logic is straightforward and easy to follow.
- **Structure:** Good. Clean implementation within the required class/method structure.
- **Naming:** Good. `sum` and `n` are standard, descriptive enough for a short, simple utility method.
- **Concrete Improvements:** 
    - The code is idiomatic and clean; no functional changes are needed. 
    - You could add a check for `if (s == null || s.length() < 2)` for defensive programming, though standard competitive programming environments typically guarantee input constraints that make this unnecessary.

---

# Question Revision
### Revision Report: Score of a String

**Pattern:** Linear Scan / Iteration

**Brute Force:** 
Calculate the absolute difference of ASCII values for every possible pair $(i, j)$ in the string, though the problem specifically defines the score as the sum of differences between adjacent characters ($i$ and $i+1$).

**Optimal Approach:**
Initialize a sum variable to 0. Iterate through the string from index $0$ to $n-2$, calculating the absolute difference between `s[i]` and `s[i+1]` using `abs(ord(s[i]) - ord(s[i+1]))` and adding it to the sum.
*   **Time Complexity:** $O(n)$
*   **Space Complexity:** $O(1)$

**The 'Aha' Moment:**
The requirement to process "adjacent characters" in a fixed sequence signals a single-pass linear scan where you only need access to the current and next elements.

**Summary:**
When a problem asks for a cumulative calculation based on adjacent elements, simply iterate through the string once while maintaining a running sum.

---