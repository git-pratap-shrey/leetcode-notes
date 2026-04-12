---
title: "Implement Queue using Stacks"
slug: implement-queue-using-stacks
date: "2026-04-12"

---
---

# My Solution
~~~cpp
class MyQueue {
public:
    stack<int> s;
    stack<int> r;
    MyQueue() {
        
    }
    
    void push(int x) {
        s.push(x);
        
        
                
    }
    
    int pop() {
        if(r.empty()){
            while(!s.empty()){
                r.push(s.top());
                s.pop();
            }
        }

        int val=r.top();
        r.pop();
        return val;
        
        
    }
    
    int peek() {
        if(r.empty()){
            while(!s.empty()){
                r.push(s.top());
                s.pop();
            }
        }
        int val=r.top();
        
        return val;
        
    }
    
    bool empty() {
        if(r.empty()){
            while(!s.empty()){
                r.push(s.top());
                s.pop();
            }
        }
        return r.empty();
        
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
*   **Technique:** Two-stack queue simulation.
*   **Optimal:** Yes. This is the standard amortized $O(1)$ approach for implementing a queue using two stacks.

## Complexity
*   **Time Complexity:** 
    *   `push`: $O(1)$
    *   `pop`, `peek`, `empty`: Amortized $O(1)$. While a single operation might take $O(n)$ if the second stack is empty, each element is pushed and popped from each stack exactly once.
*   **Space Complexity:** $O(n)$ where $n$ is the number of elements in the queue.

## Efficiency Feedback
*   **Redundancy:** The `empty()` method re-implements the logic to transfer elements from `s` to `r`. This is unnecessary and inefficient. `empty()` should simply return `s.empty() && r.empty()`.
*   **Code Duplication:** The logic to transfer elements between stacks is identical in `pop`, `peek`, and `empty`. This violates the DRY (Don't Repeat Yourself) principle.

## Code Quality
*   **Readability:** Moderate. The code is simple, but the logic repetition harms maintainability.
*   **Structure:** Moderate. The repeated transfer logic should be abstracted into a private helper method (e.g., `void transferIfNeeded()`).
*   **Naming:** Good. `s` and `r` are standard, though `inputStack` and `outputStack` would be more descriptive.
*   **Concrete Improvements:**
    1.  Create a private method `shiftStacks()` to handle the `while(!s.empty())` loop.
    2.  Simplify `empty()`: `return s.empty() && r.empty();`.
    3.  Make stacks `private` to follow encapsulation best practices.
    4.  Remove unnecessary whitespace and empty lines.

---
---


# Question Revision
### Revision Report: Implement Queue using Stacks

**Pattern:** Stack-based Queue (Amortized Analysis)

**Brute Force:**
Use two stacks. To `enqueue`, push onto Stack A. To `dequeue`, transfer all elements from Stack A to Stack B, pop the top, then transfer everything back to Stack A. 
*   **Time:** $O(n)$ per `dequeue`.
*   **Space:** $O(n)$ to store elements.

**Optimal Approach:**
Use two stacks: `input` and `output`. Push all new elements onto `input`. When `dequeue` is called, check if `output` is empty. If it is, pop everything from `input` into `output` (reversing the order). If `output` is not empty, simply pop from it.
*   **Time:** $O(1)$ amortized for both `enqueue` and `dequeue`.
*   **Space:** $O(n)$ to store elements.

**The 'Aha' Moment:**
Realizing that the "last-in" elements in the `input` stack are exactly the "first-out" elements once the entire stack is reversed into an `output` stack.

**Summary:**
Use two stacks to simulate a queue by treating one as the "inbox" and the other as a "reversed-outbox" that only requires refilling when empty.

---
