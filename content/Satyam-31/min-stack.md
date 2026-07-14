---
title: "Min Stack"
slug: min-stack
date: "2026-06-17"
---

# My Solution
~~~cpp
class MinStack {
public:
    stack<int> st;
    stack<int> minSt;

    MinStack() {
    }

    void push(int val) {
        st.push(val);

        if(minSt.empty() || val <= minSt.top()) {
            minSt.push(val);
        }
    }

    void pop() {
        if(st.top() == minSt.top()) {
            minSt.pop();
        }

        st.pop();
    }

    int top() {
        return st.top();
    }

    int getMin() {
        return minSt.top();
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
- **Technique**: Auxiliary Stack. The solution uses a primary stack to store all elements and a secondary stack (`minSt`) to keep track of the minimum values encountered so far.
- **Optimality**: Optimal. All required operations are performed in constant time.

## Complexity
- **Time Complexity**: $O(1)$ for all operations (`push`, `pop`, `top`, `getMin`).
- **Space Complexity**: $O(n)$ where $n$ is the number of elements pushed. In the worst case (strictly decreasing sequence), the auxiliary stack grows linearly with the primary stack.

## Efficiency Feedback
- **Runtime**: Minimal overhead. The use of `std::stack` provides efficient LIFO operations.
- **Memory**: Memory usage is proportional to the number of unique minimums. The condition `val <= minSt.top()` correctly handles duplicate minimum values to prevent premature removal from `minSt`.

## Code Quality
- **Readability**: Good. The logic is straightforward and easy to follow.
- **Structure**: Moderate. Member variables `st` and `minSt` are declared as `public`, which violates encapsulation principles. They should be `private`.
- **Naming**: Good. `st` and `minSt` are concise and descriptive within the context of the problem.
- **Improvements**:
    - Move `st` and `minSt` to a `private` access modifier.
    - Add basic error handling or assertions for `pop()`, `top()`, and `getMin()` to prevent crashes on empty stacks (though usually not required in competitive programming).

---

# Question Revision
### Min Stack

**Pattern:** Data Structure Design (Auxiliary Space)

**Brute Force:** Iterate through the entire stack to find the minimum element whenever `getMin()` is called.  
**Time:** $O(n)$ for `getMin()`, $O(1)$ others.

**Optimal Approach:** Maintain a secondary "min stack" that stores the minimum value encountered up to that point in the primary stack. When pushing a value, push $\min(\text{value}, \text{current\_min})$ onto the min stack; when popping, pop from both.
- **Time Complexity:** $O(1)$ for all operations.
- **Space Complexity:** $O(n)$ to store the min values.

**The 'Aha' Moment:** The requirement for $O(1)$ `getMin` while maintaining LIFO order implies that the minimum must be cached relative to the current stack depth.

**Summary:** Use a parallel stack to synchronize and track the minimum value for every state of the primary stack.

---