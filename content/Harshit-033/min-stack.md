---
title: "Min Stack"
slug: min-stack
date: "2026-04-12"

---
---

# My Solution
~~~cpp
class MinStack {
public:
    stack<int> s;
    stack<int> m;
    
    MinStack() {
        
    }
    
    void push(int val) {
        
        if(m.empty()){
            m.push(val);
        }
        else if(m.top()>=val){
            m.push(val);
        }
        
        s.push(val);
        
    }
    
    void pop() {
        
        if(s.top()==m.top()){
            m.pop();
        }
        s.pop();
        
        
    }
    
    int top() {
        int num=s.top();
        return num;
        
    }
    
    int getMin() {
        return m.top();
        
    }
};

/**
 * Your MinStack object will be instantiated and called as such:
 * MinStack* obj = new MinStack();
 * obj->push(val);
 * obj->pop();
 * int param_3 = obj->top();
 * int param_4 = obj->getMin();
 */
~~~

# Submission Review
## Approach
- **Technique:** Two-stack approach (main stack for data, auxiliary stack for min tracking).
- **Optimality:** Optimal. It achieves $O(1)$ time complexity for all required operations by maintaining a non-increasing auxiliary stack.

## Complexity
- **Time Complexity:** $O(1)$ for all operations (`push`, `pop`, `top`, `getMin`).
- **Space Complexity:** $O(N)$ in the worst case (e.g., pushing elements in descending order).

## Efficiency Feedback
- **Runtime:** Excellent. The logic minimizes overhead by only pushing to the auxiliary stack when a new minimum is encountered or tied.
- **Memory:** Efficient. Using two `std::stack` containers is standard and avoids the overhead of storing extra metadata for every element in the main stack.

## Code Quality
- **Readability:** Good. The logic is concise and easy to follow.
- **Structure:** Good. The class encapsulates the state effectively.
- **Naming:** Moderate. `s` and `m` are somewhat generic; `dataStack` and `minStack` would improve clarity.
- **Improvements:**
    - **Const Correctness:** `top()` and `getMin()` should be marked as `const` member functions.
    - **Member Privacy:** The stacks `s` and `m` should be marked `private` to ensure encapsulation.
    - **Parameter Handling:** `push` could potentially use `int val` (current is fine), but consider `const` where applicable.

```cpp
class MinStack {
private:
    std::stack<int> dataStack;
    std::stack<int> minStack;

public:
    void push(int val) {
        dataStack.push(val);
        if (minStack.empty() || val <= minStack.top()) {
            minStack.push(val);
        }
    }

    void pop() {
        if (dataStack.top() == minStack.top()) {
            minStack.pop();
        }
        dataStack.pop();
    }

    int top() const {
        return dataStack.top();
    }

    int getMin() const {
        return minStack.top();
    }
};
```

---
---


# Question Revision
### Revision Report: Min Stack

**Pattern:** Stack / Auxiliary Data Structure

**Brute Force:**  
Iterate through the entire stack to find the minimum element on every `getMin()` call.  
*   **Time:** $O(n)$ per `getMin()` call.
*   **Space:** $O(n)$ to store elements.

**Optimal Approach:**  
Maintain a secondary stack (`minStack`) that stores the current minimum at each level of the main stack. When pushing a new value `x`, push `min(x, minStack.top())` onto the `minStack`. When popping, pop from both stacks simultaneously.  
*   **Time:** $O(1)$ for all operations (`push`, `pop`, `top`, `getMin`).
*   **Space:** $O(n)$ to store the auxiliary minimum values.

**The 'Aha' Moment:**  
Whenever you need to track a global property (like a minimum) that changes dynamically with stack operations, store the state of that property alongside each element to enable constant-time retrieval.

**Summary:**  
Use a synchronized auxiliary stack to track the state of the minimum at every depth so that `getMin` remains $O(1)$ even after pops.

---
