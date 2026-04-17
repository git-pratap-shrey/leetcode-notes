---
title: "Roman to Integer"
slug: roman-to-integer
date: "2026-04-04"
---

# My Solution
~~~cpp
class Solution {
public:
    int romanToInt(string s) {
 
        map<char, int> roman = {
            {'I', 1}, {'V', 5}, {'X', 10}, {'L', 50},
            {'C', 100}, {'D', 500}, {'M', 1000}
        };
        int total=0;
        for(int i=0;i<s.length();i++)
        {
            if(roman[s[i]]<roman[s[i+1]])
            {
                total-=roman[s[i]];
            }
            else
            {
                total+=roman[s[i]];
            }
        }
        return total;
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Single-pass iteration with a lookup table.
- **Optimality**: Optimal. The logic correctly implements the subtraction rule (if a smaller value precedes a larger value, subtract it).

## Complexity
- **Time Complexity**: $O(n \log k)$ where $n$ is the string length and $k$ is the number of unique Roman symbols (7). Because $k$ is small and constant, this is effectively $O(n)$.
- **Space Complexity**: $O(1)$ as the map size is constant regardless of input length.

## Efficiency Feedback
- **Map Choice**: Using `std::map` (a red-black tree) introduces logarithmic lookup overhead. An `std::unordered_map` or a simple `switch` statement/fixed-size array would reduce this to $O(1)$ per character.
- **Out-of-bounds Access**: The expression `roman[s[i+1]]` at the final index accesses the null terminator `\0`. Since `\0` is not in the map, `std::map` inserts it with a default value of `0`. While this happens to yield the correct result (last character is always added), it is an unintentional side effect of `std::map`'s `operator[]`.

## Code Quality
- **Readability**: Good. The logic is straightforward and easy to follow.
- **Structure**: Good.
- **Naming**: Moderate. `total` is clear, but `roman` is used for both the map and the values.
- **Improvements**:
    - Replace `std::map` with a `switch` statement or `std::unordered_map` for better performance.
    - Explicitly handle the last character or check `i + 1 < s.length()` to avoid relying on the map's default insertion of the null terminator.

---

# Question Revision
### Roman to Integer

**Pattern:** String Parsing / Greedy

**Brute Force:** 
Use string replacement to swap all six subtractive pairs (e.g., "IV" $\rightarrow$ "IIII", "XC" $\rightarrow$ "LXXXX") into their additive equivalents, then sum the values of all remaining characters.

**Optimal Approach:**
Iterate through the string and look ahead one character. If the current numeral's value is less than the next numeral's value, it is a subtractive case; subtract the current value from the total. Otherwise, add it.

- **Time Complexity:** $O(n)$
- **Space Complexity:** $O(1)$ (Fixed size map for 7 Roman characters)

**The 'Aha' Moment:** 
The subtractive rule is triggered exclusively when a smaller numeral precedes a larger one.

**Summary:** 
Traverse the string and subtract the current value if it's smaller than the next, otherwise add it.

---