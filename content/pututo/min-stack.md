---
title: "Min Stack"
slug: min-stack
date: "2026-10-21"
---

# My Solution
~~~cpp
class MinStack {
    stack<int>st,min;
public:
    MinStack() {
        
    }
    
    void push(int value) {
        st.push(value);
        if(min.empty() || value<=min.top())
        min.push(value);
    }
    
    void pop() {
        if(st.top()==min.top())
        min.pop();
        st.pop();
    }
    
    int top() {
        return st.top();
    }
    
    int getMin() {
        return min.top();
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
- **Technique**: Auxiliary Stack. The solution uses a primary stack to store all elements and a secondary stack (`min`) to keep track of the minimum element currently in the primary stack.
- **Optimality**: Optimal. This is the standard approach to achieve $O(1)$ for all required operations.

## Complexity
- **Time Complexity**: $O(1)$ for all operations (`push`, `pop`, `top`, `getMin`).
- **Space Complexity**: $O(n)$ in the worst case (e.g., when elements are pushed in non-increasing order, the `min` stack grows linearly with the primary stack).

## Efficiency Feedback
- **Runtime**: Highly efficient due to constant time operations.
- **Memory**: Memory usage is proportional to the number of elements. While the current approach only pushes to the `min` stack when a new minimum is found, it is the most space-efficient variant of the two-stack approach.

## Code Quality
- **Readability**: Moderate. The lack of whitespace between operations and the absence of access modifiers (making `st` and `min` private by default as they are members of a class, but they are declared at the top without a specific label) is slightly cluttered.
- **Structure**: Good. The class implements the required interface correctly.
- **Naming**: Poor. `st` is acceptable, but naming a stack `min` is confusing as it clashes with the concept of a minimum value; `minStack` would be more descriptive.
- **Concrete Improvements**:
    1. **Safety**: Add checks for `empty()` in `pop()`, `top()`, and `getMin()` to prevent undefined behavior/segmentation faults if these methods are called on an empty stack (though often omitted in competitive programming if constraints guarantee non-empty calls).
    2. **Formatting**: Add consistent indentation and spacing around operators for better maintainability.
    3. **Encapsulation**: Explicitly mark member variables as `private`.

---

# Question Revision
# Revision Report: Min Stack

- **Pattern:** Auxiliary Data Structure / Parallel Stacks
- **Brute Force:** Scan the entire stack to find the minimum element whenever `getMin()` is called. 
    - **Time:** $O(1)$ for `push`/`pop`, $O(n)$ for `getMin`.
- **Optimal Approach:** Maintain a second stack (the "min stack") that tracks the minimum value at every state of the main stack. When pushing a value, push $\min(\text{current\_val}, \text{min\_stack\_top})$ onto the min stack. When popping, pop from both.
    - **Time Complexity:** $O(1)$ for all operations.
    - **Space Complexity:** $O(n)$ to store the history of minimums.
- **The 'Aha' Moment:** The requirement for $O(1)$ time for `getMin` implies that the minimum must be pre-calculated and stored for every possible stack height.
- **Summary:** Use a companion stack to mirror the main stack and store the "minimum seen so far" at each level.

---