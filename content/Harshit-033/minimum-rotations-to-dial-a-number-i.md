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

        int x=0;
        int y;
        int a;
        int z;
        int count=0;
        for(int i=0;i<s.size();i++){
            a=s[i]-'0';
            y=abs(x-a);
            
            z=(10-y);
            x=a;
            count=count+min(z,y);
            
            
        }
        return count;
        
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Greedy / Simulation. The code calculates the shortest distance between two digits on a circular dial (0-9) by comparing the direct distance and the wrap-around distance.
- **Optimality**: Optimal. For each transition, the shortest path on a cycle of 10 elements is $\min(|x-a|, 10-|x-a|)$.

## Complexity
- **Time Complexity**: $O(n)$, where $n$ is the length of string `s`. The code iterates through the string exactly once.
- **Space Complexity**: $O(1)$. Only a few integer variables are used regardless of input size.

## Efficiency Feedback
- The runtime and memory usage are optimal for this problem.
- No meaningful optimizations are needed as the operations are basic arithmetic and a single linear pass.

## Code Quality
- **Readability**: Poor. The use of single-letter variables (`x`, `y`, `a`, `z`) makes the logic harder to follow without mentally mapping them to "current position," "distance," "target digit," and "complement distance."
- **Structure**: Moderate. The logic is straightforward, but the spacing is inconsistent and there are unnecessary line breaks.
- **Naming**: Poor. Variable names carry no semantic meaning.
- **Concrete Improvements**:
    - Rename `x` $\rightarrow$ `currentPos`, `a` $\rightarrow$ `targetDigit`, `y` $\rightarrow$ `dist`, `z` $\rightarrow$ `wrapDist`.
    - Use `std::min` and `std::abs` directly within the `count` increment to eliminate temporary variables.
    - Initialize `count` and `x` on the same line or use more descriptive types.

---

# Question Revision
# Revision Report: Minimum Rotations to Dial a Number I

- **Pattern:** Pre-computation / Hash Map (Lookup Table)
- **Brute Force:** For each digit in the target number, manually calculate the distance from the current position on the rotary dial, then update the current position.
- **Optimal Approach:** 
    - Create a mapping (dictionary or array) where each digit `0-9` is associated with its fixed distance from the starting position (`1`).
    - Iterate through the input string and sum the pre-computed distances.
    - **Time Complexity:** $O(n)$ where $n$ is the length of the number.
    - **Space Complexity:** $O(1)$ as the mapping size is constant (10 digits).
- **The 'Aha' Moment:** The dial layout is static and finite, meaning the cost to reach any digit is a constant that can be mapped before processing the input.
- **Summary:** Use a lookup table to convert digits into their respective rotation costs for linear-time summation.

---