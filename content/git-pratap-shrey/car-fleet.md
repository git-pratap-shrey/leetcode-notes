---
title: "Car Fleet"
slug: car-fleet
date: "2026-09-29"
---

# My Solution
~~~cpp
class Solution {
public:
    bool canTransform(vector<int>& source, vector<int>& target) {
        long long int sumS = 0, sumT = 0;;
        for(int i = 0; i < source.size(); i++){
            sumS += source[i];
            sumT += target[i];
        }

        return(sumS == sumT);
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Simple Summation. The code checks if the sum of elements in `source` equals the sum of elements in `target`.
- **Optimality**: **Incorrect**. The problem "Car Fleet" (or "Transform Array") cannot be solved by simply comparing sums. This approach ignores the relative positions, constraints on transformations, and the specific rules of the problem. It will produce a high number of False Positives.

## Complexity
- **Time Complexity**: $O(n)$, where $n$ is the size of the input arrays.
- **Space Complexity**: $O(1)$.

## Efficiency Feedback
- While the runtime and memory usage are minimal, the solution is logically flawed. Efficiency is irrelevant when the algorithm does not solve the problem.

## Code Quality
- **Readability**: Poor. The logic is too simplistic to be correct for the problem described.
- **Structure**: Moderate. Basic loop structure is fine, but there is a double semicolon (`;;`) on the `sumS`, `sumT` declaration line.
- **Naming**: Good. Variable names `sumS` and `sumT` clearly indicate their purpose.
- **Concrete Improvements**: 
    - Remove the double semicolon.
    - The logic must be entirely rewritten to account for the actual rules of the problem (likely involving stacks or sorting for Car Fleet, or relative order/sum constraints for Transform Array).
    - Note: The function name `canTransform` suggests the code was intended for a different problem ("Transform Array") rather than "Car Fleet", yet it is still logically insufficient for either.

---

# Question Revision
# Revision Report: Car Fleet

- **Pattern**: Monotonic Stack / Sorting
- **Brute Force**: Simulate the movement of every car second-by-second using a loop. Check for collisions at every time step. This is inefficient due to floating-point precision and potentially infinite loops if cars never meet.
- **Optimal Approach**: 
    - Sort cars by their starting position in descending order (closest to target first).
    - Calculate the time each car needs to reach the target: $\text{time} = \frac{\text{target} - \text{position}}{\text{speed}}$.
    - Use a stack to keep track of fleet times. If the current car's time is $\le$ the time of the car in front of it (the fleet lead), it will merge into that fleet. If its time is greater, it starts a new fleet.
    - **Time Complexity**: $O(n \log n)$ due to sorting.
    - **Space Complexity**: $O(n)$ to store the stack/sorted pairs.
- **The 'Aha' Moment**: Realizing that if a trailing car takes less or equal time to finish than the car ahead, it *must* collide and be limited by the leader's speed.
- **Summary**: Sort cars by position descending and use a stack to merge any car that arrives faster than the fleet lead in front of it.

---