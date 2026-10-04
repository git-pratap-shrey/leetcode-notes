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
        int n=s.length();
        int sum=0;
        int from=0;
        for(int i=0;i<n;i++){
            int to=s[i]-'0';
            int count=abs(to-from);
            int count1=10-count;
            
           int mini=min(count,count1);
            sum+=mini;
           from=to;
        }

        return sum;
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Greedy / Simulation. The code calculates the shortest distance between two digits on a circular dial (0-9) by comparing the direct difference and the wrap-around difference.
- **Optimality**: Optimal. This is the most efficient way to calculate distances on a circular ring.

## Complexity
- **Time Complexity**: $O(n)$, where $n$ is the length of the string $s$. The code iterates through the string exactly once.
- **Space Complexity**: $O(1)$. Only a few integer variables are used regardless of input size.

## Efficiency Feedback
- **Runtime/Memory**: Excellent. The solution uses minimal resources.
- **Optimizations**: No meaningful algorithmic optimizations are possible, as the complexity is already linear.

## Code Quality
- **Readability**: Moderate. The logic is simple, but the spacing is inconsistent (e.g., `int n=s.length();` vs `int mini=min(count,count1);`).
- **Structure**: Good. The logic flows linearly and correctly handles the state transition (`from = to`).
- **Naming**: Moderate. `sum`, `from`, and `to` are acceptable, but `count` and `count1` are generic; `dist` and `wrapDist` would be more descriptive.
- **Concrete Improvements**:
    - Use `const string& s` in the function signature to avoid unnecessary string copying (though not applicable here as it's a LeetCode-style signature).
    - Consistent indentation and spacing around operators for better professional presentation.
    - `abs(to - from)` is correct, but explicitly naming the variables for "clockwise" and "counter-clockwise" distances would improve clarity.

---

# Question Revision
# Revision Report: Minimum Rotations to Dial a Number I

- **Pattern:** Precomputation / Hash Map (Lookup Table)
- **Brute Force:** For every digit in the target number, manually calculate the distance between the current digit and the previous digit on the rotary dial layout.
- **Optimal Approach:** 
    - Precompute the distance of every digit ($0-9$) from the starting position (digit '1') and store it in a map or array.
    - Iterate through the target string, summing the precomputed costs for each digit.
    - **Time Complexity:** $O(n)$ where $n$ is the length of the target number.
    - **Space Complexity:** $O(1)$ as the lookup table size is constant (10 digits).
- **The 'Aha' Moment:** The dial layout is static and the distance to each digit never changes, meaning I can trade a tiny amount of space for $O(1)$ lookup per character.
- **Summary:** Use a fixed lookup table to map digits to their dial costs to avoid redundant calculations during traversal.

---