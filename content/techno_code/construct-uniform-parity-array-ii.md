---
title: "Construct Uniform Parity Array II"
slug: construct-uniform-parity-array-ii
date: "2026-09-03"
---

# My Solution
~~~cpp
class Solution {
public:
    bool uniformArray(vector<int>& nums1) {
        int mn = nums1[0];
        bool hasOdd = false;
        for (int v : nums1) {
            if (v < mn) {
                mn = v;
            }
            if (v & 1) {
                hasOdd = true;
            }
        }
        if (mn & 1) {
            return true;
        }
        return !hasOdd;
    }
};
~~~

# Submission Review
## Approach
*   **Technique**: Greedy scan. The logic checks if the minimum element is odd (in which case parity can be made uniform by parity-preserving operations) or if the array already contains no odd numbers (all even).
*   **Optimal**: Yes. It determines the result in a single pass without additional data structures.

## Complexity
*   **Time Complexity**: $O(n)$, where $n$ is the number of elements in `nums1`. The algorithm performs a single traversal.
*   **Space Complexity**: $O(1)$, as it uses only a few integer/boolean variables.

## Efficiency Feedback
*   The implementation is highly efficient. It operates in linear time and constant space, which is the theoretical lower bound for this problem.
*   The logic avoids unnecessary sorting or auxiliary arrays, making it cache-friendly.

## Code Quality
*   **Readability**: Good. The logic is straightforward and easy to follow.
*   **Structure**: Good. Minimalist and fits the requirements for a clean utility function.
*   **Naming**: Moderate. While `mn` is clear enough, `hasOdd` is descriptive. A more descriptive name for the function (based on the specific problem constraints) would be beneficial.
*   **Concrete Improvements**:
    *   **Boundary Handling**: The code assumes `nums1` is non-empty (`nums1[0]`). If an empty vector is passed, this will cause an out-of-bounds error. Add `if (nums1.empty()) return true;` (or appropriate base case) at the start.
    *   **Const Correctness**: Change the parameter to `const vector<int>& nums1` to signify that the input array is not being modified.
    *   **Modern C++**: Use `std::min_element` or a range-based `for` loop if readability needs to be slightly elevated, though the current manual loop is perfectly fine for performance.

---

# Question Revision
### Revision Report: Sort Array By Parity II

**Pattern:** Two Pointers (In-place)

**Brute Force:**
Create two separate arrays to store even and odd numbers, then iterate through the original array to fill a result array by alternating between them. 
*   **Complexity:** Time $O(n)$, Space $O(n)$.

**Optimal Approach:**
Use two pointers: `i` for even indices (starting at 0) and `j` for odd indices (starting at 1). Iterate through the array; whenever `arr[i]` is odd and `arr[j]` is even, swap them. Continue until one pointer exceeds the array bounds.
*   **Complexity:** Time $O(n)$, Space $O(1)$.

**The 'Aha' Moment:**
When a problem requires rearranging elements based on index-specific parity constraints while maintaining $O(1)$ space, a two-pointer approach avoids the need for auxiliary storage by swapping misaligned elements in place.

**Summary:**
Whenever you need to satisfy parity conditions at specific indices, use two pointers to swap misplaced elements the moment you find a conflict, eliminating the need for extra memory.

---