---
title: "Implement Stack using Queues"
slug: implement-stack-using-queues
date: "2026-04-13"

---
---

# My Solution
~~~java
class MyStack {
    private Queue<Integer> q;

    public MyStack() {
        q = new LinkedList<>();   
    }
    
    public void push(int x) {
        int n = q.size();
        q.add(x);
        for(int i=0;i<n;i++){
            q.add(q.poll());
        }
        
    }
    
    public int pop() {
        int s= q.peek();
        q.poll();
        return s;
    }
    
    public int top() {
        return q.peek();
        
    }
    
    public boolean empty() {
        return q.isEmpty();
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * MyStack obj = new MyStack();
 * obj.push(x);
 * int param_2 = obj.pop();
 * int param_3 = obj.top();
 * boolean param_4 = obj.empty();
 */
~~~

# Submission Review
## Approach
- **Technique:** Queue rotation (simulating LIFO using FIFO).
- **Optimality:** Optimal for a single-queue implementation. By rotating the queue after every `push`, the most recently added element is always at the front, satisfying LIFO requirements with $O(1)$ `pop` and `top` operations.

## Complexity
- **Time Complexity:** 
    - `push`: $O(n)$, where $n$ is the number of elements in the stack, due to the $n$ rotations.
    - `pop`, `top`, `empty`: $O(1)$.
- **Space Complexity:** $O(n)$ to store elements in the queue.

## Efficiency Feedback
- The efficiency is optimal for this specific approach. Since a standard `Queue` only allows access to the front, reordering elements during `push` is necessary to avoid $O(n)$ complexity in `pop`. 
- No meaningful optimizations are possible without changing the fundamental data structure requirements.

## Code Quality
- **Readability:** Good. The code is concise and logic is easy to follow.
- **Structure:** Good. Uses a standard constructor and minimal private state.
- **Naming:** Moderate. `q` is acceptable for a competitive programming context, but `queue` would be more descriptive. `s` in `pop` could be renamed to `topElement`.
- **Concrete Improvements:**
    - Add `private` access modifiers to `push`, `pop`, etc., if they are not intended to be accessed outside the class (though they are public by requirements).
    - Consider adding basic Javadoc or comments explaining the "push-to-front" logic for future maintainability.
    - The `pop` method could be simplified to `return q.poll();` instead of using `peek()` followed by `poll()`.

---
---


# Question Revision
### Revision Report: Implement Stack using Queues

**Pattern:** Data Structure Transformation / Queue Simulation

**Brute Force:**
Use two queues: `q1` for data and `q2` for temporary storage. To `push`, enqueue into `q2`, dequeue all elements from `q1` to `q2`, then swap names. This ensures the last element pushed is always at the front of the queue.
*   **Time:** $O(n)$ per push.
*   **Space:** $O(n)$.

**Optimal Approach:**
Use one queue. For every `push(x)` operation, enqueue `x` and then rotate the queue by dequeuing and re-enqueuing the first $n-1$ elements. This keeps the most recently added element at the front, mimicking LIFO behavior.
*   **Push:** $O(n)$
*   **Pop/Top/Empty:** $O(1)$
*   **Space:** $O(n)$

**The 'Aha' Moment:**
When a problem forces a LIFO (Stack) constraint on a FIFO (Queue) primitive, you must manually rotate the data structure during insertion to effectively "reverse" the order of the underlying storage.

**Summary:**
To force a FIFO structure to act like a LIFO stack, rotate the queue elements after every insertion so the newest element is always at the front.

---
