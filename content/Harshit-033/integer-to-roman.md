---
title: "Integer to Roman"
slug: integer-to-roman
date: "2026-09-29"
---

# My Solution
~~~cpp
class Solution{
public:
    string intToRoman(int num){
        vector<int> value={1000,900,500,400,100,90,50,40,10,9,5,4,1};
        vector<string> roman={"M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"};
        string ans="";
        for(int i=0;i<value.size();i++){
            while(num>=value[i]){
                ans+=roman[i];
                num-=value[i];
            }
        }
        return ans;
    }
};
~~~

# Submission Review
## Approach
- **Technique:** Greedy algorithm using a mapping of integer values to Roman symbols (including subtractive pairs like "CM" and "IV").
- **Optimality:** Optimal. This is the standard approach for this problem as it processes the number from largest to smallest denomination.

## Complexity
- **Time Complexity:** $O(1)$. Although there are nested loops, the number of Roman symbols is fixed (13), and the maximum length of the output string is bounded by a small constant (for $num \le 3999$).
- **Space Complexity:** $O(1)$. The mapping vectors are of constant size, and the auxiliary space for the result string is also bounded.

## Efficiency Feedback
- **Memory Allocation:** The `value` and `roman` vectors are reconstructed on the stack every time the function is called. Declaring them as `static const` would avoid repeated allocations.
- **String Concatenation:** `ans += roman[i]` is efficient here because the resulting string is very short, meaning reallocations are minimal.

## Code Quality
- **Readability:** Good. The logic is straightforward and easy to follow.
- **Structure:** Good. The logic is contained within a single pass through the mapping.
- **Naming:** Good. Variable names (`value`, `roman`, `ans`) clearly describe their purpose.
- **Concrete Improvements:** 
    - Change `vector<int>` and `vector<string>` to `static const` or `constexpr` arrays to improve performance.
    - Use `std::string_view` for the Roman symbols to avoid unnecessary string object overhead.

---

# Question Revision
### Integer to Roman

**Pattern:** Greedy / Mapping

**Brute Force:** Use a series of nested `if-else` or `switch` statements to manually handle every possible digit (0-9) for each decimal place (thousands, hundreds, tens, and ones).

**Optimal Approach:** Create a predefined mapping of integer values to their Roman symbols, including the special subtractive cases (e.g., 900 $\rightarrow$ CM, 40 $\rightarrow$ XL) in descending order. Iterate through this map, appending the symbol to the result and subtracting the value from the total until the remaining integer is zero.
- **Time Complexity:** $O(1)$ (The input is capped at 3999, resulting in a constant number of iterations).
- **Space Complexity:** $O(1)$ (The mapping size is fixed regardless of the input).

**The 'Aha' Moment:** Treating the subtractive combinations (like IV and CM) as distinct primary symbols allows you to use a simple greedy subtraction loop.

**Summary:** Use a descending map of symbols and values to greedily consume the integer from largest to smallest.

---