---
title: "First Matching Character From Both Ends"
slug: first-matching-character-from-both-ends
date: "2026-04-04"

---
---

# My Solution
~~~cpp
class Solution {
public:
    int firstMatchingIndex(string s) {
        int n=s.size();
        for(int i=0;i<n;i++){
            if(s[i]==s[n-i-1]){
                return i;
            }
        }
        return -1;
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Linear scan (Greedy).
- **Correctness**: The logic is **incorrect** based on the problem title "First Matching Character From Both Ends." The provided code returns the index of the *first* pair of characters that satisfy `s[i] == s[n-1-i]`. Since the loop starts at `i=0`, it will always return `0` because `s[0]` will always equal `s[n-0-1]` if the string length is 1, or simply compare the first and last characters immediately.

## Complexity
- **Time Complexity**: $O(1)$ effectively, as the loop terminates at the first iteration (`i=0`), returning 0 (unless the string is empty).
- **Space Complexity**: $O(1)$.

## Efficiency Feedback
- The algorithm is "efficient" in terms of cycles but fails to solve the intended logic. If the goal is to find the first character index that appears in both the prefix and suffix, this approach is fundamentally flawed as it only checks mirror positions (`i` vs `n-i-1`).

## Code Quality
- **Readability**: Good. The code is concise and easy to follow.
- **Structure**: Poor. The structure does not accomplish the implied task of searching for matching characters across two ends.
- **Naming**: Moderate. `firstMatchingIndex` is misleading given the logic implemented.

### Concrete Improvements
- If the requirement is to find the **first index `i` such that `s[i]` exists anywhere in the reversed string (or specifically in a suffix)**, you need to use a frequency map or a hash set.
- If you meant to find the first index where a character from the start matches a character from the end (e.g., `s[i] == s[j]` where `j` is the last occurrence of that char), replace the loop logic with a set or a frequency array to track characters seen from the right.
- Current code effectively only checks `s[0] == s[n-1]`.

---
---


# Question Revision
### Revision Report: First Matching Character From Both Ends

**Pattern:** Two Pointers (Converging)

**Brute Force:** 
Nested loops comparing every character from the beginning with every character from the end, resulting in $O(n^2)$ time complexity.

**Optimal Approach:** 
Initialize two pointers, `left` at index 0 and `right` at index $n-1$. Iterate while `left < right`, checking for equality. If a match is found, return the character; otherwise, increment `left` and decrement `right` until they meet.
*   **Time Complexity:** $O(n)$ — Each element is visited at most once.
*   **Space Complexity:** $O(1)$ — Uses constant extra space.

**The 'Aha' Moment:** 
The requirement to compare elements relative to both extremities simultaneously acts as a structural cue to deploy inward-moving pointers.

**Summary:** 
When a problem asks to compare symmetric positions or converge from opposite boundaries, use two pointers moving toward the center to achieve linear time.

---
