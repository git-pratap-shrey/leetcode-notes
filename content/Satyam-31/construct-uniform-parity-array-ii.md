---
title: "Construct Uniform Parity Array II"
slug: construct-uniform-parity-array-ii
date: "2026-03-24"

---
---

# My Solution
~~~cpp
class Solution {
public:
    bool uniformArray(vector<int>& nums1) {
        int even = 0, odd = 0;
        int n = nums1.size();

        for(int x: nums1){
            if(x % 2 == 0) even++;
            else odd++;
        }

        if(even == n || odd == n) return true;

        int m = INT_MAX;
        for(int x: nums1){
            if(x % 2 != 0){
                m = min(m, x);
            }
        }

        for(int x: nums1){
            if(x % 2 == 0){
                int a = x - m;
                if(a <= 0) return false;
            }
        }

        return true;
    }
};
~~~

# Submission Review
## Approach
- **Technique:** Greedy/Simulation.
- **Optimality:** The logic appears **incorrect** for the problem implied by the code. The algorithm checks if all even numbers can be reduced by the smallest odd number to remain positive. This only covers one specific transformation rule, likely failing if the problem allows multiple operations or different parity-based swaps/modifications.

## Complexity
- **Time Complexity:** $O(N)$, where $N$ is the size of `nums1`. The code performs three linear passes over the input vector.
- **Space Complexity:** $O(1)$, as it only uses a few auxiliary integer variables.

## Efficiency Feedback
- **Runtime:** Very efficient ($O(N)$). The three passes could be reduced to one or two, but it is unlikely to be a bottleneck compared to the input size.
- **Optimizations:** If the logic were correct, the three loops could be merged into one or two to improve cache locality, though the impact is negligible for $O(N)$.

## Code Quality
- **Readability:** Good. The logic is straightforward and easy to follow.
- **Structure:** Good. The separation of parity counting, minimum finding, and validation is clean.
- **Naming:** Poor. Variables like `m` (minimum), `a` (difference), and `x` (element) are non-descriptive and offer no context about what they represent in the domain of the problem.
- **Improvements:**
    - Rename `m` to `minOdd` and `a` to `diff`.
    - Use `std::count_if` or similar STL algorithms if striving for modern C++ style.
    - Add a check for `m == INT_MAX` before the final loop to prevent potential logic errors if no odd numbers exist (though the early return `even == n` handles this, it relies on implicit flow).

**Note:** The logic assumes that subtracting the minimum odd number from every even number is the sole condition for "Uniform Parity." If the problem definition requires bidirectional parity changes or specific sorting constraints, this solution will produce incorrect results.

---
---


# Question Revision
### Revision Report: Sort Array By Parity II

**Pattern:** Two Pointers (In-place)

**Brute Force:**
Create two separate auxiliary arrays to store even and odd numbers, then iterate again to place them into the result array at alternating indices.
*   **Time Complexity:** $O(n)$
*   **Space Complexity:** $O(n)$

**Optimal Approach:**
Use two pointers, `i` (even positions) and `j` (odd positions). Iterate until both pointers find a misplaced element (e.g., an odd number at an even index `i` and an even number at an odd index `j`), then swap them. Repeat until the array is balanced.
*   **Time Complexity:** $O(n)$
*   **Space Complexity:** $O(1)$

**The 'Aha' Moment:**
When a problem asks to rearrange elements into specific positions (even/odd) based on their value without requiring a specific order, you can perform swaps in-place by maintaining separate pointers for each target category.

**Summary:**
Whenever you need to satisfy parity constraints in-place, use two pointers to identify misplaced pairs and swap them until the parity invariant holds for every index.

---
