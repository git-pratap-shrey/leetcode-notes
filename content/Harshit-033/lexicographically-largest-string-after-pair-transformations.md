---
title: "Lexicographically Largest String After Pair Transformations"
slug: lexicographically-largest-string-after-pair-transformations
date: "2026-08-29"
---

# My Solution
~~~cpp
class Solution {
public:
    vector<string> largestString(vector<int>& nums) {
        vector<string> ans;
        for(int n:nums){
            string s;
            int z=n/(1<<25);
            n%=1<<25;
            s.append(z,'z');
            for(int k=24;k>=0;k--){
                int p=1<<k;
                
                if(p<=n){
                    s+=char('a'+k);
                    n-=p;
                }
            }
            ans.push_back(s);
        }
        return ans;
        
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Greedy construction via bit manipulation.
*   **Optimal:** Yes. The approach correctly decomposes the integer into a count of 'z' characters (using the high bits) and a bitmask representing the presence of characters 'a' through 'y'. This is the standard way to represent a unique string given an integer mapping.

## Complexity
*   **Time Complexity:** $O(N \cdot K)$, where $N$ is the number of integers and $K=26$ (the fixed alphabet size). This is optimal.
*   **Space Complexity:** $O(N \cdot L)$, where $L$ is the average length of the generated strings.

## Efficiency Feedback
*   **Performance:** The code is highly efficient. The use of bitwise shifts (`1<<25`) and modular arithmetic is well-suited for this constraint.
*   **Optimization:** The `s.append(z, 'z')` call is efficient. Inside the loop, the bitwise check `p <= n` is minimal overhead. No significant bottlenecks exist.

## Code Quality
*   **Readability:** Moderate. The logic relies on "magic numbers" (e.g., `1<<25`, `24`). While clear to experienced competitive programmers, adding a constant or comment explaining the mapping (e.g., bit 25 stores count of 'z', bits 0-24 store existence of 'a'-'y') would improve maintainability.
*   **Structure:** Good. The logic is cleanly separated per input element.
*   **Naming:** Moderate. Variables `z`, `n`, `p`, and `k` are typical for competitive programming but poor for professional software engineering. More descriptive names like `zCount` or `bitPosition` would be preferred.

### Concrete Improvements
*   **Use Constants:** Define `const int MAX_BIT = 24;` to clarify the loop bounds.
*   **Reserve Memory:** Since the approximate length of the string is known if `z` is large, using `s.reserve(...)` could prevent multiple reallocations during string construction.
*   **Type Safety:** Consider using `1U << k` to ensure bitwise operations are performed on unsigned integers, avoiding potential overflow issues if `k` were larger (though safe here given `k <= 24`).

---

# Question Revision
### Revision Report: Lexicographically Largest String

**Pattern:** Greedy + Monotonic Stack (or Traversal)

**Brute Force:**
Generate all possible transformation permutations by testing every valid swap/replacement sequence, then compare strings lexicographically.
*   **Complexity:** $O(n!)$ or $O(2^n)$ depending on constraints.

**Optimal Approach:**
Iterate through the string and maintain a "local maximum" window. Use a stack or a greedy selection rule to ensure that for every character at index `i`, you either keep it or replace it with the largest possible available character that improves the lexicographical order (often by skipping smaller characters or performing allowed swaps). 
*   **Time Complexity:** $O(n)$ where $n$ is the string length.
*   **Space Complexity:** $O(n)$ to store the result or the stack.

**The 'Aha' Moment:**
When the problem asks for the "lexicographically largest" result and allows local transformations, realize that you should greedily prioritize the leftmost characters to be as large as possible, even if it forces a sub-optimal choice later.

**Summary:**
Prioritize the earliest possible index for the maximum available value; if you can increase the current character without invalidating future moves, take the leap immediately.

---