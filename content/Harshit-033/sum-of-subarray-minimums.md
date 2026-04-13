---
title: "Sum of Subarray Minimums"
slug: sum-of-subarray-minimums
date: "2026-04-13"

---
---

# My Solution
~~~cpp
class Solution {
public:
    int sumSubarrayMins(vector<int>& arr) {
       
        stack<int> ns;
        stack<int> ps;

        int len=arr.size();
        vector<int> next(len, 1);
        vector<int> prev(len, 1);
        

        for(int i=len-1;i>=0;i--){
            while(!ns.empty() && arr[ns.top()]>=arr[i]){
                ns.pop();
            }
            next[i]=(ns.empty())?(len-i):(ns.top()-i);
            ns.push(i);            

        }

        for(int i=0;i<len;i++){
            while(!ps.empty() && arr[ps.top()]>arr[i]){
                ps.pop();
            }
            prev[i]=(ps.empty())?(i+1):(i-ps.top());
            ps.push(i);
        }
        int mod = 1e9 + 7;

        long long sum=0;
        for(int i=0;i<len;i++){
            sum=(sum+(long long)arr[i]*prev[i]*next[i])%mod;

        }

        return sum;
    }
};


~~~

# Submission Review
## Approach
* **Technique:** Monotonic Stack.
* **Optimality:** Optimal. It uses the "Contribution Technique," where each element `arr[i]` is treated as the minimum of a range `[left, right]`. By finding the distance to the nearest smaller element on both sides, the algorithm calculates how many subarrays have `arr[i]` as the minimum in $O(N)$ time.

## Complexity
* **Time Complexity:** $O(N)$, where $N$ is the length of the array. Each element is pushed and popped from the stacks exactly once.
* **Space Complexity:** $O(N)$ to store the `next`, `prev` arrays, and the stacks.

## Efficiency Feedback
* **Efficiency:** The algorithm is highly efficient. The use of two separate passes is standard and clear. 
* **Constraint Handling:** The use of `long long` for the `sum` calculation prevents overflow before the modulo operation, which is critical given `arr[i]` can be up to $3 \cdot 10^4$ and the product can exceed the 32-bit integer range.

## Code Quality
* **Readability:** Good. The logic is standard and easy to follow.
* **Structure:** Good. The separation into three distinct passes (next smaller, previous smaller, summation) is clean.
* **Naming:** Moderate. `ns` (next smaller) and `ps` (previous smaller) are acceptable but slightly terse; `next_smaller` and `prev_smaller` would be clearer.
* **Concrete Improvements:**
    * **Strict vs. Non-Strict Inequality:** You handled duplicate elements correctly by using `>=` in the `next` pass and `>` in the `prev` pass (or vice-versa). This prevents double-counting subarrays where the minimum element might appear multiple times.
    * **Early Exit:** The `len` variable could be defined as `size_t` to avoid potential signed/unsigned comparison warnings with `arr.size()`.
    * **Variable declarations:** You could declare `ns` and `ps` inside the loops or clear them to slightly reduce the scope, though it doesn't affect complexity.

---
---


# Question Revision
### Revision Report: Sum of Subarray Minimums

**Pattern:** Monotonic Stack

**Brute Force:** Generate all possible subarrays, find the minimum for each, and sum them up.
*   **Time Complexity:** $O(n^2)$ (or $O(n^3)$ if calculating min naively).
*   **Space Complexity:** $O(1)$.

**Optimal Approach:** 
Use a Monotonic Increasing Stack to find the "contribution" of each element $A[i]$. Calculate $L[i]$ (distance to the previous smaller element) and $R[i]$ (distance to the next smaller element). The total sum is $\sum (A[i] \times L[i] \times R[i])$.
*   **Time Complexity:** $O(n)$ (each element pushed/popped once).
*   **Space Complexity:** $O(n)$ (for the stack and distance arrays).

**The 'Aha' Moment:** 
The realization that an element is the minimum of a subarray if it is smaller than all other elements in that range, allowing you to shift focus from "finding subarrays" to "finding the boundaries where each element remains the minimum."

**Summary:**
When asked for a sum over all subarrays, stop iterating through subarrays and instead calculate the contribution of each element by finding its "influence range" using a monotonic stack.

---
