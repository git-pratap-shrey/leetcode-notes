---
title: "Valid Anagram"
slug: valid-anagram
date: "2026-10-02"
---

# My Solution
~~~cpp
class Solution {
public:
    int countRotations(string s, int k) {
        int n=s.size();
        int c=0;
        for(int i=0;i<n;i++){
            if(s[i]==s[(i+1)%n]){
                c++;
            }
        }
        if(k==c-1){
            return c;
        }
        else if(k==c){
            return n-c;
        }
        else{
            return 0;
        }
    }
};
~~~

# Submission Review
## Approach
- **Technique:** The provided code uses a linear scan and a conditional check. However, the logic is entirely unrelated to the "Valid Anagram" problem. It appears to be an attempt at a different problem involving string rotations or character repetitions.
- **Optimality:** **Not optimal/Incorrect.** The logic does not address anagram detection (which requires frequency counting or sorting).

## Complexity
- **Time Complexity:** $O(n)$, where $n$ is the length of the string.
- **Space Complexity:** $O(1)$.

## Efficiency Feedback
- While the time and space complexities are low, the solution is logically incorrect for the problem "Valid Anagram." It fails to compare two strings or track character frequencies.

## Code Quality
- **Readability:** Poor. The logic is nonsensical in the context of the problem statement.
- **Structure:** Moderate. The basic class/method structure is correct for a LeetCode-style environment.
- **Naming:** Poor. `c` and `s` are too generic; `countRotations` is an incorrect method name for an anagram check.
- **Concrete Improvements:**
    - The entire logic must be replaced. To solve "Valid Anagram," use a frequency array `int count[26]` to track characters in the first string and decrement them using the second string.
    - Ensure the function signature matches the problem requirements (usually takes two strings as input).

---

# Question Revision
# Revision Report: Valid Anagram

- **Pattern:** Frequency Map / Hash Table
- **Brute Force:** Sort both strings alphabetically and compare if they are identical. 
    - Complexity: $O(n \log n)$ time, $O(1)$ or $O(n)$ space depending on the sorting algorithm.
- **Optimal Approach:** Use a hash map (or an array of size 26 for lowercase English letters) to count occurrences of each character in string `s` and decrement counts using string `t`. If all counts return to zero, they are anagrams.
    - **Time Complexity:** $O(n)$
    - **Space Complexity:** $O(1)$ (since the alphabet size is constant at 26).
- **The 'Aha' Moment:** The requirement to check if two strings have the exact same characters in the same quantities immediately suggests tracking frequencies.
- **Summary:** Anagrams are just permutations; use a frequency counter to verify they share the same character distribution.

---