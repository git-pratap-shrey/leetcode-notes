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
        char temp;
        int size = s.size();

        for(int i = 0; i < (size+1)/2; i++) {
            temp = s[i];
            // cout<<temp<<endl;
            s[i] = s[size-i-1];
            s[size-i-1] = temp;
        }
    }
};
~~~

# Submission Review

## Approach

- **Technique**: Two-pointer swap implemented via a single loop index.
- **Optimality**: Optimal. It performs the minimum number of swaps required to reverse the array in-place.

## Complexity

- **Time Complexity**: $O(n)$, where $n$ is the length of the vector.
- **Space Complexity**: $O(1)$, as it uses a single temporary variable regardless of input size.

## Efficiency Feedback

- **Redundant Operation**: The loop condition `i < (size+1)/2` causes the middle element of an odd-sized vector to be swapped with itself. Using `i < size / 2` would avoid this unnecessary operation.
- **Standard Library**: The manual swap logic is efficient, but `std::swap(s[i], s[size-i-1])` is the idiomatic C++ way to handle this.

## Code Quality

- **Readability**: Moderate. The logic is clear, but the commented-out `cout` statement should be removed.
- **Structure**: Good. The function is concise and performs its task directly.
- **Naming**: Good. Variable names (`temp`, `size`, `s`) are appropriate for a short utility function.
- **Improvements**:
    - Change loop condition to `i < size / 2`.
    - Replace the manual swap with `std::swap`.
    - Remove the debugging comment.

---

# Question Revision

#

## Reverse String

**Pattern:** Two Pointers

**Brute Force:** Create a copy of the array, iterate backward through the original, and overwrite the original array. 
- **Complexity:** Time $O(n)$, Space $O(n)$.

**Optimal Approach:** Initialize one pointer at the start (`left`) and one at the end (`right`). Swap the characters at these positions and move the pointers toward each other until they meet in the center.
- **Time Complexity:** $O(n)$
- **Space Complexity:** $O(1)$

**The 'Aha' Moment:** The requirement to modify the input "in-place" with $O(1)$ extra memory is a classic signal for the Two Pointers pattern.

**Summary:** Swap elements from opposite ends moving inward until the pointers meet.

---
