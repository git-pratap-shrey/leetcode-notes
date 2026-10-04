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
        int z=0;
        int ans=0;
        for(int i=0;i<s.size();i++){
            int a=s[i]-'0';
            int p=min(10-a,a)+min(10-z,z);
            ans+=min(p,abs(z-a));
            z=a;
        }
        return ans;
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Greedy / Simulation. The code calculates the shortest distance between the current digit (`z`) and the target digit (`a`) on a circular dial.
- **Optimality**: Optimal. It correctly considers both directions (clockwise and counter-clockwise) to find the minimum distance for each transition.

## Complexity
- **Time Complexity**: $O(n)$, where $n$ is the length of the string $s$. The code iterates through the string exactly once.
- **Space Complexity**: $O(1)$. Only a few integer variables are used regardless of input size.

## Efficiency Feedback
- The runtime and memory are optimal. 
- The logic `min(10-a, a) + min(10-z, z)` is a slightly unconventional way to represent the distance through the 0-point, but it functions correctly for this specific problem.

## Code Quality
- **Readability**: Moderate. The logic for calculating the circular distance is compact but lacks clarity. Using `abs(z - a)` combined with `10 - abs(z - a)` is the standard way to express circular distance and would be more readable.
- **Structure**: Good. The loop is simple and the logic is linear.
- **Naming**: Poor. Variable names `z`, `ans`, `a`, and `p` are non-descriptive. 
    - `z` $\rightarrow$ `currentDigit`
    - `a` $\rightarrow$ `targetDigit`
    - `ans` $\rightarrow$ `totalRotations`
- **Improvements**:
    - Use `std::abs(z - a)` and `10 - std::abs(z - a)` to simplify the distance logic.
    - Replace single-letter variables with descriptive names to improve maintainability.

---

# Question Revision
# Revision Report: Minimum Rotations to Dial a Number I

- **Pattern**: Precomputation / Mapping (Lookup Table)
- **Brute Force**: For every digit in the target number, iterate through the keypad to find the coordinates of the current digit and the target digit, then calculate the Manhattan distance $|x_1 - x_2| + |y_1 - y_2|$.
- **Optimal Approach**: 
    - Create a static mapping (array or hash map) where the key is the digit (`0-9`) and the value is its `(row, col)` coordinate on the keypad.
    - Iterate through the input string once. For each pair of consecutive digits, retrieve their coordinates from the map and add the Manhattan distance to the total.
    - **Time Complexity**: $O(n)$, where $n$ is the length of the phone number.
    - **Space Complexity**: $O(1)$, as the mapping table is of constant size (10 digits).
- **The 'Aha' Moment**: The keypad layout is fixed and small, meaning coordinates can be hardcoded into a lookup table to avoid repetitive searching.
- **Summary**: Use a coordinate map to transform digits into $(x, y)$ pairs and sum the Manhattan distances between consecutive points.

---