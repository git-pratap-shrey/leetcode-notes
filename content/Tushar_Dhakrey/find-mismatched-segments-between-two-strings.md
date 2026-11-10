---
title: "Find Mismatched Segments Between Two Strings"
slug: find-mismatched-segments-between-two-strings
date: "2026-11-09"
---

# My Solution
~~~java
class Solution {
    public List<List<String>> findMismatchedSegments(String s1, String s2) {
        List<List<String>> ans = new ArrayList<>();
        StringBuilder a = new StringBuilder();
        StringBuilder b = new StringBuilder();
        for(int i=0;i<s1.length();i++){
            if(s1.charAt(i)!=s2.charAt(i)){
                a.append(s1.charAt(i));
                b.append(s2.charAt(i));
            }
            else{
                if(a.length()>0){
                    ans.add(Arrays.asList(a.toString(),b.toString()));
                    a.setLength(0);
                    b.setLength(0);
                }
            }
        }
        if(a.length()>0){
            ans.add(Arrays.asList(a.toString(),b.toString()));
        }
        return ans;
    }
}
~~~

# Submission Review
## Approach
- **Technique**: Two-pointer/Linear scan. The code iterates through both strings simultaneously, accumulating characters into buffers when they differ and flushing those buffers into the result list when a match is encountered.
- **Optimality**: Optimal. Each character is visited exactly once, and the logic correctly identifies contiguous mismatched segments.

## Complexity
- **Time Complexity**: $O(N)$, where $N$ is the length of the strings.
- **Space Complexity**: $O(N)$ in the worst case (where strings are entirely different) to store the results.

## Efficiency Feedback
- **Runtime**: The use of `StringBuilder` is efficient for accumulating characters.
- **Memory**: Memory usage is minimal. The only overhead is the conversion of `StringBuilder` to `String` when a segment is closed.
- **Potential Optimization**: If the strings are extremely large and have very few mismatches, `Arrays.asList` and `StringBuilder` are appropriate. No significant optimizations are required.

## Code Quality
- **Readability**: Good. The logic is straightforward and easy to follow.
- **Structure**: Good. The handling of the trailing segment after the loop is correctly implemented.
- **Naming**: Poor. Variables `a` and `b` are non-descriptive. `s1` and `s2` are acceptable for competitive programming but poor for production.
- **Concrete Improvements**:
    - Rename `a` to `segment1` and `b` to `segment2`.
    - Rename `ans` to `mismatches`.
    - Add a check at the start to ensure `s1` and `s2` are of equal length to avoid `StringIndexOutOfBoundsException`.

---

# Question Revision
<thought>*   Problem: Find Mismatched Segments Between Two Strings.
    *   Role: Senior DSA Trainer.
    *   Format: Concise, high-signal Markdown.
    *   Constraints: Standard Big-O, 'Aha' moment = 1 sentence, no pleasantries.

    *   Input: Two strings `s1` and `s2`.
    *   Goal: Find the number of contiguous segments where characters at the same index differ.
    *   Key detail: We are comparing characters at the *same index* across two strings of equal length.
    *   Logic:
        *   Iterate through the strings.
        *   Identify blocks of mismatch.
        *   A segment starts when `s1[i] != s2[i]` and either `i == 0` or `s1[i-1] == s2[i-1]`.

    *   Pattern: Two Pointers (or Single Pass/Linear Scan).
    *   Brute Force: Compare every character, and for every mismatch, check if it's part of an existing segment or a new one by looking at the previous state. (Actually, the brute force and optimal are very similar here, but the brute force might involve extracting all mismatching substrings and counting them).
    *   Optimal: Use a flag or check the previous character to detect the start of a mismatched segment.
    *   Complexity: $O(n)$ time, $O(1)$ space.

    *   Pattern: Linear Scan / Two Pointers.
    *   Brute Force: Iterate and find all indices where characters differ, then group contiguous indices into sets.
    *   Optimal Approach: Traverse both strings simultaneously; increment the count only when a mismatch begins (current characters differ AND previous characters matched).
    *   Aha Moment: The requirement to find "contiguous segments" of a binary state (match vs. mismatch) signals a linear scan to detect state transitions.
    *   Summary: Count the number of times the state switches from 'matching' to 'mismatching'.</thought>### Revision Report: Find Mismatched Segments Between Two Strings

- **Pattern**: Linear Scan / Two Pointers
- **Brute Force**: Iterate through both strings and store all indices where characters differ in a list; then, iterate through that list to count how many contiguous blocks of indices exist.
- **Optimal Approach**: Traverse both strings once. Maintain a counter and a boolean flag (or check `i-1`) to track if you are currently inside a mismatched segment. Increment the counter only at the *start* of a mismatch (i.e., `s1[i] != s2[i]` AND (`i == 0` OR `s1[i-1] == s2[i-1]`)).
    - **Time Complexity**: $O(n)$
    - **Space Complexity**: $O(1)$
- **The 'Aha' Moment**: The need to count "contiguous segments" of a boolean condition (match vs. mismatch) indicates we only need to detect the **transition** from a match to a mismatch.
- **Summary**: Count the number of times the state switches from 'matching' to 'mismatching' across a single pass.

---