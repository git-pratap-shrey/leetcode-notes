--- title: "Letter Combinations of a Phone Number" slug: letter-combinations-of-a-phone-number date: "2026-07-04" ---  # My Solution ~~~class Solution {
public:
    void Pn(vector<string>& ans, string& temp,int idx,string& digits,map<int,string>& letter){
        if(idx==digits.size()){
            ans.push_back(temp);
            return;
        }
        for(int i=0 ; i<letter[digits[idx]-'0'].size() ; i++){
            temp.push_back(letter[digits[idx]-'0'][i]);
            Pn(ans,temp,idx+1,digits,letter);
            temp.pop_back();
        }
    }

    vector<string> letterCombinations(string digits) {
        map<int,string>letter={
                                {2,"abc"},
                                {3,"def"},
                                {4,"ghi"},
                                {5,"jkl"},
                                {6,"mno"},
                                {7,"pqrs"},
                                {8,"tuv"},
                                {9,"wxyz"}
        };
        vector<string>ans;
        string temp;
        Pn(ans,temp,0,digits,letter);
        return ans;
    }
}; - cpp~~~  # Submission Review ## Approach
- **Technique**: Backtracking (Recursive Depth-First Search).
- **Optimality**: Optimal. It generates every valid combination exactly once.

## Complexity
- **Time Complexity**: $O(4^N \cdot N)$, where $N$ is the length of the input string. $4^N$ represents the maximum number of combinations (for digits 7 and 9), and $N$ is the cost of copying the `temp` string into the result vector.
- **Space Complexity**: $O(N)$ for the recursion stack and the temporary string (excluding the output list).

## Efficiency Feedback
- **Suboptimal Lookup**: Using `std::map<int, string>` introduces $O(\log K)$ overhead per lookup. A fixed-size array or `std::vector<string>` would provide $O(1)$ access.
- **Redundant Operations**: The expression `letter[digits[idx]-'0']` is evaluated twice per loop iteration. Storing this in a local reference would reduce map lookups.
- **Edge Case Bug**: If `digits` is an empty string, the code returns `[""]` instead of `[]` because the base case `idx == digits.size()` is met immediately.

## Code Quality
- **Readability**: Moderate. The logic is clear, but naming is cryptic.
- **Structure**: Good. Clear separation between the recursive helper and the main function.
- **Naming**: Poor. 
    - `Pn`: Non-descriptive name for a recursive function.
    - `letter`: Vague name for a mapping object.
- **Concrete Improvements**:
    - Change `map<int, string>` to `string mapping[] = {"", "", "abc", ...}`.
    - Add a guard clause: `if (digits.empty()) return {};`.
    - Rename `Pn` to `backtrack` or `generateCombinations`.
    - Cache the current digit's string: `string& currentLetters = letter[digits[idx]-'0'];`.  ---  # Question Revision ### Letter Combinations of a Phone Number

**Pattern:** Backtracking / DFS

**Brute Force:** Use nested loops to iterate through letter sets. This is impractical because the number of digits (and thus the number of required loops) is dynamic.

**Optimal Approach:** 
Implement a recursive backtracking function that builds a combination character by character. For each digit in the input, iterate through its corresponding letters in the mapping, append a letter to the current path, and recurse to the next digit. When the path length equals the input length, add the result to the output list.

*   **Time Complexity:** $O(4^n \cdot n)$ — where $n$ is the length of the input string; $4^n$ represents the maximum combinations (for digits 7 and 9), and $n$ is for string construction.
*   **Space Complexity:** $O(n)$ — the depth of the recursion stack.

**The 'Aha' Moment:** The requirement to "generate all possible combinations" from a variable-length input signals a state-space tree that must be explored via backtracking.

**Summary:** Map digits to letters and use recursion to compute the Cartesian product of the letter sets.  ---