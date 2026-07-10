---
title: "First Unique Character in a String"
slug: first-unique-character-in-a-string
date: "2026-06-10"

---

# My Solution
~~~
class
 Solution {
public:
    int firstUniqChar(string s) {
        int hash[26] = {0};

        for(int i = 0; i < s.size(); i++){
            hash[s[i] - 'a']++;
        }

        for(int i = 0; i < s.size(); i++){
            if(hash[s[i] - 'a'] == 1){
                return i;
            }
        }
        
        return -1;
    }
};
~~~

# Submission Review

## Approach

- **Technique**: Frequency Array (Hashing).
- **Optimality**: Optimal. The problem requires knowing the total count of each character to determine uniqueness, necessitating at least one full pass for counting and one for searching.

## Complexity

- **Time Complexity**: $O(n)$, where $n$ is the length of the string. The algorithm performs two linear passes.
- **Space Complexity**: $O(1)$. The frequency array is fixed at 26 elements regardless of the input size.

## Efficiency Feedback
- The solution is highly efficient in both time and memory.
- No meaningful optimizations are required as the time complexity is already linear and space is constant.

## Code Quality

- **Readability**: Good. The logic is clear and follows a standard pattern.
- **Structure**: Good. 
- **Naming**: Moderate. The variable `hash` is slightly misleading as it is a frequency counter; `counts` or `freq` would be more accurate.
- **Improvements**: 
    - Use a range-based for loop for the first pass: `for (char c : s) hash[c - 'a']++;` to improve conciseness.
    - Consider using `std::vector<int>` or `std::array<int, 26>` instead of a C-style array for better alignment with modern C++ standards.

---

# Question Revision

#

## First Unique Character in a String

**Pattern:** Frequency Map (Hashing)

**Brute Force:** 
Nested loops: For every character at index `i`, scan the entire string to check if that character appears elsewhere. 
- **Time:** $O(n^2)$
- **Space:** $O(1)$

**Optimal Approach:**
1. **Pass 1:** Traverse the string and store the frequency of each character in a hash map or a fixed-size array (size 26 for lowercase English).
2. **Pass 2:** Traverse the string again; the first character encountered with a frequency of `1` is the first unique character.
- **Time:** $O(n)$
- **Space:** $O(1)$ (The map size is capped at the alphabet size, regardless of $n$).

**The 'Aha' Moment:** 
To determine if the *first* character is unique, you must first know the *total* count of all characters in the string.

**Summary:** 
Use a two-pass approach: first to build a frequency map and second to identify the first character with a count of one.

---
