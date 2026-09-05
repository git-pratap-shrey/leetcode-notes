---
title: "Check ASCII Palindromic"
slug: check-ascii-palindromic
date: "2026-08-26"
---

# My Solution
~~~cpp
class Solution {
public:
    bool isPalindromic(string s) {
        string temp="";
        for(char ch:s){
            int num=(int)ch;
            temp+=bitset<8>(num).to_string();
        }
        int i=0;
        int j=temp.size()-1;
        while(i<j){
            if(temp[i]!=temp[j]){
                return false;
            }
            i++;
            j--;
        }
        return true;
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Binary string conversion followed by a two-pointer palindrome check.
- **Optimality**: Suboptimal. While the time complexity is linear, the solution allocates a significant amount of auxiliary memory to store the binary representation as a string.

## Complexity
- **Time Complexity**: $O(N)$, where $N$ is the length of the input string. The code iterates through the input string once to build the binary string and then iterates through the binary string (length $8N$) once.
- **Space Complexity**: $O(N)$. Specifically, it requires $O(8N)$ space to store the `temp` string.

## Efficiency Feedback
- **Memory Overhead**: Converting every character to an 8-character string is memory-inefficient. 
- **Performance Bottleneck**: `std::bitset<8>(num).to_string()` involves object creation and string allocation for every character in the input.
- **Optimization**: The problem can be solved in $O(1)$ auxiliary space by using bitwise operators (`>>` and `&`) to check the $i$-th bit and the $(8N-1-i)$-th bit on the fly.

## Code Quality
- **Readability**: Good. The logic is simple and easy to follow.
- **Structure**: Good. The two-pointer approach is standard for palindrome checks.
- **Naming**: Moderate. `temp` is a generic name; `binaryRepresentation` would be more descriptive. `num` is technically the ASCII value of the character.
- **Improvements**:
    - Call `temp.reserve(s.size() * 8);` before the loop to prevent multiple reallocations of the string.
    - Avoid the `(int)` cast as `char` implicitly promotes to `int`.

---

# Question Revision
### Check ASCII Palindromic

**Pattern:** Two Pointers

**Brute Force:** 
Reverse the entire string and compare it to the original version.
*   Time: $O(n)$
*   Space: $O(n)$

**Optimal Approach:**
Initialize two pointers: one at the start (`left = 0`) and one at the end (`right = length - 1`). Increment `left` and decrement `right`, comparing characters at each step until they meet in the center.
*   Time: $O(n)$
*   Space: $O(1)$

**The 'Aha' Moment:**
The requirement to verify symmetry from both ends of a linear data structure points directly to the Two Pointers pattern.

**Summary:**
Use two pointers moving inward from opposite ends to verify symmetric equality in $O(1)$ space.

---