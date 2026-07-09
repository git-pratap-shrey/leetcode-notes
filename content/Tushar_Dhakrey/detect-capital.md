--- title: "Detect Capital" slug: detect-capital date: "2026-07-01" ---  # My Solution ~~~class Solution {
    public boolean detectCapitalUse(String word) {
        int upper = 0;
        for(int i=0;i<word.length();i++){
            if(Character.isUpperCase(word.charAt(i))){
                upper++;
            }
        }
        return upper==0 || upper==word.length() || (upper==1 && Character.isUpperCase(word.charAt(0)));
    }
} - java~~~  # Submission Review ## Approach
- **Technique**: Counting/Case Analysis. The solution counts the total number of uppercase characters and validates them against the three permissible rules (all lowercase, all uppercase, or only the first letter uppercase).
- **Optimality**: Optimal. It requires a single pass over the string to gather necessary information.

## Complexity
- **Time Complexity**: $O(n)$, where $n$ is the length of the string.
- **Space Complexity**: $O(1)$, as only a single integer counter is used regardless of input size.

## Efficiency Feedback
- **Runtime**: The runtime is minimal. 
- **Potential Optimization**: One could implement an "early exit" strategy (e.g., returning `false` as soon as a rule is violated), but for typical string lengths in this problem, the current linear scan is efficient and cleaner.

## Code Quality
- **Readability**: Good. The logic is concise and maps directly to the problem requirements.
- **Structure**: Good. The separation between the data collection (loop) and the logic evaluation (return statement) is clear.
- **Naming**: Good. `upper` and `word` are descriptive.
- **Improvements**: No significant improvements needed. The use of `Character.isUpperCase()` is the idiomatic Java approach.  ---  # Question Revision ### Detect Capital

**Pattern**: String Manipulation / Case Validation

**Brute Force**: Check if the word matches any of the three valid patterns (all uppercase, all lowercase, or first-letter uppercase) using separate conditional passes or built-in string methods.

**Optimal Approach**: 
Count the total number of uppercase letters in the string. A word is valid if:
1. `count == n` (All uppercase)
2. `count == 0` (All lowercase)
3. `count == 1` AND the first character is uppercase.

- **Time Complexity**: $O(n)$
- **Space Complexity**: $O(1)$

**The 'Aha' Moment**: Validity is determined entirely by the total count of uppercase letters and the identity of the first character.

**Summary**: Valid capitalizations occur only when uppercase counts are $0$, $n$, or $1$ (provided the first letter is the uppercase one).  ---