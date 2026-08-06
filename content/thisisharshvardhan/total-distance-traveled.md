---
title: "Total Distance Traveled"
slug: total-distance-traveled
date: "2026-07-31"
---

# My Solution
~~~

~~~

# Submission Review
Please provide the code you would like me to analyze. The **Language** and **Code** sections of your request are currently empty.

---

# Question Revision
### Total Distance Traveled

**Pattern**: Math / Arithmetic Series

**Brute Force**: Simulate every discrete time unit or step, maintaining a current position and velocity, and adding the distance moved in each step to a running total.
- **Time**: $O(n)$ where $n$ is the total time/steps.
- **Space**: $O(1)$.

**Optimal Approach**: Identify the movement as a series of arithmetic progressions (e.g., accelerating from $0$ to $v$ and decelerating back to $0$). Use the sum formula $S = \frac{n}{2}(a + l)$ to calculate the distance of each phase in constant time.
- **Time**: $O(1)$.
- **Space**: $O(1)$.

**The 'Aha' Moment**: Recognizing that the distance increments follow a predictable linear sequence (like $1, 2, 3, \dots, k$) transforms a simulation problem into a summation problem.

**Summary**: Replace iterative simulation with the arithmetic series formula to calculate total distance in constant time.

---