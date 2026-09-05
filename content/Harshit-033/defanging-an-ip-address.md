---
title: "Defanging an IP Address"
slug: defanging-an-ip-address
date: "2026-08-14"
---

# My Solution
~~~cpp
class Solution {
public:
    string defangIPaddr(string address) {
        string ans="";
        for(int i=0;i<address.size();i++){
            if(address[i]=='.'){
                ans+="[.]";
            }
            else{
                ans+=address[i];
            }
        }
        return ans;
        
        
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Iterative string construction.
- **Optimality**: Suboptimal. While the logic is correct, the repeated string concatenation (`ans += ...`) triggers multiple reallocations as the string grows.

## Complexity
- **Time Complexity**: $O(N)$, where $N$ is the length of the string. Each character is visited once.
- **Space Complexity**: $O(N)$, as a new string is created to store the result.

## Efficiency Feedback
- **Bottleneck**: Repeated `+=` operations on a `std::string` can lead to logarithmic number of reallocations and memory copies.
- **Optimization**: Use `ans.reserve(address.size() + 6)` to pre-allocate memory. Since the output length is fixed ($N + 6$), pre-allocation eliminates reallocations entirely.

## Code Quality
- **Readability**: Good; the logic is straightforward and easy to follow.
- **Structure**: Good; the use of a simple loop is appropriate for this constraint.
- **Naming**: Good; `ans` and `address` are standard and clear in this context.
- **Concrete Improvements**:
    - Pre-allocate memory: `ans.reserve(address.size() + 6);`
    - Consider using `std::string::replace` or a single-pass `std::stringstream` if the input size were significantly larger, though for a simple IP address, pre-allocation is sufficient.

---

# Question Revision
### Revision Report: Defanging an IP Address

**Pattern:** String Manipulation / Iteration

**Brute Force:** 
Create a new string by iterating through the input; if the character is a '.', append "[.]" to the result; otherwise, append the original character.
*   **Time:** $O(n)$
*   **Space:** $O(n)$

**Optimal Approach:**
Use a built-in library function (e.g., `replace()` in Python or `replaceAll()` in Java/JS) which utilizes optimized underlying memory allocation to perform the character substitution.
*   **Time:** $O(n)$
*   **Space:** $O(n)$ (as strings are immutable, a new string must be allocated).

**The 'Aha' Moment:**
When the transformation rule is a simple 1:1 mapping (or a fixed sequence replacement) across the entire string, a single pass or a library-level replacement is always the most efficient approach.

**Summary:** 
For simple pattern substitutions in strings, prioritize built-in language methods to maintain readability and performance parity with manual iteration.

---