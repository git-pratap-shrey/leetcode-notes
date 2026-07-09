--- title: "Longest Palindromic Substring" slug: longest-palindromic-substring date: "2026-06-24" ---  # My Solution ~~~class Solution {
public:
    string solve(string s, int l, int r){
        while (l>=0 && r<s.size() && s[l]==s[r]){
            l--;
            r++;
        }
        return s.substr(l+1,r-l-1);
    }
    string longestPalindrome(string s) {
        string ans="";
        for (int i=0;i<s.size();i++){
            string odd= solve(s,i,i);
            string even= solve(s,i,i+1);
            if (odd.length() > ans.length()) ans=odd;
            if (even.length() > ans.length()) ans=even;
        }
        return ans;
    }
}; - cpp~~~  # Submission Review ## Approach
- **Technique**: Expand Around Center. The algorithm iterates through every possible center (single character for odd lengths, gap between characters for even lengths) and expands outwards as long as the characters match.
- **Optimality**: Suboptimal in terms of time complexity relative to Manacher's Algorithm ($O(N)$), but standard for a basic $O(N^2)$ approach.

## Complexity
- **Time Complexity**: $O(N^2)$. For each of the $N$ indices, the `solve` function expands up to $N$ times.
- **Space Complexity**: $O(N)$. While the algorithm uses constant extra space for pointers, the current implementation frequently creates and stores temporary strings via `s.substr()`.

## Efficiency Feedback
- **Major Bottleneck**: The `solve` function returns a `string` object. This causes $O(N)$ memory allocation and copying on every single expansion step, significantly increasing the constant factor of the runtime.
- **Optimization**: Modify `solve` to return the length of the palindrome or the start/end indices. Perform the `s.substr()` operation exactly **once** at the end of the `longestPalindrome` function using the tracked maximum length and starting index.

## Code Quality
- **Readability**: Good. The logic is clean and easy to follow.
- **Structure**: Moderate. Separating the expansion logic into a helper function is correct, but the data flow (returning strings) is inefficient.
- **Naming**: Moderate. `solve` is too generic; a name like `expandAroundCenter` would be more descriptive.
- **Concrete Improvements**:
    - Change `solve` return type from `string` to `int` (length).
    - Store `maxLen` and `startIdx` as integers instead of updating a result string `ans` in every iteration.
    - Use `const string& s` in `solve` to avoid copying the input string if it were passed by value (though here it is passed by value in the provided code, which adds another $O(N)$ overhead per call).  ---  # Question Revision ### Longest Palindromic Substring

**Pattern:** Two Pointers (Expand Around Center)

**Brute Force:** Check every possible substring ($O(n^2)$ substrings) and verify if each is a palindrome ($O(n)$), resulting in $O(n^3)$ time complexity.

**Optimal Approach:**
- **Logic:** Since a palindrome is symmetric, treat every character (for odd length) and every gap between characters (for even length) as a potential center. Expand outwards using two pointers as long as the characters match and boundaries are not exceeded.
- **Time Complexity:** $O(n^2)$
- **Space Complexity:** $O(1)$

**The 'Aha' Moment:** Palindromes are defined by their symmetry, meaning you can find the longest one by growing outward from its center rather than scanning for boundaries.

**Summary:** Treat every index and every gap between indices as a potential center and expand outward to find the maximum length.  ---