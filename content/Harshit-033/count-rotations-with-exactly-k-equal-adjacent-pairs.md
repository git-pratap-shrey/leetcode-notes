---
title: "Count Rotations With Exactly K Equal Adjacent Pairs"
slug: count-rotations-with-exactly-k-equal-adjacent-pairs
date: "2026-09-06"
---

# My Solution
~~~cpp
class Solution {
public:
    int countRotations(string s, int k) {
        int n=s.size();
        int count=0;
        for (int i=0;i<n;i++){
            if(s[i]==s[(i+1)%n]){
                count++;
            }
        }
        if(k==count) return n-count;
        if(k== count-1) return count;

        return 0;
        
        
        
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Combinatorial observation.
- **Logic**: The code calculates the number of equal adjacent pairs in a circular version of the string (`count`). It then leverages the property that for any linear rotation, the number of adjacent pairs is either `count` (if the wrap-around pair is different) or `count - 1` (if the wrap-around pair is the same).
- **Optimality**: Optimal. It reduces a problem that looks like $O(n^2)$ (checking all rotations) to $O(n)$.

## Complexity
- **Time Complexity**: $O(n)$, where $n$ is the length of the string. The code performs a single linear pass.
- **Space Complexity**: $O(1)$, as it only uses a few integer variables regardless of input size.

## Efficiency Feedback
- The efficiency is optimal. The runtime and memory usage are as low as possible for this problem.

## Code Quality
- **Readability**: Moderate. The logic is very concise, but the lack of comments makes the derivation of `n-count` and `count` non-obvious to someone unfamiliar with the circular-to-linear pair property.
- **Structure**: Good. The logic flow is simple and direct.
- **Naming**: Poor. `count` is a generic name; `circularPairs` would be more descriptive.
- **Concrete Improvements**:
    - Add a brief comment explaining why `n-count` and `count` are returned.
    - Use more descriptive variable names to clarify the relationship between circular and linear pairs.
    - Remove trailing whitespace/empty lines at the end of the function.

---

# Question Revision
### Revision Report: Count Rotations With Exactly K Equal Adjacent Pairs

**Pattern:** Array Manipulation / Cyclic Properties

**Brute Force:** 
Generate all $n$ possible rotations of the array. For each rotation, iterate through the $n-1$ adjacent pairs to count equals.
- **Complexity:** $O(n^2)$ time, $O(n)$ space.

**Optimal Approach:**
1. Calculate the total number of equal adjacent pairs in the **cyclic** array (including the wrap-around pair $A[n-1], A[0]$). Let this be `total_cyclic`.
2. Recognize that any linear rotation starting at index $i$ contains all cyclic pairs *except* the pair $(A[i-1], A[i])$.
3. For each rotation $i \in [0, n-1]$, the number of adjacent pairs is: `total_cyclic - (1 if A[i-1] == A[i] else 0)`.
4. Count how many rotations result in exactly $K$.
- **Time Complexity:** $O(n)$
- **Space Complexity:** $O(1)$

**The 'Aha' Moment:** 
A linear rotation is simply the complete set of cyclic adjacent pairs minus the single pair that was "broken" to create the array's endpoints.

**Summary:** 
Subtract the boundary pair's equality status from the total cyclic equal pairs to evaluate all rotations in a single pass.

---