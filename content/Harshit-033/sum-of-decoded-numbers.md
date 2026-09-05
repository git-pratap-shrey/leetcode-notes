---
title: "Sum of Decoded Numbers"
slug: sum-of-decoded-numbers
date: "2026-08-30"
---

# My Solution
~~~cpp
class Solution {
public:
    long long power(long long x,long long y){
        long long mod=1e9+7;
        long long ans=1;
        while(y>0){
            if(y&1){
                ans=(ans*x)%mod;
                
            }
            x=(x*x)%mod;
            y>>=1;
            
        }
        return ans;
    }
    int sumDecoded(vector<long long>& nums) {
        long long ans=0;
        int len=nums.size();
        const long long mod=1e9+7;
        
        for(int i=0;i<len;i++){
            

            int width=nums[i]%10;
            long long d=nums[i]/10;
            string s=to_string(d);
            long long x=stoi(s.substr(0,width));
            long long y=stoi(s.substr(width));
            ans=(ans+power(x,y))%mod;
            
        }
        return ans;
        
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Simulation with Modular Exponentiation.
*   **Optimality:** Suboptimal. The use of `to_string` and `stoi` for digit manipulation within a loop introduces unnecessary overhead.

## Complexity
*   **Time Complexity:** $O(N \cdot (\log(\text{exponent}) + K))$, where $N$ is the number of elements and $K$ is the number of digits in the decoded number. The string conversion and substring operations are expensive compared to mathematical digit extraction.
*   **Space Complexity:** $O(K)$, due to the creation of strings representing the numbers.

## Efficiency Feedback
*   **Bottleneck:** Frequent heap allocations and string formatting (`to_string`, `substr`, `stoi`) inside the loop.
*   **Optimization:** Replace string operations with mathematical operations. The number of digits can be calculated using `log10` or repeated division, and the split point can be calculated using powers of 10. This avoids all string allocations and parsing overhead.

## Code Quality
*   **Readability:** Moderate. The logic is clear, but mixed concerns (decoding and modular exponentiation) make the core loop slightly cluttered.
*   **Structure:** Moderate. The `power` function is standard, but placing it inside the `Solution` class is standard for competitive programming. However, the logic inside `sumDecoded` is fragile (e.g., `stoi` will throw an exception if the number exceeds `INT_MAX`).
*   **Naming:** Good. `ans`, `width`, `nums`, and `power` are conventional and descriptive.
*   **Concrete Improvements:**
    1.  **Safety:** Use `stoll` instead of `stoi` to prevent overflows if the decoded segment exceeds 32 bits.
    2.  **Performance:** Remove `to_string` and `stoi`. Use arithmetic:
        ```cpp
        // Example to replace string logic:
        long long d = nums[i] / 10;
        int width = nums[i] % 10;
        long long divisor = pow(10, (number_of_digits_in_d - width));
        long long x = d / divisor;
        long long y = d % divisor;
        ```
    3.  **Correctness:** Ensure `mod` is used consistently as a `const` or `static constexpr` member to avoid redeclaration.

---

# Question Revision
### Revision Report: Sum of Decoded Numbers

**Pattern:** Stack / Recursion (String Parsing)

**Brute Force:**
Recursively expand the encoded string by repeatedly finding the innermost bracketed expression, multiplying the inner content by the preceding integer, and replacing the substring until no brackets remain. 
*   **Time Complexity:** $O(S^k)$ where $S$ is the string length and $k$ is the nesting depth.
*   **Space Complexity:** $O(S^k)$ for the intermediate string storage.

**Optimal Approach:**
Use a **Stack** to store the accumulated string and the repeat count. When encountering a digit, update the current multiplier. On `[`, push the current state to the stack and reset. On `]`, pop the state, multiply the current string by the popped count, and append it to the popped prefix.
*   **Time Complexity:** $O(n)$, where $n$ is the length of the expanded output string.
*   **Space Complexity:** $O(m + d)$, where $m$ is the number of nested brackets and $d$ is the number of digits.

**The 'Aha' Moment:**
When a problem involves nested structures where inner operations must be fully resolved before outer operations can proceed, a stack is the natural way to track the "parent" state during depth-first traversal.

**Summary:**
Whenever you see nested encoded patterns, treat the stack as a way to "pause" the outer work while you resolve the inner bracketed context.

---