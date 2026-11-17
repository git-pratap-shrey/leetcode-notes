---
title: "Count Consistent Subarrays I"
slug: count-consistent-subarrays-i
date: "2026-11-15"
---

# My Solution
~~~java
class Solution {
    public int countConsistent(int[] nums) {
        int n = nums.length;
        int count = 0;
        for(int i=0;i<n;i++){
            int min = Integer.MAX_VALUE;
            int sum = -1;
            for(int j=i;j<n;j++){
                min = Math.min(min,nums[j]);
                sum &= nums[j];
                if(sum==min){
                    count++;
                }
            }
        }
        return count;
    }
}
~~~

# Submission Review
<thought>*   Problem: Count Consistent Subarrays I.
    *   Language: Java.
    *   Goal: Count subarrays where the bitwise AND of all elements equals the minimum element in that subarray.

    *   Nested loops: Outer loop $i$ from $0$ to $n-1$, inner loop $j$ from $i$ to $n-1$.
    *   Inner loop tracks:
        *   `min`: The minimum element found in the current subarray `[i, j]`.
        *   `sum`: The bitwise AND of all elements in the current subarray `[i, j]`.
    *   Condition: If `sum == min`, increment `count`.
    *   Initialization Bug/Detail: `int sum = -1;`. In Java, `-1` in binary is all 1s (`0xFFFFFFFF`), which is the identity element for bitwise AND.

    *   Nested loops result in $O(n^2)$.
    *   Since the problem is "Consistent Subarrays I" (usually implying smaller constraints), $O(n^2)$ might pass, but for larger $n$, it's suboptimal. However, for the specific logic, it's the brute-force approach.

    *   Time: $O(n^2)$ where $n$ is the length of `nums`.
    *   Space: $O(1)$ additional space.

    *   The `sum` variable is named `sum` but stores a bitwise AND result. This is misleading.
    *   The logic is correct for the condition "AND == min".

    *   Approach: Brute force / Nested loops. Optimal? No, but sufficient for small $N$.
    *   Complexity: $O(n^2)$ time, $O(1)$ space.
    *   Efficiency: Bottleneck is the nested loop.
    *   Code Quality: Variable naming (`sum` for AND) is Poor. Structure is simple.</thought>## Approach
- **Technique**: Brute force using nested loops to evaluate all possible subarrays.
- **Optimality**: Suboptimal. While it correctly checks the condition, it does not leverage the property that the bitwise AND result is non-increasing as the subarray grows, which could potentially be optimized using a sliding window or segment tree for larger constraints.

## Complexity
- **Time Complexity**: $O(n^2)$ where $n$ is the length of the array. The nested loops iterate through every possible subarray.
- **Space Complexity**: $O(1)$ as it only uses a few integer variables regardless of input size.

## Efficiency Feedback
- **Runtime**: The $O(n^2)$ approach is acceptable for small input sizes (typically $n \le 5000$), but will time out on larger datasets.
- **Optimization**: The bitwise AND of a subarray can only change $O(\log(\max(\text{nums})))$ times as the window expands. This property could be used to reduce the complexity to $O(n \log(\max(\text{nums})))$.

## Code Quality
- **Readability**: Moderate. The logic is straightforward, but variable naming is misleading.
- **Structure**: Good. The implementation is concise and follows a standard nested-loop pattern for subarray problems.
- **Naming**: Poor. The variable `sum` is used to store the result of a bitwise AND operation. This is semantically incorrect and confusing; it should be named `andResult` or `currentAnd`.
- **Concrete Improvements**:
    - Rename `sum` to `currentAnd`.
    - The initialization `sum = -1` is a clever way to handle the identity element for AND in Java (all bits set to 1), but a comment explaining this would improve maintainability.

---

# Question Revision
<thought>*   Problem: "Count Consistent Subarrays I" (LeetCode).
    *   Goal: Generate a revision report for study notes.
    *   Role: Senior DSA trainer.
    *   Format: Concise, high-signal Markdown.
    *   Constraints: Standard Big-O, "Aha" moment in one sentence, no introductory pleasantries.

    *   *Given:* A string `s` and a string `consistent`.
    *   *Definition:* A substring is "consistent" if it only contains characters present in the `consistent` string.
    *   *Goal:* Count all consistent subarrays.
    *   *Key Insight:* If a window of length $L$ is consistent, it contains $L \times (L+1) / 2$ consistent subarrays (or more simply, if you extend a consistent window by 1 character, you add $L$ new consistent subarrays ending at that character).

    *   *Pattern:* Two Pointers / Sliding Window.
    *   *Brute Force:* Check all possible substrings ($O(n^2)$) and verify if each character is in the consistent set ($O(n \cdot 26)$). Total: $O(n^3)$ or $O(n^2)$.
    *   *Optimal Approach:*
        *   Use a boolean array or set for $O(1)$ lookup of `consistent` characters.
        *   Iterate through `s` using a pointer (or a sliding window).
        *   Maintain the length of the current contiguous segment of consistent characters.
        *   For every consistent character added, the number of valid subarrays ending at that index is equal to the current segment length.
        *   Complexity: Time $O(n)$, Space $O(1)$ (since the consistent set is max 26 chars).

    *   *Pattern:* Sliding Window / Two Pointers.
    *   *Brute Force:* Nested loops to check every possible substring.
    *   *Optimal Approach:* Maintain a running count of the current contiguous consistent segment; add the current segment length to the total count for every valid character encountered.
    *   *Complexity:* Time: $O(n)$, Space: $O(1)$.
    *   *Aha Moment:* "Consistent subarrays" imply that any substring of a consistent string is also consistent, suggesting a contiguous segment approach.
    *   *Summary:* Count contiguous blocks of valid characters and sum their lengths to find all possible subarrays.</thought>### Revision Report: Count Consistent Subarrays I

- **Pattern**: Sliding Window / Two Pointers
- **Brute Force**: Iterate through all possible substrings $O(n^2)$ and verify if every character in the substring exists in the `consistent` string $O(n)$, resulting in $O(n^3)$ time.
- **Optimal Approach**: 
    - Use a boolean array or hash set for $O(1)$ lookup of `consistent` characters.
    - Traverse the string while maintaining a counter `current_length` of the contiguous consistent segment.
    - If the current character is consistent, increment `current_length` and add this value to the total count (since a segment of length $k$ adds $k$ new subarrays ending at the current index).
    - If the character is inconsistent, reset `current_length` to 0.
    - **Time Complexity**: $O(n)$
    - **Space Complexity**: $O(1)$ (fixed size alphabet)
- **The 'Aha' Moment**: The property that any substring of a consistent string is also consistent indicates that we only need to track the lengths of maximal contiguous consistent blocks.
- **Summary**: Sum the lengths of all maximal contiguous consistent segments to count all valid subarrays.

---