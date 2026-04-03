---
title: "Reverse String"
slug: reverse-string

---
---

# My Solution
~~~cpp
class Solution {
public:
    void reverseString(vector<char>& s) {
        int i=0;
        int j=s.size()-1;
        while(i<=j){
            swap(s[i],s[j]);
            i++;
            j--;
        }
        
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Two-pointer approach.
*   **Optimality:** Optimal. It performs an in-place reversal with a single pass through the array.

## Complexity
*   **Time Complexity:** $O(N)$, where $N$ is the number of characters in the vector. It visits each element at most once.
*   **Space Complexity:** $O(1)$, as it uses a constant amount of extra space regardless of input size.

## Efficiency Feedback
*   The solution is highly efficient. It avoids unnecessary allocations and leverages `std::swap` (which is typically highly optimized).
*   **Minor optimization:** The condition `i <= j` is safe, but technically `i < j` is sufficient. When `i == j`, the swap is redundant (swapping an element with itself). Changing this to `i < j` saves one unnecessary operation in the middle of odd-length strings.

## Code Quality
*   **Readability:** Good. The logic is standard and easy to follow.
*   **Structure:** Good. The function is concise and self-contained within the class structure.
*   **Naming:** Moderate. While `i` and `j` are acceptable for standard two-pointer patterns, `left` and `right` would be more descriptive.
*   **Improvements:** 
    *   Consider using the built-in `std::reverse(s.begin(), s.end())` for idiomatic C++ code, which is equally performant and more readable.
    *   Change `i <= j` to `i < j` to avoid the redundant middle swap.

---
---


# Question Revision
### Revision Report: Reverse String

**Pattern:** Two Pointers

**Brute Force:** Create a new array/string of the same length, iterate through the original string backwards, and populate the new structure.
*   **Time Complexity:** $O(n)$
*   **Space Complexity:** $O(n)$

**Optimal Approach:** Use two pointers starting at both ends (`left = 0`, `right = n-1`). Swap the elements at these positions, increment `left`, decrement `right`, and continue until the pointers meet in the middle.
*   **Time Complexity:** $O(n)$
*   **Space Complexity:** $O(1)$ (in-place modification)

**The 'Aha' Moment:** The requirement to modify the input array "in-place" is the immediate signal to use two pointers to manipulate elements relative to their mirrors without extra storage.

**Summary:** Whenever you need to transform or reverse an array in-place, sandwich the problem with two pointers moving toward the center.

---
