---
title: "String to Integer (atoi)"
slug: string-to-integer-atoi
date: "2026-06-25"

---

# My Solution
~~~
class
 Solution {
public:
    int myAtoi(string s) {
        int n=s.size();
        int i=0;

        while(i<n && s[i]==' ') {
            i++;
          }

        int sign=1;

        if(i<n && (s[i]=='+' || s[i]=='-')) {
            if(s[i]=='-') {
                sign=-1;
            }
            i++;
        }

        long long ans=0;

        while(i<n && isdigit(s[i])) {
            ans=ans*10+(s[i]-'0');

            if(sign==1 && ans>INT_MAX) {
                return INT_MAX;
            }
    
            if(sign==-1 && -ans<INT_MIN) {
                return INT_MIN;
            }

            i++;
           }

        return sign*ans;
    }
};
~~~

# Submission Review

## Approach

- **Technique**: Linear simulation/single-pass scan.
- **Optimality**: Optimal. The algorithm processes each character of the string at most once.

## Complexity

- **Time Complexity**: $O(n)$, where $n$ is the length of the string.
- **Space Complexity**: $O(1)$, as it only uses a fixed number of primitive variables regardless of input size.

## Efficiency Feedback

- **Runtime/Memory**: Very efficient. The use of `long long` for the accumulator `ans` simplifies overflow detection.
- **Overflow Handling**: The check is performed *inside* the loop. This is critical because it prevents the `long long` variable itself from overflowing if the input string contains an exceptionally long sequence of digits (e.g., > 19 digits).

## Code Quality

- **Readability**: Good. The logic follows the problem requirements sequentially (whitespace $\rightarrow$ sign $\rightarrow$ digits).
- **Structure**: Good. The use of `while` loops for each phase is clean and logical.
- **Naming**: Moderate. `ans` is generic; `result` would be more descriptive. Other variables (`i`, `n`, `sign`) are standard for this context.
- **Concrete Improvements**:
    - The condition `if(sign==-1 && -ans < INT_MIN)` is correct but slightly unintuitive. Since `abs(INT_MIN)` is $2^{31}$ and `INT_MAX` is $2^{31}-1$, the check could be unified or simplified, though the current implementation is functionally sound.
    - Adding `const` to `n` would be a minor best-practice improvement.

---

# Question Revision

#

## String to Integer (atoi)

**Pattern:** Simulation / String Parsing

**Brute Force:** Use built-in library functions (like `parseInt`) or attempt to convert the entire remaining string to a number before handling overflows and signs.

**Optimal Approach:** Implement a step-by-step simulation to process the string linearly:
1. **Whitespace:** Skip all leading spaces.
2. **Sign:** Check for a single `+` or `-` character to determine the multiplier.
3. **Conversion:** Iterate through characters until a non-digit is encountered, updating the total: `res = res * 10 + digit`.
4. **Clamping:** After each digit addition, check if the value exceeds the 32-bit signed integer range $[ -2^{31}, 2^{31}-1 ]$.

- **Time Complexity:** $O(n)$
- **Space Complexity:** $O(1)$

**The 'Aha' Moment:** The problem isn't an algorithmic puzzle, but a test of your ability to translate a specific set of business rules into a precise sequence of conditional checks.

**Summary:** Process the string in a strict linear pipeline: whitespace $\to$ sign $\to$ digits $\to$ 32-bit clamping.

---
