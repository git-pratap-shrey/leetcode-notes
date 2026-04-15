---
title: "Sum of Subarray Minimums"
slug: sum-of-subarray-minimums
date: "2026-04-14"
---

# My Solution
~~~java
class Solution {
    public int sumSubarrayMins(int[] arr) {
        int n = arr.length;
        int nse[] = nse(arr);
        int psee[] = psee(arr);
        long total = 0;
        long mod = 1000000007;
        for(int i=0;i<n;i++){
            long left = i - psee[i];
            long right = nse[i] - i;
            total = (total + (arr[i]*left*right)%mod)%mod;
        }
        return (int) total;
    }

    public int[] nse(int[] arr){
        Stack<Integer> st = new Stack<>();
        int n = arr.length;
        int nse[] = new int[n];
        for(int i=n-1;i>=0;i--){
            while(!st.isEmpty() && arr[st.peek()]>=arr[i]){
                st.pop();
            }
            nse[i] = st.isEmpty() ?n:st.peek();
            st.push(i);
        }
        return nse;
    }
    public int[] psee(int[] arr){
        Stack<Integer> st = new Stack<>();
        int n = arr.length;
        int psee[] = new int[n];
        for(int i=0;i<n;i++){
            while(!st.isEmpty() && arr[st.peek()]>arr[i]){
                st.pop();
            }
            psee[i] = st.isEmpty() ?-1:st.peek();
            st.push(i);
        }
        return psee;
    }
}
~~~

# Submission Review
## Approach
- **Technique**: Monotonic Stack. The solution calculates the contribution of each element `arr[i]` by finding the range $[psee[i] + 1, nse[i] - 1]$ where `arr[i]` is the minimum.
- **Optimality**: Optimal. It achieves linear time complexity, which is the theoretical lower bound for this problem.
- **Correctness**: Correct. The use of strict inequality (`>`) in `psee` and non-strict inequality (`>=`) in `nse` correctly handles duplicate elements to prevent overcounting.

## Complexity
- **Time Complexity**: $O(n)$. The array is traversed three times (once for `nse`, once for `psee`, and once for the final sum). Each element is pushed and popped from the stack exactly once.
- **Space Complexity**: $O(n)$. Three auxiliary arrays (`nse`, `psee`, and the stack) each store up to $n$ elements.

## Efficiency Feedback
- **Stack Implementation**: The code uses `java.util.Stack`, which is synchronized and generally slower. Replacing it with `java.util.ArrayDeque` would provide a slight performance boost.
- **Modulo Operations**: The logic `(arr[i] * left * right) % mod` is safe because the intermediate product is stored in a `long`. 

## Code Quality
- **Readability**: Moderate. While the logic is clean, the naming `nse` and `psee` (Next Smaller Element / Previous Smaller or Equal Element) is competitive programming shorthand and may be unclear to engineers unfamiliar with these specific patterns.
- **Structure**: Good. Logic is well-decomposed into helper methods.
- **Naming**: Moderate. Variable names like `st`, `nse`, and `psee` are terse.
- **Concrete Improvements**:
    - Replace `Stack<Integer>` with `Deque<Integer> stack = new ArrayDeque<>()`.
    - Use more descriptive names (e.g., `nextSmaller` instead of `nse`).
    - The two separate passes for `nse` and `psee` could be merged into a single pass to reduce constant-time overhead, though it does not change the asymptotic complexity.

---

# Question Revision
### Sum of Subarray Minimums

**Pattern:** Monotonic Stack

**Brute Force:**
Iterate through all possible subarrays using nested loops, find the minimum of each, and accumulate the sum. 
- Time: $O(n^2)$
- Space: $O(1)$

**Optimal Approach:**
Instead of iterating over subarrays, calculate the **contribution** of each element $A[i]$ to the total sum. An element $A[i]$ is the minimum for all subarrays starting between its Previous Smaller Element (PSE) and ending before its Next Smaller Element (NSE).
1. Use a monotonic increasing stack to find the distance to the PSE (left) and NSE (right) for every element.
2. For element $A[i]$, let $L$ be the distance to the PSE and $R$ be the distance to the NSE.
3. Total subarrays where $A[i]$ is minimum = $L \times R$.
4. Total Sum = $\sum (A[i] \times L \times R) \pmod{10^9 + 7}$.
- **Time Complexity:** $O(n)$
- **Space Complexity:** $O(n)$

**The 'Aha' Moment:**
When asked for the "sum of [min/max] of all subarrays," shift the perspective from "finding the min of each subarray" to "counting how many subarrays each element is the min of."

**Summary:**
Use a monotonic stack to find the left and right boundaries where an element remains the minimum, then multiply the element by the number of valid subarrays it anchors.

---