---
title: "Palindromic Substrings"
slug: palindromic-substrings
date: "2026-10-02"
---

# My Solution
~~~java
class Solution {
    public int countSubstrings(String s) {
        int count = 0;
        for(int i=0;i<s.length();i++){
            int low = i;
            int high = i;
            while(low>=0 && high<s.length() && s.charAt(low)==s.charAt(high)){
                count++;
                low--;
                high++;
                
            }
            low = i-1;
            high = i;
            while(low>=0 && high<s.length() && s.charAt(low)==s.charAt(high)){
                count++;
                low--;
                high++;
                
            }
        }
        return count;
    }
}
~~~

# Submission Review
## Approach
- **Technique**: Expand Around Center. The code iterates through each possible center (single character for odd length, gap between characters for even length) and expands outward as long as the substring remains a palindrome.
- **Optimality**: Optimal for this problem. While Manacher's Algorithm exists for $O(n)$, this $O(n^2)$ approach is the standard industry/interview expectation due to its simplicity and efficiency for typical constraints.

## Complexity
- **Time Complexity**: $O(n^2)$, where $n$ is the length of the string. In the worst case (e.g., "aaaaa"), every expansion reaches the boundary.
- **Space Complexity**: $O(1)$. Only a few integer variables are used regardless of input size.

## Efficiency Feedback
- **Runtime**: The runtime is efficient. It avoids the $O(n^3)$ overhead of checking every possible substring.
- **Memory**: Minimal memory footprint as it operates directly on the input string without auxiliary data structures.

## Code Quality
- **Readability**: Good. The logic is straightforward and easy to follow.
- **Structure**: Good. The separation between odd-length and even-length expansions is clear.
- **Naming**: Moderate. `low` and `high` are acceptable, though `left` and `right` are more conventional for pointer expansion. `i` is standard for loop indices.
- **Concrete Improvements**:
    - **Dry Principle**: The expansion logic is duplicated twice. This could be extracted into a private helper method `expand(String s, int left, int right)` to reduce redundancy.
    - **Boundary Checks**: The code correctly handles boundaries, preventing `StringIndexOutOfBoundsException`.

---

# Question Revision
# Revision Report: Palindromic Substrings

### Pattern
**Two Pointers (Expand Around Center)**

### Brute Force
Check every possible substring by iterating through all pairs of start and end indices ($O(n^2)$ substrings), then verifying each one for being a palindrome using a helper function ($O(n)$).
- **Complexity:** Time $O(n^3)$, Space $O(1)$.

### Optimal Approach
Instead of selecting boundaries and checking inward, pick every possible center and **expand outward** as long as the characters match. 
- Since palindromes can be odd-length (center is one char) or even-length (center is between two chars), there are $2n - 1$ possible centers.
- **Complexity:** 
    - **Time:** $O(n^2)$ — each of the $2n$ centers can expand up to $n/2$ times.
    - **Space:** $O(1)$ — no extra data structures required.

### The 'Aha' Moment
The property of a palindrome is **symmetric**, meaning if a string is a palindrome, the string formed by removing its outer characters is also a palindrome.

### Summary
To count palindromes, treat every character and gap as a center and expand outwards to find all valid symmetric pairs.

---