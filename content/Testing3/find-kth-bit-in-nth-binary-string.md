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
*   **Technique:** Simulation via string concatenation and inversion.
*   **Optimal:** No. The problem can be solved in $O(n)$ time using recursion or bit manipulation without constructing the full string, which grows exponentially ($2^n - 1$).

## Complexity
*   **Time Complexity:** $O(2^n)$. The string length doubles each iteration. Generating the full string for $N=20$ involves $2^{20}$ operations, leading to potential Memory Limit Exceeded (MLE) or Time Limit Exceeded (TLE) for larger $N$.
*   **Space Complexity:** $O(2^n)$ to store the `StringBuilder` contents.

## Efficiency Feedback
*   **Bottleneck:** The approach explicitly constructs the string. Since the length of the string is $2^n - 1$, storing and processing it is redundant.
*   **Optimization:** Use a recursive approach. For any bit at position $k$ in level $n$, determine its position relative to the middle bit (which is always '1'). If $k$ is the middle, return '1'; otherwise, recurse into the left or right half, applying the inversion logic as needed. This reduces space to $O(n)$ (recursion stack) and time to $O(n)$.

## Code Quality
*   **Readability:** Moderate. The logic is straightforward but lacks efficiency.
*   **Structure:** Moderate. The `inv` function performs an unnecessary full string reversal and character-by-character scan.
*   **Naming:** Good. Variable names like `prev`, `cur`, and `inv` are intuitive.
*   **Concrete Improvements:**
    *   **Avoid String Allocation:** Replace the `StringBuilder` loop with a function `char solve(int n, int k)` that calculates the bit mathematically.
    *   **Inversion Logic:** If you must simulate, observe that the inverted-reversed string can be mapped via index without creating new string objects.
    *   **Redundant logic:** In `inv()`, `if(str.charAt(i)=='1')` is redundant after the `if(str.charAt(i)=='0')` check; an `else` is sufficient.

---
---


# Question Revision
### Revision Report: Find Kth Bit in Nth Binary String

**Pattern:** Recursion / Divide and Conquer

**Brute Force:** Generate the sequence $S_n$ iteratively by concatenating $S_{n-1} + "1" + \text{invert}(\text{reverse}(S_{n-1}))$.
*   **Complexity:** $O(2^n)$ time and $O(2^n)$ space.

**Optimal Approach:** Use the recursive definition to determine the value of the bit at position $k$ without constructing the full string.
1. Find the middle index $mid = 2^{n-1}$.
2. If $k == mid$, return `'1'`.
3. If $k < mid$, recurse into $S_{n-1}$.
4. If $k > mid$, recurse into $S_{n-1}$, invert the result, and map $k$ to the mirrored position: $k' = 2^n - k$.
*   **Time Complexity:** $O(n)$ where $n$ is the recursion depth.
*   **Space Complexity:** $O(n)$ for the recursion stack.

**The 'Aha' Moment:** The string length doubles at each step ($2^n - 1$), signaling that you can perform a binary search-like reduction based on the middle index rather than generating the exponential string.

**Summary:** Whenever a sequence construction involves mirroring and inverting, solve for the specific index by mapping it to the equivalent sub-problem in the previous iteration.

---
