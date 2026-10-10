---
title: "Counting Bits"
slug: counting-bits
date: "2026-10-10"
---

# My Solution
~~~cpp
class Solution {
public:
    vector<int> countBits(int n) {\
        int count=0;
        vector<int> ans(n+1);
        for(int i=0;i<=n;i++){
            count=0;
            int x=i;
            while(x!=0){
                count=count+(x&1);
                x=x>>1;
            }
            ans[i]=count;
        }
        return ans;
        
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Brute-force iteration. The code iterates through every number from $0$ to $n$ and manually counts set bits using bitwise shifts and masking.
- **Optimality**: Not optimal. The problem can be solved in linear time using Dynamic Programming (DP) based on previously computed results.

## Complexity
- **Time Complexity**: $O(n \log n)$. For each of the $n$ numbers, the `while` loop runs for the number of bits in that integer (up to $\log n$).
- **Space Complexity**: $O(1)$ auxiliary space (excluding the output vector $O(n)$).

## Efficiency Feedback
- **Bottleneck**: The repeated bit-counting for every integer is redundant. 
- **Optimization**: Use the DP relation `ans[i] = ans[i >> 1] + (i & 1)`. This reduces the time complexity to $O(n)$ by utilizing the result of $i/2$.

## Code Quality
- **Readability**: Good. The logic is straightforward and easy to follow.
- **Structure**: Good. Simple linear flow.
- **Naming**: Moderate. `x` is generic, though acceptable in a short loop; `ans` is standard.
- **Improvements**: 
    - Use `__builtin_popcount(i)` in C++ for a more concise and hardware-optimized way to count bits.
    - Replace the inner `while` loop with the DP approach mentioned above to improve asymptotic complexity.

---

# Question Revision
# Revision Report: Counting Bits

- **Pattern**: Dynamic Programming (Bit Manipulation)
- **Brute Force**: Iterate from $0$ to $n$, and for each number, use a built-in function or a while loop to count set bits by repeatedly checking the LSB (`num & 1`) and shifting right.
- **Optimal Approach**: Use the property that the number of bits in $i$ is equal to the number of bits in $i // 2$ (which is $i >> 1$) plus $1$ if $i$ is odd.
    - **Logic**: `dp[i] = dp[i >> 1] + (i & 1)`
    - **Time Complexity**: $O(n)$
    - **Space Complexity**: $O(1)$ (excluding the output array)
- **The 'Aha' Moment**: The problem asks for the count for *all* numbers up to $n$, suggesting that the answer for a larger number can be derived from a previously computed smaller number.
- **Summary**: Use DP to build the count of bits by referencing the shifted value (`i >> 1`) and adding the current least significant bit.

---