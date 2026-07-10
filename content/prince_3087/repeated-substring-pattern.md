---
title: "Repeated Substring Pattern"
slug: repeated-substring-pattern
date: "2026-06-10"

---

# My Solution
~~~
class
 Solution {
public:
    bool repeatedSubstringPattern(string s) {
        int n = s.size();

        for (int len = 1; len <= n / 2; len++) {

            if (n % len != 0)
                continue;

            string sub = s.substr(0, len);
            string temp = "";

            while (temp.size() < n) {
                temp += sub;
            }

            if (temp == s)
                return true;
        }

        return false;
    }
};
~~~

# Submission Review

## Approach

- **Technique**: Brute-force simulation. The code iterates through all possible divisor lengths of the string, constructs a repeated string, and compares it to the original.
- **Optimality**: Suboptimal. While it passes for small constraints, the optimal approach uses the KMP algorithm (prefix function) or the string concatenation trick `(s + s).find(s, 1)` to achieve linear time complexity.

## Complexity

- **Time Complexity**: $O(d(n) \cdot n)$, where $d(n)$ is the number of divisors of $n$. For each divisor, the code performs string concatenation and comparison, both taking $O(n)$.
- **Space Complexity**: $O(n)$ to store the constructed `temp` string.

## Efficiency Feedback

- **String Concatenation**: Building the `temp` string using `+=` in a loop is inefficient due to multiple reallocations.
- **Unnecessary Allocations**: `s.substr(0, len)` and the `temp` string create unnecessary memory overhead.
- **Optimization**: Instead of building a new string, the code could simply check if `s[i] == s[i % len]` for all $i$ from $len$ to $n-1$. This would reduce space complexity to $O(1)$ and avoid costly string operations.

## Code Quality

- **Readability**: Good. The logic is straightforward and easy to follow.
- **Structure**: Good. The use of `continue` for non-divisors keeps the nesting level low.
- **Naming**: Moderate. `sub` and `temp` are generic; `pattern` and `constructed` would be more descriptive.
- **Concrete Improvement**: Replace the `while` loop and `temp` string with a simple index-based comparison loop.

---

# Question Revision

#

## Repeated Substring Pattern

**Pattern:** String Manipulation / KMP (LPS Array)

**Brute Force:** 
Iterate through all possible substring lengths $L$ from $1$ to $n/2$. If $n$ is divisible by $L$, check if the prefix of length $L$ repeated $n/L$ times matches the original string.
- **Time:** $O(n \sqrt{n})$ or $O(n \cdot \text{divisors of } n)$
- **Space:** $O(n)$ to store the constructed string.

**Optimal Approach (String Concatenation Trick):**
If a string $s$ is composed of a repeated pattern, then $s$ is a rotation of itself. By creating a new string $T = s + s$ and removing the very first and very last characters, $s$ will still appear as a substring within $T$ if and only if $s$ is periodic.
- **Time:** $O(n)$ (depending on the underlying string search implementation)
- **Space:** $O(n)$

**Optimal Approach (KMP/LPS):**
Compute the Longest Prefix Suffix (LPS) array. The length of the smallest potential repeating unit is $k = n - LPS[n-1]$. If $n \% k == 0$ and $LPS[n-1] > 0$, the string is repeated.
- **Time:** $O(n)$
- **Space:** $O(n)$

**The 'Aha' Moment:** 
If a string is periodic, shifting it by its smallest period length results in the exact same string.

**Summary:** 
Check if $s$ is a substring of $(s + s)[1:-1]$.

---
