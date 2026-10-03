---
title: "Smallest Missing Multiple of K"
slug: smallest-missing-multiple-of-k
date: "2026-09-11"
---

# My Solution
~~~cpp
class Solution {
public:
    int countRotations(string s, int k) {
        int n=s.size();
        int c=0;
        for(int i=0;i<n;i++){
            if(s[i]==s[(i+1)%n]){
                c++;
            }
        }
        if(k==c-1){
            return c;
        }
        else if(k==c){
            return n-c;
        }
        else{
            return 0;
        }
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Ad-hoc / Linear scan. The code counts adjacent identical characters (including wrap-around) and applies a hardcoded conditional check based on the value of `k`.
- **Optimality**: **Incorrect**. The logic bears no relation to the problem "Smallest Missing Multiple of K." It appears to be solving a completely different, undefined problem involving string rotations or character counting.

## Complexity
- **Time Complexity**: $O(n)$, where $n$ is the length of the string. It performs a single pass through the string.
- **Space Complexity**: $O(1)$, as it only uses a few integer variables.

## Efficiency Feedback
- The runtime is optimal for a linear scan, but the logic is fundamentally flawed for the stated problem. 
- There are no meaningful optimizations possible because the implementation does not address the actual problem requirements.

## Code Quality
- **Readability**: Poor. The logic is opaque, and the relationship between the character count `c` and the return values is arbitrary.
- **Structure**: Moderate. The loop is standard, but the conditional block is logically disconnected from the problem context.
- **Naming**: Poor. `c` is too generic; `s` and `n` are standard, but `countRotations` as a function name is misleading given the internal logic.
- **Concrete Improvements**:
    - The entire logic must be rewritten to actually calculate multiples of $K$.
    - Remove the string input if the problem is about mathematical multiples.
    - Ensure the function name reflects the actual goal (finding a missing multiple).

---

# Question Revision
# Revision Report: Smallest Missing Multiple of K

- **Pattern:** Greedy / Mathematical Properties
- **Brute Force:** Iterate through all multiples of $k$ (i.e., $k, 2k, 3k, \dots$) and check if each one exists in the given set using a hash set. The first multiple not found is the answer.
- **Optimal Approach:** 
    - Store all elements of the input array in a Hash Set for $O(1)$ lookup.
    - Start a counter $i = 1$. While $i \times k$ exists in the set, increment $i$.
    - Return the first $i \times k$ that is absent.
    - **Time Complexity:** $O(n)$ to build the set and $O(n)$ in the worst case to find the missing multiple. Total: $O(n)$.
    - **Space Complexity:** $O(n)$ to store the elements in the Hash Set.
- **The 'Aha' Moment:** The requirement to find the *smallest* missing value from a *specific sequence* (multiples of $k$) suggests that iterating through that sequence linearly is more efficient than sorting the entire array.
- **Summary:** Use a Hash Set for $O(1)$ lookups and iterate through multiples of $k$ sequentially until a gap is found.

---