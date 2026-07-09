--- title: "Repeated Substring Pattern" slug: repeated-substring-pattern date: "2026-06-24" ---  # My Solution ~~~class Solution {
public:
    bool repeatedSubstringPattern(string s) {
        int size = s.size();
        if(size == 1){
            return false;
        }
        
        string subString;
        string temp;

        for(int i = 0; i < (size+1)/2; i++){
            subString.push_back(s[i]);

            if(size % (i+1) == 0){
                temp = "";
                for(int j = 0; j < size/(i+1); j++){
                    temp += subString;
                }

                if(temp == s){
                    return true;
                }
            }
        }
        return false;
    }
}; - cpp~~~  # Submission Review ## Approach
- **Technique**: Brute-force search over possible prefix lengths. The code iterates through all prefixes that could potentially be the repeating unit (lengths that are divisors of the total string length) and reconstructs the string to verify the pattern.
- **Optimality**: Suboptimal. While it passes for moderate constraints, the optimal approach uses the **KMP algorithm (Prefix Function)** or a **String Concatenation trick** (`(s + s).substr(1, 2*n - 2).find(s) != string::npos`), which runs in $O(N)$ time.

## Complexity
- **Time Complexity**: $O(d(N) \cdot N)$, where $N$ is the length of the string and $d(N)$ is the number of divisors of $N$. In the worst case, the string reconstruction and comparison take $O(N)$ for every divisor found.
- **Space Complexity**: $O(N)$ to store the reconstructed `temp` string.

## Efficiency Feedback
- **Bottleneck**: The repeated string construction `temp += subString` and the subsequent string comparison `temp == s` are expensive. 
- **Optimization**: Instead of building a new string, the code could verify the pattern in-place by comparing blocks of the string using `std::string_view` or a nested loop: `s[j] == s[j % len]`. This would eliminate the $O(N)$ space allocation per divisor.

## Code Quality
- **Readability**: Moderate. The logic is straightforward, but the structure is slightly verbose.
- **Structure**: Moderate. The `if(size == 1)` check is redundant as the loop bounds and divisor logic would naturally handle it, though it serves as a quick exit.
- **Naming**: Poor. `temp` and `subString` are generic; names like `pattern` and `candidate` would be more descriptive.
- **Improvements**:
    - Use `s.substr()` or a pointer-based comparison instead of building `temp` via `+=` in a loop.
    - Reserve space for `temp` using `temp.reserve(size)` to prevent multiple reallocations during the concatenation loop.  ---  # Question Revision ### Revision Report: Repeated Substring Pattern

**Pattern:** String Manipulation / Periodicity

**Brute Force:** 
Iterate through all possible prefix lengths $l$ from $1$ to $n/2$. If $n$ is divisible by $l$, check if repeating the prefix of length $l$ exactly $n/l$ times reconstructs the original string.
- **Time:** $O(n \sqrt{n})$ or $O(n^2)$ depending on divisor count.
- **Space:** $O(n)$ to store the constructed string.

**Optimal Approach (String Rotation Trick):**
Concatenate the string with itself ($s + s$) and remove the first and last characters of the resulting string. If the original string $s$ is still found as a substring within this modified string, it must be composed of a repeated pattern.
- **Time:** $O(n)$ (assuming efficient substring search like KMP or built-in `contains`).
- **Space:** $O(n)$ to store the concatenated string.

**The 'Aha' Moment:** 
If a string is periodic, rotating it by its smallest period will eventually regenerate the original string.

**Summary:** 
A string is composed of a repeated pattern if it exists within $(s + s)[1:-1]$.  ---