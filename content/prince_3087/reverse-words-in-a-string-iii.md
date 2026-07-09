--- title: "Reverse Words in a String III" slug: reverse-words-in-a-string-iii date: "2026-06-11" ---  # My Solution ~~~class Solution {
public:
    string reverseWords(string s) {
        stringstream ss(s);
        string token = "";
        string res = "";
        while(ss >> token){
            reverse(token.begin(),token.end());
            res = res + token + " ";

        }
        return res.substr(0 , res.length()-1);
        
    }
}; - cpp~~~  # Submission Review ## Approach
- **Technique**: String tokenization using `std::stringstream` and reversing individual tokens via `std::reverse`.
- **Optimality**: Suboptimal. While the logic is correct, the method of rebuilding the string is inefficient.

## Complexity
- **Time Complexity**: $O(N^2)$ in the worst case. Although the tokenization and reversal are $O(N)$, the expression `res = res + token + " "` creates a new string object in every iteration, leading to quadratic time complexity relative to the number of words/length of the string.
- **Space Complexity**: $O(N)$ to store the `stringstream` and the result string.

## Efficiency Feedback
- **Bottleneck**: The line `res = res + token + " "` is the primary performance killer. In C++, `s = s + t` allocates a new string and copies both `s` and `t` into it.
- **Optimization**: 
    - Use `res += token + " ";` or `res.append(token).append(" ");` to perform amortized $O(1)$ appends.
    - For maximum efficiency, perform the reversal **in-place** on the original string `s` using two pointers to identify word boundaries, reducing auxiliary space to $O(1)$.

## Code Quality
- **Readability**: Good. The logic is straightforward and easy to follow.
- **Structure**: Good. The flow is logical.
- **Naming**: Moderate. `res` is generic; `result` or `output` would be more descriptive.
- **Improvements**:
    - Avoid `res.substr(0, res.length()-1)` if the input string `s` could be empty, as this would lead to an out-of-bounds error or undefined behavior.
    - Replace the `stringstream` approach with a two-pointer approach to eliminate the overhead of stream objects.  ---  # Question Revision ### Reverse Words in a String III

**Pattern:** Two Pointers

**Brute Force:** 
Split the string into an array of words using whitespace, reverse each string in the array, and join them back together with spaces.

**Optimal Approach:**
Convert the string to a mutable character array. Iterate through the array to identify the start and end indices of each word. For every word found, use two pointers (left and right) to swap characters moving inward until the word is reversed.

*   **Time Complexity:** $O(n)$ where $n$ is the length of the string.
*   **Space Complexity:** $O(n)$ to store the character array (required for immutable strings).

**The 'Aha' Moment:** 
The need to reverse specific contiguous segments of a sequence without changing their relative positions is a textbook signal for the Two-Pointer swap technique.

**Summary:** Identify word boundaries and reverse each segment in place using two pointers.  ---