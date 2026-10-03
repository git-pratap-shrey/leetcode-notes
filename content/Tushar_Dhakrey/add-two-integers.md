---
title: "Add Two Integers"
slug: add-two-integers
date: "2026-09-29"
---

# My Solution
~~~java
class Solution {
    public int[] findThePrefixCommonArray(int[] A, int[] B) {
        int n = A.length;
        int[] ans = new int[n];
        int[] fre = new int[n+1];
        int common = 0;
        for(int i=0;i<n;i++){
            fre[A[i]]++;
            if(fre[A[i]]==2){
                common++;
            }
            fre[B[i]]++;
            if(fre[B[i]]==2){
                common++;
            }
            ans[i] = common;
        }
        return ans ;
    }
}
~~~

# Submission Review
## Approach
- **Technique**: Frequency Tracking (Hash Map/Array) with a running counter.
- **Optimality**: Optimal. The solution processes the arrays in a single pass and uses a constant-time lookup to track common elements.

## Complexity
- **Time Complexity**: $O(n)$, where $n$ is the length of the arrays. The loop runs once from $0$ to $n-1$.
- **Space Complexity**: $O(n)$ to store the frequency array and the result array.

## Efficiency Feedback
- **Runtime**: Highly efficient due to the use of a primitive array (`fre`) instead of a `HashMap`, minimizing overhead.
- **Memory**: Minimal. The $O(n)$ space is necessary for the output and the frequency tracking of elements up to $n$.

## Code Quality
- **Readability**: Good. The logic is straightforward and follows a linear flow.
- **Structure**: Good. The implementation is concise and avoids unnecessary nesting.
- **Naming**: Moderate. While `n` and `ans` are standard, `fre` is a slightly clipped version of `frequency`.
- **Improvements**:
    - The problem provided was "Add Two Integers," but the code implements "Find the Prefix Common Array." The solution solves the latter correctly, but there is a mismatch with the prompt's problem title.
    - Minor: `fre` could be named `count` or `frequency` for better clarity.

---

# Question Revision
# Revision Report: Add Two Integers

- **Pattern:** Basic Arithmetic / Implementation
- **Brute Force:** Use the built-in addition operator `+` to sum the two input integers.
- **Optimal Approach:** 
    - **Logic:** Return the sum of `num1` and `num2` directly.
    - **Time Complexity:** $O(1)$
    - **Space Complexity:** $O(1)$
- **The 'Aha' Moment:** The problem asks for a direct mathematical sum of two scalar values, requiring no complex data structure or iterative logic.
- **Summary:** A fundamental sanity check problem to ensure environment setup and basic return syntax.

---