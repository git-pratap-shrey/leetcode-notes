--- title: "Find the Difference" slug: find-the-difference date: "2026-07-07" ---  # My Solution ~~~class Solution {
public:
    char findTheDifference(string s, string t) {
        vector<int> hash(26);

        int i;
        for(i = 0; i < s.size(); i++){
            hash[s[i] - 'a']++;
            hash[t[i] - 'a']--;
        }

        hash[t[i]-'a']--;   

        for(i = 0; i < 26; i++){
            // cout<<hash[i];
            if(hash[i] == -1){
                return 'a'+i;
            }
        }
        return 'a';
    }
}; - cpp~~~  # Submission Review ## Approach
- **Technique**: Frequency Counting (Hashing).
- **Optimality**: Optimal. The solution correctly identifies the extra character by calculating the net difference in character counts between strings $s$ and $t$.

## Complexity
- **Time Complexity**: $O(N)$, where $N$ is the length of string $s$. The code performs one pass through the strings and one constant-time pass (26 iterations) through the hash array.
- **Space Complexity**: $O(1)$. The `vector<int> hash(26)` uses a fixed amount of space regardless of the input string length.

## Efficiency Feedback
- **Memory**: Low. However, using `std::vector` involves heap allocation. Replacing it with a stack-allocated array `int hash[26] = {0};` would be slightly more efficient.
- **Runtime**: Efficient. The logic of incrementing for $s$ and decrementing for $t$ effectively isolates the difference in a single pass.

## Code Quality
- **Readability**: Moderate. The logic is straightforward, but the handling of the final character of $t$ is somewhat abrupt.
- **Structure**: Moderate. The use of a single loop for both strings is clever, but relies on the fact that $t$ is exactly one character longer than $s$.
- **Naming**: Moderate. `hash` is a generic name; `counts` or `freq` would be more descriptive.
- **Concrete Improvements**:
    - **Remove Dead Code**: Delete the commented-out `cout` statement.
    - **Avoid Manual Indexing**: Instead of using `i` outside the loop to access the last character of $t$, use `t.back()` or a separate loop for clarity.
    - **Use Fixed-size Array**: Use `int hash[26] = {0};` instead of `vector<int>`.
    - **Const Correctness**: Input strings should ideally be passed by `const string&` (though this is the provided signature in LeetCode-style problems).  ---  # Question Revision ### Find the Difference

**Pattern:** Bit Manipulation (XOR)

**Brute Force:** Sort both strings and iterate through them linearly; the first character mismatch or the remaining character at the end of string `t` is the result.
- Time: $O(n \log n)$
- Space: $O(1)$ or $O(n)$ depending on sorting implementation.

**Optimal Approach:** XOR all characters from both `s` and `t`. Since $x \oplus x = 0$ and $x \oplus 0 = x$, all identical characters cancel each other out, leaving only the extra character.
- Time: $O(n)$
- Space: $O(1)$

**The 'Aha' Moment:** The prompt describes a set of pairs with exactly one outlier, which is the classic signature for an XOR solution.

**Summary:** XOR all characters from both strings to isolate the single unmatched character.  ---