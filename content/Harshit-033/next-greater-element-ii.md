---
title: "Next Greater Element II"
slug: next-greater-element-ii
date: "2026-04-12"

---
---

# My Solution
~~~cpp
class Solution {
public:
    vector<int> nextGreaterElements(vector<int>& nums) {
        
        int len=nums.size();
        int* ans=(int*)malloc(sizeof(int)*len);
        stack<int> s;
        /* BRUTE FORCE
            SAMAY SIMA SAMAPT
        

        for(int i=0;i<len;i++){
                int j=(i%len)+1;

                while(j!=i){
                    if(nums[j]>nums[i]){
                        ans.push_back(nums[j]);
                        break;
                    }

                    if(j==i-1) ans.push_back(-1);
                }
                

        }
        return ans;*/
        for(int i=2*len-1;i>=0;i--){
                int ind=i%len;

                if(s.empty()){
                    s.push(nums[ind]);
                    if(i<len) ans[i]=-1;
                    continue;
                }
                int val=s.top();
                while(s.top()<=nums[ind]){
                    s.pop();
                    if(s.empty()){
                        val=-1;
                        break;
                    }
                    val=s.top();
                    

                }
                if(i<len){
                    ans[i]=val;
                    
                }
                s.push(nums[ind]);
                

        }
        vector<int> arr(ans, ans + len);
        return arr;


        
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Monotonic Stack.
*   **Optimality:** Optimal. The solution uses a circular array traversal (simulated by iterating up to `2 * len`) to maintain a monotonic stack, which is the standard approach for this problem.

## Complexity
*   **Time Complexity:** $O(N)$, where $N$ is the size of the input array. Each element is pushed and popped from the stack at most once.
*   **Space Complexity:** $O(N)$ for the stack and the result buffer.

## Efficiency Feedback
*   **Memory Overhead:** The use of `malloc` for the raw pointer `ans` is unnecessary and dangerous in C++. It bypasses standard C++ memory management and requires manual cleanup (though it is copied to a `std::vector` later, the `malloc` block is leaked).
*   **Redundant Logic:** The `val` variable logic inside the `while` loop is slightly convoluted. The standard pattern is: pop elements smaller than current, if the stack is not empty, the top is the next greater element; otherwise, it's -1.

## Code Quality
*   **Readability:** Moderate. The mixed usage of raw pointers and C++ standard containers is confusing.
*   **Structure:** Poor. The code contains a large block of commented-out "brute force" code, which clutters the solution.
*   **Naming:** Moderate. `ans` and `s` are acceptable, but `ind` and `len` could be more descriptive.
*   **Concrete Improvements:**
    *   **Memory Safety:** Replace `int* ans = (int*)malloc(...)` with `vector<int> ans(len)`. This eliminates the memory leak and the need for manual casting.
    *   **Cleanup:** Remove the commented-out brute force section.
    *   **Idiomatic C++:** Simplify the `while` loop logic:
        ```cpp
        while(!s.empty() && s.top() <= nums[ind]) s.pop();
        if (i < len) ans[i] = s.empty() ? -1 : s.top();
        s.push(nums[ind]);
        ```
    *   **Const correctness:** The input `nums` should be treated as `const vector<int>&`.

---
---


# Question Revision
### Revision Report: Next Greater Element II

**Pattern:** Monotonic Stack (Circular Array)

**Brute Force:**
For each element, perform a linear scan of the entire array (including wraparound) to find the first element strictly greater.
*   **Time Complexity:** $O(n^2)$
*   **Space Complexity:** $O(1)$

**Optimal Approach:**
Use a monotonic decreasing stack to store indices. To handle the circular nature, iterate through the array twice ($2n$) and use the modulo operator (`i % n`) to map indices back to the original array. When a current element is greater than the element represented by the top of the stack, pop the stack and record the result for that index.
*   **Time Complexity:** $O(n)$
*   **Space Complexity:** $O(n)$

**The 'Aha' Moment:**
The constraint of a "circular array" is a hint to simulate a second pass by iterating to $2n-1$ and using the modulo operator to access elements as if the array were concatenated with itself.

**Summary:** 
When dealing with "circular" array problems, simulate the wrap-around by iterating to $2n-1$ and using the modulo operator to index into the original array.

---
