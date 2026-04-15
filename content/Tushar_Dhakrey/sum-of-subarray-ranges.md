---
title: "Sum of Subarray Ranges"
slug: sum-of-subarray-ranges
date: "2026-04-14"
---

# My Solution
~~~java
class Solution {
    public long subArrayRanges(int[] nums) {
        return  (long)sumSubarrayMax(nums)- sumSubarrayMins(nums);
    }
    public long sumSubarrayMins(int[] arr) {
        int n = arr.length;
        int nse[] = nse(arr);
        int psee[] = psee(arr);
        long total = 0;
        for(int i=0;i<n;i++){
            long left = i - psee[i];
            long right = nse[i] - i;
            total = total + (arr[i]*left*right);
        }
        return total;
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
    public long sumSubarrayMax(int[] arr) {
        int n = arr.length;
        int nge[] = nge(arr);
        int pgee[] = pgee(arr);
        long total = 0;
        for(int i=0;i<n;i++){
            long left = i - pgee[i];
            long right = nge[i] - i;
            total = total + (arr[i]*left*right);
        }
        return total;
    }

    public int[] nge(int[] arr){
        Stack<Integer> st = new Stack<>();
        int n = arr.length;
        int nge[] = new int[n];
        for(int i=n-1;i>=0;i--){
            while(!st.isEmpty() && arr[st.peek()]<=arr[i]){
                st.pop();
            }
            nge[i] = st.isEmpty() ?n:st.peek();
            st.push(i);
        }
        return nge;
    }
    public int[] pgee(int[] arr){
        Stack<Integer> st = new Stack<>();
        int n = arr.length;
        int pgee[] = new int[n];
        for(int i=0;i<n;i++){
            while(!st.isEmpty() && arr[st.peek()]<arr[i]){
                st.pop();
            }
            pgee[i] = st.isEmpty() ?-1:st.peek();
            st.push(i);
        }
        return pgee;
    }

}
~~~

# Submission Review
## Approach
- **Technique**: Monotonic Stack. The problem is decomposed into calculating $\sum \text{max(subarray)} - \sum \text{min(subarray)}$. The code calculates the contribution of each element by finding the range $[L, R]$ where the current element is the minimum/maximum.
- **Optimality**: Optimal. The time complexity is linear, which is the best possible for this problem.

## Complexity
- **Time Complexity**: $O(n)$. Each element is pushed and popped from the stack at most once for each of the four boundary arrays (`nse`, `psee`, `nge`, `pgee`).
- **Space Complexity**: $O(n)$. Used to store the four boundary arrays and the monotonic stack.

## Efficiency Feedback
- **Stack Implementation**: The code uses `java.util.Stack`. In Java, `ArrayDeque` is generally faster as `Stack` is synchronized (extends `Vector`), introducing unnecessary overhead.
- **Redundant Passes**: The logic performs four separate passes to find boundaries. While still $O(n)$, these could be combined (e.g., calculating both left and right boundaries in a single pass) to reduce constant factor overhead and memory allocations.
- **Memory**: Creating four separate integer arrays of size $n$ increases memory pressure.

## Code Quality
- **Readability**: Moderate. The logic is clear, but the naming conventions (`nse`, `psee`, `nge`, `pgee`) are shorthand and may be obscure to those unfamiliar with monotonic stack terminology.
- **Structure**: Good. The logic is well-modularized into helper functions, making the main `subArrayRanges` method very clean.
- **Naming**: Moderate. While consistent, names like `psee` (Previous Smaller or Equal Element) could be more descriptive (e.g., `prevSmallerEqual`).
- **Concrete Improvements**:
    - Replace `Stack<Integer>` with `Deque<Integer> stack = new ArrayDeque<>()`.
    - Use a single loop to calculate the contribution of an element by processing boundaries on the fly.
    - Use `long` for intermediate calculations within the loop to prevent overflow before adding to `total` (already handled via `long left` and `long right`).

---

# Question Revision
### Sum of Subarray Ranges

**Pattern:** Monotonic Stack

**Brute Force:** Iterate through all possible subarray start and end indices, maintaining the running minimum and maximum for each.
- **Complexity:** $O(n^2)$ time, $O(1)$ space.

**Optimal Approach:** 
Decompose the problem: $\sum (\max - \min) = \sum \max - \sum \min$. Use a monotonic stack to find the "contribution" of each element. For each $arr[i]$, determine the number of subarrays where it is the minimum (and maximum) by finding the distance to the nearest smaller (and larger) elements to its left and right.
- **Contribution formula:** $arr[i] \times (\text{distance to prev smaller}) \times (\text{distance to next smaller})$.
- **Complexity:** $O(n)$ time, $O(n)$ space.

**The 'Aha' Moment:** The sum of ranges can be refactored as the total sum of all subarray maximums minus the total sum of all subarray minimums.

**Summary:** Use monotonic stacks to calculate how many subarrays each element acts as the minimum and maximum to find the total range sum in linear time.

---