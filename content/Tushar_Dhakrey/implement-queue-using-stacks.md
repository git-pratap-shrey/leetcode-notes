---
title: "Implement Queue using Stacks"
slug: implement-queue-using-stacks
date: "2026-04-12"

---
---

# My Solution
~~~java
class MyQueue {
    private Stack<Integer> first;
    private Stack<Integer> second;

    public MyQueue() {
        first = new Stack<>();
        second = new Stack<>();
    }
    
    public void push(int x) {
        first.push(x);
    }
    
    public int pop() {
        while(!first.isEmpty()){
            second.push(first.pop());
        }
        int removed = second.pop();
        while(!second.isEmpty()){
            first.push(second.pop());
        }
        return removed;
    }
    
    public int peek() {
        while(!first.isEmpty()){
            second.push(first.pop());
        }
        int peeked = second.peek();
        while(!second.isEmpty()){
            first.push(second.pop());
        }
        return peeked;
    }
    
    public boolean empty() {
        return first.isEmpty();
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * MyQueue obj = new MyQueue();
 * obj.push(x);
 * int param_2 = obj.pop();
 * int param_3 = obj.peek();
 * boolean param_4 = obj.empty();
 */
~~~

# Submission Review
## Approach
* **Technique:** Two-stack simulation of a queue.
* **Optimality:** Suboptimal. The current implementation performs a full data transfer between stacks for every `pop()` and `peek()` operation. An optimal approach would amortize the transfer cost, keeping items in the "output" stack until it is exhausted.

## Complexity
* **Time Complexity:** 
    * `push`: $O(1)$
    * `pop`/`peek`: $O(N)$, where $N$ is the number of elements in the queue.
* **Space Complexity:** $O(N)$ to store elements.

## Efficiency Feedback
* **Bottleneck:** Every `pop` and `peek` triggers two $O(N)$ stack passes (moving everything to `second` and back to `first`). 
* **Optimization:** Keep the elements in `second` after a move. Only move elements from `first` to `second` when `second` is empty. This results in an **amortized $O(1)$** complexity for both `pop` and `peek`.

## Code Quality
* **Readability:** Good. The logic is straightforward and easy to follow.
* **Structure:** Moderate. While functional, the repeated logic for moving elements between stacks in `pop()` and `peek()` violates the DRY (Don't Repeat Yourself) principle.
* **Naming:** Good. The class and method names adhere to standard conventions and problem requirements.
* **Concrete Improvements:**
    * **Refactor:** Create a private helper method (e.g., `shiftStacks()`) to handle moving elements from `first` to `second` to eliminate code duplication.
    * **Use Deque:** In Java, `Stack` is considered a legacy class (it extends `Vector`, which is synchronized). Using `ArrayDeque` as a stack is faster and preferred in competitive programming.
    * **Optimization:** Update the `pop`/`peek` logic to check if `second` is empty before performing the transfer, maintaining the state between calls.

---
---


# Question Revision
### Revision Report: Implement Queue using Stacks

**Pattern:** Data Structure Transformation (Adapter Pattern)

**Brute Force:** 
Maintain two stacks; for every `pop` or `peek` operation, move all elements from the input stack to an output stack to reverse their order, then move them back.
*   **Time Complexity:** $O(n)$ per `pop`/`peek`.
*   **Space Complexity:** $O(n)$.

**Optimal Approach:** 
Use two stacks: `input` (for `push`) and `output` (for `pop`/`peek`). Only transfer elements from `input` to `output` when `output` is empty. This "lazy" transfer results in an amortized cost per operation.
*   **Time Complexity:** Amortized $O(1)$ per operation.
*   **Space Complexity:** $O(n)$.

**The 'Aha' Moment:** 
Recognize that a stack reverses the order of elements, so applying a second stack to that reversed sequence restores the original First-In-First-Out (FIFO) order required by a queue.

**Summary:** 
Use two stacks to simulate a queue by treating one as the "inbox" and the other as the "reversed-buffer" for delayed processing.

---
