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
        int current = 0, ans =0;
        for(int i=0 ; i<s.size();i++){
            int target = s[i]-'0';
            int diff = abs(current-target);
            int rotation = min(diff , 10-diff);
            ans = ans+rotation;
            current =target;
        
        }
        return ans;
    }
    
};
~~~

# Submission Review
## Approach
- **Technique:** Greedy / Simulation. The solution iterates through the string and calculates the shortest distance between the current digit and the target digit on a circular dial (0-9).
- **Optimality:** Optimal. The problem asks for the minimum total rotation, and since each movement is independent of future moves, taking the shortest path for each digit is the global optimum.

## Complexity
- **Time Complexity:** $O(n)$, where $n$ is the length of the string $s$. The code performs a single pass through the input.
- **Space Complexity:** $O(1)$. No additional data structures are used regardless of input size.

## Efficiency Feedback
- The runtime and memory are as low as possible for this problem.
- No meaningful optimizations are required.

## Code Quality
- **Readability:** Good. The logic is straightforward and follows a clear sequence.
- **Structure:** Good. The loop and distance calculations are logically grouped.
- **Naming:** Good. Variables like `current`, `target`, and `rotation` accurately describe their purpose.

**Concrete Improvements:**
- **Integer Overflow:** While not an issue for typical constraints of this problem, using `long long` for `ans` is a safer habit in competitive programming for summation problems.
- **Consistency:** `ans = ans + rotation` can be simplified to `ans += rotation` for idiomatic C++.

---

# Question Revision
# Revision Report: Minimum Rotations to Dial a Number I

- **Pattern:** Hash Map / Precomputation (Lookup Table)
- **Brute Force:** For each digit in the target number, iterate through the dial layout to find the position of the current digit and the previous digit, then calculate the absolute difference between their indices.
- **Optimal Approach:** 
    - **Logic:** Create a precomputed mapping (array or hash map) where each digit `0-9` is mapped to its index on the dial (e.g., `1` $\to 0$, `2` $\to 1$, ..., `9` $\to 8$, `0` $\to 11$ for a standard 12-slot dial). Iterate through the input string once, calculating the distance between the indices of consecutive digits.
    - **Time Complexity:** $O(n)$ where $n$ is the length of the phone number.
    - **Space Complexity:** $O(1)$ as the mapping table size is constant (10 digits).
- **The 'Aha' Moment:** The dial layout is static and small, meaning the cost to reach any digit is a constant value that can be cached.
- **Summary:** Map digits to their fixed dial positions and sum the absolute differences between consecutive indices.

---