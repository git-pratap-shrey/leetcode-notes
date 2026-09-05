---
title: "Reverse Integer"
slug: reverse-integer
date: "2026-08-16"
---

# My Solution
~~~cpp
class Solution {
public:
    int reverse(int x) {
        long int ans=0;
        long int r=0;
        while(x!=0){
            r=x%10;
            ans=ans*10+r;
            x=x/10;
        }
        if(ans<INT_MIN || ans>INT_MAX){
            return 0;
        }
        return ans;
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Iterative digit extraction using modulo and division.
- **Optimality**: Optimal. The algorithm processes each digit exactly once.

## Complexity
- **Time Complexity**: $O(\log_{10}(|x|))$, as the number of iterations is proportional to the number of digits in the input integer.
- **Space Complexity**: $O(1)$.

## Efficiency Feedback
- **Runtime**: Low/Efficient. 
- **Potential Risk**: The use of `long int` for overflow detection is platform-dependent. In C++, `long` is guaranteed to be at least 32 bits. On systems where `long` is exactly 32 bits (e.g., 64-bit Windows), the expression `ans * 10 + r` will overflow before the `if(ans < INT_MIN || ans > INT_MAX)` check is reached, leading to undefined behavior. Using `long long` (guaranteed 64 bits) would ensure portability and correctness across all platforms.

## Code Quality
- **Readability**: Good. The logic is straightforward and easy to follow.
- **Structure**: Good. The flow is linear and logical.
- **Naming**: Moderate. `ans` is acceptable, but `r` is a bit generic (though common for "remainder").
- **Concrete Improvements**:
    - Replace `long int` with `long long` to prevent overflow during calculation on platforms where `long` is 32-bit.
    - The variable `r` is only used once; it could be inlined into the `ans` calculation: `ans = ans * 10 + (x % 10);`.

---

# Question Revision
### Reverse Integer

**Pattern:** Mathematical / Digit Manipulation

**Brute Force:** Convert the integer to a string, reverse the string, and cast it back to an integer while checking if the result exceeds the 32-bit signed integer range.

**Optimal Approach:**
Iteratively extract the last digit of the number using the modulo operator (`% 10`) and append it to a new result variable by multiplying the current result by 10. Use integer division (`/ 10`) to remove the last digit from the original number. To handle overflow, check if the result exceeds the 32-bit boundaries ($[-2^{31}, 2^{31}-1]$) before performing the multiplication.

*   **Time Complexity:** $O(\log_{10}(n))$ — proportional to the number of digits in $n$.
*   **Space Complexity:** $O(1)$

**The 'Aha' Moment:** The constraint to handle 32-bit overflow indicates that you must validate the boundaries *before* updating the result, rather than after.

**Summary:** Rebuild the integer digit-by-digit using modulo and division while proactively checking for 32-bit overflow.

---