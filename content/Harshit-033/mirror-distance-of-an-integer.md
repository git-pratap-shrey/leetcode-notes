---
title: "Mirror Distance of an Integer"
slug: mirror-distance-of-an-integer
date: "2026-10-16"
---

# My Solution
~~~cpp
class Solution {
public:
    int mirrorDistance(int n) {
        string s= to_string(n);
        reverse(s.begin(), s.end());
        int x=stoi(s);
        return abs(n-x);
        
    }
};
~~~

# Submission Review
## Approach
- **Technique**: String manipulation. The code converts the integer to a string, reverses it, converts it back to an integer, and calculates the absolute difference.
- **Optimality**: Suboptimal. While correct for small constraints, string conversions and memory allocations are slower than mathematical digit extraction.

## Complexity
- **Time Complexity**: $O(\log_{10} n)$ to process the digits of $n$.
- **Space Complexity**: $O(\log_{10} n)$ to store the string representation of $n$.

## Efficiency Feedback
- **Bottleneck**: Use of `to_string`, `reverse`, and `stoi` involves multiple heap allocations and passes over the data.
- **Optimization**: Use a while loop with modulo (`% 10`) and multiplication (`* 10`) to reverse the integer mathematically. This would reduce space complexity to $O(1)$ and eliminate string overhead.

## Code Quality
- **Readability**: Good. The logic is straightforward and easy to follow.
- **Structure**: Good. The function performs a linear sequence of transformations.
- **Naming**: Poor. Variable names `s` and `x` are generic; `reversedStr` and `reversedNum` would be more descriptive.
- **Concrete Improvements**: 
    - Replace string operations with mathematical reversal.
    - Add `#include <string>`, `#include <algorithm>`, and `#include <cmath>` to ensure the code is self-contained (though these are often implicit in competitive programming environments).

---

# Question Revision
# Revision Report: Mirror Distance of an Integer

- **Pattern**: String Manipulation / Basic Math
- **Brute Force**: Convert the integer to a string, reverse the string, convert it back to an integer, and calculate the absolute difference.
- **Optimal Approach**: 
    - Use string slicing (e.g., `str(num)[::-1]`) or a loop to reverse the digits.
    - Compute $|num - \text{reversed\_num}|$.
    - **Time Complexity**: $O(\log_{10} n)$ — where $n$ is the value of the integer (proportional to the number of digits).
    - **Space Complexity**: $O(\log_{10} n)$ — to store the string representation of the number.
- **The 'Aha' Moment**: The phrase "Mirror" in the context of an integer is a direct signal to perform a digit reversal.
- **Summary**: Mirror distance is simply the absolute difference between an integer and its reverse.

---