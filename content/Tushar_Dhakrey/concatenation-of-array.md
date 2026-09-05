---
title: "Concatenation of Array"
slug: concatenation-of-array
date: "2026-09-04"
---

# My Solution
~~~java
class Solution {
    public int[] getConcatenation(int[] nums) {
        int n = nums.length;
        int[] ans = new int[2*nums.length];
        for(int i=0;i<n;i++){
            ans[i] = nums[i];
            ans[i+n] = nums[i];
        }
        return ans;
    }
}
~~~

# Submission Review
## Approach
*   **Technique:** Linear iteration (Array manipulation).
*   **Optimality:** Optimal. The problem requires generating an array of size $2n$, and this solution performs exactly $n$ iterations to populate it.

## Complexity
*   **Time Complexity:** $O(n)$, where $n$ is the length of `nums`. Each element is accessed and assigned twice in a single pass.
*   **Space Complexity:** $O(n)$, required to store the result array of size $2n$.

## Efficiency Feedback
*   **Performance:** Excellent. It avoids overhead like `System.arraycopy` or multiple loops, though `System.arraycopy` could be used for a slightly tighter constant factor in memory-heavy scenarios.
*   **Memory:** Highly efficient as it avoids object creation beyond the return array.

## Code Quality
*   **Readability:** Good. The logic is straightforward and easy to follow.
*   **Structure:** Good. Simple, clean, and follows standard Java class naming conventions.
*   **Naming:** Good. `ans` and `n` are standard conventions for competitive programming.
*   **Concrete Improvements:**
    *   The variable `n` is defined but not used in the `new int[]` allocation (`2*nums.length` is used instead). For consistency, use `new int[2 * n]`.
    *   `ans` could be renamed to `result` for better enterprise-level clarity, though `ans` is acceptable in this context.

---

# Question Revision
### Revision Report: Concatenation of Array

**Pattern:** Array Manipulation / Simulation

**Brute Force:**
Create a new array of size $2n$. Iterate through the original array twice, manually copying elements into the first half ($0$ to $n-1$) and the second half ($n$ to $2n-1$).
*   **Time:** $O(n)$
*   **Space:** $O(n)$ (for the result array)

**Optimal Approach:**
Initialize a result array of size $2n$. Use the modulo operator (`i % n`) or direct indexing to map elements from `nums[i % n]` to `ans[i]` for $i$ from $0$ to $2n-1$. This avoids explicit nested loops and clarifies the mapping logic.
*   **Time:** $O(n)$
*   **Space:** $O(n)$ (Required to return the concatenated result)

**The 'Aha' Moment:**
When the transformation rule repeats a pattern periodically, using the modulo operator `index % length` allows you to treat a linear iteration as a cyclic traversal.

**Summary:**
Concatenation is simply mapping index `i` to index `i % n` to effectively "loop" through the source array twice.

---