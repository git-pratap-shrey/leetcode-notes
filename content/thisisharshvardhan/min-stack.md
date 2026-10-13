---
title: "Min Stack"
slug: min-stack
date: "2026-10-13"
---

# My Solution
~~~cpp
class MinStack {
public:
 stack<int>st;
 stack<int>MinSt;
    MinStack() {
        
    }
    
    void push(int value) {
        st.push(value);
        if(MinSt.empty() || value<=MinSt.top())
         MinSt.push(value);
    }
    
    void pop() {
        if(st.top()==MinSt.top())MinSt.pop();
       st.pop(); 
    }
    
    int top() {
        return st.top();
    }
    
    int getMin() {
        return MinSt.top();
    }
};

/**
 * Your MinStack object will be instantiated and called as such:
 * MinStack* obj = new MinStack();
 * obj->push(value);
 * obj->pop();
 * int param_3 = obj->top();
 * int param_4 = obj->getMin();
 */
~~~

# Submission Review
## Approach
- **Technique**: Two-stack approach. One stack maintains all elements, and a second auxiliary stack (`MinSt`) tracks the minimums.
- **Optimality**: Optimal. It achieves constant time for all required operations.

## Complexity
- **Time Complexity**: $O(1)$ for all operations (`push`, `pop`, `top`, `getMin`).
- **Space Complexity**: $O(n)$ in the worst case (where $n$ is the number of elements pushed), specifically if elements are pushed in non-increasing order.

## Efficiency Feedback
- **Runtime**: Highly efficient due to constant time operations.
- **Memory**: Memory usage is slightly higher than a single-stack approach that stores pairs, but it is more space-efficient than storing the minimum for *every* element in the main stack, as it only pushes to `MinSt` when a new minimum (or equal value) is encountered.

## Code Quality
- **Readability**: Moderate. The logic is clear, but the lack of consistent spacing (e.g., `if(st.top()==MinSt.top())MinSt.pop();`) makes it feel cramped.
- **Structure**: Good. Follows the class structure required by the problem.
- **Naming**: Moderate. `st` is generic; `mainStack` would be clearer. `MinSt` uses inconsistent casing (PascalCase/camelCase mix).

**Concrete Improvements**:
1. **Formatting**: Add spaces around operators and after `if` statements to improve legibility.
2. **Safety**: The `pop()`, `top()`, and `getMin()` methods do not check if the stacks are empty. While usually guaranteed by problem constraints, adding checks or using `std::optional` (in a production environment) would prevent segmentation faults.
3. **Consistency**: Use consistent naming conventions (e.g., `minStack` instead of `MinSt`).

---

# Question Revision
# Revision Report: Min Stack

- **Pattern:** Auxiliary Data Structure / Parallel Stacks
- **Brute Force:** 
    - Use a standard stack for `push` and `pop`. 
    - For `getMin`, iterate through the entire stack to find the minimum element. 
    - **Time Complexity:** `getMin` becomes $O(n)$.
- **Optimal Approach:** 
    - Maintain two stacks: a **Main Stack** to store all elements and a **Min Stack** to track the minimum value at every state of the main stack.
    - When pushing $x$, push $x$ to the main stack and $\min(x, \text{current min})$ to the min stack.
    - When popping, pop from both stacks to keep them synchronized.
    - **Time Complexity:** $O(1)$ for all operations.
    - **Space Complexity:** $O(n)$ to store the values.
- **The 'Aha' Moment:** The requirement for $O(1)$ retrieval of a global property (minimum) that changes with every `push` and `pop` suggests tracking the "state" of the minimum at every level of the stack.
- **Summary:** Synchronize a second stack to store the historical minimums to avoid re-scanning the data.

---