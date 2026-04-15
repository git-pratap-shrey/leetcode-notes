---
title: "Next Greater Element II"
slug: next-greater-element-ii
date: "2026-04-15"
---

# My Solution
~~~java
class Solution {
    public int[] nextGreaterElements(int[] nums) {
        Stack<Integer> st = new Stack<>();
        int n = nums.length;
        int arr[] = new int[n];
        for(int i=2*n-1;i>=0;i--){
            while(!st.isEmpty() && st.peek()<=nums[i%n]){
                st.pop();
            }
            if(i<n){
                arr[i]= st.isEmpty() ? -1:st.peek();
            }
            st.push(nums[i%n]);
        }
        return arr;
    }
}
~~~

# Submission Review
## Approach
- **Technique**: Monotonic Stack.
- **Optimality**: Optimal. The solution simulates a circular array by iterating through the input twice ($2n-1$ down to $0$), ensuring every element has a chance to look at all subsequent elements (including those wrapping around the start).

## Complexity
- **Time Complexity**: $O(n)$. Each element is pushed onto and popped from the stack at most twice across the two passes.
- **Space Complexity**: $O(n)$. The stack can store up to $n$ elements, and the output array requires $O(n)$ space.

## Efficiency Feedback
- **Stack Implementation**: The code uses `java.util.Stack`, which is synchronized and generally slower. Replacing it with `java.util.ArrayDeque` would provide better performance in a high-throughput environment.
- **Modulo Operator**: The use of `i % n` is correct and efficient for mapping the virtual $2n$ range back to the original array indices.

## Code Quality
- **Readability**: Good. The logic is concise and follows standard monotonic stack patterns.
- **Structure**: Good. The single-loop approach for circularity is cleaner than using two separate loops.
- **Naming**: Moderate. While acceptable for competitive programming, `st` could be `stack` and `arr` could be `result` for better clarity.
- **Improvements**: 
    - Use `Deque<Integer> stack = new ArrayDeque<>();` instead of `Stack<Integer>`.
    - Explicitly define the result array type as `int[] result` instead of `int arr[]` to follow Java naming conventions.

---

# Question Revision
### Next Greater Element II

**Pattern:** Monotonic Stack

**Brute Force:** For every element, iterate through the rest of the array (wrapping around to the start via modulo) until a larger element is encountered.
- **Time:** $O(n^2)$
- **Space:** $O(1)$

**Optimal Approach:** 
Iterate through the array twice ($2n$) to simulate circularity. Maintain a monotonic decreasing stack of indices. While the current element is greater than the element at the index on top of the stack, pop the index and set the current element as its "next greater."
- **Time:** $O(n)$
- **Space:** $O(n)$

**The 'Aha' Moment:** The phrase "next greater element" is a classic trigger for a Monotonic Stack, and "circular" implies iterating $2n$ times to ensure every element has a chance to look at all others.

**Summary:** Use a monotonic decreasing stack over a virtual $2n$ length array to find the first larger element in a circular sequence.

---