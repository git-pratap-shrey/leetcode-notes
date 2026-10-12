---
title: "Three Fibonacci Sum"
slug: three-fibonacci-sum
date: "2026-10-11"
---

# My Solution
~~~cpp
class Solution {
public:
    bool threeFibonacciSum(int n) {
        
        int first=0;
        int second=1;
        int third=first+second;
        while(true){
            if((first+second+third)==n){
                return true;
            }
            if((first+second+third )>n){
                return false;
            }
            first=second;
            second=third;
            third=first+second;
            
        }
        return false;
        
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Linear simulation of the Fibonacci sequence. The code checks if the sum of three *consecutive* Fibonacci numbers equals $n$.
- **Optimality**: **Suboptimal/Incorrect**. The problem "Three Fibonacci Sum" typically asks if $n$ can be represented as the sum of *any* three Fibonacci numbers, not necessarily consecutive ones. This solution only checks triplets of the form $(F_i, F_{i+1}, F_{i+2})$.

## Complexity
- **Time Complexity**: $O(\log n)$. The Fibonacci sequence grows exponentially, so the loop reaches $n$ in logarithmic time.
- **Space Complexity**: $O(1)$. Only three integer variables are used.

## Efficiency Feedback
- The runtime is efficient for the specific logic implemented.
- **Logic Bottleneck**: If the problem allows any three Fibonacci numbers (e.g., $F_1 + F_3 + F_7$), this code will return `false` for valid cases, leading to incorrect results.

## Code Quality
- **Readability**: Moderate. The logic is simple, but the `while(true)` loop is slightly less clean than a loop conditioned on the sum.
- **Structure**: Moderate. The `return false` at the end is unreachable code because the loop handles both `true` and `false` returns.
- **Naming**: Good. Variable names (`first`, `second`, `third`) clearly describe their role in the sequence.

**Concrete Improvements**:
1. **Logic Fix**: If non-consecutive Fibonacci numbers are allowed, pre-calculate all Fibonacci numbers up to $n$ in a list and use a Two-Pointer or Hash Set approach to find if any three sum to $n$.
2. **Clean-up**: Remove the unreachable `return false` after the `while` loop.
3. **Edge Cases**: The code does not explicitly handle $n=0$ or negative inputs, though the logic naturally returns `false` for negatives.

---

# Question Revision
# Revision Report: Three Fibonacci Sum

- **Pattern:** Pre-computation + Two Pointers / Hash Set
- **Brute Force:** Iterate through all possible triplets $(i, j, k)$ in the input array and check if their sum exists in a pre-generated list of Fibonacci numbers. 
    - **Complexity:** $O(n^3 \cdot \log(\text{fib\_count}))$
- **Optimal Approach:** 
    1. **Pre-compute:** Generate all Fibonacci numbers up to the maximum possible sum (e.g., $3 \times 10^9$) and store them in a Hash Set for $O(1)$ lookup.
    2. **Two-Pointer Search:** Sort the input array. For each element $i$, use two pointers (left and right) to find pairs that sum to any value $F - \text{array}[i]$, where $F$ is a Fibonacci number. 
    - **Time Complexity:** $O(F \cdot n \log n)$ or $O(F \cdot n^2)$ depending on the number of Fibonacci targets $F$.
    - **Space Complexity:** $O(F)$ to store the Fibonacci sequence.
- **The 'Aha' Moment:** When the target value isn't a single constant but must belong to a specific, slowly growing sequence (Fibonacci), I should treat each sequence member as a separate target for a 3-Sum search.
- **Summary:** Solve as a variation of the 3-Sum problem by iterating through all possible Fibonacci targets.

---