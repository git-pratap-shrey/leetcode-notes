---
title: "Find Kth Bit in Nth Binary String"
slug: find-kth-bit-in-nth-binary-string

---
---

# My Solution
~~~java
class Solution {
    public char findKthBit(int n, int k) {
        StringBuilder prev=new StringBuilder("0");
        if(n==1){
            return prev.charAt(k-1);
        }
        for(int i=2;i<=n;i++){
            StringBuilder cur=new StringBuilder();
            cur.append(prev).append("1").append(inv(prev.toString()));
            prev.setLength(0);
            prev=cur;
        }
        char ch=prev.charAt(k-1);
        return ch;
    }
    public static String inv(String str){
        int l=str.length();
        StringBuilder sb=new StringBuilder();
        for(int i=0;i<l;i++){
            if(str.charAt(i)=='0'){
                sb.append('1');
            }else{
                if(str.charAt(i)=='1'){
                    sb.append('0');
                }
            }
        }
        return sb.reverse().toString();
    }
}
~~~

# Submission Review
## Approach
*   **Technique:** Simulation/Brute force string construction.
*   **Optimal:** No. The string length doubles at each step ($2^n - 1$). For $n=20$, the string length exceeds $10^6$, and for $n \ge 30$, it will cause an `OutOfMemoryError`. The problem can be solved in $O(n)$ time and $O(1)$ space using a recursive approach or bit manipulation.

## Complexity
*   **Time Complexity:** $O(2^n)$, as the string length grows exponentially and the `inv` function iterates over the entire string each iteration.
*   **Space Complexity:** $O(2^n)$ to store the accumulated `StringBuilder` strings.

## Efficiency Feedback
*   **Bottleneck:** The explicit construction of the entire sequence is unnecessary. The bit at index $k$ in iteration $n$ is deterministic based on the properties of the sequence (mirroring and inversion). 
*   **Optimization:** Use a recursive function `find(n, k)`:
    *   Midpoint is `len = 2^(n-1)`.
    *   If $k < mid$, return `find(n-1, k)`.
    *   If $k == mid$, return `'1'`.
    *   If $k > mid$, return inverted `find(n-1, 2*mid - k)`.

## Code Quality
*   **Readability:** Moderate. The logic is easy to follow but inefficient.
*   **Structure:** Poor. The `inv` method performs a string copy, a reversal, and character flipping, which is highly redundant.
*   **Naming:** Good. Variable names (`prev`, `cur`, `inv`) are intuitive.
*   **Concrete Improvements:**
    *   Remove `StringBuilder` and string manipulation entirely.
    *   Implement the recursive approach to avoid memory exhaustion.
    *   In the `inv` method, the `if(str.charAt(i)=='1')` check is redundant; a simple `else` is sufficient.

---
---


# Question Revision
### Revision Report: Find Kth Bit in Nth Binary String

**Pattern:** Recursion / Divide and Conquer

**Brute Force:** Generate the sequence $S_n$ iteratively by applying the rules ($S_i = S_{i-1} + "1" + \text{reverse}(\text{invert}(S_{i-1}))$). 
*   **Complexity:** $O(2^n)$ time and $O(2^n)$ space, which fails for large $n$.

**Optimal Approach:** Identify the recursive structure of the sequence. For a string $S_n$ of length $L = 2^n - 1$, the middle bit is always '1' at index $L/2$. If $k$ is in the left half, recurse on $S_{n-1}$. If $k$ is in the right half, find the corresponding bit in $S_{n-1}$, invert it, and map the index symmetrically.
*   **Complexity:** $O(n)$ time (depth of recursion), $O(n)$ space (call stack).

**The 'Aha' Moment:** The problem defines $S_n$ using $S_{n-1}$ as a prefix, implying that any bit at index $k$ can be mapped back to a specific position in a smaller, previously generated string.

**Summary:** Whenever a string is defined by concatenating its previous version with a transformed reverse, treat the middle element as a pivot to recursively reduce the problem space.

---
