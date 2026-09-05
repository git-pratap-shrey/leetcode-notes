---
title: "Partition Equal Subset Sum"
slug: partition-equal-subset-sum
date: "2026-08-20"
---

# My Solution
~~~cpp
class Solution {
public:
    int smallestNumber(int n, int t) {
        do{
            int prod = 1;
            int temp = n;

            while(temp){
                prod *= (temp%10);
                temp /= 10;
            }

            if(prod % t == 0){
                return n;
            }
            n++;
        }while(n % 10 != 0);

        return n;
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Brute-force simulation.
*   **Optimal:** No. The approach is a heuristic-based search that terminates prematurely when `n` reaches a multiple of 10. The problem statement (Partition Equal Subset Sum) is unrelated to the provided code (finding a number with a specific digit product property).

## Complexity
*   **Time Complexity:** $O(k \cdot d)$ where $k$ is the number of iterations until a multiple of 10 or the condition is met, and $d$ is the number of digits in $n$. 
*   **Space Complexity:** $O(1)$.
*   **Bottleneck:** The search space is artificially truncated by the `do-while` loop condition (`n % 10 != 0`), which may return an incorrect result if the condition isn't met within the range.

## Efficiency Feedback
*   **Logic Error:** The loop `while(n % 10 != 0)` stops at the next multiple of 10, meaning it only checks a small window of numbers. It does not guarantee finding a solution if it exists beyond that range.
*   **Optimization:** If this were a valid search, the condition `if (prod == 0)` should be handled to avoid unnecessary calculations, as any number containing a '0' digit will have a product of 0.

## Code Quality
*   **Readability:** Moderate. The code is simple, but the logic is flawed.
*   **Structure:** Poor. The structure does not solve the stated problem (Partition Equal Subset Sum) and the loop condition is arbitrary.
*   **Naming:** Moderate. `n` and `t` are vague, though common in competitive programming.
*   **Concrete Improvements:** 
    1.  **Alignment:** Rename variables to reflect their purpose (e.g., `startNum`, `targetDivisor`).
    2.  **Correctness:** If the task is to find the smallest number, remove the `while(n % 10 != 0)` constraint unless specific problem constraints dictate it.
    3.  **Mismatch:** This code solves a digit-product problem, not the Partition Equal Subset Sum problem. Address the logic discrepancy first.

---

# Question Revision
### Revision Report: Partition Equal Subset Sum

**Pattern:** Dynamic Programming (0/1 Knapsack Variation)

**Brute Force:** 
Generate all possible subsets of the array using recursion to check if any subset sums to exactly `sum(nums) / 2`. 
*   **Time Complexity:** $O(2^n)$
*   **Space Complexity:** $O(n)$ (recursion stack)

**Optimal Approach:** 
Transform the problem into a "Subset Sum" challenge. Create a boolean DP table (or 1D array) where `dp[i]` represents whether a sum `i` can be achieved. Iterate through each number and update the possible sums from right to left to avoid using the same element multiple times.
*   **Time Complexity:** $O(n \cdot s)$, where $n$ is the number of elements and $s$ is the target sum.
*   **Space Complexity:** $O(s)$ using a 1D space-optimized DP array.

**The 'Aha' Moment:** 
The requirement to split an array into two equal halves is a disguised variation of the 0/1 Knapsack problem where you must determine if a capacity of exactly `sum/2` can be filled.

**Summary:** Whenever a problem asks to partition a set into subsets with specific sum constraints, think "0/1 Knapsack" and solve for the target sum using a boolean DP array.

---