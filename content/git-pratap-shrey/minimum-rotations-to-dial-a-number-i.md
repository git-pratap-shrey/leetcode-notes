---
title: "Minimum Rotations to Dial a Number I"
slug: minimum-rotations-to-dial-a-number-i
date: "2026-10-04"
---

# My Solution
~~~cpp
class Solution {
public:
    int minRotations(string s) {
        int curr = 0;
        int rotation = 0;
        
        for(char st : s){
            int step = st - '0';
            int distance = min(abs(curr - step), min(abs(curr + 10 - step), abs(curr - (step + 10))));
            // cout<<curr<<" "<<step<<" "<<distance<<endl;
            curr = step;
            rotation += distance;
        }

        return rotation;
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Greedy/Simulation. The code iterates through the string and calculates the shortest distance between the current digit and the next digit on a circular dial.
- **Optimality**: Optimal. The shortest distance on a circle of size $N$ is $\min(|a-b|, N - |a-b|)$.

## Complexity
- **Time Complexity**: $O(n)$, where $n$ is the length of the string $s$. The code performs a single pass.
- **Space Complexity**: $O(1)$. No auxiliary data structures proportional to input size are used.

## Efficiency Feedback
- **Performance**: The runtime and memory usage are minimal and optimal for this problem.
- **Observation**: The distance calculation `min(abs(curr - step), min(abs(curr + 10 - step), abs(curr - (step + 10))))` is mathematically correct but can be simplified to `min(abs(curr - step), 10 - abs(curr - step))`.

## Code Quality
- **Readability**: Good. The logic is straightforward.
- **Structure**: Good. The flow is linear and easy to follow.
- **Naming**: Moderate. `st` is a slightly misleading name for a character representing a digit (usually `c` or `digit` is preferred); `rotation` is appropriate.
- **Concrete Improvements**:
    - Remove the commented-out `cout` statement to clean up production code.
    - Simplify the `distance` calculation for better clarity.
    - Use `const string& s` in the function signature to avoid unnecessary string copying (though in LeetCode's current signature it is passed by value, the user should be aware of it).

---

# Question Revision
# Revision Report: Minimum Rotations to Dial a Number I

- **Pattern**: Pre-computation / Lookup Table (Hashing).
- **Brute Force**: For every digit in the target number, manually iterate through the rotary dial layout to find the distance from the current digit to the next.
- **Optimal Approach**: 
    - Create a fixed mapping (hash map or array) where each digit ($0-9$) is mapped to its distance from the starting position (the digit '1' is at index 0).
    - Sum the pre-computed distances for all digits in the input string.
    - **Time Complexity**: $O(n)$, where $n$ is the length of the phone number.
    - **Space Complexity**: $O(1)$, as the mapping size is constant (10 digits).
- **The 'Aha' Moment**: The cost to reach any digit is constant and independent of the previous digit's position, making it a simple summation of fixed weights.
- **Summary**: Use a pre-computed map to turn a "distance" problem into a simple array lookup and summation.

---