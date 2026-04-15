---
title: "Asteroid Collision"
slug: asteroid-collision
date: "2026-04-14"
---

# My Solution
~~~java
class Solution {
    public int[] asteroidCollision(int[] asteroids) {
        List<Integer> st = new ArrayList<>();
        int n = asteroids.length;
        for(int i=0;i<n;i++){
            if(asteroids[i]>0){
                st.add(asteroids[i]);
            }
            else{
                while(!st.isEmpty() && st.get(st.size()-1)<Math.abs(asteroids[i]) && st.get(st.size()-1)>0){
                    st.remove(st.size()-1);
                }
                if(!st.isEmpty() && st.get(st.size()-1)==Math.abs(asteroids[i])){
                    st.remove(st.size()-1);
                }
                else if(st.isEmpty() || st.get(st.size()-1)<0){
                    st.add(asteroids[i]);
                }
            }
        }
        int res[] = new int[st.size()];
        for(int i=0;i<st.size();i++){
            res[i] = st.get(i);
        }
        return res;
    }
}
~~~

# Submission Review
## Approach
- **Technique**: Stack-based simulation. 
- **Optimality**: Optimal. The problem requires processing collisions in a Last-In-First-Out (LIFO) manner, and each asteroid is pushed and popped at most once.

## Complexity
- **Time Complexity**: $O(n)$ where $n$ is the number of asteroids.
- **Space Complexity**: $O(n)$ to store the resulting asteroids in the list/stack.

## Efficiency Feedback
- **Runtime**: The solution is efficient. Using an `ArrayList` as a stack is acceptable here as `remove(size - 1)` is an $O(1)$ operation.
- **Memory**: Memory usage is minimal and proportional to the input size.
- **Optimization**: Replacing `ArrayList` with `ArrayDeque` would be more idiomatic for stack operations in Java, although it wouldn't change the asymptotic complexity.

## Code Quality
- **Readability**: Moderate. The logic is concise, but the use of `Math.abs()` and nested conditionals requires careful reading to track the state of the current asteroid.
- **Structure**: Good. The flow from processing $\rightarrow$ filtering $\rightarrow$ conversion to array is logical.
- **Naming**: Moderate. `st` (stack) and `res` (result) are overly abbreviated. `stack` and `result` would be clearer.
- **Concrete Improvements**:
    - Use `ArrayDeque` for better semantic clarity when implementing a stack.
    - Explicitly handle the "destruction" of the current negative asteroid for better readability (e.g., using a boolean flag `destroyed`) rather than relying on the `if/else if` fall-through logic.

---

# Question Revision
### Asteroid Collision

**Pattern:** Stack

**Brute Force:** 
Repeatedly scan the array for adjacent pairs where the left asteroid moves right (`+`) and the right asteroid moves left (`-`). Resolve the collision, update the array, and repeat until no such pairs remain.

**Optimal Approach:** 
Iterate through the asteroids. Push asteroids moving right (`+`) onto a stack. When a left-moving asteroid (`-`) is encountered, repeatedly pop from the stack (resolve collisions) as long as the stack top is a right-moving asteroid smaller than the current one. Handle cases for equal size (both explode) or if the left-moving asteroid is destroyed.
- **Time Complexity:** $O(n)$
- **Space Complexity:** $O(n)$

**The 'Aha' Moment:** 
Collisions only occur when a left-moving asteroid encounters the *most recently* processed right-moving asteroid, signaling a LIFO (Last-In, First-Out) structure.

**Summary:** 
Use a stack to store right-moving asteroids and pop them to resolve collisions when a left-moving asteroid appears.

---