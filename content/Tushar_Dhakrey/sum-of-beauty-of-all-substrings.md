---
title: "Sum of Beauty of All Substrings"
slug: sum-of-beauty-of-all-substrings
date: "2026-04-16"
---

# My Solution
~~~java
class Solution {
    public int beautySum(String s) {
        int n = s.length();
        int total = 0;
        for(int i=0;i<n;i++){
            int fre[] = new int[26];
            for(int j=i;j<n;j++){
                fre[s.charAt(j)-'a']++;
                int max = 0;
                int min = Integer.MAX_VALUE;
                for(int f:fre){
                    if(f>0){
                        max = Math.max(max,f);
                        min = Math.min(min,f);
                    }
                }
                total += (max-min);
            }
        }
        return total;
    }
}
~~~

# Submission Review
## Approach
- **Technique**: Brute force using nested loops to iterate through all possible substrings. For each substring, it maintains a frequency array of characters to calculate the difference between the maximum and minimum non-zero frequencies.
- **Optimality**: Optimal for small to medium constraints (typically $n \le 500$). While $O(n^2 \cdot \Sigma)$ seems slow, the alphabet size $\Sigma=26$ is a small constant, and the problem requires checking all substrings, making $O(n^2)$ the expected baseline.

## Complexity
- **Time Complexity**: $O(n^2 \cdot \Sigma)$, where $n$ is the length of the string and $\Sigma$ is the alphabet size (26). The nested loops generate all $n(n+1)/2$ substrings, and the inner loop iterates 26 times for each.
- **Space Complexity**: $O(\Sigma)$ to store the frequency array.

## Efficiency Feedback
- **Runtime**: The runtime is dominated by the innermost loop iterating over the frequency array. Since $\Sigma$ is small and fixed, this is efficient.
- **Memory**: Memory usage is minimal. Allocating the `fre` array inside the outer loop is acceptable, though reusing a single array and clearing it would technically reduce allocations.

## Code Quality
- **Readability**: Good. The logic is straightforward and follows a standard pattern for substring problems.
- **Structure**: Good. The nesting is logical and the flow is linear.
- **Naming**: Moderate. `fre` is a common abbreviation for frequency, but `frequency` would be more explicit. `total`, `max`, and `min` are appropriate.
- **Improvements**:
    - Minor: Use `s.toCharArray()` before the loops to avoid repeated calls to `s.charAt(j)`, which can be slightly faster in Java.
    - Minor: Rename `fre` to `counts` or `frequency`.

---

# Question Revision
### Sum of Beauty of All Substrings

**Pattern:** Fixed-Start Expansion (Nested Loops)

**Brute Force:** Generate all $O(n^2)$ substrings and independently calculate frequency maps for each: $O(n^3)$.

**Optimal Approach:** 
Iterate through every possible starting index $i$. For each $i$, expand the substring by moving the end index $j$ from $i$ to $n-1$. Maintain a frequency array of size 26 to update counts incrementally as $j$ advances. For every substring $[i, j]$, scan the frequency array to find the maximum and minimum non-zero frequencies.

*   **Time Complexity:** $O(n^2 \cdot \Sigma)$, where $\Sigma$ is the alphabet size (26).
*   **Space Complexity:** $O(\Sigma) \rightarrow O(1)$.

**The 'Aha' Moment:** The constraint $n \le 500$ indicates that an $O(n^2)$ solution is acceptable, allowing us to avoid complex data structures in favor of simple incremental frequency updates.

**Summary:** Use nested loops to expand substrings and a fixed-size array to calculate `max_freq - min_freq` on the fly.

---