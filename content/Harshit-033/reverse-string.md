---
title: "Reverse String"
slug: reverse-string
date: "2026-06-05"

---

# My Solution
~~~
class
 Solution {
public:
    void reverseString(vector<char>& s) {
        int i=0;
        int j=s.size()-1;
        char temp;
        while(i<j){
            temp=s[i];
            s[i]=s[j];
            s[j]=temp;
            i++;
            j--;
        }
    }
};
~~~

# Submission Review

## Approach

- **Technique**: Two-pointer approach.
- **Optimality**: Optimal. It performs the minimum necessary swaps to reverse the sequence in-place.

## Complexity

- **Time Complexity**: $O(n)$, where $n$ is the length of the vector. The loop iterates $n/2$ times.
- **Space Complexity**: $O(1)$. Only a constant amount of extra space is used regardless of input size.

## Efficiency Feedback
- The runtime and memory usage are minimal. 
- The manual swap using a `temp` variable is efficient, though `std::swap(s[i], s[j])` is the idiomatic C++ way to achieve the same result.

## Code Quality

- **Readability**: Good. The logic is simple and easy to follow.
- **Structure**: Good.
- **Naming**: Moderate. `i` and `j` are acceptable for loop indices, but `s` for a `vector<char>` is slightly ambiguous (though common in LeetCode contexts).
- **Concrete Improvements**:
    - Replace manual swapping with `std::swap(s[i], s[j])` for conciseness.
    - Use `std::size_t` or `int n = s.size()` to avoid potential signed/unsigned comparison warnings between `int i` and `s.size()`.

---

# Question Revision

#

## Reverse String

**Pattern:** Two Pointers

**Brute Force:** Create a new character array, iterate through the original string in reverse order, and copy elements into the new array. Space: $O(n)$.

**Optimal Approach:** Initialize two pointers: one at the start (`0`) and one at the end (`n-1`). Swap the characters at these positions, then move the pointers toward each other until they meet in the center.
- **Time Complexity:** $O(n)$
- **Space Complexity:** $O(1)$

**The 'Aha' Moment:** The constraint to modify the input array "in-place" is a direct signal to use two pointers to avoid $O(n)$ auxiliary space.

**Summary:** Use two pointers to swap elements from the outside-in for an in-place reversal.

---
