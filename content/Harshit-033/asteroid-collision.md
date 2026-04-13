---
title: "Asteroid Collision"
slug: asteroid-collision
date: "2026-04-13"

---
---

# My Solution
~~~cpp
class Solution {
public:
    vector<int> asteroidCollision(vector<int>& asteroids) {
        stack<int> s;

        for(int i=asteroids.size()-1;i>=0;i--){
            if(s.empty()){
                s.push(asteroids[i]);
                continue;
            }
            if(s.top()<0 && asteroids[i]>0){
                while(!s.empty() && s.top()<0 && s.top()>(-asteroids[i])){
                    s.pop();
                }
                if(!s.empty() && s.top()<0 && s.top()<(-asteroids[i])){
                    continue;
                }
                else if(!s.empty() && s.top()<0 && s.top()==(-asteroids[i])){
                    s.pop();
                }
                else{
                    s.push(asteroids[i]);
                }
            }
            else{
                s.push(asteroids[i]);
            }            
        }


        vector<int> ans;

        while(!s.empty()){
            ans.push_back(s.top());
            s.pop();

        }
        return ans;
        
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Stack-based simulation.
*   **Correctness:** The logic is **flawed**. Processing the array from right-to-left (`i = size - 1` down to `0`) and using a stack to store results effectively reverses the simulation logic. Collisions only occur when a positive asteroid is to the left of a negative one; the current implementation attempts to resolve collisions in reverse, leading to incorrect state management for complex sequences (e.g., `[10, 2, -5]`).

## Complexity
*   **Time Complexity:** $O(N)$ amortized. Each asteroid is pushed and popped at most once.
*   **Space Complexity:** $O(N)$ to store the stack.

## Efficiency Feedback
*   The logic inside the `while` loop is overly convoluted. By choosing to traverse backward, you forced the stack to act as a buffer for future potential collisions, but the conditional checks (`s.top() < 0`) do not correctly account for the interaction between the current asteroid and the stack in a right-to-left flow.
*   **Optimization:** Standard approach for this problem is to traverse left-to-right. A positive asteroid is pushed onto the stack, and when a negative one appears, it is compared against the stack top until destroyed or the stack is empty/top is positive.

## Code Quality
*   **Readability:** **Poor**. The nested `if-else` blocks and `while` loop logic are difficult to trace.
*   **Structure:** **Poor**. The right-to-left traversal makes the collision conditions counter-intuitive.
*   **Naming:** **Good**. Variables like `s` and `ans` are standard, though `s` could be `st`.

## Concrete Improvements
1.  **Change traversal direction:** Iterate from `i = 0` to `n-1`.
2.  **Simplify logic:**
    ```cpp
    for (int x : asteroids) {
        bool alive = true;
        while (alive && x < 0 && !s.empty() && s.top() > 0) {
            if (s.top() < -x) { s.pop(); continue; }
            else if (s.top() == -x) { s.pop(); alive = false; }
            else { alive = false; }
        }
        if (alive) s.push(x);
    }
    ```
3.  **Return result:** Instead of popping from the stack into `ans` (which reverses it), use `vector<int>` as a stack or build the result array and reverse it once.

---
---


# Question Revision
### Revision Report: Asteroid Collision

**Pattern:** Stack

**Brute Force:**
Iteratively simulate collisions by comparing adjacent asteroids and removing the smaller one until no more collisions occur. In the worst case (e.g., `[-1, -2, -3, 4, 5, 6]`), you re-scan the array multiple times, resulting in $O(n^2)$ time complexity.

**Optimal Approach:**
Use a **Stack** to process asteroids linearly. 
1. If the current asteroid is moving right (`> 0`) or the stack is empty/top is moving left (`< 0`), push it.
2. If the current asteroid is moving left (`< 0`) and the top of the stack is moving right (`> 0`), resolve collisions:
   - Pop if the stack top is smaller.
   - Stop if the stack top is equal (both destroyed).
   - Skip if the stack top is larger.
- **Time Complexity:** $O(n)$ (each asteroid is pushed/popped at most once).
- **Space Complexity:** $O(n)$ (for the stack).

**The 'Aha' Moment:**
When a process involves "last-in" elements being destroyed by a new incoming element, it signals that the most recently seen (but not yet destroyed) elements must be kept in LIFO order.

**Summary:** 
Use a stack for collision problems where the current element interacts with the most recent survivors, effectively "canceling out" the past.

---
