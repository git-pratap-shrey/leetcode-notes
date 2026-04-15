---
title: "Asteroid Collision"
slug: asteroid-collision
date: "2026-04-14"
---

# My Solution
~~~

~~~

# Submission Review
No code was provided for analysis. Please provide the source code you would like me to review.

---

# Question Revision
### Asteroid Collision

**Pattern:** Stack

**Brute Force:** Repeatedly scan the array for any pair of adjacent asteroids moving toward each other (positive followed by negative), resolve the collision by removing the smaller one, and repeat until no such pairs exist. Time: $O(n^2)$.

**Optimal Approach:** 
Iterate through the asteroids. Push all right-moving asteroids (`> 0`) onto the stack. When a left-moving asteroid (`< 0`) appears, it triggers a collision sequence: pop the stack and compare magnitudes until the left-moving asteroid is destroyed, the stack is empty, or the top of the stack is also moving left.
- **Time Complexity:** $O(n)$ (each asteroid is pushed and popped at most once).
- **Space Complexity:** $O(n)$ (to store the resulting asteroids).

**The 'Aha' Moment:** The "last-in, first-out" nature of collisions reveals that a left-moving asteroid always interacts with the most recently encountered right-moving asteroid first.

**Summary:** Use a stack to buffer right-moving asteroids and resolve them against incoming left-moving asteroids.

---