---
title: "Implement Stack using Queues"
slug: implement-stack-using-queues
date: "2026-04-12"

---
---

# My Solution
~~~cpp
class MyStack {
public:
    queue<int> q;
    MyStack() {}
    
    void push(int x) {
        q.push(x);

        for(int i=1;i<q.size();i++){
            q.push(q.front());
            q.pop();

        }


        
    }
    
    int pop() {
        int val =q.front();
        q.pop();
        return val;
        
    }
    
    int top() {
        return q.front();
        
    }
    
    bool empty() {
        return q.empty();
        
    }
};

/**
 * Your MyStack object will be instantiated and called as such:
 * MyStack* obj = new MyStack();
 * obj->push(x);
 * int param_2 = obj->pop();
 * int param_3 = obj->top();
 * bool param_4 = obj->empty();
 */
~~~

# Submission Review
## Approach
*   **Technique:** Using a single queue to simulate a stack by rotating elements during insertion.
*   **Optimality:** Optimal for a single-queue implementation. By pushing the new element and rotating the previous $N-1$ elements to the back, the queue maintains the last-in-first-out (LIFO) property at the front of the queue.

## Complexity
*   **Time Complexity:** 
    *   `push()`: $O(N)$, where $N$ is the number of elements, due to the loop performing $N-1$ rotations.
    *   `pop()`, `top()`, `empty()`: $O(1)$.
*   **Space Complexity:** $O(N)$ to store the elements in the queue.

## Efficiency Feedback
*   The logic is efficient for a single-queue constraint. The overhead is strictly limited to the `push` operation, which is the standard trade-off when using queues to mimic stacks without using two queues or auxiliary storage.
*   **Optimization:** No meaningful algorithmic improvements are possible without changing the underlying data structure (e.g., using two queues would simply shift the work to `pop()` or `push()` without reducing the aggregate complexity).

## Code Quality
*   **Readability:** Good. The logic is concise and easy to follow.
*   **Structure:** Good. The class interface correctly implements the required stack methods.
*   **Naming:** Good. `q` is a standard, recognizable name for a queue, though `data` or `container` might be slightly more descriptive.
*   **Improvements:**
    *   Mark the queue `q` as `private` to follow encapsulation best practices, as it is an implementation detail.
    *   The `MyStack()` constructor is empty and can be omitted unless explicitly required by style guides, as the default constructor suffices.
    *   The loop `for(int i=1; i<q.size(); i++)` is clear, but be aware that `q.size()` is called every iteration. While modern compilers usually optimize this, it is safer to cache the size if `q.size()` were an expensive operation.

---
---


# Question Revision
### Revision Report: Implement Stack using Queues

**Pattern:** Data Structure Transformation / Queue Simulation

**Brute Force:**
Use two queues. For `push`, add to `q1`. For `pop`, move all elements except the last one from `q1` to `q2`, dequeue the last element, then swap `q1` and `q2`.
*   **Time Complexity:** $O(n)$ for `pop`.
*   **Space Complexity:** $O(n)$.

**Optimal Approach:**
Use a single queue. For `push`, add the element to the queue and then rotate the queue by dequeuing and re-enqueuing the previous $n-1$ elements. This keeps the most recently added element at the front.
*   **Time Complexity:** $O(n)$ for `push`, $O(1)$ for `pop` and `top`.
*   **Space Complexity:** $O(n)$.

**The 'Aha' Moment:**
When a problem forces a LIFO (Stack) constraint on a FIFO (Queue) primitive, realizing that you can use rotation to reorder elements to the front is the key to minimizing storage overhead.

**Summary:**
To simulate a stack with a queue, push the new element and rotate the existing ones behind it to keep the most recent item at the front.

---
