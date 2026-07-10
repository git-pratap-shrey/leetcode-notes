---
title: "Implement Queue using Stacks"
slug: implement-queue-using-stacks
date: "2026-06-22"

---

# My Solution
~~~
class
 MyQueue {
public:
    stack<int> in;
    stack<int> out;

    MyQueue() {
    }

    void push(int x) {
        in.push(x);
    }

    int pop() {

        if(out.empty()) {
            while(!in.empty()) {
                out.push(in.top());
                in.pop();
            }
        }

        int val = out.top();
        out.pop();

        return val;
    }

    int peek() {

        if(out.empty()) {
            while(!in.empty()) {
                out.push(in.top());
                in.pop();
            }
        }

        return out.top();
    }

    bool empty() {
        return in.empty() && out.empty();
    }
};
/**
 * Your MyQueue object will be instantiated and called as such:
 * MyQueue* obj = new MyQueue();
 * obj->push(x);
 * int param_2 = obj->pop();
 * int param_3 = obj->peek();
 * bool param_4 = obj->empty();
 */
~~~

# Submission Review

## Approach

- **Technique**: Two-stack method. 
- **Optimality**: Optimal. It achieves amortized constant time for all operations by transferring elements from the input stack to the output stack only when the output stack is empty.

## Complexity

- **Time Complexity**: 
    - `push`: $O(1)$
    - `pop`: $O(1)$ amortized (Worst case $O(n)$ during transfer, but each element is moved once)
    - `peek`: $O(1)$ amortized (Worst case $O(n)$ during transfer)
    - `empty`: $O(1)$
- **Space Complexity**: $O(n)$ to store the elements.

## Efficiency Feedback
- The implementation is highly efficient as it minimizes the number of stack operations per element.
- **Potential Optimization**: The logic for transferring elements from `in` to `out` is duplicated in both `pop()` and `peek()`. Moving this into a private helper method (e.g., `void move()`) would improve maintainability without affecting runtime performance.

## Code Quality

- **Readability**: Good. The logic is straightforward and follows the standard algorithm.
- **Structure**: Moderate. There is redundant code between `pop()` and `peek()`.
- **Naming**: Good. `in` and `out` clearly describe the flow of data.
- **Concrete Improvements**: 
    - Create a private method `prepareOut()` to handle the `if(out.empty())` block to eliminate duplication.
    - Consider marking methods as `const` where applicable (though not strictly necessary for this specific competitive programming context).

---

# Question Revision

#

## Implement Queue using Stacks

**Pattern:** Double Stack / Amortized Analysis

**Brute Force:** 
Transfer all elements from `stack1` to `stack2` to access the bottom element for every `pop`/`peek` operation, then move them back. 
- **Time:** $O(n)$ per operation.

**Optimal Approach:**
Maintain two stacks: `inStack` (for `push`) and `outStack` (for `pop`/`peek`). Only transfer elements from `inStack` to `outStack` when `outStack` is empty. This preserves the relative FIFO order for all subsequent operations until the buffer is exhausted.
- **Time:** $O(1)$ for `push`; Amortized $O(1)$ for `pop`/`peek`.
- **Space:** $O(n)$

**The 'Aha' Moment:**
Reversing a LIFO sequence twice (pushing from one stack to another) restores the original FIFO order.

**Summary:** 
Use two stacks to reverse the order of elements, transferring only when the output stack is empty to achieve amortized constant time.

---
