---
title: "Next Greater Element II"
slug: next-greater-element-ii
date: "2026-04-15"
---

# My Solution
~~~cpp
class Solution {
public:
    vector<int> nextGreaterElements(vector<int>& nums) {
        int n =nums.size();
        vector<int>res(n);
        stack<int>st;
        for(int i =n-2;i>=0;i--){
            st.push(nums[i]);
        }
        for(int i=n-1;i>=0;i--){
            while(!st.empty() && st.top()<=nums[i]){
                st.pop();

            }
            if(st.empty()){
                res[i]=-1;
            
            }
            else{
                res[i]=st.top();
                
            }
            st.push(nums[i]);



        }
        return res;
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Monotonic Stack.
- **Optimality**: Optimal. The solution correctly simulates a circular array by pre-loading the stack with elements from the array before the primary processing loop, ensuring each element can "look ahead" to elements that appeared earlier in the sequence.

## Complexity
- **Time Complexity**: $O(n)$. Although there is a `while` loop inside a `for` loop, each element is pushed onto and popped from the stack a maximum of two times across the entire execution.
- **Space Complexity**: $O(n)$ to store the result vector and the stack.

## Efficiency Feedback
- **Runtime**: Efficient. The use of a monotonic stack avoids the $O(n^2)$ brute-force approach.
- **Memory**: Standard for this problem.
- **Observation**: The initialization loop `for(int i = n-2; i >= 0; i--)` is a clever way to handle the circularity without using the modulo operator (`%`) or duplicating the array, though it is slightly unconventional.

## Code Quality
- **Readability**: Moderate. The logic is sound, but the inconsistent indentation and erratic whitespace (e.g., `n =nums.size()`, `res[i] = -1;` with trailing empty lines) make it look unpolished.
- **Structure**: Good. The logic is split into a setup phase and a processing phase.
- **Naming**: Moderate. `st` and `res` are common shorthand in competitive programming, but `s` or `monotonicStack` and `result` would be more descriptive for production code.

**Concrete Improvements**:
1. **Clean Whitespace**: Fix the irregular indentation and remove redundant empty lines inside the `while` and `if/else` blocks.
2. **Edge Case Handling**: While the code handles `n=1` correctly by accident (the first loop doesn't run), adding an explicit check for empty input `if (nums.empty()) return {};` is safer.
3. **Consistency**: Use consistent spacing around operators (e.g., `n = nums.size()` instead of `n =nums.size()`).

---

# Question Revision
### Next Greater Element II

**Pattern:** Monotonic Stack

**Brute Force:** 
Use nested loops to iterate through the array for each element, using modulo arithmetic `(i + j) % n` to wrap around the circular array until a larger element is found. 
- Time: $O(n^2)$ | Space: $O(1)$

**Optimal Approach:**
Use a **monotonic decreasing stack** to store indices of elements awaiting their "next greater" match. Iterate through the array twice ($2n$) to simulate the circular wrap-around. Whenever the current element is greater than the element at the index stored at the top of the stack, pop the index and update the result for that position.
- Time: $O(n)$
- Space: $O(n)$

**The 'Aha' Moment:** 
The "next greater element" requirement is a classic signal for a monotonic stack, while the "circular" constraint is solved by doubling the iteration range.

**Summary:** 
Simulate a doubled array using `i % n` and a monotonic decreasing stack to resolve "next greater" dependencies in $O(n)$.

---