--- title: "Decode String" slug: decode-string date: "2026-06-11" ---  # My Solution ~~~class Solution {
public:
    string decodeString(string s) {
        stack<int> countStack;
        stack<string> stringStack;

        string curr = "";
        int num = 0;

        for (int i = 0; i < s.size(); i++) {
            char ch = s[i];

            if (isdigit(ch)) {
                num = num * 10 + (ch - '0');
            }
            else if (ch == '[') {
                countStack.push(num);
                stringStack.push(curr);

                num = 0;
                curr = "";
            }
            else if (ch == ']') {
                int k = countStack.top();
                countStack.pop();

                string prev = stringStack.top();
                stringStack.pop();

                string temp = "";

                for (int j = 0; j < k; j++) {
                    temp += curr;
                }

                curr = prev + temp;
            }
            else {
                curr += ch;
            }
        }

        return curr;
    }
}; - cpp~~~  # Submission Review ## Approach
- **Technique**: Iterative parsing using two stacks (one for repetition counts and one for string fragments) to handle nested structures.
- **Optimality**: Optimal. This is the standard approach for decoding nested patterns, ensuring each character is processed a constant number of times relative to the final output length.

## Complexity
- **Time Complexity**: $O(L)$, where $L$ is the length of the decoded string. Each character of the final result is constructed once.
- **Space Complexity**: $O(L + D)$, where $D$ is the maximum nesting depth. The stacks store fragments and counts proportional to the depth, while the resulting string occupies $O(L)$.

## Efficiency Feedback
- **Runtime**: The logic is efficient. However, the loop `temp += curr` may cause multiple memory reallocations for very large values of `k`.
- **Optimization**: Using `temp.reserve(k * curr.size())` before the repetition loop would minimize reallocations and improve performance for large output strings.

## Code Quality
- **Readability**: Good. The logic flows naturally and follows a clear state-machine-like structure.
- **Structure**: Good. The use of separate stacks for integers and strings keeps the logic clean and avoids complex `std::variant` or `std::any` types.
- **Naming**: Good. Variables like `countStack`, `stringStack`, and `curr` are descriptive and appropriate.
- **Improvement**: 
    - Consider using `std::string::append` or `std::string(k, ' ')` patterns if available, though the current loop is clear.
    - Use `const auto& ch` or a range-based for loop (`for (char ch : s)`) to make the code more modern and concise.  ---  # Question Revision ### Decode String

**Pattern:** Stack

**Brute Force:** Repeatedly find the innermost `[...]` pair, decode it, and replace it in the original string until no brackets remain.

**Optimal Approach:** Use two stacks—one for integers (`countStack`) and one for strings (`stringStack`). Iterate through the string:
1. **Digit:** Calculate the full number (handle multi-digit numbers).
2. **`[`**: Push the current accumulated number and current string to their respective stacks; reset both.
3. **`]`**: Pop the multiplier and the previous string. Append the current string repeated `multiplier` times to the previous string.
4. **Character:** Append to the current string.

- **Time Complexity:** $O(n)$ where $n$ is the length of the decoded string.
- **Space Complexity:** $O(n)$ to store the stacks and the result.

**The 'Aha' Moment:** Nested brackets indicate a LIFO (Last-In, First-Out) structure, signaling that the innermost expression must be resolved before the outer one.

**Summary:** Use stacks to preserve the "outer" context (multiplier and prefix) while processing "inner" nested strings.  ---