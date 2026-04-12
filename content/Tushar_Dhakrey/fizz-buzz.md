---
title: "Fizz Buzz"
slug: fizz-buzz
date: "2026-04-11"

---
---

# My Solution
~~~java
class Solution {
    public List<String> fizzBuzz(int n) {
        List<String> ans = new ArrayList<>();
        for(int i=1;i<=n;i++){
            if(i%3==0 && i%5==0){
                ans.add("FizzBuzz");
            }
            else if(i%3==0){
                ans.add("Fizz");
            }
            else if(i%5==0){
                ans.add("Buzz");
            }
            else{
                ans.add(String.valueOf(i));
            }
        }
        return ans;
    }
}
~~~

# Submission Review
## Approach
*   **Technique**: Iterative simulation.
*   **Optimality**: Optimal. The problem requires generating $n$ specific strings, necessitating at least $O(n)$ time.

## Complexity
*   **Time Complexity**: $O(n)$, as we iterate from 1 to $n$ exactly once.
*   **Space Complexity**: $O(n)$ to store the result list.

## Efficiency Feedback
*   The logic is straightforward and efficient for the problem constraints.
*   **Potential minor optimization**: Using a `StringBuilder` or string concatenation logic inside the loop (e.g., `(i%3==0 ? "Fizz" : "") + (i%5==0 ? "Buzz" : "")`) could reduce the number of conditional branches, though for $n$ within typical competitive programming limits, the current approach is perfectly performant.

## Code Quality
*   **Readability**: Good. The logic is standard and easy to follow.
*   **Structure**: Good. Minimalist and fits the requirements of the `Solution` class structure.
*   **Naming**: Good. Variables `ans` and `i` are standard for this level of problem.
*   **Concrete Improvements**: 
    *   Consider initializing the `ArrayList` with an initial capacity of `n` (e.g., `new ArrayList<>(n)`) to avoid internal array resizing during the addition process.

---
---


# Question Revision
### LeetCode: Fizz Buzz

**Pattern:** Iterative Modulo Arithmetic

**Brute Force:**
Iterate from 1 to $n$, use multiple `if-else` blocks to check `i % 3 == 0`, `i % 5 == 0`, and `i % 15 == 0` sequentially, appending the result to a list.

**Optimal Approach:**
Iterate from 1 to $n$ and use string concatenation to handle conditions. If `i` is divisible by 3, append "Fizz"; if divisible by 5, append "Buzz". If the string remains empty, append the integer as a string.
*   **Time Complexity:** $O(n)$
*   **Space Complexity:** $O(1)$ (excluding the output list)

**The 'Aha' Moment:**
Checking the most restrictive condition first (divisibility by both 3 and 5) or using string concatenation allows you to handle overlapping conditions without redundant `if` logic.

**Summary:**
When multiple conditions can trigger simultaneously, use string concatenation to build the output dynamically rather than nesting exhaustive `if-else` checks.

---
