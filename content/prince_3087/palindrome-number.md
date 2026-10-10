---
title: "Palindrome Number"
slug: palindrome-number
date: "2026-10-07"
---

# My Solution
~~~cpp
class Solution {
public:
    bool isPalindrome(int x) {
        if (x<0){
            return false;
        }
        int n = x;
        long long reverse = 0;
        while(x>0){
            int digit = x%10;
            reverse = reverse*10+digit;
            x = x/10;
        }
        if(reverse==n){
            return true;
        }
        else{
            return false;
        }
     
        
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Integer reversal. The code extracts digits from the end of the number and reconstructs them in reverse order to compare with the original input.
- **Optimality**: Sub-optimal. While the logic is correct, the solution reverses the entire number. A more optimal approach would be to reverse only half of the integer to avoid potential overflow and reduce iterations.

## Complexity
- **Time Complexity**: $O(\log_{10} n)$, where $n$ is the value of the input integer. This corresponds to the number of digits in $x$.
- **Space Complexity**: $O(1)$, as it uses a constant amount of extra space regardless of input size.

## Efficiency Feedback
- **Overflow Handling**: The use of `long long` for the `reverse` variable prevents integer overflow during the reversal process, which is a necessary safeguard for this specific implementation.
- **Optimization**: The solution can be optimized by returning `false` immediately if the number ends in 0 (and is not 0 itself), as no palindrome starts with 0.

## Code Quality
- **Readability**: Good. The logic is straightforward and easy to follow.
- **Structure**: Moderate. The final `if-else` block is redundant; `return reverse == n;` would be more idiomatic.
- **Naming**: Good. Variables `n`, `x`, `digit`, and `reverse` clearly describe their roles.

**Concrete Improvements**:
1. Replace the final `if-else` block with: `return reverse == n;`.
2. Add a check for numbers ending in 0: `if (x != 0 && x % 10 == 0) return false;`.

---

# Question Revision
# Revision Report: Palindrome Number

- **Pattern**: Mathematical Reversal / Two Pointers (if converted to string).
- **Brute Force**: Convert the integer to a string and check if the string equals its reverse.
- **Optimal Approach**: Reverse the second half of the number mathematically and compare it with the first half to avoid integer overflow.
    - **Logic**: 
        1. Handle edge cases (negative numbers or numbers ending in 0 but aren't 0).
        2. Extract digits using `% 10` and build the reversed half using `rev = rev * 10 + pop`.
        3. Stop when the original number is less than or equal to the reversed half.
        4. Compare `x` and `rev` (or `rev/10` for odd-length numbers).
    - **Complexity**: 
        - Time: $O(\log_{10}n)$ — we process each digit once.
        - Space: $O(1)$.
- **The 'Aha' Moment**: The constraint to solve it "without converting the integer to a string" signals a need for modulo and division arithmetic.
- **Summary**: To check for a palindrome without strings, mathematically reverse half the number and compare it to the first half.

---