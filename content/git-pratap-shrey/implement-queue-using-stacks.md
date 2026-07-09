--- title: "Implement Queue using Stacks" slug: implement-queue-using-stacks date: "2026-06-25" ---  # My Solution ~~~class MyQueue {
private:
        stack<int> helperStack;
        stack<int> fifoStack;
public:
    MyQueue() {

    }
    
    void push(int x) {
        helperStack.push(x);
    }
    
    int pop() {
        while(!helperStack.empty()){
            fifoStack.push(helperStack.top());
            helperStack.pop();
        }
        int answer = fifoStack.top();

        fifoStack.pop();

        while(!fifoStack.empty()){
            helperStack.push(fifoStack.top());
            fifoStack.pop();
        }

        return answer;
    }
    
    int peek() {
        while(!helperStack.empty()){
            fifoStack.push(helperStack.top());
            helperStack.pop();
        }
        int answer = fifoStack.top();

        while(!fifoStack.empty()){
            helperStack.push(fifoStack.top());
            fifoStack.pop();
        }

        return answer; 
    }
    
    bool empty() {
        return helperStack.empty();
    }
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * MyQueue* obj = new MyQueue();
 * obj->push(x);
 * int param_2 = obj->pop();
 * int param_3 = obj->peek();
 * bool param_4 = obj->empty();
 */ - cpp~~~  # Submission Review ## Approach
- **Technique**: Two-stack simulation.
- **Optimality**: **Suboptimal**. The implementation performs a full transfer of elements from `helperStack` to `fifoStack` and back again for every `pop()` and `peek()` operation. An optimal approach would maintain the elements in `fifoStack` until it is empty, achieving amortized $O(1)$ time complexity.

## Complexity
- **Time Complexity**: 
    - `push()`: $O(1)$
    - `pop()`: $O(N)$
    - `peek()`: $O(N)$
    - `empty()`: $O(1)$
- **Space Complexity**: $O(N)$ to store the elements.
- **Bottleneck**: The redundant double-transfer of all elements between stacks during `pop()` and `peek()` operations.

## Efficiency Feedback
- **High Runtime**: Moving all elements back to `helperStack` after every retrieval is unnecessary. 
- **Optimization**: To optimize, only transfer elements from `helperStack` to `fifoStack` when `fifoStack` is empty. Leave them in `fifoStack` for subsequent `pop` or `peek` calls. This reduces the amortized cost of these operations to $O(1)$.

## Code Quality
- **Readability**: Good. The logic is straightforward and easy to follow.
- **Structure**: Good. Follows the expected class interface.
- **Naming**: Good. `helperStack` and `fifoStack` clearly communicate their roles.
- **Concrete Improvements**:
    - Remove the second `while` loop in `pop()` and `peek()` that moves elements back to `helperStack`.
    - Update `empty()` to check if **both** stacks are empty: `return helperStack.empty() && fifoStack.empty();`.  ---  # Question Revision ### Revision Report: Implement Queue using Stacks

**Pattern:** Data Structure Design / Amortized Analysis

**Brute Force:** Move all elements from the primary stack to a temporary stack for every `pop` or `peek` operation, then move them back to maintain the stack for the next `push`.
- **Time:** $O(n)$ per `pop`/`peek`

**Optimal Approach:** Use two stacks: `inStack` for all `push` operations and `outStack` for `pop`/`peek` operations. Elements are transferred from `inStack` to `outStack` **only** when `outStack` is empty.
- **Time:** `push`: $O(1)$, `pop`/`peek`: Amortized $O(1)$
- **Space:** $O(n)$

**The 'Aha' Moment:** Two reversals (LIFO $\rightarrow$ LIFO) result in the original order (FIFO).

**Summary:** Use two stacks to flip element order, transferring only when the output stack is empty to maintain amortized constant time.  ---