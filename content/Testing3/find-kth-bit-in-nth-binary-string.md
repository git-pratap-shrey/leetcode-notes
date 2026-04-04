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
*   **Technique:** Simulation via string concatenation and transformation.
*   **Optimal:** No. The string length grows exponentially ($2^n - 1$), causing both time and memory to explode for large $N$.

## Complexity
*   **Time Complexity:** $O(2^n)$. Generating the full string for each $N$ is redundant given the problem only asks for the $K$-th character.
*   **Space Complexity:** $O(2^n)$. Storing the complete string for $N$ levels requires exponential memory.

## Efficiency Feedback
*   **Bottleneck:** Storing the entire string is unnecessary. This problem can be solved in $O(N)$ time and $O(1)$ space by using the recursive structure:
    *   The length of $S_n$ is $L = 2^n - 1$.
    *   The middle bit is always '1' at position $L/2 + 1$.
    *   If $k$ is in the first half, recurse to $S_{n-1}$.
    *   If $k$ is in the second half, find the corresponding bit in $S_{n-1}$, invert it, and map its index.
*   The current approach will throw an `OutOfMemoryError` or time out for even moderate $N$ (e.g., $N > 20$).

## Code Quality
*   **Readability:** Moderate. The logic is straightforward simulation, but the repeated string object creation (`inv(prev.toString())`) is inefficient.
*   **Structure:** Poor. The `inv` method performs a full string traversal, reverse, and creation in every iteration of the loop, which is highly inefficient.
*   **Naming:** Good. Variable names (`prev`, `cur`, `inv`) are descriptive enough for the logic used.
*   **Improvements:**
    *   Eliminate the `StringBuilder` accumulation entirely. Use a recursive function `char findKthBit(int n, int k)` that works backward from $N$ to 1.
    *   Replace `if(str.charAt(i)=='0') ... else if(str.charAt(i)=='1')` with a simpler ternary or `^ '1'` bit manipulation.
    *   Use `long` for index calculations if $N$ exceeds 31, though the problem constraints typically keep $N \le 20$.

---
---


# Question Revision
### Revision Report: Find Kth Bit in Nth Binary String

**Pattern:** Recursion / Divide and Conquer

**Brute Force:** 
Generate strings iteratively up to $n$ using the rule $S_n = S_{n-1} + "1" + \text{reverse}(\text{invert}(S_{n-1}))$.
*   **Time:** $O(2^n)$
*   **Space:** $O(2^n)$

**Optimal Approach:** 
Use the recursive definition to determine the bit's position relative to the middle index ($2^{n-1}$). If $k$ is exactly the middle, return '1'. If $k$ is in the left half, recurse to $S_{n-1}$. If $k$ is in the right half, find the corresponding bit in the left half and invert it.
*   **Time:** $O(n)$
*   **Space:** $O(n)$ (recursion stack)

**The 'Aha' Moment:**
The construction rule for $S_n$ creates a symmetrical structure around the center bit, allowing us to determine the value of any index without ever materializing the actual string.

**Summary:** 
Whenever a sequence is defined by mirroring and inverting a previous state, treat the string as a tree and navigate to the target bit by checking which half the index falls into.

---
