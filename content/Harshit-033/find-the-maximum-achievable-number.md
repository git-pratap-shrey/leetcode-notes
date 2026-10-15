---
title: "Find the Maximum Achievable Number"
slug: find-the-maximum-achievable-number
date: "2026-10-15"
---

# My Solution
~~~cpp
class Solution {
public:
    int theMaximumAchievableX(int num, int t) {
        return num+(2*t);
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Mathematical formula (Direct calculation).
- **Optimality**: Optimal. The problem asks for the maximum $x$ such that we can reach $num$ from $x$ using $t$ operations. Since each operation can either increase or decrease the value by 1, the furthest distance we can cover in $t$ steps to move "down" toward $num$ is $2t$ (by increasing $x$ and decreasing $num$ or vice-versa). The formula $num + 2t$ directly computes this limit.

## Complexity
- **Time Complexity**: $O(1)$ — A single arithmetic operation is performed.
- **Space Complexity**: $O(1)$ — No additional memory is allocated.

## Efficiency Feedback
- The solution is perfectly efficient. There are no bottlenecks as it performs the minimum number of operations required to solve the problem.

## Code Quality
- **Readability**: Good. The logic is a single, clear line.
- **Structure**: Good. Follows standard LeetCode-style class structure.
- **Naming**: Good. Uses the provided method signature and parameters.
- **Improvements**: No improvements needed for this specific logic.

---

# Question Revision
# Revision Report: Find the Maximum Achievable Number

- **Pattern:** Mathematical Manipulation / Algebra.
- **Brute Force:** Simulating the process of increasing/decreasing numbers step-by-step until the condition is met.
- **Optimal Approach:** 
    - **Logic:** The problem asks for a number $y$ such that after applying the operation $n$ times, we can make $x$ equal to $y$. Each operation allows us to move the value by $1$. To maximize the reachable number, we assume we always increase $x$ and decrease $y$. The equilibrium point is $x + n = y - n$. Solving for $y$, we get $y = x + 2n$.
    - **Time Complexity:** $O(1)$
    - **Space Complexity:** $O(1)$
- **The 'Aha' Moment:** The requirement to find a "maximum" value based on a fixed number of symmetric operations suggests a direct algebraic relationship rather than a search algorithm.
- **Summary:** The maximum achievable number is simply the starting value plus twice the number of operations ($x + 2n$).

---