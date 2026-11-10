---
title: "Count Valid Substrings I"
slug: count-valid-substrings-i
date: "2026-11-08"
---

# My Solution
~~~java
class Solution {
    public long countValidSubstrings(String s) {
        long ans = 0;
        int left = 0;
        for(int right=0;right<s.length();right++){
            if(right>=2 && s.charAt(right-2)=='a' && s.charAt(right-1)=='b' && s.charAt(right)=='c'){
                left = Math.max(left,right-1);
            }
            ans += right-left+1;
        }
        return ans;
    }
}
~~~

# Submission Review
<thought>*   Input: A string `s`.
    *   Goal: Count "valid" substrings.
    *   Constraint (implied by code): A substring is invalid if it contains the sequence "abc".
    *   Logic: The code uses a sliding window (`left` and `right`). If the sequence "abc" is detected ending at `right`, the `left` pointer is moved to `right - 1`.
    *   Calculation: `ans += right - left + 1` adds the number of valid substrings ending at the current `right` index.

    *   Technique: Two-pointer / Sliding Window.
    *   Optimality: Optimal. It traverses the string once.

    *   Time: $O(N)$ where $N$ is the length of the string. One pass.
    *   Space: $O(1)$ additional space.

    *   The logic `left = Math.max(left, right - 1)` correctly excludes substrings containing "abc". If "abc" ends at `right`, any substring starting before `right-1` and ending at `right` would contain "abc". The shortest substring ending at `right` that *doesn't* start "abc" starts at index `right-1` (which is 'b') or `right` (which is 'c'). Wait, let's re-evaluate.
    *   If `s[right-2] == 'a'`, `s[right-1] == 'b'`, `s[right] == 'c'`, then the substring from `left` to `right` contains "abc". To remove this "abc", the window must start *after* the 'a'. The 'a' is at `right-2`. So the new `left` should be `(right-2) + 1 = right-1`.
    *   Example: `s = "abc"`.
        *   `right=0`: `ans += 1` (left=0) -> `ans=1` ("a")
        *   `right=1`: `ans += 2` (left=0) -> `ans=3` ("a", "ab", "b")
        *   `right=2`: `s[0]=='a', s[1]=='b', s[2]=='c'`. `left = max(0, 1) = 1`. `ans += 2 - 1 + 1 = 2` ("bc", "c"). Total `ans=5`.
        *   Valid substrings of "abc": "a", "b", "c", "ab", "bc". Total 5. Correct.

    *   Readability: Good.
    *   Structure: Good.
    *   Naming: `ans`, `left`, `right` are standard for this pattern.</thought>## Approach
- **Technique**: Sliding Window (Two-Pointer).
- **Optimality**: Optimal. The algorithm processes the string in a single pass, maintaining the leftmost boundary that excludes the forbidden pattern "abc".

## Complexity
- **Time Complexity**: $O(N)$, where $N$ is the length of the string.
- **Space Complexity**: $O(1)$, as it only uses a few primitive variables.

## Efficiency Feedback
- The solution is highly efficient. 
- Using `s.charAt()` inside the loop is optimal for Java strings in this context.
- The `Math.max(left, right - 1)` ensures the window boundary only moves forward, maintaining the linear time complexity.

## Code Quality
- **Readability**: Good. The logic is concise and the sliding window implementation is standard.
- **Structure**: Good. The single-loop structure is appropriate for the problem.
- **Naming**: Good. `left` and `right` clearly indicate window boundaries; `ans` is acceptable for a return value.

**Concrete Improvements**:
- None. The code is minimal and performs the task optimally.

---

# Question Revision
<thought>*   *   Problem: "Count Valid Substrings I" (LeetCode).
    *   Goal: Generate a revision report for study notes.
    *   Requirements: Senior DSA trainer persona, concise/high-signal Markdown, specific sections (Pattern, Brute Force, Optimal Approach, Aha Moment, Summary), Big-O notation, no introductory pleasantries.

    *   *Problem Definition:* Count substrings where the first and last characters are the same. (Wait, let me double-check the "Valid Substrings I" specific constraints. Usually, this refers to substrings where the start and end are the same character).
    *   *Logic:* For any character 'x', if it appears $k$ times in the string, any two occurrences of 'x' (including the same index) can form the boundaries of a valid substring.
    *   *Counting:* The number of ways to choose 2 indices (start, end) from $k$ positions is $k \times (k + 1) / 2$ or $\binom{k}{2} + k$.

    *   *Pattern:* Frequency Map / Combinatorics.
    *   *Brute Force:* Iterate all possible substrings ($O(n^2)$), check if `s[i] == s[j]`.
    *   *Optimal Approach:*
        *   Count occurrences of each character (a-z).
        *   For each character with frequency $k$, add $k(k+1)/2$ to the total count.
        *   Complexity: $O(n)$ time, $O(1)$ space (fixed 26 chars).
    *   *Aha Moment:* The condition depends only on the endpoints, meaning any two occurrences of the same character automatically validate everything in between.
    *   *Summary:* Sum of $k(k+1)/2$ for each character's frequency.</thought>### Revision Report: Count Valid Substrings I

- **Pattern**: Frequency Map / Combinatorics
- **Brute Force**: Iterate through all possible substrings using nested loops and check if the first and last characters are identical. 
    - Time: $O(n^2)$ | Space: $O(1)$
- **Optimal Approach**: 
    1. Count the total occurrences ($k$) of each character in the string using a frequency array/map.
    2. For a character that appears $k$ times, the number of valid substrings it can form is the number of ways to pick two indices (start and end) where order doesn't matter and indices can be the same: $\frac{k(k+1)}{2}$.
    3. Sum these values for all characters 'a' through 'z'.
    - **Time Complexity**: $O(n)$
    - **Space Complexity**: $O(1)$ (Fixed size array of 26)
- **The 'Aha' Moment**: Since only the endpoints matter, any two occurrences of the same character automatically define a valid substring regardless of what lies between them.
- **Summary**: Calculate the frequency of each character and sum the triangular numbers $\frac{k(k+1)}{2}$ for each.

---