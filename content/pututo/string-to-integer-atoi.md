---
title: "String to Integer (atoi)"
slug: string-to-integer-atoi
date: "2026-04-07"
---

# My Solution
~~~cpp
class Solution {
public:
    int myAtoi(string s) {
        int i=0,n=s.size();
        while(i<n&&s[i]==' '){
            i++;
        }
        int sign=1;
        if(i<n&&(s[i]=='+'||s[i]=='-')){
            if(s[i]=='-'){
                sign=-1;
            }
            i++;
        }
        long ans=0;
        while(i<n && isdigit(s[i])){
            int digit=s[i]-'0';
            if(ans > (INT_MAX-digit) / 10){
                return sign==1 ? INT_MAX : INT_MIN ;
            }
            ans=ans*10+digit;
            i++;
        }
        return sign*ans;
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Iterative parsing (Two-pointer/Simulation).
- **Optimality**: Optimal. The solution processes the string in a single pass, adhering to all `atoi` constraints (whitespace, sign, digit extraction, and overflow handling).

## Complexity
- **Time Complexity**: $O(n)$, where $n$ is the length of the string. Each character is visited at most once.
- **Space Complexity**: $O(1)$. Only a few primitive variables are used regardless of input size.

## Efficiency Feedback
- **Overflow Logic**: The check `if(ans > (INT_MAX-digit) / 10)` is an efficient way to prevent integer overflow before it occurs, avoiding the need for 64-bit types for the overflow check itself.
- **Performance**: Runtime and memory usage are minimal as there are no heap allocations or complex data structures.

## Code Quality
- **Readability**: Good. The logic follows the natural steps of the problem requirements.
- **Structure**: Good. The linear flow (whitespace $\rightarrow$ sign $\rightarrow$ digits) is clear.
- **Naming**: Moderate. Variables like `i`, `n`, and `ans` are standard in competitive programming, though `index` and `result` would be more descriptive for production code.
- **Improvements**:
    - Use `long long` instead of `long` for `ans` to guarantee 64-bit width across all platforms, although the current overflow check makes `int` technically sufficient.
    - Use `std::isdigit` explicitly from `<cctype>` (though often included via other headers).

---

# Question Revision
### String to Integer (atoi)

**Pattern:** Simulation / String Parsing

**Brute Force:** 
Use regular expressions to isolate the numeric part and then convert it using built-in library functions, manually handling the 32-bit overflow checks at the end.

**Optimal Approach:** 
Perform a single linear scan of the string using a pointer to track the current position:
1. **Skip** leading whitespace.
2. **Determine sign** by checking for `+` or `-` at the current index.
3. **Convert digits** by iterating until a non-digit character is found, updating the result as `res = res * 10 + digit`.
4. **Handle Overflow** during the conversion process: if the current result exceeds $(2^{31}-1)/10$, clamp it to the 32-bit integer limits immediately.

- **Time Complexity:** $O(n)$
- **Space Complexity:** $O(1)$

**The 'Aha' Moment:** 
The strict sequence of rules (whitespace $\to$ sign $\to$ digits) indicates a state-based simulation where the order of operations is non-negotiable.

**Summary:** 
Sequentially parse the string while clamping the accumulated value to the 32-bit signed integer range.

---