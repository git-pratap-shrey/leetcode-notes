---
title: "Asteroid Collision"
slug: asteroid-collision
date: "2026-10-28"
---

# My Solution
~~~cpp
class Solution {
public:
    vector<int> asteroidCollision(vector<int>& asteroids) {
        int n=asteroids.size();
        stack<int>s;
        vector<int>ans;
        for(int i=0;i<n;i++){
            if(s.empty()){
                s.push(asteroids[i]);
            }
            else{
                if(s.top()>0 && asteroids[i]<0){
                    bool destroy=false;
                    while(!s.empty() && s.top()>0 && abs(asteroids[i])>abs(s.top())){
                        s.pop();
                    }
                    if(!s.empty() && s.top()>0 && abs(asteroids[i])==abs(s.top())){
                        s.pop();
                        destroy=true;
                    }
                     else if(!s.empty() && s.top() > 0 && abs(asteroids[i]) < abs(s.top())){
                        destroy = true;
                    }
                    if(!destroy && (s.empty()||s.top()<0 )){
                        s.push(asteroids[i]);
                    }
                }
                else{
                    s.push(asteroids[i]);
                }
            }
        }
        int z=s.size();
        for(int i=0;i<z;i++){
            ans.push_back(s.top());
            s.pop();
        }
        reverse(ans.begin(),ans.end());
        return ans;
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Stack-based simulation.
- **Optimality**: Optimal. The problem requires processing elements sequentially and resolving collisions based on the most recent stable asteroid, which is a classic application for a stack.

## Complexity
- **Time Complexity**: $O(n)$. Each asteroid is pushed onto and popped from the stack at most once.
- **Space Complexity**: $O(n)$ to store the stack and the final result vector.

## Efficiency Feedback
- **Runtime**: The logic is efficient. However, the final step of popping from the stack into a vector and then reversing it adds a small constant overhead.
- **Optimization**: Using a `std::vector` as a stack (using `push_back` and `pop_back`) would eliminate the need for the final `reverse()` operation and the extra stack-to-vector copy, as the vector can be returned directly.

## Code Quality
- **Readability**: Moderate. The nested `if-else` and `while` logic inside the collision handling is slightly verbose, making the flow harder to follow at a glance.
- **Structure**: Good. The logic correctly separates the "collision" case (`s.top() > 0 && asteroids[i] < 0`) from the "no collision" cases.
- **Naming**: Moderate. `s` for stack and `ans` for answer are common in competitive programming but less descriptive than `asteroidStack` or `result`. Variable `z` is generic.
- **Concrete Improvements**:
    - Replace `abs(asteroids[i]) > abs(s.top())` with `-asteroids[i] > s.top()` for clarity, as the signs are already checked.
    - Use `std::vector` instead of `std::stack` to avoid the `reverse()` step.
    - Consolidate the `destroy` logic to reduce nested conditionals.

---

# Question Revision
# Revision Report: Asteroid Collision

- **Pattern:** Stack
- **Brute Force:** Repeatedly scan the array to find the first pair of colliding asteroids (one moving right `+`, one moving left `-`), resolve the collision by removing the smaller/both, and repeat until no collisions are possible. This would result in an inefficient $O(n^2)$ time complexity.
- **Optimal Approach:** 
    - Use a **Stack** to keep track of asteroids moving to the right.
    - Iterate through the asteroids:
        - If an asteroid is moving right (`> 0`), push it onto the stack.
        - If an asteroid is moving left (`< 0`), check for collisions with the top of the stack. 
        - While the stack top is positive and smaller than the absolute value of the current left-moving asteroid, pop the stack (destroy the right-moving one).
        - If the stack top is equal in size, pop it and destroy the current asteroid.
        - If the stack is empty or the top is moving left, the current asteroid survives and is pushed.
    - **Complexity:** 
        - Time: $O(n)$ — Each asteroid is pushed and popped from the stack at most once.
        - Space: $O(n)$ — To store the resulting asteroids in the stack.
- **The 'Aha' Moment:** The collision depends on the *most recent* asteroid moving in the opposite direction, which is a classic "Last-In, First-Out" (LIFO) signal.
- **Summary:** Use a stack to buffer right-moving asteroids and resolve collisions only when a left-moving asteroid appears.

---