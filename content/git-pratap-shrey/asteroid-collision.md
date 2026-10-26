---
title: "Asteroid Collision"
slug: asteroid-collision
date: "2026-10-23"
---

# My Solution
~~~cpp
class MinStack {
private:
    stack<int> normal;
    stack<int> minimum;
public:
    MinStack() {
        
    }
    
    void push(int val) {
        normal.push(val);
        if(!minimum.empty()){
            // if(minimum.top() >= val){
            minimum.push(min(val, minimum.top()));
            // }
        }
        else{
            minimum.push(val);
        }
    }
    
    void pop() {
        // if(normal.top() == minimum.top()){
            minimum.pop();
        // }
        normal.pop();
    }
    
    int top() {
        return normal.top();
    }
    
    int getMin() {
        return minimum.top();
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
- **Technique**: Auxiliary Stack. The solution uses two stacks: one to store all elements and another to track the minimum element at each state of the primary stack.
- **Correctness**: **Incorrect**. The problem requested was **"Asteroid Collision"**, but the provided code implements a **"MinStack"**. The code does not address the asteroid collision logic at all.

## Complexity
- **Time Complexity**: $O(1)$ per operation (`push`, `pop`, `top`, `getMin`).
- **Space Complexity**: $O(n)$ where $n$ is the number of elements pushed, as two stacks are maintained.

## Efficiency Feedback
- The logic for the `MinStack` implementation is optimal for its specific task.
- **Memory**: Memory usage is doubled due to the `minimum` stack. This can be optimized by storing pairs in a single stack or using a mathematical formula to store the min, though the current approach is standard.

## Code Quality
- **Readability**: Moderate. There are commented-out lines of code (`// if(minimum.top() >= val){` and `// if(normal.top() == minimum.top()){`) which clutter the implementation.
- **Structure**: Good. It follows the class-based structure required for this specific LeetCode-style problem.
- **Naming**: Good. Variable names `normal` and `minimum` are descriptive.
- **Improvements**: 
    - Remove dead/commented code.
    - The code completely fails the prompt's problem requirement ("Asteroid Collision").

---

# Question Revision
# Revision Report: Asteroid Collision

- **Pattern**: Stack (LIFO)
- **Brute Force**: Repeatedly scan the array for any two adjacent asteroids moving toward each other (`+` followed by `-`), resolve the collision by removing the smaller or both, and restart the scan from the beginning until no collisions remain.
- **Optimal Approach**: 
    - Iterate through the asteroids one by one. 
    - Push asteroids moving right (`+`) onto the stack. 
    - When an asteroid moves left (`-`), check the stack: if the top is moving right, they collide. Resolve the collision by popping the stack (if the right-moving asteroid is smaller) or discarding the current asteroid (if the left-moving one is smaller). 
    - If the stack is empty or contains only left-moving asteroids, the current left-moving asteroid is safe; push it onto the stack.
    - **Time Complexity**: $O(n)$ — Each asteroid is pushed and popped at most once.
    - **Space Complexity**: $O(n)$ — To store the resulting asteroids in the stack.
- **The 'Aha' Moment**: The "last-in, first-out" nature of collisions—where the most recently added right-moving asteroid is the first one to collide with a new left-moving asteroid—signals a Stack.
- **Summary**: Use a stack to track right-moving asteroids and resolve collisions immediately when a left-moving asteroid appears.

---